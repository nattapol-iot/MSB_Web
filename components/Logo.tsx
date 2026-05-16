import { Hexagon } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2.5">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan shadow-soft">
        <Hexagon className="h-5 w-5 text-white" strokeWidth={2.4} />
        <span className="absolute inset-0 rounded-xl ring-1 ring-white/40" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-tight">
          <span className="text-sm font-bold tracking-tight text-navy-800">
            MSB Smart Solutions
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-blue">
            Powered by Nexus
          </span>
        </span>
      )}
    </a>
  );
}
