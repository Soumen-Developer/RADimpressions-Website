// app/(site)/insights/page.tsx — four formats, listed honestly.

import type { Metadata } from "next";
import { Container } from "@/components/ui/primitives";
import { PageLead } from "@/components/ui/page-lead";
import { InsightCard } from "@/components/cards";
import { JsonLd } from "@/components/seo/json-ld";
import { itemListSchema } from "@/lib/seo";
import { CtaBand } from "@/components/blocks/cta-band";
import { all } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights — RADIMPRESSION",
  description:
    "Argument, playbook, commentary, question — four formats, no filler. Written in the same voice that does the work.",
};

export default function InsightsIndex() {
  const featured = all.find((a) => a.featured);
  const rest = all.filter((a) => !a.featured);
  return (
    <>
      <JsonLd
        data={[
          itemListSchema(
            all.map((a) => ({ name: a.title, path: `/insights/${a.slug}` }))
          ),
        ]}
      />

      <PageLead
        eyebrow="INSIGHTS"
        title="Four formats. No filler."
        intro="Argument, playbook, commentary, question. The pages argue, teach, react, and interrogate — and they read like the person who does the work wrote them, because they did."
        plate="PLATE 07"
      />

      <section>
        <Container className="py-16 sm:py-20">
          {featured && (
            <div className="mb-12">
              <div className="eyebrow mb-4" style={{ color: "var(--rad-teal-ink)" }}>FEATURED · {featured.format.toUpperCase()}</div>
              <InsightCard insight={featured} />
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <InsightCard key={a.slug} insight={a} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand variant="consulting" />
    </>
  );
}