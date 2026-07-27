import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold tracking-[0.2em] uppercase",
            light ? "text-blue-300" : "text-blue-500"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem]",
          light ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg",
            light ? "text-neutral-300" : "text-neutral-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
