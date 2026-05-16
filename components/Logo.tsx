import Image from "next/image";

export function Logo({
  compact = false,
  variant = "light",
}: {
  compact?: boolean;
  variant?: "light" | "dark";
}) {
  const logoSrc = compact
    ? "/images/brand/msb-logo-mark.png"
    : "/images/brand/msb-logo-horizontal.png";

  return (
    <a
      href="#home"
      className={`inline-flex items-center ${variant === "dark" ? "rounded-xl bg-white/95 p-1.5" : ""}`}
      aria-label="MSB Smart Solutions home"
    >
      <Image
        src={logoSrc}
        alt="MSB Smart Solutions logo"
        width={compact ? 54 : 186}
        height={compact ? 48 : 60}
        priority={!compact}
        className={compact ? "h-10 w-auto" : "h-10 w-auto sm:h-11"}
      />
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
