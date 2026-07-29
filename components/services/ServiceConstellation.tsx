"use client";

import { motion } from "framer-motion";
import { Rocket, Cloud, Users, ShieldCheck, Globe, Headset } from "lucide-react";

const nodes = [
  { icon: Rocket, label: "Foundation", x: 18, y: 20 },
  { icon: Cloud, label: "Cloud", x: 78, y: 15 },
  { icon: Users, label: "Business Systems", x: 8, y: 62 },
  { icon: ShieldCheck, label: "Security", x: 88, y: 60 },
  { icon: Globe, label: "Website", x: 30, y: 88 },
  { icon: Headset, label: "Support", x: 68, y: 92 },
];

/**
 * Decorative hero visual for the services listing page — floating
 * icon nodes representing service categories, connected to a central
 * glow, in the same abstract/geometric style as the network and
 * architecture diagrams elsewhere on the site.
 */
export function ServiceConstellation() {
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
        <circle cx="50" cy="50" r="6" fill="#0b111f" stroke="#3b82f6" strokeWidth="1" />
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
