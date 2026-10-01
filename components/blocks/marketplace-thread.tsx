// components/blocks/marketplace-thread.tsx — the three pillars that do the
// work on a matrix page (strategy, brand-communication, media) drawn as a
// colour thread with the boundary that leads to Complete Support.

import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import { pillarColourVar } from "@/components/ui/primitives";
import type { PillarSlug } from "@/lib/types";

const thread: { slug: PillarSlug; name: string; promise: string; note: string }[] = [
  { slug: "strategy", name: "Strategy", promise: "We help you figure it out.", note: "The position this page starts from." },
  { slug: "brand-communication", name: "Brand Communication", promise: "We help you say it.", note: "The language that carries the position." },
  { slug: "media", name: "Media", promise: "We help you scale it.", note: "The spend that amplifies both." },
];

export function MarketplaceThread() {
  return (
    <section className="border-y border-[var(--rule-soft)] bg-[var(--bg-soft)]">
      <Container className="py-16">
        <div className="eyebrow mb-8">THE THREAD — THREE PILLARS DO THE WORK</div>
        <div className="grid gap-6 lg:grid-cols-3">
          {thread.map((t, i) => (
            <div key={t.slug} className="rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-5">
              <div className="flex items-center gap-3">
                <span className="inline-block h-3 w-3" style={{ background: pillarColourVar(t.slug) }} aria-hidden="true" />
                <span className="mono-sm text-[var(--text-muted)]">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">{t.name}</h3>
              <p className="mt-0.5 text-sm font-medium" style={{ color: t.slug === "brand-communication" ? "var(--pillar-comms-text)" : t.slug === "media" ? "var(--pillar-media-text)" : "var(--pillar-strategy-text)" }}>
                {t.promise}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-body)]">{t.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="inline-block h-3 w-3" style={{ background: pillarColourVar("complete-support") }} aria-hidden="true" />
            <p className="text-sm text-[var(--text-body)]">
              <span className="font-semibold text-[var(--text-primary)]">Complete Support</span> holds all three — when the thread needs one owner.
            </p>
          </div>
          <Link href="/services/complete-support" className="text-sm font-medium text-[var(--action)] hover:underline">
            The fourth pillar →
          </Link>
        </div>
      </Container>
    </section>
  );
}