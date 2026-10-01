"use client";

// components/layout/header.tsx — floating capsule pills that dock on
// scroll, a cycling logo suffix, magnetic pull on every capsule, a
// travelling dark highlight inside the docked bar, teal CTA, and
// floating rounded dropdown panels. Depth comes only from blur and the
// hairline rule — no gradients, glows, or drop shadows.

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { MobileNav } from "@/components/layout/mobile-nav";
import {
  servicesNav,
  industriesNav,
  howWeWorkNav,
} from "@/components/layout/nav-data";
import { pillarColourVar } from "@/components/ui/primitives";
import { industries } from "@/lib/brand";

/* ── data ──────────────────────────────────────────────────────────── */

type PanelKey = "services" | "industries" | "how" | null;

type NavItem = {
  label: string;
  kind: "toggle" | "link";
  href?: string;
  match?: (path: string) => boolean;
};

const NAV: NavItem[] = [
  {
    label: "How We Work",
    kind: "toggle",
    match: (p) => p.startsWith("/how-we-work"),
  },
  {
    label: "Services",
    kind: "toggle",
    match: (p) => p.startsWith("/services"),
  },
  {
    label: "Industries",
    kind: "toggle",
    match: (p) => p.startsWith("/industries"),
  },
  { label: "Work", kind: "link", href: "/work", match: (p) => p === "/work" },
  {
    label: "Consulting",
    kind: "link",
    href: "/consulting",
    match: (p) => p === "/consulting",
  },
  {
    label: "Insights",
    kind: "link",
    href: "/insights",
    match: (p) => p === "/insights",
  },
  {
    label: "About",
    kind: "link",
    href: "/about",
    match: (p) => p === "/about",
  },
];

const SUFFIXES = [
  "Strategy",
  "Brand",
  "Web",
  "Performance",
  "Amazon",
  "Design",
];

/* ── hooks ─────────────────────────────────────────────────────────── */

function useReducedMotion() {
  const [rm, setRm] = useState(
    () =>
      typeof window !== "undefined" &&
      !!window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
  );
  useEffect(() => {
    const m = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!m) return;
    const onChange = () => setRm(m.matches);
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, []);
  return rm;
}

/** Attach magnetic pull to every .cap inside `containerRef`. */
function useMagneticCaps(
  containerRef: React.RefObject<HTMLElement | null>,
  enabled: boolean
) {
  useEffect(() => {
    if (!enabled) return;
    const container = containerRef.current;
    if (!container) return;

    const cleanups: (() => void)[] = [];

    const attach = (el: HTMLElement) => {
      let raf = 0;
      let tx = 0;
      let ty = 0;
      let cx = 0;
      let cy = 0;

      const tick = () => {
        cx += (tx - cx) * 0.16;
        cy += (ty - cy) * 0.16;
        el.style.transform = `translate(${cx.toFixed(2)}px,${cy.toFixed(2)}px)`;
        if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) {
          raf = requestAnimationFrame(tick);
        } else {
          el.style.transform = `translate(${tx}px,${ty}px)`;
          raf = 0;
        }
      };

      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        tx = (e.clientX - (r.left + r.width / 2)) * 0.28;
        ty = (e.clientY - (r.top + r.height / 2)) * 0.45;
        if (!raf) raf = requestAnimationFrame(tick);
      };

      const onLeave = () => {
        tx = 0;
        ty = 0;
        if (!raf) raf = requestAnimationFrame(tick);
      };

      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);

      cleanups.push(() => {
        cancelAnimationFrame(raf);
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      });
    };

    container.querySelectorAll<HTMLElement>(".cap").forEach(attach);

    return () => cleanups.forEach((fn) => fn());
  }, [containerRef, enabled]);
}

/**
 * Growing fill circle on every .cap that has a .fill child.
 * Re-anchors on exit so the circle retracts toward where the cursor left.
 * Skips caps inside a .docked header (the glide handles those).
 */
function useFillCaps(
  containerRef: React.RefObject<HTMLElement | null>,
  enabled: boolean
) {
  useEffect(() => {
    if (!enabled) return;
    const container = containerRef.current;
    if (!container) return;

    const cleanups: (() => void)[] = [];

    const attach = (el: HTMLElement) => {
      const fill = el.querySelector<HTMLElement>(".fill");
      if (!fill) return;

      let leaveTimer = 0;

      const onEnter = (e: PointerEvent) => {
        if (el.closest(".docked")) return;
        clearTimeout(leaveTimer);
        const r = el.getBoundingClientRect();
        const d = Math.hypot(r.width, r.height) * 2;
        fill.style.width = `${d}px`;
        fill.style.height = `${d}px`;
        fill.style.left = `${e.clientX - r.left}px`;
        fill.style.top = `${e.clientY - r.top}px`;
        fill.style.transform = "translate(-50%,-50%) scale(1)";
      };

      const onLeave = (e: PointerEvent) => {
        if (el.closest(".docked")) return;
        const r = el.getBoundingClientRect();
        fill.style.left = `${e.clientX - r.left}px`;
        fill.style.top = `${e.clientY - r.top}px`;
        fill.style.transform = "translate(-50%,-50%) scale(0)";
        // after retraction transition, clear inline styles so
        // CSS :focus-visible / .active fill rules can take over
        clearTimeout(leaveTimer);
        leaveTimer = window.setTimeout(() => {
          fill.style.width = "";
          fill.style.height = "";
          fill.style.left = "";
          fill.style.top = "";
          fill.style.transform = "";
        }, 450);
      };

      el.addEventListener("pointerenter", onEnter);
      el.addEventListener("pointerleave", onLeave);

      cleanups.push(() => {
        clearTimeout(leaveTimer);
        el.removeEventListener("pointerenter", onEnter);
        el.removeEventListener("pointerleave", onLeave);
      });
    };

    container.querySelectorAll<HTMLElement>(".cap").forEach(attach);

    return () => cleanups.forEach((fn) => fn());
  }, [containerRef, enabled]);
}

/** Cycle through SUFFIXES with animated width and a swap keyframe. */
function useCyclingSuffix(enabled: boolean) {
  const suffixRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!enabled) return;
    const el = suffixRef.current;
    if (!el) return;

    // hidden ruler for measuring text width
    const ruler = document.createElement("span");
    ruler.setAttribute("aria-hidden", "true");
    ruler.style.cssText =
      "position:absolute;visibility:hidden;white-space:nowrap;top:-9999px;left:-9999px;";
    document.body.appendChild(ruler);

    const measure = (text: string): number => {
      const cs = getComputedStyle(el);
      ruler.style.font = cs.font;
      ruler.style.fontFamily = cs.fontFamily;
      ruler.style.fontSize = cs.fontSize;
      ruler.style.fontWeight = cs.fontWeight;
      ruler.style.letterSpacing = cs.letterSpacing;
      ruler.textContent = text;
      return ruler.getBoundingClientRect().width + 1;
    };

    // set initial width
    el.style.width = measure(SUFFIXES[0]) + "px";

    let current = 0;
    const interval = setInterval(() => {
      current = (current + 1) % SUFFIXES.length;
      el.classList.add("swap");
      el.style.width = measure(SUFFIXES[current]) + "px";
      setTimeout(() => {
        if (el.firstElementChild) {
          el.firstElementChild.textContent = SUFFIXES[current];
        }
        el.classList.remove("swap");
      }, 200);
    }, 2600);

    return () => {
      clearInterval(interval);
      ruler.remove();
    };
  }, [enabled]);

  return suffixRef;
}

/* ── helpers ────────────────────────────────────────────────────────── */

function toggleKey(label: string): "services" | "industries" | "how" {
  if (label === "Services") return "services";
  if (label === "Industries") return "industries";
  return "how";
}

/* ══════════════════════════════════════════════════════════════════════ */
/* Header                                                               */
/* ══════════════════════════════════════════════════════════════════════ */

export function Header() {
  const [docked, setDocked] = useState(false);
  const [progress, setProgress] = useState(0);
  const [panel, setPanel] = useState<PanelKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [litIdx, setLitIdx] = useState<number | null>(null);
  const pathname = usePathname();
  const rm = useReducedMotion();

  const headerRef = useRef<HTMLElement | null>(null);
  const groupRef = useRef<HTMLDivElement | null>(null);
  const glideRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const suffixRef = useCyclingSuffix(!rm);
  useMagneticCaps(headerRef, !rm);
  useFillCaps(headerRef, !rm);

  // track header bottom → set panel top so it floats just below the bar
  useEffect(() => {
    const hdr = headerRef.current;
    const pnl = panelRef.current;
    if (!hdr || !pnl) return;
    const sync = () => {
      pnl.style.top = `${hdr.getBoundingClientRect().bottom + 8}px`;
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(hdr);
    window.addEventListener("scroll", sync, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", sync);
    };
  }, []);

  // scroll → dock + progress
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setDocked(y > 60);
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close panel + mobile on route change
  const [seenPath, setSeenPath] = useState(pathname);
  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setPanel(null);
    setMobileOpen(false);
  }

  const closePanel = useCallback(() => setPanel(null), []);

  // glide tracking
  const onCapEnter = useCallback(
    (i: number, el: HTMLElement) => {
      if (rm || !docked || !groupRef.current || !glideRef.current) return;
      const r = el.getBoundingClientRect();
      const g = groupRef.current.getBoundingClientRect();
      glideRef.current.style.width = `${r.width}px`;
      glideRef.current.style.transform = `translateX(${r.left - g.left}px)`;
      setLitIdx(i);
    },
    [docked, rm]
  );

  const onGroupLeave = useCallback(() => setLitIdx(null), []);

  const togglePanel = useCallback(
    (key: "services" | "industries" | "how") =>
      setPanel((p) => (p === key ? null : key)),
    []
  );

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "fixed inset-x-0 top-0 z-50",
          docked && "docked"
        )}
        style={{
          padding: "clamp(.85rem, 1.8vw, 1.35rem) var(--gutter)",
        }}
      >
        <div
          className={cn(
            "relative rounded-[26px] transition-[background-color,backdrop-filter,box-shadow] duration-300",
            docked
              ? "border-b-0 bg-white/[0.82] backdrop-blur-md"
              : "bg-transparent"
          )}
          style={{ margin: "0 calc(-1 * var(--gutter))", padding: "0 var(--gutter)" }}
        >
          {/* three zones — logo / nav group / actions */}
          <div className="flex h-full items-center justify-between gap-3 sm:gap-4">
{/* ── Logo capsule ─────────────────────────────── */}
                <Link
                  href="/"
                  className="cap logo-cap"
                  aria-label="RADIMPRESSION — home"
                >
              <span className="logo-lock">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/rad-impression-wordmark.png"
                  alt=""
                  aria-hidden="true"
                  width={2079}
                  height={439}
                />
<span className="logo-tag" aria-hidden="true">
                    <span className="logo-dot">.</span>
                    <span className="logo-suffix" ref={suffixRef}>
                      <span>{SUFFIXES[0]}</span>
                    </span>
                  </span>
                </span>
              </Link>

            {/* ── Nav group ────────────────────────────────── */}
            <div
              ref={groupRef}
              className="rad-nav-group hidden xl:flex"
              onMouseLeave={onGroupLeave}
            >
              <div ref={glideRef} className="glide" aria-hidden="true" />
              {NAV.map((item, i) => {
                if (item.kind === "toggle") {
                  return (
                    <button
                      key={item.label}
                      type="button"
                      className={cn(
                        "cap",
                        litIdx === i && !rm && "lit",
                        panel === toggleKey(item.label) && "active"
                      )}
                      aria-expanded={panel === toggleKey(item.label)}
                      onClick={() => togglePanel(toggleKey(item.label))}
                      onMouseEnter={(e) =>
                        onCapEnter(i, e.currentTarget)
                      }
                    >
                      <span className="fill" aria-hidden="true" />
                      <span className="label">
                        {item.label}
                        <i className="cap-chevron" aria-hidden="true" />
                      </span>
                    </button>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className={cn("cap", litIdx === i && !rm && "lit")}
                    onMouseEnter={(e) =>
                      onCapEnter(i, e.currentTarget)
                    }
                  >
                    <span className="fill" aria-hidden="true" />
                    <span className="label">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* ── Actions ──────────────────────────────────── */}
            <div className="flex items-center gap-2 justify-self-end">
              <a
                href="/brand-research"
                className="cap cta-cap hidden sm:inline-flex"
              >
                <span className="fill" aria-hidden="true" />
                <span className="label">Start a project</span>
              </a>
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(true)}
                className="inline-flex h-11 w-11 items-center justify-center xl:hidden"
                style={{
                  color: docked ? "#111" : "#fff",
                }}
              >
                <MenuIcon open={mobileOpen} />
              </button>
            </div>
          </div>

          {/* scroll-progress bar */}
          <div
            className="rad-scrollbar"
            style={{
              ["--rad-header-progress" as string]: progress,
            }}
          />
        </div>

      </header>

      {/* floating dropdown panels — siblings of header for correct z-stacking */}
      <div ref={panelRef} className={cn("rad-panel", panel ? "open" : "")}>
        {panel === "services" ? (
          <ServicesPanel onNavigate={closePanel} />
        ) : null}
        {panel === "industries" ? (
          <IndustriesPanel onNavigate={closePanel} />
        ) : null}
        {panel === "how" ? (
          <HowWeWorkPanel onNavigate={closePanel} />
        ) : null}
      </div>

      {/* scrim behind open panel */}
      <div
        className={cn("scrim", panel ? "on" : "")}
        onClick={closePanel}
        aria-hidden="true"
      />

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      {/* spacer — matches header footprint */}
      <div className="h-[88px]" aria-hidden="true" />
    </>
  );
}

/* ── Menu icon (hamburger ↔ ×) ──────────────────────────────────────── */

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 22 22"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className="relative"
    >
      <line
        x1="4"
        y1="7"
        x2="18"
        y2="7"
        className="transition-transform duration-300 origin-center"
        style={{
          transform: open
            ? "translateY(3.5px) rotate(45deg)"
            : "translateY(0)",
        }}
      />
      <line
        x1="4"
        y1="15"
        x2="18"
        y2="15"
        className="transition-transform duration-300 origin-center"
        style={{
          transform: open
            ? "translateY(-3.5px) rotate(-45deg)"
            : "translateY(0)",
        }}
      />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════ */
/* Dropdown panels — floating rounded cards                             */
/* ══════════════════════════════════════════════════════════════════════ */

function ServicesPanel({
  onNavigate,
}: {
  onNavigate: () => void;
}) {
  return (
    <>
      {servicesNav.map((s, i) => (
        <Link
          key={s.slug}
          href={s.href}
          onClick={onNavigate}
          style={{ transitionDelay: `${60 + i * 45}ms` }}
        >
          <strong>
            <span
              className="mr-2 inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: pillarColourVar(s.slug) }}
              aria-hidden="true"
            />
            {s.name}
          </strong>
          <span>{s.promise}</span>
        </Link>
      ))}
    </>
  );
}

function IndustriesPanel({
  onNavigate,
}: {
  onNavigate: () => void;
}) {
  return (
    <>
      {industriesNav.map((ind, i) => (
        <Link
          key={ind.slug}
          href={ind.href}
          onClick={onNavigate}
          style={{ transitionDelay: `${60 + i * 45}ms` }}
        >
          <strong>{ind.name}</strong>
          <span>
            {industries[ind.slug].characterisation}
          </span>
        </Link>
      ))}
    </>
  );
}

function HowWeWorkPanel({
  onNavigate,
}: {
  onNavigate: () => void;
}) {
  return (
    <>
      {howWeWorkNav.map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          style={{ transitionDelay: `${60 + i * 45}ms` }}
        >
          <strong>
            <span className="mono-sm mr-2 text-[var(--text-muted)]">
              0{i + 1}
            </span>
            {item.label}
          </strong>
          {item.note ? <span>{item.note}</span> : null}
        </Link>
      ))}
    </>
  );
}
