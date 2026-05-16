import {
  Boxes,
  Cog,
  ScanLine,
  Activity,
  Gauge,
  Sparkles,
  Cloud,
  Network,
  Server,
  Factory,
  Building2,
  type LucideIcon,
} from "lucide-react";

export type Solution = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string; // tailwind gradient classes
};

export const solutions: Solution[] = [
  {
    id: "wms",
    title: "WMS",
    description: "Warehouse management made efficient.",
    icon: Boxes,
    accent: "from-blue-500 to-cyan-500",
  },
  {
    id: "wcs",
    title: "WCS",
    description: "Control, optimize, and orchestrate operations.",
    icon: Cog,
    accent: "from-indigo-500 to-blue-500",
  },
  {
    id: "traceability",
    title: "Traceability",
    description: "End-to-end visibility and product traceability.",
    icon: ScanLine,
    accent: "from-cyan-500 to-teal-500",
  },
  {
    id: "iiot",
    title: "IIoT Monitoring",
    description: "Real-time monitoring of assets and machines.",
    icon: Activity,
    accent: "from-sky-500 to-indigo-500",
  },
  {
    id: "bms",
    title: "BMS",
    description: "Smart building monitoring and facility control system.",
    icon: Building2,
    accent: "from-emerald-500 to-cyan-500",
  },
  {
    id: "power",
    title: "Power Visualization",
    description: "Visualize energy usage and performance.",
    icon: Gauge,
    accent: "from-amber-500 to-orange-500",
  },
  {
    id: "ai",
    title: "AI Service",
    description: "Intelligent services powered by AI.",
    icon: Sparkles,
    accent: "from-fuchsia-500 to-violet-500",
  },
  {
    id: "cloud",
    title: "Cloud",
    description: "Scalable cloud infrastructure.",
    icon: Cloud,
    accent: "from-blue-400 to-sky-500",
  },
  {
    id: "network",
    title: "Network Infrastructure",
    description: "Reliable connectivity and secure network.",
    icon: Network,
    accent: "from-slate-500 to-blue-600",
  },
  {
    id: "datacenter",
    title: "Data Center",
    description: "Secure and scalable data center solutions.",
    icon: Server,
    accent: "from-navy-700 to-blue-600",
  },
  {
    id: "smart-industry",
    title: "Smart Industry",
    description: "Digital solutions for smart factories and industries.",
    icon: Factory,
    accent: "from-cyan-600 to-blue-700",
  },
];
