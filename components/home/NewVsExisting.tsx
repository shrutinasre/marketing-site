import { Rocket, TrendingUp, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const newBusinessItems = [
  "Domain & DNS",
  "Professional email",
  "Employee accounts",
  "CRM",
  "Cloud infrastructure",
  "Cloud storage",
  "Website",
  "Security",
  "Backups",
  "Collaboration tools",
];

const existingBusinessItems = [
  "IT infrastructure audit",
  "Cloud optimization",
  "Security assessment",
  "CRM implementation / migration",
  "Backup implementation",
  "Infrastructure modernization",
  "Ongoing IT management",
  "Monitoring and support",
];

export function NewVsExisting() {
  return (
    <section className="bg-neutral-50 py-20 md:py-28">
      <div className="container-page grid gap-8 lg:grid-cols-2">
        <ScrollReveal>
          <div className="flex h-full flex-col rounded-card border border-neutral-200 bg-white p-8 md:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
              <Rocket className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900">Starting a New Business?</h3>
            <p className="mt-3 text-neutral-600">
              We&apos;ll build your entire IT foundation from scratch so your team can start
              operating professionally from day one.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {newBusinessItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/contact" className="mt-8 w-fit">
              Build My IT Foundation
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex h-full flex-col rounded-card border border-neutral-200 bg-navy-950 p-8 text-white md:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Already Running a Business?</h3>
            <p className="mt-3 text-neutral-300">
              We&apos;ll assess, modernize, secure and manage your existing technology
              environment so your business can scale without unnecessary IT complexity.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {existingBusinessItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="secondary" className="mt-8 w-fit">
              Optimize My IT
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
