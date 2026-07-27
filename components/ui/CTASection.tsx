import { Button } from "@/components/ui/Button";

export function CTASection({
  heading,
  text,
  primaryLabel = "Get Free IT Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Explore Our Services",
  secondaryHref = "/services",
}: {
  heading: string;
  text: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 text-center text-white md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: "radial-gradient(50% 60% at 50% 0%, rgba(37,99,235,0.3), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="container-page relative">
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-neutral-300">{text}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={primaryHref} size="lg">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="ghost" size="lg">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
