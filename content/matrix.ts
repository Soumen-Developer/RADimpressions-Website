// content/matrix.ts — the 28 industry × service pages. Content per MATRIX.md.
// Word count >= 600 enforced at build (see lib/content.ts assertMatrixWordCount).

import type { MatrixPage, MatrixScenario, MatrixProblem, PillarSlug, IndustrySlug } from "@/lib/types";

export type { MatrixPage } from "@/lib/types";

function page(
  industry: IndustrySlug,
  service: PillarSlug,
  p: { problem: string[]; whatWeDo: string[]; goodLooksLike: string[]; notOptimisedFor: string[] },
  scenario: MatrixScenario,
  proofType: "scenario" | "case-study",
  linkedCaseStudySlug?: string
): MatrixPage {
  const problem: MatrixProblem = {
    collision: p.problem,
    whatWeDo: p.whatWeDo,
    goodLooksLike: p.goodLooksLike,
    notOptimisedFor: p.notOptimisedFor,
  };
  return {
    industry,
    service,
    name: `${serviceName(service)} for ${industryName(industry)}`,
    metaTitle: `${industryName(industry)} ${serviceName(service).toLowerCase()} — RADIMPRESSION`,
    metaDescription: `${industryName(industry)} marketing that starts from a position. ${serviceName(service)}, run properly, ${industryCharacterisation(industry)}`,
    problem,
    scenario,
    proofType,
    linkedCaseStudySlug,
  };
}

export function serviceName(s: PillarSlug): string {
  return {
    strategy: "Strategy",
    "brand-communication": "Brand Communication",
    media: "Media",
    "complete-support": "Complete Support",
  }[s];
}

export function industryName(i: IndustrySlug): string {
  return {
    hospitality: "Hospitality",
    manufacturing: "Manufacturing",
    "real-estate": "Real Estate",
    "fitness-wellness": "Fitness & Wellness",
    education: "Education",
    healthcare: "Healthcare",
    ecommerce: "E-commerce",
  }[i];
}

function industryCharacterisation(i: IndustrySlug): string {
  return {
    hospitality: "the review page is the storefront and footfall is the metric.",
    manufacturing: "the category has no language yet and long sale cycles rule.",
    "real-estate": "the launch date is the boss and the system is the advantage.",
    "fitness-wellness": "the catchment is the business and the trial is the funnel.",
    education: "the year has two real months and the intake window rules.",
    healthcare: "the claim is regulated and the trust is the channel.",
    ecommerce: "the catalogue is the beginning of the brand.",
  }[i];
}

export const all: MatrixPage[] = [
  // ── HOSPITALITY ─────────────────────────────────────────────────────────
  page("hospitality", "strategy", {
    problem: [
      "Hospitality businesses feel marketed to death. Everyone can tell you what the offer is; almost nobody can tell you who the restaurant is really for. The strategy is where that decision gets made: which table, which customer, which evening you are built for.",
      "The refusal here is the point. A concept that tries to be everything to everyone reads as nothing to anyone — and the review page turns that into reputation almost immediately. The position must survive contact with a Tuesday night.",
    ],
    whatWeDo: [
      "Define the concept against the catchment, not the ambition",
      "Set the price and format architecture against the neighbourhood",
      "Decide the refusal — which customers and which hours you will not chase",
      "Build the service model the position actually needs",
      "Write the measurement frame: covers, repeat rate, and review trajectory",
    ],
    goodLooksLike: [
      "Covers and average-spend move together, quarter over quarter",
      "The review page reads like one restaurant wrote it",
      "Repeat customers can say what the restaurant is for",
      "The team can hold the position without a document in hand",
      "The menu and the marketing say the same thing",
    ],
    notOptimisedFor: [
      "Footfall spikes that poison the review average",
      "Ambition that outruns what the kitchen and floor can honestly hold",
      "A concept hostage to a single influencer post",
    ],
  }, {
    intro: "A neighbourhood restaurant with a great kitchen and a forgettable name — the food rated far above the brand that carried it.",
    body: "The collision was classic hospitality: five-star food, zero-star identity. We ran the positioning against the catchment, named the refusal (no weddings, no events, no franchise), rebuilt the menu language to match the position, and pointed the media budget at the two precise evening windows that the concept could actually fill. The review trajectory turned first, then the repeat rate, then the covers. The category finally had something it could say out loud about the place — because the place could finally say it about itself.",
  }, "scenario"),

  page("hospitality", "brand-communication", {
    problem: [
      "Hospitality communication fails in a particular way: the identity is gorgeous and the review page sounds like eleven different restaurants. The menu borrows a font, the social borrows a mood, and the price architecture says nothing at all.",
      "The category mistakes decoration for identity. A restaurant's brand is not its typeface — it is the interior of the ad, the menu as media, and the voice that makes a photo of a dish recognisably yours even with the logo cropped off.",
    ],
    whatWeDo: [
      "Build the identity system that survives a phone screen",
      "Rewrite the menu as media — the menu is the media buy",
      "Write the voice rules that keep reviews and social consistent",
      "Fix the interior of the ad: the photo, the dish, the lighting",
      "Create the templates that let the outlet post at volume without drifting",
    ],
    goodLooksLike: [
      "Scroll the feed offline and the voice is identifiable in seconds",
      "Review responses and campaign creative use the same grammar",
      "The menu reads once and the price architecture makes sense",
      "A phone photo of the food still looks like the brand",
      "New hires can produce on-brand assets without a clinic",
    ],
    notOptimisedFor: [
      "A system too rigid to let the daily special breathe",
      "Beauty that reads expensive and prices the wrong audience out",
      "A feed that outruns what the kitchen can honestly deliver",
    ],
  }, {
    intro: "A hotel group whose outlets each had their own font, own tone, and own customer — while the rooms oversold the food's reputation.",
    body: "We built one system across the group and made it permissive enough for each outlet to stay itself. The templates carried the daily specials, the voice rules carried the review responses, and the interior of the ad — the plate, the light, the angle — became the recognisable signature. Within a season the group's social ran at volume without a single brand meeting, and the outlets finally looked related by intent rather than by accident.",
  }, "scenario"),

  page("hospitality", "media", {
    problem: [
      "Hospitality media is where the money goes to die quietly. Reach is bought national, spent local, and measured on impressions that no customer ever saw. The offer is set by the kitchen, not by the media plan, and the reviews — which do the actual selling — are left to chance.",
      "The media plan for a restaurant is the map: which neighbourhood, which timing, which craving. Treating it as a reach problem is how a restaurant buys a city it can never feed.",
    ],
    whatWeDo: [
      "Map the catchment and the decision windows before a rupee is spent",
      "Point media at the precise hour the craving is live",
      "Use search and maps presence before paid reach",
      "Fold the offer into the media plan — the trial is the price",
      "Read the reviews as conversion data, not as operations",
    ],
    goodLooksLike: [
      "Spend concentrates where the catchment actually is",
      "Footfall correlates with the map and search assets, not just the ads",
      "The offer and the media window are built as one decision",
      "Cover economics are in the plan, not guessed at after",
      "Media stops at the edge of what the kitchen can hold",
    ],
    notOptimisedFor: [
      "Reach outside the catchment — nothing else buys rent",
      "Spend that outpaces the reputation system's capacity",
      "Media measured on impressions nobody converted",
    ],
  }, {
    intro: "A café chain buying city-wide impressions while every branch sat inside a three-kilometre catchment. The reach rented a city; the chairs filled two blocks.",
    body: "We redrew the plan as a set of maps, one per branch, and pointed spend at the decision windows — morning commute, lunchtime, the evening craving. The offer became part of the media plan rather than a sign out front. Footfall moved first, then the review trajectory, then the repeat rate. The national reach died quietly, and the map became the media buy.",
  }, "scenario"),

  page("hospitality", "complete-support", {
    problem: [
      "Hospitality, run fragmented, is the most expensive operating model in the category. The concept is decided by the owner, the menu by the chef, the reviews by the floor staff, and the media by whoever answered the last call. Nobody owns footfall.",
      "The category's real problem is ownership of a single line: covers, at a margin, with a reputation that survives it. One team holding concept, voice, and placement together is the only structure that answers it.",
    ],
    whatWeDo: [
      "Hold concept, menu language, and media as one system",
      "Name a single owner of the footfall line",
      "Run the quarterly review with the decisions in the room",
      "Keep the offer, the reputation, and the spend in one decision",
      "Report on covers and margin, not platform noise",
    ],
    goodLooksLike: [
      "One accountable line exists for footfall, and it moves",
      "The menu, the ads, and the reviews share one vocabulary",
      "Spend decisions are made against the cover line, not the channel",
      "The offer changes come from the plan, not the panic",
      "The quarter's read explains the movement in one page",
    ],
    notOptimisedFor: [
      "A roster of vendors each optimising their own metric",
      "Ownership spread across owner, chef, and agency",
      "A concept held hostage to whichever channel performed last month",
    ],
  }, {
    intro: "A restaurant group that had grown to four outlets with four marketing relationships and a footfall problem none of them owned.",
    body: "We consolidated to one team and one line. The concept became one decision, the voice one system, the media one plan with each outlet's map inside it. The quarterly reviews kept the decision-makers in the room. Within three quarters the group's covers were reconciling to the monthly read in one page — and the fourth kitchen's launch used the same system, assembled instead of invented.",
  }, "scenario"),

  // ── MANUFACTURING ───────────────────────────────────────────────────────
  page("manufacturing", "strategy", {
    problem: [
      "Manufacturers don't think they need marketing, and in the obvious sense they're right: the brochure and the website never hurt, but they also never helped. The real gap is more expensive — the category has no language, no position, and no education layer. The buyers decide on urgency and price because nothing has given them a better reason.",
      "The strategy here is category-level before it's company-level: naming what the category is for, which segment the business owns first, and what the market should say about the difference — aloud, in its own words.",
    ],
    whatWeDo: [
      "Name the category before the company — the language is the asset",
      "Choose the beachhead segment first, however small it looks",
      "Build a defensible difference the buyers can verify, not just admire",
      "Write the plan that makes marketing a cycle-shortener, not a cost",
      "Set the one metric that proves it: pipeline at a defined margin",
    ],
    goodLooksLike: [
      "The company can say its one difference in a sentence",
      "The category starts using the language the strategy created",
      "Inbound enquiries arrive pre-educated, shortening the sales call",
      "The difference is verified in the product, not just the deck",
      "Marketing reports to the pipeline, not the impression count",
    ],
    notOptimisedFor: [
      "Lead volume that floods a sales team with unqualified enquiries",
      "A category fight on price when no one has named the categories",
      "A brand campaign with nothing educated behind it",
    ],
  }, {
    intro: "A precision components maker with superb engineering, zero category language, and a sales cycle run almost entirely on the founder's phone.",
    body: "We started before the company existed in the market's mind — the category itself had no vocabulary, so the strategy named it. The beachhead was one segment, small and exacting, where the engineering genuinely led. We wrote the difference in the buyers' own language, verified in the product, and the education layer taught the market to ask for it. The pipeline began arriving pre-sold; the sales call became a confirmation instead of a cold pitch, and the founder's phone started ringing on its own.",
  }, "scenario"),

  page("manufacturing", "brand-communication", {
    problem: [
      "Manufacturing communication is trapped between two failures: the brochure that reads like a passport, and the website that only the founder finds beautiful. The category's real weakness is that nobody has built the education layer — the plain, technical storytelling that turns engineering into a reason to buy before the sales call.",
      "The communication system here has one job: make the sales cycle shorter by making the buyer smarter — on your terms, in your language.",
    ],
    whatWeDo: [
      "Build the category education layer: proof, histories, engineering",
      "Write the technical story plainly — spec-led, not adjective-led",
      "Create the proof system: cases, installations, verification data",
      "Give sales a deck that teaches instead of reprinting the product sheet",
      "Set templates so the education publishes at a rhythm",
    ],
    goodLooksLike: [
      "Buyers arrive having understood the difference — the call is shorter",
      "The proof system is cited in the room, not searched for after",
      "Content gets bookmarked, forwarded, and quoted inside the buyer's team",
      "The deck and the website teach the same lesson",
      "Engineering asks to contribute — the signal that the work actually helps",
    ],
    notOptimisedFor: [
      "A brochure site that reprints the datasheet in another font",
      "Adjectives the spec can't support — one bad claim costs the whole layer",
      "Marketing and engineering writing in separate buildings",
    ],
  }, {
    intro: "An industrial automation firm whose founder gave the best technical demos in the business — and whose marketing said the least.",
    body: "We turned the founder's explanations into the education layer: the proof system, the case histories, the plain-language technical writing that the owner could never get onto the site before. Marketing and engineering wrote together. Within months the inbound was arriving pre-educated, the demos started shorter, and the datasheet stopped being the only document the buyer had read. The voice of the company finally matched the voice of the best salesperson it had.",
  }, "scenario"),

  page("manufacturing", "media", {
    problem: [
      "Manufacturing media is mostly a misuse of the word spend: LinkedIn reach that impresses the C-suite and converts nothing, search budgets that lose the exact technical terms, and display that rents attention no spec-buyer ever gave it. The buyers are few, precise, and searching for problems, not products.",
      "The media plan here is the capture of very specific queries at the moment of a very specific need — measured on the rate at which enquiries turn into spirited technical conversations.",
    ],
    whatWeDo: [
      "Capture the exact technical queries the buyers actually type",
      "Serve the education layer at the research moment, not the pitch moment",
      "Spend on the few platforms where the few buyers are",
      "Feed the sales team with pre-educated, ranked enquiries",
      "Report on cost per technical call, not cost per click",
    ],
    goodLooksLike: [
      "The company ranks for the terms that used to belong to nobody",
      "Enquiries arrive with the right vocabulary, saving the first call",
      "The sales team wants more leads of the same kind — not just more leads",
      "Spend concentrates on the handful of months of genuine demand",
      "Pipeline at a defined margin is the report, not reach",
    ],
    notOptimisedFor: [
      "Impression campaigns the C-suite loves and the sales cycle ignores",
      "Search spend on generic terms the business cannot convert",
      "A budget spread evenly across a demand curve that spikes",
    ],
  }, {
    intro: "A packaging machinery maker losing its search terms to nobody at all — the queries were simply unclaimed, and the buyers typed them straight past.",
    body: "We mapped the exact enquiries of the technical buying cycle and claimed the unclaimed ones, serving the education layer at the research moment. The spend concentrated on the few months of real demand. The enquiries arrived pre-educated, in the right vocabulary, and the sales team's first call became a confirmation. The pipeline report finally reconciled to a number the bank could see.",
  }, "scenario"),

  page("manufacturing", "complete-support", {
    problem: [
      "Manufacturing is where fragmentation hurts the most and is noticed the least: the brochure agency, the sales team, the one competent engineer who 'does the technical content', and a trade-show calendar nobody owns end to end. In a four-month sale cycle, every handoff leaks.",
      "Complete Support here is one team holding strategy, language, and media together so the four-month cycle is one plan — researched by the marketing that educates, confirmed by the marketing that captures.",
    ],
    whatWeDo: [
      "Hold strategy, education, and capture as one cycle",
      "Name one owner of the pipeline-at-margin line",
      "Run the quarterly review with the sales lead in the room",
      "Keep the trade-show calendar, the search capture, and the proof system in one plan",
      "Report on the cycle, not the campaign",
    ],
    goodLooksLike: [
      "The four-month cycle has one owner and one plan",
      "Enquiries arrive educated and the calls start shorter",
      "The trade-show calendar and the search capture stop conflicting",
      "The sales team and marketing speak the same language — literally",
      "The quarterly page explains the pipeline movement, both directions",
    ],
    notOptimisedFor: [
      "A roster of specialists with no one on the line",
      "Education that teaches the market and capture that contradicts it",
      "A trade-show season optimised for booths instead of pipeline",
    ],
  }, {
    intro: "A mid-size fabricator with extraordinary work, a four-month sales cycle, and four vendors who had each never met.",
    body: "We put the cycle on one plan. The education layer taught the market on the language the strategy had set; the search capture claimed the enquiries at the peak months; the trade-show calendar gave the booth a job it could actually do. The quarterly reviews brought the sales lead into the room. The pipeline began to reconcile — one page, one owner, one line. The four-month cycle finally had a plan that covered all four of its months.",
  }, "scenario"),

  // ── REAL ESTATE ─────────────────────────────────────────────────────────
  page("real-estate", "strategy", {
    problem: [
      "Real estate projects are built backwards: the creative is produced at the last minute, briefed asset by asset, in the panic of a launch date that does not move. The strategy that should decide who the project is for is often a sentence in a sales-room file.",
      "The advantage is not more creative energy at launch — it's the position decided early enough that the hundreds of assets assemble from one idea instead of being invented against a deadline.",
    ],
    whatWeDo: [
      "Define the project's position before the launch machine starts",
      "Decide who the place is for and what it refuses — the refusal is the differentiation",
      "Set the naming and the architecture the assets will assemble from",
      "Build the plan backwards from the hard launch date",
      "Write the measurement frame: velocity and price realisation, not views",
    ],
    goodLooksLike: [
      "The project can be introduced in one sentence — everywhere",
      "The hoarding, brochure, and site say the same thing by construction",
      "The launch creative assembles instead of being reinvented",
      "The sales team repeats the position without cue cards",
      "Velocity is reported against the plan, not against the calendar panic",
    ],
    notOptimisedFor: [
      "A position so safe it differentiates nothing in the brochure rack",
      "Launch creative that survives the date but contradicts the strategy",
      "A project marketed to everyone, bought back as everything, sold at nothing",
    ],
  }, {
    intro: "A township launch drowning in one-off creative and a position reduced to 'premium living' — the exact phrase every brochure on the rack already used.",
    body: "We ran the strategy before the launch machine started: who the township was really for, what it refused, and the one sentence the whole market would repeat. The naming and architecture came out of the position, and the build-up plan worked backwards from the date. When the launch creative finally moved, it assembled from the one idea instead of being invented against the deadline. The rack had one brochure that read differently, and it was the one selling.",
  }, "scenario"),

  page("real-estate", "brand-communication", {
    problem: [
      "Real estate creative has a volume problem no agency system solves: hundreds of assets per launch, each briefed separately, each gorgeous, and none adding up to a brand. The site, the brochure, the hoarding, and the sales gallery are four campaigns wearing the same logo.",
      "The fix is the system — identity, templates, and tone built once so the volume assembles and the voice survives the deadline.",
    ],
    whatWeDo: [
      "Build the identity system before the volume product begins",
      "Create templates the whole asset list runs through",
      "Write the tone that survives the sales gallery and the hoarding alike",
      "Fix the interior of the ad — the visual language, not just the logo",
      "Give the team a review rhythm so drift is caught early",
    ],
    goodLooksLike: [
      "The launch's hundred assets look like one project, one voice",
      "The brochure and the hoarding complete each other instead of arguing",
      "New briefs assemble from templates rather than starting blank",
      "The agency roster produces consistently without a weekly brand meeting",
      "The sales team finally recognises the brand in the assets they hand over",
    ],
    notOptimisedFor: [
      "A system so rigid the project's identity dies inside it",
      "Beauty that outruns the trust the paperwork has to carry",
      "Volume produced on-brand but emotionally vacant",
    ],
  }, {
    intro: "An established builder whose launches each produced brilliant, unrelated campaigns — and whose three agencies had never met.",
    body: "We built the identity system once and ran the entire launch asset list through it — templates, tone, the visual language of the interior of the ad. The brochure, the hoarding, the gallery, and the site assembled from the same source instead of four campaigns wearing the same logo. The launch went out at volume, on time, in one voice, and the agencies started producing consistent work because the system made inconsistency the harder path.",
  }, "scenario"),

  page("real-estate", "media", {
    problem: [
      "Real estate media is a calendar of panic: digital spends flare at launch, die in the sell-down, and ignore the build-up entirely while the informed household is doing its research. The trust circle — the people who actually carry the word to buyers — is rarely spoken to at all.",
      "The media plan here has to match the project's cadence: build-up, launch, and sell-down, with the spend shaped like the demand curve, not like the invoice cycle.",
    ],
    whatWeDo: [
      "Shape spend to the project cadence — build-up, launch, sell-down",
      "Capture the informed household's research before the site visit",
      "Buy the trust circle — the referrals that carry the word",
      "Use data and precise radius where the walk-in decision happens",
      "Report on cost per qualified visit, not per impression",
    ],
    goodLooksLike: [
      "The build-up months have a media plan, not just a presence",
      "The informed household arrives at the site already sold on the research",
      "The trust circle is structured, named, and thanked — not guessed at",
      "Launch spend gets a sell-down plan behind it",
      "Qualified visits are the report; the calendar panic is gone",
    ],
    notOptimisedFor: [
      "A launch flare with no research story underneath it",
      "Reach that impresses the salesroom and converts no one",
      "A brochure read by people who will never buy a flat",
    ],
  }, {
    intro: "A premium project whose media budget flared at launch, died in month two, and left the sell-down to a sales team with a showflat and a prayer.",
    body: "We reshaped the plan to the cadence. The build-up months captured the informed research — the queries of people months from buying. The launch bought the precision and the data, and the trust circle was structured as a channel rather than left to chance. The sell-down had a plan for the first time. Qualified visits became the report, the invoice cycle stopped owning the calendar, and the project's last phase sold on the research the earlier phases had planted.",
  }, "scenario"),

  page("real-estate", "complete-support", {
    problem: [
      "A real estate launch is the worst possible place to run fragmented: the architect talks to the builder, the builder argues with the broker, the salesroom briefs creative nobody briefed, and the launch date does not move. In a project that runs on trust and a hard calendar, every handoff leaks price realisation.",
      "Complete Support is one team across the build-up, the launch, and the sell-down — position, creative system, and media held together so the trust holds and the velocity holds.",
    ],
    whatWeDo: [
      "Hold strategy, creative, and media across the whole project cadence",
      "Name one owner of the velocity and price-realisation line",
      "Keep the salesroom and the marketing reading from the same position",
      "Run the launch and the sell-down as one plan, not two campaigns",
      "Report on velocity against the plan, quarterly",
    ],
    goodLooksLike: [
      "One plan covers build-up, launch, and sell-down",
      "The salesroom and the marketing say the same thing unscripted",
      "The trust circle and the media plan are one list, not two worlds",
      "Velocity reconciles to the quarterly page in one sheet",
      "The next project launches on the system the last one proved",
    ],
    notOptimisedFor: [
      "A project run on heroics with the date as the only plan",
      "Marketing and salesroom contradicting in front of the customer",
      "A sell-down left to word of mouth while the launch spends",
    ],
  }, {
    intro: "A builder running the launch, a broker running the sell-down, and an agency running the ads — three calendars, one unmoving date.",
    body: "We put the entire cadence on one plan with one owner of the velocity line. The strategy, the creative system, and the media plan were built as one schedule, and the salesroom started reading from the same position as the brochures. The trust circle and the media plan became the same list. The launch held, the sell-down had a plan, and the quarterly pages reconciled to one sheet. The next project began from the system the first one proved out.",
  }, "scenario"),

  // ── FITNESS & WELLNESS ──────────────────────────────────────────────────
  page("fitness-wellness", "strategy", {
    problem: [
      "Fitness businesses compete on the loudest offer in the catchment and call it strategy. The price of the trial is set by the nearest competitor, the membership architecture is copied from the chain, and nobody can say who the studio is for — the beginner or the athlete, the morning or the weekend.",
      "The blowback is quiet and expensive: the trial fills, the retention drains, and the offer that won the walk-in is the offer that loses the member.",
    ],
    whatWeDo: [
      "Define who the studio is for, in the catchment, on purpose",
      "Design the membership and trial architecture around retention",
      "Decide the refusal — the classes, hours, and members you will not chase",
      "Set the pricing against the position, not the neighbour's sign",
      "Name the two numbers that matter: trial yield and retention",
    ],
    goodLooksLike: [
      "The studio can say who it is for, and the market repeats it",
      "Trial yield is priced into the offer, not hoped for",
      "The membership architecture is a retention system, not a price list",
      "The schedule reflects the position, not the instructor's availability",
      "Attrition is measured and named, and the cause is structural, not random",
    ],
    notOptimisedFor: [
      "An offer war against the chain next door",
      "A schedule that serves the instructors and bleeds the members",
      "Growth that fills the trial and drains the retention",
    ],
  }, {
    intro: "A boutique studio losing the pricing war to a chain the next street over — while winning the only war that matters.",
    body: "We ran the strategy against the catchment: who the studio was actually for, what it refused, and the position the market could repeat. The membership architecture was rebuilt around retention — the trial priced into the offer, the schedule shaped by the position, the refusal named in public. The chain's war kept being fought by price; this studio stopped fighting it. Yield and retention moved first, and the catchment started saying what the studio was for — in the studio's own words.",
  }, "scenario"),

  page("fitness-wellness", "brand-communication", {
    problem: [
      "Fitness communication swings between two failures: the fantasy (results in six weeks, with a model who has never touched the equipment) and the therapy (content that sympathises and sells nothing). Memberships run on trust in the outcome, and the category's ads run on trust in neither.",
      "The honest asset the category already owns is the member's own result — asked for, credited, and shown to the catchment that can actually act on it.",
    ],
    whatWeDo: [
      "Build the voice of consistency — results, routine, and credit",
      "Ask members for their results, properly, on a system",
      "Show the progress honestly, to the catchment, with the dates attached",
      "Write the trial copy that prices the experience, not the fantasy",
      "Give the studio templates so the feed runs at volume without burnout",
    ],
    goodLooksLike: [
      "The feed reads like one studio, one standard of honesty",
      "Member results run on a system — asked, credited, published",
      "The trial copy promises the experience the trial actually is",
      "Instructors appear as people with routines, not as posters",
      "The catchment recognises itself in the work shown",
    ],
    notOptimisedFor: [
      "Fantasy that discredits the exact people who might join",
      "A feed so polished it photographs like the ad it mocks",
      "Member stories used without the member's goal being honoured",
    ],
  }, {
    intro: "A results-driven studio whose social showed exactly none of its own results — while the membership ran on them.",
    body: "We built the voice around the member's actual outcome: progress asked for on a system, credited with dates and details, and shown to the catchment that could act on it. The instructors appeared as people with routines, not as posters. The trial copy stopped pricing fantasy and started pricing the experience that was actually on offer. The feed began converting the one audience the studio had spent years showing nothing to — its own members, and the neighbourhood that watched them change.",
  }, "scenario"),

  page("fitness-wellness", "media", {
    problem: [
      "Fitness media is a geography problem wearing a performance costume. Reach campaigns buy a city report and rent three kilometres. Trial campaigns price the offer without the catchment drawn. The follow-up — the funnel that actually converts a trial into a member — belongs to no plan at all.",
      "The media plan here is simple to state and rare to see: the catchment drawn, the trial priced on purpose, the follow-up timed.",
    ],
    whatWeDo: [
      "Draw the catchment before the budget is split",
      "Point media at the hours of the decision, within the catchment",
      "Price the trial inside the media plan — the offer is the funnel",
      "Wire the follow-up: the trial's end is the media plan's climax",
      "Report on cost per retained member, not cost per signup",
    ],
    goodLooksLike: [
      "Spend lands inside the catchment, at the decision hour",
      "The trial price is a media decision, made with the plan",
      "The follow-up runs as a touch sequence, timed not improvised",
      "The retained member is the reported number",
      "The chain across town shows up in reach reports, not in the studio",
    ],
    notOptimisedFor: [
      "Reach that impresses the franchise report and fills nothing",
      "A trial priced without a follow-up — the funnel is the follow-up",
      "Media that ends where the decision begins",
    ],
  }, {
    intro: "A multi-location studio group buying city-wide reach while every membership decision happened inside a three-kilometre circle.",
    body: "We drew the catchment for each location and pointed the spend at the decision hours within it. The trial became a media decision — priced with the plan, followed up as a timed sequence instead of a hope. The report moved from signups to retained members, and the number changed the conversation at the review. The city-wide reach died quietly; the map and the follow-up became the plan.",
  }, "scenario"),

  page("fitness-wellness", "complete-support", {
    problem: [
      "Fitness businesses fragment in a way that churns members invisibly: the offer is set by the manager, the retention by the studio floor, the media by an agency, and the schedule by the instructors. Nobody owns the trial-to-member line.",
      "A churn problem is never only a media problem. The integrated answer holds the offer, the voice, and the placement together — because the member who leaves is usually the member who was sold a different studio than the one on the schedule.",
    ],
    whatWeDo: [
      "Hold offer, voice, and placement as one system",
      "Name one owner of the trial-to-member line",
      "Wire the follow-up into the media plan, permanently",
      "Run the quarterly review on yield and retention, in one room",
      "Report the movement in one page, with the causes attached",
    ],
    goodLooksLike: [
      "One line owns trial-to-member, and it moves",
      "The offer, the ads, and the schedule advertise the same studio",
      "The follow-up runs as a system, not a weekly scramble",
      "Attrition has named causes, not meetings",
      "The quarterly page explains the movement in a single sheet",
    ],
    notOptimisedFor: [
      "A planet of vendors and no one on the trial-to-member line",
      "An offer that wins the walk-in and loses the member",
      "Retention left to the floor while the media reports growth",
    ],
  }, {
    intro: "A city-wide studio run on a manager's instinct, an agency's report, and a floor crew's heroics — a churn problem nobody owned.",
    body: "We consolidated to one system and named one owner of the trial-to-member line. The offer, the voice, and the placement were built as one plan; the follow-up became a permanent touch sequence rather than a scramble. The quarterly review put yield and retention in the same room on the same page. Attrition started having named causes instead of meetings, and the line moved — once one team owned it end to end.",
  }, "scenario"),

  // ── EDUCATION ───────────────────────────────────────────────────────────
  page("education", "strategy", {
    problem: [
      "Education institutions market like they teach: evenly, steadily, and without urgency — through eleven months when nothing is decided and into the two months when everything is decided with zero plan behind it. The year has two real months; the marketing has twelve invoices.",
      "The strategy here is the calendar and the position together: who the institution is for, and where the intake window actually puts its money.",
    ],
    whatWeDo: [
      "Define the intake position — who the institution is for, level by level",
      "Shape the plan around the admission cycle, not the invoice cycle",
      "Decide what the quiet months feed: the window buys what consideration earned",
      "Set the proof strategy: outcomes, faculty, alumni — in the decision's order",
      "Name the two numbers: consideration share and intake conversion",
    ],
    goodLooksLike: [
      "The institution can say who it is for, and the parents repeat it",
      "The quiet months have a job, and the window has a plan",
      "Spend is shaped like demand, not like the calendar",
      "The decision-makers compare the proof the strategy picked",
      "Intake reconciles to the plan, not to the scramble",
    ],
    notOptimisedFor: [
      "Twelve months of even spend across a two-month decision",
      "A position competing on the same three adjectives everyone uses",
      "Marketing that stops exactly when the decision begins",
    ],
  }, {
    intro: "A college whose marketing ran evenly through the year while the competitive set battled for the same two-month window.",
    body: "We set the position level by level and reshaped the plan to the cycle. The quiet months built consideration — the searches parents actually make long before applying; the window concentrated the spend where the decision lived. The proof strategy picked the evidence in the order the family weighs it. Intake moved against the plan for the first time in years, and the scramble — the institution's oldest tradition — finally had a calendar around it.",
  }, "scenario"),

  page("education", "brand-communication", {
    problem: [
      "Education communication is fatally polite: every institution says the same three adjectives, shows the same library, and lets the campus photography outrank the only proof that matters. The parents compare outcomes, faculty, and the perception of peers — and the brochure answers all three with a fountain.",
      "The fix is not more beautiful design. It's the proof system built as media, in the order the family actually weighs decisions.",
    ],
    whatWeDo: [
      "Build the proof system: outcomes, faculty, alumni, facilities — weighted and ordered",
      "Write the language without the three borrowed adjectives",
      "Let the campus serve the proof, not replace it",
      "Give the admissions team material that teaches, not decorates",
      "Set templates so the proof publishes at the pace of the decision year",
    ],
    goodLooksLike: [
      "The site leads with outcomes, not architecture",
      "Faculty and alumni appear as people with receipts, not as nameplates",
      "Parents can compare the three things they actually compare",
      "The admissions material and the brochure argue the same case",
      "The institution's language starts being quoted back by parents",
    ],
    notOptimisedFor: [
      "A brochure so beautiful the proof dies inside it",
      "Claims without receipts — an education claim is a legal claim",
      "A reputation polished into phoniness parents can read",
    ],
  }, {
    intro: "A reputed school whose marketing showed the campus endlessly and its results barely — while the admissions phone rang only after word of mouth did the proof's work.",
    body: "We rebuilt the system around the proof, in the order the family weighs it: outcomes first, faculty with receipts, alumni as working people, facilities as supporting evidence instead of the star. The language dropped the borrowed adjectives, and the school started being quoted back by the parents it had finally given a real comparison. The brochure and the admissions team argued the same case, and the phone started ringing before word of mouth had to.",
  }, "scenario"),

  page("education", "media", {
    problem: [
      "Education media redeploys the classic error: even monthly spend across a year whose demand curve spikes and dies. The search months — the quiet ones — feed the decision, and the window months buy it, and the plan that treats both as one constant spends the budget where the decision already happened.",
      "The media plan here has a shape the category rarely draws: the consideration months fed, the intake window concentrated, and the proof served at both moments.",
    ],
    whatWeDo: [
      "Map the admission cycle's demand curve before the budget splits",
      "Feed the consideration months on the searches parents actually make",
      "Concentrate the spend at the intake window, precisely",
      "Serve the proof at both moments — quiet and window",
      "Report on cost per enquiry at the window, not per impression",
    ],
    goodLooksLike: [
      "The quiet months have a job and a budget that acknowledges them",
      "The window's spend is concentrated where the families are",
      "Enquiries arrive during the decision, not after it",
      "The proof is served at the moment the family weighs it",
      "The report reconciles to the intake, not the impressions",
    ],
    notOptimisedFor: [
      "An even spend across a spiked demand curve",
      "Search capture that ends where the decision begins",
      "Reach that impresses the board and converts no families",
    ],
  }, {
    intro: "A school group running a flat monthly media budget through a year where every admission decision arrived in the same three weeks.",
    body: "We drew the demand curve and let it shape the plan. The quiet months captured the consideration searches — the long, real queries of families months from deciding. The window concentrated the spend precisely, feeding the decision rather than the calendar. The proof appeared at both moments, in the order the family weighed it. Intake moved at the window, and the flat invoice became a shaped plan for the first time.",
  }, "scenario"),

  page("education", "complete-support", {
    problem: [
      "Education institutions fragment in the exact pattern that leaks admissions: the academics own the reputation, the admissions office owns the phone, the marketing owns the brochure, and the intake window — the two months that make the year — belongs to nobody.",
      "The integrated answer holds position, proof, and media across the cycle, with one owner of the intake line and the quiet months given a job instead of a presence.",
    ],
    whatWeDo: [
      "Hold position, proof, and media across the full cycle",
      "Name one owner of the intake line",
      "Give the quiet months a job that feeds the window",
      "Keep academics, admissions, and marketing reading from one case",
      "Run the quarterly review on the cycle, with the admission lead in the room",
    ],
    goodLooksLike: [
      "One owner exists for intake, and the plan bends to the cycle",
      "The quiet months feed the window on a plan, not a hope",
      "Markets, admissions, and faculty repeat the same position",
      "The decision year has one timetable everyone uses",
      "The quarterly page explains intake movement in one sheet",
    ],
    notOptimisedFor: [
      "A reputation owned by academics and advertised by nobody",
      "An admissions office doing marketing with no plan behind it",
      "A quiet year marketed as loudly as the window — and half as well",
    ],
  }, {
    intro: "A school whose academics, admissions office, and agency had never once sat in the same room — while the intake window belonged to all three and none.",
    body: "We put the cycle on one plan with one owner of the intake line. The quiet months were given jobs — consideration, proof, the research capture that feeds decisions; the window concentrated behind the plan. The academics, admissions, and marketing started reading from the same case, and the quarterly review put the admission lead in the room. The decision year finally had one timetable, and the intake line moved for the first time in anyone's memory.",
  }, "scenario"),

  // ── HEALTHCARE ─────────────────────────────────────────────────────────
  page("healthcare", "strategy", {
    problem: [
      "Healthcare marketing is built upside down: the brand talks, the compliance reviews after, and the position is whatever the last service line wanted to be. In a sector where trust is the entire asset, the strategy that doesn't decide what the practice is best at leaves the decision to the web directory.",
      "The strategy here is narrow on purpose: the service-line position, the patient it serves, and the claims that can be defended in writing from the first draft.",
    ],
    whatWeDo: [
      "Define the service-line position the practice can actually hold",
      "Choose the patient and the promise the practice will be known for",
      "Write the position defensibly — every claim survives review in writing",
      "Set the trust plan: credentials, outcomes, referral loops, done deliberately",
      "Name the metric that matters: patient acquisition cost by line, at the trust held",
    ],
    goodLooksLike: [
      "The practice is known for one thing the market can verify",
      "Claims are written defensibly from the first draft, not patched later",
      "The referral loop is named, structured, and thanked — not improvised",
      "Competition happens on outcomes and trust, not on adjectives",
      "Acquisition cost by line is the report the strategy chose",
    ],
    notOptimisedFor: [
      "A position that overpromises what the clinic cannot hold",
      "Claims that read beautifully and defend badly",
      "Growth funded by the trust the practice hasn't built yet",
    ],
  }, {
    intro: "A specialist clinic with superb outcomes and a web directory's worth of marketing — five service lines, three claims, no position.",
    body: "We ran the strategy line by line and made the practice choose. One service line was positioned as the thing it would be known for, the promise written to survive a compliance review from the first draft. The trust plan made the referral loop a named, structured channel rather than a hope. Within two quarters the practice was the one name the market repeated for that line — and the claims withstood the review because they had been born defensible.",
  }, "scenario"),

  page("healthcare", "brand-communication", {
    problem: [
      "Healthcare communication runs on borrowed grammar: the stock photography, the adjective of the month, and the 'happy patient' testimonial that would collapse in any review. The category's real marketing asset — honest, local, useful trust — is being spent on decoration.",
      "The communication system here has one job: hold the trust in every asset, with claims that survive contact with a compliance officer and a competing clinic's lawyer.",
    ],
    whatWeDo: [
      "Build the reputation system: reviews, credentials, and outcomes, gathered honestly",
      "Write the claims defensibly — built for review from the first draft",
      "Create useful, local, compliant education content the category lacks",
      "Give the practice templates so trust is published at a rhythm",
      "Train review responses that add to trust instead of defending position",
    ],
    goodLooksLike: [
      "The practice's content is quoted by patients as genuinely useful",
      "Every claim on the site survives being read aloud",
      "Credentials and outcomes lead; photography serves the proof",
      "Review responses read like the practice, not a template",
      "The referral loop sees itself reflected in the communication",
    ],
    notOptimisedFor: [
      "A claim a compliance officer could kill after launch",
      "Happy-patient marketing with no evidence the patient's trust survived",
      "Content that teaches the city and runs from the local question",
    ],
  }, {
    intro: "A hospital group whose site led with stock photography and adjectives — while its patients did the honest, useful communication entirely on word of mouth.",
    body: "We built the reputation system as the communication: reviews gathered and answered on a rhythm, credentials and outcomes leading, the claims written to survive being read aloud. The useful local content the category lacked began publishing on a system. The patients' word of mouth appeared on the site verbatim — and every claim held because it had been born defensible. The group was finally communicating the trust it had been earning without assistance.",
  }, "scenario"),

  page("healthcare", "media", {
    problem: [
      "Healthcare media, run wrong, is a compliance review you pay for at full price: reach that outruns the reputation, ads that can't say what the surgery can, and paid placement 'at the moment of need' with nothing honest behind it. The sector's media has to be local, precise, and defensible in one breath.",
      "The plan here is the moment of need, served with honest answers: search captured when the decision lands, reputation carried by the referral loop, and spend that never outruns the trust.",
    ],
    whatWeDo: [
      "Capture search at the moment of need — the defensible answer first",
      "Buy local precision, never reach beyond the practice's capacity",
      "Make the referral loop a channel with a plan behind it",
      "Fold compliance review into the creative pipeline, not after it",
      "Report on patient acquisition cost by line, at the trust held",
    ],
    goodLooksLike: [
      "The search moment answers honestly, and the ad survives review",
      "Spend stays inside the area the practice can actually serve",
      "The referral loop is measured like a channel, because it is one",
      "Creative clears compliance in the pipeline, not in the panic",
      "Acquisition cost reconciles per line, per quarter",
    ],
    notOptimisedFor: [
      "Reach beyond the practice's honest capacity to serve",
      "Ads that can't say what the centre can actually do",
      "Paid placement with no defensible answer behind it",
    ],
  }, {
    intro: "A city hospital buying reach it could never serve, with ads the compliance team killed weekly at full price.",
    body: "We redrew the plan around the moment of need: search captured with defensible answers, local precision instead of city reach, the referral loop structured as a measured channel. Compliance moved into the creative pipeline instead of standing at the end of it with a red pen. Acquisition cost by line started reconciling quarterly — at the trust the hospital actually held, which, it turned out, was more than its advertising had ever shown.",
  }, "scenario"),

  page("healthcare", "complete-support", {
    problem: [
      "Healthcare is the easiest sector to fragment and the hardest to forgive it: doctors own the outcomes, marketing owns the claims, front desk owns the first impression, and nobody owns the trust that actually acquires the patient. One claim error costs more than any campaign can buy back.",
      "The integrated answer holds reputation, language, and placement as one system — with one owner of the trust line and claims born defensible in every asset.",
    ],
    whatWeDo: [
      "Hold reputation, language, and placement as one system",
      "Name one owner of the trust line — acquisition at the reputation held",
      "Make claims defensible by construction, across every asset",
      "Keep doctors and marketing writing together, in review",
      "Run the quarterly review on trust and acquisition, in one room",
    ],
    goodLooksLike: [
      "One owner exists for the trust line, and it moves deliberately",
      "Claims are born defensible — compliance approves, it doesn't rescue",
      "The referral loop, the reviews, and the media are one plan",
      "Doctors contribute to the communication, reviewed, not decorate it",
      "The quarterly page ties acquisition to the trust held, in one sheet",
    ],
    notOptimisedFor: [
      "A trust line owned by nobody with a red pen at the end",
      "Marketing that outruns what the floor can hold",
      "Referrals and reviews run as separate improvisations",
    ],
  }, {
    intro: "A multi-specialty hospital whose doctors, marketing, and front desk had never agreed on a single claim — and one viral complaint was the only shared asset.",
    body: "We put the trust line on one owner. Reputation, language, and placement became one system; the claims were made defensible by construction so compliance approved instead of rescued. Doctors and marketing began writing together, under review, and the referral loop became a named channel in the same plan as the reviews and the media. The quarter's page tied acquisition to the trust held — one sheet, one owner, one line that finally moved on purpose.",
  }, "scenario"),

  // ── E-COMMERCE ──────────────────────────────────────────────────────────
  page("ecommerce", "strategy", {
    problem: [
      "E-commerce strategy is usually a spreadsheet of channels dressed as a plan. The catalogue is treated as given, the margin as an accounting page, and the marketplace as the sales floor — while the brand that should tell the buyer why these listings over the alternatives is a logo file.",
      "The strategy here starts before the media: what the catalogue contains, at what margin, for whom, and how the storefront says so on a grid that compares everything.",
    ],
    whatWeDo: [
      "Decide the catalogue position — what is sold, at what margin, to whom",
      "Set the channel logic: marketplace first, D2C margin, in the right order",
      "Build the variant and pricing architecture the storefront runs on",
      "Write the refusal — the categories and price points you will not chase",
      "Name the two numbers: gross margin held and repeat rate",
    ],
    goodLooksLike: [
      "The catalogue has a position, not just a `new arrivals` page",
      "Margin is an input to the plan, not a surprise at month end",
      "The marketplace and D2C logic are one decision, not two prayers",
      "Pricing survives comparison and still holds margin",
      "Repeat rate is the line the strategy reports against",
    ],
    notOptimisedFor: [
      "A channel spreadsheet with no catalogue position underneath",
      "Margin conceded to the marketplace until the P&L objects",
      "A brand conversation that starts after the listings lose",
    ],
  }, {
    intro: "A D2C brand with strong product and a marketplace habit that gave away the margin category prizes are built on.",
    body: "We ran the strategy at the catalogue before touching media: what was sold, at what margin, to whom, and the channel order that named the marketplace as the start and D2C as the margin. The variant and pricing architecture gave the storefront a position instead of a product grid. The refusal was written in public — the categories and price points the brand would not chase. Repeat rate became the line, margin became an input, and the strategy stopped being a spreadsheet of channels and started being a decision.",
  }, "scenario"),

  page("ecommerce", "brand-communication", {
    problem: [
      "E-commerce communication is built in the wrong order: the creative team designs for the campaign, the campaign gets reused as the listing, and the grid's brutal comparison ignores both. The listing is the ad, the A+ content is the salesperson, and the storefront is the brand — and none of it is designed as a system.",
      "The fix is the catalogue layer: listings, A+ content, and storefronts designed to convert on the grid, from a system that survives comparison and repeats at volume.",
    ],
    whatWeDo: [
      "Design the listing layer — the ad the grid actually plays",
      "Build the A+ content and storefront that make the sale before the bid does",
      "Write copy that survives a listing grid of competitors staring back",
      "Create templates so the catalogue runs at marketplace volume",
      "Design the variant logic — colourways, bundles, the buy-inonce",
    ],
    goodLooksLike: [
      "The listing converts on the grid, not just in the lookbook",
      "A+ content and storefront tell one story, verified by the reviews beside them",
      "Copy compares honestly and still wins the row",
      "Catalogue refreshes assemble from templates on a rhythm",
      "The storefront reads as a brand, not as a category default",
    ],
    notOptimisedFor: [
      "Campaign creative that dies on the grid it was never designed for",
      "A+ content that argues with the reviews sitting beside it",
      "Volume produced after the marketplace turn — the catalogue is the clock",
    ],
  }, {
    intro: "A homegoods brand whose campaign photography was beautiful and whose listings converted at the rate of a filing cabinet — the grid bought none of the magic.",
    body: "We built the listing layer first: the ad the grid actually plays, with copy that survived the competitors staring back and A+ content that made the sale before the bid could. The storefront and the listings told one story, verified by the reviews beside them. Templates carried the catalogue at volume, and the variant logic made bundles and colourways a system instead of a scramble. Conversion moved on the grid — because the creative had finally been designed for where the decision actually happens.",
  }, "scenario"),

  page("ecommerce", "media", {
    problem: [
      "E-commerce media mistakes a margin problem for a reach problem. The bids rise, the marketplace commission chews the offer, and the campaign gets fed to a creative team that was never the bottleneck. The performance plan that ignores the commission maths is a plan that buys growth at the margin's expense.",
      "The plan here is the overlap made honest: marketplace ads priced inside the commission maths, retail media spent where the comparison happens, and creative replenished on a system that matches the burn.",
    ],
    whatWeDo: [
      "Price retail media inside the commission maths before the bid is set",
      "Spend marketplace ads where the comparison actually happens",
      "Build the creative system that keeps pace with performance burn",
      "Run paid social and search for repeatable purchase, not one-shot clicks",
      "Report on contribution margin per order, not ROAS jazz",
    ],
    goodLooksLike: [
      "The commission maths is in the plan, not a shock at month end",
      "Marketplace and performance spend are one budget, one logic",
      "Creative replenishes on a system, so the losers die on schedule",
      "The repeatable-purchase loop justifies the acquisition spend",
      "The report reconciles to contribution, not to platform dashboards",
    ],
    notOptimisedFor: [
      "Acquisition growth bought with margin the category cannot hold",
      "A creative pinch-hitting where the catalogue is the bottleneck",
      "ROAS reported in a dialect the bank account doesn't speak",
    ],
  }, {
    intro: "A consumer electronics seller whose marketplace ads performed beautifully in the dashboard and lost money in the ledger — the commission was never in the plan.",
    body: "We priced the media inside the commission maths first. Marketplace ads were spent where the comparison happened, retail media folded into the plan, and the creative system was rebuilt to replenish at the burn the performance team actually had. Paid social moved to repeatable purchase instead of one-shot clicks. The report switched from platform ROAS to contribution margin per order — and for the first time, the dashboard and the bank account told the same story.",
  }, "scenario"),

  page("ecommerce", "complete-support", {
    problem: [
      "E-commerce fragments into the exact shape that eats margin: the catalogue team owns the grid, the performance team owns the bids, the creative team owns the burnout, and the margin — the number that reconciles with the bank — belongs to nobody. A margin leak under the offer is invisible from either team alone.",
      "The integrated answer holds catalogue, listing, and performance as one system, with one owner of the contribution line.",
    ],
    whatWeDo: [
      "Hold catalogue, listing, and performance as one plan",
      "Name one owner of the contribution line",
      "Fold the commission maths into every media decision, permanently",
      "Keep creative replenishing at the speed the performance demands",
      "Run the quarterly review on contribution and repeat rate, in one room",
    ],
    goodLooksLike: [
      "One owner exists for contribution, and the P&L shows it",
      "The catalogue, the listings, and the bids move in one direction",
      "Margin leaks have named causes, not quarterly surprises",
      "Creative no longer burns hotter than the system can refill",
      "The quarterly page reconciles contribution in one sheet",
    ],
    notOptimisedFor: [
      "A margin problem with no owner because everyone owns a slice",
      "Growth reported in the dashboard and paid for in the ledger",
      "A catalogue and a media plan that have never read each other",
    ],
  }, {
    intro: "A scaling D2C label with a clean dashboard and a dirty P&L — the margin leak owned by nobody, hidden in the overlap.",
    body: "We put the contribution line on one owner and folded the commission maths into every media decision from the first quarter. The catalogue, the listings, and the bids moved as one plan; margin leaks gained named causes instead of quarterly surprises. The creative system was rebuilt to replenish at the burn, so the losers died on schedule. The dashboard and the P&L finally agreed — one sheet, one owner, one line that reconciled to the bank.",
  }, "scenario"),
];

export function byPair(industry: IndustrySlug, service: PillarSlug): MatrixPage {
  const found = all.find((m) => m.industry === industry && m.service === service);
  if (!found) throw new Error(`No matrix content for ${industry}/${service}`);
  return found;
}

export function allPairs(): { industry: IndustrySlug; service: PillarSlug }[] {
  return all.map((m) => ({ industry: m.industry, service: m.service }));
}