// app/(site)/how-we-work/who-we-work-with/page.tsx — the filter, in full
// (SITEMAP D.4). Capacity, the six-and-six fit filter, stage fit, and the
// businesses we'd send elsewhere — stated flatly, not softened.

import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeading, Stat } from "@/components/ui/primitives";
import { PageLead } from "@/components/ui/page-lead";
import { FitFilter } from "@/components/blocks/fit-filter";
import { CtaBand } from "@/components/blocks/cta-band";
import { www } from "@/content/how-we-work";

export const metadata: Metadata = {
  title: "Who We Work With — RADIMPRESSION",
  description:
    "We're selective, and it's the reason the work is good. The filter in full — the fits, the refusals, the businesses we'd send elsewhere.",
};

export default function WhoWeWorkWithPage() {
  return (
    <>
      {/* WWW-S1 — hero */}
      <PageLead
        eyebrow="WHO WE WORK WITH"
        title={www.heroH1}
        intro={www.heroSub}
        plate="PLATE 02·A"
      />

      {/* WWW-S2 — capacity, stated */}
      <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-soft)]">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-[760px] text-center">
            <Stat value={www.capacity.value} label={www.capacity.label} source="RADIMPRESSION OPERATING MODEL" />
          </div>
        </Container>
      </section>

      {/* WWW-S3 — the filter, expanded */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="THE FILTER" title="Six fits. Six refusals. Same weight." className="mb-10" />
          <FitFilter positive={www.positive} negative={www.negative} />
          <p className="mt-8 max-w-[52ch] text-sm leading-relaxed text-[var(--text-muted)]">
            The right column keeps equal visual weight at every breakpoint on purpose. A filter list where the
            refusals shrink is not a filter; it&apos;s a brochure.
          </p>
        </Container>
      </section>

      {/* WWW-S4 — stage fit */}
      <section className="border-t border-[var(--rule)] bg-[var(--bg-deep)] text-[var(--text-on-deep)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="STAGE FIT"
            title="Where your business is, and what that decides."
            className="!text-[var(--text-on-deep)] mb-10"
          />
          <ul className="grid gap-5">
            {www.stageFit.map((band) => (
              <li key={band.stage} className="grid gap-5 rounded-[var(--radius-md)] border border-white/15 p-7 lg:grid-cols-[8rem_1fr_auto] lg:items-center">
                <span className="mono-sm text-[var(--pillar-media)]">{band.stage}</span>
                <div>
                  <p className="max-w-[62ch] leading-relaxed text-[var(--rule)]">{band.read}</p>
                  <p className="mt-2 text-[15px] font-medium text-[var(--text-on-deep)]">{band.recommendation}</p>
                </div>
                <Link href={band.href} className="mono-sm shrink-0 border-b border-[var(--rule)] pb-0.5 text-[var(--text-on-deep)] hover:text-[var(--pillar-media)]">
                  {band.cta} →
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* WWW-S5 — businesses we'd send elsewhere */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="BUSINESSES WE'D SEND ELSEWHERE"
            title="The proof that this page is honest."
            intro="Not softened, because usefulness and honesty are the same sentence here. If you recognise your business, the partner listed is a better answer than we are."
            className="mb-10"
          />
          <ul className="border-t border-[var(--rule)]">
            {www.elseWhere.map((row, i) => (
              <li key={row.category} className="grid gap-2 border-b border-[var(--rule)] py-6 sm:grid-cols-[3rem_1fr_1.4fr] sm:items-baseline">
                <span className="mono-sm text-[var(--action)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-semibold text-[var(--text-primary)]">{row.category}</h3>
                <p className="text-[15px] leading-relaxed text-[var(--text-body)]">{row.partner}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand variant="research" />
    </>
  );
}