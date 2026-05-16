import { Hexagon } from "lucide-react";

export function NexusBadge({
  variant = "light",
  subtle = false,
}: {
  variant?: "light" | "dark";
  subtle?: boolean;
}) {
  const dark = variant === "dark";
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-2xl border px-4 py-2.5 ${
        dark
          ? "border-white/20 bg-white/10 text-white backdrop-blur"
          : "border-navy-100 bg-white/90 text-navy-800 shadow-card backdrop-blur"
      }`}
    >
      <span
        className={`inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan ${
          subtle ? "" : "shadow-glow"
        }`}
      >
        <Hexagon className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
          Powered by Nexus
        </span>
        <span
          className={`text-xs font-medium ${
            dark ? "text-white/80" : "text-navy-700/80"
          }`}
        >
          The Main System Platform of MSB Smart Solutions
        </span>
      </span>
    </div>
  );
}
