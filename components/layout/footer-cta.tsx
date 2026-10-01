"use client";

// components/layout/footer-cta.tsx — the footer's closing argument: an
// editorial two-line statement with a masked word reveal, a cycling verb slot,
// and an animated red "?". Followed by the stacked email/phone block with a
// magnetic email hover. All motion is disabled under prefers-reduced-motion.

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { brand } from "@/lib/brand";

const LINE1 = ["Got", "something"];
const LINE2_STATIC = "worth";
const CYCLES = ["making", "building", "launching", "selling"];

/* reveal timeline (ms): stagger 70ms, line 2 +120ms after line 1 finishes */
const DELAY_GOT = 0;
const DELAY_SOMETHING = 70;
const DELAY_WORTH = 770 + 120;
const DELAY_SLOT = DELAY_WORTH + 70;
const DELAY_QMARK = DELAY_SLOT + 700 + 200;

const RISE_EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const QMARK_EASE = "cubic-bezier(0.34, 1.56, 0.64, 1)";
const FOOTER_SIZE = "clamp(32px, 4.6vw, 68px)";

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

function useInView(threshold = 0.4) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      const t = window.setTimeout(() => setInView(true), 0);
      return () => window.clearTimeout(t);
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function riseStyle(reveal: boolean, rm: boolean, delay: number) {
  return {
    transform: reveal || rm ? "translateY(0)" : "translateY(110%)",
    transition: rm ? "none" : `transform 700ms ${RISE_EASE}`,
    transitionDelay: rm ? undefined : `${delay}ms`,
    willChange: "transform" as const,
  };
}

function RevealWord({
  delay,
  reveal,
  rm,
  children,
}: {
  delay: number;
  reveal: boolean;
  rm: boolean;
  children: ReactNode;
}) {
  return (
    <span className="inline-block overflow-hidden align-top">
      <span className="inline-block" style={riseStyle(reveal, rm, delay)}>
        {children}
      </span>
    </span>
  );
}

function CyclingSlot({ reveal, rm }: { reveal: boolean; rm: boolean }) {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const [width, setWidth] = useState<number | null>(null);
  const widthsRef = useRef<number[]>([]);
  const idxRef = useRef(0);
  const measRefs = useRef<(HTMLSpanElement | null)[]>([]);

  /* measure true word widths once fonts are ready */
  useEffect(() => {
    let cancelled = false;
    const measure = () => {
      if (cancelled) return;
      const w = measRefs.current.map((n) => n?.offsetWidth ?? 0);
      widthsRef.current = w;
      setWidth(w[0] ?? 0);
    };
    if (document.fonts?.ready) {
      document.fonts.ready.then(measure).catch(measure);
    } else {
      measure();
    }
    return () => {
      cancelled = true;
    };
  }, []);

  /* start cycling once the slot word has revealed */
  const [cycleOn, setCycleOn] = useState(false);
  useEffect(() => {
    if (!reveal || rm) return;
    const t = window.setTimeout(() => setCycleOn(true), DELAY_SLOT + 900);
    return () => window.clearTimeout(t);
  }, [reveal, rm]);

  /* loop: hold 2.2s → roll out → swap word + animate width → roll in */
  useEffect(() => {
    if (!cycleOn || rm) return;
    const timers: number[] = [];
    const hold = () => {
      setPhase("out");
      timers.push(
        window.setTimeout(() => {
          const n = (idxRef.current + 1) % CYCLES.length;
          idxRef.current = n;
          setIdx(n);
          setWidth(widthsRef.current[n] ?? widthsRef.current[0]);
          setPhase("in");
          timers.push(window.setTimeout(hold, 280 + 2200));
        }, 280)
      );
    };
    timers.push(window.setTimeout(hold, 2200));
    return () => timers.forEach(window.clearTimeout);
  }, [cycleOn, rm]);

  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      {/* rising reveal layer */}
      <span className="inline-block" style={riseStyle(reveal, rm, DELAY_SLOT)}>
        {/* width-animated vertical track */}
        <span
          className="inline-block overflow-hidden align-bottom"
          style={{
            width: width ?? undefined,
            transition: rm ? "none" : `width 280ms ${RISE_EASE}`,
          }}
        >
          <span
            className="inline-block"
            style={{
              transform: rm || phase === "in" ? "translateY(0)" : "translateY(-100%)",
              opacity: rm || phase === "in" ? 1 : 0,
              transition: rm
                ? "none"
                : `transform 280ms ${RISE_EASE}, opacity 280ms ease`,
              willChange: "transform",
            }}
          >
            {CYCLES[idx]}
          </span>
        </span>
      </span>

      {/* off-screen measurement clones — same metrics, never visible */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-[99999px] top-0 w-max"
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          fontSize: `calc(${FOOTER_SIZE} * 1.15)`,
          lineHeight: 1.05,
        }}
      >
        {CYCLES.map((c, i) => (
          <span
            key={c}
            ref={(n) => {
              measRefs.current[i] = n;
            }}
            className="inline-block"
          >
            {c}
          </span>
        ))}
      </span>
    </span>
  );
}

function MagneticEmail({ children }: { children: ReactNode }) {
  const scopeRef = useRef<HTMLDivElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rm = useReducedMotion();

  useEffect(() => {
    if (rm) return;
    const scope = scopeRef.current;
    const link = linkRef.current;
    if (!scope || !link) return;
    let raf = 0;
    const loop = () => {
      current.current.x += (target.current.x - current.current.x) * 0.15;
      current.current.y += (target.current.y - current.current.y) * 0.15;
      link.style.transform = `translate(${current.current.x.toFixed(2)}px, ${current.current.y.toFixed(2)}px)`;
      raf = requestAnimationFrame(loop);
    };
    const onMove = (e: PointerEvent) => {
      const r = link.getBoundingClientRect();
      const cx = e.clientX - (r.left + r.width / 2);
      const cy = e.clientY - (r.top + r.height / 2);
      const d = Math.hypot(cx, cy);
      const radius = 60;
      const pull = 6;
      if (d < radius) {
        const f = ((radius - d) / radius) * pull;
        const inv = d === 0 ? 0 : f / d;
        target.current = { x: cx * inv, y: cy * inv };
      } else {
        target.current = { x: 0, y: 0 };
      }
    };
    const onLeave = () => {
      target.current = { x: 0, y: 0 };
    };
    raf = requestAnimationFrame(loop);
    scope.addEventListener("pointermove", onMove);
    scope.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      scope.removeEventListener("pointermove", onMove);
      scope.removeEventListener("pointerleave", onLeave);
    };
  }, [rm]);

  return (
    <div ref={scopeRef} className="inline-flex items-center gap-3">
      <a
        ref={linkRef}
        href={`mailto:${brand.email}`}
        className="relative whitespace-nowrap font-medium will-change-transform"
        style={{ fontSize: "clamp(18px, 2vw, 26px)", color: "#fff" }}
      >
        {children}
        <span
          aria-hidden="true"
          className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-[240ms] ease-out group-hover:scale-x-100"
        />
      </a>
    </div>
  );
}

export function FooterCta() {
  const rm = useReducedMotion();
  const { ref, inView } = useInView(0.4);
  const reveal = inView;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(brand.email);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div ref={ref} className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
      {/* ── the statement ───────────────────────────────────────────────── */}
      <h2 className="max-w-[16ch]" suppressHydrationWarning>
        <span className="sr-only">Got something worth making?</span>
        <span aria-hidden="true" className="block">
          {/* line 1 — brand sans, light */}
          <span
            className="block whitespace-nowrap font-body font-light"
            style={{
              fontSize: FOOTER_SIZE,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            <RevealWord delay={DELAY_GOT} reveal={reveal} rm={rm}>
              {LINE1[0]}
            </RevealWord>
            <RevealWord delay={DELAY_SOMETHING} reveal={reveal} rm={rm}>
              {LINE1[1]}
            </RevealWord>
          </span>

          {/* line 2 — serif italic, ~1.15x, indented */}
          <span
            className="block whitespace-nowrap text-white"
            style={{
              marginLeft: "1.5em",
              fontSize: `calc(${FOOTER_SIZE} * 1.15)`,
              lineHeight: 1.05,
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            <RevealWord delay={DELAY_WORTH} reveal={reveal} rm={rm}>
              {LINE2_STATIC}
            </RevealWord>
            <span className="inline-block w-[0.22em]" aria-hidden="true" />
            <CyclingSlot reveal={reveal} rm={rm} />
            <span
              className="inline-block"
              style={{
                transform:
                  rm || reveal ? "rotate(0deg) scale(1)" : "rotate(-12deg) scale(0.85)",
                opacity: rm || reveal ? 1 : 0,
                transition: rm
                  ? "none"
                  : `transform 500ms ${QMARK_EASE}, opacity 300ms ease`,
                transitionDelay: rm ? undefined : `${DELAY_QMARK}ms`,
                color: "var(--rad-red)",
                willChange: "transform",
              }}
            >
              ?
            </span>
          </span>
        </span>
      </h2>

      {/* ── email / phone, stacked ──────────────────────────────────────── */}
      <div className="group flex flex-col items-start" style={{ gap: "12px" }}>
        <div className="flex items-center gap-3">
          <MagneticEmail>{brand.email}</MagneticEmail>
          <button
            type="button"
            onClick={copyEmail}
            aria-label={copied ? "Email copied" : "Copy email address"}
            className="inline-flex h-7 w-7 items-center justify-center text-white/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100"
          >
            {copied ? (
              <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M3 8.5 6.5 12 13 4.5" strokeLinecap="square" />
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <rect x="5.5" y="5.5" width="8" height="8" />
                <path d="M10.5 5.5v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2" />
              </svg>
            )}
          </button>
        </div>

        <a
          href={`tel:${brand.phone.replace(/\s/g, "")}`}
          className="relative whitespace-nowrap text-white/80 transition-transform"
          style={{ fontSize: "clamp(14px, 1.5vw, 18px)" }}
        >
          {brand.phone}
          <span
            aria-hidden="true"
            className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-white/80 transition-transform duration-[240ms] ease-out group-hover:scale-x-100"
          />
        </a>
      </div>
    </div>
  );
}
