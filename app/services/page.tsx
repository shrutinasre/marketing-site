import type { Metadata } from "next";
import { Rocket, Cloud, Users, ShieldCheck, Globe, UserCog, Headset } from "lucide-react";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceConstellation } from "@/components/services/ServiceConstellation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { GradientBlob } from "@/components/animations/GradientBlob";
import { StaggerReveal, StaggerItem } from "@/components/animations/ScrollReveal";
import type { Service } from "@/types";

export const metadata: Metadata = {
  title: "Managed IT Services",
  description:
    "Explore Vighnex's full range of managed IT services — from startup IT setup to cloud infrastructure, business systems, security, and ongoing support.",
};

const groups: { heading: string; icon: typeof Rocket; categories: Service["category"][] }[] = [
  { heading: "Business Foundation", icon: Rocket, categories: ["foundation"] },
  { heading: "Cloud Infrastructure", icon: Cloud, categories: ["cloud"] },
  { heading: "Business Systems", icon: Users, categories: ["systems"] },
  { heading: "Website & Digital Presence", icon: Globe, categories: ["website"] },
  { heading: "Employee IT Management", icon: UserCog, categories: ["employee"] },
  { heading: "Security & Continuity", icon: ShieldCheck, categories: ["security", "continuity"] },
  { heading: "Managed Support", icon: Headset, categories: ["support"] },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white md:py-24">
        <GradientBlob className="-left-24 top-0 h-72 w-72" />
        <GradientBlob className="right-0 bottom-0 h-80 w-80" color="soft" />
        <div className="container-page relative grid items-center gap-12 md:grid-cols-2">
          <SectionHeading
            light
            align="left"
            eyebrow="Services"
            title="Everything Your Business Needs to Run Smoothly"
            subtitle="From foundation to growth, we manage the technology behind your business — organized into the categories below."
          />
          <div className="hidden md:block">
            <ServiceConstellation />
          </div>
        </div>
      </section>

      <div className="py-16 md:py-20">
        {groups.map((group, gi) => {
          const groupServices = services.filter((s) => group.categories.includes(s.category));
          if (groupServices.length === 0) return null;
          return (
            <section key={group.heading} className={gi > 0 ? "mt-16" : undefined}>
              <div className="container-page">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                    <group.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-navy-900">{group.heading}</h2>
                </div>
                <StaggerReveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {groupServices.map((service) => (
                    <StaggerItem key={service.slug}>
                      <ServiceCard service={service} />
                    </StaggerItem>
                  ))}
                </StaggerReveal>
              </div>
            </section>
          );
        })}
      </div>

      <CTASection
        heading="Not Sure Which Services You Need?"
        text="Tell us about your business and we'll recommend the right starting point."
      />
    </>
  );
}
