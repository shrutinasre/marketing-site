"use client";

import { motion } from "framer-motion";
import { RefreshCw, ShieldCheck, Gauge } from "lucide-react";

const nodes = [
  { icon: RefreshCw, x: 22, y: 28, label: "backup" },
  { icon: Gauge, x: 78, y: 28, label: "tuning" },
  { icon: ShieldCheck, x: 50, y: 84, label: "integrity" },
];

const rows = [0, 1, 2, 3];

/**
 * Abstract illustration specifically for Database Management — a
 * stacked-records / query-cylinder scene, distinct from
 * CloudCategoryIllustration (used by Cloud Infrastructure) and
 * ApplicationHostingIllustration, even though all three share the
 * "cloud" category.
 */
export function DatabaseManagementIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[320px]" aria-hidden="true">
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.32), transparent 65%)" }}
      />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        {nodes.map((node, i) => (
          <motion.line
            key={node.label}
            x1={50}
            y1={56}
            x2={node.x}
            y2={node.y}
            stroke="#3b82f6"
            strokeWidth="0.5"
            strokeDasharray="2 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 0.7, delay: 0.7 + i * 0.12 }}
          />
        ))}

        {/* database cylinder, built from stacked ellipse rims */}
        <motion.ellipse
          cx="50"
          cy="38"
          rx="16"
          ry="5"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="1.6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.95, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ transformOrigin: "50px 38px" }}
        />
        <motion.path
          d="M34 38 V 58 C 34 61 41 63 50 63 C 59 63 66 61 66 58 V 38"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="1.6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.95 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        {[46, 54].map((cy, i) => (
          <motion.ellipse
            key={cy}
            cx="50"
            cy={cy}
            rx="16"
            ry="5"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
          />
        ))}

        {/* query rows streaming through the cylinder */}
        {rows.map((i) => (
          <motion.rect
            key={i}
            x="40"
            width="20"
            height="1.6"
            rx="0.8"
            fill="#93c5fd"
            initial={{ y: 34, opacity: 0 }}
            animate={{ y: [34, 60], opacity: [0, 0.9, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 0.9 + i * 0.5, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          className="absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-blue-400/40 bg-navy-900/80 text-blue-300 shadow-[0_0_16px_-4px_rgba(59,130,246,0.6)]"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
          transition={{
            opacity: { duration: 0.4, delay: 0.8 + i * 0.1 },
            scale: { duration: 0.4, delay: 0.8 + i * 0.1 },
            y: { duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
          }}
        >
          <node.icon className="h-4 w-4" />
        </motion.div>
      ))}
    </div>
  );
}
