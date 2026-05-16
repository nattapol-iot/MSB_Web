import {
  Boxes,
  Cog,
  ScanLine,
  Activity,
  Building2,
  Gauge,
  type LucideIcon,
} from "lucide-react";

export type SolutionPreview = {
  id: string;
  title: string;
  short: string;
  description: string;
  modules: string[];
  icon: LucideIcon;
  accent: string;
};

export const solutionPreviews: SolutionPreview[] = [
  {
    id: "wms",
    title: "Warehouse Management System (WMS)",
    short: "Smart, accurate, end-to-end warehouse operations",
    description:
      "End-to-end visibility and smart control of warehouse operations to improve accuracy, efficiency, and service levels.",
    modules: [
      "Inbound Receiving",
      "Put-away Management",
      "Inventory Control",
      "Replenishment",
      "Picking & Packing",
      "Shipping Management",
    ],
    icon: Boxes,
    accent: "from-blue-500 to-cyan-500",
  },
  {
    id: "wcs",
    title: "Warehouse Control System (WCS)",
    short: "Orchestrate people, equipment, and processes",
    description:
      "Centralized control and real-time coordination of people, equipment, and processes for seamless warehouse automation.",
    modules: [
      "Equipment Interface",
      "Task Orchestration",
      "Conveyor & Sortation Control",
      "AGV/AMR Coordination",
      "Shuttle Movement",
      "Exception Handling",
      "Order Release",
      "Real-time Monitoring",
    ],
    icon: Cog,
    accent: "from-indigo-500 to-blue-500",
  },
  {
    id: "traceability",
    title: "Traceability System",
    short: "Track every material, process, and product",
    description:
      "Track every material, process, and product in real time from raw material to finished goods.",
    modules: [
      "Material Registration",
      "Barcode / QR Scanning",
      "Work-in-Process Tracking",
      "Process History Capture",
      "Quality Linkage",
      "Label Identification",
      "Shipment Trace Records",
      "History Query & Report",
    ],
    icon: ScanLine,
    accent: "from-cyan-500 to-teal-500",
  },
  {
    id: "iiot",
    title: "Industrial IoT (IIoT)",
    short: "Connect machines and unlock actionable insights",
    description:
      "Connect machines, collect data, monitor operations, trigger alerts, and generate actionable insights.",
    modules: [
      "Machine Monitoring",
      "OEE Dashboard",
      "Alarm Notification",
      "Energy Monitoring",
      "Data Collection Gateway",
      "Report & Analytics",
    ],
    icon: Activity,
    accent: "from-sky-500 to-indigo-500",
  },
  {
    id: "power",
    title: "Power Visualization Solution",
    short: "Measure, monitor, and optimize energy usage",
    description:
      "Gain real-time visibility into electricity consumption, demand, power quality, and utility costs. Turn energy data into actionable insights for smarter operations and cost reduction.",
    modules: [
      "Power Meter Integration",
      "Real-time Energy Dashboard",
      "Consumption Analysis",
      "Power Quality Monitoring",
      "Cost & Demand Control",
      "Alerts & Reporting",
    ],
    icon: Gauge,
    accent: "from-amber-500 to-orange-500",
  },
  {
    id: "bms",
    title: "Building Management System (BMS)",
    short: "Smart building & facility monitoring",
    description:
      "Monitor and control building facilities, utilities, energy usage, HVAC, lighting, alarms, and environmental conditions through a centralized smart platform.",
    modules: [
      "HVAC Monitoring",
      "Lighting Control",
      "Utility Monitoring",
      "Energy Meter Integration",
      "Alarm & Event Monitoring",
      "Temperature & Humidity Monitoring",
      "Facility Dashboard",
      "Maintenance Notification",
    ],
    icon: Building2,
    accent: "from-emerald-500 to-cyan-500",
  },
];
