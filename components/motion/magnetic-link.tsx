"use client";

// MagneticLink — a link/button that is gently attracted to the cursor on
// hover (magnet effect) then springs back. Pure transform, reduced-motion safe.

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function MagneticLink({
  href,
  children,
  className,
  strength = 0.3,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [dist, setDist] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setDist({ x: x * strength, y: y * strength });
  };

  return (
    <Link
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setDist({ x: 0, y: 0 });
      }}
      onMouseMove={onMove}
      className={cn(
        "inline-block [transition:transform_300ms_cubic-bezier(.2,.8,.2,1)] motion-reduce:!transition-none",
        className
      )}
      style={{ transform: hover ? `translate(${dist.x.toFixed(1)}px, ${dist.y.toFixed(1)}px)` : "translate(0,0)" }}
    >
      {children}
    </Link>
  );
}
