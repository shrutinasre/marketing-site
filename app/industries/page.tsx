import type { Metadata } from "next";
import { industries } from "@/data/industries";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { StaggerReveal, StaggerItem } from "@/components/animations/ScrollReveal";
import {
  Building2,
  Briefcase,
  Users,
  LineChart,
  ShoppingBag,
  ShoppingCart,
  Megaphone,
  HardHat,
  Truck,
  HeartPulse,
  GraduationCap,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Support",
  description:
    "Vighnex's managed IT infrastructure supports businesses across real estate, professional services, retail, e-commerce, agencies and more.",
};

const industryIcons: Record<string, typeof Building2> = {
  "Real Estate": Building2,
  "Professional Services": Briefcase,
  Consulting: Users,
  Trading: LineChart,
  Retail: ShoppingBag,
  "E-commerce": ShoppingCart,
  Agencies: Megaphone,
  Construction: HardHat,
  Logistics: Truck,
  "Healthcare Administration": HeartPulse,
  "Education Businesses": GraduationCap,
  "Technology Startups": Rocket,
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white md:py-24">
        <div className="container-page">
          <SectionHeading
            light
            eyebrow="Industries"
            title="Infrastructure That Adapts to Your Industry"
            subtitle="The technology foundation businesses need is similar across industries — professional email, cloud infrastructure, business systems, security and support — configured to fit how your business actually operates."
          />
        </div>
      </section>
      <section className="py-16 md:py-20">
        <StaggerReveal className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industryIcons[industry.name] ?? Building2;
            return (
              <StaggerItem key={industry.name}>
                <div className="h-full rounded-card border border-neutral-200 p-6 transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">{industry.name}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{industry.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </section>
      <CTASection
        heading="Don't See Your Industry?"
        text="We build IT foundations for businesses of all kinds — tell us about yours."
      />
    </>
  );
}
