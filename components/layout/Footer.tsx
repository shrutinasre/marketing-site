"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, Phone, ArrowUp, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { StaggerReveal, StaggerItem } from "@/components/animations/ScrollReveal";
import { FooterOrbit } from "@/components/layout/FooterOrbit";

const columns = [
  {
    heading: "Services",
    links: [
      { label: "Cloud Infrastructure", href: "/services/cloud-infrastructure" },
      { label: "Business Systems", href: "/services/business-systems" },
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

const socialLinks = [
  { icon: Linkedin, url: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, url: siteConfig.social.twitter, label: "Twitter" },
].filter((s) => s.url);

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="focus-ring group inline-flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white">
      <span className="transition-transform group-hover:translate-x-1">{label}</span>
      <ArrowRight className="h-3 w-3 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-950 text-white">
      <FooterOrbit />

      <div className="container-page relative grid grid-cols-2 gap-10 py-16 md:grid-cols-6">
        <motion.div
          className="col-span-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2.5">
            <motion.div
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/40 bg-blue-500/10 text-blue-300 shadow-[0_0_16px_-2px_rgba(59,130,246,0.6)]"
              animate={{ boxShadow: ["0 0 12px -2px rgba(59,130,246,0.4)", "0 0 20px -2px rgba(59,130,246,0.7)", "0 0 12px -2px rgba(59,130,246,0.4)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-sm font-extrabold">V</span>
            </motion.div>
            <span className="text-xl font-extrabold tracking-tight">Vighnex</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-neutral-400">{siteConfig.tagline}</p>

          {socialLinks.length > 0 && (
            <div className="mt-5 flex gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.08 }}
                  className="focus-ring flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-300 transition-colors hover:border-blue-400/40 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          )}
        </motion.div>

        <StaggerReveal className="col-span-2 grid grid-cols-2 gap-10 md:col-span-3 md:grid-cols-3">
          {columns.map((col) => (
            <StaggerItem key={col.heading}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-neutral-500">
            Let&apos;s Talk
          </p>
          <ul className="space-y-2.5 text-sm text-neutral-300">
            <li>
              <FooterLink href="/contact" label="Free Consultation" />
            </li>
            {siteConfig.contact.email && (
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="focus-ring inline-flex items-center gap-1.5 hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5 text-blue-400" />
                  {siteConfig.contact.email}
                </a>
              </li>
            )}
            {siteConfig.contact.phone && (
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="focus-ring inline-flex items-center gap-1.5 hover:text-white"
                >
                  <Phone className="h-3.5 w-3.5 text-blue-400" />
                  {siteConfig.contact.phone}
                </a>
              </li>
            )}
          </ul>
        </motion.div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} Vighnex. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p>Your Complete IT Infrastructure Partner</p>
            <motion.button
              type="button"
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.92 }}
              className="focus-ring flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-300 transition-colors hover:border-blue-400/40 hover:text-white"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
