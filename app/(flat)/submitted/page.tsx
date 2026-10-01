// app/(flat)/submitted/page.tsx — the receipt page.

import type { Metadata } from "next";
import { Container } from "@/components/ui/primitives";
import { Wordmark } from "@/components/layout/wordmark";
import { submitted } from "@/content/misc";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Received — now it's on us",
  robots: { index: false, follow: false },
};

export default function SubmittedPage() {
  return (
    <div className="pt-16">
      <Container className="py-4">
        <div className="mb-10 flex items-center justify-between">
          <Wordmark />
          <span className="mono-sm text-[var(--text-muted)]">RECEIPT</span>
        </div>
      </Container>

      <Container className="max-w-[840px] pb-20">
        <div className="rounded-[var(--radius-md)] border border-[var(--rule)] p-8 shadow-[var(--shadow-card)] sm:p-12">
          <div className="eyebrow mb-4 text-[var(--rad-green)]">SUBMISSION RECEIVED</div>
          <h1 className="text-[clamp(31px,4vw,49px)] font-semibold leading-[1.08] tracking-[-0.02em] text-[var(--text-primary)]">
            {submitted.heading}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--text-body)]">{submitted.body}</p>

          <ol className="mt-10 grid gap-4">
            {submitted.nextSteps.map((s) => (
              <li key={s.step} className="grid grid-cols-[3rem_1fr] gap-4 rounded-[var(--radius-md)] border border-[var(--rule-soft)] bg-[var(--bg-soft)] p-5">
                <span className="mono-sm text-[var(--action)]">{s.step}</span>
                <div>
                  <div className="font-semibold text-[var(--text-primary)]">{s.label}</div>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--text-body)]">{s.note}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 max-w-[62ch] text-[15px] leading-relaxed text-[var(--text-body)]">{submitted.narrative}</p>
          <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-[var(--text-muted)]">{submitted.reframe}</p>

          <div className="mt-10 border-t border-[var(--rule)] pt-6">
            <div className="mono-sm text-[var(--text-muted)]">
              QUESTIONS BEFORE THE REPLY ARRIVES? {brand.email} · {brand.phone}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}