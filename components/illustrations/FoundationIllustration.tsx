"use client";

import { motion } from "framer-motion";

/**
 * Custom SVG illustration (not a stock photo) representing a business
 * being built from the ground up — stacked foundation blocks with a
 * rising rocket, in the brand's navy/blue palette.
 */
export function FoundationIllustration() {
  return (
    <svg viewBox="0 0 320 240" className="mx-auto w-full max-w-[260px]" aria-hidden="true">
      <defs>
        <linearGradient id="foundationBlock" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1a2740" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* stacked foundation blocks */}
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x={110 - i * 14}
          y={190 - i * 32}
          width={100 + i * 28}
          height={22}
          rx={6}
          fill="url(#foundationBlock)"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
        />
      ))}

      {/* rocket */}
      <motion.g
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: [0, -8, 0], opacity: 1 }}
        transition={{ opacity: { duration: 0.5, delay: 0.5 }, y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 } }}
      >
        <path d="M160 40 C 175 60, 178 90, 172 118 L 148 118 C 142 90, 145 60, 160 40 Z" fill="#60a5fa" />
        <circle cx="160" cy="80" r="8" fill="#0b111f" />
        <path d="M148 108 L 130 128 L 148 122 Z" fill="#2563eb" />
        <path d="M172 108 L 190 128 L 172 122 Z" fill="#2563eb" />
      </motion.g>

      {/* small orbiting particles for energy */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`p-${i}`}
          r="3"
          fill="#93c5fd"
          initial={{ opacity: 0 }}
          animate={{
            cx: [160, 160 + (i - 1) * 40, 160],
            cy: [130, 150, 170],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}
