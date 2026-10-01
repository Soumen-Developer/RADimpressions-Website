// content/industries.ts — the seven industry pages per SITEMAP D.9.

import type { IndustryPage, IndustrySlug, PillarSlug } from "@/lib/types";

const all: IndustryPage[] = [
  {
    slug: "hospitality",
    name: "Hospitality",
    metaTitle: "Marketing for hospitality — restaurants, hotels, cafés — RADIMPRESSION",
    metaDescription:
      "Footfall and reputation move together in hospitality. Brand Communication first, then Media with the map and the reviews.",
    heroTitle: "The review page is the storefront.",
    heroBody:
      "Hospitality runs on two machines that move together: footfall and reputation. The review page is the storefront, word of mouth is the ad, and the menu is the media. Marketing here is less about inventing demand than about making the honest work discoverable — then keeping the reviews honest enough to sustain it.",
    characterisation: "Footfall and reputation move together; the review page is the storefront.",
    buying: [
      { label: "BUYING CYCLE", body: "Short and local. A decision made in a week, or on the evening of the same day." },
      { label: "DECISION MAKERS", body: "Single decision, local customers, and a reputation that precedes the offer." },
      { label: "TRUST", body: "Built on reviews, not claims. The rating is the position." },
      { label: "SEASONALITY", body: "Clerical — weekends, evenings, festivals. The offer is the calendar." },
    ],
    oftenWrong: [
      { label: "ASSUMPTION", body: "That footfall is a media problem. It is also a naming, a positioning, and a review problem." },
      { label: "ASSUMPTION", body: "That the menu is content and the ads are marketing. The menu is the media buy." },
      { label: "ASSUMPTION", body: "That reviews are an operations matter, best handled quietly." },
    ],
    start: {
      pillar: "brand-communication",
      reasoning:
        "The identity and the voice decide whether footfall turns into reputation. Start here so the media buys scale something recognisable.",
    },
    pillarBlurbs: {
      strategy:
        "The concept, the price architecture, the format, and the refusal — which tables, which evenings, which customers you are built for.",
      "brand-communication":
        "The identity and the menu language, the interior of the ad — the voice that makes a photo of a dish recognisably yours.",
      media:
        "The maps, the reviews, the evenings, the weekends — paid placements pointed at precise footfall, not vague interest.",
      "complete-support":
        "One team holding concept, voice, and placement together — because a clutch of separate vendors will each optimise their own metric and none will own the footfall.",
    },
    channels: [
      { channel: "Maps and local discovery", reasoning: "The storefront is a pin on a map. Own the pin before you buy the ad." },
      { channel: "Reviews and reputation", reasoning: "The rating is the position. We build the system that keeps it honest." },
      { channel: "Social, by the choice", reasoning: "Short, local, craving-led — platforms with local precision and cravability." },
      { channel: "The menu itself", reasoning: "The menu is media. It sells before any ad does." },
    ],
    notWork: [
      "Distant vanity campaigns for footfall-driven businesses",
      "Brand videos that cost a quarter and say nothing about the food",
      "Ignoring the reviews because they're someone else's department",
    ],
    faqs: [
      { question: "Where does footfall actually come from in hospitality?", answer: "A short, local loop: discovery, a reason to choose, and a reputation that confirms the choice. Marketing amplifies the loop; it doesn't create it." },
      { question: "Why is reputation your storefront?", answer: "Because the buying decision is made on the review page, usually the same evening. Everything before that is archaeology." },
      { question: "Can you help a single restaurant, not a chain?", answer: "Yes. The discipline scales; the execution is local by nature." },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    metaTitle: "Marketing for manufacturers — RADIMPRESSION",
    metaDescription:
      "Long cycles, few buyers, almost no category language. Strategy first — the category often needs naming before it can be marketed.",
    heroTitle: "The category doesn't have a language yet. That's the opportunity.",
    heroBody:
      "Manufacturing marketing is slow by nature: long cycles, few buyers, and almost no category language. Most of the category talks in product sheets. The marketing advantage here is not louder ads — it's building the category language itself, then owning it.",
    characterisation: "Long cycles, few buyers, almost no category language.",
    buying: [
      { label: "BUYING CYCLE", body: "Long and considered. Decisions measured in months, buyers few and technical." },
      { label: "DECISION MAKERS", body: "Small sets of informed buyers who read specs before they read prose." },
      { label: "TRUST", body: "Built on evidence — proof, references, and engineering, not adjectives." },
      { label: "SEASONALITY", body: "Tied to projects, tenders, and purchase cycles rather than the calendar." },
    ],
    oftenWrong: [
      { label: "ASSUMPTION", body: "That manufacturing has no audience. It has a precise, small audience — marketed to with a language built for them." },
      { label: "ASSUMPTION", body: "That a website and a brochure suffice. The category has no education layer; the education is the marketing." },
      { label: "ASSUMPTION", body: "That marketing is a cost centre. Well-run, it shortens the sales cycle it sits beside." },
    ],
    start: {
      pillar: "strategy",
      reasoning:
        "Before media or creative, the strategy must name what the category is for. Strategy decides the language the rest of the market will borrow.",
    },
    pillarBlurbs: {
      strategy:
        "The category positioning — what the category is for, what to call it, and which segment to own first.",
      "brand-communication":
        "The education layer — category language, technical storytelling, and the proof system that makes the sale faster.",
      media:
        "Search — the precise technical terms buyers actually type, captured with content that answers before the sales call.",
      "complete-support":
        "Strategy, language, and search working as one — because a four-month cycle forgives no handoff.",
    },
    channels: [
      { channel: "Search (technical intent)", reasoning: "The buyer types the exact term of the problem. Capture that moment with the education layer." },
      { channel: "Category content", reasoning: "Whitepapers, case history, engineering stories — the education media that shortens the cycle." },
      { channel: "LinkedIn, by the few", reasoning: "The few buyers and the influencers of those buyers, spoken to plainly." },
      { channel: "The sales team's material", reasoning: "The deck and the proof system are also media. We build them as such." },
    ],
    notWork: [
      "Interruption ads for a considered-purchase category",
      "A brochure site that reprints the product sheet in a different font",
      "Marketing that never meets engineering — the two must write together",
    ],
    faqs: [
      { question: "Why does strategy come before anything else here?", answer: "Because the category often lacks a language. Naming what the category is for is itself the first marketing act — everything else borrows from it." },
      { question: "How do you reach buyers who read specs?", answer: "Through search, captured with the education layer, then the proof system. The sale is made in the sales cycle; marketing shortens it." },
      { question: "Do you work with companies that sell through distributors?", answer: "Yes. The strategy has to handle the channel, and the education layer carries the story past the distributor to the buyer." },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    metaTitle: "Marketing for real estate — projects, launches, builders — RADIMPRESSION",
    metaDescription:
      "Project-based bursts with hard launch dates and heavy creative demand. Brand Communication leads, with the creative system built before the launch.",
    heroTitle: "The launch date is the deadline. The system is the difference.",
    heroBody:
      "Real estate marketing is project-based: bursts of creative, hard launch dates, and a heavy appetite for assets that all have to say the same thing. The advantage is the system — creative that assembles from a shared identity instead of being invented fresh for every hoarding, brochure, and post.",
    characterisation: "Project-based bursts, hard launch dates, heavy creative demand.",
    buying: [
      { label: "BUYING CYCLE", body: "Project-bound. A launch, a fixed date, and a campaign window that does not flex." },
      { label: "DECISION MAKERS", body: "Households and one major financial decision, made on trust and place." },
      { label: "TRUST", body: "Built on the place, the builder, and the proof — not on adjectives." },
      { label: "SEASONALITY", body: "Project calendar-driven — launch dates rule everything." },
    ],
    oftenWrong: [
      { label: "ASSUMPTION", body: "That a launch is a campaign. It is a creative production problem with the schedule as the boss." },
      { label: "ASSUMPTION", body: "That the developer's name is the brand. Often the project is the brand, and the developer is the warranty." },
      { label: "ASSUMPTION", body: "That hoardings and social can each be briefed separately. That is how the voice drifts." },
    ],
    start: {
      pillar: "brand-communication",
      reasoning:
        "The launch window has no time to invent. Build the identity system first so the hundreds of assets assemble instead of being reinvented.",
    },
    pillarBlurbs: {
      strategy:
        "The project's position — who the place is for, what it refuses, and how it is named.",
      "brand-communication":
        "The creative system — identity, brochure, hoarding, social, sales gallery — assembled from one source.",
      media:
        "The trusted-circle buys — digital for the informed, and outreach at the precise radius that matters.",
      "complete-support":
        "One team across the build-up, the launch, and the sell-down — because a hard date forgives no handoff.",
    },
    channels: [
      { channel: "The creative system", reasoning: "The hoarding, brochure, and social all say one thing — because they're assembled, not invented." },
      { channel: "Digital search and preference", reasoning: "The informed household researches before the site visit. Be present where they search." },
      { channel: "Data and outreach", reasoning: "Owned lists and precise radius — the trusted circle is the real estate network." },
      { channel: "The sales gallery", reasoning: "The physical asset is the media for the walk-in decision." },
    ],
    notWork: [
      "Briefing every asset separately and hoping the voice holds",
      "A launch without a build-up — the window is short, the story must start early",
      "Ignoring the after-sale reputation, which feeds the next project",
    ],
    faqs: [
      { question: "Why is the creative system so central?", answer: "Because a launch needs hundreds of assets on a date that doesn't move. A system makes them assemble from one identity instead of being reinvented — that's speed and consistency." },
      { question: "Is the developer the brand or is the project?", answer: "Both, but different jobs. The project is the brand that sells; the developer is the warranty that trusts. The strategy separates them deliberately." },
      { question: "How do you handle a hard launch date?", answer: "Backwards-planned from the date, with the system built before the volume product begins. The calendar owns the creative, not the other way round." },
    ],
  },
  {
    slug: "fitness-wellness",
    name: "Fitness & Wellness",
    metaTitle: "Marketing for fitness & wellness — studios, gyms, clinics — RADIMPRESSION",
    metaDescription:
      "Local catchment, trial-led buying, and retention as the real metric. Media leads — precision local placement, then creative, then the system.",
    heroTitle: "The catchment is the business. The trial is the funnel.",
    heroBody:
      "Fitness and wellness is a local, trial-led business: the catchment within a few kilometres is the market, the free trial is the funnel, and retention is the metric that actually compounds. A passing membership pays for the campaign; a retained one pays for the next four. Marketing starts where the catchment can be reached precisely.",
    characterisation: "Local catchment, trial-led buying, retention is the real metric.",
    buying: [
      { label: "BUYING CYCLE", body: "Trial-led and frequent. A decision made in days, measured in visits." },
      { label: "DECISION MAKERS", body: "Local households, one decider, proximity first." },
      { label: "TRUST", body: "Earned by the trial — the experience is the proof." },
      { label: "SEASONALITY", body: "New-year spikes, festival dips — the demand curve is a behavioural one." },
    ],
    oftenWrong: [
      { label: "ASSUMPTION", body: "That the marketing metric is sign-ups. The marketing metric is who comes back." },
      { label: "ASSUMPTION", body: "That reach plays outside the catchment. Only precise local reach pays rent." },
      { label: "ASSUMPTION", body: "That the offer is the business's to set. The offer is media — it prices the trial." },
    ],
    start: {
      pillar: "media",
      reasoning:
        "The catchment decides the plan before the creative does. Media defines who is reachable, then the creative and the system work inside it.",
    },
    pillarBlurbs: {
      strategy:
        "The membership architecture and the offer logic — what price the trial, what the retention loop puts back in.",
      "brand-communication":
        "The voice of consistency — results and routine, credit for the work people actually did.",
      media:
        "Precise local media — the catchment drawn, the trial priced, the follow-up timed.",
      "complete-support":
        "Offer, voice, and placement held together — because a churn problem is never only a media problem.",
    },
    channels: [
      { channel: "Hyperlocal digital", reasoning: "Radius-precise — the catchment within a few kilometres, spoken to in the hours of the decision." },
      { channel: "Results and credits", reasoning: "The member's own results, credited, and asked for — the most honest asset the category has." },
      { channel: "Reviews and reputation", reasoning: "A local, reputation-led category — the rating collects the walk-ins." },
      { channel: "Referral mechanics", reasoning: "The retained member is the channel. Structured referrals recruit the catchment." },
    ],
    notWork: [
      "Broad reach that spends national money on a three-kilometre business",
      "Fitness fantasy that discredits the exact people who might join",
      "A trial that ends without a follow-up — the funnel is the follow-up",
    ],
    faqs: [
      { question: "Why do you start with media here?", answer: "Because the catchment is the entire market. Media defines who is reachable and prices the trial — creative and system work inside that boundary." },
      { question: "Is retention really a marketing metric?", answer: "Yes, for this category. A retained member pays for the next four quarters; a passing one pays for the campaign. The plan has to hold both ends." },
      { question: "Do you work with a single studio or just chains?", answer: "Both. The discipline is local; the system scales to as many locations as the catchment logic demands." },
    ],
  },
  {
    slug: "education",
    name: "Education",
    metaTitle: "Marketing for education — schools, colleges, coaches — RADIMPRESSION",
    metaDescription:
      "Admission cycles; the year has two real months. Media leads, with the spend concentrated precisely where the intake window is open.",
    heroTitle: "The year has two real months. Spend like it.",
    heroBody:
      "Education marketing runs on admission cycles: long quiet months of consideration and a short, brutal window when decisions actually happen. The advantage is concentration — the budget lands precisely where the intake window is open, and the consideration months feed it.",
    characterisation: "Admission cycles; the year has two real months.",
    buying: [
      { label: "BUYING CYCLE", body: "Cycle-bound. A year of consideration, a window of decision." },
      { label: "DECISION MAKERS", body: "Parents and the student, jointly — a trust-heavy decision with a fixed clock." },
      { label: "TRUST", body: "Built on proof of outcomes, faculty, and the perception of peers." },
      { label: "SEASONALITY", body: "The calendar rules. The intake window decides where every rupee goes." },
    ],
    oftenWrong: [
      { label: "ASSUMPTION", body: "That marketing is a year-round constant. The spend's shape should follow the cycle, not the invoice." },
      { label: "ASSUMPTION", body: "That the brochure and the website are the marketing. The admission-year rhythm is the marketing." },
      { label: "ASSUMPTION", body: "That all parents are the same audience. The decision changes by level and by family." },
    ],
    start: {
      pillar: "media",
      reasoning:
        "The admission cycle decides the entire shape of the plan. Media maps the window; everything else serves it.",
    },
    pillarBlurbs: {
      strategy:
        "The intake position — who the institution is for, and the two or three months that make the year.",
      "brand-communication":
        "The proof system — outcomes, faculty, alumni, and facilities, assembled into the consideration story.",
      media:
        "Cycle-shaped spend — the consideration months fed, the intake window bought with precision.",
      "complete-support":
        "Position, proof, and cycle held together — because the wrong rhythm loses the parent regardless of the art.",
    },
    channels: [
      { channel: "Search during consideration", reasoning: "The long months are search months — 'best school for X'. The content answers first." },
      { channel: "The intake window ads", reasoning: "Concentrated precision during the decision window, when the budget earns its rent." },
      { channel: "Proof and alumni media", reasoning: "Outcomes, not adjectives — the strongest asset of the category." },
      { channel: "The parent network", reasoning: "Parents already in the system are the first reference. Structured, not anecdotal." },
    ],
    notWork: [
      "Spreading a cycle-bound budget evenly across the year",
      "Marketing that leads with facilities, when the decision leads with outcomes and trust",
      "Ignoring the quiet months — the window buys what the consideration earned",
    ],
    faqs: [
      { question: "What does 'the year has two real months' mean?", answer: "For many institutions the intake decision concentrates into a short window. The plan puts its weight there, fed by the quiet consideration months that build the trust." },
      { question: "How is search part of the plan?", answer: "The consideration months run on the searches parents actually make. The content layer answers those — so the window opens on a warmed audience." },
      { question: "Do you work with coaching institutes and schools alike?", answer: "Yes. The cycle logic differs by level and family, and the strategy has to name the audience precisely before the media lands." },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    metaTitle: "Marketing for healthcare — clinics, hospitals, specialists — RADIMPRESSION",
    metaDescription:
      "Trust-led, local, and tightly regulated on claims. Brand Communication leads — reputation systems, referral loops, compliant language.",
    heroTitle: "The claim is regulated. The trust is earned.",
    heroBody:
      "Healthcare is trust-led, local, and tightly regulated on claims. The 'ad' is the reputation, the referral is the media, and the language has to survive a compliance review. The advantage here is the system that keeps the trust honest — reputation mechanics, referral loops, and claims that are defensible.",
    characterisation: "Trust-led, local, and tightly regulated on claims.",
    buying: [
      { label: "BUYING CYCLE", body: "Need-driven and urgent — a decision made at the moment of need, on the trust already built." },
      { label: "DECISION MAKERS", body: "The patient or family, under pressure, leaning on reputation and referral." },
      { label: "TRUST", body: "Everything. Built on outcomes, registration, and the word of the network." },
      { label: "SEASONALITY", body: "Symptom-driven and epidemic-aware — the demand curve answers to need, not to the calendar." },
    ],
    oftenWrong: [
      { label: "ASSUMPTION", body: "That healthcare marketing is an ad run. It's a reputation system with a claim compliance layer." },
      { label: "ASSUMPTION", body: "That 'happy patient' content runs unregulated. The language must be defensible in writing." },
      { label: "ASSUMPTION", body: "That local means small. Local is precise — and precision runs at scale." },
    ],
    start: {
      pillar: "brand-communication",
      reasoning:
        "Trust is the channel. Communication builds the reputation system and gets the language compliant before any spend occurs.",
    },
    pillarBlurbs: {
      strategy:
        "The service-line position — what the practice is best at, and which patient it serves.",
      "brand-communication":
        "The reputation system — reviews, credentials, and referral language, written to survive compliance.",
      media:
        "Local precision and search at the moment of need — where the decision actually lands.",
      "complete-support":
        "Reputation, language, and placement as one system — because a claim error costs trust no campaign can buy back.",
    },
    channels: [
      { channel: "Reviews and credentials", reasoning: "The trust inventory — gathered, answered, and honest." },
      { channel: "The referral loop", reasoning: "The specialist and family network referrals — structured, named, thanked." },
      { channel: "Search at need", reasoning: "At the moment of need, the searcher lands on the defensible answer." },
      { channel: "Community and education content", reasoning: "Genuinely useful, compliant, and local — the institution as the reliable source." },
    ],
    notWork: [
      "Claims that can't be defended in writing — the compliance review is not optional",
      "Paid reach that outruns the reputation system's capacity",
      "Referrals left to chance while the ad budget grows",
    ],
    faqs: [
      { question: "Why do you start with communication here?", answer: "Because trust is the channel and reputation is the asset. Communication builds both, and gets the claims compliant, before any rupee is spent on placement." },
      { question: "What does 'claims must survive compliance' mean in practice?", answer: "Every claim we write has to be defensible in writing, with evidence. The language is built for review from the first draft — not patched after." },
      { question: "Do you manage the reviews themselves?", answer: "We build the system that gathers, answers, and keeps reviews honest — the practice owns the patient relationship and the compliance decisions." },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    metaTitle: "E-commerce marketing — marketplaces, d2c, retail media — RADIMPRESSION",
    metaDescription:
      "Marketplace and performance overlap, and creative burns fast. Media leads — the catalogue and listing architecture before the spend.",
    heroTitle: "The catalogue is the beginning of the brand.",
    heroBody:
      "E-commerce marketing lives where marketplace and performance overlap, and the creative burns fast. The listing is the ad, the catalogue is the position, and the commission maths is part of the media plan. The advantage is the connection between the storefront's architecture and the media that amplifies it.",
    characterisation: "Marketplace and performance overlap; creative burns fast.",
    buying: [
      { label: "BUYING CYCLE", body: "Short and transactional — a cart in hours, a repeat in weeks." },
      { label: "DECISION MAKERS", body: "One buyer, comparing openly, immune to adjectives." },
      { label: "TRUST", body: "Ratings, reviews, and returns policy — the listing is the trust page." },
      { label: "SEASONALITY", body: "Campaign-bound — sales calendar, marketplace events, and the inventory clock." },
    ],
    oftenWrong: [
      { label: "ASSUMPTION", body: "That creative is the bottleneck. The catalogue and the listing architecture are the bottleneck." },
      { label: "ASSUMPTION", body: "That marketplace and performance are two teams. They overlap by definition." },
      { label: "ASSUMPTION", body: "That margin is an accounting page. Margin is the media plan's input." },
    ],
    start: {
      pillar: "media",
      reasoning:
        "Performance and marketplace maths decide the plan before creative does. Media sets the spend logic, then the catalogue and the creative serve it.",
    },
    pillarBlurbs: {
      strategy:
        "The catalogue position — what is sold, at what margin, to whom, and how the storefront says so.",
      "brand-communication":
        "The listing layer — A+ content, storefront design, and copy that survives a marketplace grid.",
      media:
        "The performance logic — marketplace ads, retail media, and the commission maths folded into the plan.",
      "complete-support":
        "Catalogue, listing, and performance as one system — because a margin leak under the offer is invisible from either team alone.",
    },
    channels: [
      { channel: "Marketplace advertising", reasoning: "Where the comparison happens — retail media priced inside the commission maths." },
      { channel: "The listing itself", reasoning: "The ad is the listing. We build listings that convert on the grid, not the pitch deck." },
      { channel: "Paid social and search", reasoning: "Performance media aimed at repeatable purchase — creative that burns fast, replenished on a system." },
      { channel: "Reviews and ratings", reasoning: "The trust page is a channel. Gathered systematically, answered honestly." },
    ],
    notWork: [
      "Treating marketplace and performance as separate teams — the overlap is the business",
      "Pricing margin as an accounting page instead of the media plan's input",
      "Creative invented per campaign, with no catalogue system underneath",
    ],
    faqs: [
      { question: "Why do you start with media here?", answer: "Because the marketplace and performance maths decide everything — margin, commission, budget. Media sets the spend logic, and the catalogue and creative serve it." },
      { question: "What is retail media in your plan?", answer: "Marketplace advertising measured inside the commission maths — spent where the comparison actually happens, priced against margin, not gross." },
      { question: "How do you keep creative volume sustainable?", answer: "The listing and catalogue systems carry the volume. Creative replenishes on a system — templates, variant logic, and a review rhythm. Nothing invented fresh per week." },
      { question: "Marketplace or D2C first?", answer: "The strategy names the channel logic. For most, the marketplace is the start and D2C is the margin; the plan connects the two instead of betting on one." },
    ],
  },
];

export function bySlug(slug: IndustrySlug): IndustryPage {
  const found = all.find((p) => p.slug === slug);
  if (!found) throw new Error(`No industry content for "${slug}"`);
  return found;
}

export { all };

export const pillarNames: PillarSlug[] = [
  "strategy",
  "brand-communication",
  "media",
  "complete-support",
];