// content/insights.ts — the articles. Four formats per INSIGHTS.md:
// argument, playbook, commentary, question.

import type { Insight } from "@/lib/types";

export const all: Insight[] = [
  // ARGUMENT — "The 5-client limit" ▸ positioning
  {
    slug: "the-five-client-limit",
    title: "The five-client limit is a strategy, not a constraint",
    format: "argument",
    category: "positioning",
    eyebrow: "ARGUMENT · POSITIONING",
    standfirst:
      "We take five new engagements a quarter. People hear capacity; we mean a position. An argument for scarcity as an operating model.",
    linkedPage: "/how-we-work",
    linkedPageLabel: "How we work",
    readTime: "5 MIN",
    date: "Q1",
    artefact: {
      kind: "THE MODEL",
      description:
        "Five new engagements a quarter. Two sprint slots a month. A 72-hour reply, always. Each rule is a refusal the business is built on.",
    },
    body: [
      { t: "h2", text: "Nobody sets out to say no" },
      {
        t: "p",
        text: "Every agency begins by taking everything and hoping the work survives. Somewhere around the third year the founders notice that their best work and their most profitable work were done for clients they'd have chosen anyway — and that the others did not pay for their awkwardness; they masked it.",
      },
      {
        t: "p",
        text: "The five-client limit is the refusal that makes the rest of the business possible. It forces the shop to answer the question every marketing practice dodges in public: what are we better at than the alternative? The answer is not 'marketing'. It's the kind of engagement, the kind of client, the kind of outcome.",
      },
      { t: "h2", text: "Capacity is a dishonest word for it" },
      {
        t: "p",
        text: "When a practice says 'we're at capacity', it usually means one of three things: we're busy, we're afraid of batching, or we're preparing to raise prices. None of those is a position. A limit you'd relax for the right fee isn't a strategy — it's a pricing signal with a backstory.",
      },
      {
        t: "p",
        text: "A limit that survives the right fee is a strategy. Ours is tested the moment an interesting business arrives in the quarter: if it's the fifth, it waits. The six-month wait is not something we apologise for; it's the point.",
      },
      { t: "h2", text: "What scarcity actually does" },
      {
        t: "list",
        items: [
          "It makes the reply rate a commitment instead of an aspiration. Fewer clients means every submission gets read — a 72-hour guarantee becomes true.",
          "It makes the recorded teardown affordable, so the work starts with real information instead of a pitch.",
          "It makes the pay structure stable — the sprint credited in full, the priced call, the scoped proposal — because nobody needs the engagement fee to meet payroll.",
          "It keeps the call honest. If you can't walk away, you can't be straight; a practice that can say no is the partner version of an agency.",
        ],
      },
      { t: "h2", text: "The counter and the rebuttal" },
      {
        t: "counter",
        title: "THE COUNTER — 'You'll shrink.'",
        text: "Scarcity is fine for boutiques at the top; the middle of the market can't afford to refuse work.",
      },
      {
        t: "p",
        text: "The rebuttal is that the limit is not a ceiling on revenue — it's a ceiling on new relationships. The retained work compounds. Five new engagements a quarter, run properly, becomes a body of work that recruits the next five with the 72-hour reply and the teardown doing the selling. A practice that grows by repeat and referral gets to keep its size small and its outcomes large on purpose.",
      },
      {
        t: "p",
        text: "The most honest version of the counter is: it only works if the work is good enough that the limit never has to be enforced on purpose. And that, too, is the point. The limit is how we keep the work good.",
      },
    ],
    ctaVariant: "research",
    featured: true,
  },

  // PLAYBOOK — "72h reply" ▸ marketing-ops
  {
    slug: "the-72-hour-reply",
    title: "The 72-hour reply: a playbook for a promise your brand can actually keep",
    format: "playbook",
    category: "marketing-ops",
    eyebrow: "PLAYBOOK · MARKETING-OPS",
    directAnswer:
      "Set a response-time promise small enough to hold, build the intake so reading is cheap, and refuse politely at the same speed you say yes.",
    checkInOrder: [
      "Small enough to hold. 72 hours is our number because it's two working days plus a margin. If your intake is heavier, the number is different — the discipline is that it's smaller than a week and true.",
      "Cheap to read. The reply promise only holds if the review is fast. A structured intake form — what the business does, for whom, and the refusal — is a reading tool, not a tax on prospects.",
      "Making no the same job as yes. The polite refusal with a real reason takes the same minutes as the acceptance. If your no is slower than your yes, your intake is already dishonest.",
      "Never an autoresponder. A deadline that hides behind an automation is a press release about your culture that you didn't mean to send.",
    ],
    whatToDo: [
      "Write the promise in the offer, not in a footnote: 'a reply within 72 hours, every time.'",
      "Put a structured form in front of the promise so reading cheap is built in.",
      "Give the refusal the same care as the acceptance — a reason, in writing, on time.",
      "Measure the actual minutes, quarterly, and publish the mean. The number is the culture.",
    ],
    whenNotTheProblem:
      "If the bottleneck is the sales team's pipeline rather than the reply, the 72-hour promise fixes the wrong thing. The promise is a trust instrument, not a revenue tool.",
    linkedPage: "/how-we-work",
    linkedPageLabel: "How the door works",
    readTime: "4 MIN",
    date: "Q1",
    artefact: {
      kind: "THE PROMISE",
      description:
        "Every submission is read and answered within 72 hours. The teardown follows within the same discipline if the verdict is yes.",
    },
    body: [
      { t: "h2", text: "Why most fast-response promises degrade" },
      {
        t: "p",
        text: "The polite version is a marketing line. The real one is a piece of operations — and operations degrade when the intake is a free-text email and the reading hour is 'whenever we get to it'. The promise survives only when it's priced into the structure of the day.",
      },
      {
        t: "h2", text: "The playbook in order" },
      {
        t: "list",
        items: [
          "State the number in the offer: 'a reply within 72 hours, every time.'",
          "Structured intake — ten minutes, the questions that make reading cheap.",
          "A named reader and a stopped clock — the reply is someone's job, with a deadline.",
          "Same-speed no. The refusal with reasons is part of the promise, not a leak in it.",
          "Measure the mean, quarterly, and publish it. A number the culture owns doesn't drift.",
        ],
      },
      { t: "h2", text: "What it buys you" },
      {
        t: "list",
        items: [
          "A trust witness: clients mention the fast reply more than the work, early on.",
          "A no that's read: 'they said no and gave a reason' is marketing by refusal.",
          "A disqualify mechanism: the guarantee quietly tells the unserious applicant the intake has standards.",
        ],
      },
    ],
    ctaVariant: "consulting",
  },

  // COMMENTARY — "the number that reconciles" ▸ media
  {
    slug: "the-number-that-reconciles",
    title: "ROAS is a dialect. The bank account is a language.",
    format: "commentary",
    category: "media",
    eyebrow: "COMMENTARY · MEDIA",
    standfirst:
      "On why platform reporting and margin disagree, and why the only defensible headline in media is the number that reconciles with the bank account.",
    linkedPage: "/work",
    linkedPageLabel: "Selected work",
    readTime: "6 MIN",
    date: "Q1",
    artefact: {
      kind: "THE RULE",
      description: "Platform-reported ROAS is a diagnostic, not the headline. The number that reconciles is the report.",
    },
    body: [
      { t: "h2", text: "The two accountants" },
      {
        t: "p",
        text: "Every campaign has two accountants. The first works at the platform and reports what the business bought: the reach, the clicks, the attributed revenue, the beautiful ROAS. The second works at the bank and reports what the business kept: contribution after the media cost, the commission maths, the refunds, the margin. The two accountants rarely agree.",
      },
      { t: "h2", text: "Why they disagree" },
      {
        t: "list",
        items: [
          "Attribution is a story the platform tells; the bank insists on a ledger.",
          "Marketplace commission is part of cost, and most dashboards file it elsewhere.",
          "The creative burn, the catalogue replatform, the discounted offer — margin is eaten in places the platform never reports on.",
        ],
      },
      { t: "h2", text: "The practice" },
      {
        t: "p",
        text: "We report on contribution margin per order and blended acquisition cost against the bank — and we hold platform ROAS in its place as a diagnostic. The rule is simple: if the dashboard and the ledger disagree, the dashboard is describing hope.",
      },
      { t: "h2", text: "Who it's for" },
      {
        t: "p",
        text: "This note is for the operator who has to choose between two sets of numbers at the quarterly review. Choose the one the bank will sign.",
      },
    ],
    ctaVariant: "work",
  },

  // QUESTION — "are you ready for media" ▸ media
  {
    slug: "are-you-ready-for-paid-media",
    title: "Are you ready for paid media? A five-question diagnostic",
    format: "question",
    category: "media",
    eyebrow: "QUESTION · MEDIA",
    directAnswer:
      "If you can't answer all five with a yes and a number, paid media will light money on fire in a controlled, well-reported way.",
    relatedQuestions: [
      "Can you say, in one sentence, what you're better at than the alternative?",
      "Do the assets look like one brand when the grid or feed shows five of them at once?",
      "Does an offer exist that you can defend in writing — margin, commission, refunds?",
      "Can you name the single number that reconciles with the bank for last quarter?",
      "Is there a follow-up that exists after the first click or the trial's end?",
    ],
    linkedPage: "/work",
    linkedPageLabel: "Selected work",
    readTime: "3 MIN",
    date: "Q1",
    body: [
      { t: "h2", text: "The diagnosis first" },
      {
        t: "p",
        text: "Media amplifies what's underneath it. The five questions below decide whether what's underneath is worth amplifying. If the answer to any of them is 'not yet', the media budget's correct size for you this quarter is zero — and the plan takes the budget you would have spent and gives it the job of fixing the answer before the spend.",
      },
      {
        t: "list",
        items: [
          "One sentence: what are you better at than the alternative? If it takes two, the position isn't decided.",
          "Five assets at once: do they look like one brand? A grid shows five of your listings or five of your posts; if they don't own one voice, more reach makes the mess bigger.",
          "An offer you'd defend in writing: margin, commission, refunds. An offer that needs a meeting to explain is a media liability.",
          "One reconciling number: the metric that matched the bank last quarter. If the dashboard is all you have, the plan has no instrument panel.",
          "A follow-up that exists: the sequence after the click, the trial's end, the cart's abandonment. If it doesn't exist, media is funding the exit.",
        ],
      },
      { t: "h2", text: "If you answered no" },
      {
        t: "p",
        text: "Saying no is the productive outcome. The five answers are the checklist for a readiness sprint: fix the position, the asset system, or the offer in a defined two weeks — then run the media on top of a foundation that can actually hold the amplification.",
      },
    ],
    ctaVariant: "consulting",
  },
];

export function bySlug(slug: string): Insight {
  const found = all.find((a) => a.slug === slug);
  if (!found) throw new Error(`No insight content for "${slug}"`);
  return found;
}

export function featuredTop(): Insight[] {
  return all.filter((a) => a.featured);
}