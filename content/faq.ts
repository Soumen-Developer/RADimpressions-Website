// content/faq.ts — the aggregate FAQ with scope tags. Pages filter by scope.

import type { FaqItem } from "@/lib/types";

export type FaqScope =
  | "general"
  | "research"
  | "call"
  | "sprint"
  | "retainer"
  | "services"
  | "strategy"
  | "brand-communication"
  | "media"
  | "complete-support";

export interface ScopedFaq extends FaqItem {
  scope: FaqScope;
}

export const ALL_FAQS: ScopedFaq[] = [
  // General
  {
    scope: "general",
    question: "What do you actually do?",
    answer:
      "Marketing and media communications with branding at its centre. Three pillars — Strategy, Brand Communication, Media — with Complete Support holding them together. We take five new engagements a quarter.",
  },
  {
    scope: "general",
    question: "What's with the 72-hour rule?",
    answer:
      "We reply to every brand research submission within 72 hours, every time. It's not a sales number — it's the operating rule that tells you how we work before you've paid us anything.",
  },
  {
    scope: "general",
    question: "Do you take every client?",
    answer:
      "No. We take five new engagements a quarter, and we say no — with reasons — to everything we don't believe we can genuinely help.",
  },
  {
    scope: "general",
    question: "What if you say no?",
    answer:
      "You get a straight answer and a genuinely useful read on why, within 72 hours. No pitch, no follow-up blizzard, no door left open out of politeness.",
  },
  {
    scope: "general",
    question: "Where do you work?",
    answer:
      "We work with businesses in India and internationally. The recorded teardown and the paid call work across time zones; a 60-minute call is a 60-minute call.",
  },
  // Brand research / the process
  {
    scope: "research",
    question: "What is the brand research form?",
    answer:
      "A ten-minute form where you tell us what the business does, who it is for, and what it refuses. It's how we read you properly before deciding whether we can help.",
  },
  {
    scope: "research",
    question: "Why do you read submissions before taking clients?",
    answer:
      "Because fit is decided by what we can actually do, not by a brief we've been sent. Reading the business first is what makes the 72-hour verdict honest.",
  },
  {
    scope: "research",
    question: "What is the recorded teardown?",
    answer:
      "If we decide to work with you, you get a recorded design teardown of your marketing — what we'd change and why. It's our working document, walked through on the paid call.",
  },
  {
    scope: "research",
    question: "The teardown isn't for sale, right?",
    answer:
      "Correct. It's not a paid product, and it's not a freebie — it's the first working document of the engagement. It exists to start the work with real information, not a pitch.",
  },
  // Paid call
  {
    scope: "call",
    question: "Why do you charge ₹499 for the call?",
    answer:
      "Charging keeps the call honest. It's a 60-minute working session with the teardown on the table — not a pitch and not a courtesy. It's a signal that both of us are serious.",
  },
  {
    scope: "call",
    question: "Is the ₹499 credited against anything?",
    answer:
      "No. It's not a deposit and it isn't credited against a sprint, a retainer, or anything else. It's simply the price of the working session.",
  },
  {
    scope: "call",
    question: "What happens on the call?",
    answer:
      "Sixty minutes, structured. We walk through the teardown, answer your hard questions, and end with a clear go/no-go — either a proposal or a straight reason why not.",
  },
  {
    scope: "call",
    question: "Do I keep the teardown if we don't work together?",
    answer:
      "Yes. The teardown is delivered and you keep the working document regardless of what happens after the call. The 60 minutes is on the table, and the document is yours.",
  },
  // Sprint
  {
    scope: "sprint",
    question: "What is the sprint?",
    answer:
      "A two-week, fixed-price engagement for a defined outcome — an audit, a positioning document, a content system, a campaign concept. The smallest useful unit of our work.",
  },
  {
    scope: "sprint",
    question: "How much does a sprint cost?",
    answer:
      "Priced on request. Scope is fixed in writing before we start, and the price won't move. Tell us the outcome you need and we'll price it.",
  },
  {
    scope: "sprint",
    question: "What if we decide to work together after the sprint?",
    answer:
      "If you move to a retainer within 30 days of the sprint, the sprint is credited in full. The two weeks become the first two weeks of the engagement.",
  },
  {
    scope: "sprint",
    question: "How many sprints do you run?",
    answer:
      "Two sprint slots a month, booked in order. We take five new engagements a quarter on the retainer side as well — the sprint is the same discipline at a smaller size.",
  },
  // Retainer
  {
    scope: "retainer",
    question: "What is the retainer?",
    answer:
      "The complete engagement — Strategy, Brand Communication, and Media run as one integrated system with a named lead who owns the outcome.",
  },
  {
    scope: "retainer",
    question: "Who owns the work?",
    answer:
      "A named lead, in writing, in the proposal. That person is accountable for the outcome and the reporting line is single.",
  },
  {
    scope: "retainer",
    question: "How does reporting work?",
    answer:
      "On the number that reconciles with the bank account. Platform impressions are diagnostics, not the headline.",
  },
  {
    scope: "retainer",
    question: "Do you replace our in-house team?",
    answer:
      "No. We integrate with it. The internal people keep the relationships and the daily feel; we hold the strategy, the production system, and the reporting line.",
  },
  // Services
  {
    scope: "services",
    question: "What's the difference between the pillars?",
    answer:
      "Strategy decides what the business is for. Brand Communication builds the system that says it. Media scales it. Complete Support holds all three with one accountable line.",
  },
  {
    scope: "services",
    question: "Can I buy one pillar?",
    answer:
      "Yes. Each pillar is available on its own — Strategy, Brand Communication, or Media. Complete Support is all three held together. We'll tell you honestly which one you actually need.",
  },
  {
    scope: "services",
    question: "How are the pillars priced?",
    answer:
      "Per engagement, in writing, before we start. A single pillar costs a single allocation. Complete Support is one plan, not three invoices.",
  },
  {
    scope: "strategy",
    question: "How long does a strategy engagement take?",
    answer:
      "The positioning work runs three to four weeks. The following plan is scoped after we've heard the interviews, not before.",
  },
  {
    scope: "strategy",
    question: "We have a plan already. When do we need this?",
    answer:
      "If the plan can't name what the business is built to be better at, the plan is a budget with adjectives. That's the gap this pillar closes.",
  },
  {
    scope: "strategy",
    question: "What will you refuse in a strategy engagement?",
    answer:
      "We won't reverse marketing decisions after the strategy lands, and we won't write a plan that names every channel but no position.",
  },
  {
    scope: "brand-communication",
    question: "We have freelancers. What changes?",
    answer:
      "The system is built once and the freelancers work inside it. Same templates, same voice rules, same review — their output starts matching without a team meeting.",
  },
  {
    scope: "brand-communication",
    question: "Is this a rebrand?",
    answer:
      "Not necessarily. A rebrand replaces the assets. This builds the system that keeps the assets consistent. Often the answer is better content, done systematically — not new marks.",
  },
  {
    scope: "brand-communication",
    question: "Can you hit performance-team volume?",
    answer:
      "Yes — that's what the templates and pipeline exist for. Throughput comes from combination, not from a new design every week.",
  },
  {
    scope: "media",
    question: "Why would media fix fewer problems than I expect?",
    answer:
      "Media amplifies what's underneath it. If the position is weak or the assets say nothing, spend makes that bigger. We diagnose before we buy.",
  },
  {
    scope: "media",
    question: "How do you report?",
    answer:
      "On blended acquisition cost and the number that reconciles with the bank account. Platform ROAS is a diagnostic, not the headline.",
  },
  {
    scope: "media",
    question: "Do you run marketplace ads?",
    answer:
      "Yes — marketplace advertising and retail media are part of Media. The commission maths is part of the media plan, not a surprise at month end.",
  },
  {
    scope: "complete-support",
    question: "How is this different from an agency?",
    answer:
      "An agency is usually one pillar. Complete Support is all three, held by one team, with the trade-offs between them visible instead of negotiated across vendor meetings.",
  },
  {
    scope: "complete-support",
    question: "Will you tell us when one pillar is enough?",
    answer:
      "Yes. If the gap is one specialist role, the honest recommendation is one pillar. The filter applies inside the engagement as well as outside it.",
  },
  {
    scope: "complete-support",
    question: "How is billing structured?",
    answer:
      "As a retainer with a scoped plan and a named lead. The scope is named in the proposal, not negotiated after the brief.",
  },
];