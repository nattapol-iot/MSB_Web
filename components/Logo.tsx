export function Logo({
  compact = false,
  variant = "light",
}: {
  compact?: boolean;
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";
  return (
    <a href="#home" className="flex items-center gap-2.5">
      <LogoMark />
      {!compact && (
        <span className="flex flex-col leading-tight">
          <span
            className={`text-sm font-extrabold tracking-tight ${
              dark ? "text-white" : "text-navy-800"
            }`}
          >
            MSB
          </span>
          <span
            className={`text-[9px] font-semibold uppercase tracking-[0.28em] ${
              dark ? "text-white/70" : "text-navy-700/70"
            }`}
          >
            Smart Solutions
          </span>
        </span>
      )}
    </a>
  );
}

export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MSB Smart Solutions logo"
    >
      <defs>
        <linearGradient id="msb-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E63E9" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="msb-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0B1B3B" />
          <stop offset="100%" stopColor="#1E63E9" />
        </linearGradient>
      </defs>
      {/* back cube */}
      <path
        d="M24 4l16 8v8l-16 8L8 20v-8l16-8z"
        fill="url(#msb-b)"
        opacity="0.95"
      />
      {/* front cube */}
      <path
        d="M24 20l16 8v12l-16 8L8 40V28l16-8z"
        fill="url(#msb-a)"
      />
      {/* highlight edges */}
      <path
        d="M24 20l16 8-16 8-16-8 16-8z"
        fill="#ffffff"
        opacity="0.12"
      />
      <path
        d="M24 4l16 8-16 8L8 12l16-8z"
        fill="#ffffff"
        opacity="0.18"
      />
    </svg>
  );
}
