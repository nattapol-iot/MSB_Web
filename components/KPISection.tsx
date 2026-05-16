import { TrendingUp } from "lucide-react";
import { kpis, type KPI } from "@/data/kpis";

function Sparkline({ data, w = 120, h = 32 }: { data: number[]; w?: number; h?: number }) {
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
    <div className="card-base flex items-center gap-4 !p-4 hover:-translate-y-0.5 hover:shadow-soft">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white shadow-card">
        <Icon className="h-5 w-5" strokeWidth={2.2} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-medium text-navy-700/60">
          {kpi.label}
        </div>
        <div className="text-xl font-bold leading-tight tracking-tight text-navy-800">
          {kpi.value}
        </div>
        <div className="mt-0.5 inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
          <TrendingUp className="h-2.5 w-2.5" />
          {kpi.growth} <span className="text-navy-700/50">vs yesterday</span>
        </div>
      </div>
      <div className="hidden shrink-0 sm:block">
        <Sparkline data={kpi.spark} w={70} h={32} />
      </div>
    </div>
  );
}

export function KPISection() {
  return (
    <section className="section bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div className="container-page">
        <div className="mb-10 flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="h-eyebrow">Integrated Platform Overview</span>
            <h2 className="h-section mt-2">One platform, real-time visibility</h2>
          </div>
          <p className="text-muted max-w-md text-sm sm:text-right">
            Live operational metrics across every connected solution, powered by Nexus.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {kpis.map((k) => (
            <KPICard key={k.id} kpi={k} />
          ))}
        </div>
      </div>
    </section>
  );
}
