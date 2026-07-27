import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, blogCategories } from "@/data/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Resources & Blog",
  description:
    "Practical guides on startup IT, cloud infrastructure, cybersecurity, CRM, Google Workspace, Microsoft 365 and IT cost optimization.",
};

export default function ResourcesPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Resources" title="IT Guides for Startups & Growing Businesses" />

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {blogCategories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-medium text-neutral-600"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/resources/${post.slug}`}
              className="focus-ring group rounded-card border border-neutral-200 bg-white p-7 transition hover:border-blue-300 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">{post.category}</p>
              <h2 className="mt-2 text-xl font-bold text-navy-900 group-hover:text-blue-600">{post.title}</h2>
              <p className="mt-2 text-sm text-neutral-600">{post.excerpt}</p>
              <p className="mt-4 text-xs text-neutral-400">
                {post.author} · {post.readingTime}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
