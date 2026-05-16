import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { VisionSection } from "@/components/VisionSection";
import { SolutionGrid } from "@/components/SolutionGrid";
import { KPISection } from "@/components/KPISection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { SolutionPreview } from "@/components/SolutionPreview";
import { BMSInfographic } from "@/components/BMSInfographic";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { CTASection } from "@/components/CTASection";
import { SloganBanner } from "@/components/SloganBanner";
import { NewsPreview } from "@/components/NewsPreview";
import { Footer } from "@/components/Footer";

export const revalidate = 21600; // 6h — keep homepage in sync with news cache

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <VisionSection />
      <SolutionGrid />
      <KPISection />
      <WorkflowSection />
      <SolutionPreview />
      <BMSInfographic />
      <WhyChooseSection />
      <NewsPreview />
      <CTASection />
      <SloganBanner />
      <Footer />
    </main>
  );
}
