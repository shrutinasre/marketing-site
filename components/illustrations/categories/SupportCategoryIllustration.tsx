"use client";

import { motion } from "framer-motion";
import { Headset, MessageCircle } from "lucide-react";

/**
 * Abstract category illustration for managed IT support services —
 * a headset icon with radiating signal arcs, representing always-on
 * technical support.
 */
export function SupportCategoryIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[300px]" aria-hidden="true">
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.32), transparent 65%)" }}
      />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        {[18, 30, 42].map((r, i) => (
          <motion.circle
            key={r}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1.2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: [0, 0.5, 0], scale: [0.9, 1.15, 1.3] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
            style={{ transformOrigin: "50px 50px" }}
          />
        ))}
      </svg>

      <motion.div
        className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-blue-300 bg-blue-500 text-white shadow-[0_0_28px_-4px_rgba(59,130,246,0.8)]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Headset className="h-7 w-7" />
      </motion.div>

      <motion.div
        className="absolute flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/40 bg-navy-900/80 text-blue-300 shadow-[0_0_14px_-4px_rgba(59,130,246,0.6)]"
        style={{ left: "78%", top: "22%" }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
        transition={{
          opacity: { duration: 0.4, delay: 0.5 },
          scale: { duration: 0.4, delay: 0.5 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <MessageCircle className="h-4 w-4" />
      </motion.div>
    </div>
  );
}
