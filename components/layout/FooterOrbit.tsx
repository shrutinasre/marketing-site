"use client";

import { motion } from "framer-motion";

const dots = Array.from({ length: 36 }, (_, i) => i);

/**
 * Decorative background treatment for the footer — a faint dotted
 * grid with a flowing signal wave and traveling glow pulses across
 * the top edge. Deliberately distinct from the orbiting-icon-node
 * illustration style used on service/solution pages, so the footer
 * reads as its own moment rather than repeating the same motif.
 */
export function FooterOrbit() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-48 overflow-hidden opacity-70"
      aria-hidden="true"
    >
      {/* faint dot grid */}
      <div className="absolute inset-0 grid grid-cols-12 gap-8 p-6 opacity-[0.15]">
        {dots.map((i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-blue-400" />
        ))}
      </div>

      <div
        className="absolute -top-16 left-1/2 h-64 w-[640px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.28), transparent 70%)" }}
      />

      <svg viewBox="0 0 400 100" className="absolute inset-x-0 top-6 h-24 w-full" preserveAspectRatio="none">
        <motion.path
          d="M0 60 C 50 20, 100 20, 150 55 S 250 90, 300 50 S 380 20, 400 45"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />

        {/* pulses traveling along the wave */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            r="2.2"
            fill="#93c5fd"
            initial={{ opacity: 0 }}
            animate={{
              cx: [0, 150, 300, 400],
              cy: [60, 55, 50, 45],
              opacity: [0, 1, 1, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}
