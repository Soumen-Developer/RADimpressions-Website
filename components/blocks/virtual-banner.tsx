// components/blocks/virtual-banner.tsx — navy invitation panel.

import Link from "next/link";
import { Container, ButtonLink } from "@/components/ui/primitives";

export function VirtualBanner({
  title = "You bring the business. We bring the strategy.",
  sub,
  ctaLabel = "Send us your business",
  ctaHref = "/brand-research",
}: {
  title?: string;
  sub?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-[var(--bg-deep)] text-[var(--text-on-deep)]">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center">
        <div className="max-w-[40ch]">
          <h2 className="text-[clamp(25px,3.4vw,39px)] font-semibold leading-[1.15] tracking-[-0.015em]">
            {title}
          </h2>
          {sub ? <p className="mt-3 max-w-[52ch] text-[var(--rule)]">{sub}</p> : null}
        </div>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <ButtonLink href={ctaHref} variant="onDeep" withArrow>
            {ctaLabel}
          </ButtonLink>
          <Link href="/how-we-work" className="text-sm text-[var(--rule)] underline decoration-[var(--rule-soft)] underline-offset-4 hover:decoration-white">
            How the door works →
          </Link>
        </div>
      </Container>
    </section>
  );
}