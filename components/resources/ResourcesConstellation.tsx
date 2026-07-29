"use client";

import { motion } from "framer-motion";
import { Rocket, Cloud, ShieldCheck, Users, Mail } from "lucide-react";

const nodes = [
  { icon: Rocket, label: "Startup IT", x: 18, y: 20 },
  { icon: Cloud, label: "Cloud", x: 82, y: 18 },
  { icon: ShieldCheck, label: "Security", x: 88, y: 62 },
  { icon: Users, label: "Systems", x: 20, y: 88 },
  { icon: Mail, label: "Workspace", x: 66, y: 92 },
];

/**
 * Decorative hero visual for the resources/blog listing page — an open
 * article/book shape at the center with floating topic-category nodes
 * orbiting it, in the same abstract/geometric style as
 * ServiceConstellation and SolutionsConstellation.
 */
export function ResourcesConstellation() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]" aria-hidden="true">
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.35), transparent 65%)" }}
      />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        {nodes.map((node, i) => (
          <motion.line
            key={`line-${node.label}`}
            x1={50}
            y1={50}
            x2={node.x}
            y2={node.y}
            stroke="#3b82f6"
            strokeWidth="0.4"
            strokeDasharray="1.5 2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          />
        ))}

        {/* open article/book shape at the hub */}
        <motion.path
          d="M50 40 C 46 37 40 36 36 37 V 58 C 40 57 46 58 50 61 C 54 58 60 57 64 58 V 37 C 60 36 54 37 50 40 Z"
          fill="#0b111f"
          stroke="#3b82f6"
          strokeWidth="1.2"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ transformOrigin: "50px 49px" }}
        />
        <motion.line
          x1="50" y1="40" x2="50" y2="61"
          stroke="#3b82f6"
          strokeWidth="0.8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        />

        {/* orbiting particle */}
        <motion.circle
          r="1.6"
          fill="#93c5fd"
          initial={{ opacity: 0 }}
          animate={{
            cx: [18, 82, 88, 20, 66, 18],
            cy: [20, 18, 62, 88, 92, 20],
            opacity: [0, 1, 1, 1, 1, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.4, delay: 0.3 + i * 0.1 },
            scale: { duration: 0.4, delay: 0.3 + i * 0.1 },
            y: { duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
          }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/40 bg-navy-900/80 text-blue-300 shadow-[0_0_20px_-4px_rgba(59,130,246,0.6)]">
            <node.icon className="h-5 w-5" />
          </div>
          <span className="whitespace-nowrap text-[10px] font-medium text-neutral-400">{node.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
