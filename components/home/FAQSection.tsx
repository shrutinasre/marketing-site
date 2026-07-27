import { faqs } from "@/data/faqs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export function FAQSection() {
  return (
    <section className="py-20 md:py-28" id="faq">
      <div className="container-page">
        <SectionHeading eyebrow="FAQ" title="Common Questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
