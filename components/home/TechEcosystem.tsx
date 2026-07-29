"use client";

import { motion, useReducedMotion } from "framer-motion";
import { techEcosystem } from "@/data/tech";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function TechEcosystem() {
  const prefersReducedMotion = useReducedMotion();
  // Duplicate the list so the marquee can loop seamlessly.
  const track = [...techEcosystem, ...techEcosystem];

  return (
    <section className="overflow-hidden bg-neutral-50 py-16 md:py-20">
      <div className="container-page">
        <SectionHeading
          title="Built Around Technologies Businesses Already Trust"
          subtitle="We work with leading business and cloud technologies."
        />
      </div>

      <ScrollReveal delay={0.1} className="mt-10">
        <div
          className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <motion.div
            className="flex w-max items-center gap-16"
            animate={prefersReducedMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {track.map((tech, i) => (
              <span
                key={`${tech.name}-${i}`}
                className="whitespace-nowrap text-sm font-semibold tracking-wide text-neutral-500 grayscale transition hover:text-navy-800 hover:grayscale-0"
              >
                {tech.name}
              </span>
            ))}
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  );
}
