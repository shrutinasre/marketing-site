"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { StaggerReveal, StaggerItem } from "@/components/animations/ScrollReveal";
import type { SolutionSize } from "@/types";

export function SolutionGrid({
  items,
  columns = "md:grid-cols-2",
}: {
  items: SolutionSize[];
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
