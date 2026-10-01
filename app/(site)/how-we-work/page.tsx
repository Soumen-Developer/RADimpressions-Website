// app/(site)/how-we-work/page.tsx — the operating model (SITEMAP D.2, seven
// sections HWW-S1..S7). The process section converts the diagram into a
// contract by naming duration, obligation, and deliverable at every stage.

import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { PageLead } from "@/components/ui/page-lead";
import { CtaBand } from "@/components/blocks/cta-band";
import { PillarCycle } from "@/components/blocks/pillar-cycle";
import { brand } from "@/lib/brand";
import {
  hero,
  processStages,
  paidSession,
  cycle,
  expectations,
  linked,
} from "@/content/how-we-work";

export const metadata: Metadata = {
  title: "How we work — RADIMPRESSION",
  description:
    "The operating model, as a contract: brand research in ten minutes, a reply in 72 hours, a recorded teardown, a paid call, onboarding, and the work.",
};

export default function HowWeWorkPage() {
  return (
    <>
      {/* HWW-S1 — hero */}
      <PageLead
        eyebrow="HOW WE WORK"
        title={hero.h1}
        intro={hero.sub}
        plate="PLATE 02"
        containerClassName="py-16 sm:py-20 lg:pt-[240px] lg:pb-24"
      />

      {/* HWW-S2 — the process, as a contract */}
      <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-soft)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="THE FULL PROCESS — THE CONTRACT"
            title="What it's actually like to work with us."
            intro="Every stage names its duration, its obligation, and its deliverable. A stage with nothing required of you renders the word nothing — that honesty is the point."
            className="mb-10"
          />
          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {processStages.map((s) => (
              <article key={s.index} className="flex flex-col rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6">
                <div className="flex items-center justify-between">
                  <span className="mono-sm text-[var(--action)]">{s.index}</span>
                  <span className="mono-sm text-[var(--text-muted)]">{s.duration}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">{s.stage}</h3>
                <div className="mt-4 grid flex-1 gap-4 border-t border-[var(--rule-soft)] pt-4 text-sm">
                  <div>
                    <div className="mono-sm !text-[10px] text-[var(--text-muted)]">YOU PROVIDE</div>
                    <p className="mt-1.5 leading-relaxed text-[var(--text-body)]">{s.youProvide}</p>
                  </div>
                  <div>
                    <div className="mono-sm !text-[10px] text-[var(--text-muted)]">YOU RECEIVE</div>
                    <p className="mt-1.5 leading-relaxed text-[var(--text-body)]">{s.youReceive}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* HWW-S3 — why the first session is paid */}
      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[7fr_5fr] lg:items-start">
            <div>
              <SectionHeading eyebrow="WHY THE FIRST SESSION IS PAID" title={paidSession.heading} className="mb-6" />
              <div className="space-y-5 text-lg leading-relaxed text-[var(--text-body)]">
                <p className="max-w-[56ch]">{paidSession.body1}</p>
                <p className="max-w-[56ch]">{paidSession.body2}</p>
              </div>
            </div>
            <div className="rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-soft)] p-6 lg:mt-4">
              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-between border-b border-[var(--rule-soft)] pb-3">
                  <span className="mono-sm text-[var(--text-muted)]">LENGTH</span>
                  <span className="font-medium text-[var(--text-primary)]">{paidSession.panel.time}</span>
                </li>
                <li className="flex items-center justify-between border-b border-[var(--rule-soft)] pb-3">
                  <span className="mono-sm text-[var(--text-muted)]">PRICE</span>
                  <span className="display text-xl font-semibold tracking-[-0.01em] text-[var(--text-primary)]">{paidSession.panel.price}</span>
                </li>
                <li className="flex items-center justify-between border-b border-[var(--rule-soft)] pb-3">
                  <span className="mono-sm text-[var(--text-muted)]">PAYMENT</span>
                  <span className="text-right text-[var(--text-body)]">{paidSession.panel.note}</span>
                </li>
                {!brand.callCredited && (
                  <li className="flex items-center justify-between border-b border-[var(--rule-soft)] pb-3">
                    <span className="mono-sm text-[var(--text-muted)]">CREDIT</span>
                    <span className="text-right text-[var(--text-body)]">{paidSession.panel.creditLine}</span>
                  </li>
                )}
                <li className="flex items-center justify-between pb-3">
                  <span className="mono-sm text-[var(--text-muted)]">YOU LEAVE WITH</span>
                  <span className="text-right text-[var(--text-body)]">{paidSession.panel.leaveWith}</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* HWW-S4 — the pillar cycle */}
      <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-page)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="HOW THE PILLARS MOVE" title={cycle.heading} />
          <div className="mx-auto mt-12 max-w-[720px]" aria-hidden="true">
            <PillarCycle />
          </div>
          <p className="mx-auto mt-8 max-w-[52ch] text-center text-sm leading-relaxed text-[var(--text-muted)]">
            {cycle.caption}
          </p>
        </Container>
      </section>

      {/* HWW-S5 — what we expect */}
      <section className="border-t border-[var(--rule)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="WHAT WE EXPECT FROM YOU" title="What we need from you." className="mb-10" />
          <ul className="border-t border-[var(--rule)]">
            {expectations.map((e, i) => (
              <li key={e.statement} className="grid gap-2 border-b border-[var(--rule)] py-6 sm:grid-cols-[5rem_1fr_1.4fr] sm:items-baseline">
                <span className="mono-sm text-[var(--action)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">{e.statement}</h3>
                <p className="text-[15px] leading-relaxed text-[var(--text-body)]">{e.oneLine}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* HWW-S6 — links out */}
      <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-soft)]">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-5 lg:grid-cols-3">
            {linked.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex h-full flex-col rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-panel)]"
              >
                <h3 className="text-xl font-semibold tracking-[-0.01em] text-[var(--text-primary)]">{l.label}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-body)]">{l.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--action)]">
                  Read the page
                  <svg viewBox="0 0 12 12" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5"><path d="M2 6h8m0 0L7 3m3 3-3 3" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand variant="research" />
    </>
  );
}