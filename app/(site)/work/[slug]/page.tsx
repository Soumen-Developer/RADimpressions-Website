// app/(site)/work/[slug]/page.tsx — the REAL case study template. Each project
// reads from content/work.ts (real engagements from www.radimpression.com).
// Structure is a visual story: hero image -> Challenge -> Platform/Brief ->
// Tactic/Strategy -> What we did -> Result. Everything renders from data;
// nothing is invented here.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { bySlug, workProjects } from "@/content/work";

type Params = { slug: string };

export function generateStaticParams() {
  return workProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = bySlug(slug);
  return p
    ? { title: `${p.client} — Work · RADIMPRESSION`, description: (p.tagline || p.challenge).slice(0, 155) }
    : {};
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = bySlug(slug);
  if (!p) notFound();

  const idx = workProjects.findIndex((w) => w.slug === slug);
  const next = workProjects[(idx + 1) % workProjects.length];
  const prev = workProjects[(idx - 1 + workProjects.length) % workProjects.length];

  const dark = p.accent === "var(--rad-charcoal)" ? "var(--rad-navy)" : p.accent;

  return (
    <article>
      {/* ── Hero: oversized full-bleed image + editorial header ── */}
      <section className="relative min-h-[92svh] overflow-hidden bg-[var(--bg-deep)] text-[var(--text-on-deep)]">
        <Image
          src={p.image}
          alt={`${p.client} — ${p.category}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, rgba(16,16,24,0.94) 0%, rgba(16,16,24,0.55) 40%, rgba(16,16,24,0.35) 70%, rgba(16,16,24,0.25) 100%)`,
          }}
        />
        <div className="absolute inset-x-0 top-0 h-1.5 flex" aria-hidden="true">
          <span className="flex-1" style={{ background: dark }} />
        </div>

        <Container className="relative z-10 flex min-h-[92svh] flex-col justify-end pt-32 pb-16">
          <div className="flex flex-wrap items-center gap-3">
            <span className="mono-sm text-white/75">
              PLATE 05·{String.fromCharCode(65 + idx)}
            </span>
            <span className="mono-sm rounded-[var(--radius-pill)] px-3 py-1 text-white" style={{ background: dark, border: "1px solid rgba(255,255,255,0.2)" }}>
              {p.category}
            </span>
            <span className="mono-sm text-white/75">{p.sector} · {p.location} · {p.date}</span>
          </div>
          <h1 className="display mt-6 max-w-[20ch] leading-[0.9] tracking-[-0.03em] drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]">
            {p.title}
          </h1>
          <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-white/85 sm:text-xl">{p.tagline}</p>
        </Container>
      </section>

      {/* ── Platform / brief ── */}
      <section className="border-b border-[var(--rule-soft)]">
        <Container className="py-14 sm:py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>THE BRIEF</Eyebrow>
            </div>
            <div className="lg:col-span-8">
              <p className="max-w-[60ch] text-xl leading-relaxed text-[var(--text-primary)] sm:text-2xl">{p.platform}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Challenge ── */}
      <section className="border-b border-[var(--rule-soft)] bg-[var(--bg-soft)]">
        <Container className="grid gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <Eyebrow>THE CHALLENGE</Eyebrow>
          </div>
          <div className="lg:col-span-8">
            <p className="max-w-[60ch] text-lg leading-relaxed text-[var(--text-body)]">{p.challenge}</p>
          </div>
        </Container>
      </section>

      {/* ── Strategy / Tactic ── */}
      <section className="border-b border-[var(--rule-soft)]">
        <Container className="grid gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <Eyebrow>OUR MOVE</Eyebrow>
          </div>
          <div className="lg:col-span-8">
            <p className="max-w-[60ch] text-lg leading-relaxed text-[var(--text-body)]">{p.tactic}</p>
          </div>
        </Container>
      </section>

      {/* ── What we did ── */}
      <section className="border-b border-[var(--rule-soft)] bg-[var(--bg-deep)] text-[var(--text-on-deep)]">
        <Container className="py-14 sm:py-16 lg:py-24">
          <Eyebrow className="mb-8 !text-[var(--rule)]">WHAT WE DID</Eyebrow>
          <ul className="grid gap-4 md:grid-cols-2">
            {p.solutions.map((s, i) => (
              <li key={s} className="rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)]/5 p-6">
                <div className="mono-sm text-[var(--pillar-comms)]">{String(i + 1).padStart(2, "0")}</div>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-on-deep)]">{s}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Result ── */}
      <section style={{ background: "var(--bg-page)" }}>
        <Container className="grid gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <Eyebrow>THE RESULT</Eyebrow>
            <div className="mt-6 inline-block h-2 w-16" style={{ background: dark }} aria-hidden="true" />
          </div>
          <div className="lg:col-span-8">
            <p className="max-w-[60ch] text-lg leading-relaxed text-[var(--text-primary)]">{p.result}</p>
            <ul className="mt-8 grid gap-3">
              {p.resultPoints.map((r) => (
                <li key={r} className="flex gap-3 border-b border-[var(--rule-soft)] pb-3">
                  <span className="text-[var(--action)]" aria-hidden="true">→</span>
                  <span className="text-[15px] font-medium text-[var(--text-body)]">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── Prev / next ── */}
      <section className="border-t border-[var(--rule)] bg-[var(--bg-soft)]">
        <Container className="grid gap-px py-14 sm:py-18 md:grid-cols-2">
          <Link
            href={`/work/${prev.slug}`}
            className="group flex flex-col justify-between gap-6 pr-6 py-2 md:border-r md:border-[var(--rule)]"
          >
            <span className="mono-sm text-[var(--text-muted)]">← PREVIOUS</span>
            <div>
              <div className="text-[var(--text-muted)]">{prev.category}</div>
              <div className="display mt-2 text-2xl leading-tight tracking-[-0.02em] text-[var(--text-primary)] group-hover:underline">
                {prev.client}
              </div>
            </div>
          </Link>
          <Link href={`/work/${next.slug}`} className="group flex flex-col items-end justify-between gap-6 py-2 pl-6 text-right">
            <span className="mono-sm text-[var(--text-muted)]">NEXT →</span>
            <div>
              <div className="text-[var(--text-muted)]">{next.category}</div>
              <div className="display mt-2 text-2xl leading-tight tracking-[-0.02em] text-[var(--text-primary)] group-hover:underline">
                {next.client}
              </div>
            </div>
          </Link>
        </Container>
      </section>
    </article>
  );
}
