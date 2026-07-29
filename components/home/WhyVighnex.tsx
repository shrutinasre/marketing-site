import { DollarSign, UserCheck, TrendingUp, ShieldCheck, Radar, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const benefits = [
  {
    icon: DollarSign,
    title: "Cost Efficient",
    description:
      "Access professional IT expertise without immediately building a large internal IT department.",
  },
  {
    icon: UserCheck,
    title: "Single Point of Contact",
    description:
      "Instead of coordinating between hosting companies, email providers, business systems vendors and developers, work with one technology partner.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    description:
      "Infrastructure appropriate for your business today, capable of evolving as requirements increase.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Access controls, MFA, backups, secure configuration and monitoring integrated from the beginning.",
  },
  {
    icon: Radar,
    title: "Proactive Management",
    description: "We monitor infrastructure and address issues proactively, not only when systems fail.",
  },
  {
    icon: Building2,
    title: "Business Focused",
    description:
      "We explain technology in business terms and recommend solutions based on actual operational requirements.",
  },
];

export function WhyVighnex() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading title="One Partner for Your Entire Technology Foundation" />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 0.06}>
              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{benefit.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
