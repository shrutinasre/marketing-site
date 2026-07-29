import type { Metadata } from "next";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { solutionsBySize, solutionsByStage } from "@/data/solutions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { StaggerReveal, StaggerItem } from "@/components/animations/ScrollReveal";
import { GradientBlob } from "@/components/animations/GradientBlob";
import { SolutionsConstellation } from "@/components/solutions/SolutionsConstellation";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "IT Solutions by Business Size & Stage",
  description:
    "Right-sized managed IT solutions for micro businesses, small businesses, medium businesses, startups, growing businesses, existing businesses and remote teams.",
};

function SolutionGrid({
  items,
  columns = "md:grid-cols-2",
}: {
  items: typeof solutionsBySize;
  columns?: string;
}) {
  return (
    <StaggerReveal className={`mt-10 grid gap-6 ${columns}`}>
      {items.map((s) => {
        const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[s.icon] ?? Icons.Sparkles;
        return (
          <StaggerItem key={s.slug}>
            <motion.div
              id={s.slug}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group h-full rounded-card border border-neutral-200 bg-white p-7 transition-colors duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <motion.div
                whileHover={{ rotate: 6 }}
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </motion.div>
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">{s.employeeRange}</p>
              <h3 className="mt-2 text-xl font-bold text-navy-900">{s.name}</h3>
              <p className="mt-3 text-sm text-neutral-600">{s.description}</p>
              <ul className="mt-5 space-y-2">
                {s.focusAreas.map((area) => (
                  <li key={area} className="flex items-start gap-2 text-sm text-neutral-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                    {area}
                  </li>
                ))}
              </ul>
            </motion.div>
          </StaggerItem>
        );
      })}
    </StaggerReveal>
  );
}

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
