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
        <div className="relative">
          {/* Connecting line behind icons (desktop only) */}
          <div
            aria-hidden
            className="absolute left-[6%] right-[6%] top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-blue/25 to-transparent lg:block"
          />

          <div className="grid gap-8 lg:grid-cols-8 lg:gap-3">
            {workflow.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === workflow.length - 1;
              return (
                <div key={step.id} className="relative flex items-start gap-2">
                  <div className="flex w-full flex-col items-center text-center">
                    {/* Icon + step number */}
                    <div className="relative">
                      <span
                        aria-hidden
                        className="absolute inset-0 -z-10 rounded-[1.25rem] bg-gradient-to-br from-brand-blue/25 to-brand-cyan/25 blur-lg"
                      />
                      <span className="relative inline-flex h-[72px] w-[72px] items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-brand-blue to-brand-cyan text-white shadow-soft ring-4 ring-white">
                        <Icon className="h-7 w-7" strokeWidth={2.1} />
                      </span>
                      <span className="absolute -right-1.5 -top-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-extrabold text-navy-800 shadow ring-2 ring-brand-blue">
                        {step.id}
                      </span>
                    </div>

                    <h3 className="mt-4 text-sm font-bold tracking-tight text-navy-800">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-[180px] text-xs leading-snug text-navy-700/65">
                      {step.description}
                    </p>
                  </div>
                  {!isLast && (
                    <ArrowRight
                      className="absolute -right-2 top-7 hidden h-4 w-4 text-brand-blue/50 lg:block"
                      strokeWidth={2.6}
                    />
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
