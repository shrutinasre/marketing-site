"use client";

import { motion } from "framer-motion";
import { Server, Rocket } from "lucide-react";

const instances = [
  { x: 25, y: 78 },
  { x: 50, y: 85 },
  { x: 75, y: 78 },
];

/**
 * Abstract illustration specifically for Application Hosting — a
 * deployment/scaling scene distinct from CloudCategoryIllustration
 * (used by the broader Cloud Infrastructure service), even though
 * both share the "cloud" category.
 */
export function ApplicationHostingIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[320px]" aria-hidden="true">
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.32), transparent 65%)" }}
      />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        {/* uptime pulse line */}
        <motion.path
          d="M8 30 H30 L36 18 L44 42 L50 30 L58 30 L64 22 L70 30 H92"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 1.4 }}
        />

        {instances.map((p, i) => (
          <motion.line
            key={i}
            x1={50}
            y1={55}
            x2={p.x}
            y2={p.y}
            stroke="#3b82f6"
            strokeWidth="0.5"
            strokeDasharray="2 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 0.6, delay: 0.9 + i * 0.12 }}
          />
        ))}
      </svg>

      {/* origin: single deployed build */}
      <motion.div
        className="absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-blue-300 bg-blue-500 text-white shadow-[0_0_24px_-4px_rgba(59,130,246,0.8)]"
        style={{ left: "50%", top: "55%" }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <Rocket className="h-5 w-5" />
      </motion.div>

      {/* auto-scaled instances fanning out */}
      {instances.map((p, i) => (
        <motion.div
          key={i}
          className="absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-blue-400/40 bg-navy-900/80 text-blue-300 shadow-[0_0_14px_-4px_rgba(59,130,246,0.6)]"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
          transition={{
            opacity: { duration: 0.4, delay: 1 + i * 0.15 },
            scale: { duration: 0.4, delay: 1 + i * 0.15 },
            y: { duration: 2.8 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
          }}
        >
          <Server className="h-4 w-4" />
        </motion.div>
      ))}
    </div>
  );
}
