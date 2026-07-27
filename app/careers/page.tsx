import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Careers at Vighnex.",
};

export default function CareersPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Careers"
          title="We're Not Currently Hiring"
          subtitle={`We don't have open roles listed right now. If you'd like to reach out anyway, contact us at ${siteConfig.contact.email}.`}
        />
      </div>
    </section>
  );
}
