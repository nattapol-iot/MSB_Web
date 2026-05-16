import { ArrowRight } from "lucide-react";
import type { Solution } from "@/data/solutions";

export function SolutionCard({ solution }: { solution: Solution }) {
  const Icon = solution.icon;
  return (
    <a
      href={`#${solution.id}`}
      className="card-base group relative flex flex-col gap-4 overflow-hidden hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-soft"
    >
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${solution.accent} text-white shadow-card`}
      >
        <Icon className="h-6 w-6" strokeWidth={2.2} />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold text-navy-800">{solution.title}</h3>
        <p className="text-sm leading-relaxed text-navy-700/70">
          {solution.description}
        </p>
      </div>
      <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
        Learn more
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </div>
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${solution.accent} opacity-0 blur-2xl transition group-hover:opacity-20`}
      />
    </a>
  );
}
