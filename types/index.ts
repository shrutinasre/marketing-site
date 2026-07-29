export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  heading: string;
  items: NavChild[];
}

export interface NavItem {
  label: string;
  href: string;
  megaMenu?: NavGroup[];
}

export interface Service {
  slug: string;
  icon: string;
  title: string;
  shortDescription: string;
  category: "foundation" | "cloud" | "systems" | "security" | "website" | "employee" | "support" | "continuity";
  problem: string;
  solution: string;
  included: string[];
  process: string[];
  benefits: string[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
}

export interface Industry {
  name: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PackageTier {
  slug: string;
  name: string;
  tagline: string;
  featured?: boolean;
  inclusions: string[];
  priceLabel: string;
}

export interface BlogSection {
  heading: string;
  body: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  excerpt: string;
  sections: BlogSection[];
}

export interface TechEcosystemItem {
  name: string;
}

export interface EcosystemNode {
  label: string;
  icon: string;
}

export interface SolutionSize {
  slug: string;
  name: string;
  employeeRange: string;
  description: string;
  focusAreas: string[];
  icon: string;
}
