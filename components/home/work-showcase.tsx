"use client";

// components/home/work-showcase.tsx — the real RADimpression portfolio as the
// home page's central visual experience. A full-viewport pinned sequence:
// as you scroll, each real project fills the stage with its cover image, a
// big editorial title, its category, and a one-line story — then the next
// project rises in. The change is scroll-driven, so reduced-motion and
// keyboard users get every project in sequence. Every slide links to the
// real case study.

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSectionActive } from "@/components/motion/use-scroll-active";
import { workProjects } from "@/content/work";
import { Arrow } from "@/components/ui/primitives";

const disciplineLabel: Record<string, string> = {
  web: "Web",
  brand: "Brand",
  media: "Media",
  motion: "Motion",
};

export function WorkShowcase() {
  const ids = useMemo(() => workProjects.map((p) => `wrk-${p.slug}`), []);
  const { active } = useSectionActive(ids, "-20% 0px -75% 0px");
  const idx = Math.max(0, workProjects.findIndex((p) => `wrk-${p.slug}` === active));
  const p = workProjects[idx];

  return (
    <section id="e-evidence" className="relative border-y border-[var(--rule-soft)]" aria-label="Selected work">
      {/* pinned stage — first child; acts provide scroll length */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div key={p.slug} className="rad-swap absolute inset-0">
          <Image
            src={p.image}
            alt={`${p.client} — ${p.category}`}
            fill
            priority={idx < 3}
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(11,8,9,0.94), rgba(11,8,9,0.4) 45%, rgba(11,8,9,0.28))" }}
          />
          {/* ghost chapter numeral */}
          <span
            className="ghost-num ghost-num--grid absolute -top-6 right-4 hidden opacity-90 lg:block"
            style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.35)" }}
            aria-hidden="true"
          >
            {String(idx + 1).padStart(2, "0")}
          </span>
          {/* spectrum accent wash */}
          <div className="absolute inset-x-0 top-0 h-1.5 flex" aria-hidden="true">
            <span className="flex-1" style={{ background: p.accent }} />
          </div>
        </div>

        {/* content */}
        <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-16 pt-24 text-white sm:px-10 sm:pb-20">
          <div className="max-w-[1200px]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="mono-sm rounded-[var(--radius-pill)] bg-white/10 px-3 py-1 backdrop-blur" style={{ border: "1px solid rgba(255,255,255,0.25)" }}>
                E04 / THE EVIDENCE
              </span>
              <span className="mono-sm rounded-[var(--radius-pill)] bg-white/10 px-3 py-1 backdrop-blur" style={{ border: "1px solid rgba(255,255,255,0.25)" }}>
                {disciplineLabel[p.discipline] ?? p.discipline} · {p.category}
              </span>
              <span className="mono-sm text-white/70">{p.location}</span>
              <span className="mono-sm text-white/70">{String(idx + 1).padStart(2, "0")} / {String(workProjects.length).padStart(2, "0")}</span>
            </div>

            <h2 className="display mt-6 max-w-[16ch] leading-[0.92] tracking-[-0.03em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
              {p.title}
            </h2>
            <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-white/85 sm:text-lg">{p.tagline}</p>

            <Link
              href={`/work/${p.slug}`}
              className="mt-7 inline-flex items-center gap-2 rounded-[var(--radius-md)] px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
              style={{ background: p.accent === "var(--rad-charcoal)" ? "var(--rad-red)" : p.accent }}
            >
              Read the {p.client} case study <Arrow />
            </Link>
          </div>
        </div>

        {/* progress rail */}
        <div className="absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex" aria-hidden="true">
          {workProjects.map((_, i) => (
            <span key={i} className="h-2 w-2 rounded-full transition-colors" style={{ background: i === idx ? "#ffffff" : "rgba(255,255,255,0.35)" }} />
          ))}
        </div>
      </div>

      {/* scroll acts */}
      <div>
        {workProjects.map((a) => (
          <div key={a.slug} id={`wrk-${a.slug}`} aria-hidden="true" className="h-screen" />
        ))}
      </div>
    </section>
  );
}
