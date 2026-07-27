import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const layers = [
  {
    label: "Protection",
    items: ["Security", "Monitoring", "Backups", "Disaster Recovery"],
    tone: "bg-blue-500/10 border-blue-400/30",
  },
  {
    label: "Infrastructure",
    items: ["Cloud Servers", "Database", "Storage", "DNS / CDN"],
    tone: "bg-blue-500/15 border-blue-400/40",
  },
  {
    label: "Applications",
    items: ["CRM", "Email", "Website", "Business Apps"],
    tone: "bg-blue-500/20 border-blue-400/50",
  },
  {
    label: "Business",
    items: ["Employees", "Customers", "Operations"],
    tone: "bg-blue-500/30 border-blue-400/60",
  },
];

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
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3">
            {layers.map((layer, i) => (
              <div
                key={layer.label}
                className={`w-full rounded-card border p-6 text-center ${layer.tone}`}
                style={{ maxWidth: `${100 - i * 12}%` }}
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-200">
                  {layer.label}
                </p>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-sm text-white/90">
                  {layer.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
            <div className="mt-2 rounded-full border border-blue-400 bg-blue-500 px-6 py-2 text-xs font-bold uppercase tracking-widest">
              Your Business
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-lg text-center text-sm font-semibold uppercase tracking-widest text-blue-300">
            Vighnex Managed IT — Around Every Layer
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
