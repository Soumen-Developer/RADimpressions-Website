// app/not-found.tsx — global 404 (SITEMAP row 31 / D.17). One block, four
// links, in voice. Helpful, not jokey.

import Link from "next/link";
import { Container } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-[var(--bg-page)]">
      <Container className="flex flex-1 flex-col justify-center py-24">
        <div className="mono-sm text-[var(--action)]">404 — NOT FOUND</div>
        <h1 className="mt-5 max-w-[18ch] text-[clamp(39px,6vw,61px)] font-semibold leading-[1.02] tracking-[-0.02em]">
          That page doesn&apos;t exist. Here&apos;s where people usually meant to go.
        </h1>
        <ul className="mt-10 flex flex-wrap gap-4">
          {[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Work", href: "/work" },
            { label: "Brand research", href: "/brand-research" },
          ].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--rule)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--action)] hover:text-[var(--action)]"
              >
                {l.label} →
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}