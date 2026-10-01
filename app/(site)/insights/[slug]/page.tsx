// app/(site)/insights/[slug]/page.tsx — the article template. Every format's
// extras (direct answer, check-in-order, what-to-do, counter) render from the
// content module; nothing is invented here.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Eyebrow, Tag } from "@/components/ui/primitives";
import { PageLead } from "@/components/ui/page-lead";
import { CtaBand } from "@/components/blocks/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { articleSchema, faqSchema } from "@/lib/seo";
import { all, bySlug } from "@/content/insights";
import type { InsightBlock } from "@/lib/types";

export function generateStaticParams() {
  return all.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const a = bySlug(slug);
    return { title: a.title, description: (a.standfirst ?? a.directAnswer ?? "").slice(0, 155) };
  } catch {
    return {};
  }
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let a;
  try {
    a = bySlug(slug);
  } catch {
    notFound();
  }

  const lead = a.standfirst;
  const questionFaq = a.format === "question" && a.directAnswer ? [{ question: a.title, answer: a.directAnswer }] : [];

  return (
    <article>
      <JsonLd
        data={[
          articleSchema({
            headline: a.title,
            description: (a.standfirst ?? a.directAnswer ?? "").slice(0, 155),
            path: `/insights/${a.slug}`,
          }),
          faqSchema(questionFaq),
        ].filter(Boolean) as Record<string, unknown>[]}
      />

      <PageLead
        eyebrow="INSIGHT"
        title={a.title}
        intro={lead}
        meta={
          <div className="flex flex-wrap items-center gap-3">
            <Tag tone="soft">{a.format.toUpperCase()} · {a.category.toUpperCase()}</Tag>
            <span className="mono-sm text-[var(--text-muted)]">{a.readTime} READ · {a.date}</span>
          </div>
        }
        plate={`PLATE 07·${String.fromCharCode(65 + all.findIndex((x) => x.slug === slug))}`}
      />

      {a.format === "question" && a.directAnswer && (
        <section>
          <Container className="py-14">
            <div className="mx-auto max-w-[860px] rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-tint)] p-7">
              <div className="mono-sm text-[var(--action)]">THE DIRECT ANSWER</div>
              <p className="mt-3 text-lg leading-relaxed text-[var(--text-primary)]">{a.directAnswer}</p>
            </div>
          </Container>
        </section>
      )}

      {/* format-specific sections */}
      {a.checkInOrder && a.checkInOrder.length > 0 && (
        <section>
          <Container className="py-14">
            <Eyebrow>IN ORDER</Eyebrow>
            <ol className="mt-6 grid gap-4">
              {a.checkInOrder.map((step, i) => (
                <li key={step} className="flex gap-5 rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-soft)] p-6">
                  <span className="mono-sm text-[var(--action)]">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[15px] leading-relaxed text-[var(--text-primary)]">{step}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      {a.whatToDo && a.whatToDo.length > 0 && (
        <section>
          <Container className="py-14">
            <Eyebrow>WHAT TO DO</Eyebrow>
            <ul className="mt-6 grid gap-3">
              {a.whatToDo.map((w) => (
                <li key={w} className="flex gap-3 border-b border-[var(--rule-soft)] pb-3">
                  <span className="text-[var(--rad-navy)]" aria-hidden="true">→</span>
                  <p className="text-[15px] text-[var(--text-body)]">{w}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {a.relatedQuestions && a.relatedQuestions.length > 0 && (
        <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-soft)]">
          <Container className="py-14">
            <Eyebrow>THE DIAGNOSTIC</Eyebrow>
            <ol className="mt-6 grid gap-4">
              {a.relatedQuestions.map((q, i) => (
                <li key={q} className="flex gap-5 rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6">
                  <span className="mono-sm text-[var(--action)]">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[15px] leading-relaxed text-[var(--text-primary)]">{q}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      {a.whenNotTheProblem && (
        <section>
          <Container className="py-14">
            <div className="mx-auto max-w-[860px] rounded-[var(--radius-md)] border border-[var(--rule)] border-dashed p-6">
              <div className="mono-sm text-[var(--rad-red-ink)]">WHEN THIS IS NOT THE PROBLEM</div>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-body)]">{a.whenNotTheProblem}</p>
            </div>
          </Container>
        </section>
      )}

      {/* the body */}
      <section>
        <Container className="mx-auto max-w-[860px] py-14">
          {a.body.map((block, i) => <Block key={i} block={block} />)}
        </Container>
      </section>

      {/* artefact */}
      {a.artefact && (
        <section className="border-y border-[var(--rule)] bg-[var(--bg-deep)] text-[var(--text-on-deep)]">
          <Container className="flex flex-col items-start justify-between gap-6 py-12 lg:flex-row lg:items-center">
            <div className="max-w-[56ch]">
              <div className="mono-sm text-[var(--rule)]">{a.artefact.kind}</div>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-on-deep)]">{a.artefact.description}</p>
            </div>
            {a.linkedPage && (
              <Link href={a.linkedPage} className="mono-sm shrink-0 border-b border-[var(--rule)] pb-0.5 text-[var(--text-on-deep)] hover:text-[var(--pillar-media)]">
                {a.linkedPageLabel} →
              </Link>
            )}
          </Container>
        </section>
      )}

      <CtaBand variant={a.ctaVariant} />
    </article>
  );
}

function Block({ block }: { block: InsightBlock }) {
  switch (block.t) {
    case "h2":
      return <h2 className="mt-10 text-[clamp(22px,2.8vw,30px)] font-semibold leading-tight tracking-[-0.01em] text-[var(--text-primary)]">{block.text}</h2>;
    case "p":
      return <p className="mt-5 leading-[1.8] text-[var(--text-body)]">{block.text}</p>;
    case "list":
      return (
        <ul className="mt-5 grid gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-[var(--pillar-complete)]" aria-hidden="true">+</span>
              <span className="leading-relaxed text-[var(--text-body)]">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-8 border-l-2 border-[var(--action)] pl-6 text-xl font-medium leading-snug text-[var(--text-primary)]">
          {block.text}
        </blockquote>
      );
    case "counter":
      return (
        <div className="mt-8 rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-soft)] p-6">
          <div className="mono-sm text-[var(--rad-red-ink)]">{block.title}</div>
          <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-body)]">{block.text}</p>
        </div>
      );
    case "useIf":
      return (
        <div className="mt-8 rounded-[var(--radius-md)] border border-[var(--rule)] p-6">
          <div className="mono-sm text-[var(--rad-teal-ink)]">USE IF</div>
          <ul className="mt-3 space-y-2">
            {block.items.map((item) => (
              <li key={item} className="flex gap-2 text-[15px] text-[var(--text-body)]"><span>+</span>{item}</li>
            ))}
          </ul>
        </div>
      );
    case "notFix":
      return (
        <div className="mt-8 rounded-[var(--radius-md)] border border-[var(--rule)] border-dashed p-6">
          <div className="mono-sm text-[var(--rad-red-ink)]">DOES NOT FIX</div>
          <ul className="mt-3 space-y-2">
            {block.items.map((item) => (
              <li key={item} className="flex gap-2 text-[15px] text-[var(--text-body)]"><span>—</span>{item}</li>
            ))}
          </ul>
        </div>
      );
    case "limit":
      return (
        <p className="mt-5 rounded-[var(--radius-md)] bg-[var(--bg-tint)] px-4 py-3 text-[15px] italic leading-relaxed text-[var(--text-body)]">
          {block.text}
        </p>
      );
    default:
      return null;
  }
}