// components/layout/nav-data.ts — header navigation structure.

import type { PillarSlug, IndustrySlug } from "@/lib/brand";

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceNavEntry {
  slug: PillarSlug;
  name: string;
  promise: string;
  href: string;
}

export interface IndustryNavEntry {
  slug: IndustrySlug;
  name: string;
  href: string;
}

export const serviceAgencyLine =
  "One team, four disciplines, from the same brief — strategy, branding & design, marketplace, and performance.";

export const servicesNav: ServiceNavEntry[] = [
  { slug: "strategy", name: "Strategy", promise: "Positioning and messaging that give you a clear point of view.", href: "/services/strategy" },
  { slug: "brand-communication", name: "Brand & Design", promise: "Identity, language, and production as one recognisable system.", href: "/services/brand-communication" },
  { slug: "media", name: "Marketplace & Performance", promise: "Search, social, and marketplace campaigns that hit a number.", href: "/services/media" },
  { slug: "complete-support", name: "Web & Full Service", promise: "Sites that convert, and one accountable team across the lot.", href: "/services/complete-support" },
];

export const industriesNav: IndustryNavEntry[] = [
  { slug: "hospitality", name: "Hospitality", href: "/industries/hospitality" },
  { slug: "manufacturing", name: "Manufacturing", href: "/industries/manufacturing" },
  { slug: "real-estate", name: "Real Estate", href: "/industries/real-estate" },
  { slug: "fitness-wellness", name: "Fitness & Wellness", href: "/industries/fitness-wellness" },
  { slug: "education", name: "Education", href: "/industries/education" },
  { slug: "healthcare", name: "Healthcare", href: "/industries/healthcare" },
  { slug: "ecommerce", name: "E-commerce", href: "/industries/ecommerce" },
];

export const howWeWorkNav: (NavLink & { note?: string })[] = [
  { label: "Our Philosophy", href: "/how-we-work/philosophy", note: "Why we buy marketing in the order we do." },
  { label: "Who We Work With", href: "/how-we-work/who-we-work-with", note: "The filter, and who we send elsewhere." },
  { label: "Engagement & Pricing", href: "/how-we-work/engagement-and-pricing", note: "How we charge, in full." },
];

export const plainNav: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];