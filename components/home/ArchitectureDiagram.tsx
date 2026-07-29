"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Server, LayoutGrid, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const layers = [
  {
    label: "Protection",
    icon: ShieldCheck,
    items: ["Security", "Monitoring", "Backups", "Disaster Recovery"],
  },
  {
    label: "Infrastructure",
    icon: Server,
    items: ["Cloud Servers", "Database", "Storage", "DNS / CDN"],
  },
  {
    label: "Applications",
    icon: LayoutGrid,
    items: ["Business Systems", "Email", "Website", "Business Apps"],
  },
];

const coreItems = ["Employees", "Customers", "Operations"];

export function ArchitectureDiagram() {
  return (
    <section className="bg-navy-950 py-20 text-white md:py-28">
      <div className="container-page">
        <SectionHeading
          light
          eyebrow="What We Manage"
          title="A Complete Technology Foundation, Managed End to End"
        />

        <ScrollReveal delay={0.1} className="mt-14">
          <div className="relative mx-auto max-w-3xl rounded-[2rem] border border-dashed border-blue-400/30 p-6 sm:p-10">
            {/* framing badge — Vighnex wraps around every layer */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-blue-400/50 bg-navy-950 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-300">
              Vighnex Managed IT
            </div>

            <div className="flex flex-col items-center gap-4">
              {layers.map((layer, i) => (
                <motion.div
                  key={layer.label}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.12 }}
                  className="w-full rounded-2xl border p-6 text-center transition-colors"
                  style={{
                    maxWidth: `${100 - i * 10}%`,
                    borderColor: `rgba(96,165,250,${0.2 + i * 0.12})`,
                    background: `rgba(37,99,235,${0.05 + i * 0.05})`,
                  }}
                >
                  <div className="mb-3 flex items-center justify-center gap-2">
                    <layer.icon className="h-4 w-4 text-blue-300" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-200">
                      {layer.label}
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90 transition-colors hover:border-blue-300/50 hover:bg-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* core — the business itself, visually the innermost, brightest layer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: layers.length * 0.12 }}
                className="relative w-full max-w-[62%] rounded-2xl border border-blue-300 bg-blue-500 p-6 text-center shadow-[0_0_40px_-8px_rgba(37,99,235,0.7)]"
              >
                <div className="mb-3 flex items-center justify-center gap-2">
                  <Building2 className="h-4 w-4 text-white" />
                  <p className="text-xs font-bold uppercase tracking-widest text-white">
                    Your Business
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {coreItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
