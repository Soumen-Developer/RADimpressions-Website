// app/(site)/industries/[industry]/page.tsx — the seven industry pages.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Eyebrow, SectionHeading, ButtonLink, Tag } from "@/components/ui/primitives";
import { PageLead } from "@/components/ui/page-lead";
import { industryContent } from "@/lib/content";
import { FaqSection } from "@/components/blocks/faq-section";
import { CtaBand } from "@/components/blocks/cta-band";
import { pillarColourVar } from "@/components/ui/primitives";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import type { IndustrySlug, PillarSlug } from "@/lib/types";

const validSlugs: IndustrySlug[] = [
  "hospitality",
  "manufacturing",
  "real-estate",
  "fitness-wellness",
  "education",
  "healthcare",
  "ecommerce",
];

const pillarOrder: PillarSlug[] = ["strategy", "brand-communication", "media", "complete-support"];

export function generateStaticParams() {
  return validSlugs.map((industry) => ({ industry }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }): Promise<Metadata> {
  const { industry } = await params;
  if (!(validSlugs as string[]).includes(industry)) return {};
  const page = industryContent.get(industry as IndustrySlug);
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  if (!(validSlugs as string[]).includes(industry)) notFound();
  const page = industryContent.get(industry as IndustrySlug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Industries", path: "/industries" },
            { name: page.name, path: `/industries/${page.slug}` },
          ]),
          faqSchema(page.faqs),
        ].filter(Boolean) as Record<string, unknown>[]}
      />

      {/* S1 — hero */}
      <PageLead
        eyebrow={`${page.name.toUpperCase()} · THE INDUSTRY PAGE`}
        title={page.heroTitle}
        intro={page.heroBody}
        plate={`PLATE 04·${"ABCDEFG"[validSlugs.indexOf(industry as IndustrySlug)]}`}
      >
        <div className="flex flex-wrap items-center gap-4">
          <ButtonLink href="/brand-research" withArrow>Start with brand research</ButtonLink>
          <Tag tone="outline">START THE PILLAR: {page.start.pillar.toUpperCase().replace("-", " ")}</Tag>
        </div>
      </PageLead>

      {/* S2 — buying realities */}
      <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-soft)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="BUYING REALITIES" title="The four facts the plan lives inside." className="mb-10" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.buying.map((b) => (
              <div key={b.label} className="rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6">
                <div className="eyebrow" style={{ color: "var(--rad-teal-ink)" }}>{b.label}</div>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-body)]">{b.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* S3 — often wrong */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="OFTEN WRONG" title="The three assumptions that cost the quarter." className="mb-10" />
          <div className="grid gap-5 lg:grid-cols-3">
            {page.oftenWrong.map((w, i) => (
              <div key={w.label} className="rounded-[var(--radius-md)] border border-[var(--rule)] border-dashed p-6">
                <div className="mono-sm text-[var(--rad-red-ink)]">ASSUMPTION {i + 1}</div>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-body)]">{w.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* S4 — where to start */}
      <section className="border-y border-[var(--rule)] bg-[var(--bg-deep)] text-[var(--text-on-deep)]">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
            <div className="flex flex-row items-center gap-4">
              <span className="inline-block h-6 w-6" style={{ background: pillarColourVar(page.start.pillar) }} aria-hidden="true" />
              <Eyebrow className="!text-[var(--rule)]">WHERE TO START</Eyebrow>
            </div>
            <div>
              <h2 className="text-[clamp(25px,3.4vw,39px)] font-semibold">{page.start.pillar.replace("-", " ")} — first.</h2>
              <p className="mt-4 max-w-[56ch] text-lg text-[var(--rule)]">{page.start.reasoning}</p>
              <div className="mt-6">
                <ButtonLink href={`/services/${page.start.pillar}`} variant="onDeep">
                  See {page.start.pillar.replace("-", " ")} →
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* S5 — the pillars on this industry */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="THE FOUR PILLARS" title="Each pillar, on this industry." className="mb-10" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillarOrder.map((p, i) => (
              <div key={p} className="flex flex-col rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6">
                <div className="flex items-center justify-between">
                  <span className="mono-sm text-[var(--text-muted)]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="inline-block h-2.5 w-2.5" style={{ background: pillarColourVar(p) }} aria-hidden="true" />
                </div>
                <div className="mt-4 font-semibold text-[var(--text-primary)]">{pillarName(p)}</div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-body)]">{page.pillarBlurbs[p]}</p>
                <Link
                  href={`/industries/${page.slug}/${p}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--action)] hover:underline"
                >
                  The {pillarName(p).toLowerCase()} page for {page.name} →
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* S6 — channels */}
      <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-soft)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="CHANNEL LOGIC" title="Where the work actually lands." className="mb-10" />
          <div className="grid gap-4 lg:grid-cols-2">
            {page.channels.map((c, i) => (
              <div key={c.channel} className="flex gap-5 rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6">
                <span className="mono-sm text-[var(--action)]">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)]">{c.channel}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-body)]">{c.reasoning}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* S7 — what does not work */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="WHAT DOES NOT WORK" title="The habits this plan is not." className="mb-10" />
          <ul className="grid gap-4 sm:grid-cols-3">
            {page.notWork.map((n) => (
              <li key={n} className="rounded-[var(--radius-md)] border border-[var(--rule)] border-dashed p-6 text-[15px] leading-relaxed text-[var(--text-body)]">
                <span className="mono-sm text-[var(--rad-red-ink)]">NOT OPTIMISED FOR</span>
                <p className="mt-2">{n}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* S8 — FAQ */}
      <FaqSection
        eyebrow="FAQ · THIS INDUSTRY"
        title={`Straight answers on ${page.name.toLowerCase()} marketing.`}
        intro="The questions this industry's marketers ask the loudest."
        items={page.faqs}
      />

      <CtaBand variant="research" />
    </>
  );
}

function pillarName(p: PillarSlug): string {
  return {
    strategy: "Strategy",
    "brand-communication": "Brand Communication",
    media: "Media",
    "complete-support": "Complete Support",
  }[p];
}