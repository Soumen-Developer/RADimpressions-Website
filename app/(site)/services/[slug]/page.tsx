// app/(site)/services/[slug]/page.tsx — the four pillar pages.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Eyebrow, SectionHeading, ButtonLink, Tag } from "@/components/ui/primitives";
import { PageLead } from "@/components/ui/page-lead";
import { serviceContent } from "@/lib/content";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { FitFilter } from "@/components/blocks/fit-filter";
import { LoomPromise } from "@/components/blocks/loom-promise";
import { MarketplaceThread } from "@/components/blocks/marketplace-thread";
import { FaqSection } from "@/components/blocks/faq-section";
import { CtaBand } from "@/components/blocks/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { pillarColourVar } from "@/components/ui/primitives";
import type { ServiceSlug } from "@/lib/types";

const validSlugs: ServiceSlug[] = ["strategy", "brand-communication", "media", "complete-support"];

export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!(validSlugs as string[]).includes(slug)) return {};
  const page = serviceContent.get(slug as ServiceSlug);
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(validSlugs as string[]).includes(slug)) notFound();
  const page = serviceContent.get(slug as ServiceSlug);
  const colourVar = pillarColourVar(page.slug);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(page.name, page.metaDescription),
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: page.name, path: `/services/${page.slug}` },
          ]),
        ]}
      />

      {/* S1 — hero */}
      <PageLead
        eyebrow={`${page.name.toUpperCase()} · THE PILLAR`}
        title={page.promise}
        intro={page.heroSymptom}
        accent={colourVar}
        plate={`PLATE 03·${"ABCD"[validSlugs.indexOf(slug as ServiceSlug)]}`}
      >
        <div className="flex flex-wrap items-center gap-4">
          <ButtonLink href="/brand-research" withArrow>
            {page.ctaVariant === "research" ? "Send us your business" : "Talk to us about this pillar"}
          </ButtonLink>
          <Tag tone="outline">CAPACITY: 5 / QUARTER</Tag>
        </div>
      </PageLead>

      {/* S2 — diagnosis */}
      <section>
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="THE DIAGNOSIS" title={`Why ${page.name.toLowerCase()} fails in the room.`} />
          <div className="space-y-5 text-lg leading-relaxed text-[var(--text-body)]">
            {page.diagnosis.map((d, i) => (
              <p key={i} className="max-w-[62ch]">{d}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* S3 — capabilities */}
      <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-soft)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="CAPABILITIES" title="What the pillar is built from." className="mb-10" />
          <div className="grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--rule)] sm:grid-cols-3">
            {page.capabilities.map((c) => (
              <div key={c.cluster} className="bg-[var(--bg-page)] p-7">
                <div className="eyebrow mb-5" style={{ color: "var(--rad-teal-ink)" }}>{c.cluster.toUpperCase()}</div>
                <ul className="space-y-2.5">
                  {c.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[15px] leading-snug text-[var(--text-body)]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: colourVar }} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* S4 — fit filter */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="THE FILTER" title="Fit first. The refusal comes with it." className="mb-10" />
          <FitFilter positive={page.fit.for} negative={page.fit.notFor} />
        </Container>
      </section>

      {/* S5 — process */}
      <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-soft)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="THE PROCESS" title="How the pillar runs." intro="Every engagement, the same shape." className="mb-10" />
          <ProcessSteps nodes={page.process} variant="contract" />
        </Container>
      </section>

      {/* S6 — deliverables */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="DELIVERABLES" title="What lands on the table." className="mb-10" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.deliverables.map((d) => (
              <div key={d.artefact} className="rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6">
                <div className="mono-sm" style={{ color: "var(--rad-teal-ink)" }}>{d.artefact}</div>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-body)]">{d.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* S9 — boundary + promise */}
      <section className="border-t border-[var(--rule)] bg-[var(--bg-deep)] text-[var(--text-on-deep)]">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <Eyebrow className="!text-[var(--rule)]">THE BOUNDARY</Eyebrow>
              <h2 className="mt-3 text-[clamp(25px,3.4vw,39px)] font-semibold">{page.boundary.heading}</h2>
              <p className="mt-4 text-lg text-[var(--rule)]">{page.boundary.body}</p>
              <div className="mt-6">
                <ButtonLink href={`/services/${page.boundary.linkTo}`} variant="onDeep">
                  {page.boundary.linkLabel}
                </ButtonLink>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <LoomPromise tone="deep" />
            </div>
          </div>
        </Container>
      </section>

      {/* S8 · marketplace thread for the three production pillars */}
      {page.marketplace ? <MarketplaceThread /> : null}

      {/* S10 — FAQ */}
      <FaqSection
        eyebrow="FAQ · THIS PILLAR"
        title={`Straight answers on ${page.name.toLowerCase()}.`}
        intro="Questions the pillar raises more often than the others."
        items={page.faqs}
      />

      <CtaBand variant={page.ctaVariant} />
    </>
  );
}