// app/(site)/page.tsx — the home page. Full-service agency identity with a
// Readymag-inspired interactive model: cursor-reactive hero, pinned Four
// Disciplines system, scrubbable editorial Work strip, and an oversized
// typographic "What We Refuse" statement. Real claims preserved: 72-hour
// reply, five engagements a quarter, ₹499 call, honest work index.

import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeading, Tag, Arrow, Eyebrow } from "@/components/ui/primitives";
import { CtaBand } from "@/components/blocks/cta-band";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/motion/reveal";
import { Marquee } from "@/components/motion/marquee";
import { HeroPlayground } from "@/components/home/hero-playground";
import { DisciplinesOrbit } from "@/components/home/disciplines-orbit";
import { WorkShowcase } from "@/components/home/work-showcase";
import { Clients } from "@/components/home/clients";
import { RefuseStatement } from "@/components/home/refuse-statement";
import { ScrollThread } from "@/components/home/scroll-thread";
import * as home from "@/content/home";
import { faqContent } from "@/lib/content";
import { industries, industryOrder } from "@/lib/brand";

export const metadata: Metadata = {
  title: "RADIMPRESSION — Full-service creative & digital advertising agency",
  description:
    "A full-service creative & digital advertising agency. Brand strategy, graphic design & branding, web development, marketplace and performance marketing — one team, from the same brief. Think big. Advertise smart.",
};

const marqueeItems = [
  "BRAND STRATEGY",
  "GRAPHIC DESIGN",
  "WEB DEVELOPMENT",
  "MARKETPLACE MANAGEMENT",
  "PERFORMANCE MARKETING",
  "CREATIVE & CONTENT",
];

const marqueeTones = ["var(--rad-red)", "var(--rad-teal)", "var(--rad-navy)", "var(--rad-gold)", "var(--rad-green)", "var(--rad-charcoal)"];

// one brief → one journey. The red thread names each chapter as it crosses
// the middle of the viewport (E01 → E08).
const threadChapters = [
  { id: "e-brief", label: "THE BRIEF" },
  { id: "e-system", label: "THE SYSTEM" },
  { id: "e-terms", label: "THE TERMS" },
  { id: "e-evidence", label: "THE EVIDENCE" },
  { id: "e-proof", label: "THE PROOF" },
  { id: "e-line", label: "THE LINE" },
  { id: "e-field", label: "THE FIELD" },
  { id: "e-door", label: "THE DOOR" },
];

export default function HomePage() {
  const generalFaqs = faqContent.byScope(["general"]).slice(0, 5);
  return (
    <>
      {/* ── Interactive hero — cursor-reactive tagline ─────────────────── */}
      <HeroPlayground />

      {/* ── Marquee — the disciplines ──────────────────────────────────── */}
      <section className="border-y border-white/10 bg-[var(--rad-charcoal-dark)] py-6">
        <Marquee>
          <div className="flex items-center gap-10 pr-10">
            {marqueeItems.map((m, i) => (
              <span key={m} className="flex items-center gap-10">
                <span className="display text-xl font-extrabold tracking-[-0.01em] text-white">{m}</span>
                <span className="h-2 w-2 rounded-full" style={{ background: marqueeTones[i % marqueeTones.length] }} aria-hidden="true" />
              </span>
            ))}
          </div>
        </Marquee>
      </section>

      {/* ── Four Disciplines — ONE interactive, scroll-driven system ────── */}
      <DisciplinesOrbit />

      {/* ── The honest claims — capacity + 72 hrs ──────────────────────── */}
      <section id="e-terms" className="relative overflow-hidden bg-[var(--bg-page)]">
        <span
          className="ghost-num ghost-num--grid absolute -right-4 top-10 hidden opacity-80 lg:block"
          aria-hidden="true"
        >
          03
        </span>
        <Container className="relative py-24 sm:py-32">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-start">
            <div>
              <Eyebrow className="chapter-kick">E03 / THE TERMS</Eyebrow>
              <h2 className="display mt-6 max-w-[14ch] text-[clamp(34px,5vw,64px)] font-extrabold leading-[0.98] tracking-[-0.03em] text-[var(--text-primary)]">
                {home.homeSla.heading}
              </h2>
              <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-[var(--text-body)]">{home.homeSla.body}</p>

              <div className="mt-12 grid gap-8 sm:grid-cols-3">
                {home.homeSla.widgets.map((w) => (
                  <div key={w.label} className="border-t border-[var(--rule)] pt-4">
                    <div className="mono-sm text-[var(--text-muted)]">{w.label}</div>
                    <div className="display mt-2 text-[clamp(30px,3.6vw,46px)] font-bold leading-none tracking-[-0.02em] text-[var(--text-primary)]">
                      {w.value}
                    </div>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">{w.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[var(--rule)] lg:mt-1">
              <div className="eyebrow mt-8 lg:mt-0">THE RULES OF THE DOOR</div>
              <ul className="mt-6 space-y-0">
                {home.homeGive.rules.map((r, i) => (
                  <Reveal key={r} as="li" delay={i * 90}>
                    <div className="flex items-start gap-5 border-b border-[var(--rule-soft)] py-6">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--rad-gold)] text-sm font-bold text-[var(--rad-ink)]">
                        {i + 1}
                      </span>
                      <p className="text-serif-it text-[clamp(18px,2.2vw,24px)] leading-snug text-[var(--text-primary)]">
                        {r}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── The real work — the central visual experience ──────────────── */}
      <WorkShowcase />

      {/* ── The clients — the real logos, each opening its path to a result ── */}
      <Clients />

      {/* ── What we refuse — oversized type ──────────────────────────────── */}
      <RefuseStatement />

      {/* ── The honest assertion + who it's not for ─────────────────────── */}
      <section className="border-t border-[var(--rule-soft)] py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--rad-navy)] bg-[var(--bg-soft)] p-8 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-[40ch]">
                <Eyebrow className="chapter-kick mb-4">THE ASSERTION</Eyebrow>
                <p className="text-[clamp(22px,3vw,34px)] font-bold leading-snug tracking-[-0.01em] text-[var(--text-primary)]">
                  {home.homeAssertion[0]}
                </p>
                <p className="mt-3 text-[var(--text-body)]">{home.homeAssertion[1]}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 lg:mt-0 lg:max-w-[42%]">
                <div className="eyebrow mb-1 w-full text-[var(--text-muted)]">NOT FOR YOU IF…</div>
                {home.homeNotFor.items.map((n) => (
                  <Tag key={n} tone="deep">
                    {n}
                  </Tag>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Process — how it starts ────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="HOW IT STARTS"
              title="Four moves from the door."
              intro="The whole entry, in the order it happens. Nothing before the form, nothing after the verdict."
              className="max-w-[22ch]"
            />
          </Reveal>
          <ul className="mt-16 border-t border-[var(--rule-soft)]">
            {home.homeProcess.map((step, i) => (
              <Reveal key={step.index} as="li" delay={i * 70}>
                <div className="group flex items-center gap-6 border-b border-[var(--rule-soft)] py-6 sm:gap-10 sm:py-8">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white transition-colors"
                    style={{ background: marqueeTones[i % 4] }}
                  >
                    {step.index}
                  </span>
                  <div className="min-w-0">
                    <h3 className="display text-[clamp(22px,3vw,34px)] font-bold leading-none tracking-[-0.02em] text-[var(--text-primary)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[58ch] text-sm leading-relaxed text-[var(--text-muted)]">{step.body}</p>
                  </div>
                  <Arrow className="ml-auto hidden shrink-0 text-[var(--text-muted)] transition-colors group-hover:text-[var(--rad-red)] sm:block" />
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-[var(--radius-sm)] border border-[var(--rule)] bg-[var(--bg-soft)] px-6 py-5 sm:flex-row sm:items-center">
              <p className="text-lg font-semibold text-[var(--text-primary)]">{home.homeGreyStrip.heading}</p>
              <Link href="/how-we-work" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--action-loud)]">
                How the door works
                <Arrow />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Industries ─────────────────────────────────────────────────── */}
      <section id="e-field" className="relative overflow-hidden border-y border-[var(--rule-soft)] bg-[var(--bg-soft)] py-20 sm:py-24">
        <span className="ghost-num ghost-num--grid absolute -left-6 bottom-0 hidden opacity-80 lg:block" aria-hidden="true">
          07
        </span>
        <Container className="relative">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
              <SectionHeading eyebrow="THE FIELD" title={home.homeIndustries.heading} className="max-w-[18ch]" />
              <Link href="/industries" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--action-loud)]">
                All industries
                <Arrow />
              </Link>
            </div>
          </Reveal>
          <ul className="mt-12 border-t border-[var(--rule)]">
            {industryOrder.map((slug, i) => {
              const ind = industries[slug];
              return (
                <Reveal key={slug} as="li" delay={(i % 4) * 60}>
                  <Link
                    href={`/industries/${slug}`}
                    className="group flex items-center gap-6 border-b border-[var(--rule-soft)] py-5 transition-colors sm:gap-10"
                  >
                    <span className="mono-sm w-8 shrink-0 text-[var(--text-muted)] transition-colors group-hover:text-[var(--action-loud)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="display min-w-0 flex-1 text-[clamp(20px,2.6vw,30px)] font-bold leading-none tracking-[-0.02em] text-[var(--text-primary)] transition-colors group-hover:text-[var(--action-loud)]">
                      {ind.name}
                    </span>
                    <span className="hidden max-w-[30ch] text-sm leading-snug text-[var(--text-muted)] md:block">
                      {ind.characterisation}
                    </span>
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full transition-transform group-hover:scale-125"
                      style={{ background: marqueeTones[i % 4] }}
                      aria-hidden="true"
                    />
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* ── The inner loop — honest ────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-[44ch] text-center">
              <Eyebrow>{home.homeLoop.heading.toUpperCase()}</Eyebrow>
              <h2 className="display mt-4 text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)]">
                {home.homeClosing.heading}
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {home.homeLoop.lines.map((line, i) => (
              <Reveal key={line} delay={(i % 3) * 70}>
                <div className="flex h-full gap-4 rounded-[var(--radius-sm)] border border-[var(--rule-soft)] bg-[var(--bg-soft)] p-6">
                  <span className="mono-sm shrink-0 text-[var(--action-loud)]">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-serif-it text-[17px] leading-snug text-[var(--text-primary)]">{line}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mx-auto mt-10 max-w-[62ch] border-t border-[var(--rule)] pt-6 text-center text-sm text-[var(--text-muted)]">
              {home.homeDisclaimer}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-soft)] pb-20 pt-16 sm:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr]">
            <SectionHeading eyebrow="FAQ" title="Questions the homepage raises" intro="The longer answers, kept honest." />
            <div className="rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6 sm:p-8">
              <FaqAccordion items={generalFaqs} tone="deep" />
            </div>
          </div>
        </Container>
      </section>

      <div id="e-door" className="relative">
        <span className="ghost-num ghost-num--grid absolute -right-6 top-8 z-0 hidden opacity-50 lg:block" aria-hidden="true">
          08
        </span>
        <div className="relative">
          <CtaBand variant="research" />
        </div>
      </div>

      {/* ── the red thread — chapter navigation ───────────────────── */}
      <ScrollThread chapters={threadChapters} />
    </>
  );
}