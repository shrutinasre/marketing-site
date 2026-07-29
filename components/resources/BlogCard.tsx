"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Cloud, ShieldCheck, Users, Mail, LayoutGrid, TrendingUp, PiggyBank, DatabaseBackup, Sparkles } from "lucide-react";
import type { BlogPost } from "@/types";

const categoryIcons: Record<string, typeof Rocket> = {
  "Startup IT": Rocket,
  "Cloud Infrastructure": Cloud,
  Cybersecurity: ShieldCheck,
  "Business Systems": Users,
  "Google Workspace": Mail,
  "Microsoft 365": LayoutGrid,
  "Business Technology": TrendingUp,
  "IT Cost Optimization": PiggyBank,
  "Backup & Recovery": DatabaseBackup,
};

export function BlogCard({ post }: { post: BlogPost }) {
  const Icon = categoryIcons[post.category] ?? Sparkles;

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25, ease: "easeOut" }}>
      <Link
        href={`/resources/${post.slug}`}
        className="focus-ring group flex h-full flex-col rounded-card border border-neutral-200 bg-white p-7 transition-colors duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
      >
        <motion.div
          whileHover={{ rotate: 6 }}
          className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white"
        >
          <Icon className="h-5 w-5" />
        </motion.div>
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">{post.category}</p>
        <h2 className="mt-2 text-xl font-bold text-navy-900 group-hover:text-blue-600">{post.title}</h2>
        <p className="mt-2 flex-1 text-sm text-neutral-600">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs text-neutral-400">
            {post.author} · {post.readingTime}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-500">
            Read
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
