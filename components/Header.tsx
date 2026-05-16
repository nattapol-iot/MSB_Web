"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "WMS", href: "#wms" },
  { label: "WCS", href: "#wcs" },
  { label: "Traceability", href: "#traceability" },
  { label: "IIoT", href: "#iiot" },
  { label: "BMS", href: "#bms" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "border-b border-navy-100/70 bg-white/85 backdrop-blur-md shadow-sm"
          : "bg-white/60 backdrop-blur"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-navy-700/80 transition hover:text-brand-blue"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="/register"
            className="text-sm font-semibold text-navy-700 transition hover:text-brand-blue"
          >
            Register
          </a>
          <a href="/register" className="btn-primary">
            Request Demo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <button
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center rounded-lg border border-navy-100 p-2 text-navy-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-navy-100 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-navy-700 hover:bg-navy-50"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/register"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-navy-800 hover:bg-navy-50"
            >
              Register
            </a>
            <a
              href="/register"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Request Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
