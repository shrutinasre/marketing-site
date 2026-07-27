import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const featuredSlugs = [
  "startup-it-setup",
  "cloud-infrastructure",
  "crm-implementation",
  "it-security",
  "website-hosting",
  "employee-it-management",
  "managed-it-services",
  "backup-disaster-recovery",
];

export function ServicesGrid() {
  const featured = featuredSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <section className="py-20 md:py-28" id="services">
      <div className="container-page">
        <SectionHeading
          eyebrow="What We Do"
          title="Everything Your Business Needs to Run Smoothly"
          subtitle="From foundation to growth, we manage the technology behind your business."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service, i) => (
            <ScrollReveal key={service!.slug} delay={i * 0.05}>
              <ServiceCard service={service!} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
