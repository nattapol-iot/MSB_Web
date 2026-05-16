import { ChevronRight } from "lucide-react";
import { workflow } from "@/data/workflow";

export function WorkflowSection() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="h-eyebrow">How It Works</span>
          <h2 className="h-section mt-2 max-w-2xl">
            How all solutions work together
          </h2>
          <p className="text-muted mt-3 max-w-2xl text-base sm:text-lg">
            From data collection to business optimization — Nexus orchestrates
            the full operational flow.
          </p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="card-base relative flex flex-col gap-3 hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white shadow-card">
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <span className="text-xs font-bold tracking-widest text-navy-700/40">
                      STEP {String(step.id).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-navy-800">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-navy-700/70">
                    {step.description}
                  </p>
                  {i < workflow.length - 1 && (
                    <ChevronRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-brand-blue/40 lg:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
