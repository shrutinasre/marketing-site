"use client";

import { motion } from "framer-motion";

/**
 * Custom SVG illustration for the About page — two nodes (Vighnex and
 * the client business) connected as equal partners, rather than a
 * literal photo, consistent with the "no fabricated imagery" content rule.
 */
export function AboutIllustration() {
  return (
    <svg viewBox="0 0 320 180" className="mx-auto w-full max-w-[320px]" aria-hidden="true">
      <motion.line
        x1="90"
        y1="90"
        x2="230"
        y2="90"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeDasharray="6 6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 1 }}
      />

      <motion.g initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <circle cx="90" cy="90" r="42" fill="#0b111f" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="90" y="86" textAnchor="middle" fontSize="11" fontWeight="700" fill="#93c5fd">
          Vighnex
        </text>
        <text x="90" y="100" textAnchor="middle" fontSize="8" fill="#94a3b8">
          IT Partner
        </text>
      </motion.g>

      <motion.g initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
        <circle cx="230" cy="90" r="42" fill="#eef1f7" stroke="#60a5fa" strokeWidth="1.5" />
        <text x="230" y="86" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0b111f">
          Your
        </text>
        <text x="230" y="100" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0b111f">
          Business
        </text>
      </motion.g>

      {/* traveling particle along the connecting line */}
      <motion.circle
        r="4"
        fill="#60a5fa"
        initial={{ opacity: 0 }}
        animate={{ cx: [90, 230, 90], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        cy="90"
      />
    </svg>
  );
}
