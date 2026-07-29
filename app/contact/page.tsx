import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { GradientBlob } from "@/components/animations/GradientBlob";

export const metadata: Metadata = {
  title: "Get Your Free IT Consultation",
  description:
    "Tell us about your business and we'll design the IT foundation you need — from setup to ongoing managed support.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 py-16 md:py-24">
      <GradientBlob className="left-1/2 top-0 h-80 w-80 -translate-x-1/2 opacity-30" color="soft" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Contact"
          title="Tell Us About Your Business. We'll Design the IT Foundation."
        />
        <ScrollReveal delay={0.1} direction="scale" className="mx-auto mt-12 max-w-3xl">
          <ConsultationForm />
        </ScrollReveal>
      </div>
    </section>
  );
}
