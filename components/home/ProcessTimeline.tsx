import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand the business, team size, workflows, applications and current IT environment.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We design an IT infrastructure appropriate for the company's current requirements and expected growth.",
  },
  {
    number: "03",
    title: "Implement",
    description: "We configure, migrate, integrate, secure and deploy the required systems.",
  },
  {
    number: "04",
    title: "Manage",
    description:
      "We monitor, maintain, support and continuously improve the company's IT environment.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="bg-neutral-50 py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="How It Works" title="Simple Process. Powerful Foundation." />

        <div className="relative mt-16 grid gap-10 md:grid-cols-4">
          <div
            className="absolute top-6 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent md:block"
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div className="relative">
                <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-sm font-bold text-blue-500">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
