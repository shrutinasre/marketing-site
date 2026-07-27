import {
  KeyRound,
  Users,
  Flame,
  Cloud,
  Lock,
  DatabaseBackup,
  Database,
  Radar,
  UserCog,
  ShieldAlert,
  LifeBuoy,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const items = [
  { icon: KeyRound, label: "Multi-factor authentication" },
  { icon: Users, label: "Role-based access" },
  { icon: Flame, label: "Firewall configuration" },
  { icon: Cloud, label: "Secure cloud configuration" },
  { icon: Lock, label: "SSL / TLS" },
  { icon: DatabaseBackup, label: "Automated backups" },
  { icon: Database, label: "Database backups" },
  { icon: Radar, label: "Monitoring" },
  { icon: UserCog, label: "Employee access management" },
  { icon: ShieldAlert, label: "Security updates" },
  { icon: LifeBuoy, label: "Disaster recovery planning" },
];

export function SecuritySection() {
  return (
    <section className="bg-navy-950 py-20 text-white md:py-28">
      <div className="container-page">
        <SectionHeading
          light
          title="Your Business Runs on Technology. Protect It Properly."
        />
        <ScrollReveal delay={0.1}>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {items.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 rounded-card border border-white/10 bg-white/5 p-5 text-center"
              >
                <item.icon className="h-6 w-6 text-blue-300" />
                <span className="text-sm text-neutral-200">{item.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
