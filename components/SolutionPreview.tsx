import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { solutionPreviews } from "@/data/solutionPreviews";

const solutionImages: Record<string, { src: string; alt: string }> = {
  wms: {
    src: "/images/solutions/wms-operation.png",
    alt: "Warehouse Management System operation showing receiving, inventory, picking, packing, and shipping workflows",
  },
  wcs: {
    src: "/images/solutions/wcs-operation.png",
    alt: "Warehouse Control System operation showing conveyors, sortation, shuttles, AGV and AMR orchestration",
  },
  traceability: {
    src: "/images/solutions/traceability-operation.png",
    alt: "Traceability System operation showing barcode scanning, WIP tracking, quality checks, labeling, and shipment trace records",
  },
  iiot: {
    src: "/images/solutions/iiot-operation.png",
    alt: "Industrial IoT operation showing connected machines, gateways, OEE dashboards, alarms, energy monitoring, and analytics",
  },
  bms: {
    src: "/images/solutions/bms-operation.png",
    alt: "Building Management System operation showing HVAC, lighting, energy, alarms, sensors, dashboards, and maintenance monitoring",
  },
};

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
                <SolutionOperationImage
                  accent={s.accent}
                  image={solutionImages[s.id]}
                  title={s.title}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function SolutionOperationImage({
  accent,
  image,
  title,
}: {
  accent: string;
  image?: { src: string; alt: string };
  title: string;
}) {
  if (!image) return null;

  return (
    <div className="relative">
      <div
        className={`absolute -inset-6 rounded-3xl bg-gradient-to-br ${accent} opacity-15 blur-2xl`}
      />
      <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/85 via-white/35 to-transparent p-5">
          <div className="inline-flex rounded-full border border-navy-100 bg-white/90 px-3 py-1 text-xs font-semibold text-navy-800 shadow-sm backdrop-blur">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
