"use client";

import { motion } from "framer-motion";

/**
 * Original flat-style character illustration for the contact page — a
 * person at a laptop sending a message, matching the same illustration
 * language used elsewhere on the site.
 */
export function ContactPersonIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 300"
      className={className ?? "mx-auto w-full max-w-[360px]"}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="420" height="300" rx="24" fill="#fdf1e3" />

      {/* desk */}
      <rect x="60" y="210" width="220" height="14" rx="4" fill="#a9713f" />
      <rect x="70" y="224" width="10" height="46" fill="#8a5a30" />
      <rect x="260" y="224" width="10" height="46" fill="#8a5a30" />

      {/* laptop */}
      <rect x="120" y="182" width="80" height="34" rx="5" fill="#2b2340" />
      <rect x="126" y="187" width="68" height="24" rx="2" fill="#6bc7f2" />

      {/* seated person */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <circle cx="160" cy="140" r="24" fill="#f0c199" />
        <path d="M138 128 q22 -30 44 0 q-6 -16 -22 -16 q-16 0 -22 16 Z" fill="#3d2b1f" />
        <rect x="132" y="160" width="56" height="50" rx="18" fill="#e76f51" />
        <rect x="118" y="172" width="18" height="36" rx="9" fill="#e76f51" />
        <rect x="176" y="168" width="18" height="34" rx="9" fill="#e76f51" transform="rotate(-20 185 185)" />
        <circle cx="151" cy="136" r="2.6" fill="#2b2340" />
        <circle cx="170" cy="136" r="2.6" fill="#2b2340" />
        <path d="M153 148 q7 5 14 0" stroke="#2b2340" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      </motion.g>

      {/* rising message bubbles toward the right, implying a sent inquiry */}
      {[0, 1, 2].map((i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], x: 120, y: -60 - i * 10 }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
        >
          <rect x="220" y="150" width="34" height="22" rx="8" fill="#2a9d8f" />
          <path d="M226 172 l-5 9 9 -6 Z" fill="#2a9d8f" />
        </motion.g>
      ))}

      {/* small plant */}
      <rect x="330" y="230" width="20" height="18" rx="3" fill="#a9713f" />
      <path
        d="M340 230 q-12 -22 -24 -6 M340 230 q12 -22 24 -6 M340 230 q0 -24 0 -10"
        stroke="#2a9d8f"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      <line x1="0" y1="270" x2="420" y2="270" stroke="#f0dcc0" strokeWidth="2" />
    </svg>
  );
}
