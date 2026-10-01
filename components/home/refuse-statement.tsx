"use client";

// components/home/refuse-statement.tsx — "What We Refuse" as an oversized
// typographic manifesto inside the room. Each refusal is a giant editorial
// line that strikes itself through on hover (a visual "refusal") and the
// chapter numeral hangs behind. Reduced-motion safe; content fully readable.

import { homeRefuse } from "@/content/home";
import { WordReveal } from "@/components/motion/word-reveal";

export function RefuseStatement() {
  return (
    <section
      id="e-line"
      className="relative overflow-hidden border-y border-[var(--rule-soft)] bg-[var(--bg-deep)] px-5 py-24 sm:px-10 sm:py-32"
      aria-labelledby="refuse-heading"
    >
      <span className="ghost-num ghost-num--grid absolute -left-6 bottom-0 hidden opacity-60 lg:block" aria-hidden="true">
        06
      </span>

      <div className="relative mx-auto max-w-[1440px]">
        <span
          id="refuse-heading"
          className="eyebrow inline-flex items-center gap-3 bg-[var(--rad-red)] px-3 py-1 !text-white"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
          REFUSE
        </span>
        <h2 className="display mt-6 max-w-[12ch] leading-[0.85] tracking-[-0.045em] text-[var(--text-primary)]">
          <WordReveal text={homeRefuse.heading} amount={0.2} />
        </h2>

        <ul className="mt-16">
          {homeRefuse.items.map((item, i) => (
            <li
              key={i}
              className="group flex cursor-default items-baseline gap-4 border-b border-[var(--rule-soft)] py-4 transition-colors hover:border-[var(--rad-red)] sm:gap-6"
            >
              <span className="mono-sm w-10 shrink-0 text-[var(--text-muted)]">{String(i + 1).padStart(2, "0")}</span>
              <span
                className={`display text-[clamp(24px,5vw,64px)] flex-1 leading-[1.05] tracking-[-0.02em] text-[var(--text-primary)] transition-all duration-200 group-hover:line-through group-hover:decoration-[var(--rad-red)] group-hover:decoration-4 ${
                  i === 0 ? "!text-[clamp(22px,4.4vw,56px)]" : ""
                }`}
              >
                {item}
              </span>
              <span className="hidden w-8 shrink-0 text-[var(--action-loud)] transition-transform duration-200 group-hover:-translate-y-1 sm:block" aria-hidden="true">
                ✕
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-[46ch] text-sm leading-relaxed text-[var(--text-muted)]">
          Hover a line. That is what we do to ideas that don&apos;t hold — we strike them, and say why.
        </p>
      </div>
    </section>
  );
}