import Image from "next/image";

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
        className={`inline-flex h-10 w-[118px] items-center justify-center rounded-xl bg-white px-2 ${
          subtle ? "" : "shadow-card"
        }`}
      >
        <Image
          src="/images/brand/nexus-logo.png"
          alt="Nexus logo"
          width={174}
          height={64}
          className="h-7 w-auto object-contain"
        />
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
