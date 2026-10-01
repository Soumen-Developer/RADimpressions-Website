// app/(site)/how-we-work/engagement-and-pricing/page.tsx — pricing, without a
// rate card (SITEMAP D.5, EP-S1..S7). How we charge, what sits inside every
// engagement, what doesn't, contracts, and money-scoped FAQ. /pricing/ is the
// thin public page that canonicals here. The indicative bands table (EP-S2)
// is held until the ranges are confirmed (TK-05) and its block is suppressed.

import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading } from "@/components/ui/primitives";
import { PageLead } from "@/components/ui/page-lead";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaBand } from "@/components/blocks/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/seo";
import { faqContent } from "@/lib/content";
import { ep, faqScopes } from "@/content/how-we-work";

export const metadata: Metadata = {
  title: "Engagement & Pricing — RADIMPRESSION",
  description:
    "How we charge: project, retainer, or consulting session. What sits inside every engagement, what never does, and the contract terms, in writing.",
};

export default function EngagementPricingPage() {
  const moneyFaqs = faqContent.byScope([...faqScopes]).filter((f) =>
    /charge|price|cost|credited|credit|billing|much|slot|₹/.test(f.question)
  );
  const faqs = moneyFaqs.slice(0, 6);

  return (
    <>
      <JsonLd data={[faqSchema(faqs)].filter(Boolean) as Record<string, unknown>[]} />

      {/* EP-S1 — hero */}
      <PageLead
        eyebrow="ENGAGEMENT & PRICING"
        title={ep.heroH1}
        intro="The price, the scope, and the schedule are named in the proposal — before a rupee changes hands. This page exists to remove price anxiety without turning the work into a commodity."
        plate="PLATE 02·C"
      />

      {/* EP-S1 continued — how we charge */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="HOW WE CHARGE" title="Three shapes. Advice on which to pick." className="mb-10" />
          <div className="grid gap-5 lg:grid-cols-3">
            {ep.howWeCharge.map((m, i) => (
              <article key={m.name} className="flex flex-col rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6">
                <div className="flex items-center justify-between">
                  <span className="mono-sm text-[var(--action)]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mono-sm text-[var(--text-muted)]">{m.for.toUpperCase()}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-[var(--text-primary)]">{m.name}</h3>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{m.pickWhen}</p>
                <div className="mt-5 space-y-3 border-t border-[var(--rule-soft)] pt-5 text-sm leading-relaxed text-[var(--text-body)]">
                  <p><span className="mono-sm !text-[10px] text-[var(--text-muted)]">SCOPED · </span>{m.scoped}</p>
                  <p><span className="mono-sm !text-[10px] text-[var(--text-muted)]">BILLED · </span>{m.billed}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* EP-S2 — indicative bands (suppressed until confirmed) */}
      <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-soft)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="INDICATIVE BANDS"
            title="Bands, not quotes."
            intro="The shape of what each engagement costs is public; the numbers are held until they're confirmed. What sits inside each band never changes."
            className="mb-10"
          />
          <div className="rounded-[var(--radius-md)] border border-[var(--rule)] border-dashed bg-[var(--bg-page)] p-8">
            <div className="mono-sm text-[var(--text-muted)]">THE BAND FIGURES ARE HELD FOR CONFIRMATION</div>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {["Project", "Retainer", "Consulting session"].map((band) => (
                <div key={band} className="rounded-[var(--radius-md)] border border-[var(--rule-soft)] p-5">
                  <div className="eyebrow !text-[10px]">{band}</div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    The range and what sits inside it, written in the proposal — priced for the outcome, not the hour.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* EP-S3/included — what's included */}
      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>INCLUDED IN EVERY ENGAGEMENT</Eyebrow>
              <h2 className="mt-3 text-[clamp(25px,3.4vw,39px)] font-semibold">What&apos;s inside.</h2>
              <ul className="mt-6 grid gap-3">
                {ep.included.map((item) => (
                  <li key={item} className="flex gap-3 border-b border-[var(--rule-soft)] pb-3">
                    <span className="text-[var(--pillar-complete)]" aria-hidden="true">+</span>
                    <span className="text-[15px] leading-relaxed text-[var(--text-body)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow>NOT INCLUDED — STATED FLATLY</Eyebrow>
              <h2 className="mt-3 text-[clamp(25px,3.4vw,39px)] font-semibold">What isn&apos;t.</h2>
              <ul className="mt-6 grid gap-3">
                {ep.excluded.map((item) => (
                  <li key={item} className="flex gap-3 border-b border-[var(--rule-soft)] pb-3">
                    <span className="text-[var(--rad-red-ink)]" aria-hidden="true">—</span>
                    <span className="text-[15px] leading-relaxed text-[var(--text-body)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* EP-S4-contracts */}
      <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-soft)]">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-[720px]">
            <Eyebrow>{ep.contracts.heading.toUpperCase()}</Eyebrow>
            <h2 className="mt-3 text-[clamp(25px,3.4vw,39px)] font-semibold">{ep.contracts.heading}.</h2>
            {ep.contracts.paragraphs.map((p, i) => (
              <p key={i} className="mt-5 leading-[1.8] text-[var(--text-body)]">{p}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* EP-S6 — FAQ, scoped to money */}
      <section className="border-t border-[var(--rule)]">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading eyebrow="FAQ · MONEY" title="The questions about the money." intro="Scoped to pricing only. The rest of the FAQ lives on the other pages." />
            <FaqAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <CtaBand variant="consulting" />
    </>
  );
}