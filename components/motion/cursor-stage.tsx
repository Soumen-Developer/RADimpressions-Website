"use client";

// CursorStage — an interactive "playground" wrapper. It tracks the pointer
// over its bounds and publishes two normalized CSS variables on itself:
//   --mx, --my  ∈ [-50, 50]   (-50 = left/top edge, +50 = right/bottom edge)
// Child layers can react via pure CSS transforms, e.g.
//   style={{ transform: "translate(calc(var(--mx) * 0.4px), calc(var(--my) * 0.3px))" }}
// This keeps motion off the React render path (fast) and is inert under
// prefers-reduced-motion (see the .cursor-stage CSS).

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export function CursorStage({
  children,
  className,
  style,
  throttle = 12,
  id,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  throttle?: number;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;

    let last = 0;
    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      if (now - last < throttle) return;
      last = now;
      const rect = node.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100 - 50;
      const y = ((e.clientY - rect.top) / rect.height) * 100 - 50;
      node.style.setProperty("--mx", x.toFixed(2));
      node.style.setProperty("--my", y.toFixed(2));
    };
    node.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      node.removeEventListener("pointermove", onMove);
    };
  }, [throttle]);

  return (
    <div ref={ref} id={id} className={cn("cursor-stage", className)} style={style}>
      {children}
    </div>
  );
}
