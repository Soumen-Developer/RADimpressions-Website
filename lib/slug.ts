// lib/slug.ts — server-safe heading slugifier (no "use client"), shared by
// the client SectionToc and server-rendered pages.

export function slugOf(heading: string): string {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}