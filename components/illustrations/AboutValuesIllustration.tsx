"use client";

import { motion } from "framer-motion";
import { Target, Compass, Heart, Workflow, Cpu } from "lucide-react";

const nodes = [
  { icon: Target, x: 50, y: 12 },
  { icon: Compass, x: 90, y: 38 },
  { icon: Heart, x: 76, y: 88 },
  { icon: Workflow, x: 24, y: 88 },
  { icon: Cpu, x: 10, y: 38 },
];

/**
 * Illustration accompanying the About page's mission/values pillars —
 * a central hub with the same five pillar icons orbiting it, in the
 * same abstract/geometric hub-and-spoke style used elsewhere on the
 * site (ServiceConstellation, SystemsCategoryIllustration).
 */
export function AboutValuesIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[340px]" aria-hidden="true">
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.3), transparent 65%)" }}
      />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        {nodes.map((node, i) => (
          <motion.line
            key={i}
            x1={50}
            y1={50}
            x2={node.x}
            y2={node.y}
            stroke="#3b82f6"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 0.8, delay: i * 0.12 }}
          />
        ))}
        <motion.circle
          cx="50"
          cy="50"
          r="10"
          fill="#0b111f"
          stroke="#3b82f6"
          strokeWidth="1.2"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          style={{ transformOrigin: "50px 50px" }}
        />
        {/* orbiting particle */}
        <motion.circle
          r="1.6"
          fill="#93c5fd"
          initial={{ opacity: 0 }}
          animate={{
            cx: [50, 90, 76, 24, 10, 50],
            cy: [12, 38, 88, 88, 38, 12],
            opacity: [0, 1, 1, 1, 1, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
        />
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-blue-400/40 bg-navy-900/80 text-blue-300 shadow-[0_0_16px_-4px_rgba(59,130,246,0.6)]"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
          transition={{
            opacity: { duration: 0.4, delay: 0.5 + i * 0.1 },
            scale: { duration: 0.4, delay: 0.5 + i * 0.1 },
            y: { duration: 3.2 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
          }}
        >
          <node.icon className="h-5 w-5" />
        </motion.div>
      ))}
    </div>
  );
}
