// lib/seo.ts — JSON-LD builders + metadata helpers (SITEMAP PART H).
// siteUrl is single-sourced from lib/brand.ts; assets are plain string URLs
// because this module only composes JSON for <script> injection.

import { brand } from "@/lib/brand";
import type { FaqItem } from "@/lib/types";

export const siteUrl = brand.siteUrl;
export const orgName = brand.name;

export type JsonLd =
  | Record<string, unknown>
  | Record<string, unknown>[];

export function orgJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: brand.name,
    url: siteUrl,
    email: brand.email,
    telephone: brand.phone.replace(/\s/g, ""),
    slogan: brand.tagline,
    // Logo is a temporary wordmark until the logo file set lands (TK-18).
  };
}

export function webSiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: brand.name,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/insights?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): Record<string, unknown>[] {
  return items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${siteUrl}${item.path}`,
  }));
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbJsonLd(crumbs),
  };
}

export function serviceSchema(
  name: string,
  description: string
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    provider: { "@id": `${siteUrl}/#organization` },
    url: `${siteUrl}/services/`,
    areaServed: "IN",
    availableChannel: { "@type": "ServiceChannel", servicePhone: brand.phone },
  };
}

export function articleSchema(args: {
  headline: string;
  description: string;
  date?: string;
  path: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.headline,
    description: args.description,
    // datePublished/dateModified are omitted when the content only has a
    // publication period label ("Q1") — never emit a fabricated ISO date.
    ...(args.date
      ? { datePublished: args.date, dateModified: args.date }
      : {}),
    url: `${siteUrl}${args.path}`,
    isPartOf: { "@id": `${siteUrl}/#website` },
    author: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: `${siteUrl}${args.path}`,
  };
}

export function faqSchema(
  questions: { question: string; answer: string }[]
): Record<string, unknown> | null {
  // FAQPage schema ships only when at least two real Q/A pairs exist. A
  // stranded pair with a placeholder answer never ships.
  const real = questions.filter((q) => q.question.trim() && q.answer.trim());
  if (real.length < 2) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: real.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}

export function itemListSchema(items: { name: string; path: string }[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `${siteUrl}${item.path}`,
    })),
  };
}

export type { FaqItem };