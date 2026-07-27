import type { SolutionSize } from "@/types";

export const solutionsBySize: SolutionSize[] = [
  {
    slug: "micro-business",
    name: "Micro Business",
    employeeRange: "1–10 employees",
    description:
      "Designed for companies with small teams requiring professional IT without employing internal IT staff.",
    focusAreas: ["Professional email", "Cloud storage", "Basic security", "Ongoing support"],
  },
  {
    slug: "small-business",
    name: "Small Business",
    employeeRange: "10–50 employees",
    description:
      "Structured infrastructure, employee administration, CRM, security, cloud services and managed support.",
    focusAreas: ["Employee IT management", "CRM", "Cloud infrastructure", "Security & backup"],
  },
  {
    slug: "medium-business",
    name: "Medium Business",
    employeeRange: "50–250 employees",
    description:
      "More advanced infrastructure management, security, cloud optimization, migrations, monitoring and operational support.",
    focusAreas: ["Cloud migration", "Infrastructure modernization", "Advanced monitoring", "Dedicated IT contact"],
  },
];

export const solutionsByStage: SolutionSize[] = [
  {
    slug: "new-startups",
    name: "New Startups",
    employeeRange: "Starting from zero",
    description: "We build your entire IT foundation from scratch so your team can operate professionally from day one.",
    focusAreas: ["Domain & DNS", "Email & workspace", "Cloud infrastructure", "CRM & collaboration"],
  },
  {
    slug: "growing-businesses",
    name: "Growing Businesses",
    employeeRange: "Scaling teams",
    description: "We add structure — CRM, security and employee administration — as your team and operations grow.",
    focusAreas: ["Employee IT management", "CRM administration", "Security baseline", "Managed support"],
  },
  {
    slug: "existing-businesses",
    name: "Existing Businesses",
    employeeRange: "Already operating",
    description: "We assess, modernize, secure and manage your current environment so it can scale without unnecessary complexity.",
    focusAreas: ["Infrastructure audit", "Cloud optimization", "Security assessment", "Ongoing management"],
  },
  {
    slug: "remote-teams",
    name: "Remote Teams",
    employeeRange: "Distributed teams",
    description: "We build infrastructure and access management designed for teams that work from anywhere.",
    focusAreas: ["Cloud storage & collaboration", "Access management", "Secure remote access", "Managed support"],
  },
];
