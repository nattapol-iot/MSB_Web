import { ArrowRight, Sparkles } from "lucide-react";
import { NexusBadge } from "./NexusBadge";
import { IsometricHero } from "./illustrations/IsometricHero";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-radial" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="container-page relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col gap-7">
          <span className="badge-soft self-start">
            <Sparkles className="h-3.5 w-3.5 text-brand-blue" />
            One Platform. Endless Possibilities.
          </span>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-navy-800 sm:text-5xl lg:text-6xl">
            One Platform for{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              All Smart Solutions
            </span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-navy-700/75 sm:text-lg">
            MSB Smart Solutions connects warehouse, automation, traceability,
            IIoT, BMS, analytics, cloud, network, and energy solutions in one
            intelligent ecosystem.
          </p>
          <NexusBadge />
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a href="#solutions" className="btn-primary">
              Explore Solutions
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Sales
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <IsometricHero />
        </div>
      </div>
    </section>
  );
}
