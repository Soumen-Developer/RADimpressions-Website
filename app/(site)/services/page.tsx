// app/(site)/services/page.tsx — the services hub (SITEMAP D.6, SVCH-S1..S6).
// Teaches the model, then routes. Not a menu.

import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, SectionHeading } from "@/components/ui/primitives";
import { PageLead } from "@/components/ui/page-lead";
import { CtaBand } from "@/components/blocks/cta-band";
import { PillarCycle } from "@/components/blocks/pillar-cycle";
import { serviceContent } from "@/lib/content";
import { pillarColourVar } from "@/components/ui/primitives";
import type { PillarSlug } from "@/lib/types";

export const metadata: Metadata = {
  title: "Services — RADIMPRESSION",
  description:
    "Four disciplines under one roof — Strategy, Brand & Design, Marketplace & Performance, and Web & Full Service. Position, then language, then distribution, as a single accountable team.",
};

const whoFor: Record<PillarSlug, string> = {
  strategy: "For the business that feels busy but stuck.",
  "brand-communication": "For the brand whose strategy isn't showing up in the work.",
  media: "For the business already producing content that deserves an audience.",
  "complete-support": "For the growing business whose marketing is fragmented across vendors.",
};

const orderSteps = [
  {
    pillar: "STRATEGY",
    label: "Decides what the business is for.",
    breaks: "Breaks when missing: spend without a position.",
    cls: "var(--pillar-strategy)",
    text: "var(--pillar-strategy-text)",
  },
  {
    pillar: "BRAND COMMUNICATION",
    label: "Decides how the brand is said.",
    breaks: "Breaks when missing: output that drifts from the message.",
    cls: "var(--pillar-comms)",
    text: "var(--pillar-comms-text)",
  },
  {
    pillar: "MEDIA",
    label: "Decides how it's distributed.",
    breaks: "Breaks when missing: amplification of a weak foundation.",
    cls: "var(--pillar-media)",
    text: "var(--pillar-media-text)",
  },
];

const chooseRows = [
  "If you can't state in one sentence what you're better at than the alternative —",
  "If you can state it, but nothing you publish sounds like it —",
  "If you can state it, your assets carry it, and growth is still flat —",
  "If more than one of those is true —",
];

const choosePillar: PillarSlug[] = ["strategy", "brand-communication", "media", "complete-support"];

export default function ServicesHubPage() {
  const pillars = serviceContent.all;

  return (
    <>
      {/* SVCH-S1 — hero */}
      <PageLead
        eyebrow="WHAT WE DO"
        title="Four ways in. One order that works."
        intro="You can enter at any pillar. What you can't do is skip the ones underneath it, and most of the marketing that fails does exactly that."
        plate="PLATE 03"
      />

      {/* SVCH-S2 — the order diagram */}
      <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-soft)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="THE ORDER" title="Position, then language, then distribution." className="mb-10" />
          <ol className="grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--rule)] lg:grid-cols-3">
            {orderSteps.map((s, i) => (
              <li key={s.pillar} className="bg-[var(--bg-page)] p-7">
                <div className="flex items-center justify-between">
                  <span className="mono-sm text-[var(--text-muted)]">STEP {i + 1}</span>
                  <span className="inline-block h-3 w-3" style={{ background: s.cls }} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.01em] text-[var(--text-primary)]">{s.pillar}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-body)]">{s.label}</p>
                <p className="mt-3 border-t border-[var(--rule-soft)] pt-3 text-sm leading-relaxed text-[var(--text-muted)]">{s.breaks}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <Eyebrow>THE HOLDING PILLAR</Eyebrow>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.01em] text-[var(--text-primary)]">Complete Support</h3>
              <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-[var(--text-body)]">
                Strategy, Brand Communication, and Media run as one system with a single accountable line. Not a
                bundle and never a discount — an integration argument made by one team, reviewed quarterly.
              </p>
              <Link href="/services/complete-support" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--action)] hover:underline">
                The Complete Support page →
              </Link>
            </div>
            <div className="max-w-[420px] justify-self-center">
              <PillarCycle />
            </div>
          </div>
        </Container>
      </section>

      {/* SVCH-S3 — the four pillars, expanded */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="THE PILLARS, EXPANDED" title="Each pillar, read once." intro="Alternating rows: what the pillar is built from, who it is for, and the boundary it respects." className="mb-10" />
          <div className="space-y-16">
            {pillars.map((p, i) => (
              <article key={p.slug} className="grid gap-10 lg:grid-cols-[7fr_6fr] lg:items-start">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3">
                    <span className="inline-block h-3 w-3" style={{ background: pillarColourVar(p.slug) }} aria-hidden="true" />
                    <h3 className="text-[clamp(28px,3.6vw,44px)] font-semibold leading-tight tracking-[-0.02em] text-[var(--text-primary)]">{p.name}</h3>
                  </div>
                  <p className="mt-2 text-lg font-medium text-[var(--text-body)]">{p.promise}</p>
                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-[var(--text-body)]">
                    {p.diagnosis.slice(0, 2).map((d) => (
                      <p key={d} className="max-w-[58ch]">{d}</p>
                    ))}
                  </div>
                  <p className="mt-5 max-w-[52ch] border-t border-[var(--rule-soft)] pt-4 text-sm text-[var(--text-muted)]">
                    <span className="mono-sm mr-2 !text-[10px] text-[var(--text-primary)]">WHO THIS IS FOR</span>{whoFor[p.slug]}
                  </p>
                  <Link href={`/services/${p.slug}`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--action)] hover:underline">
                    Read the approach →
                  </Link>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex h-full flex-col rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-soft)] p-6" style={{ borderLeftWidth: "4px", borderLeftColor: pillarColourVar(p.slug) }}>
                    <div className="flex flex-wrap gap-6">
                      {p.capabilities.map((c) => (
                        <div key={c.cluster} className="min-w-[150px] flex-1">
                          <div className="eyebrow !text-[10px]">{c.cluster.toUpperCase()}</div>
                          <ul className="mt-2 space-y-1.5">
                            {c.items.map((item) => (
                              <li key={item} className="text-sm leading-snug text-[var(--text-body)]">{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* SVCH-S4 — how to choose */}
      <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-soft)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="HOW TO CHOOSE" title="A decision aid, written as advice." intro="No quiz and no widget — four sentences that do the choosing." className="mb-10" />
          <ul className="border-t border-[var(--rule)]">
            {chooseRows.map((row, i) => (
              <li key={row} className="grid gap-2 border-b border-[var(--rule)] py-6 sm:grid-cols-[auto_1fr] sm:items-baseline">
                <span className="mono-sm text-[var(--action)]">{String(i + 1).padStart(2, "0")}</span>
                <p className="max-w-[72ch] text-lg leading-relaxed text-[var(--text-primary)]">
                  {row} <span className="font-semibold" style={{ color: pillarColourVar(choosePillar[i]) }}>{claimPillar(choosePillar[i])}</span>
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* SVCH-S5 — cross-pillar movement */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="CROSS-PILLAR MOVEMENT" title="It isn't a funnel. It's a cycle." />
          <div className="mx-auto mt-12 max-w-[720px]" aria-hidden="true">
            <PillarCycle />
          </div>
          <p className="mx-auto mt-8 max-w-[52ch] text-center text-sm leading-relaxed text-[var(--text-muted)]">
            A Media client who plateaus has a Strategy problem. A Strategy client with a finished plan needs Brand
            Communication to build it. The cycle is how the work actually goes — we say so at the start.
          </p>
        </Container>
      </section>

      <CtaBand variant="research" />
    </>
  );
}

function claimPillar(slug: PillarSlug): string {
  return {
    strategy: "Strategy.",
    "brand-communication": "Brand Communication.",
    media: "Media.",
    "complete-support": "Complete Support.",
  }[slug];
}