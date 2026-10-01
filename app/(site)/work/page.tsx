// app/(site)/work/page.tsx — the REAL Work index. A full-bleed gallery of the
// real RADimpression engagements (content/work.ts), each an oversized preview
// with the cover image, category, location, and a one-line story linking to
// the immersive case study. Concept brands follow as a second band. Nothing is
// invented.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { PageLead } from "@/components/ui/page-lead";
import { workProjects, conceptBrands } from "@/content/work";
import { miscContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work — RADIMPRESSION",
  description: "Selected client work from RADimpression — web, brand, media, and motion. Real engagements, made to make an impression that sticks.",
};

const disciplineLabel: Record<string, string> = {
  web: "Web",
  brand: "Brand",
  media: "Media",
  motion: "Motion",
};

export default function WorkPage() {
  return (
    <>
      {/* intro */}
      <PageLead
        eyebrow="SELECTED WORK"
        title="Work, when it is real."
        intro="Not stock composites. Eight real engagements — from a Pune property developer to a London ERP consultancy — made to make an impression that sticks."
        plate="PLATE 05"
        tone="soft"
      />

      {/* gallery */}
      <section>
        <Container className="py-8 sm:py-10">
          <div className="grid gap-x-8 gap-y-16 lg:grid-cols-12">
            {workProjects.map((p, i) => (
              <WorkRow key={p.slug} p={p} i={i} count={workProjects.length} />
            ))}
          </div>
        </Container>
      </section>

      {/* concept brands */}
      <section className="border-t border-[var(--rule)] bg-[var(--bg-deep)] text-[var(--text-on-deep)]">
        <Container className="py-14 sm:py-16 lg:py-24">
          <Eyebrow className="!text-[var(--rule)]">CONCEPT BRANDS</Eyebrow>
          <h2 className="mt-5 max-w-[22ch] text-[clamp(28px,4vw,46px)] font-bold leading-[1.02] tracking-[-0.02em] text-[var(--text-on-deep)]">
            Made up by us, to prove we think in full brands.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {conceptBrands.map((b) => (
              <div
                key={b.slug}
                className="group relative aspect-[4/5] overflow-hidden rounded-[var(--radius-md)] border border-[var(--rule)]"
              >
                <Image
                  src={b.image}
                  alt={b.name}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 [transition-timing-function:var(--ease-brand)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,12,20,0.9), rgba(12,12,20,0.1) 55%)" }} />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mono-sm text-white/70">{b.sector.toUpperCase()}</div>
                  <div className="display mt-2 text-3xl leading-none tracking-[-0.02em] text-white">{b.name}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[60ch] text-sm leading-relaxed text-[var(--rule)]">
            {miscContent.workEmptyState.body}
          </p>
        </Container>
      </section>
    </>
  );
}

function WorkRow({ p, i, count }: { p: (typeof workProjects)[number]; i: number; count: number }) {
  const wide = i % 3 === 0;
  const dark = p.accent === "var(--rad-charcoal)" ? "var(--rad-navy)" : p.accent;

  return (
    <Link
      href={`/work/${p.slug}`}
      className={`group block ${wide ? "lg:col-span-12" : "lg:col-span-6"}`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="mono-sm text-[var(--text-muted)]">{String(i + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</span>
        <span
          className="mono-sm rounded-[var(--radius-pill)] px-3 py-1 text-white"
          style={{ background: dark }}
        >
          {disciplineLabel[p.discipline] ?? p.discipline} · {p.category}
        </span>
        <span className="mono-sm text-[var(--text-muted)]">{p.location} · {p.date}</span>
      </div>

      <div
        className={`relative mt-4 h-[440px] overflow-hidden rounded-[var(--radius-md)] border border-[var(--rule)] sm:h-[520px] ${wide ? "lg:h-[660px]" : "lg:h-[520px]"}`}
      >
        <Image
          src={p.image}
          alt={`${p.client} — ${p.category}`}
          fill
          priority={i < 3}
          sizes="(max-width:768px) 100vw, (min-width:769px) 50vw"
          className="object-cover transition-transform duration-700 [transition-timing-function:var(--ease-brand)] group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(16,16,24,0.86), rgba(16,16,24,0.1) 50%)" }} />
        <div className="absolute inset-x-0 top-0 h-1.5 flex" aria-hidden="true">
          <span className="flex-1" style={{ background: dark }} />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <div className="mono-sm text-white/70">{p.client} — {p.sector}</div>
          <h3 className="display mt-3 max-w-[20ch] leading-[0.95] tracking-[-0.02em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
            {p.tagline}
          </h3>
        </div>
      </div>
    </Link>
  );
}
