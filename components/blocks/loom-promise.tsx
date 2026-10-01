// components/blocks/loom-promise.tsx — the three promises shown identically
// on every one of the 28 matrix pages and the service pages.

import Link from "next/link";
import { cn } from "@/lib/cn";

export function LoomPromise({ tone = "light", className }: { tone?: "light" | "deep"; className?: string }) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-3", className)}>
      <PromiseCard
        index="01"
title="A recorded teardown"
      body="If we believe we can help, you get a recorded teardown of what we'd change. Delivered before the call, kept after it."
      href="/how-we-work"
        tone={tone}
      />
      <PromiseCard
        index="02"
title="The 72-hour reply"
      body="Every submission is read and answered within 72 hours. Always. It's the first promise we hold."
      href="/how-we-work"
        tone={tone}
      />
      <PromiseCard
        index="03"
title="The honest no"
      body="If we can't help, you get a straight reason instead of a pitch. The refusal is part of the work."
      href="/how-we-work"
        tone={tone}
      />
    </div>
  );
}

function PromiseCard({
  index,
  title,
  body,
  href,
  tone,
}: {
  index: string;
  title: string;
  body: string;
  href: string;
  tone: "light" | "deep";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col rounded-[var(--radius-md)] border p-5 transition-shadow",
        tone === "deep" ? "border-white/15 hover:shadow-[var(--shadow-panel)]" : "border-[var(--rule)] bg-[var(--bg-soft)] hover:shadow-[var(--shadow-panel)]"
      )}
    >
      <span className="mono-sm" style={{ color: tone === "deep" ? "var(--rule)" : "var(--text-muted)" }}>{index}</span>
      <h3 className={cn("mt-3 text-lg font-semibold leading-snug", tone === "deep" ? "text-[var(--text-on-deep)]" : "text-[var(--text-primary)]")}>
        {title}
      </h3>
      <p className={cn("mt-2 text-sm leading-relaxed", tone === "deep" ? "text-[var(--rule)]" : "text-[var(--text-body)]")}>{body}</p>
      <span className={cn("mt-4 text-xs font-medium", tone === "deep" ? "text-[var(--text-on-deep)]" : "text-[var(--action)]")}>
        How the door works →
      </span>
    </Link>
  );
}