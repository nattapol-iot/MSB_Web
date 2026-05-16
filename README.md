# MSB Smart Solutions

A modern corporate / SaaS landing website for **MSB Smart Solutions**, powered by **Nexus** — the Main System Platform that connects every smart solution (WMS, WCS, Traceability, IIoT, BMS, Power Visualization, AI, Cloud, Network, Data Center, Smart Industry).

## Project Overview

This repository hosts the static marketing / landing website for MSB Smart Solutions. It is designed in a Modern Corporate / Enterprise Technology style with a Deep Navy + Blue + Cyan palette, rounded cards, soft shadows, and smooth gradients.

## Purpose

- Present MSB Smart Solutions and its complete portfolio of smart solutions.
- Position **Nexus** as the Main System Platform unifying every solution.
- Serve as a foundation for sales material, company profile, and future product pages.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **Rendering:** Static / Server Components (no backend required)
- **Data:** Local mock data arrays in `/data`

## Installation Guide

```bash
# 1. install dependencies
npm install
```

## Run Command

```bash
# development server
npm run dev
# open http://localhost:3000
```

## Build Command

```bash
# production build
npm run build

# start production server (after build)
npm run start

# lint
npm run lint
```

## Folder Structure

```
/app
  layout.tsx            # Root layout (metadata + global font/color)
  page.tsx              # Home / Landing page
  globals.css           # Tailwind + design tokens

/components
  Header.tsx
  Logo.tsx
  HeroSection.tsx
  EcosystemVisual.tsx   # Integrated ecosystem (Nexus hub + node graph)
  NexusBadge.tsx
  SolutionGrid.tsx
  SolutionCard.tsx
  KPISection.tsx
  WorkflowSection.tsx
  SolutionPreview.tsx
  WhyChooseSection.tsx
  CTASection.tsx
  Footer.tsx

/data
  solutions.ts          # Solution cards (incl. BMS)
  kpis.ts               # KPI metrics
  workflow.ts           # 8-step operational workflow (incl. Energy & BMS)
  solutionPreviews.ts   # WMS / WCS / Traceability / IIoT / BMS detail

/docs
  project-requirement.md
  design-prompt.md
  component-plan.md
  content-map.md
  reference-images.md

/assets
  /references           # Reference design images (provided by stakeholder)
```

## Component Overview

| Component | Responsibility |
| --- | --- |
| `Header` | Sticky premium header with logo, nav, and Request Demo CTA |
| `HeroSection` | Hero block with badge, headline, Nexus badge, CTAs, and ecosystem visual |
| `EcosystemVisual` | SVG/CSS illustration of all systems connected to Nexus |
| `NexusBadge` | Reusable Nexus branding chip |
| `SolutionGrid` / `SolutionCard` | Grid of all solution cards (incl. BMS) |
| `KPISection` | KPI cards with values, growth indicator, sparkline |
| `WorkflowSection` | Horizontal 8-step workflow with arrows |
| `SolutionPreview` | Long-form preview blocks for WMS, WCS, Traceability, IIoT, BMS |
| `WhyChooseSection` | MSB Smart Solutions strengths |
| `CTASection` | Final dark CTA section |
| `Footer` | Premium footer with links and contact placeholders |
