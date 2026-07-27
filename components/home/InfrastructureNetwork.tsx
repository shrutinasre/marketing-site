"use client";

import { motion } from "framer-motion";
import { ecosystemNodes } from "@/data/tech";

// Positions for 8 nodes arranged in a circle around the central hub.
const RADIUS = 170;
const CENTER = 200;

function nodePosition(index: number, total: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    x: CENTER + RADIUS * Math.cos(angle),
    y: CENTER + RADIUS * Math.sin(angle),
  };
}

export function InfrastructureNetwork() {
  const nodes = ecosystemNodes;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]" aria-hidden="true">
      <svg viewBox="0 0 400 400" className="h-full w-full overflow-visible">
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* connecting lines */}
        {nodes.map((_, i) => {
          const pos = nodePosition(i, nodes.length);
          return (
            <motion.line
              key={`line-${i}`}
              x1={CENTER}
              y1={CENTER}
              x2={pos.x}
              y2={pos.y}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 1, delay: i * 0.08 }}
            />
          );
        })}

        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#1a2740" />
        </linearGradient>

        {/* animated particles traveling along lines */}
        {nodes.map((_, i) => {
          const pos = nodePosition(i, nodes.length);
          return (
            <motion.circle
              key={`particle-${i}`}
              r="3"
              fill="#60a5fa"
              initial={{ cx: CENTER, cy: CENTER, opacity: 0 }}
              animate={{
                cx: [CENTER, pos.x, CENTER],
                cy: [CENTER, pos.y, CENTER],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* central hub glow */}
        <circle cx={CENTER} cy={CENTER} r="90" fill="url(#hubGlow)" />

        {/* central hub */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r="46"
          fill="#0b111f"
          stroke="#3b82f6"
          strokeWidth="1.5"
        />
      </svg>

      {/* central label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-blue-300">
          Your Business
        </span>
        <span className="text-[10px] text-neutral-400">Our IT Expertise</span>
      </div>

      {/* node labels */}
      {nodes.map((node, i) => {
        const pos = nodePosition(i, nodes.length);
        const leftPct = (pos.x / 400) * 100;
        const topPct = (pos.y / 400) * 100;
        return (
          <div
            key={node.label}
            className="absolute w-24 -translate-x-1/2 -translate-y-1/2 text-center"
            style={{ left: `${leftPct}%`, top: `${topPct}%` }}
          >
            <div className="mx-auto mb-1 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_2px_rgba(96,165,250,0.6)]" />
            <span className="text-[10px] leading-tight text-neutral-300">{node.label}</span>
          </div>
        );
      })}
    </div>
  );
}
