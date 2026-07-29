"use client";

import { motion } from "framer-motion";
import { Bell, Server, ShieldAlert } from "lucide-react";

const nodes = [
  { icon: Server, x: 22, y: 30 },
  { icon: ShieldAlert, x: 78, y: 30 },
  { icon: Bell, x: 50, y: 84 },
];

/**
 * Abstract illustration specifically for Monitoring — a live radar
 * sweep over a pulse waveform, distinct from ShieldIllustration
 * (the static shield-and-orbit used by Security & Backup), even
 * though both share the "security" category.
 */
export function MonitoringIllustration() {
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
            y1={55}
            x2={node.x}
            y2={node.y}
            stroke="#3b82f6"
            strokeWidth="0.5"
            strokeDasharray="2 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 0.7, delay: 0.6 + i * 0.12 }}
          />
        ))}

        {/* radar rings sweeping outward from the monitor */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx="50"
            cy="55"
            r="6"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="1"
            initial={{ opacity: 0.7, scale: 0.3 }}
            animate={{ opacity: [0.7, 0], scale: [0.3, 3.2] }}
            transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "50px 55px" }}
          />
        ))}

        {/* live pulse waveform */}
        <motion.path
          d="M10 55 H26 L32 42 L40 68 L46 55 L54 55 L60 46 L66 55 H90"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.95 }}
          transition={{ duration: 1.4, delay: 0.3 }}
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
