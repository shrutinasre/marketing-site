"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 24 }, (_, i) => ({
  x: (i * 37 + 5) % 100,
  size: 1 + ((i * 13) % 3),
  duration: 6 + ((i * 7) % 8),
  delay: (i * 0.6) % 6,
}));

/**
 * Decorative background treatment for the footer — a slow drifting
 * particle field rising through a soft glow, spanning the footer's
 * full height. Distinct from the orbiting-icon-node style used on
 * service/solution pages and from the earlier top-edge signal-wave
 * version, so the footer keeps its own visual identity.
 */
export function FooterOrbit() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute left-1/2 top-0 h-80 w-[720px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.22), transparent 70%)" }}
      />

      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: `${p.x}%`,
            width: p.size * 3,
            height: p.size * 3,
            bottom: 0,
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: [0, 0.5, 0], y: [40, -220] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
