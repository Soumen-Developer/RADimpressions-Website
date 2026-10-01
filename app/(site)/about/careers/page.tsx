// app/(site)/about/careers/page.tsx — "we hire slowly" (SITEMAP row 18).
// No roles exist; the page is the honest position + the apply line. Logged as
// a gap with the responsive empty state done properly.

import type { Metadata } from "next";
import { Container } from "@/components/ui/primitives";
import { PageLead } from "@/components/ui/page-lead";
import { miscContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers — RADIMPRESSION",
  description: "We hire slowly. When a role opens, it will be named here with its actual scope.",
};

export default function CareersPage() {
  const c = miscContent.careers;
  return (
    <>
      <PageLead eyebrow="JOIN THE SHOP" title={c.heading} intro={c.body} plate="PLATE 11" />

      <section>
        <Container className="pb-20 pt-16">
          <div className="mx-auto max-w-[860px] rounded-[var(--radius-md)] border border-[var(--rule)] border-dashed p-8 text-center">
            <div className="mono-sm text-[var(--text-muted)]">NO OPEN ROLES</div>
            <p className="mx-auto mt-4 max-w-[56ch] text-[15px] leading-relaxed text-[var(--text-body)]">
              {c.applyLine}
            </p>
            <a
              href={`mailto:${c.email}?subject=${encodeURIComponent("the position doesn't exist")}`}
              className="mt-6 inline-flex items-center gap-1.5 font-medium text-[var(--action)] hover:underline"
            >
              Write to us — subject: {`"the position doesn't exist"`} →
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}