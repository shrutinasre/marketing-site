"use client";

import { motion } from "framer-motion";
import { Cloud, ShieldCheck, Users, Globe, Rocket } from "lucide-react";

const nodes = [
  { icon: Rocket, x: 12, y: 18 },
  { icon: Cloud, x: 42, y: 6 },
  { icon: Users, x: 72, y: 20 },
  { icon: ShieldCheck, x: 88, y: 55 },
  { icon: Globe, x: 30, y: 60 },
];

/**
 * Subtle decorative background illustration for the footer — faint
 * orbiting icon nodes around a glow, in the same abstract/geometric
 * style used across the site, kept low-opacity so it never competes
 * with the footer's text and links.
 */
export function FooterOrbit() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 hidden h-56 overflow-hidden opacity-[0.35] md:block"
      aria-hidden="true"
    >
      <div
        className="absolute -top-24 right-10 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.4), transparent 70%)" }}
      />
      <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="xMidYMin slice">
        {nodes.map((node, i) => (
          <motion.line
            key={i}
            x1={50}
            y1={30}
            x2={node.x}
            y2={node.y}
            stroke="#3b82f6"
            strokeWidth="0.3"
            strokeDasharray="1.2 2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          />
        ))}
      </svg>
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-blue-400/30 bg-navy-900/60 text-blue-300"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.4, delay: 0.2 + i * 0.1 },
            scale: { duration: 0.4, delay: 0.2 + i * 0.1 },
            y: { duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
          }}
        >
          <node.icon className="h-3.5 w-3.5" />
        </motion.div>
      ))}
    </div>
  );
}
