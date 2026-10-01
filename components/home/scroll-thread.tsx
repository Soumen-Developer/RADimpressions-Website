"use client";

// components/home/scroll-thread.tsx — the red thread: a fixed glass spine that
// fills with brand-red as you scroll, carrying a bead that names the chapter
// currently holding the middle of the viewport. This is the connective tissue
// that turns the homepage sections into one journey (E01 → E08). Reduced-motion
// and mobile users get nothing extra — content is identical either way.

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

export interface ThreadChapter {
  id: string;
  label: string;
}

export function ScrollThread({ chapters }: { chapters: ThreadChapter[] }) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const beadTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [active, setActive] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (reduce || chapters.length === 0) return;

    const refresh = () => {
      const mid = window.innerHeight / 2;
      let cur = -1;
      for (let i = 0; i < chapters.length; i++) {
        const node = document.getElementById(chapters[i].id);
        if (!node) continue;
        const r = node.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) {
          cur = i;
          break;
        }
      }
      if (cur !== -1) {
        setActive((prev) => (prev === cur ? prev : cur));
      }
    };

    const onScroll = () => {
      if (raf.current != null) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = null;
        refresh();
      });
    };

    refresh();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    const ro = new ResizeObserver(onScroll);
    ro.observe(document.body);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      ro.disconnect();
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  }, [chapters, reduce]);

  if (reduce || chapters.length === 0) return null;

  const current = chapters[active]?.label ?? "";
  const n = (active + 1).toString().padStart(2, "0");

  return (
    <div className="hidden lg:block" aria-hidden="true">
      <div className="thread-rail">
        <div className="thread-spine">
          <motion.div className="thread-fill" style={{ scaleY: scrollYProgress }} />
        </div>
        <motion.div className="thread-bead" style={{ top: beadTop }}>
          <span className="thread-dot" aria-hidden="true" />
          <span key={active} className="thread-tag rad-swap hidden 2xl:inline-flex">
            <i />
            <span className="mono-sm text-[10px] tracking-[0.1em] text-[var(--text-primary)]">
              <b>{n}</b> · {current}
            </span>
          </span>
        </motion.div>
      </div>
    </div>
  );
}