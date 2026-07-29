"use client";

import { motion } from "framer-motion";

/**
 * Original flat-style character illustration for the security section —
 * a person standing beside a large shield, in the same illustration
 * language as TeamAtWorkIllustration.
 */
export function SecurityPersonIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 340"
      className={className ?? "mx-auto w-full max-w-[340px]"}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="420" height="340" rx="24" fill="#101a2e" />
      <circle cx="210" cy="160" r="140" fill="#16213d" />

      {/* large shield */}
      <motion.g
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <path
          d="M270 90 L270 170 C270 215 240 245 205 258 C170 245 140 215 140 170 L140 90 L205 68 Z"
          fill="#2563eb"
          opacity="0.9"
        />
        <path
          d="M270 90 L270 170 C270 215 240 245 205 258 C170 245 140 215 140 170 L140 90 L205 68 Z"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="3"
        />
        <path
          d="M205 130 a20 20 0 1 0 0.1 0 Z M195 150 h20 v28 h-20 Z"
          fill="#0b111f"
          transform="translate(0,4)"
        />
        <circle cx="205" cy="152" r="12" fill="#0b111f" />
        <rect x="198" y="160" width="14" height="20" rx="3" fill="#0b111f" />
      </motion.g>

      {/* person standing beside the shield */}
      <motion.g
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <circle cx="115" cy="150" r="20" fill="#f0c199" />
        <path d="M97 143 q18 -24 36 0 q-5 -13 -18 -13 q-13 0 -18 13 Z" fill="#2b2340" />
        <rect x="93" y="167" width="44" height="70" rx="16" fill="#3b82f6" />
        <rect x="72" y="178" width="16" height="46" rx="8" fill="#3b82f6" transform="rotate(-14 80 200)" />
        <rect x="140" y="172" width="16" height="42" rx="8" fill="#3b82f6" transform="rotate(24 148 193)" />
        <rect x="93" y="232" width="18" height="34" rx="6" fill="#101a2e" />
        <rect x="119" y="232" width="18" height="34" rx="6" fill="#101a2e" />
        <circle cx="106" cy="147" r="2.2" fill="#101a2e" />
        <circle cx="122" cy="147" r="2.2" fill="#101a2e" />
      </motion.g>

      {/* orbiting lock particles */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          r="3"
          fill="#93c5fd"
          initial={{ opacity: 0 }}
          animate={{
            cx: [205, 205 + (i - 1) * 60, 205],
            cy: [70, 90, 260],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}
