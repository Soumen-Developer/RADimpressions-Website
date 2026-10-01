// components/layout/legal-stub.tsx — shared layout for the legal pages
// (/privacy-policy, /terms, /refund-policy). Structured headings only: real
// legal content is required from the client (SITEMAP D.17), so each section
// announces itself and stands in honestly until counsel review. Nothing here
// is drafted as final legal text.

import { Container, Eyebrow } from "@/components/ui/primitives";

export function LegalStub({
  eyebrow,
  title,
  lead,
  sections,
  plate,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  sections: { heading: string; pending: string }[];
  plate?: string;
}) {
  return (
    <>
      <section className="border-b border-[var(--rule)]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="flex items-start justify-between gap-6">
            <Eyebrow className="pt-[3px]">{eyebrow}</Eyebrow>
            {plate ? (
              <span className="mono-sm whitespace-nowrap text-[var(--text-muted)]" aria-hidden="true">
                {plate}
              </span>
            ) : null}
          </div>
          <h1 className="mt-5 max-w-[16ch] text-[clamp(39px,6vw,61px)] font-semibold leading-[1.02] tracking-[-0.02em]">
            {title}
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-[var(--text-body)]">{lead}</p>
        </Container>
      </section>

      <section>
        <Container className="pb-20">
          <div className="space-y-6">
            {sections.map((s, i) => (
              <div key={s.heading} className="grid gap-4 border-t border-[var(--rule)] pt-8 lg:grid-cols-[auto_1fr] lg:items-start">
                <span className="mono-sm pt-1 text-[var(--action)]">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="text-xl font-semibold text-[var(--text-primary)]">{s.heading}</h2>
                  <p className="mt-3 max-w-[68ch] text-sm italic leading-relaxed text-[var(--text-muted)]">{s.pending}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 border-t border-[var(--rule-soft)] pt-6 text-sm text-[var(--text-muted)]">
            Questions about any of the above, before counsel signs off:{" "}
            <a href="mailto:support@radimpression.com" className="text-[var(--link)] underline">
              support@radimpression.com
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}