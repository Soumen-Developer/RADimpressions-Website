// app/(site)/catalog/page.tsx — the full index of industries x pillars.

import type { Metadata } from "next";
import { Container } from "@/components/ui/primitives";
import { PageLead } from "@/components/ui/page-lead";
import { MatrixCard } from "@/components/cards";
import { CtaBand } from "@/components/blocks/cta-band";
import { matrixContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "All 28 pages — industries and pillars",
  description:
    "Every industry, read against every pillar. Seven industries, four pillars, twenty-eight honest pages — each with its own diagnosis.",
};

export default function CatalogPage() {
  const pairs = matrixContent.all;
  return (
    <>
      <PageLead
        eyebrow="THE FULL INDEX"
        title="Seven industries. Four pillars. Twenty-eight pages."
        intro="Every combination has its own page, its own diagnosis, and its own worked scenario. Start from the industry or from the pillar — the diagnosis is the same."
        plate="PLATE 09"
      />

      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pairs.map((m) => {
              return (
                <MatrixCard
                  key={`${m.industry}-${m.service}`}
                  industrySlug={m.industry}
                  industryName={industryNames[m.industry]}
                  serviceSlug={m.service}
                  serviceName={serviceNames[m.service]}
                  href={`/industries/${m.industry}/${m.service}`}
                />
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBand variant="research" />
    </>
  );
}

import { industryNames, serviceNames } from "@/lib/names";