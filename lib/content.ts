// lib/content.ts — the CMS boundary.
// Every page reads content through this module. Templates never know where the
// copy came from. When Payload is wired up, these loaders read from the CMS
// instead of static modules and the templates stay untouched.

import type { PillarSlug, IndustrySlug, CtaVariant } from "@/lib/types";
import * as services from "@/content/services";
import * as industries from "@/content/industries";
import * as matrix from "@/content/matrix";
import * as home from "@/content/home";
import * as howWeWork from "@/content/how-we-work";
import * as consulting from "@/content/consulting";
import * as insights from "@/content/insights";
import { ALL_FAQS } from "@/content/faq";
import * as about from "@/content/about";
import * as misc from "@/content/misc";

export type {
  ServicePage,
  CapabilityCluster,
  ProcessNode,
  FitRow,
  Deliverable,
} from "@/lib/types";

export const serviceContent = {
  all: services.all,
  get: (slug: PillarSlug) => services.bySlug(slug),
};

export const industryContent = {
  all: industries.all,
  get: (slug: IndustrySlug) => industries.bySlug(slug),
};

export const matrixContent = {
  all: matrix.all,
  get: (industry: IndustrySlug, service: PillarSlug) =>
    matrix.byPair(industry, service),
};

export const homeContent = home;

export const howWeWorkContent = howWeWork;

export const consultingContent = consulting;

export const insightsContent = {
  all: insights.all,
  get: (slug: string) => insights.bySlug(slug),
  featuredTop: insights.featuredTop,
};

export const faqContent = {
  all: ALL_FAQS,
  byScope: (scope: string[]) => ALL_FAQS.filter((f) => scope.includes(f.scope)),
};

export const aboutContent = about;

export const miscContent = misc;

/** Banned vocabulary — enforced in the CMS hook and by a lint rule. */
export const BANNED: string[] = [
  "passionate",
  "cutting-edge",
  "synergy",
  "game-changing",
  "one-stop shop",
  "leverage",
  "unlock",
  "elevate",
  "seamless",
  "robust",
  "world-class",
  "best-in-class",
  "solutions provider",
  "take your business to the next level",
  "in today's digital landscape",
  "we pride ourselves",
];

export function containsBanned(text: string): string | null {
  const lower = text.toLowerCase();
  return BANNED.find((w) => lower.includes(w)) ?? null;
}

// Word count enforcement for matrix pages — the build fails if the RENDERED
// page (data copy + the always-rendered template copy) falls under 600 words.
// Template copy is single-sourced in content/matrix-template.ts and counted
// by the same strings the templates render, so the count cannot drift.
import { composedMatrixTemplateWordCount } from "@/content/matrix-template";

export function matrixWordCount(m: matrix.MatrixPage): number {
  const parts = [
    m.problem.collision.join(" "),
    m.problem.whatWeDo.join(" "),
    m.problem.goodLooksLike.join(" "),
    m.problem.notOptimisedFor.join(" "),
    m.scenario.intro,
    m.scenario.body,
  ];
  return parts.join(" ").split(/\s+/).filter(Boolean).length;
}

export function matrixRenderedWordCount(m: matrix.MatrixPage): number {
  return matrixWordCount(m) + composedMatrixTemplateWordCount();
}

export function assertMatrixWordCount(m: matrix.MatrixPage): void {
  // Page-specific FAQ answers are appended by the template from the industry
  // and service pools; they render too. The floor is enforced on the rendered
  // composition so thin pages fail the build.
  const count = matrixRenderedWordCount(m);
  const floor = 600;
  if (count < floor) {
    throw new Error(
      `Matrix page ${m.industry}/${m.service} renders "${count}" words — the "${floor}"' word floor is a build failure. Expand the content in content/matrix.ts.`
    );
  }
}

// Re-exported CtaVariant for convenience at call sites.
export type { CtaVariant };