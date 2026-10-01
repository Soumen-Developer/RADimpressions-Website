"use client";

// components/home/disciplines-orbit.tsx — the Four Disciplines as ONE
// continuous system inside the room: a pinned stage where each discipline
// (Strategy → Brand Communication → Media → Complete Support) rotates into
// focus as you scroll. The room recolours with pillar light, a giant ghost
// numeral counts the act, and the copy crossfades in place. Reduced-motion
// and keyboard users still see every act (the change is scroll-driven).

import { useMemo } from "react";
import Link from "next/link";
import { CursorStage } from "@/components/motion/cursor-stage";
import { useSectionActive } from "@/components/motion/use-scroll-active";
import { Arrow } from "@/components/ui/primitives";
import * as home from "@/content/home";
import { servicesNav } from "@/components/layout/nav-data";

const acts = [
  {
    id: "disc-strategy",
    path: "/services/strategy",
    color: "#354ea2",
    glow: "#354ea2",
    on: "#ffffff",
  },
  {
    id: "disc-brand",
    path: "/services/brand-communication",
    color: "#00aa9f",
    glow: "#00aa9f",
    on: "#ffffff",
  },
  {
    id: "disc-media",
    path: "/services/media",
    color: "#ffca08",
    glow: "#ffca08",
    on: "#1c213e",
  },
  {
    id: "disc-web",
    path: "/services/complete-support",
    color: "#02824f",
    glow: "#02824f",
    on: "#ffffff",
  },
];

export function DisciplinesOrbit() {
  const ids = useMemo(() => acts.map((a) => a.id), []);
  const { active } = useSectionActive(ids, "-35% 0px -60% 0px");
  const idx = Math.max(0, acts.findIndex((a) => a.id === active));
  const act = acts[idx];
  const name = servicesNav[idx]?.name ?? "Strategy";
  const promise = servicesNav[idx]?.promise ?? "";
  const body = home.homePillars[idx]?.body ?? "";

  return (
    <section id="e-system" className="relative" aria-label="The four disciplines">
      {/* pinned stage (first child — the acts provide the scroll length) */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <CursorStage
          className="flex h-full flex-col justify-between overflow-hidden px-5 py-14 sm:px-10 lg:px-14"
          style={{
            background: `radial-gradient(1100px 640px at 78% 40%, ${act.glow}26, transparent 62%), var(--bg-page)`,
          }}
        >
          {/* ghost numeral — the act, hanging behind everything */}
          <span
            className="ghost-num absolute -right-2 top-1/2 hidden -translate-y-1/2 lg:block"
            style={{ WebkitTextStroke: `1.5px ${act.color}` }}
            aria-hidden="true"
          >
            {String(idx + 1).padStart(2, "0")}
          </span>

          {/* header row */}
          <div className="relative flex items-center justify-between">
            <span className="eyebrow flex items-center gap-3 text-[var(--text-muted)]">
              <span className="inline-block h-1.5 w-1.5" style={{ background: act.color }} aria-hidden="true" />
              E02 / THE SYSTEM
            </span>
            <span className="mono-sm text-[var(--text-muted)]">
              {String(idx + 1).padStart(2, "0")} — 04
            </span>
          </div>

          {/* current discipline, crossfading in place */}
          <div key={act.id} className="rad-swap relative max-w-[1200px]">
            <span className="mono-sm block" style={{ color: act.color }}>
              DISCIPLINE {String(idx + 1).padStart(2, "0")}
            </span>
            <h2 className="display mt-4 max-w-[12ch] leading-[0.92] tracking-[-0.035em] text-[var(--text-primary)]">
              {name}
            </h2>
            <p
              className="text-serif-it mt-3 text-[clamp(20px,2.6vw,30px)]"
              style={{ color: act.color === "#ffca08" ? "#ffd94d" : act.color }}
            >
              {promise}
            </p>
            <p className="mt-4 max-w-[50ch] text-[15px] leading-relaxed text-[var(--text-muted)]">{body}</p>
            <Link
              href={act.path}
              className="mt-7 inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-6 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
              style={{ background: act.color, color: act.on }}
            >
              Enter {name} <Arrow />
            </Link>
          </div>

          {/* rail — jump between disciplines */}
          <div className="relative mt-10 flex flex-wrap items-center gap-2" role="tablist" aria-label="The four disciplines">
            {acts.map((a, i) => (
              <a
                key={a.id}
                href={`#${a.id}`}
                role="tab"
                aria-selected={i === idx}
                aria-label={servicesNav[i]?.name}
                className="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
                style={{
                  borderColor: i === idx ? a.color : "var(--rule)",
                  color: i === idx ? a.on : "var(--text-muted)",
                  background: i === idx ? a.color : "transparent",
                }}
              >
                {String(i + 1).padStart(2, "0")} · {servicesNav[i]?.name}
              </a>
            ))}
          </div>
        </CursorStage>
      </div>

      {/* scroll acts — provide the pin length; each is observed */}
      <div>
        {acts.map((a) => (
          <div key={a.id} id={a.id} aria-hidden="true" className="h-screen" />
        ))}
      </div>
    </section>
  );
}