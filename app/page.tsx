import { Hero } from "@/components/home/Hero";
import { TechEcosystem } from "@/components/home/TechEcosystem";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { NewVsExisting } from "@/components/home/NewVsExisting";
import { PainPoints } from "@/components/home/PainPoints";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { ArchitectureDiagram } from "@/components/home/ArchitectureDiagram";
import { SolutionsBySize } from "@/components/home/SolutionsBySize";
import { WhyVighnex } from "@/components/home/WhyVighnex";
import { SecuritySection } from "@/components/home/SecuritySection";
import { SupportSection } from "@/components/home/SupportSection";
import { Pricing } from "@/components/home/Pricing";
import { CalculatorSection } from "@/components/home/CalculatorSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/ui/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TechEcosystem />
      <ServicesGrid />
      <NewVsExisting />
      <PainPoints />
      <ProcessTimeline />
      <ArchitectureDiagram />
      <SolutionsBySize />
      <WhyVighnex />
      <SecuritySection />
      <SupportSection />
      <Pricing />
      <CalculatorSection />
      <FAQSection />
      <CTASection
        heading="Focus on Building Your Business. We'll Handle the IT."
        text="Tell us about your business and we'll help design the technology foundation you need today — with room to grow tomorrow."
      />
    </>
  );
}
