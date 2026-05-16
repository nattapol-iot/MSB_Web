import { TrendingUp } from "lucide-react";
import { kpis, type KPI } from "@/data/kpis";

function Sparkline({
  data,
  id,
  w = 200,
  h = 48,
}: {
  data: number[];
  id: string;
  w?: number;
  h?: number;
}) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = w / (data.length - 1);
  const points = data.map(
    (v, i) => [i * step, h - ((v - min) / range) * (h - 6) - 3] as const
  );
  const line = points.map(([x, y]) => `${x},${y}`).join(" ");
  const area = `0,${h} ${line} ${w},${h}`;
  return (
    <svg
      width="100%"
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className="block"
    >
      <defs>
        <linearGradient id={`spark-line-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1E63E9" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id={`spark-area-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E63E9" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon fill={`url(#spark-area-${id})`} points={area} />
      <polyline
        fill="none"
        stroke={`url(#spark-line-${id})`}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={line}
      />
      {/* end dot */}
      <circle
        cx={points[points.length - 1][0]}
        cy={points[points.length - 1][1]}
        r="3"
        fill="#06B6D4"
      />
    </svg>
  );
}

function KPICard({ kpi }: { kpi: KPI }) {
  const Icon = kpi.icon;
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-soft">
      {/* Top: meta */}
      <div className="flex items-start justify-between gap-3 p-4 pb-2">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white shadow-card">
            <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
          </span>
          <div className="min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy-700/55">
              {kpi.label}
            </div>
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
          <TrendingUp className="h-2.5 w-2.5" strokeWidth={3} />
          {kpi.growth}
        </span>
      </div>

      {/* Middle: value */}
      <div className="px-4 pb-3">
        <div className="text-[26px] font-extrabold leading-none tracking-tight text-navy-800">
          {kpi.value}
        </div>
        <div className="mt-1 text-[10px] font-medium text-navy-700/55">
          vs yesterday
        </div>
      </div>

      {/* Bottom: full-width sparkline */}
      <div className="mt-auto h-12 w-full">
        <Sparkline data={kpi.spark} id={kpi.id} />
      </div>
    </div>
  );
}

export function KPISection() {
  return (
    <section className="section bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div className="container-page">
        <div className="mb-10 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="h-eyebrow">Integrated Platform Overview</span>
            <h2 className="h-section mt-2">
              One platform, real-time visibility
            </h2>
          </div>
          <p className="text-muted max-w-md text-sm sm:text-right">
            Live operational metrics across every connected solution, powered
            by Nexus.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {kpis.map((k) => (
            <KPICard key={k.id} kpi={k} />
          ))}
        </div>
      </div>
    </section>
  );
}
