"use client";

import { motion } from "framer-motion";
import { FileText, MessageSquare, Kanban, CreditCard } from "lucide-react";

const tiles = [
  { icon: FileText, x: 30, y: 32 },
  { icon: MessageSquare, x: 70, y: 32 },
  { icon: Kanban, x: 30, y: 68 },
  { icon: CreditCard, x: 70, y: 68 },
];

/**
 * Abstract illustration specifically for Business Applications — a
 * grid of app tiles synced together, distinct from
 * SystemsCategoryIllustration's central-hub layout used by Business
 * Systems and Integrations, even though all three share the
 * "systems" category.
 */
export function BusinessApplicationsIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[320px]" aria-hidden="true">
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.32), transparent 65%)" }}
      />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        {/* sync connections forming a loop between the four tiles */}
        <motion.path
          d="M30 32 H70 M70 32 V68 M70 68 H30 M30 68 V32"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="0.6"
          strokeDasharray="2 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        />
        <motion.circle
          r="1.6"
          fill="#93c5fd"
          initial={{ opacity: 0 }}
          animate={{
            cx: [30, 70, 70, 30, 30],
            cy: [32, 32, 68, 68, 32],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "linear", delay: 1.4 }}
        />
      </svg>

      {tiles.map((tile, i) => (
        <motion.div
          key={i}
          className="absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-blue-400/40 bg-navy-900/80 text-blue-300 shadow-[0_0_18px_-4px_rgba(59,130,246,0.6)]"
          style={{ left: `${tile.x}%`, top: `${tile.y}%` }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
          transition={{
            opacity: { duration: 0.4, delay: 0.2 + i * 0.12 },
            scale: { duration: 0.4, delay: 0.2 + i * 0.12 },
            y: { duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
          }}
        >
          <tile.icon className="h-5 w-5" />
        </motion.div>
      ))}
    </div>
  );
}
