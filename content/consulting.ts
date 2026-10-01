// content/consulting.ts — the consulting adjacency page (SITEMAP MISC).

import type { CtaVariant } from "@/lib/types";

export interface ConsultingCommitment {
  title: string;
  body: string;
}

export const consulting = {
  slug: "consulting",
  heroTitle: "Consulting",
  heroBody:
    "The complete engagement. For businesses that want the whole system held by one team — strategy, communication, and media — with a named owner, a written plan, and a quarterly review.",
  commitments: [
    {
      title: "One team, one line",
      body: "A named lead owns the outcome. No vendor meetings, no handoffs across agencies.",
    },
    {
      title: "Scope in writing",
      body: "Named deliverables, named owner, named schedule — in the proposal, not after the brief.",
    },
    {
      title: "A quarterly point of view",
      body: "The decision-makers in the room quarterly, with a written read on what changed and why.",
    },
    {
      title: "An honest boundary",
      body: "If one pillar is the right answer, we'll say so. The filter applies inside the engagement too.",
    },
  ] satisfies ConsultingCommitment[],
  ctaVariant: "research" as CtaVariant,
  addamsLine:
    "The consulting engagement is priced on the business. A single pillar costs a single allocation. Complete Support is one plan, not three.",
  solidTeamLine:
    "We are a small, deliberate team. The proposal names who you work with and what they own. No juniors rehearsing on your brief.",
  process: [
    { step: "01", name: "Brand research", body: "The full read, before anything else." },
    { step: "02", name: "Verdict within 72 hours", body: "A reply from a human. Always." },
    { step: "03", name: "Recorded teardown", body: "Only for businesses we decide to work with." },
    { step: "04", name: "Paid call", body: "60 minutes, ₹499, straight answers." },
    { step: "05", name: "Onboarding", body: "Scoped plan and schedule, both sides clear." },
    { step: "06", name: "Operate and review", body: "Work, reporting, and a standing point of view." },
  ],
} as const;