import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Sparkles;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="focus-ring group flex flex-col rounded-card border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-bold text-navy-900">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm text-neutral-600">{service.shortDescription}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-500">
        Learn More
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
