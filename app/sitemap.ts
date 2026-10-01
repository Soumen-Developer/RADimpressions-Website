// app/sitemap.ts — SITEMAP PART C route tree, single-sourced from the content
// modules. /work/[slug] 404s by design (TK-08) and is deliberately excluded.

import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";
import { serviceContent, industryContent, matrixContent, insightsContent } from "@/lib/content";
import type { InsightCategory } from "@/lib/types";

const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/how-we-work", priority: 0.9 },
  { path: "/how-we-work/philosophy", priority: 0.7 },
  { path: "/how-we-work/who-we-work-with", priority: 0.7 },
  { path: "/how-we-work/engagement-and-pricing", priority: 0.7 },
  { path: "/services", priority: 0.8 },
  { path: "/industries", priority: 0.8 },
  { path: "/work", priority: 0.8 },
  { path: "/about", priority: 0.5 },
  { path: "/about/careers", priority: 0.5 },
  { path: "/insights", priority: 0.8 },
  { path: "/consulting", priority: 0.8 },
  { path: "/pricing", priority: 0.5 },
  { path: "/faq", priority: 0.5 },
  { path: "/contact", priority: 0.5 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
  { path: "/refund-policy", priority: 0.3 },
] as const;

const categories: InsightCategory[] = ["positioning", "brand", "media", "marketing-ops", "industry-notes", "craft"];

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = serviceContent.all.map((s) => ({
    url: `${brand.siteUrl}/services/${s.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const industryPages = industryContent.all.map((ind) => ({
    url: `${brand.siteUrl}/industries/${ind.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const matrixPages = matrixContent.all.map((m) => ({
    url: `${brand.siteUrl}/industries/${m.industry}/${m.service}/`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const articlePages = insightsContent.all.map((a) => ({
    url: `${brand.siteUrl}/insights/${a.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const categoryPages = categories.map((c) => ({
    url: `${brand.siteUrl}/insights/category/${c}/`,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  return [
    ...staticRoutes.map((r) => ({
      url: `${brand.siteUrl}${r.path === "/" ? "/" : `${r.path}/`}`,
      changeFrequency: "weekly" as const,
      priority: (r as { priority: number }).priority,
    })),
    ...servicePages,
    ...industryPages,
    ...matrixPages,
    ...articlePages,
    ...categoryPages,
  ];
}