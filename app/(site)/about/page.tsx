// app/(site)/about/page.tsx — the about page. The founding story is not
// available as a written account; the positioned summary we can verify is
// about the operating model, not a rolled-up narrative.

import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, SectionHeading, ButtonLink } from "@/components/ui/primitives";
import { PageLead } from "@/components/ui/page-lead";
import { CtaBand } from "@/components/blocks/cta-band";

export const metadata: Metadata = {
  title: "About RADIMPRESSION",
  description:
    "The positioned marketing for the growing regional brand. Strategy, Brand Communication, Media and Complete Support — five new engagements a quarter.",
};

export default function AboutPage() {
  return (
    <>
      <PageLead
        eyebrow="ABOUT"
        title="A place that sells what it actually does."
        intro="RADIMPRESSION is positioned marketing for the growing regional brand — the one with real infrastructure, real trade, and marketing that still runs on guesswork. We keep five open slots a quarter and refuse the rest on purpose."
        plate="PLATE 08"
      >
        <ButtonLink href="/brand-research" withArrow>Start with brand research</ButtonLink>
      </PageLead>

      {/* the four pillars */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="THE FOUR PILLARS" title="The whole marketing problem, in four pieces." className="mb-10" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Strategy",
                slug: "strategy",
                swatch: "var(--pillar-strategy)",
                blurb:
                  "Position, promise, message architecture, the offer. If the position is wrong the rupees you spend make the problem worse. This is done first or not at all.",
              },
              {
                name: "Brand Communication",
                slug: "brand-communication",
                swatch: "var(--pillar-brand-communication)",
                blurb:
                  "Design language, identity, naming, and every piece that carries the brand out into the market — consistent enough to be recognised.",
              },
              {
                name: "Media",
                slug: "media",
                swatch: "var(--pillar-media)",
                blurb:
                  "The paid layer. Placement logic, budgets, creative that earns the slot. If the position and the language are wrong, the media is a megaphone for the wrong message.",
              },
              {
                name: "Complete Support",
                slug: "complete-support",
                swatch: "var(--pillar-complete-support)",
                blurb:
                  "All three pillars, one owner, one plan, one report that reconciles with the bank. The named person on every engagement — always.",
              },
            ].map((p) => (
              <Link
                key={p.slug}
                href={`/services/${p.slug}`}
                className="flex flex-col rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-panel)]"
              >
                <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: p.swatch }} aria-hidden="true" />
                <h2 className="mt-4 font-semibold text-[var(--text-primary)]">{p.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-body)]">{p.blurb}</p>
                <span className="mt-4 text-sm font-medium text-[var(--action)]">See the pillar →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* the method */}
      <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-soft)]">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>THE METHOD</Eyebrow>
              <h2 className="mt-3 text-[clamp(25px,3.4vw,39px)] font-semibold">Freelance gearbox, positioned output.</h2>
              <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-[var(--text-body)]">
                The work is: brand research first, a recorded teardown second, a 72-hour reply always. Strategy, Brand
                Communication and Media stay under one roof so the position, the language and the spend agree with each
                other — and one named owner is answerable at every step.
              </p>
            </div>
            <div className="grid gap-3">
              {[
                { k: "01", v: "Brand research — every engagement opens through the same door." },
                { k: "02", v: "The teardown comes back recorded, whatever the verdict." },
                { k: "03", v: "A paid call walks it through; a go/no-go in the session." },
                { k: "04", v: "The sprint proves the work; the retainer holds the line." },
              ].map((r) => (
                <div key={r.k} className="flex gap-4 rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-4">
                  <span className="mono-sm text-[var(--action)]">{r.k}</span>
                  <p className="text-sm leading-relaxed text-[var(--text-body)]">{r.v}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand variant="research" />
    </>
  );
}