import {
  Database,
  Warehouse,
  Cog,
  ScanLine,
  Zap,
  BrainCircuit,
  LayoutDashboard,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type WorkflowStep = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const workflow: WorkflowStep[] = [
  {
    id: 1,
    title: "Data Collection",
    description:
      "Capture data from devices, machines, sensors, and systems in real time.",
    icon: Database,
  },
  {
    id: 2,
    title: "Warehouse & Facility Operations",
    description:
      "Manage inventory, receiving, storage, picking, packing, shipping, and facility operations.",
    icon: Warehouse,
  },
  {
    id: 3,
    title: "Automation Control",
    description:
      "WCS orchestrates conveyors, robots, AGV/AMR, and automation equipment.",
    icon: Cog,
  },
  {
    id: 4,
    title: "Traceability",
    description:
      "Track materials and products from inbound to outbound with full visibility.",
    icon: ScanLine,
  },
  {
    id: 5,
    title: "Energy & BMS Monitoring",
    description:
      "Monitor energy, HVAC, lighting, utilities, alarms, and environment via BMS.",
    icon: Zap,
  },
  {
    id: 6,
    title: "Analytics & AI",
    description:
      "Convert operational data into insights and optimization recommendations.",
    icon: BrainCircuit,
  },
  {
    id: 7,
    title: "Dashboard & Alerts",
    description:
      "Real-time dashboards and alerts keep teams informed and proactive.",
    icon: LayoutDashboard,
  },
  {
    id: 8,
    title: "Business Optimization",
    description:
      "Improve efficiency, reduce cost, ensure compliance, and support growth.",
    icon: TrendingUp,
  },
];
