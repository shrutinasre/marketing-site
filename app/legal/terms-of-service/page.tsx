import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsOfServicePage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page max-w-3xl">
        <h1 className="text-3xl font-extrabold text-navy-900">Terms of Service</h1>
        <p className="mt-4 text-sm text-neutral-500">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <div className="prose mt-8 max-w-none text-neutral-700">
          <p>
            This Terms of Service page is a placeholder pending legal review. It should describe
            the terms governing use of this website and, separately, the terms governing any
            managed IT services agreement between Vighnex and its clients, including scope of
            services, data ownership and access, and service limitations.
          </p>
          <p>For questions, contact {siteConfig.contact.email}.</p>
        </div>
      </div>
    </section>
  );
}
