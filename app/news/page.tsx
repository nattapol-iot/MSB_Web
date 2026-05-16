import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, AlertCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsCard, NewsHero } from "@/components/NewsCard";
import { fetchAllNews } from "@/lib/news";
import {
  newsCategories,
  type NewsCategory,
} from "@/data/newsSources";

export const revalidate = 21600; // 6h

export const metadata: Metadata = {
  title: "News — MSB Smart Solutions",
  description:
    "Latest news across Technology, AI, Automation, and Factory — curated daily from leading publishers.",
};

const VALID: NewsCategory[] = ["technology", "ai", "automation", "factory"];

type Props = {
  searchParams?: { category?: string };
};

export default async function NewsPage({ searchParams }: Props) {
  const raw = searchParams?.category;
  const category =
    raw && VALID.includes(raw as NewsCategory) ? (raw as NewsCategory) : undefined;

  const activeId = category ?? "all";
  const activeMeta =
    newsCategories.find((c) => c.id === activeId) ?? newsCategories[0];

  const items = await fetchAllNews({ category, limit: 36 });
  const [hero, ...rest] = items;

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-navy-100">
        <div className="absolute inset-0 bg-hero-radial" aria-hidden />
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="container-page relative py-12 sm:py-16">
          <span className="badge-soft">
            <Sparkles className="h-3.5 w-3.5 text-brand-blue" />
            Industry Newsroom · Auto-updated daily
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy-800 sm:text-4xl lg:text-5xl">
            Latest from{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              Technology, AI, Automation & Factory
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-navy-700/75">
            ข่าวล่าสุดจากสำนักข่าวชั้นนำทั่วโลก — เลือกหมวดที่สนใจเพื่อ
            อัพเดทเทรนด์ที่จะเปลี่ยนอุตสาหกรรมของคุณ
          </p>

          {/* Category filter */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {newsCategories.map((c) => {
              const active = c.id === activeId;
              const href =
                c.id === "all" ? "/news" : `/news?category=${c.id}`;
              return (
                <Link
                  key={c.id}
                  href={href}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "border-transparent bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-card"
                      : "border-navy-100 bg-white text-navy-700 hover:border-brand-blue/40 hover:text-brand-blue"
                  }`}
                >
                  {c.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section">
        <div className="container-page">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="h-section">{activeMeta.label}</h2>
              <p className="text-muted mt-1 text-sm sm:text-base">
                {activeMeta.description}
              </p>
            </div>
            <div className="hidden text-right sm:block">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-navy-700/55">
                Showing
              </div>
              <div className="text-sm font-bold text-navy-800">
                {items.length} stories
              </div>
            </div>
          </div>

          {items.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="flex flex-col gap-8">
              {hero && <NewsHero item={hero} />}
              {rest.length > 0 && (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((item) => (
                    <NewsCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>
          )}

          <p className="mt-12 text-center text-xs text-navy-700/55">
            Headlines aggregated under fair use. All trademarks and copyrights
            belong to their respective publishers. Click any story to read it
            on the original site.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center">
      <AlertCircle className="mx-auto h-8 w-8 text-amber-600" />
      <h3 className="mt-3 text-lg font-bold text-navy-800">
        No stories available right now
      </h3>
      <p className="mt-1 text-sm text-navy-700/70">
        We couldn&apos;t reach our news sources. Please check back in a few
        minutes.
      </p>
    </div>
  );
}
