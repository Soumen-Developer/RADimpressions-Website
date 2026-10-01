"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { FaqItem } from "@/lib/types";

export function FaqAccordion({
  items,
  tone = "light",
}: {
  items: FaqItem[];
  tone?: "light" | "deep";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className={cn("divide-y", tone === "deep" ? "divide-[var(--rule-soft)]" : "divide-[var(--rule)]")}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              className={cn(
                "group flex w-full items-start justify-between gap-4 py-5 text-left",
                tone === "deep" ? "text-[var(--text-on-deep)]" : "text-[var(--text-primary)]"
              )}
            >
              <span className="text-lg font-medium leading-snug balance">{item.question}</span>
              <span
                aria-hidden="true"
                className={cn(
                  "mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border transition-transform duration-200",
                  isOpen ? "rotate-45 border-[var(--action)] text-[var(--action)]" : "border-[var(--rule)]"
                )}
              >
                <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6 1v10M1 6h10" />
                </svg>
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              hidden={!isOpen}
              className="overflow-hidden"
            >
              <div
                className={cn(
                  "pb-6 leading-relaxed measure",
                  tone === "deep" ? "text-[var(--rule)]" : "text-[var(--text-body)]"
                )}
              >
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}