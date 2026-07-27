import type { BlogPost } from "@/types";

export const blogCategories = [
  "Startup IT",
  "Cloud Infrastructure",
  "Cybersecurity",
  "CRM",
  "Google Workspace",
  "Microsoft 365",
  "Business Technology",
  "IT Cost Optimization",
  "Backup & Recovery",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "it-infrastructure-checklist-for-a-new-startup",
    title: "IT Infrastructure Checklist for a New Startup",
    category: "Startup IT",
    author: "Vighnex Team",
    date: "2026-06-02",
    readingTime: "6 min read",
    excerpt:
      "Everything a new business needs to set up before hiring its first employee — from domain and email to backups and security.",
    content: [
      "Starting a company means dozens of decisions happen at once, and IT infrastructure is often the one that gets the least attention until something goes wrong.",
      "Before you hire your first employee, a handful of foundational pieces should already be in place: a registered domain with correctly configured DNS, professional business email, a workspace platform for collaboration, and a baseline of security like multi-factor authentication.",
      "As you bring on team members, structured account provisioning matters more than it seems. Deciding early how accounts are created, what access each role gets, and how offboarding works will save significant cleanup later.",
      "Cloud infrastructure and backups round out the foundation. Even a small business benefits from knowing its data is backed up automatically, rather than discovering the gap after a loss.",
      "None of this requires an internal IT department on day one — it requires a clear plan and a partner who can execute it correctly the first time.",
    ],
  },
  {
    slug: "managed-it-vs-in-house-it",
    title: "Managed IT vs In-House IT",
    category: "Business Technology",
    author: "Vighnex Team",
    date: "2026-05-14",
    readingTime: "5 min read",
    excerpt:
      "How to think about the trade-offs between building an internal IT team and working with a managed IT partner.",
    content: [
      "The decision between hiring internal IT staff and working with a managed IT partner usually comes down to timing and scale, not one being universally better.",
      "For startups and small businesses, the workload rarely justifies a full-time hire, but the technology needs are just as real as a larger company's — email, cloud infrastructure, security, backups and support all still need to be managed by someone.",
      "A managed IT partner gives you access to broader expertise across email administration, cloud infrastructure, CRM and security than a single internal hire typically could cover alone.",
      "As a business grows, the two approaches aren't mutually exclusive. Many companies bring on internal staff for day-to-day needs while keeping a managed partner for infrastructure, security and specialized systems.",
      "The right answer depends on your team size, growth trajectory and how much technology coordination your business already needs today.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
