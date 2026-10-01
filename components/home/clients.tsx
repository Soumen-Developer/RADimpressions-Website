"use client";

// components/home/clients.tsx — "The Wall". Four real client logos hang as
// printed cards on the dark room wall; picking one opens its ledger — the
// project, what we did, and the result. All copy comes from the real case
// studies in content/work.ts; nothing is invented. Keyboard-accessible
// (radio-style buttons).

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { workProjects } from "@/content/work";
import { Eyebrow, Arrow } from "@/components/ui/primitives";

interface ClientCard {
  key: string;
  name: string;
  logo: string;
  project: (typeof workProjects)[number];
}

const clients: ClientCard[] = workProjects
  .filter((p) => ["basil", "ecothereal", "rozella", "jbc"].includes(p.slug))
  .map((p) => ({
    key: p.slug,
    name: p.client,
    logo: `/logos/${p.slug}.png`,
    project: p,
  }));

export function Clients() {
  const [idx, setIdx] = useState(0);
  const active = clients[idx];
  const accent = active.project.accent === "var(--rad-charcoal)" ? "var(--rad-navy)" : active.project.accent;

  return (
    <section id="e-proof" className="relative overflow-hidden border-y border-[var(--rule-soft)] bg-[var(--bg-page)]" aria-label="Our clients">
      <span className="ghost-num ghost-num--grid absolute -right-4 top-8 hidden opacity-70 lg:block" aria-hidden="true">
        05
      </span>
      <div className="mx-auto w-full max-w-[1440px] px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
        <div className="relative max-w-[50ch]">
          <Eyebrow className="chapter-kick">E05 / THE PROOF</Eyebrow>
          <h2 className="display mt-6 max-w-[12ch] text-[clamp(34px,5vw,60px)] font-extrabold leading-[0.95] tracking-[-0.03em] text-[var(--text-primary)]">
            Real brands, <span className="text-serif-it font-normal">real results.</span>
          </h2>
          <p className="lede mt-5 text-[var(--text-body)]">
            Pick a client off the wall. Follow the path — project, the work, the
            result. Every one of these is a real engagement.
          </p>
        </div>

        {/* the wall — client logo selector */}
        <div className="mt-12 flex flex-wrap items-stretch gap-4" role="tablist" aria-label="Clients">
          {clients.map((c, i) => {
            const isActive = i === idx;
            return (
              <button
                key={c.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setIdx(i)}
                className={`group relative overflow-hidden rounded-[var(--radius-sm)] border p-2 transition-all duration-300 [transition-timing-function:var(--ease-brand)] ${
                  isActive
                    ? "border-[var(--action-loud)] shadow-[0_0_0_1px_var(--action-loud)]"
                    : "border-[var(--rule)] hover:border-[var(--rule-strong)]"
                }`}
                aria-label={c.name}
              >
                <span className="relative block h-12 w-28 rounded-[4px] bg-white/95 px-3 py-2">
                  <Image src={c.logo} alt="" fill sizes="112px" className="object-contain" />
                </span>
                <span className="sr-only">{c.name}</span>
              </button>
            );
          })}
        </div>

        {/* active client ledger */}
        <div
          key={active.key}
          className="rad-swap relative mt-10 overflow-hidden rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-soft)]"
        >
          {/* client accent bar */}
          <span className="absolute inset-x-0 top-0 h-1" style={{ background: accent }} aria-hidden="true" />
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <div className="mono-sm text-[var(--text-muted)]">
                {active.project.category} · {active.project.sector} · {active.project.location} · {active.project.date}
              </div>
              <h3 className="display mt-5 max-w-[14ch] text-[clamp(30px,4vw,46px)] font-extrabold leading-[0.98] tracking-[-0.03em] text-[var(--text-primary)]">
                {active.project.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-body)]">{active.project.platform}</p>
              <Link
                href={`/work/${active.key}`}
                className="mt-7 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-white px-6 py-3.5 text-sm font-bold text-[var(--bg-deep)] transition-transform hover:-translate-y-0.5"
              >
                Read the {active.name} case study <Arrow />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-10 sm:grid-cols-2">
                <div>
                  <div className="eyebrow text-[var(--text-muted)]">WHAT WE DID</div>
                  <ul className="mt-5 space-y-3">
                    {active.project.solutions.slice(0, 3).map((s) => (
                      <li key={s} className="flex gap-3">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: active.project.accent === "var(--rad-charcoal)" ? "var(--pillar-comms)" : active.project.accent }}
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-snug text-[var(--text-body)]">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="eyebrow text-[var(--text-muted)]">THE RESULT</div>
                  <ul className="mt-5 space-y-3">
                    {active.project.resultPoints.map((r) => (
                      <li key={r} className="flex gap-3">
                        <span className="mt-0.5 text-[var(--action-loud)]" aria-hidden="true">
                          →
                        </span>
                        <span className="text-sm font-medium leading-snug text-[var(--text-primary)]">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="mt-8 rounded-[var(--radius-sm)] border-l-2 bg-[var(--bg-page)] p-5"
                style={{ borderColor: accent }}
              >
                <p className="text-serif-it text-[16px] leading-relaxed text-[var(--text-body)]">{active.project.result}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}