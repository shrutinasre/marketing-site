import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { CTASection } from "@/components/ui/CTASection";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="py-16 md:py-24">
        <div className="container-page max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">{post.category}</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-neutral-500">
            {post.author} ·{" "}
            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} ·{" "}
            {post.readingTime}
          </p>

          <nav aria-label="Table of contents" className="mt-8 rounded-card border border-neutral-200 bg-neutral-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">On this page</p>
            <ol className="mt-2 space-y-1 text-sm text-blue-600">
              {post.content.map((_, i) => (
                <li key={i}>
                  <a href={`#section-${i + 1}`} className="focus-ring hover:underline">
                    Section {i + 1}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="prose prose-neutral mt-10 max-w-none text-neutral-700">
            {post.content.map((paragraph, i) => (
              <p key={i} id={`section-${i + 1}`} className="mb-5 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {related.length > 0 && (
            <div className="mt-14 border-t border-neutral-200 pt-8">
              <p className="text-sm font-semibold text-navy-900">Related Articles</p>
              <ul className="mt-3 space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/resources/${r.slug}`} className="focus-ring text-sm font-medium text-blue-600 hover:underline">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
      <CTASection
        heading="Ready to Put This Into Practice?"
        text="Let's talk about what this looks like for your business."
      />
    </>
  );
}
