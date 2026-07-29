"use client";

import { motion } from "framer-motion";
import { Lock, History, FolderTree } from "lucide-react";

const nodes = [
  { icon: FolderTree, x: 22, y: 30, label: "folders" },
  { icon: Lock, x: 78, y: 30, label: "access" },
  { icon: History, x: 50, y: 86, label: "versions" },
];

const files = [0, 1, 2];

/**
 * Abstract illustration specifically for Cloud Storage — files
 * folding into a secure vault/drive shape, distinct from
 * CloudCategoryIllustration, ApplicationHostingIllustration, and
 * DatabaseManagementIllustration, even though all share the "cloud"
 * category.
 */
export function CloudStorageIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[320px]" aria-hidden="true">
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.32), transparent 65%)" }}
      />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        {nodes.map((node, i) => (
          <motion.line
            key={node.label}
            x1={50}
            y1={52}
            x2={node.x}
            y2={node.y}
            stroke="#3b82f6"
            strokeWidth="0.5"
            strokeDasharray="2 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 0.7, delay: 0.7 + i * 0.12 }}
          />
        ))}

        {/* vault/drive outline */}
        <motion.rect
          x="32"
          y="34"
          width="36"
          height="30"
          rx="6"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="1.6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.95 }}
          transition={{ duration: 1 }}
        />
        <motion.circle
          cx="50"
          cy="49"
          r="6"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="1.4"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          style={{ transformOrigin: "50px 49px" }}
        />
        <motion.circle
          cx="50"
          cy="49"
          r="2"
          fill="#93c5fd"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        />

        {/* files folding down into the vault */}
        {files.map((i) => (
          <motion.rect
            key={i}
            x={40 + i * 6}
            width="10"
            height="7"
            rx="1.2"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="1"
            initial={{ y: 10, opacity: 0, rotate: -8 }}
            animate={{ y: [10, 34], opacity: [0, 0.9, 0], rotate: 0 }}
            transition={{ duration: 1.6, repeat: Infinity, delay: 0.9 + i * 0.5, ease: "easeIn" }}
            style={{ transformOrigin: `${45 + i * 6}px 14px` }}
          />
        ))}
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          className="absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-blue-400/40 bg-navy-900/80 text-blue-300 shadow-[0_0_16px_-4px_rgba(59,130,246,0.6)]"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
          transition={{
            opacity: { duration: 0.4, delay: 0.8 + i * 0.1 },
            scale: { duration: 0.4, delay: 0.8 + i * 0.1 },
            y: { duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
          }}
        >
          <node.icon className="h-4 w-4" />
        </motion.div>
      ))}
    </div>
  );
}
