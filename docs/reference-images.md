# Reference Images

All reference designs are stored under `/assets/references`. They serve as the visual north-star for each section of the site. When real product imagery is not available, CSS / SVG / Lucide-icon placeholders are used to mimic the structure of these references.

| File | Purpose |
| --- | --- |
| `nexus-logo.png` | Reference for the Nexus Main Platform logo. Inspires the `Logo`, `NexusBadge`, and the central Nexus hub inside `EcosystemVisual`. |
| `overall-solutions-landing.png` | Main reference for the Home / Landing page — especially the Hero section and the integrated ecosystem visual showing every solution connected to Nexus. |
| `wms-solution-page.png` | Reference for the WMS preview section (layout, module list style, dashboard mock). |
| `wcs-solution-page.png` | Reference for the WCS preview section (orchestration & control visuals). |
| `traceability-solution-page.png` | Reference for the Traceability preview section (scanning, lineage, history). |
| `iiot-solution-page.png` | Reference for the IIoT preview section (machine monitoring, OEE, alerts). |

## Usage Notes

- BMS does **not** have its own reference image. Its preview block uses the same layout language as the WMS / WCS / Traceability / IIoT references, with iconography (Building, Fan/Thermometer, Lightbulb, Gauge, Bell, Activity) communicating smart-building / facility monitoring.
- When real screenshots become available, replace the `PreviewMock` UI inside `components/SolutionPreview.tsx` with `<Image />` references to those assets.
- No copyrighted imagery is used. All visuals are CSS, SVG, or Lucide icons.
