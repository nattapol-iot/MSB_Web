import Image from "next/image";
import { solutions } from "@/data/solutions";
import { SolutionCard } from "./SolutionCard";

export function SolutionGrid() {
  return (
    <section id="solutions" className="section bg-white">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="h-eyebrow">Our Solutions</span>
          <h2 className="h-section mt-2 max-w-2xl">
            A complete portfolio for smart operations
          </h2>
          <p className="text-muted mt-3 max-w-2xl text-base sm:text-lg">
            Every solution is natively integrated through Nexus — the Main
            System Platform of MSB Smart Solutions.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-navy-100 bg-white px-4 py-2.5 shadow-card">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Powered by
            </span>
            <Image
              src="/images/brand/nexus-logo.png"
              alt="Nexus logo"
              width={180}
              height={67}
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {solutions.map((s) => (
            <SolutionCard key={s.id} solution={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
