import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RegisterForm } from "@/components/RegisterForm";
import { NexusBadge } from "@/components/NexusBadge";
import { ShieldCheck, Clock, Rocket } from "lucide-react";

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

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial" aria-hidden />
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="container-page relative grid gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: pitch */}
          <div className="flex flex-col gap-6">
            <span className="badge-soft self-start">Customer Registration</span>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-navy-800 sm:text-4xl lg:text-5xl">
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
            <ul className="mt-2 flex flex-col gap-4">
              {perks.map((p) => {
                const Icon = p.icon;
                return (
                  <li key={p.title} className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 text-brand-blue">
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <div>
                      <div className="text-sm font-bold text-navy-800">
                        {p.title}
                      </div>
                      <div className="text-sm text-navy-700/70">{p.desc}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: form */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 blur-2xl" />
            <div className="relative">
              <RegisterForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
