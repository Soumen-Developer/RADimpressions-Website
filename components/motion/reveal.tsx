"use client";

// components/motion/reveal.tsx — scroll-triggered reveal.
// Uses IntersectionObserver (no animation library) and defers to the global
// `prefers-reduced-motion` CSS override in globals.css, so it is safe + fast.

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Direction = "up" | "down" | "left" | "right" | "none";

const hidden: Record<Direction, string> = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
  none: "",
};

export function Reveal({
  children,
  as: Tag = "div",
  direction = "up",
  delay = 0,
  className,
  threshold = 0.18,
}: {
  children: ReactNode;
  as?: "div" | "section" | "li" | "span" | "p" | "figure";
  direction?: Direction;
  delay?: number;
  className?: string;
  threshold?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  // Start hidden on BOTH server and client so SSR HTML matches hydration.
  // The IntersectionObserver effect flips it to shown when scrolled into view,
  // which runs in a callback (not the effect body) to satisfy the lint rule.
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold, shown]);

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "transition-all duration-[760ms] [transition-timing-function:var(--ease-brand)] will-change-transform",
        shown ? "translate-x-0 translate-y-0 opacity-100" : cn("opacity-0", hidden[direction]),
        className
      )}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
}
