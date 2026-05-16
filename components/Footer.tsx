import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

const linkGroups = [
  {
    title: "Platform",
    links: [
      { label: "Home", href: "/#home" },
      { label: "Solutions", href: "/#solutions" },
      { label: "News", href: "/news" },
      { label: "Register", href: "/register" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "WMS", href: "/#wms" },
      { label: "WCS", href: "/#wcs" },
      { label: "Traceability", href: "/#traceability" },
      { label: "IIoT", href: "/#iiot" },
      { label: "BMS", href: "/#bms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-gradient-to-b from-white to-blue-50/60">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Logo />
            <p className="max-w-md text-sm leading-relaxed text-navy-700/70">
              MSB Smart Solutions is powered by <strong>Nexus</strong> — the
              Main System Platform connecting every smart solution into one
              intelligent ecosystem.
            </p>
            <p className="text-sm font-semibold text-brand-blue">
              Connect. Automate. Empower.
            </p>
          </div>
          {linkGroups.map((g) => (
            <div key={g.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-navy-800">
                {g.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-navy-700/75 transition hover:text-brand-blue"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 border-t border-navy-100 pt-8 text-sm text-navy-700/75 sm:grid-cols-3">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-brand-blue" />
            info@msbsmartsolutions.com
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-brand-blue" />
            +66 XX XXX XXXX
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-brand-blue" />
            Thailand
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs text-navy-700/60 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} MSB Smart Solutions. All rights reserved.</span>
          <span>Powered by Nexus — The Main System Platform of MSB Smart Solutions.</span>
        </div>
      </div>
    </footer>
  );
}
