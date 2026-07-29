"use client";

import { motion } from "framer-motion";
import { Mail, Globe2, Users } from "lucide-react";

const nodes = [
  { icon: Mail, x: 22, y: 30 },
  { icon: Globe2, x: 78, y: 30 },
  { icon: Users, x: 50, y: 82 },
];

/**
 * Abstract category illustration for business foundation / startup
 * setup services — a rocket launch rendered in pure geometric shapes
 * (no characters), matching the glow/node style used across the
 * other category illustrations.
 */
export function FoundationCategoryIllustration() {
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
            y1={45}
            x2={node.x}
            y2={node.y}
            stroke="#3b82f6"
            strokeWidth="0.5"
            strokeDasharray="2 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 0.7, delay: 0.5 + i * 0.12 }}
          />
        ))}

        {/* rocket body, built from simple geometric strokes */}
        <motion.path
          d="M50 16 C 58 26 60 38 57 50 L 43 50 C 40 38 42 26 50 16 Z"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.95 }}
          transition={{ duration: 1 }}
        />
        <motion.circle
          cx="50"
          cy="30"
          r="3.5"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          style={{ transformOrigin: "50px 30px" }}
        />
        <motion.path
          d="M43 46 L 34 55 L 43 51 Z"
          fill="#3b82f6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        />
        <motion.path
          d="M57 46 L 66 55 L 57 51 Z"
          fill="#3b82f6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.4, delay: 0.85 }}
        />

        {/* rising particles trailing the rocket */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            r="1.4"
            fill="#93c5fd"
            initial={{ opacity: 0 }}
            animate={{ cy: [58, 78], opacity: [0, 0.9, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: 1 + i * 0.4, ease: "easeOut" }}
            cx={50 + (i - 1) * 4}
          />
        ))}
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-blue-400/40 bg-navy-900/80 text-blue-300 shadow-[0_0_16px_-4px_rgba(59,130,246,0.6)]"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
          transition={{
            opacity: { duration: 0.4, delay: 0.6 + i * 0.1 },
            scale: { duration: 0.4, delay: 0.6 + i * 0.1 },
            y: { duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
          }}
        >
          <node.icon className="h-4 w-4" />
        </motion.div>
      ))}
    </div>
  );
}
