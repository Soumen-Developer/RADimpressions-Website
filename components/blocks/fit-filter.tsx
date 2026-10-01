// components/blocks/fit-filter.tsx — "fit" vs "probably not", equal weight.

import { cn } from "@/lib/cn";
import type { FitRow } from "@/lib/types";

export function FitFilter({
  positive,
  negative,
  positiveLabel = "We're a fit when",
  negativeLabel = "We're probably not",
  tone = "light",
}: {
  positive: FitRow[];
  negative: FitRow[];
  positiveLabel?: string;
  negativeLabel?: string;
  tone?: "light" | "deep";
}) {
  return (
    <div className="grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--rule)] lg:grid-cols-2">
      <div className="bg-[var(--bg-page)] p-6 sm:p-8">
        <div className="eyebrow mb-5" style={{ color: "var(--rad-green)" }}>
          {positiveLabel}
        </div>
        <ul className="space-y-3">
          {positive.map((row) => (
            <li key={row.text} className="flex gap-3 border-b border-[var(--rule-soft)] pb-3 last:border-0 last:pb-0">
              <span className="mt-0.5 text-[var(--rad-green)]" aria-hidden="true">+</span>
              <div>
                <p className="text-[15px] font-medium text-[var(--text-primary)]">{row.text}</p>
                {row.explanation ? (
                  <p className="mt-0.5 text-sm leading-relaxed text-[var(--text-body)]">{row.explanation}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[var(--bg-soft)] p-6 sm:p-8">
        <div className="eyebrow mb-5 text-[var(--rad-red-ink)]">{negativeLabel}</div>
        <ul className="space-y-3">
          {negative.map((row) => (
            <li key={row.text} className="flex gap-3">
              <span className={cn("mt-0.5", tone === "deep" ? "text-[var(--rad-red)]" : "text-[var(--rad-red-ink)]")} aria-hidden="true">−</span>
              <div>
                <p className="text-[15px] text-[var(--text-primary)]">{row.text}</p>
                {row.explanation ? (
                  <p className="mt-0.5 text-sm leading-relaxed text-[var(--text-body)]">{row.explanation}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}