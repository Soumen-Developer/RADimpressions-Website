// app/(site)/contact/page.tsx — contact routes from misc content.

import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { PageLead } from "@/components/ui/page-lead";
import { miscContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — RADIMPRESSION",
  description: miscContent.contact.heading === "Talk to us" ? "Talk to us — the 72-hour reply runs on calendar days." : "Contact RADIMPRESSION.",
};

export default function ContactPage() {
  const c = miscContent.contact;
  return (
    <>
      <PageLead eyebrow="CONTACT" title={c.heading} intro={c.body} plate="PLATE 10" />

      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="grid content-start gap-4">
              <a
                href={`mailto:${c.email}`}
                className="rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6 transition-colors hover:border-[var(--action)]"
              >
                <div className="eyebrow" style={{ color: "var(--rad-teal-ink)" }}>EMAIL</div>
                <p className="mt-2 font-medium text-[var(--text-primary)]">{c.email}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">{c.emailNote}</p>
              </a>
              <a
                href="tel:+917666232291"
                className="rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6 transition-colors hover:border-[var(--action)]"
              >
                <div className="eyebrow" style={{ color: "var(--rad-teal-ink)" }}>PHONE</div>
                <p className="mt-2 font-medium text-[var(--text-primary)]">{c.phone}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">{c.phoneNote}</p>
              </a>
            </div>

            <div>
              <SectionHeading eyebrow="THE FORM ROUTE" title={c.form.heading} intro={c.form.body} className="mb-6" />
              <ol className="mt-8 space-y-4">
                {c.form.fields.map((f, i) => (
                  <li key={f} className="flex gap-4 rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-5">
                    <span className="mono-sm text-[var(--action)]">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-[15px] leading-relaxed text-[var(--text-primary)]">{f}</p>
                  </li>
                ))}
              </ol>
              <a
                href="/brand-research"
                className="mt-6 inline-flex items-center gap-1.5 font-medium text-[var(--action)] hover:underline"
              >
                Open the brand research form →
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}