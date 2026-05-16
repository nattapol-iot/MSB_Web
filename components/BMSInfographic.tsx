import {
  Wind,
  Lightbulb,
  Bell,
  KeyRound,
  Camera,
  ArrowUpDown,
  Zap,
  Droplets,
  Snowflake,
  Waves,
  Leaf,
  Sun,
  Monitor,
  AlarmClock,
  BatteryCharging,
  CalendarClock,
  BarChart3,
  Wrench,
  LayoutDashboard,
  Smartphone,
  Database,
  Mail,
  UserCog,
  HardHat,
  Users,
  Briefcase,
  User,
  ShieldCheck,
  Clock,
  Network,
  Gauge,
  Cpu,
  ServerCog,
  Router,
  Thermometer,
  ArrowRight,
  CheckCircle2,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import { LogoMark } from "./Logo";

type Item = { n?: number; title: string; sub?: string; icon: LucideIcon };

const subsystems: Item[] = [
  { n: 1, title: "HVAC", sub: "ระบบปรับอากาศ", icon: Wind },
  { n: 2, title: "Lighting Control", sub: "ระบบแสงสว่าง", icon: Lightbulb },
  { n: 3, title: "Fire Alarm", sub: "ระบบแจ้งเตือนเพลิงไหม้", icon: Bell },
  { n: 4, title: "Access Control", sub: "ระบบควบคุมการเข้าออก", icon: KeyRound },
  { n: 5, title: "CCTV & Security", sub: "ระบบกล้องและความปลอดภัย", icon: Camera },
  { n: 6, title: "Elevators", sub: "ระบบลิฟต์", icon: ArrowUpDown },
  { n: 7, title: "Power Meter", sub: "มิเตอร์ไฟฟ้า", icon: Zap },
  { n: 8, title: "Water Meter", sub: "มิเตอร์น้ำ", icon: Droplets },
  { n: 9, title: "Chiller Plant", sub: "ระบบชิลเลอร์", icon: Snowflake },
  { n: 10, title: "Pump & Water System", sub: "ระบบปั๊มและน้ำ", icon: Waves },
  { n: 11, title: "Air Quality Sensors", sub: "เซ็นเซอร์คุณภาพอากาศ", icon: Leaf },
  { n: 12, title: "Solar / Renewable", sub: "พลังงานทดแทน", icon: Sun },
];

const capabilities: Item[] = [
  { title: "Real-time Monitoring", icon: Monitor },
  { title: "Alarm & Event Mgmt", icon: AlarmClock },
  { title: "Energy Management", icon: BatteryCharging },
  { title: "Scheduling", icon: CalendarClock },
  { title: "Reports & Analytics", icon: BarChart3 },
  { title: "Maintenance Support", icon: Wrench },
  { title: "Web Dashboard", icon: LayoutDashboard },
  { title: "Mobile Access", icon: Smartphone },
  { title: "Historical Data", icon: Database },
  { title: "Notifications", icon: Mail },
];

const protocols = ["BACnet", "Modbus", "OPC", "TCP/IP", "IoT Gateway"];

const fieldDevices: { title: string; sub: string; icon: LucideIcon }[] = [
  { title: "Sensors", sub: "Temperature · Humidity · CO₂ · Motion", icon: Thermometer },
  { title: "Smart Meters", sub: "Electricity · Water · Gas", icon: Gauge },
  { title: "Controllers", sub: "DDC · Room Controller · I/O Module", icon: Cpu },
  { title: "PLC / BMS Controllers", sub: "PLC · BMS Controller · DDC", icon: ServerCog },
  { title: "Gateways", sub: "IoT Gateway · Edge Device", icon: Router },
];

const stakeholders: Item[] = [
  { title: "Facility Manager", icon: UserCog },
  { title: "Building Operator", icon: User },
  { title: "Maintenance Team", icon: HardHat },
  { title: "Management", icon: Briefcase },
  { title: "Tenant", icon: Users },
];

const benefits: Item[] = [
  { title: "Save Energy", sub: "ประหยัดพลังงาน ลดค่าใช้จ่าย", icon: Leaf },
  { title: "Improve Safety", sub: "เพิ่มความปลอดภัยให้กับอาคาร", icon: ShieldCheck },
  { title: "Reduce Downtime", sub: "ลดเวลาหยุดทำงาน เพิ่มความต่อเนื่อง", icon: Clock },
  { title: "Centralized Control", sub: "ควบคุมและจัดการจากศูนย์กลาง", icon: Network },
];

const bottomFeatures: Item[] = [
  { title: "Integrated Systems", sub: "เชื่อมต่อทุกระบบในอาคาร", icon: Network },
  { title: "Open & Scalable", sub: "เปิดกว้าง ขยายได้ไม่จำกัด", icon: Cloud },
  { title: "Secure & Reliable", sub: "ปลอดภัย เชื่อถือได้", icon: ShieldCheck },
  { title: "Future Ready", sub: "พร้อมรองรับอนาคต และเทคโนโลยี IoT", icon: Zap },
];

export function BMSInfographic() {
  return (
    <section className="section bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div className="container-page">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="h-eyebrow">Nexus BMS Platform</span>
          <h2 className="h-section mt-2 max-w-3xl">
            Smart Building Management — Monitor · Manage · Optimize
          </h2>
          <p className="text-muted mt-3 max-w-2xl text-base sm:text-lg">
            ระบบบริหารจัดการอาคารอัจฉริยะ ที่เชื่อมต่อทุกระบบ ทุกอุปกรณ์ และทุกผู้ใช้งานในที่เดียว
          </p>
        </div>

        {/* Main 3-column overview */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left: 12 subsystems */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-3">
              {subsystems.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="group flex items-start gap-2.5 rounded-xl border border-navy-100 bg-white p-3 shadow-card transition hover:-translate-y-0.5 hover:border-brand-blue/40"
                  >
                    <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 text-brand-blue">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
                      <span className="absolute -left-1.5 -top-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan text-[9px] font-bold text-white shadow">
                        {s.n}
                      </span>
                    </span>
                    <div className="min-w-0">
                      <div className="text-[12px] font-bold text-navy-800">
                        {s.title}
                      </div>
                      <div className="text-[10px] leading-tight text-navy-700/60">
                        {s.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center: Nexus hub */}
          <div className="flex items-center justify-center lg:col-span-4">
            <div className="relative w-full max-w-xs">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20 blur-2xl" />
              <div className="relative flex flex-col items-center gap-4 rounded-3xl border border-navy-100 bg-white p-8 text-center shadow-soft">
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-900 via-brand-blue to-brand-cyan shadow-glow">
                  <LogoMark size={44} />
                </span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Powered by Nexus
                  </div>
                  <div className="mt-1 text-xl font-extrabold tracking-tight text-navy-800">
                    Nexus BMS Platform
                  </div>
                  <div className="mt-1 text-[11px] leading-snug text-navy-700/65">
                    ระบบบริหารจัดการอาคารอัจฉริยะ ของ MSB Smart Solutions
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-1.5">
                  {["Monitor", "Manage", "Optimize"].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-cyan/10 px-2.5 py-1 text-[10px] font-semibold text-brand-blue"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: capabilities */}
          <div className="lg:col-span-4">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-navy-800 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              <Monitor className="h-3 w-3" />
              Monitor · Manage · Optimize
            </div>
            <div className="grid grid-cols-2 gap-3">
              {capabilities.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-navy-100 bg-white p-3 text-center shadow-card transition hover:-translate-y-0.5 hover:border-brand-blue/40"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan text-white">
                      <Icon className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                    <span className="text-[11px] font-semibold leading-tight text-navy-800">
                      {c.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Communication Protocols */}
        <div className="mt-10">
          <div className="mx-auto inline-flex w-full items-center justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-navy-100 bg-white px-4 py-3 shadow-card">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-navy-700/70">
                Communication Protocols
              </span>
              <span className="hidden h-4 w-px bg-navy-100 sm:block" />
              {protocols.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-3 py-1 text-[11px] font-bold text-white shadow-sm"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Field Devices */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              <Cpu className="h-3 w-3" />
              Field Devices & Communication Layer
            </span>
          </div>
          <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:gap-2">
            {fieldDevices.map((d, i) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="flex flex-1 items-center gap-2">
                  <div className="flex w-full flex-col items-center gap-2 rounded-xl border border-navy-100 bg-white p-3 text-center shadow-card">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 text-brand-blue">
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <div className="text-[12px] font-bold text-navy-800">
                      {d.title}
                    </div>
                    <div className="text-[10px] leading-tight text-navy-700/60">
                      {d.sub}
                    </div>
                  </div>
                  {i < fieldDevices.length - 1 && (
                    <ArrowRight className="hidden h-4 w-4 shrink-0 text-brand-blue/40 lg:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Users & Key Benefits */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-card">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue">
              <Users className="h-3 w-3" />
              Users & Stakeholders
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {stakeholders.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="flex flex-col items-center gap-1.5 text-center"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-navy-800 to-brand-blue text-white">
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <span className="text-[11px] font-semibold leading-tight text-navy-800">
                      {s.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-card">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
              <CheckCircle2 className="h-3 w-3" />
              Key Benefits
            </div>
            <div className="grid grid-cols-2 gap-3">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="flex items-start gap-2.5 rounded-xl border border-navy-100 bg-gradient-to-br from-white to-blue-50/40 p-3"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan text-white">
                      <Icon className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[12px] font-bold text-navy-800">
                        {b.title}
                      </div>
                      <div className="text-[10px] leading-tight text-navy-700/60">
                        {b.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom feature bar */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-navy-900 via-brand-blue to-brand-cyan p-1">
          <div className="grid gap-3 rounded-xl bg-navy-900/20 px-4 py-4 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
            {bottomFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex items-center gap-3 text-white">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur">
                    <Icon className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[12px] font-bold">{f.title}</div>
                    <div className="text-[10px] leading-tight text-white/75">
                      {f.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
