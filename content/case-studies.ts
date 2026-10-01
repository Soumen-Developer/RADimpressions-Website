// content/case-studies.ts — the Work storefront. No case studies are signed
// off yet (CONTENT-GAPS); the index shows the filter + honest empty state, and
// the [slug] route 404s until the founder approves real engagements.

import type { CaseStudy } from "@/lib/types";

export const all: CaseStudy[] = [];

export function bySlug(slug: string): CaseStudy | undefined {
  return all.find((c) => c.slug === slug);
}