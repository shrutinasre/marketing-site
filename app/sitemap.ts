import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/solutions",
    "/pricing",
    "/about",
    "/contact",
    "/resources",
    "/industries",
    "/legal/privacy-policy",
    "/legal/terms-of-service",
    "/legal/cookie-policy",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${siteConfig.url}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${siteConfig.url}/resources/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
