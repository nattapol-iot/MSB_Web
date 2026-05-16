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
