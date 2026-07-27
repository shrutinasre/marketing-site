import Link from "next/link";
import { siteConfig } from "@/lib/site";

const columns = [
  {
    heading: "Services",
    links: [
      { label: "Cloud Infrastructure", href: "/services/cloud-infrastructure" },
      { label: "CRM", href: "/services/crm-implementation" },
      { label: "Security & Backup", href: "/services/it-security" },
      { label: "IT Management", href: "/services/managed-it-services" },
      { label: "Website & Hosting", href: "/services/website-hosting" },
      { label: "Business Email", href: "/services/business-email-workspace" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Startups", href: "/solutions#new-startups" },
      { label: "Small Businesses", href: "/solutions#small-business" },
      { label: "Growing Businesses", href: "/solutions#growing-businesses" },
      { label: "Existing Businesses", href: "/solutions#existing-businesses" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/resources" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms of Service", href: "/legal/terms-of-service" },
      { label: "Cookie Policy", href: "/legal/cookie-policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="container-page grid grid-cols-2 gap-10 py-16 md:grid-cols-6">
        <div className="col-span-2">
          <span className="text-xl font-extrabold tracking-tight">Vighnex</span>
          <p className="mt-3 max-w-xs text-sm text-neutral-400">{siteConfig.tagline}</p>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              {col.heading}
            </p>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="focus-ring text-sm text-neutral-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-neutral-500">
            Let&apos;s Talk
          </p>
          <ul className="space-y-2.5 text-sm text-neutral-300">
            <li>
              <Link href="/contact" className="focus-ring hover:text-white">
                Free Consultation
              </Link>
            </li>
            {siteConfig.contact.email && (
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="focus-ring hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
            )}
            {siteConfig.contact.phone && (
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} className="focus-ring hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} Vighnex. All rights reserved.</p>
          <p>Your Complete IT Infrastructure Partner</p>
        </div>
      </div>
    </footer>
  );
}
