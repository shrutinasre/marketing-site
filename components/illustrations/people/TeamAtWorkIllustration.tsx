"use client";

import { motion } from "framer-motion";

/**
 * Original hand-built flat-style character illustration (unDraw/Storyset
 * inspired composition, not a copied asset) — an office scene with people
 * working, matching the warm, rounded flat-illustration aesthetic requested.
 * Sits on its own soft background panel distinct from the site's navy/blue
 * chrome, the same way illustration libraries typically do.
 */
export function TeamAtWorkIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 400"
      className={className ?? "mx-auto w-full max-w-[520px]"}
      aria-hidden="true"
    >
      {/* background panel */}
      <rect x="0" y="0" width="600" height="400" rx="24" fill="#fdf1e3" />

      {/* windows */}
      <rect x="60" y="30" width="90" height="120" rx="8" fill="#f6dfc0" />
      <rect x="450" y="30" width="90" height="120" rx="8" fill="#f6dfc0" />
      <path d="M60 30 L150 150 M150 30 L60 150" stroke="#fce4c8" strokeWidth="4" />
      <path d="M450 30 L540 150 M540 30 L450 150" stroke="#fce4c8" strokeWidth="4" />
      {/* hanging pendant lights */}
      <line x1="105" y1="0" x2="105" y2="60" stroke="#2b2340" strokeWidth="3" />
      <path d="M90 60 h30 l-8 20 h-14 z" fill="#f4a261" />
      <line x1="495" y1="0" x2="495" y2="60" stroke="#2b2340" strokeWidth="3" />
      <path d="M480 60 h30 l-8 20 h-14 z" fill="#f4a261" />

      {/* back center shelf/plant */}
      <rect x="270" y="70" width="60" height="70" rx="6" fill="#e9c9a6" />
      <rect x="290" y="40" width="20" height="40" rx="4" fill="#f2f2f2" />
      <path d="M300 40 q -14 -18 -26 -6" stroke="#2a9d8f" strokeWidth="6" fill="none" strokeLinecap="round" />

      {/* --- left desk: person typing on laptop --- */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <rect x="30" y="270" width="150" height="14" rx="4" fill="#a9713f" />
        <rect x="40" y="284" width="10" height="60" fill="#8a5a30" />
        <rect x="160" y="284" width="10" height="60" fill="#8a5a30" />
        {/* laptop */}
        <rect x="75" y="245" width="60" height="30" rx="4" fill="#2b2340" />
        <rect x="80" y="248" width="50" height="20" rx="2" fill="#6bc7f2" />
        {/* seated person */}
        <circle cx="105" cy="205" r="22" fill="#f0c199" />
        <path d="M85 195 q20 -28 40 0 q-4 -10 -20 -10 q-16 0 -20 10 Z" fill="#3d2b1f" />
        <rect x="80" y="222" width="50" height="46" rx="16" fill="#2a9d8f" />
        <rect x="70" y="235" width="18" height="34" rx="8" fill="#2a9d8f" />
        <rect x="112" y="235" width="18" height="34" rx="8" fill="#2a9d8f" />
        <circle cx="94" cy="200" r="2.5" fill="#2b2340" />
        <circle cx="112" cy="200" r="2.5" fill="#2b2340" />
        <path d="M97 210 q6 4 12 0" stroke="#2b2340" strokeWidth="2" fill="none" strokeLinecap="round" />
      </motion.g>

      {/* --- middle: standing person carrying documents --- */}
      <motion.g
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <circle cx="245" cy="185" r="20" fill="#c98a5e" />
        <path d="M226 178 q19 -26 38 0 q-6 -14 -19 -14 q-13 0 -19 14 Z" fill="#20140d" />
        <rect x="222" y="200" width="46" height="90" rx="18" fill="#f4a261" />
        <rect x="205" y="212" width="16" height="50" rx="8" fill="#f4a261" transform="rotate(-18 213 237)" />
        <rect x="268" y="205" width="16" height="46" rx="8" fill="#f4a261" transform="rotate(24 276 228)" />
        {/* documents in hand */}
        <rect x="272" y="182" width="26" height="34" rx="3" fill="#ffffff" stroke="#e7cba3" />
        <line x1="278" y1="190" x2="294" y2="190" stroke="#f4a261" strokeWidth="2" />
        <line x1="278" y1="197" x2="294" y2="197" stroke="#f4a261" strokeWidth="2" />
        <rect x="222" y="290" width="18" height="34" rx="6" fill="#2b2340" />
        <rect x="250" y="290" width="18" height="34" rx="6" fill="#2b2340" />
        <circle cx="238" cy="182" r="2.2" fill="#2b2340" />
        <circle cx="252" cy="182" r="2.2" fill="#2b2340" />
      </motion.g>

      {/* --- right desk: person on a call, relaxed pose --- */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <rect x="420" y="255" width="150" height="14" rx="4" fill="#a9713f" />
        <rect x="430" y="269" width="10" height="60" fill="#8a5a30" />
        <rect x="550" y="269" width="10" height="60" fill="#8a5a30" />
        <rect x="475" y="222" width="50" height="35" rx="5" fill="#2b2340" />
        <rect x="480" y="227" width="40" height="25" rx="2" fill="#6bc7f2" />
        <circle cx="500" cy="185" r="21" fill="#f2c9a0" />
        <path d="M480 180 q20 -30 42 2 q-8 -20 -22 -20 q-14 0 -20 18 Z" fill="#4a2f22" />
        <rect x="474" y="203" width="52" height="50" rx="16" fill="#e76f51" />
        {/* one arm raised near ear (on a call) */}
        <rect x="518" y="196" width="14" height="30" rx="7" fill="#e76f51" transform="rotate(35 525 210)" />
        <circle cx="491" cy="181" r="2.4" fill="#2b2340" />
        <circle cx="508" cy="181" r="2.4" fill="#2b2340" />
        {/* speech bubble */}
        <motion.g
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <rect x="530" y="140" width="46" height="30" rx="10" fill="#2a9d8f" />
          <path d="M540 170 l-6 12 12 -8 Z" fill="#2a9d8f" />
          <circle cx="544" cy="155" r="2.5" fill="#fdf1e3" />
          <circle cx="553" cy="155" r="2.5" fill="#fdf1e3" />
          <circle cx="562" cy="155" r="2.5" fill="#fdf1e3" />
        </motion.g>
      </motion.g>

      {/* floor line */}
      <line x1="0" y1="345" x2="600" y2="345" stroke="#f0dcc0" strokeWidth="2" />

      {/* small potted plants */}
      <g>
        <rect x="10" y="330" width="18" height="16" rx="3" fill="#a9713f" />
        <path d="M19 330 q-10 -20 -20 -6 M19 330 q10 -20 20 -6 M19 330 q0 -22 0 -10" stroke="#2a9d8f" strokeWidth="5" fill="none" strokeLinecap="round" />
        <rect x="565" y="325" width="18" height="20" rx="3" fill="#a9713f" />
        <path d="M574 325 q-10 -18 -20 -4 M574 325 q10 -18 20 -4" stroke="#e76f51" strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}
