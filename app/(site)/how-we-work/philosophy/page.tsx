// app/(site)/how-we-work/philosophy/page.tsx — the long-form essay (SITEMAP
// D.3). Editorial, single 720px column. Sticky ToC in the left margin at
// >=1280px, collapsed summary below xl. No cards, no icons, no diagrams.

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import { CtaBand } from "@/components/blocks/cta-band";
import { SectionToc } from "@/components/blocks/section-toc";
import { slugOf } from "@/lib/slug";
import { philosophy } from "@/content/how-we-work";

export const metadata: Metadata = {
  title: "Our Philosophy — RADIMPRESSION",
  description:
    "Marketing is bought in the wrong order. The position first, the communication system second, the media last. What we believe about branding, measurement, and choosing clients.",
};

export default function PhilosophyPage() {
  const headings = philosophy.sections.map((s) => s.heading);

  return (
    <>
      <section className="border-b border-[var(--rule)]">
        <Container className="pt-16 sm:pt-20 lg:pt-28">
          <div className="max-w-[900px]">
            <div className="flex items-start justify-between gap-6">
              <div className="mono-sm text-[var(--action)]">PHILOSOPHY</div>
              <span className="mono-sm text-[var(--text-muted)]" aria-hidden="true">PLATE 02·B</span>
            </div>
            <h1 className="mt-5 text-[clamp(39px,6vw,61px)] font-semibold leading-[1.02] tracking-[-0.02em]">
              Our position, in the order we take it.
            </h1>
            <p className="mt-6 text-sm text-[var(--text-muted)]">
              {philosophy.readTime} · THE PAGE WE SEND A SERIOUS PROSPECT INSTEAD OF A PITCH.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 xl:grid-cols-[240px_1fr] xl:items-start">
            <div className="xl:sticky xl:top-28 xl:self-start">
              <SectionToc headings={headings} />
              <div className="hidden xl:block">
                <div className="mono-sm mt-10 !text-[10px] text-[var(--text-muted)]">ALSO READ</div>
                <a href="#close" className="mt-2 block text-sm font-medium text-[var(--action)] hover:underline">
                  Where the thinking ends →
                </a>
              </div>
            </div>

            <div className="mx-auto max-w-[720px] pt-2 text-[17px] leading-[1.85] text-[var(--text-body)]">
              <CollapsedToc headings={headings} />
              {philosophy.sections.map((s, i) => (
                <section key={s.heading} id={slugOf(s.heading)} className="scroll-mt-28">
                  <h2 className="mt-14 text-[clamp(24px,3vw,32px)] font-semibold leading-tight tracking-[-0.01em] text-[var(--text-primary)]">
                    <span className="mono-sm mr-3 align-middle !text-sm text-[var(--action)]">{String(i + 1).padStart(2, "0")}</span>
                    {s.heading}
                  </h2>
                  {s.paragraphs.map((p, j) => (
                    <p key={j} className="mt-6">
                      {p}
                    </p>
                  ))}
                  {s.pullquote ? (
                    <blockquote className="mt-8 border-l-2 border-[var(--action)] pl-6 text-xl font-medium leading-snug text-[var(--text-primary)]">
                      {s.pullquote}
                    </blockquote>
                  ) : null}
                </section>
              ))}

              <div id="close" className="mt-20 flex flex-col gap-6 rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-soft)] p-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="mono-sm !text-[10px] text-[var(--text-muted)]">THE PRACTICE, IN SHORTER FORM</div>
                  <p className="mt-2 text-lg font-semibold text-[var(--text-primary)]">Why the position comes first.</p>
                </div>
                <div className="flex flex-wrap gap-5 text-sm font-medium">
                  <Link href="/how-we-work" className="text-[var(--action)] hover:underline">
                    How we work →
                  </Link>
                  <Link href="/services" className="text-[var(--action)] hover:underline">
                    The four pillars →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand variant="research" />
    </>
  );
}

function CollapsedToc({ headings }: { headings: string[] }) {
  return (
    <details className="rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-soft)] p-5 xl:hidden">
      <summary className="mono-sm cursor-pointer !text-[10px] text-[var(--text-muted)]">ON THIS PAGE</summary>
      <ol className="mt-3 space-y-2 text-sm">
        {headings.map((h) => (
          <li key={h}>
            <a href={`#${slugOf(h)}`} className="text-[var(--text-body)] hover:text-[var(--text-primary)]">
              {h}
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
}