"use client";

// components/home/hero-playground.tsx — the above-the-fold. A kinetic editorial
// spread (anti-center-bias): the tagline splits into masked word-reveals on the
// left, the four pillar colours rotate slowly in a pinned wheel on the right,
// and a mono data-rail locks the honest claims to the bottom edge. Session one
// of the journey — E01 / THE BRIEF.

import { CursorStage } from "@/components/motion/cursor-stage";
import { MagneticLink } from "@/components/motion/magnetic-link";
import { WordReveal } from "@/components/motion/word-reveal";
import { Arrow } from "@/components/ui/primitives";
import { brand } from "@/lib/brand";

const dataRail = [
  { k: "E01", v: "THE BRIEF" },
  { k: brand.callPrice, v: "STRATEGY CALL" },
  { k: `${brand.slaHours}H`, v: "REQUEST GATE" },
  { k: "5", v: "ENGAGEMENTS / QUARTER" },
  { k: "ONE TEAM", v: "FOUR DISCIPLINES" },
];

function Pinwheel() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-auto w-[clamp(190px,17vw,280px)]"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <path id="rad-wheel-circ" d="M100,14 A86,86 0 1 1 99.9,14" fill="none" />
      </defs>
      <g className="rad-rotate">
        <path d="M100,8 A92,92 0 0 1 192,100" fill="none" stroke="#354ea2" strokeWidth="7" strokeLinecap="round" />
        <path d="M192,100 A92,92 0 0 1 100,192" fill="none" stroke="#00aa9f" strokeWidth="7" strokeLinecap="round" />
        <path d="M100,192 A92,92 0 0 1 8,100" fill="none" stroke="#ffca08" strokeWidth="7" strokeLinecap="round" />
        <path d="M8,100 A92,92 0 0 1 100,8" fill="none" stroke="#02824f" strokeWidth="7" strokeLinecap="round" />
      </g>
      <circle cx="100" cy="100" r="36" fill="#ffffff" />
      <circle cx="100" cy="100" r="9" fill="#e81820" />
      <text
        fontSize="15"
        fontWeight="700"
        fill="#ffffff"
        letterSpacing="3.4"
        style={{ textTransform: "uppercase" }}
      >
        <textPath href="#rad-wheel-circ">
          RADIMPRESSION · THINK BIG · ADVERTISE SMART
        </textPath>
      </text>
    </svg>
  );
}

export function HeroPlayground() {
  return (
    <CursorStage
      id="e-brief"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(162deg, #e6191f 0%, #b60f35 44%, #861338 74%, #5c1040 100%)",
      }}
    >
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-5 py-24 sm:px-10 lg:px-14">
        {/* top row — descriptor + tagline echo */}
        <div className="flex items-center justify-between gap-6">
          <p className="mono-sm whitespace-nowrap text-[13px] tracking-[0.12em] text-white/85">
            FULL-SERVICE CREATIVE &amp; DIGITAL ADVERTISING AGENCY
          </p>
          <p className="mono-sm hidden text-[12px] tracking-[0.12em] text-white/60 sm:block">
            THINK BIG · ADVERTISE SMART
          </p>
        </div>

        {/* statement + wheel */}
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <h1 className="display text-[clamp(52px,9.5vw,134px)] font-extrabold leading-[0.96] tracking-[-0.04em]">
              <span className="block plx plx--sm">
                <WordReveal text="Think big." />
              </span>
              <span className="block plx plx--lg">
                <WordReveal text="Advertise" delay={0.16} />{" "}
                <span className="text-[#ffe266]">
                  <WordReveal text="smart." delay={0.3} />
                </span>
              </span>
            </h1>

            <p className="mt-8 max-w-[48ch] text-lg leading-relaxed text-white/90 sm:text-xl plx plx--md">
              One team, four disciplines, from the same brief — strategy,
              branding &amp; design, web, and marketplace &amp; performance.
              Built to make an impression that sticks.
            </p>

            <div className="mt-11 flex flex-wrap items-center gap-4 plx plx--sm">
              <MagneticLink
                href="/brand-research"
                ariaLabel="Start brand research"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[var(--rad-red)] transition-colors duration-200 hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Start brand research
              </MagneticLink>
              <MagneticLink
                href="/work"
                ariaLabel="Explore the work"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white bg-transparent px-8 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-[var(--rad-red)] focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Explore the work <Arrow className="transition-transform group-hover:translate-x-0.5" />
              </MagneticLink>
            </div>
          </div>

          <div className="hidden plx plx--sm lg:block" aria-hidden="true">
            <Pinwheel />
          </div>
        </div>

        {/* bottom data rail — the honest claims, bound to the edge */}
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/25 pt-5 sm:grid-cols-5 plx plx--sm">
          {dataRail.map((c, i) => (
            <div key={c.k} className={i > 0 ? "sm:border-l sm:border-white/15 sm:pl-4" : ""}>
              <div className="mono-sm text-[10px] tracking-[0.14em] text-white/55">{c.k}</div>
              <div className="mono-sm mt-1 text-[11px] tracking-[0.1em] text-white/90">{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </CursorStage>
  );
}