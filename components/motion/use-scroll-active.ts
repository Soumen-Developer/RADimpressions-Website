"use client";

// useScrollActive — returns the id of the section (from `ids`) that is
// currently dominant in the viewport, plus an overall scrollProgress for the
// page. Drives pinned/scroll-telling systems and nav progress indicators.
// Reduced-motion users still get correct active-state highlighting because
// this only tracks scroll position, it doesn't animate anything.

import { useEffect, useState } from "react";

export function useSectionActive(ids: string[], rootMargin = "-45% 0px -45% 0px") {
  const [active, setActive] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids, rootMargin]);

  return { active, progress };
}
