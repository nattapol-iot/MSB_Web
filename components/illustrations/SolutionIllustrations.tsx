/**
 * Stylized SVG illustrations for each solution preview.
 * Pure vector — no copyrighted imagery. Designed to feel like
 * "live product dashboards" while sharing a consistent visual language.
 */

const defs = (
  <defs>
    <linearGradient id="il-blue" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#1E63E9" />
      <stop offset="100%" stopColor="#06B6D4" />
    </linearGradient>
    <linearGradient id="il-navy" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#0B1B3B" />
      <stop offset="100%" stopColor="#1E63E9" />
    </linearGradient>
    <linearGradient id="il-cyan" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#06B6D4" />
      <stop offset="100%" stopColor="#1E63E9" />
    </linearGradient>
    <linearGradient id="il-emerald" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#10B981" />
      <stop offset="100%" stopColor="#06B6D4" />
    </linearGradient>
    <linearGradient id="il-amber" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#F59E0B" />
      <stop offset="100%" stopColor="#EA580C" />
    </linearGradient>
    <filter id="il-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#0B1B3B" floodOpacity="0.12" />
    </filter>
  </defs>
);

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand-blue/15 to-brand-cyan/15 blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft">
        <div className="flex items-center gap-1.5 border-b border-navy-100 bg-navy-50/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        {children}
      </div>
    </div>
  );
}

/* ============================ WMS ============================ */
export function WmsIllustration() {
  return (
    <Frame>
      <svg viewBox="0 0 400 280" className="block w-full">
        {defs}
        {/* Background */}
        <rect width="400" height="280" fill="#F8FBFF" />

        {/* Title bar */}
        <rect x="16" y="14" width="120" height="14" rx="3" fill="url(#il-blue)" />
        <rect x="16" y="32" width="80" height="8" rx="2" fill="#CBD5E1" />

        {/* Inventory racks (isometric-ish) */}
        <g filter="url(#il-shadow)" transform="translate(20 60)">
          {[0, 1, 2].map((r) => (
            <g key={r} transform={`translate(0 ${r * 56})`}>
              <rect width="170" height="6" fill="#94A3B8" />
              <rect y="6" width="170" height="40" fill="#E2E8F0" rx="2" />
              {[0, 1, 2, 3, 4].map((c) => (
                <g key={c} transform={`translate(${8 + c * 32} 10)`}>
                  <rect width="26" height="32" fill="url(#il-blue)" rx="3" opacity={0.7 + (c % 2) * 0.3} />
                  <rect y="4" width="26" height="3" fill="#fff" opacity="0.4" />
                </g>
              ))}
            </g>
          ))}
        </g>

        {/* Right side: KPI cards */}
        <g filter="url(#il-shadow)" transform="translate(210 60)">
          <rect width="170" height="60" rx="8" fill="#fff" stroke="#E2E8F0" />
          <text x="14" y="22" fill="#64748B" fontSize="9" fontWeight="600">INVENTORY</text>
          <text x="14" y="46" fill="#0B1B3B" fontSize="20" fontWeight="700">18,945</text>
          <rect x="120" y="32" width="36" height="16" rx="8" fill="#D1FAE5" />
          <text x="138" y="44" fill="#059669" fontSize="9" fontWeight="700" textAnchor="middle">+8.7%</text>
        </g>
        <g filter="url(#il-shadow)" transform="translate(210 132)">
          <rect width="170" height="60" rx="8" fill="#fff" stroke="#E2E8F0" />
          <text x="14" y="22" fill="#64748B" fontSize="9" fontWeight="600">PICK ACCURACY</text>
          <text x="14" y="46" fill="#0B1B3B" fontSize="20" fontWeight="700">99.6%</text>
          {/* progress */}
          <rect x="14" y="50" width="142" height="4" rx="2" fill="#E2E8F0" />
          <rect x="14" y="50" width="138" height="4" rx="2" fill="url(#il-blue)" />
        </g>
        <g filter="url(#il-shadow)" transform="translate(210 204)">
          <rect width="170" height="56" rx="8" fill="#fff" stroke="#E2E8F0" />
          <text x="14" y="22" fill="#64748B" fontSize="9" fontWeight="600">DAILY ORDERS</text>
          {/* mini bar chart */}
          {[16, 28, 22, 34, 26, 38, 32].map((h, i) => (
            <rect key={i} x={14 + i * 22} y={48 - h} width="14" height={h} rx="2" fill="url(#il-cyan)" />
          ))}
        </g>

        {/* Forklift pictogram */}
        <g transform="translate(40 240)" filter="url(#il-shadow)">
          <rect width="56" height="22" rx="3" fill="#0B1B3B" />
          <rect x="44" y="-10" width="3" height="16" fill="#1E63E9" />
          <rect x="44" y="-12" width="20" height="3" fill="#1E63E9" />
          <circle cx="12" cy="24" r="5" fill="#0B1B3B" />
          <circle cx="44" cy="24" r="5" fill="#0B1B3B" />
        </g>
      </svg>
    </Frame>
  );
}

/* ============================ WCS ============================ */
export function WcsIllustration() {
  return (
    <Frame>
      <svg viewBox="0 0 400 280" className="block w-full">
        {defs}
        <rect width="400" height="280" fill="#F8FBFF" />

        {/* Conveyor system */}
        <g filter="url(#il-shadow)" transform="translate(20 130)">
          <rect width="360" height="22" fill="#475569" rx="4" />
          {Array.from({ length: 12 }).map((_, i) => (
            <rect key={i} x={10 + i * 30} y="6" width="20" height="10" fill="#0B1B3B" opacity="0.35" rx="2" />
          ))}
          {/* boxes on conveyor */}
          {[40, 130, 230, 310].map((x, i) => (
            <g key={i} transform={`translate(${x} -22)`}>
              <rect width="26" height="22" rx="2" fill="url(#il-blue)" />
              <rect y="3" width="26" height="3" fill="#fff" opacity="0.4" />
            </g>
          ))}
        </g>

        {/* Robot arm */}
        <g filter="url(#il-shadow)" transform="translate(60 60)">
          <rect x="14" y="46" width="20" height="14" fill="#0B1B3B" rx="2" />
          <rect x="22" y="10" width="4" height="40" fill="#1E63E9" />
          <rect x="20" y="6" width="8" height="8" fill="#06B6D4" rx="2" />
          <circle cx="24" cy="48" r="3" fill="#06B6D4" />
        </g>

        {/* AGV bot */}
        <g filter="url(#il-shadow)" transform="translate(180 70)">
          <rect width="60" height="34" rx="6" fill="url(#il-navy)" />
          <rect x="8" y="6" width="44" height="10" fill="#06B6D4" rx="2" />
          <circle cx="6" cy="14" r="3" fill="#06B6D4" />
          <circle cx="54" cy="14" r="3" fill="#06B6D4" />
          <circle cx="14" cy="38" r="5" fill="#0B1B3B" />
          <circle cx="46" cy="38" r="5" fill="#0B1B3B" />
        </g>

        {/* Status panel */}
        <g filter="url(#il-shadow)" transform="translate(270 50)">
          <rect width="110" height="64" rx="6" fill="#fff" stroke="#E2E8F0" />
          <text x="12" y="18" fill="#64748B" fontSize="8" fontWeight="600">REAL-TIME STATUS</text>
          {[
            { y: 30, c: "#10B981", t: "Conveyor A" },
            { y: 42, c: "#10B981", t: "Sorter 1" },
            { y: 54, c: "#F59E0B", t: "AGV-04" },
          ].map((row) => (
            <g key={row.t} transform={`translate(12 ${row.y})`}>
              <circle r="3" fill={row.c} />
              <text x="8" y="3" fill="#0B1B3B" fontSize="8" fontWeight="600">{row.t}</text>
            </g>
          ))}
        </g>

        {/* Title */}
        <rect x="20" y="14" width="140" height="14" rx="3" fill="url(#il-blue)" />
        <rect x="20" y="32" width="90" height="8" rx="2" fill="#CBD5E1" />

        {/* Bottom metrics */}
        <g transform="translate(20 210)">
          {[
            { x: 0, l: "Throughput", v: "1,240/h" },
            { x: 120, l: "Uptime", v: "99.8%" },
            { x: 240, l: "Tasks", v: "32 active" },
          ].map((m) => (
            <g key={m.l} transform={`translate(${m.x} 0)`} filter="url(#il-shadow)">
              <rect width="110" height="50" rx="6" fill="#fff" stroke="#E2E8F0" />
              <text x="12" y="20" fill="#64748B" fontSize="8" fontWeight="600">{m.l.toUpperCase()}</text>
              <text x="12" y="40" fill="#0B1B3B" fontSize="14" fontWeight="700">{m.v}</text>
            </g>
          ))}
        </g>
      </svg>
    </Frame>
  );
}

/* ====================== Traceability ========================= */
export function TraceabilityIllustration() {
  return (
    <Frame>
      <svg viewBox="0 0 400 280" className="block w-full">
        {defs}
        <rect width="400" height="280" fill="#F8FBFF" />

        {/* Title */}
        <rect x="20" y="14" width="160" height="14" rx="3" fill="url(#il-cyan)" />
        <rect x="20" y="32" width="100" height="8" rx="2" fill="#CBD5E1" />

        {/* Lineage flow */}
        <g transform="translate(20 70)">
          {/* line */}
          <path d="M 28 30 H 332" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
          {["Raw", "WIP", "QC", "Pack", "Ship"].map((t, i) => (
            <g key={t} transform={`translate(${i * 80} 0)`} filter="url(#il-shadow)">
              <circle cx="28" cy="30" r="20" fill="#fff" stroke="url(#il-cyan)" strokeWidth="2" />
              <circle cx="28" cy="30" r="12" fill="url(#il-cyan)" />
              <text x="28" y="34" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">{i + 1}</text>
              <text x="28" y="64" fontSize="9" fontWeight="700" fill="#0B1B3B" textAnchor="middle">{t}</text>
            </g>
          ))}
        </g>

        {/* Barcode card */}
        <g filter="url(#il-shadow)" transform="translate(20 160)">
          <rect width="180" height="90" rx="8" fill="#fff" stroke="#E2E8F0" />
          <text x="14" y="22" fill="#64748B" fontSize="9" fontWeight="600">LOT TRACE</text>
          <text x="14" y="40" fill="#0B1B3B" fontSize="13" fontWeight="700">LOT-2025-08842</text>
          {/* barcode */}
          <g transform="translate(14 50)">
            {Array.from({ length: 28 }).map((_, i) => (
              <rect
                key={i}
                x={i * 5.6}
                y="0"
                width={i % 3 === 0 ? 3 : i % 2 ? 1 : 2}
                height="22"
                fill="#0B1B3B"
              />
            ))}
          </g>
          <text x="14" y="84" fill="#64748B" fontSize="8">Captured · 2025-05-16 14:32</text>
        </g>

        {/* History log */}
        <g filter="url(#il-shadow)" transform="translate(210 160)">
          <rect width="170" height="90" rx="8" fill="#fff" stroke="#E2E8F0" />
          <text x="14" y="22" fill="#64748B" fontSize="9" fontWeight="600">HISTORY</text>
          {[
            { y: 38, c: "#10B981", t: "Received" },
            { y: 54, c: "#06B6D4", t: "Quality OK" },
            { y: 70, c: "#1E63E9", t: "Packed" },
            { y: 86, c: "#0B1B3B", t: "Shipped" },
          ].map((row) => (
            <g key={row.t} transform={`translate(14 ${row.y})`}>
              <circle r="3" fill={row.c} />
              <text x="10" y="3" fontSize="9" fill="#0B1B3B" fontWeight="600">{row.t}</text>
            </g>
          ))}
        </g>
      </svg>
    </Frame>
  );
}

/* =========================== IIoT ============================ */
export function IiotIllustration() {
  return (
    <Frame>
      <svg viewBox="0 0 400 280" className="block w-full">
        {defs}
        <rect width="400" height="280" fill="#F8FBFF" />

        {/* Title */}
        <rect x="20" y="14" width="150" height="14" rx="3" fill="url(#il-blue)" />
        <rect x="20" y="32" width="100" height="8" rx="2" fill="#CBD5E1" />

        {/* Big OEE chart */}
        <g filter="url(#il-shadow)" transform="translate(20 60)">
          <rect width="230" height="160" rx="10" fill="#fff" stroke="#E2E8F0" />
          <text x="14" y="22" fill="#64748B" fontSize="9" fontWeight="600">OEE TREND</text>
          {/* axis */}
          <line x1="14" y1="140" x2="220" y2="140" stroke="#CBD5E1" />
          <polyline
            fill="none"
            stroke="url(#il-blue)"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
            points="14,120 40,100 70,108 100,80 130,86 160,60 190,68 220,50"
          />
          {/* area */}
          <polygon
            fill="url(#il-blue)"
            opacity="0.12"
            points="14,120 40,100 70,108 100,80 130,86 160,60 190,68 220,50 220,140 14,140"
          />
          {/* dots */}
          {[
            [14, 120], [40, 100], [70, 108], [100, 80], [130, 86], [160, 60], [190, 68], [220, 50],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill="#1E63E9" />
          ))}
        </g>

        {/* Gauge */}
        <g filter="url(#il-shadow)" transform="translate(264 60)">
          <rect width="116" height="76" rx="10" fill="#fff" stroke="#E2E8F0" />
          <text x="12" y="20" fill="#64748B" fontSize="9" fontWeight="600">EFFICIENCY</text>
          <path d="M 22 58 A 30 30 0 0 1 94 58" fill="none" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />
          <path d="M 22 58 A 30 30 0 0 1 80 40" fill="none" stroke="url(#il-blue)" strokeWidth="6" strokeLinecap="round" />
          <text x="58" y="62" fill="#0B1B3B" fontSize="16" fontWeight="700" textAnchor="middle">92%</text>
        </g>

        {/* Alarm card */}
        <g filter="url(#il-shadow)" transform="translate(264 144)">
          <rect width="116" height="76" rx="10" fill="#fff" stroke="#E2E8F0" />
          <text x="12" y="20" fill="#64748B" fontSize="9" fontWeight="600">ALARMS</text>
          <circle cx="22" cy="42" r="5" fill="#EF4444" />
          <text x="34" y="46" fill="#0B1B3B" fontSize="10" fontWeight="600">Vibration High</text>
          <circle cx="22" cy="60" r="5" fill="#F59E0B" />
          <text x="34" y="64" fill="#0B1B3B" fontSize="10" fontWeight="600">Temp Warning</text>
        </g>

        {/* Machine pictograms */}
        <g transform="translate(20 230)">
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(${i * 90} 0)`} filter="url(#il-shadow)">
              <rect width="80" height="32" rx="4" fill="url(#il-navy)" />
              <rect x="10" y="8" width="60" height="6" rx="1" fill="#06B6D4" opacity="0.8" />
              <circle cx="20" cy="22" r="3" fill="#10B981" />
              <text x="32" y="25" fontSize="9" fill="#fff" fontWeight="600">M-{i + 1}</text>
            </g>
          ))}
        </g>
      </svg>
    </Frame>
  );
}

/* ============================ BMS ============================ */
export function BmsIllustration() {
  return (
    <Frame>
      <svg viewBox="0 0 400 280" className="block w-full">
        {defs}
        <rect width="400" height="280" fill="#F8FBFF" />

        {/* Title */}
        <rect x="20" y="14" width="150" height="14" rx="3" fill="url(#il-emerald)" />
        <rect x="20" y="32" width="100" height="8" rx="2" fill="#CBD5E1" />

        {/* Building */}
        <g filter="url(#il-shadow)" transform="translate(20 60)">
          <rect width="110" height="180" fill="url(#il-navy)" rx="4" />
          <rect y="-8" width="110" height="10" fill="#06B6D4" rx="2" />
          {Array.from({ length: 8 }).map((_, r) =>
            [0, 1, 2].map((c) => (
              <rect
                key={`${r}-${c}`}
                x={10 + c * 32}
                y={10 + r * 20}
                width="22"
                height="12"
                fill="#06B6D4"
                opacity={0.6 + ((r + c) % 2) * 0.4}
                rx="1"
              />
            ))
          )}
          {/* door */}
          <rect x="44" y="158" width="22" height="22" fill="#fff" opacity="0.85" rx="2" />
        </g>

        {/* HVAC + sensors */}
        <g transform="translate(150 60)">
          {/* HVAC */}
          <g filter="url(#il-shadow)" transform="translate(0 0)">
            <rect width="110" height="60" rx="8" fill="#fff" stroke="#E2E8F0" />
            <text x="12" y="20" fill="#64748B" fontSize="9" fontWeight="600">HVAC</text>
            <circle cx="32" cy="42" r="10" fill="none" stroke="url(#il-emerald)" strokeWidth="2.5" />
            {[0, 1, 2, 3].map((i) => (
              <line
                key={i}
                x1="32"
                y1="42"
                x2={32 + Math.cos((i * Math.PI) / 2) * 10}
                y2={42 + Math.sin((i * Math.PI) / 2) * 10}
                stroke="url(#il-emerald)"
                strokeWidth="2.5"
              />
            ))}
            <text x="50" y="46" fill="#0B1B3B" fontSize="11" fontWeight="700">23.4°C</text>
          </g>
          {/* Lighting */}
          <g filter="url(#il-shadow)" transform="translate(0 70)">
            <rect width="110" height="56" rx="8" fill="#fff" stroke="#E2E8F0" />
            <text x="12" y="20" fill="#64748B" fontSize="9" fontWeight="600">LIGHTING</text>
            {[0, 1, 2, 3].map((i) => (
              <g key={i} transform={`translate(${14 + i * 24} 32)`}>
                <circle r="6" fill="url(#il-amber)" />
                <circle r="9" fill="url(#il-amber)" opacity="0.25" />
              </g>
            ))}
            <text x="12" y="50" fill="#64748B" fontSize="8">68% on</text>
          </g>
          {/* Energy */}
          <g filter="url(#il-shadow)" transform="translate(0 134)">
            <rect width="110" height="46" rx="8" fill="#fff" stroke="#E2E8F0" />
            <text x="12" y="20" fill="#64748B" fontSize="9" fontWeight="600">ENERGY</text>
            {[14, 22, 18, 26, 20, 30, 24].map((h, i) => (
              <rect key={i} x={12 + i * 14} y={40 - h} width="10" height={h} rx="1.5" fill="url(#il-emerald)" />
            ))}
          </g>
        </g>

        {/* Right side: alarm + status */}
        <g transform="translate(280 60)">
          <g filter="url(#il-shadow)">
            <rect width="100" height="120" rx="10" fill="#fff" stroke="#E2E8F0" />
            <text x="12" y="20" fill="#64748B" fontSize="9" fontWeight="600">STATUS</text>
            {[
              { y: 36, c: "#10B981", t: "HVAC" },
              { y: 54, c: "#10B981", t: "Lighting" },
              { y: 72, c: "#10B981", t: "Power" },
              { y: 90, c: "#F59E0B", t: "Pump 2" },
              { y: 108, c: "#10B981", t: "Security" },
            ].map((row) => (
              <g key={row.t} transform={`translate(12 ${row.y})`}>
                <circle r="3" fill={row.c} />
                <text x="10" y="3" fill="#0B1B3B" fontSize="9" fontWeight="600">{row.t}</text>
              </g>
            ))}
          </g>
        </g>

        {/* Bottom ribbon */}
        <g transform="translate(20 240)">
          <rect width="360" height="28" rx="6" fill="url(#il-emerald)" />
          <text x="14" y="18" fill="#fff" fontSize="10" fontWeight="700">SAVE ENERGY · IMPROVE SAFETY · CENTRALIZED CONTROL</text>
        </g>
      </svg>
    </Frame>
  );
}

/* ======== Map id → illustration component ============ */
export const illustrationById: Record<string, React.ComponentType> = {
  wms: WmsIllustration,
  wcs: WcsIllustration,
  traceability: TraceabilityIllustration,
  iiot: IiotIllustration,
  bms: BmsIllustration,
};
