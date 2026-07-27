import { faqs } from "@/data/faqs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema } from "@/lib/schema";

export function FAQSection() {
  return (
    <section className="py-20 md:py-28" id="faq">
      <JsonLd data={faqPageSchema(faqs)} />
      <div className="container-page">
        <SectionHeading eyebrow="FAQ" title="Common Questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
