"use client";

import { motion } from "framer-motion";
import { Users, Mail, LayoutGrid, Globe } from "lucide-react";

const nodes = [
  { icon: Users, x: 50, y: 20 },
  { icon: Mail, x: 82, y: 50 },
  { icon: LayoutGrid, x: 50, y: 82 },
  { icon: Globe, x: 18, y: 50 },
];

/**
 * Abstract category illustration for business systems / CRM
 * services — a central hub with connected business-application
 * nodes orbiting around it.
 */
export function SystemsCategoryIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[320px]" aria-hidden="true">
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.32), transparent 65%)" }}
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
            cx: [50, 82, 50, 18, 50],
            cy: [20, 50, 82, 50, 20],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-blue-400/40 bg-navy-900/80 text-blue-300 shadow-[0_0_16px_-4px_rgba(59,130,246,0.6)]"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
          transition={{
            opacity: { duration: 0.4, delay: 0.5 + i * 0.1 },
            scale: { duration: 0.4, delay: 0.5 + i * 0.1 },
            y: { duration: 3.2 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
          }}
        >
          <node.icon className="h-4 w-4" />
        </motion.div>
      ))}
    </div>
  );
}
