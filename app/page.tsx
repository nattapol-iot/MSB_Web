import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SolutionGrid } from "@/components/SolutionGrid";
import { KPISection } from "@/components/KPISection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { SolutionPreview } from "@/components/SolutionPreview";
import { BMSInfographic } from "@/components/BMSInfographic";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { CTASection } from "@/components/CTASection";
import { SloganBanner } from "@/components/SloganBanner";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <SolutionGrid />
      <KPISection />
      <WorkflowSection />
      <SolutionPreview />
      <BMSInfographic />
      <WhyChooseSection />
      <CTASection />
      <SloganBanner />
      <Footer />
    </main>
  );
}
