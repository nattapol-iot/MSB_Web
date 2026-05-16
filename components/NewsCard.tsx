import { ArrowUpRight, Newspaper } from "lucide-react";
import {
  categoryAccent,
  categoryLabel,
  type NewsCategory,
} from "@/data/newsSources";
import { formatRelative, type NewsItem } from "@/lib/news";

export function CategoryBadge({
  category,
  className = "",
}: {
  category: NewsCategory;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-gradient-to-r ${categoryAccent[category]} px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-sm ${className}`}
    >
      {categoryLabel[category]}
    </span>
  );
}

function Thumbnail({ item }: { item: NewsItem }) {
  if (item.thumbnail) {
    return (
      // Use plain <img> — third-party domains aren't whitelisted in next.config
      // and would require runtime image optimization config per domain.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={item.thumbnail}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
      />
    );
  }
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${categoryAccent[item.category]}`}
      aria-hidden
    >
      <Newspaper className="h-12 w-12 text-white/70" strokeWidth={1.6} />
    </div>
  );
}

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-soft"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-navy-50">
        <Thumbnail item={item} />
        <div className="absolute left-3 top-3">
          <CategoryBadge category={item.category} />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-navy-700/55">
          <span className="truncate">{item.source}</span>
          <span aria-hidden>·</span>
          <span>{formatRelative(item.publishedAt)}</span>
        </div>
        <h3 className="line-clamp-3 text-[15px] font-bold leading-snug text-navy-800 transition group-hover:text-brand-blue">
          {item.title}
        </h3>
        {item.description && (
          <p className="line-clamp-2 text-xs leading-relaxed text-navy-700/65">
            {item.description}
          </p>
        )}
        <div className="mt-auto flex items-center gap-1 pt-2 text-xs font-semibold text-brand-blue">
          Read story
          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </a>
  );
}

export function NewsHero({ item }: { item: NewsItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative grid overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft lg:grid-cols-[1.4fr_1fr]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-navy-50 lg:aspect-auto">
        <Thumbnail item={item} />
      </div>
      <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <CategoryBadge category={item.category} />
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-700/55">
            Featured · {formatRelative(item.publishedAt)}
          </span>
        </div>
        <h2 className="text-xl font-extrabold leading-tight tracking-tight text-navy-800 transition group-hover:text-brand-blue sm:text-2xl lg:text-3xl">
          {item.title}
        </h2>
        {item.description && (
          <p className="line-clamp-3 text-sm leading-relaxed text-navy-700/70">
            {item.description}
          </p>
        )}
        <div className="mt-1 flex items-center gap-2 text-xs">
          <span className="font-semibold text-navy-800">{item.source}</span>
          <ArrowUpRight className="h-4 w-4 text-brand-blue transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </a>
  );
}
