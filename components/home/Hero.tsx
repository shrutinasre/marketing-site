"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { InfrastructureNetwork } from "@/components/home/InfrastructureNetwork";
import { GradientBlob } from "@/components/animations/GradientBlob";

const trustIndicators = ["Secure", "Reliable", "Scalable", "Cost Effective"];
const trustMetrics = ["One IT Partner", "24/7 Infrastructure Monitoring", "Secure by Design"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-16 pb-20 md:pt-24 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, rgba(37,99,235,0.25), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <GradientBlob className="-left-32 top-10 h-72 w-72" />
      <GradientBlob className="right-0 bottom-0 h-96 w-96" color="soft" />
      <div className="container-page relative grid items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge>Your Complete IT Department</Badge>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-[3.4rem]">
            We Build. We Secure.{" "}
            <span className="text-blue-400">We Manage Your IT.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-neutral-300">
            Complete IT infrastructure setup and management for startups and growing
            businesses. Focus on your growth while we handle the technology.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {trustIndicators.map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-sm text-neutral-300">
                <Check className="h-4 w-4 text-blue-400" /> {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Get Free IT Consultation
            </Button>
            <Button href="/services" variant="ghost" size="lg">
              Explore Services
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6">
            {trustMetrics.map((metric) => (
              <span key={metric} className="text-xs font-medium tracking-wide text-neutral-400">
                {metric}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hidden md:block"
        >
          <InfrastructureNetwork />
        </motion.div>
      </div>
    </section>
  );
}
