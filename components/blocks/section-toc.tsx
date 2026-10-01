"use client";

// components/blocks/section-toc.tsx — sticky table of contents for the
// philosophy page. Tracks scroll position and highlights the active heading.
// Collapses to a jump list below the xl breakpoint.

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { slugOf } from "@/lib/slug";

export function SectionToc({ headings }: { headings: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const targets = headings
      .map((h) => document.getElementById(slugOf(h)))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = targets.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActive(idx);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [headings]);

  return (
    <nav aria-label="On this page" className="hidden xl:block">
      <div className="mono-sm mb-4 !text-[10px] text-[var(--text-muted)]">ON THIS PAGE</div>
      <ol className="space-y-1.5 border-l border-[var(--rule)]">
        {headings.map((h, i) => (
          <li key={h}>
            <a
              href={`#${slugOf(h)}`}
              className={cn(
                "-ml-px flex items-start gap-3 border-l py-1 pl-4 text-sm leading-snug transition-colors",
                i === active
                  ? "border-[var(--action)] text-[var(--text-primary)]"
                  : "border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              )}
            >
              <span className="mono-sm !text-[10px] text-[var(--text-muted)]">{String(i + 1).padStart(2, "0")}</span>
              <span>{h}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}