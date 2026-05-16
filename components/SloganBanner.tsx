import { ArrowRight } from "lucide-react";
import { LogoMark } from "./Logo";

export function SloganBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-navy-900 via-brand-blue to-brand-cyan text-white">
      {/* Subtle grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-cyan/30 blur-3xl" />
      <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-blue/40 blur-3xl" />

      <div className="container-page relative flex flex-col items-center gap-6 py-10 sm:flex-row sm:py-12">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur">
            <LogoMark size={28} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-extrabold tracking-tight">MSB</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Smart Solutions
            </span>
          </span>
        </div>

        <div className="hidden h-12 w-px bg-white/20 sm:block" />

        <div className="flex flex-1 flex-col gap-1 text-center sm:text-left">
          <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Connect. Automate. Empower.
          </h3>
          <p className="text-sm text-white/80">
            Unified solutions for a smarter, more efficient, connected, and
            future-ready enterprise.
          </p>
        </div>

        <a
          href="/register"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-800 shadow-soft transition hover:opacity-95"
        >
          Request a Demo
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
