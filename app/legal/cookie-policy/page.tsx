import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page max-w-3xl">
        <h1 className="text-3xl font-extrabold text-navy-900">Cookie Policy</h1>
        <p className="mt-4 text-sm text-neutral-500">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <div className="prose mt-8 max-w-none text-neutral-700">
          <p>
            This Cookie Policy is a placeholder pending legal review. It should list the cookies
            and similar technologies used on this site, including any analytics or advertising
            tags (Google Analytics, Google Tag Manager, Meta Pixel, LinkedIn Insight Tag) once
            configured, and explain the choices available to visitors.
          </p>
          <p>For questions, contact {siteConfig.contact.email}.</p>
        </div>
      </div>
    </section>
  );
}
