import type { Metadata } from "next";
import { blogPosts, blogCategories } from "@/data/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { GradientBlob } from "@/components/animations/GradientBlob";
import { StaggerReveal, StaggerItem } from "@/components/animations/ScrollReveal";
import { ResourcesConstellation } from "@/components/resources/ResourcesConstellation";
import { BlogCard } from "@/components/resources/BlogCard";

export const metadata: Metadata = {
  title: "Resources & Blog",
  description:
    "Practical guides on startup IT, cloud infrastructure, cybersecurity, business systems, Google Workspace, Microsoft 365 and IT cost optimization.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white md:py-24">
        <GradientBlob className="-left-24 top-0 h-72 w-72" />
        <GradientBlob className="right-0 bottom-0 h-80 w-80" color="soft" />
        <div className="container-page relative grid items-center gap-12 md:grid-cols-2">
          <SectionHeading
            light
            align="left"
            eyebrow="Resources"
            title="IT Guides for Startups & Growing Businesses"
            subtitle="Practical, no-fluff guides on infrastructure, security, cloud and the technology decisions that come with growing a business."
          />
          <div className="hidden md:block">
            <ResourcesConstellation />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <StaggerReveal className="flex flex-wrap justify-center gap-2">
            {blogCategories.map((cat) => (
              <StaggerItem key={cat}>
                <span className="inline-block rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:border-blue-300 hover:text-blue-600">
                  {cat}
                </span>
              </StaggerItem>
            ))}
          </StaggerReveal>

          <StaggerReveal className="mt-14 grid gap-6 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <CTASection
        heading="Have a Question We Haven't Covered?"
        text="Tell us what you're trying to figure out and we'll point you in the right direction."
      />
    </>
  );
}
