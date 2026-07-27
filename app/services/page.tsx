import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Managed IT Services",
  description:
    "Explore Vighnex's full range of managed IT services — from startup IT setup to cloud infrastructure, CRM, security, and ongoing support.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white md:py-24">
        <div className="container-page">
          <SectionHeading
            light
            eyebrow="Services"
            title="Everything Your Business Needs to Run Smoothly"
            subtitle="From foundation to growth, we manage the technology behind your business."
          />
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container-page grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <CTASection
        heading="Not Sure Which Services You Need?"
        text="Tell us about your business and we'll recommend the right starting point."
      />
    </>
  );
}
