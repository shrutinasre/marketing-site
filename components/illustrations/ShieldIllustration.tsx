"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

/**
 * Custom SVG illustration for the security section — a shield with
 * orbiting particles representing continuous, active monitoring.
 */
export function ShieldIllustration() {
  return (
    <div className="relative mx-auto flex h-40 w-40 items-center justify-center">
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id="shieldGlow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#shieldGlow)" />

        {/* orbiting ring with particles */}
        {[0, 120, 240].map((angle, i) => (
          <motion.circle
            key={i}
            r="4"
            fill="#60a5fa"
            initial={{ rotate: angle }}
            animate={{ rotate: angle + 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ originX: "100px", originY: "100px" }}
            cx={100}
            cy={22}
          />
        ))}

        <circle cx="100" cy="100" r="68" fill="none" stroke="#1a2740" strokeWidth="1" strokeDasharray="4 6" />
      </svg>

      <motion.div
        className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-400/40 bg-navy-900"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Lock className="h-9 w-9 text-blue-300" />
      </motion.div>
    </div>
  );
}
