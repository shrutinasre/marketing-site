"use client";

import { motion } from "framer-motion";

/**
 * Flat-style character illustration for the About page's "Five
 * Commitments" section — a person sitting with a compass, sketched
 * heart and target floating nearby, symbolizing mission and values.
 * Same illustration language as LaunchIllustration/ContactPersonIllustration
 * (cream background, teal/coral palette, hand-drawn character).
 */
export function AboutValuesIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 300"
      className={className ?? "mx-auto w-full max-w-[360px]"}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="420" height="300" rx="24" fill="#fdf1e3" />

      {/* floating target sketch, top left */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <circle cx="88" cy="66" r="26" fill="none" stroke="#f4a261" strokeWidth="2.5" />
        <circle cx="88" cy="66" r="15" fill="none" stroke="#f4a261" strokeWidth="2.5" />
        <circle cx="88" cy="66" r="4" fill="#f4a261" />
      </motion.g>

      {/* floating heart sketch, top right */}
      <motion.path
        d="M330 50 C 322 40 306 44 306 58 C 306 70 330 86 330 86 C 330 86 354 70 354 58 C 354 44 338 40 330 50 Z"
        fill="none"
        stroke="#e76f51"
        strokeWidth="2.5"
        strokeLinejoin="round"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      />

      {/* seated person holding a compass */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <circle cx="200" cy="140" r="24" fill="#f0c199" />
        <path d="M178 128 q22 -30 44 0 q-6 -16 -22 -16 q-16 0 -22 16 Z" fill="#2b2340" />
        <rect x="172" y="160" width="56" height="52" rx="18" fill="#2a9d8f" />
        <rect x="150" y="182" width="18" height="42" rx="9" fill="#2a9d8f" transform="rotate(-24 159 203)" />
        <rect x="216" y="182" width="18" height="42" rx="9" fill="#2a9d8f" transform="rotate(24 225 203)" />
        <circle cx="191" cy="136" r="2.6" fill="#2b2340" />
        <circle cx="210" cy="136" r="2.6" fill="#2b2340" />
        <path d="M193 148 q7 5 14 0" stroke="#2b2340" strokeWidth="2.2" fill="none" strokeLinecap="round" />

        {/* compass in front of the person */}
        <circle cx="200" cy="228" r="22" fill="#fdf1e3" stroke="#2b2340" strokeWidth="2.5" />
        <path d="M200 228 L 210 214 L 200 220 L 190 214 Z" fill="#e76f51" />
        <path d="M200 228 L 190 242 L 200 236 L 210 242 Z" fill="#2b2340" />
        <circle cx="200" cy="228" r="2.4" fill="#2b2340" />
      </motion.g>

      <line x1="0" y1="256" x2="420" y2="256" stroke="#f0dcc0" strokeWidth="2" />

      {/* small plant for warmth */}
      <rect x="330" y="216" width="20" height="18" rx="3" fill="#a9713f" />
      <path
        d="M340 216 q-12 -22 -24 -6 M340 216 q12 -22 24 -6 M340 216 q0 -24 0 -10"
        stroke="#2a9d8f"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      {/* rising particles for energy */}
      {[0, 1].map((i) => (
        <motion.circle
          key={i}
          r="3"
          fill="#f4a261"
          initial={{ opacity: 0 }}
          animate={{ cy: [90, 40], opacity: [0, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
          cx={100 + i * 12}
        />
      ))}
    </svg>
  );
}
