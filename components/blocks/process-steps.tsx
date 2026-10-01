// components/blocks/process-steps.tsx — the process display.
// compact: 4 nodes on a line (home/how-we-work). contract: 6 nodes in a grid,
// with the 72-hour fork drawn at node 2 (services/consulting).

import { cn } from "@/lib/cn";
import type { ProcessNode } from "@/lib/types";

export function ProcessSteps({
  nodes,
  variant = "compact",
  tone = "light",
  indexLabels,
  fork,
}: {
  nodes: ProcessNode[];
  variant?: "compact" | "contract";
  tone?: "light" | "deep";
  indexLabels?: string[];
  fork?: { heading: string; accept: string; decline: string };
}) {
  const labels = indexLabels ?? nodes.map((_, i) => String(i + 1).padStart(2, "0"));

  if (variant === "compact") {
    return (
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {nodes.map((n, i) => (
          <li key={i} className="relative border-l-2 pl-4 pt-1" style={{ borderColor: tone === "deep" ? "var(--pillar-strategy)" : "var(--pillar-strategy)" }}>
            <span className="mono-sm" style={{ color: "var(--text-muted)" }}>
              {labels[i]}
            </span>
            <h3 className={cn("mt-2 text-xl font-semibold tracking-[-0.01em]", tone === "deep" ? "text-[var(--text-on-deep)]" : "text-[var(--text-primary)]")}>
              {n.name}
            </h3>
            <p className={cn("mt-2 text-sm leading-relaxed", tone === "deep" ? "text-[var(--rule)]" : "text-[var(--text-body)]")}>
              {n.description}
            </p>
          </li>
        ))}
      </ol>
    );
  }

  // contract variant — grid of nodes.
  return (
    <div>
      <ol className="grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-3">
        {nodes.map((n, i) => (
          <li key={i} className="bg-[var(--bg-page)] p-6">
            <div className="flex items-center justify-between">
              <span className="mono-sm" style={{ color: "var(--text-muted)" }}>
                {labels[i]} — {n.duration ?? "STEP"}
              </span>
              <span className="inline-block h-2 w-2" style={{ background: "var(--pillar-strategy)" }} aria-hidden="true" />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-[var(--text-primary)]">{n.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-body)]">{n.description}</p>
          </li>
        ))}
      </ol>

      {fork ? (
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:items-start">
          <div>
            <div className="eyebrow mb-2">{fork.heading}</div>
            <p className="text-2xl font-semibold leading-tight tracking-[-0.01em] text-[var(--text-primary)]">
              This is where the fork happens.
            </p>
          </div>
          <div className="rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-soft)] p-5">
            <div className="mono-sm text-[var(--rad-green)]">IF WE CAN HELP</div>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-body)]">{fork.accept}</p>
            <p className="mono-sm mt-3 text-[var(--rad-red)]">← THE TEARDOWN PATH</p>
          </div>
          <div className="rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-soft)] p-5">
            <div className="mono-sm text-[var(--text-muted)]">IF WE CAN&apos;T</div>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-body)]">{fork.decline}</p>
            <p className="mono-sm mt-3 text-[var(--text-muted)]">STILL WITHIN 72 HOURS</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}