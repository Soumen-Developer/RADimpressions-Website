// content/home.ts — home page sections per SITEMAP HOME (H1–H22).

import type { PillarSlug, IndustrySlug } from "@/lib/types";

export const homeHero = {
  addamsTitle: "We are a marketing and media communications practice built around branding.",
  tiles: [
    { index: "01", title: "We take five new engagements a quarter.", note: "By design. It's how the work keeps its weight." },
    { index: "02", title: "We reply to every brand research submission within 72 hours. Always.", note: "The rule is the position. It applies before you've paid us anything." },
    { index: "03", title: "You send us your business. We read it. If we believe we can help, you get a recorded teardown.", note: "Not a pitch. A working document." },
    { index: "04", title: "If we believe we can't help, we don't manufacture a way to. We say so, with reasons.", note: "The refusal is the work." },
  ],
} as const;

export const homeStray = {
  tagline: "Think big. Advertise smart.",
  capacity: "We take five new engagements a quarter.",
} as const;

export interface PillarObject {
  slug: PillarSlug;
  name: string;
  promise: string;
  body: string;
}

export const homePillars: PillarObject[] = [
  {
    slug: "strategy",
    name: "Strategy",
    promise: "We help you figure it out.",
    body: "Where you stand. What you stand for. The refusal that makes the rest compound. This is where the business gets decided — before a single rupee is spent on media.",
  },
  {
    slug: "brand-communication",
    name: "Brand Communication",
    promise: "We help you say it.",
    body: "Identity, language, and production held together as one system — so every asset is recognisably yours, at volume and after us.",
  },
  {
    slug: "media",
    name: "Media",
    promise: "We help you scale it.",
    body: "Media amplifies what's underneath it. Planned against a position, bought with the mechanics visible, and reported on the number that reconciles with the bank account.",
  },
  {
    slug: "complete-support",
    name: "Complete Support",
    promise: "We run it with you.",
    body: "All three held together by one accountable team. One named lead, one reporting line, one quarterly point of view.",
  },
] as const;

export const homeGive = {
  heading: "Forty-eight hours to verse in your business",
  copyLine: "The gear that loses the campaign buys the industry's branded coffee.",
  rules: [
    "We read properly or we don't reply at all.",
    "We tell the truth, at every step, even when it costs us work.",
    "We believe you don't marry your agency. We marry the outcome.",
  ],
} as const;

export const homeRefuse = {
  heading: "What we refuse, loudly.",
  items: [
    "Pitching. It's how businesses get sold promises that don't hold.",
    "Long term contracts.",
    "Hiring juniors to rehearse on your brief.",
    "Quarterly meetings that could have been an email.",
  ],
} as const;

export const homeNotFor = {
  heading: "This approach is not for every business.",
  items: [
    "Organisations that want a vendor, not a point of view.",
    "Those who measure marketing in deliverables, not outcomes.",
    "Businesses that want applause in the room for work they don't plan to run.",
  ],
} as const;

export const homeAssertion = [
  "The pride is in the result. The work is the proof.",
  "We report on the number that reconciles with the bank account, not the one the platform wants you to see.",
  "We measure twice, cut once.",
] as const;

export const homePartnership = {
  heading: "It's a partnership.",
  body: "You're not hiring an outsourced vendor. You're bringing in a partner with as much skin in the outcome as you have.",
} as const;

export interface HomeToolSet {
  heading: string;
  tools: string[];
}

export const homeToolSets: HomeToolSet[] = [
  {
    heading: "Advantage",
    tools: [
      "The smallest set of assets that wins: one position, one voice, one system.",
      "Speed of action. Decisions in writing, work in the month.",
      "A small team, deliberately. You talk to the people doing the work.",
    ],
  },
  {
    heading: "Tools",
    tools: [
      "Positioning and messaging systems",
      "Identity and production systems",
      "Media planning and buying",
      "Analytics and one accountable reporting line",
    ],
  },
  {
    heading: "Capacity",
    tools: [
      "We take five new engagements a quarter.",
      "Two sprint slots a month.",
      "Decisions land on the schedule, not the quarter that follows it.",
    ],
  },
] as const;

export const homeSla = {
  heading: "At capacity. By design.",
  body: "We are at capacity — deliberately. We take five new engagements a quarter, and we say no, with reasons, to the rest.",
  widgets: [
    { label: "REPLY WINDOW", value: "72 HRS", note: "Every submission, every time." },
    { label: "CALL LENGTH", value: "60 MIN", note: "The paid call. Working session, not pitch." },
    { label: "SPRINT SLOTS", value: "2 / MONTH", note: "Fixed price, outcome in writing." },
  ],
} as const;

export const homeOfferRow = {
  tagline: "Think big. Advertise smart.",
  offers: [
    { title: "Brand Research", body: "Send us your business. We read it. A reply within 72 hours, every time.", cta: "Start here", href: "/brand-research" },
    { title: "The Paid Call", body: "Sixty minutes, ₹499. The teardown, walked through, straight answers.", cta: "Book the call", href: "/paid-call" },
    { title: "Consulting", body: "The complete engagement. One team, one accountable line.", cta: "Explore consulting", href: "/consulting" },
  ],
} as const;

export const homeGreyStrip = {
  heading: "If we believe it, we do it. If we don't, you find out in 72 hours.",
  body: "The refusal is the work. We'd rather say no, with reasons, than take an engagement we don't believe in.",
} as const;

export const homeLoop = {
  heading: "The best part about being us",
  lines: [
    "We chose the five engagement limit, and we held it.",
    "We reply within 72 hours, and we have never missed it.",
    "We say no, with reasons, and the reasons are read.",
    "We built the recorded teardown into the door, not the pitch.",
    "The work compounds. The position holds. The voice stays ours.",
    "And the discipline shows, because we stayed small on purpose.",
  ],
} as const;

export interface HomeProcessNode {
  index: string;
  title: string;
  body: string;
}

export const homeProcess: HomeProcessNode[] = [
  { index: "A", title: "Send", body: "Fill the brand research form. Ten minutes, straight answers." },
  { index: "B", title: "Read", body: "We read it properly. A reply within 72 hours, every time." },
  { index: "C", title: "Verdict", body: "We can help, honestly — and you get a recorded teardown. Or we can't, and you get a straight reason." },
  { index: "D", title: "Decide", body: "The 60-minute call, the go/no-go, the proposal. Or the clean no." },
] as const;

export const homeInternalJoke = {
  heading: "We have an internal joke.",
  question: "What do five brand people do when they run out of clients?",
  answer: "They send each other a brand research form.",
  note: "It's the discipline, held even among ourselves.",
} as const;

export const homeIndustries = {
  heading: "Industries we read properly.",
  list: [
    "Hospitality",
    "Manufacturing",
    "Real Estate",
    "Fitness & Wellness",
    "Education",
    "Healthcare",
    "E-commerce",
  ],
} as const;

export const homeClosing = {
  heading: "The overwhelming part of marketing is not the doing. It's deciding what not to do.",
  body: "We make the decision for you — a position, a voice, a system, and a media plan that amplifies both. That's the entire pitch.",
} as const;

export const homeLastStraw = {
  heading: "If you've read this far, one of two things is true.",
  options: [
    "You're exactly who we built this for. Send us your business.",
    "You're on someone else's team, and you know the person who should read this.",
  ],
} as const;

export const homeDisclaimer =
  "Teardowns are recorded. The 60-minute call is ₹499 and is not credited against anything. The sprint is priced on request, two slots a month, and credited in full if you move to a retainer within 30 days. Capacity stands at five new engagements a quarter." as const;

export const homeIndustriesSlugs: IndustrySlug[] = [
  "hospitality",
  "manufacturing",
  "real-estate",
  "fitness-wellness",
  "education",
  "healthcare",
  "ecommerce",
];