import { Mail, UserCog, Users, Cloud, Globe, Database, Network, HardDrive, DatabaseBackup, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const categories = [
  { icon: Mail, label: "Email" },
  { icon: UserCog, label: "Accounts" },
  { icon: Users, label: "Business Systems" },
  { icon: Cloud, label: "Cloud" },
  { icon: Globe, label: "Website" },
  { icon: Database, label: "Database" },
  { icon: Network, label: "DNS" },
  { icon: HardDrive, label: "Storage" },
  { icon: DatabaseBackup, label: "Backup" },
  { icon: ShieldCheck, label: "Security" },
];

export function SupportSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Managed Support"
          title="One Place for IT Support"
          subtitle="You shouldn't need to figure out whether a problem belongs to your email provider, hosting provider, business systems vendor or cloud provider. Vighnex is your primary technical contact, coordinating across your entire technology environment."
        />
        <ScrollReveal delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-navy-800"
              >
                <cat.icon className="h-4 w-4 text-blue-500" />
                {cat.label}
              </div>
            ))}
          </div>
        </ScrollReveal>
        <div className="mt-10 text-center">
          <Button href="/contact">Talk to Our IT Team</Button>
        </div>
      </div>
    </section>
  );
}
