// lib/brand.ts — the ONLY place these values exist. No component hard-codes them.

export const brand = {
  name: "RADIMPRESSION",
  tagline: "Think big. Advertise smart.",
  positioning: "A full-service creative & digital advertising agency — strategy, branding, web, marketplace and performance, all under one roof.",
  capacity: "We take five new engagements a quarter.",
  slaHours: 72, // the REPLY window, not the teardown window
  callPrice: "₹499",
  callMinutes: 60,
  callCredited: false, // the ₹499 is not credited against anything
  sprintPrice: null, // TK-23 — card renders "Price on request" while null
  sprintSlots: 2, // TK-25 — default
  sprintCredited: true, // credited in full if a retainer starts within 30 days
  email: "support@radimpression.com",
  phone: "+91 76662 32291",
  siteUrl: "https://radimpression.com",
} as const;

export const pillars = {
  strategy: {
    slug: "strategy",
    name: "Strategy",
    promise: "We help you figure it out.",
    colour: "var(--pillar-strategy)",
    colourText: "var(--pillar-strategy-text)",
    hex: "#354EA2",
  },
  "brand-communication": {
    slug: "brand-communication",
    name: "Brand Communication",
    promise: "We help you say it.",
    colour: "var(--pillar-comms)",
    colourText: "var(--pillar-comms-text)",
    hex: "#00AA9F",
  },
  media: {
    slug: "media",
    name: "Media",
    promise: "We help you scale it.",
    colour: "var(--pillar-media)",
    colourText: "var(--pillar-media-text)",
    hex: "#FFCA08",
  },
  "complete-support": {
    slug: "complete-support",
    name: "Complete Support",
    promise: "We run it with you.",
    colour: "var(--pillar-complete)",
    colourText: "var(--pillar-complete-text)",
    hex: "#02824F",
  },
} as const;

export type PillarSlug = keyof typeof pillars;

export const pillarOrder: PillarSlug[] = [
  "strategy",
  "brand-communication",
  "media",
  "complete-support",
];

export const industries = {
  hospitality: {
    slug: "hospitality",
    name: "Hospitality",
    characterisation: "Footfall and reputation move together; the review page is the storefront.",
    startsWith: "brand-communication",
  },
  manufacturing: {
    slug: "manufacturing",
    name: "Manufacturing",
    characterisation: "Long cycles, few buyers, almost no category language.",
    startsWith: "strategy",
  },
  "real-estate": {
    slug: "real-estate",
    name: "Real Estate",
    characterisation: "Project-based bursts, hard launch dates, heavy creative demand.",
    startsWith: "brand-communication",
  },
  "fitness-wellness": {
    slug: "fitness-wellness",
    name: "Fitness & Wellness",
    characterisation: "Local catchment, trial-led buying, retention is the real metric.",
    startsWith: "media",
  },
  education: {
    slug: "education",
    name: "Education",
    characterisation: "Admission cycles; the year has two real months.",
    startsWith: "media",
  },
  healthcare: {
    slug: "healthcare",
    name: "Healthcare",
    characterisation: "Trust-led, local, and tightly regulated on claims.",
    startsWith: "brand-communication",
  },
  ecommerce: {
    slug: "ecommerce",
    name: "E-commerce",
    characterisation: "Marketplace and performance overlap; creative burns fast.",
    startsWith: "media",
  },
} as const;

export type IndustrySlug = keyof typeof industries;

export const industryOrder: IndustrySlug[] = [
  "hospitality",
  "manufacturing",
  "real-estate",
  "fitness-wellness",
  "education",
  "healthcare",
  "ecommerce",
];

export function pillarColour(slug: PillarSlug): string {
  return pillars[slug].colour;
}

export function pillarTextColour(slug: PillarSlug): string {
  return pillars[slug].colourText;
}