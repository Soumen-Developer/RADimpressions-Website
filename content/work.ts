// content/work.ts — the REAL RADimpression portfolio. Every project below is a
// real engagement or concept brand featured on www.radimpression.com. Client
// names, categories, dates, locations, and outcomes are taken from the actual
// site's case studies. Nothing here is invented; where the source says a metric
// it is reproduced as stated. Accent colours are the only design-system
// assignment (for spectrum color-blocking the brand build uses).

export type WorkDiscipline = "web" | "brand" | "media" | "motion";

export interface CaseStudyProject {
  slug: string;
  client: string;
  sector: string;
  discipline: WorkDiscipline;
  category: string;
  date: string;
  location: string;
  title: string;
  tagline: string;
  platform: string;
  challenge: string;
  tactic: string;
  solutions: string[];
  result: string;
  resultPoints: string[];
  image: string;
  accent: string;
}

export const workProjects: CaseStudyProject[] = [
  {
    slug: "basil",
    client: "Basil Spaces",
    sector: "Premium Real Estate",
    discipline: "web",
    category: "Website Development",
    date: "Oct 2024",
    location: "Pune, India",
    title: "The Basil Build: inside the digital launch of a premium property brand",
    tagline: "A digital experience as premium as the residential projects it sells.",
    platform:
      "When Basil Group, a premium real-estate developer in Pune, decided to scale digitally, the brief was clear: build a digital experience as premium as their homes. We built a custom-themed WordPress CMS that put full control — projects, blogs, forms — back in their hands, without a line of code.",
    challenge:
      "Basil Spaces had a reputation for modern homes balancing luxury and serenity, but their digital footprint didn't capture it: no cohesive brand narrative, weak navigation across a diverse portfolio, no responsive design, and no integrated lead generation.",
    tactic:
      "Engineered to convert from the base up: a mobile-first custom UI/UX reflecting Basil's clean architectural style; performance optimisation and clean code with schema markup for SEO and speed; every page designed to rank, with rich content and fast loads; and clear lead-capture points — sticky CTAs, inquiry forms, and WhatsApp click-to-chat.",
    solutions: [
      "Custom WordPress website for scalability and easy content management",
      "Minimalist aesthetic with high-resolution imagery highlighting Basil Flora and Swaraaj Paradise",
      "Intuitive navigation across projects, legacy, and contact",
      "Responsive across desktop, tablet, and mobile",
      "Clear CTAs and contact forms to convert visitors into inquiries",
    ],
    result:
      "Post-launch the revamped site earned longer session times, stronger mobile traffic, and higher conversion from integrated lead-capture — and a brand perception that finally aligns with Basil Spaces' commitment to quality and transparency.",
    resultPoints: [
      "Increased time-on-site with richer engagement",
      "Improved mobile traffic via responsive design",
      "Higher conversion from integrated lead-capture forms",
      "Brand perception realigned with quality and transparency",
    ],
    image: "/work/basil.png",
    accent: "var(--rad-navy)",
  },
  {
    slug: "ecothereal",
    client: "Ecothereal",
    sector: "Sustainable Fashion · Tote Bags",
    discipline: "media",
    category: "Social Media Management",
    date: "Mar 2025",
    location: "Kolkata, India",
    title: "The art of sustainable elegance, brought to the feed",
    tagline: "A tote bag brand whose Instagram became a digital boutique.",
    platform:
      "Ecothereal is a chic tote-bag brand rooted in sustainability and eco-conscious fashion. They came to RADimpression to build a meaningful Instagram presence that reflects their values and connects with a like-minded audience.",
    challenge:
      "Standing apart in a crowded sustainable-fashion space — the content had to appeal visually and emotionally, telling a sustainability story without sounding generic, while growing organic engagement in the early phase without paid promotion.",
    tactic:
      "Strategic content planning blending storytelling with visual aesthetics, plus organised influencer collaborations and photo/reel shoots aligned to the brand's eco-friendly vibe. We curated the feed to read as one consistent, earthy visual language.",
    solutions: [
      "Hand-picked micro-influencers with authentic, eco-focused lifestyles",
      "Photo and video content shot in natural light with earthy settings",
      "5 high-quality reels showing the bags in natural settings",
      "8 carousel posts on product detail and sustainability messaging",
      "End-to-end management: captions, hashtags, scheduling, tone",
    ],
    result:
      "The campaign drove over 10,000 organic reach with steady growth in followers and engagement. Ecothereal's Instagram now tells a story — not just of stylish totes, but of purpose and planet-first fashion.",
    resultPoints: [
      "10,000+ organic reach on launch content",
      "Steady follower and engagement growth",
      "A consistent, on-brand visual identity across the feed",
    ],
    image: "/work/ecothereal.png",
    accent: "var(--rad-green)",
  },
  {
    slug: "rozella",
    client: "Rozella",
    sector: "Architectural Hardware · Luxury",
    discipline: "web",
    category: "Website Development",
    date: "Mar 2025",
    location: "Kolkata, India",
    title: "Where architectural artistry meets a seamless online experience",
    tagline: "A luxury label's flagship digital portfolio — a showroom in the browser.",
    platform:
      "ROZELLA, the in-house luxury label of MLMC, redefines elegance through premium architectural hardware. We built a bespoke WordPress site that works as both portfolio and lead-generation tool for architects, designers, and homeowners.",
    challenge:
      "Capturing tactile luxury through digital for products that live on physical finishes and texture — while serving architects who want real specs and precision without overwhelming visitors in technical detail.",
    tactic:
      "A digital showroom where every scroll felt luxurious and intentional: minimalist high-end design, clean layouts, custom typefaces, generous whitespace, and product pages for handles, hinges, and bespoke hardware with zoomed details and rich descriptions.",
    solutions: [
      "Minimalist, high-end design with custom typefaces and whitespace",
      "Product showcase pages with zoomable detail and rich descriptions",
      "Downloadable brochures and custom inquiry forms",
      "Full mobile responsiveness and lightning-fast load times",
      "Intuitive backend so the Rozella team manages content with ease",
    ],
    result:
      "A luxury-grade website that mirrors Rozella's design philosophy and now serves as their flagship digital portfolio and a working marketing-and-sales tool — built to impress.",
    resultPoints: [
      "Flagship digital portfolio for the Rozella brand",
      "Works as a lead-generation tool for architects and homeowners",
      "Content managed in-house through an intuitive backend",
    ],
    image: "/work/rozella.png",
    accent: "var(--rad-teal)",
  },
  {
    slug: "tic",
    client: "The Investor Co. (TIC)",
    sector: "Fintech · Trading Simulation",
    discipline: "motion",
    category: "Explainer Video · Motion + Voiceover",
    date: "Mar 2025",
    location: "Kolkata, India",
    title: "Stock-market knowledge, made easy to understand",
    tagline: "A DPIIT-recognised founder's mission, distilled into 60 decisive seconds.",
    platform:
      "The Investor Co. is a DPIIT-recognised fintech startup under the Startup India scheme on a mission to simplify stock-market access for everyday Indians — a simulation-based trading platform with zero capital risk. We partnered to create an explainer video that communicates their mission, platform, and value in a dynamic, engaging way.",
    challenge:
      "Making financial jargon and technical features accessible and non-intimidating for beginners, while projecting the innovation-first ethos a financial brand must also be trusted by.",
    tactic:
      "A story-driven problem-solution narrative: opening with the fear of losing money trading, closing on TIC's risk-free simulated platform — told in bold, clean animation that carries both energy and reliability.",
    solutions: [
      "Scripted and storyboarded for clarity and emotional resonance",
      "Custom motion graphics and iconography on TIC's branding",
      "Professional voiceover with authority and warmth",
      "Real-world scenarios and platform walkthroughs for relatability",
      "Optimised for website, social, and investor decks",
    ],
    result:
      "The 60–90 second film became a core outreach asset — helping TIC secure greater visibility, engage first-time users, and attract investor attention as the go-to introduction to the platform.",
    resultPoints: [
      "Became the core introduction to the product",
      "Greater visibility across website, social, and decks",
      "Engaged first-time investors and students",
    ],
    image: "/work/tic-banner.jpg",
    accent: "var(--rad-gold)",
  },
  {
    slug: "samkit",
    client: "Samkit Infosystems",
    sector: "Global ERP Consulting",
    discipline: "web",
    category: "Website Design + Development",
    date: "Jun 2025",
    location: "London, UK",
    title: "A global ERP consultancy re-platformed in ten days",
    tagline: "From Figma to a live, responsive WordPress build — inside a tight window.",
    platform:
      "Samkit Infosystems is a global ERP consulting powerhouse based in London, specialising in Oracle ERP Cloud solutions. They needed a modern, fast, professional website to match their international identity and technical expertise — translating their Figma design into a live WordPress platform within a 10-day delivery window.",
    challenge:
      "A tight 10-day turnaround with no room for delay, pixel-perfect fidelity from the provided Figma design, and technical optimisation on top of a highly modular front-end.",
    tactic:
      "A precise execution plan from design to code: Figma to clean, semantic HTML and CSS, integrated into a custom WordPress theme with complete responsiveness, speed and performance optimisation, contact forms, and a simple CMS for the Samkit team.",
    solutions: [
      "Figma design translated to clean, semantic HTML/CSS",
      "Integrated into a custom WordPress theme",
      "Full mobile responsiveness and cross-browser compatibility",
      "Optimised loading speed and performance",
      "Contact forms plus a simple CMS for in-house updates",
    ],
    result:
      "A professional digital identity in step with Samkit's global presence — an efficient client touchpoint and internal resource hub, delivered from design to launch in 10 days.",
    resultPoints: [
      "Delivered from design to live in 10 days",
      "Efficient client touchpoint and resource hub",
      "Reflects a global, tech-first B2B identity",
    ],
    image: "/work/samkit.png",
    accent: "var(--rad-charcoal)",
  },
  {
    slug: "supreme-surgico",
    client: "Supreme Surgico",
    sector: "Medical Devices · Surgical Instruments",
    discipline: "brand",
    category: "Website Revamp + Logo Redesign",
    date: "May 2025",
    location: "Delhi, India",
    title: "Refreshed identity and presence for a trusted medical maker",
    tagline: "A logo and website rebuilt to boost trust and engagement in healthcare.",
    platform:
      "Supreme Surgico is a trusted manufacturer of high-quality surgical instruments. To match their strong industry presence with a modern digital identity, we redesigned their logo and revamped their website for stronger branding and lead generation.",
    challenge:
      "The old site lacked visual clarity, modern structure, and brand recall; the logo felt dated, with inconsistent branding across platforms. The task was to modernise without losing the trust and credibility built over years in the medical field.",
    tactic:
      "A two-part approach: refresh the visual identity and upgrade the platform. A clean, modern logotype with a subtle icon reflecting medical precision, and a fully custom WordPress build focused on product display, certification highlights, and contact CTAs.",
    solutions: [
      "Clean, modern logo with a subtle medical-precision icon",
      "Fully custom WordPress website replacing the outdated design",
      "Emphasis on product display, certifications, and CTAs",
      "Mobile-responsive, SEO-friendly, and built for speed",
      "Easy-to-manage CMS for internal product and content updates",
    ],
    result:
      "Supreme Surgico now carries a refreshed identity and digital presence trusted by clients and scalable for growth — reinforcing their reputation in the global surgical-instruments industry.",
    resultPoints: [
      "Refreshed logo and consistent cross-platform branding",
      "Trust signals: certifications, experience, product quality",
      "Clear conversion path through inquiry forms and navigation",
    ],
    image: "/work/supreme.png",
    accent: "var(--rad-red)",
  },
  {
    slug: "jbc",
    client: "JBC International",
    sector: "Sustainable Erosion Control",
    discipline: "web",
    category: "Website Revamp · WordPress",
    date: "Aug 2025",
    location: "Kerala, India",
    title: "A greener digital storefront for a global leader in erosion control",
    tagline: "Complex technical specs, redesigned into a language anyone can read.",
    platform:
      "We delivered a complete digital transformation for JBC International, a global leader in sustainable erosion-control solutions — replacing an outdated HTML site with a modern, secure, user-friendly WordPress experience that reflects their innovative, eco-conscious mission.",
    challenge:
      "Crucial technical specifications lived in dense text and tables — overwhelming for prospects and hard to scan when comparing solutions or grasping product advantages quickly.",
    tactic:
      "Turned complex data into a clear visual language with custom graphics: layered cross-section diagrams showing product construction, product-in-action infographics, and scannable icons for key features — set in a green-and-soil-brown palette aligned to the brand.",
    solutions: [
      "A complete visual and structural overhaul of the site",
      "Custom illustrations for complex product specifications",
      "New UI in a brand-aligned green and soil-brown palette",
      "Content protection for proprietary text and images",
      "A streamlined contact form with advanced spam protection",
    ],
    result:
      "Complex product information became immediately understandable, so clients grasped each product's unique value far faster — improving the experience and driving more informed sales inquiries.",
    resultPoints: [
      "Specifications now scannable and immediately understandable",
      "Faster grasp of each product's unique value",
      "More informed sales inquiries through the funnel",
    ],
    image: "/work/jbc.png",
    accent: "var(--rad-green)",
  },
  {
    slug: "goyal",
    client: "Goyal Piles Laser Centre",
    sector: "Healthcare · Laser Clinic",
    discipline: "web",
    category: "Website Redesign + CMS",
    date: "Mar 2025",
    location: "Delhi, India",
    title: "A Delhi clinic's digital presence, rebuilt around patient trust",
    tagline: "Conversion-optimised, CMS-driven, and built to turn trust into bookings.",
    platform:
      "Goyal Piles Laser Centre — one of Delhi's most reputed clinics for piles and fissure treatment, caring since 1989 and named Best Laser Centre in North India at the Global Excellence Awards 2019, led by Dr. Sushil Goyal — came to us to revamp their digital presence with a modern site and a smart CMS focused on generating patient leads.",
    challenge:
      "The existing website was outdated, non-responsive, and not patient-centric — it wasn't driving inquiries despite the clinic's excellent offline reputation.",
    tactic:
      "A conversion-optimised site that communicates credibility and care: SEO-friendly layout, improved speed and navigation, CMS-driven treatment pages, FAQs, and testimonials, plus clear CTAs like Book Consultation and Request a Call Back with WhatsApp integration.",
    solutions: [
      "Fresh, SEO-friendly layout with better speed and navigation",
      "CMS-driven structure for treatments, FAQs, and testimonials",
      "Strategic CTAs: Book Consultation, Request a Call Back, WhatsApp",
      "Prominent trust factors: awards, experience, patient reviews",
      "Mobile-first responsive design accessible to all",
    ],
    result:
      "Post-launch the clinic saw a noticeable increase in online consultations and appointment requests — a digital presence now matching their excellence in patient care.",
    resultPoints: [
      "A noticeable increase in online consultations",
      "More appointment requests through clear CTAs",
      "Credibility reinforced with awards, reviews, and expertise",
    ],
    image: "/work/ecothereal-banner.jpg",
    accent: "var(--rad-teal)",
  },
];

export interface ConceptBrand {
  slug: string;
  name: string;
  sector: string;
  discipline: "brand";
  title: string;
  tagline: string;
  story: string;
  details: string[];
  flavors?: string[];
  credits?: { label: string; name: string }[];
  image: string;
  accent: string;
}

export const conceptBrands: ConceptBrand[] = [
  {
    slug: "olia",
    name: "Olia",
    sector: "Skincare",
    discipline: "brand",
    title: "Meet Olia: unveil your natural luminosity.",
    tagline: "A skincare brand built on the gentle power of nature's finest oils.",
    story:
      "In a crowded skincare market, Olia champions the gentle power of nature's finest oils. The identity is rooted in 'illuminated nature' — restoring the skin's radiance through pure, scientifically perfected botanical oils. The logo, a stylised droplet with an infused leaf, captures the fusion of nature and science, applied across packaging, web, and every touchpoint in soft-gold accented serenity.",
    details: [
      "Identity concept: 'illuminated nature'",
      "Visual language: Pure, Calm, Luminous",
      "Serene soft-light photography and spacious design",
    ],
    flavors: undefined,
    credits: undefined,
    image: "/portfolio/olia.jpg",
    accent: "var(--rad-gold)",
  },
  {
    slug: "fizzify",
    name: "Fizzify",
    sector: "Flavoured Sparkling Drinks",
    discipline: "brand",
    title: "A fresh spark in flavoured sparkling drinks.",
    tagline: "A soda brand crafted to show how branding can burst with energy.",
    story:
      "Fizzify isn't just soda — it's a bold new twist on sparkling refreshment. Vibrant, zesty, and made for moments that pop, the concept brand was built to demonstrate RADimpression's brand strategy, identity, packaging, and web capabilities end to end.",
    flavors: [
      "Citrus Rush — a zesty blend of orange and lemon that wakes up the senses",
      "Tropical Tango — pineapple and passion fruit in a dance of sweet and tangy",
      "Berry Buzz — blueberry and raspberry for a juicy, fizzy burst",
    ],
    details: [
      "Brand strategy, brand identity, packaging design, and website development",
      "A full shakeout of creative and web capabilities",
    ],
    credits: [
      { label: "Brand Strategy & Direction", name: "Prakshi Jain, Mihir Tale" },
      { label: "Art Direction & Design", name: "Yogiraj Pore" },
      { label: "Web Development", name: "Mokshi Jain, Deepesh Kamble" },
      { label: "Copywriting", name: "Mihir Tale" },
    ],
    image: "/portfolio/fizzify.jpg",
    accent: "var(--rad-navy)",
  },
  {
    slug: "chompit",
    name: "Chompit",
    sector: "Kettle-Cooked Chips",
    discipline: "brand",
    title: "Ignite your bite.",
    tagline: "A flavour rebellion for the thrill-seekers and the flavour-obsessed.",
    story:
      "Chompit is a concept brand built to showcase RADimpression's creative capabilities: thick-cut, kettle-cooked chips with audacious flavours that hit different — a full identity, packaging, and campaign expressed through bold, energetic design.",
    flavors: [
      "Tangy Jalapeño — a sharp, sour trip with a wicked jalapeño kick",
      "Cheesy Peri Peri — rich, savory cheese slammed with a fiery peri peri blitz",
      "Masala Punch — a full-blown explosion of iconic desi spice",
    ],
    details: [
      "A concept brand to showcase creative capability",
      "Bold identity, packaging, and campaign system",
    ],
    credits: undefined,
    image: "/portfolio/chompit.jpg",
    accent: "var(--rad-red)",
  },
];

export function bySlug(slug: string): CaseStudyProject | undefined {
  return workProjects.find((w) => w.slug === slug);
}

export const allWork = [...workProjects];
