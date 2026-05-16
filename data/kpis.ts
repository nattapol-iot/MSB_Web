import {
  Network,
  Cpu,
  PackageCheck,
  BatteryCharging,
  ScanBarcode,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type KPI = {
  id: string;
  label: string;
  value: string;
  growth: string; // e.g. "+4.2%"
  icon: LucideIcon;
  spark: number[];
};

export const kpis: KPI[] = [
  {
    id: "connected",
    label: "Connected Systems",
    value: "128",
    growth: "+6.4%",
    icon: Network,
    spark: [4, 6, 5, 8, 7, 10, 12, 11, 14],
  },
  {
    id: "devices",
    label: "Active Devices",
    value: "2,458",
    growth: "+3.1%",
    icon: Cpu,
    spark: [10, 12, 11, 14, 13, 16, 18, 17, 20],
  },
  {
    id: "orders",
    label: "Orders Processed",
    value: "18,945",
    growth: "+8.7%",
    icon: PackageCheck,
    spark: [6, 8, 9, 11, 10, 13, 15, 16, 18],
  },
  {
    id: "energy",
    label: "Energy Efficiency",
    value: "92.4%",
    growth: "+1.8%",
    icon: BatteryCharging,
    spark: [12, 13, 12, 14, 15, 14, 16, 15, 17],
  },
  {
    id: "lots",
    label: "Traceable Lots",
    value: "152,840+",
    growth: "+5.5%",
    icon: ScanBarcode,
    spark: [5, 7, 8, 7, 10, 12, 11, 14, 16],
  },
  {
    id: "uptime",
    label: "System Uptime",
    value: "99.62%",
    growth: "+0.2%",
    icon: ShieldCheck,
    spark: [16, 17, 17, 18, 17, 18, 18, 19, 19],
  },
];
