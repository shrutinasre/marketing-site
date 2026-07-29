"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand the business, team size, workflows, applications and current IT environment.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We design an IT infrastructure appropriate for the company's current requirements and expected growth.",
  },
  {
    number: "03",
    title: "Implement",
    description: "We configure, migrate, integrate, secure and deploy the required systems.",
  },
  {
    number: "04",
    title: "Manage",
    description:
      "We monitor, maintain, support and continuously improve the company's IT environment.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="bg-neutral-50 py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="How It Works" title="Simple Process. Powerful Foundation." />

        <div className="relative mt-16 grid gap-10 md:grid-cols-4">
          <svg
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px w-full md:block"
            aria-hidden="true"
          >
            <motion.line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              stroke="url(#processLineGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="processLineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.15}>
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
                  className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-sm font-bold text-blue-500"
                >
                  {step.number}
                </motion.div>
                <h3 className="text-lg font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
