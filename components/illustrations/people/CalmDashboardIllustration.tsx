"use client";

import { motion } from "framer-motion";

/**
 * Flat-style character illustration for the "With Vighnex" pain-point
 * card — a relaxed person looking at one unified dashboard, the
 * counterpart to StressedPersonIllustration.
 */
export function CalmDashboardIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 240"
      className={className ?? "mx-auto w-full max-w-[280px]"}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="360" height="240" rx="20" fill="#eef4ff" />

      {/* single unified dashboard */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <rect x="200" y="55" width="130" height="90" rx="8" fill="#ffffff" stroke="#dbeafe" strokeWidth="2" />
        <rect x="212" y="67" width="50" height="8" rx="3" fill="#3b82f6" />
        <rect x="212" y="82" width="106" height="6" rx="2" fill="#dbeafe" />
        <rect x="212" y="94" width="80" height="6" rx="2" fill="#dbeafe" />
        <rect x="212" y="112" width="30" height="24" rx="4" fill="#93c5fd" />
        <rect x="248" y="112" width="30" height="24" rx="4" fill="#3b82f6" />
        <rect x="284" y="112" width="30" height="24" rx="4" fill="#bfdbfe" />
        {/* single green check confirming everything is fine */}
        <motion.circle
          cx="305"
          cy="70"
          r="9"
          fill="#2a9d8f"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        />
        <motion.path
          d="M301 70 l3 3 l6 -7"
          stroke="#ffffff"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.85 }}
        />
      </motion.g>

      {/* relaxed seated person */}
      <motion.g
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <rect x="60" y="205" width="100" height="12" rx="4" fill="#a9713f" />
        <circle cx="110" cy="140" r="22" fill="#f2c9a0" />
        <path d="M90 133 q20 -28 40 0 q-5 -15 -20 -15 q-15 0 -20 15 Z" fill="#4a2f22" />
        <rect x="82" y="160" width="56" height="52" rx="18" fill="#2a9d8f" />
        <rect x="66" y="172" width="16" height="40" rx="8" fill="#2a9d8f" transform="rotate(-8 74 192)" />
        <rect x="138" y="172" width="16" height="40" rx="8" fill="#2a9d8f" transform="rotate(10 146 192)" />
        <circle cx="102" cy="138" r="2.2" fill="#2b2340" />
        <circle cx="118" cy="138" r="2.2" fill="#2b2340" />
        <path d="M102 150 q8 5 16 0" stroke="#2b2340" strokeWidth="2" fill="none" strokeLinecap="round" />
      </motion.g>

      {/* calm floating particles */}
      {[0, 1].map((i) => (
        <motion.circle
          key={i}
          r="3"
          fill="#60a5fa"
          initial={{ opacity: 0 }}
          animate={{ cy: [190 - i * 10, 160 - i * 10], opacity: [0, 0.8, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.9, ease: "easeInOut" }}
          cx={185 + i * 12}
        />
      ))}
    </svg>
  );
}
