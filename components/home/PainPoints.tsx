import { X, Check, ArrowDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const before = [
  "Multiple vendors",
  "Unmanaged accounts",
  "No clear backup strategy",
  "Infrastructure problems",
  "Security uncertainty",
  "Unexpected IT issues",
  "Employees managing their own IT",
  "No centralized support",
];

const after = [
  "One IT partner",
  "Centralized administration",
  "Managed backups",
  "Structured infrastructure",
  "Security best practices",
  "Proactive monitoring",
  "Managed employee access",
  "Dedicated technical support",
];

export function PainPoints() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading title="Managing IT Shouldn't Distract You From Running Your Business" />

        <div className="mt-8 flex flex-col items-center gap-2 text-center text-sm text-neutral-500">
          <span>Multiple Vendors + Systems + Problems</span>
          <ArrowDown className="h-4 w-4" />
          <span className="font-semibold text-blue-500">Vighnex</span>
          <ArrowDown className="h-4 w-4" />
          <span>One Managed IT Environment</span>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ScrollReveal>
            <div className="h-full rounded-card border border-red-100 bg-red-50/50 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-red-500">
                Before Vighnex
              </h3>
              <ul className="mt-5 space-y-3">
                {before.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="h-full rounded-card border border-blue-100 bg-blue-50/50 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-500">
                With Vighnex
              </h3>
              <ul className="mt-5 space-y-3">
                {after.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
