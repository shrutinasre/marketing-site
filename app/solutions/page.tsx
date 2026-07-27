import type { Metadata } from "next";
import { solutionsBySize, solutionsByStage } from "@/data/solutions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "IT Solutions by Business Size & Stage",
  description:
    "Right-sized managed IT solutions for micro businesses, small businesses, medium businesses, startups, growing businesses, existing businesses and remote teams.",
};

function SolutionGrid({ items }: { items: typeof solutionsBySize }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {items.map((s) => (
        <div key={s.slug} id={s.slug} className="rounded-card border border-neutral-200 bg-white p-7">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">{s.employeeRange}</p>
          <h3 className="mt-2 text-xl font-bold text-navy-900">{s.name}</h3>
          <p className="mt-3 text-sm text-neutral-600">{s.description}</p>
          <ul className="mt-5 space-y-2">
            {s.focusAreas.map((area) => (
              <li key={area} className="flex items-start gap-2 text-sm text-neutral-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white md:py-24">
        <div className="container-page">
          <SectionHeading
            light
            eyebrow="Solutions"
            title="IT Infrastructure Solutions for Every Stage"
            subtitle="Whether you're defined by team size or by where your business is in its journey, we build IT around your actual requirements — not rigid packages."
          />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <SectionHeading align="left" title="By Business Size" />
          <SolutionGrid items={solutionsBySize} />
        </div>
      </section>

      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading align="left" title="By Business Stage" />
          <SolutionGrid items={solutionsByStage} />
        </div>
      </section>

      <CTASection
        heading="Tell Us Where Your Business Is Today"
        text="We'll design a solution around your actual size, stage and requirements — not a one-size-fits-all package."
      />
    </>
  );
}
