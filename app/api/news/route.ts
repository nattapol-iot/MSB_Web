import { NextResponse } from "next/server";
import { fetchAllNews } from "@/lib/news";
import type { NewsCategory } from "@/data/newsSources";

export const runtime = "nodejs";
export const revalidate = 14400; // 4h

const VALID: NewsCategory[] = ["technology", "ai", "automation", "factory"];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const raw = searchParams.get("category");
  const category =
    raw && VALID.includes(raw as NewsCategory) ? (raw as NewsCategory) : undefined;
  const limit = Math.min(
    Math.max(parseInt(searchParams.get("limit") ?? "30", 10) || 30, 1),
    100
  );

  const items = await fetchAllNews({ category, limit });
  return NextResponse.json(
    { ok: true, count: items.length, items },
    {
      headers: {
        "Cache-Control": "public, s-maxage=14400, stale-while-revalidate=86400",
      },
    }
  );
}
