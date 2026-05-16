import {
  Warehouse,
  Cog,
  Bot,
  Activity,
  ScanLine,
  Cloud,
  Network,
  Gauge,
  Sparkles,
  Server,
  Building2,
  Hexagon,
  type LucideIcon,
} from "lucide-react";

type Node = {
  label: string;
  Icon: LucideIcon;
  // percentages
  top: string;
  left: string;
  accent: string;
};

const NODES: Node[] = [
  { label: "Warehouse", Icon: Warehouse, top: "6%", left: "12%", accent: "from-blue-500 to-cyan-500" },
  { label: "Automation", Icon: Cog, top: "4%", left: "60%", accent: "from-indigo-500 to-blue-500" },
  { label: "AGV / AMR", Icon: Bot, top: "26%", left: "84%", accent: "from-sky-500 to-blue-600" },
  { label: "Machine Monitor", Icon: Activity, top: "54%", left: "88%", accent: "from-cyan-500 to-teal-500" },
  { label: "Traceability", Icon: ScanLine, top: "80%", left: "70%", accent: "from-cyan-500 to-blue-500" },
  { label: "Cloud & Analytics", Icon: Cloud, top: "86%", left: "32%", accent: "from-blue-400 to-sky-500" },
  { label: "Network", Icon: Network, top: "62%", left: "4%", accent: "from-slate-500 to-blue-600" },
  { label: "Power Viz", Icon: Gauge, top: "32%", left: "0%", accent: "from-amber-500 to-orange-500" },
  { label: "AI Service", Icon: Sparkles, top: "70%", left: "8%", accent: "from-fuchsia-500 to-violet-500" },
  { label: "Data Center", Icon: Server, top: "18%", left: "38%", accent: "from-navy-700 to-blue-600" },
  { label: "BMS / Building", Icon: Building2, top: "48%", left: "30%", accent: "from-emerald-500 to-cyan-500" },
];

export function EcosystemVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[620px]">
      {/* Background grid + glow */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white via-blue-50/60 to-cyan-50/60" />
      <div className="absolute inset-0 rounded-[2rem] bg-grid opacity-60" />
      <div className="absolute inset-0 rounded-[2rem] ring-1 ring-navy-100/80 shadow-soft" />

      {/* Connection lines from center */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E63E9" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        {NODES.map((n, i) => {
          const x = parseFloat(n.left);
          const y = parseFloat(n.top);
          return (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={x + 7}
              y2={y + 6}
              stroke="url(#line)"
              strokeWidth="0.35"
              className="animate-dash"
            />
          );
        })}
        {/* Concentric rings */}
        <circle cx="50" cy="50" r="22" fill="none" stroke="#1E63E9" strokeOpacity="0.15" strokeWidth="0.25" />
        <circle cx="50" cy="50" r="34" fill="none" stroke="#06B6D4" strokeOpacity="0.12" strokeWidth="0.25" />
      </svg>

      {/* Center Nexus hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-brand-blue/30 to-brand-cyan/30 blur-2xl" />
          <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-navy-800 via-brand-blue to-brand-cyan text-white shadow-glow">
            <Hexagon className="h-7 w-7" strokeWidth={2.4} />
            <span className="mt-1 text-sm font-bold tracking-wide">Nexus</span>
            <span className="text-[9px] uppercase tracking-[0.18em] text-white/80">
              Main Platform
            </span>
          </div>
        </div>
      </div>

      {/* Floating nodes */}
      {NODES.map((n, i) => (
        <div
          key={n.label}
          className="absolute animate-float"
          style={{ top: n.top, left: n.left, animationDelay: `${(i % 6) * 0.4}s` }}
        >
          <div className="flex items-center gap-2 rounded-xl border border-navy-100 bg-white/95 px-2.5 py-1.5 shadow-card backdrop-blur">
            <span
              className={`inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br ${n.accent} text-white`}
            >
              <n.Icon className="h-3.5 w-3.5" strokeWidth={2.4} />
            </span>
            <span className="text-[11px] font-semibold text-navy-800">
              {n.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
