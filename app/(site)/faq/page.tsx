// app/(site)/faq/page.tsx — the aggregate FAQ (SITEMAP row 26). Every
// question on the site, grouped by the page it lives on, with a grouped
// accordion per pool. FAQPage schema ships because every answer is real.

import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { PageLead } from "@/components/ui/page-lead";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaBand } from "@/components/blocks/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/seo";
import { faqContent } from "@/lib/content";
import type { FaqScope } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ — RADIMPRESSION",
  description:
    "Straight answers on the practice, the process, the paid call, the sprint, the retainer, and each pillar.",
};

const groups: { scope: FaqScope; label: string }[] = [
  { scope: "general", label: "The practice" },
  { scope: "research", label: "Brand research & the 72-hour reply" },
  { scope: "call", label: "The paid call" },
  { scope: "sprint", label: "The sprint" },
  { scope: "retainer", label: "The retainer" },
  { scope: "services", label: "Services & the pillars" },
  { scope: "strategy", label: "Strategy" },
  { scope: "brand-communication", label: "Brand Communication" },
  { scope: "media", label: "Media" },
  { scope: "complete-support", label: "Complete Support" },
];

export default function FaqPage() {
  const all = faqContent.all;
  const schema = faqSchema(all);

  return (
    <>
      <JsonLd data={(schema ? [schema] : []) as Record<string, unknown>[]} />

      <PageLead
        eyebrow="FAQ"
        title="Asked, answered, once."
        intro="Every question the site answers, in one place — grouped the way the pages group them. If the answer depends on the page you're on, the pool it lives in says so."
        plate="PLATE 13"
      />

      <section>
        <Container className="py-16 sm:py-20">
          <div className="space-y-14">
            {groups.map((g) => {
              const items = all.filter((f) => f.scope === g.scope);
              if (items.length === 0) return null;
              return (
                <div key={g.scope}>
                  <SectionHeading eyebrow={g.label.toUpperCase()} title={g.label} className="mb-6" />
                  <FaqAccordion items={items} />
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBand variant="research" />
    </>
  );
}