// components/layout/legal-row.tsx — minimal footer for flat routes
// (brand-research, submitted). Logo + back link + legal line only.

import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import { Wordmark } from "@/components/layout/wordmark";

export function LegalRow() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-[var(--rule)] bg-[var(--bg-soft)]">
      <Container className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="mono-sm text-[var(--action)] hover:underline"
            aria-label="Back to the homepage"
          >
            ← BACK
          </Link>
          <Wordmark />
        </div>
        <div className="mono-sm !text-[10px] text-[var(--text-muted)]">
          © {year} RADIMPRESSION · THINK BIG. ADVERTISE SMART.
        </div>
      </Container>
    </footer>
  );
}