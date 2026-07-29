"use client";

import { motion } from "framer-motion";
import { Check, Rocket, Building2, Crown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { PackageTier } from "@/types";

const packageIcons: Record<string, typeof Rocket> = {
  "startup-it": Rocket,
  "business-it": Building2,
  "managed-it": Crown,
};

export function PricingCard({ pkg }: { pkg: PackageTier }) {
  const Icon = packageIcons[pkg.slug] ?? Rocket;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "relative flex h-full flex-col rounded-card border p-8",
        pkg.featured
          ? "border-blue-400 bg-navy-950 text-white shadow-2xl shadow-blue-500/20 md:scale-105"
          : "border-neutral-200 bg-white"
      )}
    >
      {pkg.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
          Most Popular
        </span>
      )}
      <div
        className={cn(
          "mb-4 flex h-11 w-11 items-center justify-center rounded-xl",
          pkg.featured ? "bg-blue-500/20 text-blue-300" : "bg-blue-500/10 text-blue-500"
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className={cn("text-xl font-bold", pkg.featured ? "text-white" : "text-navy-900")}>
        {pkg.name}
      </h3>
      <p className={cn("mt-2 text-sm", pkg.featured ? "text-neutral-300" : "text-neutral-600")}>
        {pkg.tagline}
      </p>
      <p className={cn("mt-6 text-2xl font-extrabold", pkg.featured ? "text-white" : "text-navy-900")}>
        {pkg.priceLabel}
      </p>
      <ul className="mt-6 flex-1 space-y-3">
        {pkg.inclusions.map((item) => (
          <li
            key={item}
            className={cn(
              "flex items-start gap-2.5 text-sm",
              pkg.featured ? "text-neutral-200" : "text-neutral-700"
            )}
          >
            <Check className={cn("mt-0.5 h-4 w-4 shrink-0", pkg.featured ? "text-blue-300" : "text-blue-500")} />
            {item}
          </li>
        ))}
      </ul>
      <Button
        href="/contact"
        variant={pkg.featured ? "primary" : "secondary"}
        className="mt-8 w-full"
      >
        Get My IT Plan
      </Button>
    </motion.div>
  );
}
