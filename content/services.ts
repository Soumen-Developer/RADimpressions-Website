// content/services.ts — the four service pages. Content per SITEMAP D.7.

import type { ServicePage, ServiceSlug } from "@/lib/types";

export const all: ServicePage[] = [
  {
    slug: "strategy",
    name: "Strategy",
    promise: "We help you figure it out.",
    metaTitle: "Marketing & brand strategy — RADIMPRESSION",
    metaDescription:
      "Decide what the business is for before you spend on media. Positioning, plan, and the operating model that carries them.",
    heroSymptom:
      "You're busy, you're spending, and you can't say what you're actually building.",
    diagnosis: [
      "Most businesses have a plan for the year and no position underneath it. The plan lists channels and budgets. It never answers the only question the market is actually asking: what are you better at than the alternative?",
      "Strategy here is deciding what the business is for, who it's for, and what it will refuse — then translating that into a marketing plan a team can act on Monday. The refusal is the part most plans skip, and it is the part that makes the rest of the work compound.",
      "If you can't state your position in one sentence, no amount of content or spend will do it for you. This pillar is where that sentence gets decided.",
    ],
    capabilities: [
      {
        cluster: "Position",
        items: [
          "Category definition",
          "Competitive positioning",
          "Brand architecture",
          "Portfolio decisions",
          "Naming direction",
        ],
      },
      {
        cluster: "Plan",
        items: [
          "Marketing strategy",
          "Channel logic",
          "Budget allocation",
          "Campaign roadmap",
          "Measurement framework",
          "Marketplace strategy — which platforms, what catalogue and variant architecture, pricing and margin logic",
        ],
      },
      {
        cluster: "Operate",
        items: [
          "Brand guidelines",
          "Workflow structuring",
          "Team alignment",
          "Working models for internal and external teams",
          "Content direction",
        ],
      },
    ],
    fit: {
      for: [
        { text: "Businesses that feel busy but stuck" },
        { text: "Founders with three good options and no way to choose" },
        { text: "Teams where marketing decisions get reversed monthly" },
        {
          text: "Companies whose freelancers each have a different idea of the brand",
        },
      ],
      notFor: [
        {
          text: "Anyone who already has a clear position and just needs execution.",
          explanation: "That is Brand Communication's work, not ours.",
        },
      ],
    },
    process: [
      {
        name: "Brand research",
        description: "You send us the business; we read it properly.",
        duration: "10 MIN",
      },
      {
        name: "Market and category review",
        description: "We map your competitive set and how it positions itself.",
        duration: "WEEK 1",
      },
      {
        name: "Internal interviews",
        description: "We hear how the people building it actually describe it.",
        duration: "WEEK 1",
      },
      {
        name: "Positioning workshop",
        description: "Decisions made in the room, not in a document.",
        duration: "HALF DAY",
      },
      {
        name: "Written strategy",
        description: "The position, the reasoning, the refusal, on paper.",
        duration: "WEEK 2",
      },
      {
        name: "Rollout plan",
        description: "What happens Monday, who owns it, and how we read the month.",
        duration: "WEEK 3",
      },
    ],
    deliverables: [
      { artefact: "POSITIONING STATEMENT", label: "A positioning statement and the reasoning behind it" },
      { artefact: "MESSAGING HIERARCHY", label: "A messaging hierarchy the whole team can build from" },
      { artefact: "12-MONTH PLAN", label: "A 12-month marketing plan with budget logic" },
      { artefact: "BRAND GUIDELINES", label: "Brand guidelines that tell the team what to do, not how to feel" },
      { artefact: "MEASUREMENT FRAMEWORK", label: "A measurement framework tied to the position — not to impressions" },
    ],
    boundary: {
      heading: "What this doesn't include",
      body: "Design production, campaign creative, and ad management. Strategy ends at the plan — we don't quietly slide into producing it.",
      linkTo: "brand-communication",
      linkLabel: "Brand Communication builds it. Media runs it. See both →",
    },
    faqs: [
      {
        question: "How long does a strategy engagement take?",
        answer:
          "The positioning work runs three to four weeks. The plan that follows depends on the business — we scope it after the interview round, not before.",
      },
      {
        question: "Do you ever execute the strategy you write?",
        answer:
          "Yes — through Brand Communication and Media, if you want us to. The boundary here isn't to protect scope. It's so the strategy is decided on its own merits before anyone gets attached to producing it.",
      },
      {
        question: "We already have a marketing plan. When do we need this?",
        answer:
          "If the plan can't name what the business is built to be better at, the plan is a budget with adjectives. That's the gap this pillar closes.",
      },
      {
        question: "What will you not do in a strategy engagement?",
        answer:
          "We won't reverse marketing decisions after the strategy lands, and we won't write a plan that names every channel but no position. A plan without a position is how marketing stops working and nobody can explain why.",
      },
    ],
    ctaVariant: "research",
    marketplace: true,
  },
  {
    slug: "brand-communication",
    name: "Brand Communication",
    promise: "We help you say it.",
    metaTitle: "Brand communication, identity & creative — RADIMPRESSION",
    metaDescription:
      "Identity, language, and production as one connected system — so every asset is recognisably yours, at volume and after us.",
    heroSymptom: "You know what you stand for. Nothing you publish sounds like it.",
    diagnosis: [
      "Communication fails in two directions. Either the brand is well defined and the output drifts, or the output is beautiful and says nothing in particular.",
      "This pillar builds the system that makes every asset recognisably yours — the identity, the language, and the production rhythm, held together so the third freelancer produces the same brand as the first.",
      "Volume without a system produces nothing cumulative. Forty posts a month, all different, add up to less than one, repeated in your voice.",
    ],
    capabilities: [
      {
        cluster: "Identity",
        items: [
          "Visual identity systems",
          "Logo and mark application",
          "Design systems",
          "Packaging direction",
          "Brand guidelines execution",
        ],
      },
      {
        cluster: "Language",
        items: [
          "Messaging system",
          "Tone of voice",
          "Campaign concepts",
          "Naming",
          "Copy frameworks",
        ],
      },
      {
        cluster: "Production",
        items: [
          "Social content",
          "Graphic design",
          "Video and editing",
          "Campaign creative",
          "Digital assets",
          "Marketplace listing content, A+ content and storefront design",
          "Website content design",
        ],
      },
    ],
    fit: {
      for: [
        { text: "Businesses with a strategy that isn't showing up in the work" },
        {
          text: "Brands running several freelancers with no system holding them together",
        },
        {
          text: "Teams that need reliable creative output at volume without losing the thread",
        },
      ],
      notFor: [
        {
          text: "Anyone who can't yet say what the brand is about.",
          explanation: "The words come from Strategy; we build the system that carries them.",
        },
      ],
    },
    process: [
      { name: "Brief and audit", description: "We read the current assets and find where the voice drifts.", duration: "WEEK 1" },
      { name: "Communication architecture", description: "The hierarchy — what you say first, and to whom.", duration: "WEEK 1" },
      { name: "Concept", description: "The idea that holds the system together.", duration: "WEEK 2" },
      { name: "System build", description: "Templates, tone, and the rules that keep output consistent.", duration: "WEEK 2" },
      { name: "Production rhythm", description: "A calendar and pipeline your team can actually run.", duration: "ONGOING" },
      { name: "Review cadence", description: "A standing check that the output is still yours.", duration: "MONTHLY" },
    ],
    deliverables: [
      { artefact: "IDENTITY FILES", label: "Identity and design system files your whole team opens" },
      { artefact: "MESSAGING DOCUMENT", label: "A messaging system document" },
      { artefact: "TEMPLATES", label: "Templates for the recurring jobs, so volume doesn't reinvent" },
      { artefact: "CONTENT PIPELINE", label: "A content calendar and production pipeline" },
      { artefact: "ASSETS", label: "The assets themselves — made, not moodboarded" },
    ],
    boundary: {
      heading: "What this doesn't include",
      body: "Media budget management and paid distribution. We build what runs; we don't place it.",
      linkTo: "media",
      linkLabel: "Media runs it. See how →",
    },
    faqs: [
      {
        question: "We have several freelancers. How does this change that?",
        answer:
          "The system is built once and the freelancers work inside it. Same templates, same voice rules, same review. Their output starts matching before anyone has a team meeting about it.",
      },
      {
        question: "What's the difference between this and a rebrand?",
        answer:
          "A rebrand replaces the assets. This builds the system that keeps the assets consistent — so the answer to 'do we need a rebrand or just better content' is usually this pillar, done properly.",
      },
      {
        question: "Can you produce at the volume a performance team needs?",
        answer:
          "Yes — that's what the templates and pipeline exist for. The throughput comes from combination, not from inventing a new design every week.",
      },
      {
        question: "Do you write the words too?",
        answer:
          "Yes. Language is half this pillar — the messaging system, the tone document, and the campaign copy all come out of it.",
      },
    ],
    ctaVariant: "consulting",
    marketplace: true,
  },
  {
    slug: "media",
    name: "Media",
    promise: "We help you scale it.",
    metaTitle: "Performance media, paid & distribution — RADIMPRESSION",
    metaDescription:
      "Media planned against a position, bought with the mechanics visible, and reported on the number that reconciles with the bank account.",
    heroSymptom: "You're spending, and it isn't compounding.",
    diagnosis: [
      "Media does not create demand out of nothing. It finds and amplifies demand that already exists for a position people recognise.",
      "Where spend stops working, the problem is usually upstream — the position, or the assets, or the offer. We say so before we take a media budget. A media plan that fixes a positioning problem is a media plan that buys a busy week exactly once.",
      "The other half is the reporting. Platform numbers lie in a particular way, and we report on the number that reconciles with the bank account — not the one the platform wants you to see.",
    ],
    capabilities: [
      {
        cluster: "Buy",
        items: [
          "Media planning",
          "Paid search and social",
          "Marketplace advertising and retail media",
          "Budget allocation",
          "Bid and creative testing",
        ],
      },
      {
        cluster: "Convert",
        items: [
          "Landing page and funnel optimisation",
          "Conversion tracking",
          "Offer testing",
          "Marketplace listing performance",
        ],
      },
      {
        cluster: "Amplify",
        items: [
          "Distribution strategy",
          "PR and earned media",
          "Scaling winning content",
          "Influencer and partnership media",
        ],
      },
    ],
    fit: {
      for: [
        { text: "Brands already producing content that deserves an audience" },
        {
          text: "Businesses spending on ads without a clear read on what's working",
        },
        { text: "Teams ready to scale a proven offer" },
      ],
      notFor: [
        {
          text: "Anyone hoping paid media will fix a positioning problem.",
          explanation: "We'll tell you if that's what we see before taking the budget.",
        },
      ],
    },
    process: [
      { name: "Account and spend audit", description: "We find where the money is actually going.", duration: "72 HRS" },
      { name: "Measurement setup", description: "The events and numbers that reconcile with the bank.", duration: "WEEK 1" },
      { name: "Media plan", description: "Channels, budgets, and the rationale for both.", duration: "WEEK 1" },
      { name: "Launch", description: "Live campaigns with the plan documented.", duration: "WEEK 2" },
      { name: "Weekly optimisation", description: "Bids, creative, and placements, on a rhythm.", duration: "WEEKLY" },
      { name: "Monthly review and scale", description: "A written read on what changed and why.", duration: "MONTHLY" },
    ],
    deliverables: [
      { artefact: "MEDIA PLAN", label: "A media plan with budget rationale" },
      { artefact: "LIVE CAMPAIGNS", label: "Live campaign management" },
      { artefact: "REPORTING DASHBOARD", label: "A reporting dashboard on the right number" },
      { artefact: "MONTHLY READ", label: "A monthly written read on what changed and why" },
    ],
    boundary: {
      heading: "What this doesn't include",
      body: "Creative production at volume and brand system work. We'll direct creative, not staff it.",
      linkTo: "brand-communication",
      linkLabel: "Brand Communication makes the assets — see how →",
    },
    faqs: [
      {
        question: "Why would media fix fewer problems than I expect?",
        answer:
          "Media amplifies what's underneath it. If the position is weak or the assets say nothing, spend makes that bigger. We diagnose before we buy — that's the whole point of the free teardown.",
      },
      {
        question: "How do you report?",
        answer:
          "On blended acquisition cost and the number that reconciles with the bank account. Platform-reported ROAS is a diagnostic, not the headline.",
      },
      {
        question: "Do you run marketplace ads?",
        answer:
          "Yes — marketplace advertising and retail media are part of this pillar, alongside paid search and social. We treat the commission maths as part of the media plan.",
      },
      {
        question: "What's the minimum budget you work with?",
        answer:
          "We don't publish a floor because the right number depends on the category and the offer. We'll be straight about whether media is the next move at all — often it isn't.",
      },
    ],
    ctaVariant: "consulting",
    marketplace: true,
  },
  {
    slug: "complete-support",
    name: "Complete Support",
    promise: "We run it with you.",
    metaTitle: "Complete marketing support — RADIMPRESSION",
    metaDescription:
      "Strategy, communication, and media run as one system with one accountable line. One team owns the outcome.",
    heroSymptom:
      "Marketing is five different people's job and nobody owns the outcome.",
    diagnosis: [
      "Fragmentation is the most expensive problem in marketing and the hardest to see from inside. The freelancer owns the design, the agency owns the ads, the operations manager owns the posting, and nobody owns the result.",
      "Complete Support means one team holds strategy, communication, and media together, and one team is accountable when the number moves or doesn't. This is an integration argument, not a bundle discount.",
      "It is the answer for the business that has grown past running marketing out of a shared calendar and isn't sure who to hand it to.",
    ],
    capabilities: [
      {
        cluster: "Strategy",
        items: [
          "Positioning and planning",
          "Cross-functional growth planning",
          "Quarterly strategy review",
        ],
      },
      {
        cluster: "Communication",
        items: [
          "Identity and language systems",
          "Content production rhythm",
          "Campaign creative",
        ],
      },
      {
        cluster: "Media",
        items: [
          "Paid and distribution",
          "Conversion and offer work",
          "Reporting on the number that reconciles",
        ],
      },
    ],
    fit: {
      for: [
        { text: "Growing businesses with fragmented marketing" },
        {
          text: "Founders who can't crack growth and don't want to manage four vendors",
        },
        {
          text: "Companies that need one strategic partner rather than a roster",
        },
      ],
      notFor: [
        {
          text: "Businesses with a strong in-house team that needs one specialist gap filled.",
          explanation: "Buy the single pillar that fills it — not the full build.",
        },
      ],
    },
    process: [
      { name: "Brand research", description: "The full read, before anything else.", duration: "10 MIN" },
      { name: "We read it and decide", description: "A reply within 72 hours, every time.", duration: "72 HRS" },
      { name: "Recorded teardown", description: "Only for businesses we decide to work with.", duration: "DAY 3" },
      { name: "Paid call", description: "The teardown walked through, objections answered.", duration: "60 MIN" },
      { name: "Onboarding", description: "Scoped plan and schedule, both sides clear.", duration: "2–4 WKS" },
      { name: "Operate and review", description: "Work, reporting, and a standing point of view.", duration: "QUARTERLY" },
    ],
    deliverables: [
      { artefact: "ALL THREE PILLARS", label: "Everything from Strategy, Communication, and Media" },
      { artefact: "NAMED LEAD", label: "A named lead who owns the line" },
      { artefact: "QUARTERLY REVIEW", label: "A quarterly strategy review with the decision-makers in the room" },
      { artefact: "ONE REPORTING LINE", label: "A single accountable reporting line" },
    ],
    boundary: {
      heading: "What this doesn't include",
      body: "Replacing your internal team — we integrate with it. Also in-house software development, and anything outside marketing and communications.",
      linkTo: "strategy",
      linkLabel: "Start with the position. See Strategy →",
    },
    faqs: [
      {
        question: "How is this different from hiring an agency?",
        answer:
          "An agency is usually one pillar. This is all three, held by one accountable team, with the trade-offs between them visible instead of negotiated across vendor meetings.",
      },
      {
        question: "Do you replace our in-house team?",
        answer:
          "No. We integrate with it — the internal people keep the relationships and the daily feel; we hold the strategy, the production system, and the reporting line.",
      },
      {
        question: "Will you tell us when a single pillar is the right answer?",
        answer:
          "Yes. If the gap is one specialist role, the honest recommendation is one pillar. The filter applies inside the engagement as well as outside it.",
      },
      {
        question: "How is billing structured?",
        answer:
          "As a retainer with a scoped plan and a named lead. The scope is named in the proposal, not negotiated after the brief.",
      },
    ],
    ctaVariant: "research",
    marketplace: false,
  },
];

export function bySlug(slug: ServiceSlug): ServicePage {
  const found = all.find((s) => s.slug === slug);
  if (!found) throw new Error(`No service content for "${slug}"`);
  return found;
}