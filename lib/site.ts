// Centralized, CMS-ready site configuration.
// Replace placeholders with real values via environment variables or a future CMS.

export const siteConfig = {
  name: "Vighnex",
  tagline: "Your Complete IT Infrastructure Partner",
  description:
    "Vighnex designs, deploys, secures and manages the complete IT infrastructure that startups and growing businesses run on — from professional email to cloud, business systems, security and ongoing support.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.vighnex.com",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@vighnex.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  },
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "",
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || "",
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
    linkedInInsightId: process.env.NEXT_PUBLIC_LINKEDIN_INSIGHT_ID || "",
  },
};
