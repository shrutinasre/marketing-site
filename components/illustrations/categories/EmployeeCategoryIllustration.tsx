"use client";

import { motion } from "framer-motion";
import { User, UserCheck } from "lucide-react";

const reports = [
  { x: 25, y: 78 },
  { x: 50, y: 85 },
  { x: 75, y: 78 },
];

/**
 * Abstract category illustration for employee IT management — a
 * simple org-chart style diagram of connected account nodes,
 * representing structured access rather than literal people.
 */
export function EmployeeCategoryIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[320px]" aria-hidden="true">
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.3), transparent 65%)" }}
      />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        {reports.map((r, i) => (
          <motion.line
            key={i}
            x1={50}
            y1={35}
            x2={r.x}
            y2={r.y}
            stroke="#3b82f6"
            strokeWidth="0.6"
            strokeDasharray="2 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.55 }}
            transition={{ duration: 0.7, delay: 0.3 + i * 0.12 }}
          />
        ))}
      </svg>

      {/* admin/root node */}
      <motion.div
        className="absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-blue-300 bg-blue-500 text-white shadow-[0_0_24px_-4px_rgba(59,130,246,0.8)]"
        style={{ left: "50%", top: "35%" }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <UserCheck className="h-5 w-5" />
      </motion.div>

      {reports.map((r, i) => (
        <motion.div
          key={i}
          className="absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-blue-400/40 bg-navy-900/80 text-blue-300 shadow-[0_0_14px_-4px_rgba(59,130,246,0.6)]"
          style={{ left: `${r.x}%`, top: `${r.y}%` }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
          transition={{
            opacity: { duration: 0.4, delay: 0.5 + i * 0.12 },
            scale: { duration: 0.4, delay: 0.5 + i * 0.12 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
          }}
        >
          <User className="h-4 w-4" />
        </motion.div>
      ))}
    </div>
  );
}
