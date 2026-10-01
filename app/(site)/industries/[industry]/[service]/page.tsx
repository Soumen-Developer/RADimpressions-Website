// app/(site)/industries/[industry]/[service]/page.tsx — the 28 industry ×
// pillar pages (SITEMAP row 13: /industries/[industry]/[service]/). Sections
// MTX-S1..S6. Renders the single-sourced template copy from
// content/matrix-template.ts so the word-count assert cannot drift.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Eyebrow, SectionHeading, Tag, ButtonLink } from "@/components/ui/primitives";
import { PageLead } from "@/components/ui/page-lead";
import { matrixContent, industryContent, serviceContent, assertMatrixWordCount } from "@/lib/content";
import { LoomPromise } from "@/components/blocks/loom-promise";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaBand } from "@/components/blocks/cta-band";
import { PillarMark } from "@/components/ui/primitives";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { industryNames, serviceNames } from "@/lib/names";
import {
  matrixTemplateCopy as t,
  matrixFaqCopy,
} from "@/content/matrix-template";
import type { PillarSlug, IndustrySlug } from "@/lib/types";

const validServices: PillarSlug[] = ["strategy", "brand-communication", "media", "complete-support"];
const validIndustries: IndustrySlug[] = [
  "hospitality",
  "manufacturing",
  "real-estate",
  "fitness-wellness",
  "education",
  "healthcare",
  "ecommerce",
];

export function generateStaticParams() {
  return matrixContent.all.map((m) => ({ industry: m.industry, service: m.service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string; service: string }>;
}): Promise<Metadata> {
  const { industry, service } = await params;
  if (!(validIndustries as string[]).includes(industry) || !(validServices as string[]).includes(service)) return {};
  const m = matrixContent.get(industry as IndustrySlug, service as PillarSlug);
  return { title: m.metaTitle, description: m.metaDescription };
}

export default async function MatrixPage({
  params,
}: {
  params: Promise<{ industry: string; service: string }>;
}) {
  const { industry, service } = await params;
  if (!(validIndustries as string[]).includes(industry) || !(validServices as string[]).includes(service)) notFound();
  const m = matrixContent.get(industry as IndustrySlug, service as PillarSlug);
  assertMatrixWordCount(m);
  const ind = industryContent.get(m.industry);
  const svc = serviceContent.get(m.service);

  const faqItems = [
    { question: matrixFaqCopy.q1, answer: ind.faqs[0]?.answer ?? svc.faqs[0].answer },
    { question: matrixFaqCopy.q2, answer: svc.faqs[1]?.answer ?? svc.faqs[0].answer },
    {
      question: matrixFaqCopy.q3,
      answer:
        m.proofType === "scenario"
          ? "A worked scenario, reconstructed from the pattern we see in this space — not a client story. No names, no figures, nothing invented."
          : "This page is built around a real engagement. The case study is linked from the Work section once the founder signs it off.",
    },
  ];

  const breadcrumb = breadcrumbSchema([
    { name: "Industries", path: "/industries" },
    { name: ind.name, path: `/industries/${m.industry}` },
    { name: `${serviceNames[m.service]} for ${industryNames[m.industry]}`, path: `/industries/${m.industry}/${m.service}` },
  ]);

  return (
    <>
      <JsonLd data={[breadcrumb, faqSchema(faqItems)].filter(Boolean) as Record<string, unknown>[]} />

      {/* MTX-S1 — hero + the promise */}
      <PageLead
        eyebrow="THE MATRIX"
        title={`${m.name}.`}
        intro={`${ind.characterisation} ${svc.heroSymptom}`}
        meta={
          <div className="flex flex-wrap items-center gap-3">
            <PillarMark slug={m.service} name={m.name.toUpperCase()} />
            <Tag tone="soft">{ind.name}</Tag>
            <Tag tone="outline">{svc.promise}</Tag>
          </div>
        }
        plate={`PLATE 04·${"ABCDEFG"[validIndustries.indexOf(industry as IndustrySlug)]}·${validServices.indexOf(service as PillarSlug) + 1}`}
      >
        <div className="mt-4">
          <div className="eyebrow mb-4">{t.promiseLabel}</div>
          <p className="mb-6 max-w-[52ch] text-sm text-[var(--text-body)]">{t.promiseIntro}</p>
          <LoomPromise />
        </div>
      </PageLead>

      {/* MTX-S2 — collision */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow={t.collisionEyebrow} title={t.collisionHeading} intro={t.collisionNote} className="mb-10" />
          <div className="grid gap-6 lg:grid-cols-2">
            {m.problem.collision.map((para) => (
              <p key={para} className="text-lg leading-relaxed text-[var(--text-body)]">{para}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* MTX-S3 — what we do */}
      <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-soft)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow={t.whatWeDoEyebrow} title={t.whatWeDoHeading} intro={t.whatWeDoIntro} className="mb-10" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {m.problem.whatWeDo.map((item, i) => (
              <li key={item} className="flex gap-4 rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-5">
                <span className="mono-sm text-[var(--action)]">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-[15px] leading-relaxed text-[var(--text-primary)]">{item}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* MTX-S4 — good looks like */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow={t.goodLooksLikeEyebrow} title={t.goodLooksLikeHeading} intro={t.goodLooksLikeIntro} className="mb-10" />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {m.problem.goodLooksLike.map((g) => (
              <li key={g} className="flex gap-3 rounded-[var(--radius-md)] border border-[var(--rule)] p-5">
                <span className="mt-2 text-[var(--pillar-complete)]" aria-hidden="true">✓</span>
                <p className="text-[15px] leading-relaxed text-[var(--text-body)]">{g}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* MTX-S5 — the worked scenario / case study */}
      <section className="border-y border-[var(--rule)] bg-[var(--bg-deep)] text-[var(--text-on-deep)]">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <Eyebrow className="!text-[var(--rule)]">{m.proofType === "scenario" ? t.scenarioEyebrow : "CASE-STUDY LABEL"}</Eyebrow>
              <h2 className="mt-3 text-[clamp(25px,3.4vw,39px)] font-semibold">{t.scenarioHeading}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--rule)]">{t.scenarioIntro}</p>
              <div className="mt-6">
                <Tag tone="deep">{m.proofType === "scenario" ? "WORKED SCENARIO — NOT A CLIENT" : "CASE-STUDY — REAL ENGAGEMENT"}</Tag>
              </div>
            </div>
            <div className="rounded-[var(--radius-md)] border border-white/15 p-7">
              <p className="text-lg leading-relaxed text-[var(--text-on-deep)]">{m.scenario.intro}</p>
              <p className="mt-4 leading-relaxed text-[var(--rule)]">{m.scenario.body}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* MTX-S6 — not optimised for */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow={t.notOptimisedForEyebrow} title={t.notOptimisedForHeading} intro={t.notOptimisedForIntro} className="mb-10" />
          <ul className="grid gap-4 lg:grid-cols-3">
            {m.problem.notOptimisedFor.map((n) => (
              <li key={n} className="rounded-[var(--radius-md)] border border-[var(--rule)] border-dashed p-6 text-[15px] leading-relaxed text-[var(--text-body)]">
                {n}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* S7 — FAQ (composed from real pools) */}
      <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-soft)]">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading eyebrow={matrixFaqCopy.eyebrow} title={matrixFaqCopy.title} intro={matrixFaqCopy.intro} />
            <FaqAccordion items={faqItems} />
          </div>
        </Container>
      </section>

      {/* S8 — close */}
      <section className="bg-[var(--bg-deep)] text-[var(--text-on-deep)]">
        <Container className="flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center">
          <div className="max-w-[44ch]">
            <Eyebrow className="!text-[var(--rule)]">{t.ctaEyebrow}</Eyebrow>
            <h2 className="mt-3 text-[clamp(25px,3.4vw,39px)] font-semibold">{t.ctaHeading}</h2>
            <p className="mt-3 text-[var(--rule)]">{t.ctaBody}</p>
          </div>
          <ButtonLink href="/brand-research" variant="onDeep" withArrow>
            {t.ctaLabel}
          </ButtonLink>
        </Container>
      </section>

      <CtaBand variant="research" />
    </>
  );
}