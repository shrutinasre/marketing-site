import { packages } from "@/data/packages";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "@/components/pricing/PricingCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function Pricing() {
  return (
    <section className="bg-neutral-50 py-20 md:py-28" id="pricing">
      <div className="container-page">
        <SectionHeading
          eyebrow="Packages"
          title="IT Packages Built Around Your Stage of Growth"
          subtitle="Pricing is tailored to your team size and requirements. These packages outline what's typically included at each stage."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <ScrollReveal key={pkg.slug} delay={i * 0.08}>
              <PricingCard pkg={pkg} />
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-neutral-600">
          Need something different? We&apos;ll design an IT package around your business.
        </p>
      </div>
    </section>
  );
}
