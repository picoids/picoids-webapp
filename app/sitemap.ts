import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const SERVICE_SLUGS = [
  "cloud-services",
  "cloud-solutions",
  "web-development",
  "mobile-development",
  "application-development",
  "app-maintenance",
  "app-modernization",
  "going-mobile",
  "ai-integration",
  "technology-consulting",
  "tech-staffing",
  "tech-audits",
  "custom-solutions",
] as const;

const BLOG_SLUGS = [
  "reliability-vs-ai-uses",
  "cloud-computing-2024",
  "microservices-architecture",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const staticPaths: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
  }> = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.95, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about", priority: 0.85, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.85, changeFrequency: "weekly" },
    { path: "/careers", priority: 0.8, changeFrequency: "monthly" },
    { path: "/case-studies", priority: 0.75, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.4, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.4, changeFrequency: "yearly" },
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map(
    ({ path, priority, changeFrequency }) => ({
      url: path === "/" ? `${base}/` : `${base}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })
  );

  for (const slug of SERVICE_SLUGS) {
    entries.push({
      url: `${base}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const slug of BLOG_SLUGS) {
    entries.push({
      url: `${base}/blog/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
