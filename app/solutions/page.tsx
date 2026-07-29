import type { Metadata } from "next";
import { solutionsBySize, solutionsByStage } from "@/data/solutions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { GradientBlob } from "@/components/animations/GradientBlob";
import { SolutionsConstellation } from "@/components/solutions/SolutionsConstellation";
import { SolutionGrid } from "@/components/solutions/SolutionGrid";

export const metadata: Metadata = {
  title: "IT Solutions by Business Size & Stage",
  description:
    "Right-sized managed IT solutions for micro businesses, small businesses, medium businesses, startups, growing businesses, existing businesses and remote teams.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white md:py-24">
        <GradientBlob className="-left-24 top-0 h-72 w-72" />
        <GradientBlob className="right-0 bottom-0 h-80 w-80" color="soft" />
        <div className="container-page relative grid items-center gap-12 md:grid-cols-2">
          <SectionHeading
            light
            align="left"
            eyebrow="Solutions"
            title="IT Infrastructure Solutions for Every Stage"
            subtitle="Whether you're defined by team size or by where your business is in its journey, we build IT around your actual requirements — not rigid packages."
          />
          <div className="hidden md:block">
            <SolutionsConstellation />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <SectionHeading align="left" title="By Business Size" />
          <SolutionGrid items={solutionsBySize} columns="sm:grid-cols-2 lg:grid-cols-3" />
        </div>
      </section>

      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading align="left" title="By Business Stage" />
          <SolutionGrid items={solutionsByStage} columns="sm:grid-cols-2 lg:grid-cols-4" />
        </div>
      </section>

      <CTASection
        heading="Tell Us Where Your Business Is Today"
        text="We'll design a solution around your actual size, stage and requirements — not a one-size-fits-all package."
      />
    </>
  );
}
