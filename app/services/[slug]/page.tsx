import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as Icons from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { techEcosystem } from "@/data/tech";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
    openGraph: { title: service.title, description: service.shortDescription },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Sparkles;

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: service.title, url: `${siteConfig.url}/services/${service.slug}` },
  ]);

  return (
    <>
      <JsonLd data={[serviceSchema(service), faqPageSchema(service.faqs), breadcrumbs]} />
      <section className="bg-navy-950 py-20 text-white md:py-28">
        <div className="container-page">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
            <Icon className="h-7 w-7" />
          </div>
          <h1 className="max-w-2xl text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-neutral-300">{service.shortDescription}</p>
          <Button href="/contact" size="lg" className="mt-8">
            Get Free IT Consultation
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-navy-900">The Problem</h2>
            <p className="mt-3 text-neutral-600">{service.problem}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy-900">Our Solution</h2>
            <p className="mt-3 text-neutral-600">{service.solution}</p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading align="left" title="What's Included" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {service.included.map((item) => (
              <li key={item} className="flex items-start gap-2.5 rounded-xl border border-neutral-200 bg-white p-4 text-sm text-neutral-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <SectionHeading align="left" title="Implementation Process" />
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <li key={step} className="rounded-card border border-neutral-200 p-6">
                <span className="text-sm font-bold text-blue-500">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-sm text-neutral-700">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading align="left" title="Benefits" />
            <ul className="mt-6 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading align="left" title="Relevant Technologies" />
            <div className="mt-6 flex flex-wrap gap-2">
              {service.technologies.map((t) => (
                <span key={t} className="rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm text-neutral-600">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <SectionHeading align="left" title="Frequently Asked Questions" />
          <div className="mt-8 max-w-3xl">
            <FAQAccordion items={service.faqs} />
          </div>
        </div>
      </section>

      <CTASection
        heading={`Ready to Talk About ${service.title}?`}
        text="Tell us about your business and we'll design the right approach for your infrastructure."
      />

      <section className="border-t border-neutral-100 py-10">
        <div className="container-page">
          <p className="text-sm text-neutral-500">
            Explore more:{" "}
            <Link href="/services" className="font-semibold text-blue-500 hover:underline">
              All Services
            </Link>{" "}
            · Technologies we work with: {techEcosystem.map((t) => t.name).join(", ")}
          </p>
        </div>
      </section>
    </>
  );
}
