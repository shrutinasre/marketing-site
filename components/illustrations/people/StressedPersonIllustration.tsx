"use client";

import { motion } from "framer-motion";

/**
 * Flat-style character illustration for the "Before Vighnex" pain-point
 * card — an overwhelmed person surrounded by disconnected screens and
 * papers, representing fragmented, unmanaged IT.
 */
export function StressedPersonIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 240"
      className={className ?? "mx-auto w-full max-w-[280px]"}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="360" height="240" rx="20" fill="#fdf1e3" />

      {/* scattered papers */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <rect x="40" y="170" width="26" height="34" rx="2" fill="#ffffff" stroke="#e7cba3" transform="rotate(-12 53 187)" />
        <rect x="70" y="185" width="24" height="30" rx="2" fill="#ffffff" stroke="#e7cba3" transform="rotate(8 82 200)" />
        <rect x="270" y="178" width="24" height="30" rx="2" fill="#ffffff" stroke="#e7cba3" transform="rotate(14 282 193)" />
      </motion.g>

      {/* disconnected small screens floating around */}
      {[
        { x: 60, y: 60, delay: 0 },
        { x: 260, y: 55, delay: 0.15 },
        { x: 285, y: 130, delay: 0.3 },
      ].map((s, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, y: s.y - 6 }}
          whileInView={{ opacity: 1, y: [s.y, s.y - 6, s.y] }}
          viewport={{ once: true }}
          transition={{ opacity: { duration: 0.4, delay: s.delay }, y: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: s.delay } }}
        >
          <rect x={s.x} width="34" height="24" rx="4" fill="#e76f51" opacity="0.85" />
          <rect x={s.x + 4} y="4" width="26" height="16" rx="2" fill="#fdf1e3" opacity="0.9" />
        </motion.g>
      ))}

      {/* seated stressed person, head in hand */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <rect x="130" y="200" width="100" height="12" rx="4" fill="#a9713f" />
        <circle cx="180" cy="130" r="22" fill="#f0c199" />
        <path d="M160 122 q20 -28 40 0 q-5 -15 -20 -15 q-15 0 -20 15 Z" fill="#3d2b1f" />
        <rect x="152" y="150" width="56" height="52" rx="18" fill="#e76f51" />
        {/* one arm bent up supporting the head */}
        <rect x="196" y="130" width="16" height="34" rx="8" fill="#e76f51" transform="rotate(-40 204 147)" />
        <rect x="140" y="160" width="16" height="42" rx="8" fill="#e76f51" transform="rotate(10 148 181)" />
        {/* worried eyebrows/eyes */}
        <path d="M168 124 l8 3 M192 124 l-8 3" stroke="#2b2340" strokeWidth="2" strokeLinecap="round" />
        <circle cx="172" cy="130" r="2.2" fill="#2b2340" />
        <circle cx="188" cy="130" r="2.2" fill="#2b2340" />
        <path d="M172 142 q8 -3 16 0" stroke="#2b2340" strokeWidth="2" fill="none" strokeLinecap="round" />
      </motion.g>

      {/* stress lines */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, repeat: Infinity, delay: 0.6 }}
      >
        <path d="M205 95 l8 -6 M212 100 l10 -2 M208 108 l9 4" stroke="#e76f51" strokeWidth="2.5" strokeLinecap="round" />
      </motion.g>
    </svg>
  );
}
