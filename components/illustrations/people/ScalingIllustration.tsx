"use client";

import { motion } from "framer-motion";

/**
 * Flat-style character illustration for "Already Running a Business" —
 * a person pointing at an upward trending chart on the wall. Designed
 * to sit on a dark navy card, matching the site's dark-section palette.
 */
export function ScalingIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 380 260"
      className={className ?? "mx-auto w-full max-w-[300px]"}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="380" height="260" rx="20" fill="#0e1626" />

      {/* growth chart on the wall */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <rect x="220" y="40" width="130" height="90" rx="6" fill="#16213d" />
        {[18, 30, 24, 42, 58].map((h, i) => (
          <motion.rect
            key={i}
            x={232 + i * 22}
            width={14}
            rx={3}
            fill="#3b82f6"
            initial={{ height: 0, y: 118 }}
            whileInView={{ height: h, y: 118 - h }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
          />
        ))}
      </motion.g>

      {/* standing person pointing */}
      <motion.g
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <circle cx="150" cy="150" r="21" fill="#c98a5e" />
        <path d="M131 143 q19 -26 38 0 q-6 -14 -19 -14 q-13 0 -19 14 Z" fill="#20140d" />
        <rect x="127" y="169" width="46" height="70" rx="17" fill="#60a5fa" />
        <rect x="168" y="178" width="16" height="52" rx="8" fill="#60a5fa" transform="rotate(30 176 204)" />
        <rect x="108" y="180" width="16" height="46" rx="8" fill="#60a5fa" transform="rotate(-16 116 203)" />
        <rect x="127" y="234" width="18" height="34" rx="6" fill="#0e1626" />
        <rect x="153" y="234" width="18" height="34" rx="6" fill="#0e1626" />
        <circle cx="143" cy="147" r="2.2" fill="#20140d" />
        <circle cx="157" cy="147" r="2.2" fill="#20140d" />
      </motion.g>

      <line x1="0" y1="240" x2="380" y2="240" stroke="#16213d" strokeWidth="2" />

      {/* trend arrow */}
      <motion.path
        d="M235 108 L 280 78 L 320 60"
        fill="none"
        stroke="#93c5fd"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
      />
    </svg>
  );
}
