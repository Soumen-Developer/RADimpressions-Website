// app/robots.ts — block the future CMS admin; the JSON-LD/JSONL workaround
// means nothing under /admin is live yet.

import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin"],
    },
    sitemap: `${brand.siteUrl}/sitemap.xml`,
  };
}