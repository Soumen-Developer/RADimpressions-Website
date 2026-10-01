// app/(flat)/brand-research/page.tsx — the ten-minute form page.
// No header/footer chrome beyond the logo, the back link, and the legal row.

import type { Metadata } from "next";
import { Container } from "@/components/ui/primitives";
import { Wordmark } from "@/components/layout/wordmark";
import { BrandResearchForm } from "@/components/forms/brand-research-form";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Brand Research — tell us about your business",
  description:
    "Ten minutes, straight answers. We read every submission and reply within 72 hours — always. If we believe we can help, you get a recorded teardown.",
};

const sideFacts = [
  { label: "REPLY WINDOW", value: "72 HRS", note: "Every submission, every time." },
  { label: "THE VERDICT", value: "YES / NO", note: "Both get a reason. In writing." },
  { label: "IF YES", value: "TEARDOWN", note: "Recorded, delivered before the call." },
];

export default function BrandResearchPage() {
  return (
    <div className="pt-16">
      <Container className="py-4">
        <div className="mb-10 flex items-center justify-between">
          <Wordmark />
          <span className="mono-sm text-[var(--text-muted)]">BRAND RESEARCH</span>
        </div>
      </Container>

      <Container wide className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        {/* Left — the ask */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="eyebrow mb-4 text-[var(--action)]">THE FORM — 10 MINUTES</div>
          <h1 className="text-[clamp(31px,4vw,49px)] font-semibold leading-[1.08] tracking-[-0.02em] text-[var(--text-primary)]">
            Send us your business. We read it.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[var(--text-body)]">
            {brand.tagline} The form is how we read you properly — before we decide whether we can help. No pitch,
            no call-takedown, no follow-up blizzard.
          </p>
          <div className="mt-8 grid gap-4">
            {sideFacts.map((f) => (
              <div key={f.label} className="rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-soft)] p-4">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="eyebrow">{f.label}</span>
                  <span className="display text-2xl font-semibold tracking-[-0.01em] text-[var(--text-primary)]">{f.value}</span>
                </div>
                <p className="mt-1 text-sm text-[var(--text-body)]">{f.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-[var(--text-muted)]">
            The teardown is a working document, not a product and not a freebie. The 60-minute call that follows it is
            ₹{brand.callPrice.replace("₹", "")} and is not credited against anything.
          </p>
        </div>

        {/* Right — the form */}
        <div className="rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6 shadow-[var(--shadow-card)] sm:p-10">
          <BrandResearchForm />
        </div>
      </Container>
    </div>
  );
}