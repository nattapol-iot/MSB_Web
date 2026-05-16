"use client";

import { useState, type FormEvent } from "react";
import {
  User,
  Building,
  Mail,
  Phone,
  Globe,
  Briefcase,
  Users,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Loader2,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { solutions } from "@/data/solutions";

type FormState = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  industry: string;
  companySize: string;
  interests: string[];
  message: string;
  consent: boolean;
};

const initial: FormState = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  country: "Thailand",
  industry: "Manufacturing",
  companySize: "51-200",
  interests: [],
  message: "",
  consent: false,
};

const industries = [
  "Manufacturing",
  "Logistics & Warehousing",
  "Retail & E-commerce",
  "Food & Beverage",
  "Pharmaceutical & Healthcare",
  "Building & Facility",
  "Automotive",
  "Electronics",
  "Other",
];

const sizes = ["1-50", "51-200", "201-500", "501-1000", "1000+"];

const countries = [
  "Thailand",
  "Vietnam",
  "Indonesia",
  "Malaysia",
  "Singapore",
  "Philippines",
  "Japan",
  "Other",
];

export function RegisterForm() {
  const [data, setData] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function toggleInterest(id: string) {
    setData((d) => ({
      ...d,
      interests: d.interests.includes(id)
        ? d.interests.filter((x) => x !== id)
        : [...d.interests, id],
    }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("loading");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.message || "Submission failed");
      setStatus("success");
      setData(initial);
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="card-base !p-8 text-center">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-glow">
          <CheckCircle2 className="h-8 w-8" strokeWidth={2.2} />
        </span>
        <h3 className="mt-5 text-2xl font-bold tracking-tight text-navy-800">
          Registration received!
        </h3>
        <p className="mt-2 text-sm text-navy-700/70">
          ขอบคุณที่ลงทะเบียนกับ MSB Smart Solutions — ทีมงานจะติดต่อกลับภายใน 1
          วันทำการ
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-ghost mt-6"
          type="button"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft">
      {/* Form header */}
      <div className="relative overflow-hidden border-b border-navy-100 bg-gradient-to-br from-navy-900 via-brand-blue to-brand-cyan p-6 text-white sm:p-7">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse at top right, black 30%, transparent 80%)",
          }}
        />
        <div className="relative">
          <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/75">
            Get Started
          </div>
          <h2 className="mt-1 text-2xl font-extrabold tracking-tight">
            Tell us about you
          </h2>
          <p className="mt-1.5 text-sm text-white/80">
            ใช้เวลาประมาณ 2 นาที — ทีมงานติดต่อกลับภายใน 1 วันทำการ
          </p>
        </div>
      </div>

      <div className="space-y-7 p-6 sm:p-8">
        {error && (
          <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            {error}
          </div>
        )}

        {/* Section: Personal */}
        <SectionHeader number={1} title="Your details" />
        <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Full Name"
          required
          icon={User}
          value={data.fullName}
          onChange={(v) => update("fullName", v)}
          placeholder="Jane Doe"
        />
        <Field
          label="Company"
          required
          icon={Building}
          value={data.company}
          onChange={(v) => update("company", v)}
          placeholder="ACME Corp."
        />
        <Field
          label="Business Email"
          required
          type="email"
          icon={Mail}
          value={data.email}
          onChange={(v) => update("email", v)}
          placeholder="you@company.com"
        />
        <Field
          label="Phone"
          type="tel"
          icon={Phone}
          value={data.phone}
          onChange={(v) => update("phone", v)}
          placeholder="+66 81 234 5678"
        />
        <SelectField
          label="Country"
          icon={Globe}
          value={data.country}
          options={countries}
          onChange={(v) => update("country", v)}
        />
        <SelectField
          label="Industry"
          icon={Briefcase}
          value={data.industry}
          options={industries}
          onChange={(v) => update("industry", v)}
        />
        <SelectField
          label="Company Size"
          icon={Users}
          value={data.companySize}
          options={sizes}
          onChange={(v) => update("companySize", v)}
        />
      </div>

        {/* Section: Interests */}
        <div>
          <SectionHeader number={2} title="Solutions of interest" subtitle="เลือกได้มากกว่า 1" />
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => {
              const checked = data.interests.includes(s.id);
              const Icon = s.icon;
              return (
                <label
                  key={s.id}
                  className={`flex h-[60px] cursor-pointer items-center gap-2.5 rounded-xl border px-3 transition ${
                    checked
                      ? "border-brand-blue bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5 shadow-card"
                      : "border-navy-100 bg-white hover:border-brand-blue/40"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={() => toggleInterest(s.id)}
                  />
                  <span
                    className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${s.accent} text-white shadow-sm`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={2.4} />
                  </span>
                  <span className="flex-1 text-[12px] font-semibold leading-tight text-navy-800">
                    {s.title}
                  </span>
                  <span
                    className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition ${
                      checked
                        ? "border-brand-blue bg-brand-blue text-white"
                        : "border-navy-200"
                    }`}
                  >
                    {checked && <CheckCircle2 className="h-3 w-3" strokeWidth={3} />}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Section: Message */}
        <div>
          <SectionHeader number={3} title="Project context" subtitle="ทางเลือก" />
          <FieldLabel>
            <MessageSquare className="h-3.5 w-3.5" />
            Tell us about your project
          </FieldLabel>
          <textarea
            value={data.message}
            onChange={(e) => update("message", e.target.value)}
            rows={4}
            placeholder="What problems are you trying to solve? What systems do you need to connect?"
            className="mt-2 w-full rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm text-navy-800 outline-none transition placeholder:text-navy-700/40 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
          />
        </div>

        {/* Consent */}
        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/60 p-3">
          <input
            type="checkbox"
            required
            checked={data.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-navy-200 text-brand-blue focus:ring-brand-blue"
          />
          <span className="text-xs leading-relaxed text-navy-700/80">
            ฉันยินยอมให้ MSB Smart Solutions ติดต่อกลับและประมวลผลข้อมูลตามที่ระบุไว้ใน
            <a href="#" className="font-semibold text-brand-blue hover:underline">
              {" "}
              Privacy Policy
            </a>
          </span>
        </label>

        {/* Submit */}
        <div className="flex flex-col gap-3 border-t border-navy-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-navy-700/60">
            <ShieldCheck className="-mt-0.5 mr-1 inline h-3.5 w-3.5 text-brand-blue" />
            Your information is encrypted and used only for sales follow-up.
          </p>
          <button
            type="submit"
            disabled={status === "loading" || !data.consent}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting…
              </>
            ) : (
              <>
                Submit registration
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

/* ============ Sub fields ============ */

function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: number;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan text-[11px] font-extrabold text-white shadow-card">
        {number}
      </span>
      <h3 className="text-base font-bold tracking-tight text-navy-800">
        {title}
      </h3>
      {subtitle && (
        <span className="ml-auto text-[10px] font-semibold uppercase tracking-[0.18em] text-navy-700/50">
          {subtitle}
        </span>
      )}
    </div>
  );
}


function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-700/70">
      {children}
    </span>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  icon: Icon,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  icon: React.ComponentType<{ className?: string }>;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <FieldLabel>
        <Icon className="h-3.5 w-3.5" />
        {label}
        {required && <span className="text-red-500">*</span>}
      </FieldLabel>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-navy-100 bg-white px-4 py-2.5 text-sm text-navy-800 outline-none transition placeholder:text-navy-700/40 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  icon: Icon,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <FieldLabel>
        <Icon className="h-3.5 w-3.5" />
        {label}
      </FieldLabel>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-navy-100 bg-white px-4 py-2.5 text-sm text-navy-800 outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
