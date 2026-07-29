import type { Metadata } from "next";
import { industries } from "@/data/industries";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Industries We Support",
  description:
    "Vighnex's managed IT infrastructure supports businesses across real estate, professional services, retail, e-commerce, agencies and more.",
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
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.name} className="rounded-card border border-neutral-200 p-6">
              <h3 className="text-lg font-bold text-navy-900">{industry.name}</h3>
              <p className="mt-2 text-sm text-neutral-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </section>
      <CTASection
        heading="Don't See Your Industry?"
        text="We build IT foundations for businesses of all kinds — tell us about yours."
      />
    </>
  );
}
