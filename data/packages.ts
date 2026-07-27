import type { PackageTier } from "@/types";

export const packages: PackageTier[] = [
  {
    slug: "startup-it",
    name: "Startup IT",
    tagline: "For new companies establishing their technology foundation.",
    priceLabel: "Custom Quote",
    inclusions: [
      "Business email setup",
      "Workspace administration",
      "Domain & DNS setup",
      "Basic cloud setup",
      "Backup configuration",
      "Security baseline",
      "Technical support",
    ],
  },
  {
    slug: "business-it",
    name: "Business IT",
    tagline: "For growing companies requiring ongoing infrastructure management.",
    featured: true,
    priceLabel: "Custom Quote",
    inclusions: [
      "Everything in Startup IT",
      "CRM administration",
      "Cloud infrastructure management",
      "Database management",
      "Monitoring",
      "Backup management",
      "Employee onboarding & offboarding",
      "Priority support",
    ],
  },
  {
    slug: "managed-it",
    name: "Managed IT",
    tagline: "For companies wanting Vighnex to function as their outsourced IT department.",
    priceLabel: "Custom Quote",
    inclusions: [
      "Complete infrastructure management",
      "Advanced monitoring",
      "Security administration",
      "CRM & business systems management",
      "Cloud optimization",
      "Backup & recovery management",
      "Employee IT administration",
      "Dedicated IT contact",
      "Priority support",
    ],
  },
];
