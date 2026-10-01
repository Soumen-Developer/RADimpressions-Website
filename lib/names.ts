// lib/names.ts — display names for services and industries (single source).

import type { PillarSlug, IndustrySlug } from "@/lib/types";

export const serviceNames: Record<PillarSlug, string> = {
  strategy: "Strategy",
  "brand-communication": "Brand Communication",
  media: "Media",
  "complete-support": "Complete Support",
};

export const industryNames: Record<IndustrySlug, string> = {
  hospitality: "Hospitality",
  manufacturing: "Manufacturing",
  "real-estate": "Real Estate",
  "fitness-wellness": "Fitness & Wellness",
  education: "Education",
  healthcare: "Healthcare",
  ecommerce: "E-commerce",
};

export const pillarKind: Record<PillarSlug, string> = {
  strategy: "The position",
  "brand-communication": "The language",
  media: "The spend",
  "complete-support": "The holding line",
};