import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConsultationForm } from "@/components/forms/ConsultationForm";

export const metadata: Metadata = {
  title: "Get Your Free IT Consultation",
  description:
    "Tell us about your business and we'll design the IT foundation you need — from setup to ongoing managed support.",
};

export default function ContactPage() {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Tell Us About Your Business. We'll Design the IT Foundation."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
