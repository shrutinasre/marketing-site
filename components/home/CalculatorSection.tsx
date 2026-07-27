import { SectionHeading } from "@/components/ui/SectionHeading";
import { ITCalculator } from "@/components/forms/ITCalculator";

export function CalculatorSection() {
  return (
    <section className="bg-neutral-50 py-20 md:py-28" id="calculator">
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
  );
}
