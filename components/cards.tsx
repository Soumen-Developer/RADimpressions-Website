// components/cards.tsx — card components for list pages.

import Link from "next/link";
import { Tag } from "@/components/ui/primitives";
import { pillarColourVar } from "@/components/ui/primitives";
import type { Insight, CaseStudy, PillarSlug, IndustrySlug } from "@/lib/types";

/* ── InsightCard ───────────────────────────────────────────────────────── */

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="group flex h-full flex-col rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-panel)]"
    >
      <div className="flex items-center justify-between gap-3">
        <Tag tone="soft" className="!text-[10px]">
          {insight.format}
        </Tag>
        <span className="mono-sm text-[var(--text-muted)]">{insight.readTime} READ</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold leading-snug tracking-[-0.01em] text-[var(--text-primary)]">
        {insight.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-body)]">
        {insight.standfirst ?? insight.directAnswer}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-[var(--rule-soft)] pt-4">
        <span className="mono-sm text-[var(--text-muted)]">
          {insight.category.toUpperCase()} · {insight.date}
        </span>
        <span className="text-[var(--action)] transition-transform group-hover:translate-x-0.5" aria-hidden="true">
          →
        </span>
      </div>
    </Link>
  );
}

/* ── IndustryCard ──────────────────────────────────────────────────────── */

export function IndustryCard({
  name,
  characterisation,
  startPillar,
  href,
}: {
  slug: IndustrySlug;
  name: string;
  characterisation: string;
  startPillar: PillarSlug;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-panel)]"
    >
      <div className="flex items-center gap-2.5">
        <span className="inline-block h-2.5 w-2.5" style={{ background: pillarColourVar(startPillar) }} aria-hidden="true" />
        <span className="mono-sm text-[var(--text-muted)]">START WITH {startPillar.replace("-", " ").toUpperCase()}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-[var(--text-primary)]">{name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-body)]">{characterisation}</p>
      <div className="mt-5 flex items-center justify-between border-t border-[var(--rule-soft)] pt-4">
        <span className="text-sm font-medium text-[var(--action)]">Read the industry page</span>
        <span className="text-[var(--action)] transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
      </div>
    </Link>
  );
}

/* ── MatrixCard ────────────────────────────────────────────────────────── */

export function MatrixCard({
  industryName,
  serviceSlug,
  serviceName,
  href,
}: {
  industrySlug: IndustrySlug;
  industryName: string;
  serviceSlug: PillarSlug;
  serviceName: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-soft)] p-5 transition-all hover:-translate-y-0.5 hover:bg-[var(--bg-page)] hover:shadow-[var(--shadow-panel)]"
    >
      <div className="flex items-center justify-between">
        <span className="mono-sm text-[var(--text-muted)]">{industryName}</span>
        <span className="inline-block h-2.5 w-2.5" style={{ background: pillarColourVar(serviceSlug) }} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold leading-snug text-[var(--text-primary)]">{industryName} × {serviceName}</h3>
      <span className="text-sm font-medium text-[var(--action)]">Read the page →</span>
    </Link>
  );
}

/* ── CaseCard ──────────────────────────────────────────────────────────── */

export function CaseCard({
  study,
  mode = "case-study",
  href,
}: {
  study: CaseStudy;
  mode?: "case-study" | "scenario";
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-panel)]"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-block h-2.5 w-2.5" style={{ background: pillarColourVar(study.service) }} aria-hidden="true" />
        <span className="mono-sm text-[var(--text-muted)]">{study.client}</span>
        {mode === "scenario" ? (
          <span className="rounded-[var(--radius-sm)] bg-[var(--bg-tint)] px-2 py-0.5 mono-sm !text-[10px] text-[var(--text-primary)]">
            WORKED SCENARIO — NOT A CLIENT
          </span>
        ) : null}
      </div>
      <h3 className="mt-4 text-xl font-semibold leading-snug text-[var(--text-primary)]">{study.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-body)]">{study.oneLine}</p>
      <span className="mt-5 text-sm font-medium text-[var(--action)]">Read the case study →</span>
    </Link>
  );
}

/* ── TeamMemberCard ────────────────────────────────────────────────────── */

export function TeamMemberCard({
  name,
  role,
  focus,
  bio,
}: {
  name: string;
  role: string;
  focus: string[];
  bio: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--bg-soft)]">
        <span className="display text-base font-bold text-[var(--text-muted)]">
          {name.split(" ").map((n) => n[0]).join("")}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">{name}</h3>
      <div className="mono-sm mt-0.5 text-[var(--action)]">{role}</div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {focus.map((f) => (
          <Tag key={f} tone="outline" className="!text-[10px]">{f}</Tag>
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[var(--text-body)]">{bio}</p>
    </div>
  );
}