"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const CENTER = 250;

// All rings share the same angle offset so every ring has a guaranteed
// gap at the top (12 o'clock) — that's where each ring's label badge
// sits, so a node must never land there or it collides with the badge.
const RING_ANGLE_OFFSET = -90 + 45;

const rings = [
  {
    label: "Applications",
    radius: 95,
    angleOffset: RING_ANGLE_OFFSET,
    items: ["Business Systems", "Email", "Website", "Business Apps"],
  },
  {
    label: "Infrastructure",
    radius: 155,
    angleOffset: RING_ANGLE_OFFSET,
    items: ["Cloud Servers", "Database", "Storage", "DNS / CDN"],
  },
  {
    label: "Protection",
    radius: 215,
    angleOffset: RING_ANGLE_OFFSET,
    items: ["Security", "Monitoring", "Backups", "Disaster Recovery"],
  },
];

function nodePosition(index: number, total: number, radius: number, angleOffsetDeg: number) {
  const angle = (index / total) * Math.PI * 2 + (angleOffsetDeg * Math.PI) / 180;
  return {
    x: CENTER + radius * Math.cos(angle),
    y: CENTER + radius * Math.sin(angle),
  };
}

export function ArchitectureDiagram() {
  return (
    <section className="bg-navy-950 py-20 text-white md:py-28">
      <div className="container-page">
        <SectionHeading
          light
          eyebrow="What We Manage"
          title="A Complete Technology Foundation, Managed End to End"
          subtitle="Every layer around your business — protected, monitored and managed as one system, not a pile of disconnected vendors."
        />

        <ScrollReveal delay={0.1} className="mt-14">
          <div className="relative mx-auto aspect-square w-full max-w-[560px]" aria-hidden="true">
            <svg viewBox="0 0 500 500" className="h-full w-full overflow-visible">
              <defs>
                <radialGradient id="archHubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="archLineGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#1a2740" />
                </linearGradient>
              </defs>

              {/* ring guides */}
              {rings.map((ring, ri) => (
                <motion.circle
                  key={`guide-${ring.label}`}
                  cx={CENTER}
                  cy={CENTER}
                  r={ring.radius}
                  fill="none"
                  stroke="#3b82f6"
                  strokeOpacity={0.18 + ri * 0.05}
                  strokeDasharray="4 7"
                  strokeWidth="1.5"
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: ri * 0.15 }}
                  style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
                />
              ))}

              {/* spokes + nodes per ring */}
              {rings.map((ring, ri) =>
                ring.items.map((item, i) => {
                  const pos = nodePosition(i, ring.items.length, ring.radius, ring.angleOffset);
                  return (
                    <g key={`${ring.label}-${item}`}>
                      <motion.line
                        x1={CENTER}
                        y1={CENTER}
                        x2={pos.x}
                        y2={pos.y}
                        stroke="url(#archLineGradient)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.45 }}
                        transition={{ duration: 0.8, delay: ri * 0.15 + i * 0.05 }}
                      />
                      <motion.circle
                        r="4.5"
                        fill="#60a5fa"
                        initial={{ opacity: 0 }}
                        animate={{ cx: pos.x, cy: pos.y, opacity: 1 }}
                        transition={{ duration: 0.5, delay: ri * 0.15 + i * 0.05 + 0.3 }}
                        style={{
                          filter: "drop-shadow(0 0 5px rgba(96,165,250,0.8))",
                        }}
                      />
                    </g>
                  );
                })
              )}

              {/* animated particles traveling outward along a few spokes */}
              {rings.flatMap((ring, ri) =>
                ring.items.slice(0, 1).map((item, i) => {
                  const pos = nodePosition(i, ring.items.length, ring.radius, ring.angleOffset);
                  return (
                    <motion.circle
                      key={`particle-${ring.label}-${item}`}
                      r="3"
                      fill="#93c5fd"
                      initial={{ cx: CENTER, cy: CENTER, opacity: 0 }}
                      animate={{
                        cx: [CENTER, pos.x, CENTER],
                        cy: [CENTER, pos.y, CENTER],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        delay: ri * 0.8,
                        ease: "easeInOut",
                      }}
                    />
                  );
                })
              )}

              {/* hub glow + hub */}
              <circle cx={CENTER} cy={CENTER} r="88" fill="url(#archHubGlow)" />
              <motion.circle
                cx={CENTER}
                cy={CENTER}
                r="60"
                fill="#0b111f"
                stroke="#3b82f6"
                strokeWidth="2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
              />
            </svg>

            {/* hub label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <Building2 className="mb-1 h-5 w-5 text-blue-300" />
              <span className="text-xs font-bold uppercase tracking-wide text-white">Your Business</span>
              <span className="mt-0.5 max-w-[7rem] text-[10px] leading-tight text-neutral-400">
                Employees · Customers · Operations
              </span>
            </div>

            {/* ring badges at each ring's 12-o'clock position */}
            {rings.map((ring) => (
              <div
                key={`badge-${ring.label}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-blue-400/40 bg-navy-950 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-300"
                style={{
                  left: "50%",
                  top: `${((CENTER - ring.radius) / 500) * 100}%`,
                }}
              >
                {ring.label}
              </div>
            ))}

            {/* node labels */}
            {rings.map((ring) =>
              ring.items.map((item, i) => {
                const pos = nodePosition(i, ring.items.length, ring.radius, ring.angleOffset);
                const leftPct = (pos.x / 500) * 100;
                const topPct = (pos.y / 500) * 100;
                return (
                  <div
                    key={`label-${ring.label}-${item}`}
                    className="absolute w-24 text-center"
                    style={{
                      left: `${leftPct}%`,
                      top: `${topPct}%`,
                      transform: `translate(-50%, ${pos.y > CENTER ? "6px" : "-100%"})`,
                    }}
                  >
                    <span className="text-[10px] leading-tight text-neutral-300">{item}</span>
                  </div>
                );
              })
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
