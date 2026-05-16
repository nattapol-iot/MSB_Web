import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { NewsCard } from "./NewsCard";
import { fetchAllNews } from "@/lib/news";

export async function NewsPreview() {
  const items = await fetchAllNews({ limit: 3 });
  if (items.length === 0) return null;

  return (
    <section className="section bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div className="container-page">
        <div className="mb-10 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="h-eyebrow">
              <Newspaper className="mr-1 inline h-3.5 w-3.5" />
              Industry Newsroom
            </span>
            <h2 className="h-section mt-2 max-w-2xl">
              Latest from the industry
            </h2>
            <p className="text-muted mt-2 max-w-xl text-sm sm:text-base">
              ข่าวล่าสุดจาก Technology · AI · Automation · Factory — อัพเดททุกวัน
            </p>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 rounded-full border border-navy-100 bg-white px-4 py-2 text-sm font-semibold text-navy-800 transition hover:border-brand-blue/40 hover:text-brand-blue"
          >
            View all news
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
