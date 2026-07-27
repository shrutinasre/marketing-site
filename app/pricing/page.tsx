import type { Metadata } from "next";
import { packages } from "@/data/packages";
import { PricingCard } from "@/components/pricing/PricingCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ITCalculator } from "@/components/forms/ITCalculator";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Vighnex managed IT packages for startups and growing businesses — Startup IT, Business IT and Managed IT, tailored with a custom quote.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white md:py-24">
        <div className="container-page">
          <SectionHeading
            light
            eyebrow="Packages"
            title="IT Packages Built Around Your Stage of Growth"
            subtitle="Pricing is tailored to your team size and requirements. These packages outline what's typically included at each stage."
          />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <PricingCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-neutral-600">
          Need something different? We&apos;ll design an IT package around your business.
        </p>
      </section>

      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="IT Requirement Calculator"
            title="Get a Sense of What Your Business Needs"
            subtitle="Answer a few quick questions and we'll prepare a tailored infrastructure plan and quotation."
          />
          <div className="mx-auto mt-12 max-w-2xl">
            <ITCalculator />
          </div>
        </div>
      </section>

      <CTASection heading="Ready for a Custom Quote?" text="Tell us about your business and we'll put together a plan and pricing tailored to you." primaryLabel="Get My IT Plan" />
    </>
  );
}
