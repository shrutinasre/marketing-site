"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { NavGroup } from "@/types";

export function MegaMenu({
  groups,
  onNavigate,
  viewAllHref,
  viewAllLabel,
}: {
  groups: NavGroup[];
  onNavigate?: () => void;
  viewAllHref?: string;
  viewAllLabel?: string;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.15 }}
        className="absolute left-1/2 top-full z-40 mt-3 w-[min(92vw,64rem)] -translate-x-1/2 rounded-card border border-neutral-200 bg-white p-6 shadow-2xl"
        role="menu"
      >
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {groups.map((group) => (
            <div key={group.heading}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                {group.heading}
              </p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className="focus-ring group block rounded-lg"
                    >
                      <span className="block text-sm font-semibold text-navy-900 group-hover:text-blue-500">
                        {item.label}
                      </span>
                      {item.description && (
                        <span className="mt-0.5 block text-xs text-neutral-500">
                          {item.description}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {viewAllHref && (
          <div className="mt-6 border-t border-neutral-100 pt-4">
            <Link
              href={viewAllHref}
              onClick={onNavigate}
              className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-blue-500 hover:text-blue-600"
            >
              {viewAllLabel ?? "View All"}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
