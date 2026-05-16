import { ArrowRight } from "lucide-react";
import type { Solution } from "@/data/solutions";

export function SolutionCard({ solution }: { solution: Solution }) {
  const Icon = solution.icon;
  return (
    <a
      href={`#${solution.id}`}
      className="card-base group relative flex flex-col gap-3 overflow-hidden !p-5 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-soft"
    >
      <div
        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${solution.accent} text-white shadow-card`}
      >
        <Icon className="h-5 w-5" strokeWidth={2.2} />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-bold tracking-tight text-navy-800">
          {solution.title}
        </h3>
        <p className="text-[12px] leading-snug text-navy-700/65">
          {solution.description}
        </p>
      </div>
      <div className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-brand-blue">
        Learn more
        <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
      </div>
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${solution.accent} opacity-0 blur-2xl transition group-hover:opacity-20`}
      />
    </a>
  );
}
