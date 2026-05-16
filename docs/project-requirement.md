# Project Requirement — MSB Smart Solutions Website

## Company Information

- **Company name:** MSB Smart Solutions
- **Main system platform:** **Nexus**
- **Slogan:** Connect. Automate. Empower.
- **Brand messages:**
  - Powered by Nexus
  - The Main System Platform of MSB Smart Solutions
  - One Platform for All Smart Solutions

## Business Overview

MSB Smart Solutions designs, develops, and integrates smart solutions for warehousing, automation, traceability, IIoT, building management, energy, AI, cloud, network, and data center. All solutions are unified through Nexus — the company's Main System Platform.

## Solution List

1. **WMS** — Warehouse Management System
2. **WCS** — Warehouse Control System
3. **Traceability** — End-to-end product traceability
4. **IIoT Monitoring** — Industrial IoT, asset & machine monitoring
5. **BMS** — Building Management System (HVAC, lighting, utilities, energy, alarms, environment)
6. **Power Visualization** — Energy usage & performance dashboards
7. **AI Service** — Intelligent services powered by AI
8. **Cloud** — Scalable cloud infrastructure
9. **Network Infrastructure** — Reliable connectivity & secure network
10. **Data Center** — Secure and scalable data center solutions
11. **Smart Industry** — Digital solutions for smart factories

## Website Structure

1. Header (sticky)
2. Hero Section (Integrated Ecosystem visual + Nexus positioning)
3. Solution Cards Section
4. Integrated Platform Overview (KPIs)
5. How All Solutions Work Together (8-step Workflow)
6. Individual Solution Preview Sections — WMS, WCS, Traceability, IIoT, BMS
7. Why Choose MSB Smart Solutions
8. Final CTA
9. Footer

## Page Requirements

- Single landing page (`/`) with anchor-based navigation.
- All content is static, sourced from `/data/*.ts` mock arrays.
- No copyrighted images — use CSS, SVG, and Lucide icons.
- Brand emphasis on Nexus as the Main System Platform.
- BMS must be presented as a **main solution**, not a sub-feature.

## Responsive Requirements

- **Desktop (≥ 1024px):** 3–4 column grids, side-by-side hero, horizontal workflow.
- **Tablet (≥ 640px):** 2 column grids, stacked hero on smaller widths.
- **Mobile (< 640px):** Single column, collapsible navigation, vertical workflow.

## Future Extension Notes

- Add individual solution pages (`/solutions/[id]`) reusing `SolutionPreview` data.
- Add multi-language support (TH/EN).
- Connect "Request Demo" / "Contact Sales" forms to backend or 3rd-party form service.
- Add real customer logos, testimonials, and case studies.
- Add CMS integration (e.g. Sanity / Contentful) for editorial content.
- Replace SVG/CSS placeholders with real product UI screenshots once available.
