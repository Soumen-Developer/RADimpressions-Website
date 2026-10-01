// lib/types.ts — shared content model. These types are the contract between
// templates and the CMS boundary.

export type PillarSlug =
  | "strategy"
  | "brand-communication"
  | "media"
  | "complete-support";

export type ServiceSlug = PillarSlug;

export type IndustrySlug =
  | "hospitality"
  | "manufacturing"
  | "real-estate"
  | "fitness-wellness"
  | "education"
  | "healthcare"
  | "ecommerce";

export type CtaVariant = "research" | "consulting" | "work";

export type InsightFormat =
  | "argument"
  | "playbook"
  | "commentary"
  | "question";

export type InsightCategory =
  | "positioning"
  | "brand"
  | "media"
  | "marketing-ops"
  | "industry-notes"
  | "craft";

export interface CapabilityCluster {
  cluster: string;
  items: string[];
}

export interface ProcessNode {
  name: string;
  description: string;
  duration?: string;
  youProvide?: string;
  youReceive?: string;
}

export interface FitRow {
  text: string;
  explanation?: string;
}

export interface Deliverable {
  artefact: string;
  label: string;
}

export interface ServicePage {
  slug: ServiceSlug;
  name: string;
  promise: string;
  metaTitle: string;
  metaDescription: string;
  heroSymptom: string;
  diagnosis: string[];
  capabilities: CapabilityCluster[];
  fit: {
    for: FitRow[];
    notFor: FitRow[];
  };
  process: ProcessNode[];
  deliverables: Deliverable[];
  boundary: {
    heading: string;
    body: string;
    linkTo: ServiceSlug;
    linkLabel: string;
  };
  faqs: FaqItem[];
  ctaVariant: CtaVariant;
  marketplace: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface MatrixProblem {
  collision: string[];
  whatWeDo: string[];
  goodLooksLike: string[];
  notOptimisedFor: string[];
}

export interface MatrixScenario {
  intro: string;
  body: string;
}

export interface MatrixPage {
  industry: IndustrySlug;
  service: ServiceSlug;
  name: string; // "<Service> for <industry>"
  metaTitle: string;
  metaDescription: string;
  problem: MatrixProblem;
  scenario: MatrixScenario;
  proofType: "scenario" | "case-study";
  linkedCaseStudySlug?: string;
}

export interface BuyingPanel {
  label: string;
  body: string;
}

export interface IndustryPage {
  slug: IndustrySlug;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroBody: string;
  buying: BuyingPanel[];
  oftenWrong: { label: string; body: string }[];
  start: { pillar: PillarSlug; reasoning: string };
  pillarBlurbs: Record<PillarSlug, string>;
  channels: { channel: string; reasoning: string }[];
  notWork: string[];
  faqs: FaqItem[];
  characterisation: string;
}

export type InsightBlock =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "list"; items: string[] }
  | { t: "quote"; text: string }
  | { t: "counter"; title: string; text: string }
  | { t: "useIf"; title: string; items: string[] }
  | { t: "notFix"; title: string; items: string[] }
  | { t: "limit"; title: string; text: string };

export interface Insight {
  slug: string;
  title: string;
  format: InsightFormat;
  category: InsightCategory;
  eyebrow: string;
  standfirst?: string;
  directAnswer?: string;
  shortVersion?: string[];
  checkInOrder?: string[];
  whatToDo?: string[];
  whenNotTheProblem?: string;
  linkedPage: string;
  linkedPageLabel: string;
  readTime: string;
  date: string;
  author?: string;
  artefact?: { kind: string; description: string };
  relatedQuestions?: string[];
  body: InsightBlock[];
  ctaVariant: CtaVariant;
  featured?: boolean;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: IndustrySlug;
  service: PillarSlug;
  title: string;
  oneLine: string;
  problem: string[];
  thinking: string[];
  strategy: string[];
  executionAssets: { src: string; caption: string }[];
  metrics: { value: string; label: string; source: string }[];
  outcomeQualitative: string[];
  quote?: { text: string; name: string; role: string; company: string };
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string[];
  bio: string;
}