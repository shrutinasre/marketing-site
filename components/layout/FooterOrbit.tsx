"use client";

import { motion } from "framer-motion";
import { Cloud, ShieldCheck, Server, Database, Users, Globe, Mail, Workflow } from "lucide-react";

const icons = [Cloud, ShieldCheck, Server, Database, Users, Globe, Mail, Workflow];

const particles = Array.from({ length: 16 }, (_, i) => ({
  icon: icons[i % icons.length],
  x: (i * 6.4 + 4) % 100,
  size: 12 + ((i * 5) % 6),
  duration: 9 + ((i * 7) % 8),
  delay: (i * 0.9) % 8,
}));

/**
 * Decorative background treatment for the footer — the same slow
 * drifting/rising motion as before, but using floating service icons
 * (cloud, security, servers, database, etc.) instead of plain dots, so
 * the illustration ties back to what Vighnex actually does.
 */
export function FooterOrbit() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute left-1/2 top-0 h-80 w-[720px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.22), transparent 70%)" }}
      />

      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-400"
          style={{
            left: `${p.x}%`,
            bottom: 0,
          }}
          initial={{ opacity: 0, y: 40, rotate: -8 }}
          animate={{ opacity: [0, 0.55, 0], y: [40, -240], rotate: [-8, 8] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeOut",
          }}
        >
          <p.icon style={{ width: p.size, height: p.size }} />
        </motion.div>
      ))}
    </div>
  );
}
