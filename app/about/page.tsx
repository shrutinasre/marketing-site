import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { StaggerReveal, StaggerItem } from "@/components/animations/ScrollReveal";
import { AboutIllustration } from "@/components/illustrations/AboutIllustration";
import { Target, Compass, Heart, Workflow, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "About Vighnex",
  description:
    "Vighnex exists to make professional IT infrastructure accessible to startups and growing businesses through one managed technology relationship.",
};

const pillars = [
  {
    icon: Target,
    title: "Mission",
    text: "Making professional IT infrastructure accessible to startups and growing businesses.",
  },
  {
    icon: Compass,
    title: "Approach",
    text: "We start by understanding your business and current environment, then design and manage infrastructure appropriate to your stage — not a generic package.",
  },
  {
    icon: Heart,
    title: "Values",
    text: "Transparency, security-first thinking, and explaining technology in terms that make sense to business owners, not just technical teams.",
  },
  {
    icon: Workflow,
    title: "How We Work",
    text: "One managed relationship covering email, cloud, business systems, security and support — coordinated by a single technology partner instead of multiple vendors.",
  },
  {
    icon: Cpu,
    title: "Technology Philosophy",
    text: "We build on established, trusted platforms rather than reinventing infrastructure — favoring reliability and maintainability over unnecessary complexity.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white md:py-24">
        <div className="container-page">
          <SectionHeading
            light
            eyebrow="About Vighnex"
            title="Your Complete IT Infrastructure Partner"
            subtitle="Many smaller businesses either operate with fragmented technology or spend too much time coordinating multiple vendors. Vighnex exists to provide a structured, secure and scalable technology foundation through one managed relationship."
          />
          <div className="mt-10">
            <AboutIllustration />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <StaggerReveal className="container-page grid gap-8 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="h-full rounded-card border border-neutral-200 p-7 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{pillar.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{pillar.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      <CTASection
        heading="Let's Talk About Your Business"
        text="Tell us where you are today, and we'll help you figure out what your IT foundation should look like."
      />
    </>
  );
}
