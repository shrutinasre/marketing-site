"use client";

import { motion } from "framer-motion";
import { DatabaseBackup } from "lucide-react";

/**
 * Abstract category illustration for backup / business continuity
 * services — a rotating recovery loop around a central backup icon.
 */
export function ContinuityCategoryIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[300px]" aria-hidden="true">
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.32), transparent 65%)" }}
      />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        <motion.circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          strokeOpacity="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{
            opacity: { duration: 0.5 },
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
          }}
          style={{ transformOrigin: "50px 50px" }}
        />
        <motion.path
          d="M50 16 a34 34 0 1 1 -24 10"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 1.4 }}
        />
        <motion.path
          d="M22 30 l4 -10 l9 5 Z"
          fill="#60a5fa"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
        />
      </svg>

      <motion.div
        className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-blue-300 bg-navy-900 text-blue-300 shadow-[0_0_28px_-4px_rgba(59,130,246,0.8)]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <DatabaseBackup className="h-7 w-7" />
      </motion.div>
    </div>
  );
}
