// components/blocks/pillar-card.tsx — the four pillar cards.

import Link from "next/link";
import { pillarColourVar } from "@/components/ui/primitives";
import type { PillarSlug } from "@/lib/types";

export interface PillarCardData {
  slug: PillarSlug;
  name: string;
  promise: string;
  body: string;
  href?: string;
}

export function PillarCard({ data, className }: { data: PillarCardData; className?: string }) {
  const colour = pillarColourVar(data.slug);
  const href = data.href ?? `/services/${data.slug}`;
  return (
    <Link
      href={href}
      className={`group relative flex h-full flex-col rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-panel)] ${className ?? ""}`}
    >
      <span className="absolute inset-x-0 top-0 h-1" style={{ background: colour }} aria-hidden="true" />
      <div className="flex items-center justify-between">
        <span className="inline-block h-2.5 w-2.5" style={{ background: colour }} aria-hidden="true" />
        <span className="mono-sm text-[var(--text-muted)]">{String(["strategy","brand-communication","media","complete-support"].indexOf(data.slug) + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-[-0.01em] text-[var(--text-primary)]">{data.name}</h3>
      <p className="mt-1 text-lg font-medium" style={{ color: `var(--pillar-${data.slug}-text)` }}>
        {data.promise}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-body)]">{data.body}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--action)]">
        See the pillar
        <svg viewBox="0 0 12 12" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5"><path d="M2 6h8m0 0L7 3m3 3-3 3" /></svg>
      </span>
    </Link>
  );
}