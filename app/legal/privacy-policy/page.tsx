import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page max-w-3xl">
        <h1 className="text-3xl font-extrabold text-navy-900">Privacy Policy</h1>
        <p className="mt-4 text-sm text-neutral-500">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <div className="prose mt-8 max-w-none text-neutral-700">
          <p>
            This Privacy Policy is a placeholder pending legal review. It should describe what
            personal and business information Vighnex collects through this website (such as
            consultation form submissions and the IT requirement calculator), how that
            information is used, how long it is retained, and the choices available to you
            regarding your data.
          </p>
          <p>
            For questions about this policy, contact {siteConfig.contact.email}.
          </p>
        </div>
      </div>
    </section>
  );
}
