"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

/**
 * Abstract category illustration for website / digital presence
 * services — a browser window wireframe with a globe node and
 * floating traffic particles.
 */
export function WebsiteCategoryIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[320px]" aria-hidden="true">
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.3), transparent 65%)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-blue-400/40 bg-navy-900/80 shadow-[0_0_30px_-8px_rgba(59,130,246,0.6)]"
      >
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
        </div>
        <div className="space-y-2 p-4">
          <motion.div
            className="h-2 w-3/4 rounded bg-blue-400/60"
            initial={{ width: 0 }}
            animate={{ width: "75%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.div
            className="h-2 w-1/2 rounded bg-white/20"
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 0.8, delay: 0.45 }}
          />
          <motion.div
            className="h-2 w-2/3 rounded bg-white/20"
            initial={{ width: 0 }}
            animate={{ width: "66%" }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/40 bg-navy-900/80 text-blue-300 shadow-[0_0_16px_-4px_rgba(59,130,246,0.6)]"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{
          opacity: { duration: 0.4, delay: 0.8 },
          scale: { duration: 0.4, delay: 0.8 },
          rotate: { duration: 14, repeat: Infinity, ease: "linear" },
        }}
      >
        <Globe className="h-5 w-5" />
      </motion.div>

      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_2px_rgba(96,165,250,0.6)]"
          style={{ left: `${20 + i * 25}%`, top: "85%" }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], y: -30 }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
