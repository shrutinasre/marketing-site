"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <div className="relative mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.length > 1 && (
        <svg
          className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px w-full lg:block"
          aria-hidden="true"
        >
          <motion.line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            stroke="url(#serviceProcessLine)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="serviceProcessLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      )}
      {steps.map((step, i) => (
        <ScrollReveal key={step} delay={i * 0.12}>
          <div className="relative rounded-card border border-neutral-200 p-6 transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
            <motion.span
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.12 + 0.2 }}
              className="relative z-10 mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-xs font-bold text-blue-500"
            >
              {String(i + 1).padStart(2, "0")}
            </motion.span>
            <p className="text-sm text-neutral-700">{step}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
