import {
  Boxes,
  Cog,
  Bot,
  ScanLine,
  Building2,
  Cloud,
  Activity,
  Network,
  type LucideIcon,
} from "lucide-react";
import { LogoMark } from "../Logo";

/**
 * SVG isometric warehouse / factory scene with Nexus hub overlay.
 * Pure vector — no copyrighted imagery. Uses isometric projection
 * approximated through CSS 2D with skew/rotate transforms inside SVG.
 */
export function IsometricHero() {
  return (
    <div className="relative aspect-[5/4] w-full max-w-[640px]">
      {/* Background glow & grid */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white via-blue-50/60 to-cyan-50/60" />
      <div className="absolute inset-0 rounded-[2rem] bg-grid opacity-50" />
      <div className="absolute inset-0 rounded-[2rem] ring-1 ring-navy-100/80 shadow-soft" />

      {/* Isometric SVG scene */}
      <svg
        viewBox="0 0 600 480"
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="MSB Smart Solutions integrated ecosystem"
      >
        <defs>
          <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E5EFFC" />
            <stop offset="100%" stopColor="#F5F9FF" />
          </linearGradient>
          <linearGradient id="box-top" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6BB5FF" />
            <stop offset="100%" stopColor="#1E63E9" />
          </linearGradient>
          <linearGradient id="box-left" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E63E9" />
            <stop offset="100%" stopColor="#0B1B3B" />
          </linearGradient>
          <linearGradient id="box-right" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#1E63E9" />
          </linearGradient>
          <linearGradient id="rack" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D6E4F7" />
            <stop offset="100%" stopColor="#B7CDED" />
          </linearGradient>
          <linearGradient id="conveyor" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E63E9" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.5" />
          </linearGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="6"
              floodColor="#0B1B3B"
              floodOpacity="0.12"
            />
          </filter>
        </defs>

        {/* Floor */}
        <ellipse
          cx="300"
          cy="380"
          rx="270"
          ry="60"
          fill="url(#floor)"
          opacity="0.9"
        />

        {/* Rack shelves left */}
        <g filter="url(#soft)" transform="translate(60 200)">
          {[0, 1, 2].map((row) => (
            <g key={row} transform={`translate(0 ${row * 36})`}>
              <rect width="150" height="6" fill="#94A3B8" />
              <rect y="6" width="150" height="26" fill="url(#rack)" />
              {/* boxes on shelf */}
              {[0, 1, 2, 3].map((c) => (
                <g key={c} transform={`translate(${10 + c * 35} 8)`}>
                  <rect width="22" height="22" fill="url(#box-top)" rx="2" />
                  <rect y="2" width="22" height="20" fill="url(#box-right)" rx="2" opacity="0.85" />
                </g>
              ))}
            </g>
          ))}
        </g>

        {/* Conveyor belt center-bottom */}
        <g filter="url(#soft)" transform="translate(220 330)">
          <rect width="200" height="14" fill="url(#conveyor)" rx="3" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect
              key={i}
              x={10 + i * 32}
              y="3"
              width="22"
              height="8"
              fill="#0B1B3B"
              opacity="0.25"
              rx="1.5"
            />
          ))}
          {/* boxes on conveyor */}
          {[40, 110].map((x, i) => (
            <g key={i} transform={`translate(${x} -22)`}>
              <rect width="26" height="22" fill="url(#box-top)" rx="3" />
              <rect y="3" width="26" height="19" fill="url(#box-right)" rx="3" opacity="0.85" />
            </g>
          ))}
        </g>

        {/* AGV / Robot */}
        <g filter="url(#soft)" transform="translate(440 332)">
          <rect width="48" height="20" fill="#0B1B3B" rx="4" />
          <rect y="-12" width="48" height="14" fill="#1E63E9" rx="3" />
          <circle cx="10" cy="22" r="4" fill="#0B1B3B" />
          <circle cx="38" cy="22" r="4" fill="#0B1B3B" />
          <rect x="38" y="-22" width="4" height="10" fill="#06B6D4" />
        </g>

        {/* Right-side server / data center */}
        <g filter="url(#soft)" transform="translate(460 200)">
          <rect width="70" height="100" fill="#0B1B3B" rx="6" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(8 ${10 + i * 22})`}>
              <rect width="54" height="16" fill="#1E2C52" rx="2" />
              <circle cx="6" cy="8" r="2" fill="#06B6D4" />
              <circle cx="14" cy="8" r="2" fill="#1E63E9" />
              <rect x="22" y="5" width="28" height="6" fill="#38BDF8" opacity="0.6" rx="1" />
            </g>
          ))}
        </g>

        {/* Smart building (BMS) top-left */}
        <g filter="url(#soft)" transform="translate(60 60)">
          <rect width="90" height="120" fill="url(#box-left)" rx="4" />
          {/* windows */}
          {Array.from({ length: 6 }).map((_, r) =>
            [0, 1, 2].map((c) => (
              <rect
                key={`${r}-${c}`}
                x={10 + c * 24}
                y={10 + r * 18}
                width="14"
                height="10"
                fill="#06B6D4"
                opacity={0.7 + ((r + c) % 2) * 0.3}
                rx="1"
              />
            ))
          )}
          {/* rooftop */}
          <rect y="-6" width="90" height="8" fill="#06B6D4" rx="2" />
        </g>

        {/* Connection lines from center to nodes */}
        <g stroke="url(#line)" strokeWidth="1.4" fill="none" strokeDasharray="4 6">
          <path d="M300 230 L 140 130" />
          <path d="M300 230 L 130 240" />
          <path d="M300 230 L 320 340" />
          <path d="M300 230 L 470 340" />
          <path d="M300 230 L 500 240" />
          <path d="M300 230 L 480 120" />
          <path d="M300 230 L 300 110" />
        </g>

        {/* Center Nexus hub badge (SVG) */}
        <g transform="translate(244 174)">
          <circle cx="56" cy="56" r="80" fill="url(#line)" opacity="0.15" />
          <circle cx="56" cy="56" r="56" fill="#ffffff" stroke="#1E63E9" strokeOpacity="0.15" />
          <circle cx="56" cy="56" r="44" fill="url(#box-left)" />
          <circle cx="56" cy="56" r="44" fill="url(#box-right)" opacity="0.6" />
        </g>
      </svg>

      {/* Center hub HTML overlay (for crisp text + LogoMark) */}
      <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex flex-col items-center justify-center rounded-2xl bg-white/80 px-4 py-3 shadow-soft backdrop-blur">
          <LogoMark size={28} />
          <span className="mt-1 text-xs font-extrabold tracking-tight text-navy-800">
            Nexus
          </span>
          <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Main Platform
          </span>
        </div>
      </div>

      {/* Floating labels */}
      <FloatingLabel top="6%" left="6%" icon={Building2} accent="from-emerald-500 to-cyan-500">
        BMS / Smart Building
      </FloatingLabel>
      <FloatingLabel top="6%" left="60%" icon={Cloud} accent="from-blue-400 to-sky-500">
        Cloud & Analytics
      </FloatingLabel>
      <FloatingLabel top="38%" left="2%" icon={Boxes} accent="from-blue-500 to-cyan-500">
        WMS
      </FloatingLabel>
      <FloatingLabel top="38%" left="78%" icon={Network} accent="from-slate-500 to-blue-600">
        Network
      </FloatingLabel>
      <FloatingLabel top="68%" left="6%" icon={ScanLine} accent="from-cyan-500 to-teal-500">
        Traceability
      </FloatingLabel>
      <FloatingLabel top="68%" left="36%" icon={Cog} accent="from-indigo-500 to-blue-500">
        WCS
      </FloatingLabel>
      <FloatingLabel top="68%" left="62%" icon={Bot} accent="from-sky-500 to-blue-600">
        AGV / AMR
      </FloatingLabel>
      <FloatingLabel top="84%" left="34%" icon={Activity} accent="from-cyan-500 to-blue-500">
        IIoT Monitoring
      </FloatingLabel>
    </div>
  );
}

function FloatingLabel({
  children,
  top,
  left,
  icon: Icon,
  accent,
}: {
  children: React.ReactNode;
  top: string;
  left: string;
  icon: LucideIcon;
  accent: string;
}) {
  return (
    <div
      className="absolute animate-float"
      style={{ top, left, animationDelay: `${(parseInt(left) % 6) * 0.3}s` }}
    >
      <div className="flex items-center gap-1.5 rounded-xl border border-navy-100 bg-white/95 px-2 py-1 shadow-card backdrop-blur">
        <span
          className={`inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br ${accent} text-white`}
        >
          <Icon className="h-3 w-3" strokeWidth={2.4} />
        </span>
        <span className="text-[10px] font-bold text-navy-800">{children}</span>
      </div>
    </div>
  );
}
