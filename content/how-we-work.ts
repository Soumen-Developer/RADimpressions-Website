// content/how-we-work.ts — the How We Work tree per SITEMAP D.2-D.5:
// the index (process contract), Our Philosophy, Who We Work With, and
// Engagement & Pricing. Figures single-sourced from lib/brand.ts.

import type { FitRow } from "@/lib/types";

export interface ContractStage {
  index: string;
  stage: string;
  duration: string;
  youProvide: string;
  youReceive: string;
}

export const hero = {
  h1: "We show you the thinking before you buy it.",
  sub: "You send us your business and we read it properly. If we think we can help, we spend most of a day on it and send back a recorded teardown of what we'd change, at no cost. If we don't, we say so in 72 hours and tell you why.",
} as const;

export const processStages: ContractStage[] = [
  {
    index: "1",
    stage: "Submit brand research",
    duration: "10 MIN",
    youProvide: "Business context, links, assets, goals",
    youReceive: "Confirmation and the scope of the review",
  },
  {
    index: "2",
    stage: "We read it and decide",
    duration: "72 HRS",
    youProvide: "Nothing",
    youReceive: "A reply, every time. Either a teardown or an honest no with one useful observation.",
  },
  {
    index: "3",
    stage: "Recorded teardown",
    duration: "DAY 3",
    youProvide: "Nothing",
    youReceive: "Only for businesses we've decided we want to work with. A recorded video walking through what we'd change and why.",
  },
  {
    index: "4",
    stage: "Paid call",
    duration: "60 MIN",
    youProvide: "₹499 paid up front, decision-makers in the room",
    youReceive: "The teardown walked through in detail, your objections answered, direction and priorities, a written recap",
  },
  {
    index: "5",
    stage: "Onboarding begins",
    duration: "2–4 WKS TO FIRST OUTPUT",
    youProvide: "Access, approvals, a single point of contact",
    youReceive: "Scoped plan and delivery schedule. Onboarding starts only when both sides are clear on what happens and why — after the call, never during it.",
  },
  {
    index: "6",
    stage: "Operate & scale",
    duration: "ONGOING",
    youProvide: "Monthly review time",
    youReceive: "Work, reporting, and a standing point of view",
  },
] as const;

export const paidSession = {
  heading: "The teardown is free. The call is ₹499.",
  body1:
    "The teardown proves we can read a business, and it costs you nothing. The call is where we walk through it properly — the reasoning, the trade-offs, and whatever you disagree with. ₹499 is not what the hour is worth. It's what makes sure both sides show up to it.",
  body2:
    "The fee isn't credited against anything. It buys the call, the call is the work, and onboarding is a separate decision both of us make afterwards.",
  panel: {
    time: "60 MIN",
    price: "₹499",
    note: "Paid up front, after you've seen the teardown",
    creditLine: "Not credited against a retainer",
    leaveWith: "Direction, priorities, and a written recap",
  },
} as const;

export const cycle = {
  heading: "It isn't a funnel. It's a cycle.",
  caption:
    "A Media client who plateaus has a Strategy problem. A Strategy client with a finished plan needs Brand Communication to build it. We say this at the start, because it's how the work actually goes.",
} as const;

export const expectations: { statement: string; oneLine: string }[] = [
  {
    statement: "A named point of contact.",
    oneLine: "Not a shared calendar. One person who owns the line and can answer for it.",
  },
  {
    statement: "Decisions inside ten working days.",
    oneLine: "The work stalls when the approval chain stalls. A decision within ten working days keeps the schedule real.",
  },
  {
    statement: "Honest access to your numbers.",
    oneLine: "The report has to reconcile with the bank account. We can only report on what we're allowed to see.",
  },
  {
    statement: "A willingness to be told something you don't want to hear.",
    oneLine: "Most of the value of the engagement is in the parts the founder already suspects.",
  },
];

export const linked = [
  { href: "/how-we-work/philosophy", label: "Our Philosophy", blurb: "Why we buy marketing in the order we do, and what we refuse to optimise for." },
  { href: "/how-we-work/who-we-work-with", label: "Who We Work With", blurb: "The filter, in full — including the businesses we'd send elsewhere." },
  { href: "/how-we-work/engagement-and-pricing", label: "Engagement & Pricing", blurb: "How we charge, what sits inside every engagement, and what doesn't." },
];

export const philosophy: {
  shortLabel: string;
  readTime: string;
  sections: { heading: string; paragraphs: string[]; pullquote?: string }[];
} = {
  shortLabel: "Our Philosophy",
  readTime: "8 MIN READ",
  sections: [
    {
      heading: "Marketing is bought in the wrong order",
      paragraphs: [
        "Almost every business buys marketing in the order the vendors happen to sell it. A founder with a product uses an agency for ads, a designer for a logo, and a freelance writer for a website, and the sequence is set by whoever answered the phone fastest. That order is a purchase order, not a strategy — and it is the single most expensive mistake in marketing.",
        "The failure mode is recognisable: spend that works for a quarter and then stops. The campaign lifts, the dashboard goes green, the follow-up spend returns less and less, and nobody can explain why the number stopped moving. The answer is usually not that the media got worse. It is that the position, the language, and the distribution were never built in the order that would let them compound.",
        "Marketing compounds in one order only. The position comes first because it decides what the business is for. The communication system comes second because it gives that position a language. The media comes last because it scales whatever already exists. Most marketing that fails did not fail on execution — it failed because it was bought out of sequence.",
      ],
    },
    {
      heading: "Branding is not a layer you add at the end",
      paragraphs: [
        "Branding is usually treated as the paint job: the logo, the palette, the templates, applied once the product and the pricing are finished. That treats the brand as if it were decoration. It is the opposite — the brand is the decision about what the business is for, made before the assets exist, and everything after that is the execution of the decision.",
        "A business that cannot state in one sentence what it is better at than the alternative has no brand yet, whatever its logo says. The assets carry the decision; they do not make it. That is the order people get wrong even when they agree with the first section: they accept that position precedes distribution, and still treat the visual identity as a finishing touch. The identity is made of decisions, not pixels.",
      ],
      pullquote: "The brand is the decision about what the business is for, made before the assets exist.",
    },
    {
      heading: "Communication is a system, not a feed",
      paragraphs: [
        "Forty posts a month with no system produces nothing cumulative. Each post is fresh, each one is decent, and none of them belongs to anything. The grid or the feed does not accumulate meaning; it accumulates volume. The reason so much content marketing dies quietly is not effort — it is that the effort was spent on throughput instead of structure.",
        "A communication system is the layer underneath: the voice rules, the message architecture, the templates, the pipeline that turns a positioning decision into consistent output at volume. Freelancers and production shops work inside the system once it exists; their output starts matching without a team meeting. The system is built once, and the feed runs on it. Without the system, the feed is a treadmill.",
      ],
    },
    {
      heading: "Media exposes whatever is underneath it",
      paragraphs: [
        "Spend amplifies position, good or bad. The uncomfortable corollary is that scale makes every weakness visible: a weak position, assets that say nothing, an offer that needs a meeting to explain. Media is where those weaknesses get expensive. It is also where they get discovered — which is why the first honest question about a media budget is not how much to spend, but whether there is something worth amplifying underneath it.",
        "This is why we say it before taking a media budget, in writing, at the diagnosis stage. Buying media on top of a position that isn't decided produces a map of the damage in nicely attributed line items. We took the position, the language, and the distribution order seriously because the alternative is funding, on the client's money, a controlled experiment in how fast a weak foundation burns cash.",
      ],
      pullquote: "Spend amplifies position, good or bad. We check what is underneath before we buy.",
    },
    {
      heading: "Why we choose our clients",
      paragraphs: [
        "We take five new engagements a quarter, and we say no to everything we don't believe we can genuinely help. The limit is not modesty and it is not scarcity theatre. It is the honest cost of taking work we shouldn't: every engagement we accept without believing in spends the attention every other engagement needs, and the refusal is the work that keeps the accepted work good.",
        "Choosing clients is why the 72-hour reply is possible, why the recorded teardown is affordable, and why the paid call can be an honest working session rather than a negotiation. A practice that can walk away does not need every meeting to close. That is the capacity you are actually buying when we say yes.",
      ],
    },
    {
      heading: "What we believe about measurement",
      paragraphs: [
        "We report on the number that reconciles with the bank account — contribution, blended acquisition cost, the margin that survives the commission maths and the refunds. Platform numbers are diagnostics, not headlines. A campaign can report beautifully in the platform and lose in the ledger; ours is designed to disagree with the dashboard first and the bank last.",
        "And there are things we refuse to optimise for. We won't chase a short-term number that undermines the position. We won't report a vanity metric as a result. We won't grow spend to cover a thin foundation. The refusal is the point of the practice: the boundary is not a limitation, it is what makes the numbers and the work worth taking seriously.",
      ],
    },
  ],
};

export const www: {
  heroH1: string;
  heroSub: string;
  capacity: { value: string; label: string };
  positive: FitRow[];
  negative: FitRow[];
  stageFit: { stage: string; read: string; recommendation: string; href: string; cta: string }[];
  elseWhere: { category: string; partner: string }[];
} = {
  heroH1: "We're selective, and it's the reason the work is good.",
  heroSub:
    "Selectivity buys the client attention, not availability. Five new engagements a quarter, a reply to every submission within 72 hours, and a refusal with reasons — that is the filter, stated plainly.",
  capacity: {
    value: "5 / QUARTER",
    label: "New engagements, by design. When it's full, we say so and give you a date.",
  },
  positive: [
    {
      text: "The gap is the whole system, not one specialist role.",
      explanation: "Strategy, Brand Communication, and Media need to run as one thing before we're the right answer.",
    },
    {
      text: "The founder can state, or get close to stating, what the business is better at.",
      explanation: "We work the position into a sentence together — but a business that refuses the question entirely is not a fit.",
    },
    {
      text: "The numbers can be shown, not narrated.",
      explanation: "The report has to reconcile with the bank account. Honest access is a condition, not a request.",
    },
    {
      text: "Decisions happen inside ten working days.",
      explanation: "The schedule is only real if the approval chain moves at a usable speed.",
    },
    {
      text: "There is a person who owns the line.",
      explanation: "A named point of contact, with the authority to move the work.",
    },
    {
      text: "The unpleasant truth is welcome.",
      explanation: "Most of the value is in the parts the founder already suspects. We'd rather say it early than let it surface in a quarterly review.",
    },
  ],
  negative: [
    {
      text: "The brief is a list of channels.",
      explanation: "If the ask is 'do our Meta, grow our search', the missing layer is above the channels, not among them.",
    },
    {
      text: "Marketing is a broadcast decision, made once a year.",
      explanation: "The engagement assumes a running point of view, not a single big-bang campaign.",
    },
    {
      text: "The objective is stated as impressions or followers.",
      explanation: "The report reconciles with the bank account. Vanity numbers are how this particular partnership stops.",
    },
    {
      text: "Innovation is wanted from the vendor, not the product.",
      explanation: "We're not on retainer to be the department called creative. The position is the innovation.",
    },
    {
      text: "The internal team is a competitor, not a counterpart.",
      explanation: "We integrate with the in-house people. If the assignment is replacing them, this is the wrong shop.",
    },
    {
      text: "Decisions need a committee of nine to move.",
      explanation: "A named owner is a condition. A committee is a four-month project manager, and we don't bill for committee work.",
    },
  ],
  stageFit: [
    {
      stage: "EARLY",
      read: "Pre-revenue or first traction. The business hasn't decided what it is for, and the temptation is to spend its way to an answer.",
      recommendation: "A consulting session, not a retainer.",
      href: "/consulting",
      cta: "Book a paid session",
    },
    {
      stage: "GROWING",
      read: "Product-market fit, scattered marketing. The pieces exist — some ads, some content — and nothing owns the whole system.",
      recommendation: "The core client. Start with brand research and the recorded teardown.",
      href: "/brand-research",
      cta: "Send us your business",
    },
    {
      stage: "ESTABLISHED",
      read: "In-house team in place, needing a partner rather than a supplier. The gap is the system and the line that runs it.",
      recommendation: "Strategy or Complete Support — a scoped plan with a named owner.",
      href: "/services/strategy",
      cta: "See the approach",
    },
  ],
  elseWhere: [
    {
      category: "A team that needs in-person production capacity",
      partner: "A production studio with staff hours to sell.",
    },
    {
      category: "A short campaign executed inside an existing system",
      partner: "A campaign specialist on the channels already in play.",
    },
    {
      category: "PR placement and journalist relationships",
      partner: "A communications agency owned and staffed for media relations.",
    },
    {
      category: "A single hiring decision on a fractional CSO or CMO",
      partner: "An executive search that runs a proper process.",
    },
    {
      category: "Unit-economics homework before positioning makes sense",
      partner: "A fractional CFO or a pricing consultant.",
    },
  ],
};

export const ep = {
  heroH1: "Priced in writing. Never after the fact.",
  howWeCharge: [
    {
      for: "A single, defined outcome",
      name: "Project",
      scoped: "A fixed scope and a fixed price, named before a rupee moves. The sprint is the smallest useful unit of this.",
      billed: "Fixed price, agreed in writing, billed against the named outcome.",
      pickWhen: "When the job is one deliverable and the ownership stays with you.",
    },
    {
      for: "Three pillars running as one system",
      name: "Retainer",
      scoped: "Strategy, Brand Communication, and Media held by one team with a named lead who owns the line.",
      billed: "A scoped plan, a named owner, a quarterly review, and a report that reconciles with the bank.",
      pickWhen: "When the whole system is in play and the running point of view is the product.",
    },
    {
      for: "The thinking, without the commitment",
      name: "Consulting session",
      scoped: "The 60-minute paid call at ₹499, or a scoped advisory session on a defined question.",
      billed: "Paid up front. It buys the session; it is not credited against anything.",
      pickWhen: "When you want the read on a decision before you change the machinery.",
    },
  ],
  included: [
    "A named lead who owns the line, in writing",
    "A scoped plan with named deliverables and a delivery schedule",
    "A report that reconciles with the bank account",
    "A quarterly strategy review with the decision-makers in the room",
    "A running written point of view — the position held against the numbers",
    "The honesty rule: we tell you when one pillar is the right answer",
  ],
  excluded: [
    "Media spend — budgeted and invoiced to the account directly",
    "Third-party licences, stock, and tooling subscriptions",
    "Production beyond the scoped scope — new photography, film, and large-scale builds are quotes, not inclusions",
    "Anything a committee of nine needs to sign",
  ],
  contracts: {
    heading: "Contracts & commitment",
    paragraphs: [
      "Minimum terms are named in the proposal, in the same document that names the scope and the price. Notice periods run from the start of a month, and the engagement ends however it ends — by completion, by notice, or by the honest recommendation that it should.",
      "There is no lock-in language and no renewal that happens by silence. The retainer earns its renewal by the report reconciling with the bank account and the quarter answering the question that opened it.",
    ],
  },
} as const;

export const faqScopes = ["sprint", "retainer", "call"] as const;