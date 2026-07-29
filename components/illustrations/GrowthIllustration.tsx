"use client";

import { motion } from "framer-motion";

/**
 * Custom SVG illustration representing modernizing/scaling an existing
 * business — an upward trend line through ascending infrastructure bars.
 */
export function GrowthIllustration() {
  const bars = [40, 65, 55, 90, 120];

  return (
    <svg viewBox="0 0 320 200" className="mx-auto w-full max-w-[260px]" aria-hidden="true">
      <defs>
        <linearGradient id="growthBar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1a2740" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={30 + i * 55}
          width={32}
          rx={6}
          fill="url(#growthBar)"
          initial={{ height: 0, y: 170 }}
          animate={{ height: h, y: 170 - h }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
        />
      ))}

      {/* trend line across the tops of the bars */}
      <motion.path
        d={`M ${30 + 16} ${170 - bars[0]} L ${30 + 55 + 16} ${170 - bars[1]} L ${30 + 110 + 16} ${
          170 - bars[2]
        } L ${30 + 165 + 16} ${170 - bars[3]} L ${30 + 220 + 16} ${170 - bars[4]}`}
        fill="none"
        stroke="#93c5fd"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />

      {/* arrowhead at the end of the trend line */}
      <motion.circle
        cx={30 + 220 + 16}
        cy={170 - bars[4]}
        r="5"
        fill="#60a5fa"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.3, 1] }}
        transition={{ duration: 0.5, delay: 1.5 }}
      />
    </svg>
  );
}
