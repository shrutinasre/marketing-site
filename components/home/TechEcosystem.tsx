import { techEcosystem } from "@/data/tech";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function TechEcosystem() {
  return (
    <section className="bg-neutral-50 py-16 md:py-20">
      <div className="container-page">
        <SectionHeading
          title="Built Around Technologies Businesses Already Trust"
          subtitle="We work with leading business and cloud technologies."
        />
        <ScrollReveal delay={0.1} className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {techEcosystem.map((tech) => (
              <span
                key={tech.name}
                className="text-sm font-semibold tracking-wide text-neutral-500 grayscale transition hover:text-navy-800 hover:grayscale-0"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
