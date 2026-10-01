// app/(flat)/dev/styleguide/page.tsx — the living token reference. Tokens
// only; the "no arbitrary hex" rule is what keeps this page honest.

import type { Metadata } from "next";
import { Container, Eyebrow, Tag, ButtonLink, Button, Stat, PillarMark, pillarColourVar } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Styleguide — RADIMPRESSION",
  robots: { index: false },
};

const swatches = [
  { token: "--action", name: "Action", demo: "border border-[var(--rule)] bg-[var(--action)]", note: "The primary call luminance." },
  { token: "--action-loud", name: "Action loud", demo: "border border-[var(--rule)] bg-[var(--action-loud)]", note: "Hot state — hover and CTAs that must flash." },
  { token: "--bg-page", name: "Page", demo: "border border-[var(--rule)] bg-[var(--bg-page)]", note: "The resting surface." },
  { token: "--bg-soft", name: "Soft", demo: "border border-[var(--rule)] bg-[var(--bg-soft)]", note: "Secondary surfaces, stripes." },
  { token: "--bg-tint", name: "Tint", demo: "border border-[var(--rule)] bg-[var(--bg-tint)]", note: "Faint flavour fills." },
  { token: "--bg-deep", name: "Deep", demo: "border border-[var(--rule)] bg-[var(--bg-deep)]", note: "Inverses." },
  { token: "--text-primary", name: "Ink", demo: "border border-[var(--rule)] bg-[var(--text-primary)]", note: "Headings, emphasis." },
  { token: "--text-body", name: "Body", demo: "border border-[var(--rule)] bg-[var(--text-body)]", note: "Running copy." },
  { token: "--text-muted", name: "Muted", demo: "border border-[var(--rule)] bg-[var(--text-muted)]", note: "Captions, mono labels." },
  { token: "--rule", name: "Rule", demo: "border border-[var(--rule)]", note: "The line language." },
];

const pillars = [
  { slug: "strategy" as const, name: "STRATEGY" },
  { slug: "brand-communication" as const, name: "BRAND COMMUNICATION" },
  { slug: "media" as const, name: "MEDIA" },
  { slug: "complete-support" as const, name: "COMPLETE SUPPORT" },
];

export default function StyleguidePage() {
  return (
    <div className="bg-[var(--bg-page)]">
      <section className="border-b border-[var(--rule)] bg-[var(--bg-deep)] text-[var(--text-on-deep)]">
        <Container className="py-14">
          <Eyebrow className="!text-[var(--rule)]">INTERNAL · DEV ROUTE</Eyebrow>
          <h1 className="mt-4 text-[clamp(39px,6vw,61px)] font-semibold leading-[1.02] tracking-[-0.02em]">
            The styleguide.
          </h1>
          <p className="mt-5 max-w-[52ch] leading-relaxed text-[var(--rule)]">
            Every colour, type specimen and control rendered from tokens. If a value is not in <kbd className="mono-sm border border-white/20 px-1.5 py-0.5">globals.css</kbd>, it does not appear here — or on the site.
          </p>
        </Container>
      </section>

      <Container className="py-14">
        {/* 1 — pillars */}
        <section className="mb-16">
          <Section header="THE FOUR PILLARS" note="The commercial spine. Text-safe ink pairs live in the palette." />
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.slug} className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-[var(--rule)] p-5">
                <span className="inline-block h-8 w-full rounded-[var(--radius-sm)]" style={{ background: pillarColourVar(p.slug) }} aria-hidden="true" />
                <PillarMark slug={p.slug} name={p.name} />
              </div>
            ))}
          </div>
        </section>

        {/* 2 — surface + ink tokens */}
        <section className="mb-16">
          <Section header="SURFACES + INK" note="Page, soft, tint, deep; primary, body, muted; and the rule." />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {swatches.map((s) => (
              <div key={s.token} className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--rule)]">
                <div className={["h-16 w-full", s.demo].join(" ")} aria-hidden="true" />
                <div className="p-3">
                  <div className="mono-sm text-[var(--text-primary)]">{s.name}</div>
                  <div className="mono-sm mt-0.5 !text-[10px] text-[var(--text-muted)]">{s.token}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3 — type */}
        <section className="mb-16">
          <Section header="TYPE" note="Display — Bricolage Grotesque. UI — Inter. Labels — IBM Plex Mono." />
          <div className="mt-6 space-y-5 rounded-[var(--radius-md)] border border-[var(--rule)] p-6">
            <div>
              <div className="eyebrow mb-1">DISPLAY L / HERO</div>
              <p className="text-[clamp(39px,6vw,61px)] font-semibold leading-[1.02] tracking-[-0.02em] text-[var(--text-primary)]">Think big. Advertise smart.</p>
            </div>
            <div>
              <div className="eyebrow mb-1">HEADING / SECTION</div>
              <p className="text-[clamp(25px,3.4vw,39px)] font-semibold leading-[1.15] tracking-[-0.015em] text-[var(--text-primary)]">The section heading, tight and honest.</p>
            </div>
            <div>
              <div className="eyebrow mb-1">CARD TITLE</div>
              <p className="text-xl font-semibold tracking-[-0.01em] text-[var(--text-primary)]">The card title</p>
            </div>
            <div>
              <div className="eyebrow mb-1">BODY / LEDE</div>
              <p className="lede mt-1 text-[var(--text-body)]">The lede runs a touch larger and looser, so the eye lands on the section before the detail.</p>
              <p className="mt-3 max-w-[64ch] leading-relaxed text-[var(--text-body)]">
                The body is comfortable inter at sixteen to eighteen pixels, one six against the page, seventy percent of the ink — because the ink is reserved for the claims.
              </p>
            </div>
            <div>
              <div className="eyebrow mb-1">EYEBROW / MONO</div>
              <p className="eyebrow">SESSION-REFERENCE → THIS-ROUTE · INTERNAL-ONLY</p>
            </div>
          </div>
        </section>

        {/* 4 — controls */}
        <section className="mb-16">
          <Section header="CONTROLS" note="Buttons, tags, stats — the reachable objects." />
          <div className="mt-6 space-y-6 rounded-[var(--radius-md)] border border-[var(--rule)] p-6">
            <div>
              <div className="eyebrow mb-3">BUTTONS</div>
              <div className="flex flex-wrap items-center gap-3">
                <ButtonLink href="#" withArrow>Primary</ButtonLink>
                <ButtonLink href="#" variant="loud">Loud</ButtonLink>
                <ButtonLink href="#" variant="dark">Dark</ButtonLink>
                <ButtonLink href="#" variant="outline">Outline</ButtonLink>
                <ButtonLink href="#" variant="onDeep" className="!bg-[var(--bg-deep)]">On-deep</ButtonLink>
                <Button variant="ghost">Ghost</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
            <div>
              <div className="eyebrow mb-3">TAGS</div>
              <div className="flex flex-wrap items-center gap-2">
                <Tag>DEFAULT</Tag>
                <Tag tone="pillar">PILLAR</Tag>
                <Tag tone="outline">OUTLINE</Tag>
                <Tag tone="soft">SOFT</Tag>
                <Tag tone="deep">DEEP</Tag>
              </div>
            </div>
            <div>
              <div className="eyebrow mb-3">STAT — REQUIRES A SOURCE</div>
              <div className="grid gap-6 sm:grid-cols-3">
                <Stat value="72 HRS" label="Reply window" source="RADIMPRESSION POLICY" />
                <Stat value="₹499" label="The paid call" source="BRAND RESEARCH, STEP 1.5" />
                <Stat value="5 / QTR" label="New engagements" source="OPERATING MODEL" />
              </div>
            </div>
          </div>
        </section>

        {/* 5 — motion + accessibility */}
        <section>
          <Section header="MOTION + REGARD" note="One rule each." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[var(--radius-md)] border border-[var(--rule)] border-dashed p-6">
              <div className="mono-sm text-[var(--rad-teal-ink)]">REDUCED MOTION</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-body)]">
                Every entrance, hover and accordion honours prefers-reduced-motion. When the flag is set, the panel opens without the slide and the page renders without the reveal stagger.
              </p>
            </div>
            <div className="rounded-[var(--radius-md)] border border-[var(--rule)] border-dashed p-6">
              <div className="mono-sm text-[var(--rad-red-ink)]">NO ARBITRARY HEX</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-body)]">
                Components take their values from tokens. A colour that does not exist as a token gets a token before it gets a page.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

function Section({ header, note }: { header: string; note: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--rule)] pb-4">
      <h2 className="text-xl font-semibold tracking-[-0.01em] text-[var(--text-primary)]">{header}</h2>
      <p className="text-sm text-[var(--text-muted)]">{note}</p>
    </div>
  );
}