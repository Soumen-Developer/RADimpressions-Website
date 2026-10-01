"use client";

// components/motion/page-transition.tsx — a brand-red sweep on every route
// change: the overlay drops in to mask the swap, then lifts away to reveal the
// next chapter. Purely cosmetic and reduced-motion safe; it never transforms
// its children so the pinned sticky scenes keep working.

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [cover, setCover] = useState(false);
  const first = useRef(true);

  useEffect(() => {
    if (reduce) return;
    if (first.current) {
      first.current = false;
      return;
    }
    setCover(true);
    const t = setTimeout(() => setCover(false), 170);
    return () => clearTimeout(t);
  }, [pathname, reduce]);

  if (reduce) return <>{children}</>;

  return (
    <>
      <motion.div
        initial={false}
        animate={{ opacity: cover ? 1 : 0 }}
        transition={{ duration: cover ? 0.22 : 0.55, ease: EASE }}
        className="pointer-events-none fixed inset-0 z-[90]"
        style={{ background: "var(--rad-red)" }}
        aria-hidden="true"
      />
      {children}
    </>
  );
}