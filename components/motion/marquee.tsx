"use client";

// components/motion/marquee.tsx — seamless rotating brand strip.
// Duplicates its children once and animates the track; reduced-motion is
// handled by the global CSS override.

import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Marquee({
  children,
  reverse = false,
  className,
  trackClassName,
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  trackClassName?: string;
}) {
  return (
    <div className={cn("overflow-hidden", className)} aria-hidden="true">
      <div className={cn("marquee-track", reverse && "marquee-track--reverse", trackClassName)}>
        <div className="shrink-0">{children}</div>
        <div className="shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
