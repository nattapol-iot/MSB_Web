import { Check, ArrowRight } from "lucide-react";
import { solutionPreviews } from "@/data/solutionPreviews";
import { illustrationById } from "./illustrations/SolutionIllustrations";

export function SolutionPreview() {
  return (
    <section className="section bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container-page flex flex-col gap-20">
        <div className="flex flex-col items-center text-center">
          <span className="h-eyebrow">Solution Highlights</span>
          <h2 className="h-section mt-2 max-w-2xl">
            Explore our flagship solutions
          </h2>
          <p className="text-muted mt-3 max-w-2xl text-base sm:text-lg">
            Each solution delivers a focused capability and integrates
            seamlessly through Nexus.
          </p>
        </div>

        {solutionPreviews.map((s, i) => {
          const Icon = s.icon;
          const reverse = i % 2 === 1;
          return (
            <div
              id={s.id}
              key={s.id}
              className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={`flex flex-col gap-5 ${reverse ? "lg:order-2" : ""}`}>
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} text-white shadow-card`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-navy-800 sm:text-3xl">
                  {s.title}
                </h3>
                <p className="text-base leading-relaxed text-navy-700/75">
                  {s.description}
                </p>
                <ul className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {s.modules.map((m) => (
                    <li
                      key={m}
                      className="flex items-center gap-2 text-sm text-navy-800"
                    >
                      <span
                        className={`inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br ${s.accent} text-white`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {m}
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <a href="#contact" className="btn-primary">
                    Request a demo
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className={reverse ? "lg:order-1" : ""}>
                {(() => {
                  const Illu = illustrationById[s.id];
                  return Illu ? <Illu /> : <PreviewMock solution={s} reverse={false} />;
                })()}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function PreviewMock({
  solution,
  reverse,
}: {
  solution: (typeof solutionPreviews)[number];
  reverse: boolean;
}) {
  const Icon = solution.icon;
  return (
    <div className={`${reverse ? "lg:order-1" : ""}`}>
      <div className="relative">
        <div
          className={`absolute -inset-6 rounded-3xl bg-gradient-to-br ${solution.accent} opacity-15 blur-2xl`}
        />
        <div className="relative overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft">
          {/* Window bar */}
          <div className="flex items-center gap-1.5 border-b border-navy-100 bg-navy-50/60 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            <span className="ml-3 text-[11px] font-semibold text-navy-700/60">
              nexus / {solution.id}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 p-5">
            <div className="col-span-2 rounded-xl border border-navy-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br ${solution.accent} text-white`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold text-navy-800">
                  {solution.short}
                </span>
              </div>
              <div className="mt-4 grid grid-cols-7 items-end gap-1.5">
                {[40, 55, 35, 70, 50, 80, 65].map((h, i) => (
                  <div
                    key={i}
                    className="rounded-t-md bg-gradient-to-t from-brand-blue to-brand-cyan"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {solution.modules.slice(0, 3).map((m) => (
                <div
                  key={m}
                  className="rounded-lg border border-navy-100 bg-white p-2.5 text-[11px] font-medium text-navy-800 shadow-sm"
                >
                  {m}
                </div>
              ))}
            </div>
            <div className="col-span-3 grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-xl border border-navy-100 bg-white p-3"
                >
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-navy-700/50">
                    Metric {i}
                  </div>
                  <div className="mt-1 text-lg font-bold text-navy-800">
                    {(82 + i * 3).toFixed(1)}%
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-navy-100">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${solution.accent}`}
                      style={{ width: `${60 + i * 10}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
