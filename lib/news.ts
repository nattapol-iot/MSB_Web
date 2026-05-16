/**
 * News aggregator — fetches & parses RSS/Atom feeds from curated sources.
 * Runs server-side only (Next.js Route Handler / Server Component).
 *
 * Caching strategy:
 *  - Per-feed: Next.js `fetch` revalidate (4h) — shared across requests
 *  - Page-level: ISR `revalidate` (6h) on the consuming page
 */

import { XMLParser } from "fast-xml-parser";
import {
  newsSources,
  type NewsCategory,
  type NewsSource,
} from "@/data/newsSources";

export type NewsItem = {
  id: string;
  title: string;
  description: string;
  url: string;
  source: string;
  sourceId: string;
  category: NewsCategory;
  publishedAt: string; // ISO
  thumbnail?: string;
};

const FEED_REVALIDATE_SECONDS = 60 * 60 * 4; // 4 hours
const FETCH_TIMEOUT_MS = 8000;

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  trimValues: true,
  removeNSPrefix: true,
});

/* ============================ Helpers ============================ */

function stripHtml(input: string): string {
  if (!input) return "";
  return input
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text: string, max = 200): string {
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

/** Hash a string to a stable id (small, non-cryptographic). */
function hashId(input: string): string {
  let h = 5381;
  for (let i = 0; i < input.length; i++) {
    h = (h * 33) ^ input.charCodeAt(i);
  }
  return (h >>> 0).toString(36);
}

function asArray<T>(value: T | T[] | undefined | null): T[] {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}

function pickText(node: unknown): string {
  if (node == null) return "";
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (typeof node === "object") {
    const obj = node as Record<string, unknown>;
    if (typeof obj["#text"] === "string") return obj["#text"] as string;
    if (typeof obj["@_href"] === "string") return obj["@_href"] as string;
  }
  return "";
}

function pickLink(node: unknown): string {
  if (node == null) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) {
    // Atom: prefer rel="alternate"
    const alt = node.find(
      (l) =>
        l && typeof l === "object" && (l as Record<string, unknown>)["@_rel"] === "alternate"
    );
    if (alt) return pickLink(alt);
    return pickLink(node[0]);
  }
  if (typeof node === "object") {
    const obj = node as Record<string, unknown>;
    if (typeof obj["@_href"] === "string") return obj["@_href"] as string;
    if (typeof obj["#text"] === "string") return obj["#text"] as string;
  }
  return "";
}

function pickImage(item: Record<string, unknown>): string | undefined {
  // Try common image locations across RSS / Atom / media:* extensions
  const candidates = [
    (item as Record<string, unknown>).enclosure,
    (item as Record<string, unknown>)["media:thumbnail"],
    (item as Record<string, unknown>)["media:content"],
    (item as Record<string, unknown>).thumbnail,
    (item as Record<string, unknown>).image,
  ];
  for (const c of candidates) {
    if (!c) continue;
    if (typeof c === "string") return c;
    if (Array.isArray(c)) {
      const first = c[0];
      if (typeof first === "string") return first;
      if (typeof first === "object" && first) {
        const url = (first as Record<string, unknown>)["@_url"];
        if (typeof url === "string") return url;
      }
    }
    if (typeof c === "object") {
      const url = (c as Record<string, unknown>)["@_url"];
      if (typeof url === "string") return url;
    }
  }
  // Fallback: extract from description HTML
  const desc =
    (item.description as string) ||
    (item["content:encoded"] as string) ||
    (item.summary as string) ||
    "";
  const m = typeof desc === "string" ? desc.match(/<img[^>]+src=["']([^"']+)["']/i) : null;
  return m ? m[1] : undefined;
}

function parseDate(value: unknown): string {
  if (!value) return new Date().toISOString();
  const str = typeof value === "string" ? value : String(value);
  const t = Date.parse(str);
  return Number.isNaN(t) ? new Date().toISOString() : new Date(t).toISOString();
}

/* ============================ Fetch ============================ */

async function fetchFeed(source: NewsSource): Promise<NewsItem[]> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(source.url, {
      signal: controller.signal,
      // Next.js fetch caching — same URL is shared across requests
      next: { revalidate: FEED_REVALIDATE_SECONDS, tags: ["news"] },
      headers: {
        // Some publishers block default Node UA — pretend to be a normal feed reader
        "User-Agent":
          "Mozilla/5.0 (compatible; MSBNewsBot/1.0; +https://msbsmartsolutions.com)",
        Accept: "application/rss+xml, application/atom+xml, application/xml;q=0.9, */*;q=0.8",
      },
    });
    if (!res.ok) {
      console.warn(`[news] ${source.id} returned ${res.status}`);
      return [];
    }
    const xml = await res.text();
    const parsed = parser.parse(xml) as Record<string, unknown>;

    // RSS 2.0:  rss.channel.item[]
    // Atom 1.0: feed.entry[]
    const channel =
      ((parsed.rss as Record<string, unknown>)?.channel as Record<string, unknown>) ||
      (parsed.feed as Record<string, unknown>) ||
      {};
    const rawItems = asArray<Record<string, unknown>>(
      (channel.item as Record<string, unknown>[]) ||
        (channel.entry as Record<string, unknown>[]) ||
        []
    );

    return rawItems
      .map((raw): NewsItem | null => {
        const title = stripHtml(pickText(raw.title));
        const link = pickLink(raw.link) || pickText(raw.guid);
        if (!title || !link) return null;

        const rawDescription =
          (typeof raw.description === "string" ? raw.description : "") ||
          (typeof raw.summary === "string" ? raw.summary : "") ||
          (typeof raw["content:encoded"] === "string"
            ? (raw["content:encoded"] as string)
            : "") ||
          (typeof raw.content === "string" ? raw.content : "") ||
          (typeof raw.content === "object" && raw.content
            ? pickText(raw.content)
            : "");

        const description = truncate(stripHtml(rawDescription), 220);

        const pubDate = parseDate(raw.pubDate || raw.published || raw.updated || raw.date);

        return {
          id: hashId(`${source.id}:${link}`),
          title,
          description,
          url: link,
          source: source.name,
          sourceId: source.id,
          category: source.category,
          publishedAt: pubDate,
          thumbnail: pickImage(raw),
        };
      })
      .filter((x): x is NewsItem => x !== null);
  } catch (err) {
    console.warn(`[news] ${source.id} failed:`, (err as Error).message);
    return [];
  } finally {
    clearTimeout(timeout);
  }
}

/* ============================ Public API ============================ */

export async function fetchAllNews(options?: {
  category?: NewsCategory;
  limit?: number;
  perSource?: number;
}): Promise<NewsItem[]> {
  const { category, limit = 60, perSource = 6 } = options ?? {};
  const sources = category
    ? newsSources.filter((s) => s.category === category)
    : newsSources;

  const settled = await Promise.allSettled(sources.map(fetchFeed));
  const items = settled
    .flatMap((r) => (r.status === "fulfilled" ? r.value : []))
    .map((item, _, all) => {
      // limit per-source after grouping
      return item;
    });

  // limit per-source
  const groupedBySource = new Map<string, NewsItem[]>();
  for (const item of items) {
    const arr = groupedBySource.get(item.sourceId) ?? [];
    if (arr.length < perSource) arr.push(item);
    groupedBySource.set(item.sourceId, arr);
  }

  // dedupe by URL (some feeds republish)
  const seen = new Set<string>();
  const merged: NewsItem[] = [];
  for (const arr of groupedBySource.values()) {
    for (const item of arr) {
      if (seen.has(item.url)) continue;
      seen.add(item.url);
      merged.push(item);
    }
  }

  merged.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return merged.slice(0, limit);
}

/** Format a publish date as a short relative string (server-safe / locale-stable). */
export function formatRelative(iso: string): string {
  const now = Date.now();
  const t = new Date(iso).getTime();
  const diff = Math.max(0, now - t);
  const min = Math.floor(diff / 60_000);
  if (min < 1) return "just now";
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const d = Math.floor(hr / 24);
  if (d < 7) return `${d}d ago`;
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
