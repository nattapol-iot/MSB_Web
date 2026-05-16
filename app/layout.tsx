import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MSB Smart Solutions — One Platform for All Smart Solutions",
  description:
    "MSB Smart Solutions connects warehouse, automation, traceability, IIoT, BMS, analytics, cloud, network, and energy solutions in one intelligent ecosystem powered by Nexus.",
  keywords: [
    "MSB Smart Solutions",
    "Nexus",
    "WMS",
    "WCS",
    "Traceability",
    "IIoT",
    "BMS",
    "Smart Industry",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
