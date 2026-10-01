// app/(site)/pricing/page.tsx — the thin public pricing page (SITEMAP D.17).
// Handles the "pricing" search query without duplicating the engagement page:
// hero · three paragraphs · link block to /how-we-work/engagement-and-pricing/
// · CtaBand consulting. Canonical to the engagement page.

import type { Metadata } from "next";
import Link from "next/link";
import { Container, ButtonLink } from "@/components/ui/primitives";
import { PageLead } from "@/components/ui/page-lead";
import { CtaBand } from "@/components/blocks/cta-band";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Pricing — RADIMPRESSION",
  description:
    "The ₹499 working call (not credited), the sprint (credited in full on a 30-day retainer), and engagements scoped in writing before a rupee moves.",
  alternates: {
    canonical: "/how-we-work/engagement-and-pricing",
  },
};

const paragraphs = [
  "Pricing starts with the door: brand research is free, every submission gets a reply within 72 hours, and the paid call is a 60-minute working session at ₹499 that is not credited against anything. The sprint is priced on request and is credited in full if the retainer follows within 30 days.",
  "From there, engagement pricing is written, not negotiated in a call you didn't see coming. A single pillar or a retainer is scoped in the proposal — named deliverables, a named owner, a named schedule — and nothing moves after that proposal.",
  `Capacity is the ceiling: ${brand.capacity.toLowerCase()} Two sprint slots a month. If every slot is held, the wait is said out loud before any payment is taken.`,
];

export default function PricingPage() {
  return (
    <>
      <PageLead
        eyebrow="PRICING"
        title="Priced in writing, before the work."
        intro="The numbers, plainly. The full breakdown lives on the engagement and pricing page."
        plate="PLATE 12"
      />

      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-4">
            {paragraphs.map((p, i) => (
              <div key={i} className="grid gap-4 rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6 lg:grid-cols-[auto_1fr]">
                <span className="mono-sm text-[var(--action)]">{String(i + 1).padStart(2, "0")}</span>
                <p className="max-w-[68ch] text-[15px] leading-relaxed text-[var(--text-body)]">{p}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-6 rounded-[var(--radius-md)] border border-[var(--rule)] border-dashed p-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="eyebrow">THE FULL BREAKDOWN</div>
              <p className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-[var(--text-body)]">
                How we charge across the pillars, what sits inside every engagement, and what never will.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:items-end">
              <ButtonLink href="/how-we-work/engagement-and-pricing" withArrow>
                Engagement & pricing
              </ButtonLink>
              <Link href="/brand-research" className="text-sm font-medium text-[var(--action)] hover:underline">
                Start with brand research →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand variant="consulting" />
    </>
  );
}