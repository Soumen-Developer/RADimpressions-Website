// app/(site)/industries/page.tsx — the industries hub (SITEMAP D.8,
// IND-S1..S4). Proves category knowledge and routes to the industry pages.

import type { Metadata } from "next";
import { Container, SectionHeading, pillarColourVar } from "@/components/ui/primitives";
import { PageLead } from "@/components/ui/page-lead";
import { IndustryCard } from "@/components/cards";
import { CtaBand } from "@/components/blocks/cta-band";
import { industryContent } from "@/lib/content";
import { brand, industryOrder } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Industries — RADIMPRESSION",
  description:
    "Seven categories we read properly. The buying cycle of a manufacturer and an e-commerce brand share almost nothing — so neither does the plan.",
};

export default function IndustriesHubPage() {
  return (
    <>
      {/* IND-S1 — hero */}
      <PageLead
        eyebrow="THE INDUSTRIES"
        title="We don't market every category the same way."
        intro="The buying cycle of a manufacturer and the buying cycle of an e-commerce brand share almost nothing. The strategy, the channels, and the definition of a good month are all different."
        plate="PLATE 04"
      />

      {/* IND-S2 — the seven industries */}
      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industryOrder.map((slug) => {
              const ind = industryContent.get(slug);
              return (
                <IndustryCard
                  key={slug}
                  slug={slug}
                  name={ind.name}
                  characterisation={ind.characterisation}
                  startPillar={ind.start.pillar}
                  href={`/industries/${slug}`}
                />
              );
            })}
            <div className="flex flex-col justify-center rounded-[var(--radius-md)] border border-[var(--rule)] border-dashed p-6">
              <div className="mono-sm text-[var(--text-muted)]">READ PROPERLY, RESTRICTED LIST</div>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-body)]">
                {brand.capacity} The pages above are categories we actually read. If your category isn&apos;t listed, the
                honest read is usually a consulting session rather than an industry page.
              </p>
              <a href="/consulting" className="mt-4 text-sm font-medium text-[var(--action)] hover:underline">
                Book a session →
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* IND-S3 — what stays the same */}
      <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-soft)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="WHAT STAYS THE SAME" title="The order holds everywhere." intro="Position, then language, then distribution. Only the inputs change." className="mb-10" />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { step: "01", label: "POSITION", body: "What this category's buyers actually choose between." },
              { step: "02", label: "LANGUAGE", body: "The system that says it, built for this category's channels." },
              { step: "03", label: "DISTRIBUTION", body: "The media that scales what now exists underneath." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6">
                <span className="mono-sm text-[var(--action)]">{s.step}</span>
                <div>
                  <div className="mono-sm !text-[11px]" style={{ color: pillarColourVar(s.step === "01" ? "strategy" : s.step === "02" ? "brand-communication" : "media") }}>{s.label}</div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-body)]">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand variant="research" />
    </>
  );
}