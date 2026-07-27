import { solutionsBySize } from "@/data/solutions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export function SolutionsBySize() {
  return (
    <section className="py-20 md:py-28" id="solutions">
      <div className="container-page">
        <SectionHeading
          eyebrow="Solutions"
          title="Right-Sized IT for Every Stage of Growth"
          subtitle="From your first employee to a few hundred, your IT needs should match where your business actually is."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {solutionsBySize.map((solution, i) => (
            <ScrollReveal key={solution.slug} delay={i * 0.1}>
              <div
                id={solution.slug}
                className="flex h-full flex-col rounded-card border border-neutral-200 bg-white p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">
                  {solution.employeeRange}
                </p>
                <h3 className="mt-2 text-xl font-bold text-navy-900">{solution.name}</h3>
                <p className="mt-3 flex-1 text-sm text-neutral-600">{solution.description}</p>
                <ul className="mt-5 space-y-2">
                  {solution.focusAreas.map((area) => (
                    <li key={area} className="flex items-start gap-2 text-sm text-neutral-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/solutions" variant="secondary">
            View All Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}
