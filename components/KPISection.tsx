import { TrendingUp } from "lucide-react";
import { kpis, type KPI } from "@/data/kpis";

function Sparkline({ data }: { data: number[] }) {
  const w = 80;
  const h = 24;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = w / (data.length - 1);
  const points = data
    .map((v, i) => `${i * step},${h - ((v - min) / range) * h}`)
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      <defs>
        <linearGradient id="spark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1E63E9" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke="url(#spark)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
}

function KPICard({ kpi }: { kpi: KPI }) {
  const Icon = kpi.icon;
  return (
    <div className="card-base flex flex-col gap-4 hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-center justify-between">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 text-brand-blue">
          <Icon className="h-5 w-5" strokeWidth={2.2} />
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600">
          <TrendingUp className="h-3 w-3" />
          {kpi.growth}
        </span>
      </div>
      <div>
        <div className="text-3xl font-bold tracking-tight text-navy-800">
          {kpi.value}
        </div>
        <div className="mt-1 text-sm text-navy-700/70">{kpi.label}</div>
      </div>
      <div className="mt-auto">
        <Sparkline data={kpi.spark} />
      </div>
    </div>
  );
}

export function KPISection() {
  return (
    <section className="section bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="h-eyebrow">Integrated Platform Overview</span>
          <h2 className="h-section mt-2 max-w-2xl">
            One platform, real-time visibility
          </h2>
          <p className="text-muted mt-3 max-w-2xl text-base sm:text-lg">
            Live operational metrics across every connected solution.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {kpis.map((k) => (
            <KPICard key={k.id} kpi={k} />
          ))}
        </div>
      </div>
    </section>
  );
}
