// components/layout/wordmark.tsx — the real brand lockup (PNG) + top bar.

import Link from "next/link";
import { cn } from "@/lib/cn";

export function Wordmark({
  tone = "dark",
  href = "/",
  className,
}: {
  tone?: "dark" | "light";
  href?: string;
  className?: string;
}) {
  return (
    <Link href={href} className={cn("inline-flex items-center", className)} aria-label="RADIMPRESSION — home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/rad-impression-wordmark.png"
        alt=""
        aria-hidden="true"
        className={cn(
          "block h-8 w-auto sm:h-9",
          // the wordmark is a multicolour lockup; on deep surfaces we keep it
          // as its own asset, so no forced recolouring is applied here.
          tone === "light" && "opacity-100"
        )}
        width={2079}
        height={439}
      />
    </Link>
  );
}

export function TopBarMono({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mono-sm whitespace-nowrap tracking-[0.14em]",
        tone === "dark" ? "text-[var(--text-muted)]" : "text-[var(--rule)]",
        className
      )}
    >
      FULL-SERVICE CREATIVE &amp; DIGITAL ADVERTISING AGENCY
    </div>
  );
}