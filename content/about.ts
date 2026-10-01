// content/about.ts — the About page. The full story is TK (CONTENT-GAPS); the
// page renders the honest intro and suppresses the rest until it's written.

export const about = {
  intro:
    "We are a marketing and media communications practice built around branding. Three pillars — Strategy, Brand Communication, Media — with Complete Support holding them together. We take five new engagements a quarter, and the smallness is the point.",
  pillars: [
    {
      slug: "strategy",
      name: "Strategy",
      summary: "We help you figure it out.",
      text: "The position, the refusal, and the plan that make the rest work.",
    },
    {
      slug: "brand-communication",
      name: "Brand Communication",
      summary: "We help you say it.",
      text: "The identity, language, and production system that keeps the voice yours.",
    },
    {
      slug: "media",
      name: "Media",
      summary: "We help you scale it.",
      text: "Planned against a position, bought with the mechanics visible, reported on the bank's number.",
    },
    {
      slug: "complete-support",
      name: "Complete Support",
      summary: "We run it with you.",
      text: "All three held together by one team with one accountable line.",
    },
  ] as const,
  principles: [
    "The refusal is the work.",
    "We tell the truth, even when it costs us work.",
    "We report on the number that reconciles with the bank.",
    "We stay small on purpose.",
  ] as const,
  rules: [
    "We reply within 72 hours, every time.",
    "The teardown is the start of the work, not the pitch.",
    "The sprint is credited in full if the retainer follows within 30 days.",
    "No long-term contracts. No juniors rehearsing on your brief.",
  ] as const,
  story: {
    suppressed: true,
    note: "The full story is still unwritten. When the founder decides to publish it, it will run here — in full, with names and dates. Until then, this page says only what is true.",
  },
} as const;