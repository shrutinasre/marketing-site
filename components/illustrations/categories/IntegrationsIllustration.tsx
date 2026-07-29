"use client";

import { motion } from "framer-motion";
import { Mail, CreditCard, Users2 } from "lucide-react";
import { Workflow } from "lucide-react";

const sources = [
  { icon: Mail, x: 20, y: 24 },
  { icon: Users2, x: 20, y: 76 },
];

const targets = [{ icon: CreditCard, x: 80, y: 50 }];

const pulses = [0, 1, 2];

/**
 * Abstract illustration specifically for Integrations — data
 * flowing from source app nodes, through a central sync hub, into
 * a target app node. Distinct from SystemsCategoryIllustration
 * (hub-and-spoke) and BusinessApplicationsIllustration (tile grid),
 * even though all three share the "systems" category.
 */
export function IntegrationsIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[320px]" aria-hidden="true">
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.32), transparent 65%)" }}
      />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        {sources.map((s, i) => (
          <motion.path
            key={i}
            d={`M${s.x} ${s.y} Q 50 50 ${targets[0].x} ${targets[0].y}`}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="0.6"
            strokeDasharray="2 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 0.8, delay: 0.6 + i * 0.15 }}
          />
        ))}

        {/* sync hub */}
        <motion.circle
          cx="50"
          cy="50"
          r="8"
          fill="#0b111f"
          stroke="#60a5fa"
          strokeWidth="1.4"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{
            opacity: { duration: 0.4, delay: 0.4 },
            scale: { duration: 0.4, delay: 0.4 },
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          }}
          style={{ transformOrigin: "50px 50px" }}
        />

        {/* pulses traveling along both source paths toward the target */}
        {pulses.map((i) => {
          const s = sources[i % 2];
          return (
            <motion.circle
              key={i}
              r="1.5"
              fill="#93c5fd"
              initial={{ opacity: 0 }}
              animate={{
                cx: [s.x, 50, targets[0].x],
                cy: [s.y, 50, targets[0].y],
                opacity: [0, 0.9, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 + i * 0.5, ease: "easeInOut" }}
            />
          );
        })}
      </svg>

      <motion.div
        className="absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-300 bg-blue-500 text-white shadow-[0_0_20px_-4px_rgba(59,130,246,0.8)]"
        style={{ left: "50%", top: "50%" }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <Workflow className="h-4 w-4" />
      </motion.div>

      {[...sources, ...targets].map((node, i) => (
        <motion.div
          key={i}
          className="absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-blue-400/40 bg-navy-900/80 text-blue-300 shadow-[0_0_16px_-4px_rgba(59,130,246,0.6)]"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
          transition={{
            opacity: { duration: 0.4, delay: 0.2 + i * 0.12 },
            scale: { duration: 0.4, delay: 0.2 + i * 0.12 },
            y: { duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
          }}
        >
          <node.icon className="h-4 w-4" />
        </motion.div>
      ))}
    </div>
  );
}
