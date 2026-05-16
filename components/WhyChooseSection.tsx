import {
  Layers,
  Factory,
  Cpu,
  Code2,
  PlugZap,
  LayoutDashboard,
  Hexagon,
  Building2,
} from "lucide-react";

const items = [
  {
    title: "End-to-end solution design",
    description:
      "From consulting to deployment, we design complete digital operations.",
    icon: Layers,
  },
  {
    title: "Industrial & warehouse expertise",
    description:
      "Deep domain experience in manufacturing, logistics, and supply chain.",
    icon: Factory,
  },
  {
    title: "IoT and automation integration",
    description:
      "Seamless integration between sensors, machines, and automation equipment.",
    icon: Cpu,
  },
  {
    title: "Custom software development",
    description:
      "Tailored applications built around your processes and KPIs.",
    icon: Code2,
  },
  {
    title: "PLC, machine, and equipment connectivity",
    description:
      "Native connectivity to PLCs, controllers, robots, and industrial equipment.",
    icon: PlugZap,
  },
  {
    title: "Dashboard, analytics & data visualization",
    description:
      "Beautiful, real-time dashboards that drive operational decisions.",
    icon: LayoutDashboard,
  },
  {
    title: "Smart building & BMS expertise",
    description:
      "HVAC, lighting, utilities, and environment monitoring integrated into Nexus.",
    icon: Building2,
  },
  {
    title: "Scalable platform powered by Nexus",
    description:
      "One Main System Platform unifying every solution across your enterprise.",
    icon: Hexagon,
  },
];

export function WhyChooseSection() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="h-eyebrow">Why MSB Smart Solutions</span>
          <h2 className="h-section mt-2 max-w-2xl">
            Built to power your smart operation
          </h2>
          <p className="text-muted mt-3 max-w-2xl text-base sm:text-lg">
            A strategic partner combining deep industry expertise with a modern,
            scalable platform.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="card-base flex flex-col gap-3 hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 text-brand-blue">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <h3 className="text-base font-semibold text-navy-800">{title}</h3>
              <p className="text-sm leading-relaxed text-navy-700/70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
