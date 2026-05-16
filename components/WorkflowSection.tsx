import { ArrowRight } from "lucide-react";
import { workflow } from "@/data/workflow";

export function WorkflowSection() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="h-eyebrow">How It Works</span>
          <h2 className="h-section mt-2 max-w-2xl">
            How All Solutions Work Together
          </h2>
          <p className="text-muted mt-3 max-w-2xl text-base sm:text-lg">
            From data collection to business optimization — Nexus orchestrates
            the full operational flow.
          </p>
        </div>

        {/* Horizontal flow */}
        <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:gap-2">
          {workflow.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === workflow.length - 1;
            return (
              <div key={step.id} className="flex flex-1 items-start gap-2">
                <div className="flex w-full flex-col items-center text-center">
                  <div className="relative">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white shadow-soft">
                      <Icon className="h-6 w-6" strokeWidth={2.2} />
                    </span>
                    <span className="absolute -right-1.5 -top-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-navy-800 text-[10px] font-bold text-white shadow">
                      {step.id}
                    </span>
                  </div>
                  <h3 className="mt-3 text-[13px] font-semibold leading-tight text-navy-800">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-snug text-navy-700/65">
                    {step.description}
                  </p>
                </div>
                {!isLast && (
                  <ArrowRight
                    className="mt-5 hidden h-5 w-5 shrink-0 text-brand-blue/40 lg:block"
                    strokeWidth={2.4}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
