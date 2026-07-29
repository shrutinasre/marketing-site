"use client";

import { motion } from "framer-motion";
import { Database, Lock } from "lucide-react";

/**
 * Abstract category illustration for cloud/infrastructure services —
 * a cloud outline with connected server/database nodes, in the same
 * glow/node visual language as ServiceConstellation.
 */
export function CloudCategoryIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[340px]" aria-hidden="true">
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.3), transparent 65%)" }}
      />
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full overflow-visible">
        <motion.path
          d="M55 110 a25 25 0 0 1 0 -50 a32 32 0 0 1 62 -8 a24 24 0 0 1 3 47 Z"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 1.2 }}
        />
        {[
          { x: 60, y: 150 },
          { x: 100, y: 165 },
          { x: 140, y: 150 },
        ].map((p, i) => (
          <motion.line
            key={i}
            x1={p.x}
            y1={110}
            x2={p.x}
            y2={p.y}
            stroke="#3b82f6"
            strokeWidth="1.5"
            strokeDasharray="3 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
          />
        ))}
      </svg>

      {[
        { x: 30, y: 75, delay: 0.2 },
        { x: 70, y: 75, delay: 0.35 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_2px_rgba(96,165,250,0.6)]"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: p.delay }}
        />
      ))}

      {[
        { x: 60, y: 150, Icon: Database, delay: 0.9 },
        { x: 100, y: 165, Icon: Lock, delay: 1.05 },
        { x: 140, y: 150, Icon: Database, delay: 1.2 },
      ].map(({ x, y, Icon, delay }, i) => (
        <motion.div
          key={i}
          className="absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-blue-400/40 bg-navy-900/80 text-blue-300 shadow-[0_0_16px_-4px_rgba(59,130,246,0.6)]"
          style={{ left: `${(x / 200) * 100}%`, top: `${(y / 200) * 100}%` }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
          transition={{
            opacity: { duration: 0.4, delay },
            scale: { duration: 0.4, delay },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay },
          }}
        >
          <Icon className="h-4 w-4" />
        </motion.div>
      ))}
    </div>
  );
}
