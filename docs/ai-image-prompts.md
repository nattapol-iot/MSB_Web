# AI Image Prompts — MSB Smart Solutions

ใช้ prompts ต่อไปนี้สร้างภาพกับ **Midjourney / DALL·E 3 / Google Imagen / Stable Diffusion XL** เพื่อทดแทน SVG illustrations เมื่อมีงบประมาณหรือต้องการคุณภาพระดับ photoreal / 3D render

> ⚠️ **License**: ตรวจสอบเงื่อนไขการใช้งาน commercial ของแต่ละ tool ก่อน deploy ลง production
>
> ⚠️ **Brand consistency**: ใช้ภาพในชุดเดียวกัน (same model, same artist, same seed) เพื่อให้ทั้งเว็บดูเป็นชุดเดียว

---

## 🎨 Style Guide (ใส่ต่อท้ายทุก prompt)

```
modern corporate enterprise SaaS illustration, isometric 3D render,
clean white background, deep navy + electric blue + cyan accents,
soft shadows, rounded edges, premium tech aesthetic, no text,
no logos, no people faces close-up, 4K, ultra detailed
```

**Negative prompt:** `text, watermark, logo, low quality, blurry, cartoon, realistic photo of branded products, copyrighted characters`

---

## 1) Hero — Integrated Ecosystem (`overall-solutions-landing.png`)

**Filename:** `assets/references/overall-solutions-landing.png` (1920×1080)

**Prompt:**
```
isometric 3D illustration of a modern smart warehouse and factory ecosystem:
high-bay storage racks filled with cardboard boxes,
conveyor belts with packages, autonomous AGV robots,
forklift, factory worker with tablet, robotic arm,
smart building skyscraper on the side,
server rack data center, large monitor dashboard showing 92%,
network tower with wifi signal,
floating UI labels reading "WMS" "WCS" "Cloud & Analytics" "Network" "Power Visualization" "Traceability" "IIoT Monitoring",
all connected by glowing blue dashed lines converging to a central transparent hexagonal hub,
white background, deep navy + electric blue + cyan gradient,
premium SaaS isometric style, soft drop shadows, 4K
```

**Place in:** `components/HeroSection.tsx` → replace `<IsometricHero />` with `<Image src="/assets/references/overall-solutions-landing.png" ... />`

---

## 2) WMS — Warehouse Management (`wms-solution-page.png`)

**Prompt:**
```
isometric 3D illustration of a smart warehouse interior:
multi-level shelving racks with stacked cardboard boxes,
forklift loading pallets, worker scanning barcode with handheld device,
small drone overhead, inventory dashboard floating above showing
bar charts and KPI cards,
white floor, soft blue ambient lighting,
deep navy and cyan color palette, premium SaaS illustration, 4K
```

---

## 3) WCS — Warehouse Control System (`wcs-solution-page.png`)

**Prompt:**
```
isometric 3D illustration of an automated warehouse control system:
long conveyor belt with sorting bins, robotic arm picking boxes,
two AGV/AMR robots moving in different directions,
ceiling-mounted shuttle system, fleet of mobile robots,
operator at control station with multiple monitors showing real-time fleet status,
green/yellow status indicators floating above each machine,
deep navy and electric blue palette, premium tech aesthetic, 4K
```

---

## 4) Traceability (`traceability-solution-page.png`)

**Prompt:**
```
isometric 3D illustration showing end-to-end product traceability:
raw material receiving area, work-in-process station with QR scanning,
quality inspection table, packaging station, shipping truck loading,
connected by glowing dotted lines forming a left-to-right flow,
floating labels "RECEIVING" "WIP TRACKING" "QUALITY CHECK"
"LABEL IDENTIFICATION" "SHIPMENT TRACE",
each step shows a holographic barcode/QR card,
white background, cyan + blue gradient highlights, 4K
```

---

## 5) IIoT (`iiot-solution-page.png`)

**Prompt:**
```
isometric 3D illustration of industrial IoT monitoring:
row of factory machines (CNC, press, lathe) with green/amber LED indicators,
IoT sensors mounted on each machine emitting concentric wifi waves,
large central dashboard screen showing OEE gauge at 92%,
line charts, alarm cards, real-time data streams,
maintenance technician with tablet,
deep navy floor, blue/cyan accent lighting, premium SaaS render, 4K
```

---

## 6) BMS — Building Management (`bms-solution-page.png`)

**Prompt:**
```
isometric 3D illustration of a smart building management system:
modern glass office tower in center,
HVAC unit on rooftop with airflow visualization,
solar panels on the roof,
smart lighting grid inside windows,
power meter and water meter on the side,
elevator shaft cross-section,
fire alarm and CCTV camera icons floating with connector lines,
all connected to a holographic central hub labeled "BMS",
green energy indicators, blue/cyan accent palette, 4K
```

---

## 7) Nexus Logo / Brand Mark (`nexus-logo.png`)

**Prompt:**
```
abstract isometric logo mark of a hexagonal network hub,
6 connecting nodes radiating outward,
deep navy + electric blue + cyan gradient,
clean geometric vector style, white background,
premium tech enterprise logo, no text, 2048x2048 transparent PNG
```

---

## 🔌 Integration Code

หลังจากบันทึกภาพแล้วใน `public/assets/references/` ให้แทนที่ SVG illustration ด้วย Next.js `<Image>`:

```tsx
// components/HeroSection.tsx
import Image from "next/image";

// แทน <IsometricHero />:
<div className="relative aspect-[5/4] w-full max-w-[640px]">
  <Image
    src="/assets/references/overall-solutions-landing.png"
    alt="MSB Smart Solutions integrated ecosystem"
    fill
    priority
    className="rounded-3xl object-cover shadow-soft"
    sizes="(min-width: 1024px) 640px, 100vw"
  />
</div>
```

```tsx
// components/SolutionPreview.tsx — แทน <Illu />:
<Image
  src={`/assets/references/${s.id}-solution-page.png`}
  alt={s.title}
  width={1200}
  height={840}
  className="rounded-3xl shadow-soft"
/>
```

**สำคัญ:**
1. ย้ายไฟล์รูปไป `public/assets/references/` (ไม่ใช่ `assets/references/` ที่ root) เพื่อให้ Next.js serve ได้
2. update `next.config.mjs` ถ้าโหลดจาก external CDN
3. ลบ SVG illustration components ที่ไม่ใช้แล้วเพื่อลด bundle size

---

## 🎯 แนวทาง Workflow

1. รัน prompt → เลือกภาพที่ดีที่สุด → upscale 4K
2. ลบพื้นหลังให้เป็น transparent (Remove.bg / Photoshop) ถ้าต้องการวางทับ background
3. Optimize: `next/image` จัดการอัตโนมัติ; หรือ pre-process ด้วย `sharp` / Squoosh เป็น WebP
4. Test responsive ทั้ง desktop / tablet / mobile
5. Commit ไฟล์เข้า `public/` (ไม่ใช่ root `assets/`)
