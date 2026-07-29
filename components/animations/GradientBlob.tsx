"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Purely decorative, animated gradient blob used behind hero/CTA/dark
 * sections for visual depth. CSS/SVG only — no images, cheap to render.
 * Respects prefers-reduced-motion via the global CSS rule in globals.css.
 */
export function GradientBlob({
  className,
  color = "blue",
}: {
  className?: string;
  color?: "blue" | "soft";
}) {
  const gradient =
    color === "blue"
      ? "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.55), transparent 70%)"
      : "radial-gradient(circle at 60% 40%, rgba(96,165,250,0.35), transparent 70%)";

  return (
    <motion.div
      aria-hidden="true"
      className={cn("pointer-events-none absolute rounded-full blur-3xl", className)}
      style={{ background: gradient }}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.6, 0.9, 0.6],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
