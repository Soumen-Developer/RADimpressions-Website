// components/ui/page-lead.tsx — the edition masthead lifted from the homepage
// brief into every top-level page: a mono plate row, a word-reveal headline,
// and a lede. Replaces the repeated plain intro band so the whole site reads
// as one numbered document.

import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { WordReveal } from "@/components/motion/word-reveal";
import { cn } from "@/lib/cn";

export function PageLead({
  eyebrow,
  title,
  intro,
  plate,
  tone = "light",
  accent,
  meta,
  className,
  containerClassName,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  plate?: string;
  tone?: "light" | "soft";
  accent?: string;
  meta?: ReactNode;
  className?: string;
  containerClassName?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className={cn(
        "border-b border-[var(--rule)]",
        tone === "soft" && "bg-[var(--bg-soft)]",
        className
      )}
    >
      <Container className={cn("py-14 sm:py-16 lg:py-24", containerClassName)}>
        {meta ? (
          <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2">{meta}</div>
        ) : null}
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            {accent ? (
              <span className="inline-block h-3 w-3 shrink-0" style={{ background: accent }} aria-hidden="true" />
            ) : null}
            <Eyebrow className="pt-[3px]">{eyebrow}</Eyebrow>
          </div>
          {plate ? (
            <span className="mono-sm whitespace-nowrap text-[var(--text-muted)]" aria-hidden="true">
              {plate}
            </span>
          ) : null}
        </div>
        <h1 className="mt-5 max-w-[20ch] text-[clamp(39px,6vw,64px)] font-bold leading-[0.96] tracking-[-0.03em] text-[var(--text-primary)]">
          <WordReveal text={title} />
        </h1>
        {intro ? (
          <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-[var(--text-body)]">{intro}</p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </section>
  );
}