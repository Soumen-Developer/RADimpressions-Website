// components/blocks/cta-band.tsx — the closing band, one per page, in three
// variants: research | consulting | work.

import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import { ButtonLink } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";
import type { CtaVariant } from "@/lib/types";

interface CtaConfig {
  eyebrow: string;
  title: string;
  sub: string;
  ctaLabel: string;
  ctaHref: string;
  softLabel?: string;
  softHref?: string;
  capacityLine: string;
  visualLabel: string;
}

const configs: Record<CtaVariant, CtaConfig> = {
  research: {
    eyebrow: "THE DOOR, IN FULL",
    title: "Send us your business. You'll hear back within 72 hours.",
    sub: "It's a full-service agency, but a careful one. We read your business properly, decide honestly, and reply to every submission — within 72 hours, always.",
    ctaLabel: "Start brand research",
    ctaHref: "/brand-research",
    softLabel: "Read how the door works",
    softHref: "/how-we-work",
    capacityLine: "Five new engagements a quarter. Two sprint slots a month.",
    visualLabel: "BRAND RESEARCH",
  },
  consulting: {
    eyebrow: "THE ENGAGEMENT",
    title: "One team. One accountable line. A written plan.",
    sub: "Strategy, Brand Communication, and Media held together — scoped in writing, owned by a named lead, reviewed quarterly.",
    ctaLabel: "Start with brand research",
    ctaHref: "/brand-research",
    softLabel: "See consulting in full",
    softHref: "/consulting",
    capacityLine: "The proposal names the scope, the owner, and the schedule.",
    visualLabel: "CONSULTING",
  },
  work: {
    eyebrow: "THE PROOF",
    title: "The work is the argument. We're writing it, not inventing it.",
    sub: "Case studies are real engagements — none are composites. The first set lands here when the founder signs it off.",
    ctaLabel: "Browse the work",
    ctaHref: "/work",
    capacityLine: "Until then, the filter and the empty state stand in honestly.",
    visualLabel: "THE WORK",
  },
};

export function CtaBand({
  variant = "research",
  className,
}: {
  variant?: CtaVariant;
  className?: string;
}) {
  const c = configs[variant];
  return (
    <section className={cn("bg-[var(--bg-deep)] text-[var(--text-on-deep)]", className)} aria-labelledby="cta-title">
      <Container className="py-20 sm:py-24">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[36ch]">
            <div className="eyebrow mb-4 !text-[var(--rule)]">{c.eyebrow}</div>
            <h2 id="cta-title" className="text-[clamp(31px,4vw,49px)] font-semibold leading-[1.08] tracking-[-0.02em]">
              {c.title}
            </h2>
            <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-[var(--rule)]">{c.sub}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href={c.ctaHref} variant="onDeep" withArrow>
                {c.ctaLabel}
              </ButtonLink>
              {c.softLabel && c.softHref ? (
                <Link href={c.softHref} className="text-sm font-medium text-[var(--text-on-deep)] underline decoration-[var(--rule-soft)] underline-offset-4 hover:decoration-white">
                  {c.softLabel} →
                </Link>
              ) : null}
            </div>
            <div className="mono-sm mt-8 !text-[11px] text-[var(--rule)]">{c.capacityLine}</div>
          </div>

          {/* the visual field — colour block */}
          <div className="hidden shrink-0 lg:block" aria-hidden="true">
            <div className="flex flex-col">
              <div className="flex h-20 w-20 items-center justify-center rounded-[var(--radius-md)]">
                <span className="block h-16 w-16 rounded-[var(--radius-sm)]" style={{ background: "var(--rad-red)" }} />
              </div>
              <div className="mono-sm mt-3 text-right !text-[10px] text-[var(--rule)]">{c.visualLabel}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}