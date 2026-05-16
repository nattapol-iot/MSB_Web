import { ArrowRight } from "lucide-react";
import { NexusBadge } from "./NexusBadge";

export function CTASection() {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-brand-blue p-10 text-white shadow-soft sm:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-cyan/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-brand-blue/40 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="flex flex-col gap-5">
              <NexusBadge variant="dark" subtle />
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Build Your Smart Operation Platform?
              </h2>
              <p className="max-w-xl text-white/80">
                Let MSB Smart Solutions help you connect systems, automate
                operations, and empower your business with Nexus.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-800 shadow-soft transition hover:opacity-95"
                >
                  Request a Demo
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { k: "Uptime", v: "99.62%" },
                { k: "Devices", v: "2,458" },
                { k: "Lots Traced", v: "152K+" },
                { k: "Energy +", v: "92.4%" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="text-2xl font-bold">{s.v}</div>
                  <div className="text-xs text-white/70">{s.k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
