"use client";

import { motion } from "framer-motion";

/**
 * Flat-style character illustration for "Starting a New Business" —
 * a person unpacking a box, launching a rocket sketched on the wall
 * behind them. Same illustration language as TeamAtWorkIllustration.
 */
export function LaunchIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 380 260"
      className={className ?? "mx-auto w-full max-w-[300px]"}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="380" height="260" rx="20" fill="#fdf1e3" />

      {/* rocket sketch on the wall */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <path
          d="M300 50 C 312 65 314 85 310 105 L 290 105 C 286 85 288 65 300 50 Z"
          fill="none"
          stroke="#f4a261"
          strokeWidth="2.5"
        />
        <circle cx="300" cy="78" r="5" fill="none" stroke="#f4a261" strokeWidth="2" />
        <path d="M290 98 L 278 112 L 290 106 Z" fill="none" stroke="#f4a261" strokeWidth="2" />
        <path d="M310 98 L 322 112 L 310 106 Z" fill="none" stroke="#f4a261" strokeWidth="2" />
      </motion.g>

      {/* open box on the floor */}
      <motion.g
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <rect x="70" y="185" width="80" height="46" rx="4" fill="#e9c9a6" />
        <path d="M70 185 L110 165 L190 165 L150 185 Z" fill="#f0dcc0" />
        <path d="M150 185 L190 165 L190 205 L150 225 Z" fill="#d9b586" />
      </motion.g>

      {/* crouched person reaching into the box */}
      <motion.g
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <circle cx="180" cy="150" r="20" fill="#f0c199" />
        <path d="M162 143 q18 -24 36 0 q-5 -13 -18 -13 q-13 0 -18 13 Z" fill="#2b2340" />
        <rect x="158" y="167" width="44" height="55" rx="16" fill="#2a9d8f" />
        <rect x="138" y="185" width="16" height="46" rx="8" fill="#2a9d8f" transform="rotate(-30 146 208)" />
        <rect x="196" y="180" width="16" height="42" rx="8" fill="#2a9d8f" transform="rotate(18 204 201)" />
        <circle cx="172" cy="147" r="2.2" fill="#2b2340" />
        <circle cx="188" cy="147" r="2.2" fill="#2b2340" />
        <path d="M175 158 q5 4 10 0" stroke="#2b2340" strokeWidth="2" fill="none" strokeLinecap="round" />
      </motion.g>

      <line x1="0" y1="232" x2="380" y2="232" stroke="#f0dcc0" strokeWidth="2" />

      {/* rising particles for energy */}
      {[0, 1].map((i) => (
        <motion.circle
          key={i}
          r="3"
          fill="#f4a261"
          initial={{ opacity: 0 }}
          animate={{ cy: [110, 60], opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.7, ease: "easeInOut" }}
          cx={300 + i * 10}
        />
      ))}
    </svg>
  );
}
