# Component Plan

## Component List

- `Header`
- `Logo`
- `HeroSection`
- `EcosystemVisual`
- `NexusBadge`
- `SolutionGrid`
- `SolutionCard`
- `KPISection`
- `WorkflowSection`
- `SolutionPreview`
- `WhyChooseSection`
- `CTASection`
- `Footer`

## Responsibility of Each Component

| Component | Responsibility | Data source |
| --- | --- | --- |
| `Header` | Sticky top nav with anchor links + Request Demo CTA. Adds blur/shadow on scroll. | Inline `NAV` array |
| `Logo` | MSB Smart Solutions logo lockup + "Powered by Nexus" tagline | Static |
| `HeroSection` | Headline, description, Nexus badge, CTAs, ecosystem visual | Static |
| `EcosystemVisual` | Renders Nexus hub + 11 floating solution nodes (Warehouse, Automation, AGV/AMR, Machine, Traceability, Cloud, Network, Power Viz, AI, Data Center, BMS) with animated connector lines | Inline `NODES` array |
| `NexusBadge` | Reusable Nexus chip in light/dark variants | Static |
| `SolutionGrid` | Renders all solution cards in a responsive grid | `data/solutions.ts` |
| `SolutionCard` | Single solution card (icon, title, description, Learn more) | Prop: `solution: Solution` |
| `KPISection` | Renders 6 KPI cards with sparkline + growth indicator | `data/kpis.ts` |
| `WorkflowSection` | Renders 8-step workflow with chevron connectors | `data/workflow.ts` |
| `SolutionPreview` | Renders detailed preview blocks for WMS, WCS, Traceability, IIoT, BMS with module list + UI mock | `data/solutionPreviews.ts` |
| `WhyChooseSection` | Renders MSB strengths grid (incl. Smart Building / BMS expertise) | Inline `items` array |
| `CTASection` | Final dark CTA with stats and primary/secondary buttons | Static |
| `Footer` | Premium footer with logo, slogan, link groups, contact info | Inline `linkGroups` array |

## Props Idea

```ts
// SolutionCard
type SolutionCardProps = { solution: Solution };

// NexusBadge
type NexusBadgeProps = { variant?: "light" | "dark"; subtle?: boolean };

// Logo
type LogoProps = { compact?: boolean };
```

## Data Source Mapping

| Data file | Consumed by |
| --- | --- |
| `data/solutions.ts` | `SolutionGrid`, `SolutionCard` |
| `data/kpis.ts` | `KPISection` |
| `data/workflow.ts` | `WorkflowSection` |
| `data/solutionPreviews.ts` | `SolutionPreview` |

All data files include **BMS** as a first-class entry alongside WMS, WCS, Traceability, and IIoT. The workflow includes a dedicated **Energy & BMS Monitoring** step.
