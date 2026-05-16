import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RegisterForm } from "@/components/RegisterForm";
import { NexusBadge } from "@/components/NexusBadge";
import {
  ShieldCheck,
  Clock,
  Rocket,
  Sparkles,
  CheckCircle2,
  Quote,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Register — MSB Smart Solutions",
  description:
    "Register your interest in MSB Smart Solutions. Our team will contact you within one business day to schedule a personalized demo of Nexus.",
};

const perks = [
  {
    icon: Rocket,
    title: "Personalized demo",
    desc: "Tailored to your industry, scale, and use cases.",
  },
  {
    icon: Clock,
    title: "Reply within 1 business day",
    desc: "Our solution architects will reach out to schedule a call.",
  },
  {
    icon: ShieldCheck,
    title: "Your data is protected",
    desc: "We never share your information. Used only for sales follow-up.",
  },
];

const stats = [
  { value: "200+", label: "Enterprise customers" },
  { value: "11", label: "Integrated solutions" },
  { value: "99.9%", label: "Platform uptime" },
];

const inclusions = [
  "30-min discovery call with a solution architect",
  "Live walk-through of Nexus tailored to your stack",
  "ROI estimate and rollout roadmap",
  "Reference architecture & integration patterns",
];

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial" aria-hidden />
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div
          aria-hidden
          className="absolute -left-40 top-32 h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-brand-cyan/15 blur-3xl"
        />

        <div className="container-page relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[0.95fr_1.15fr] lg:gap-12 lg:py-20">
          {/* Left: pitch */}
          <div className="flex flex-col gap-6">
            <span className="badge-soft self-start">
              <Sparkles className="h-3.5 w-3.5 text-brand-blue" />
              Customer Registration
            </span>
            <h1 className="text-3xl font-bold leading-[1.05] tracking-tight text-navy-800 sm:text-4xl lg:text-5xl">
              Start your journey with{" "}
              <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
                MSB Smart Solutions
              </span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-navy-700/75">
              ลงทะเบียนเพื่อรับการนำเสนอแบบเฉพาะธุรกิจของคุณ — เราจะช่วยออกแบบ
              solution บนแพลตฟอร์ม Nexus ที่เหมาะกับ operation ของคุณที่สุด
            </p>

            <NexusBadge />

            {/* What you'll get */}
            <div className="rounded-2xl border border-navy-100 bg-white/80 p-5 shadow-card backdrop-blur">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                <Sparkles className="h-3.5 w-3.5" />
                What&apos;s included
              </div>
              <ul className="mt-3 flex flex-col gap-2.5">
                {inclusions.map((line) => (
                  <li key={line} className="flex items-start gap-2.5 text-sm text-navy-800">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" strokeWidth={2.4} />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perks */}
            <ul className="grid gap-3 sm:grid-cols-1">
              {perks.map((p) => {
                const Icon = p.icon;
                return (
                  <li
                    key={p.title}
                    className="flex items-start gap-3 rounded-xl border border-navy-100 bg-white/70 p-3 backdrop-blur"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white shadow-card">
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <div>
                      <div className="text-sm font-bold text-navy-800">{p.title}</div>
                      <div className="text-sm text-navy-700/70">{p.desc}</div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Testimonial */}
            <figure className="relative mt-2 overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 via-brand-blue to-brand-cyan p-5 text-white shadow-soft">
              <Quote className="absolute -right-2 -top-2 h-20 w-20 text-white/10" />
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
                ))}
              </div>
              <blockquote className="relative mt-3 text-sm leading-relaxed">
                &ldquo;Nexus connected our WMS, WCS, and BMS in weeks — single pane of glass for all operations.&rdquo;
              </blockquote>
              <figcaption className="relative mt-3 text-[11px] text-white/75">
                <strong className="font-bold text-white">Operations Director</strong>
                {" "}· Leading Manufacturing & Logistics Group
              </figcaption>
            </figure>
          </div>

          {/* Right: form */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand-blue/15 to-brand-cyan/15 blur-2xl" />
            <div className="relative">
              <RegisterForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-navy-100 bg-gradient-to-b from-white to-blue-50/60">
        <div className="container-page grid gap-6 py-8 sm:grid-cols-3 sm:gap-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-navy-700/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
