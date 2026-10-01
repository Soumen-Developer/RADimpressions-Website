// app/(site)/consulting/page.tsx — the complete engagement.

import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading, ButtonLink, Stat } from "@/components/ui/primitives";
import { PageLead } from "@/components/ui/page-lead";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { FitFilter } from "@/components/blocks/fit-filter";
import { FaqSection } from "@/components/blocks/faq-section";
import { CtaBand } from "@/components/blocks/cta-band";
import { consulting } from "@/content/consulting";
import { faqContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Consulting — the complete engagement — RADIMPRESSION",
  description:
    "The complete engagement: Strategy, Brand Communication, and Media held together by one team with a named owner and a written plan.",
};

const processNodes = consulting.process.map((p) => ({ name: p.name, description: p.body }));

export default function ConsultingPage() {
  const faqs = faqContent.byScope(["retainer", "complete-support"]).slice(0, 6);
  return (
    <>
      <PageLead
        eyebrow="THE ENGAGEMENT"
        title={consulting.heroTitle}
        intro={consulting.heroBody}
        plate="PLATE 06"
      >
        <ButtonLink href="/brand-research" withArrow>Start with brand research</ButtonLink>
      </PageLead>

      {/* commitments */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="THE COMMITMENTS" title="What consulting actually promises." className="mb-10" />
          <div className="grid gap-5 sm:grid-cols-2">
            {consulting.commitments.map((c, i) => (
              <div key={c.title} className="flex gap-5 rounded-[var(--radius-md)] border border-[var(--rule)] bg-[var(--bg-page)] p-6">
                <span className="mono-sm text-[var(--action)]">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)]">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-body)]">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[var(--radius-md)] border border-[var(--rule)] border-dashed p-6">
              <Eyebrow>THE PRICE SHAPE</Eyebrow>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-body)]">{consulting.addamsLine}</p>
            </div>
            <div className="rounded-[var(--radius-md)] border border-[var(--rule)] border-dashed p-6">
              <Eyebrow>THE TEAM</Eyebrow>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-body)]">{consulting.solidTeamLine}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* stats — three honest numbers about how the door runs */}
      <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-soft)]">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 sm:grid-cols-3">
            <Stat value="72 HRS" label="Reply window for every submission" source="RADIMPRESSION POLICY" />
            <Stat value="₹499" label="The 60-minute paid call — not credited against anything" source="BRAND RESEARCH, STEP 1.5" />
            <Stat value="5 / QTR" label="New engagements a quarter — the refusal is the work" source="RADIMPRESSION OPERATING MODEL" />
          </div>
        </Container>
      </section>

      {/* the fork at node 2 */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="THE DOOR, WITH THE FORK" title="One process, decided at the second node." className="mb-10" />
          <ProcessSteps
            nodes={processNodes}
            variant="contract"
            fork={{
              heading: "AT NODE TWO — THE VERDICT",
              accept: "You get a recorded teardown of what we'd change, walked through on a 60-minute paid call. The work starts there, with real information — not a pitch.",
              decline: "You get a straight reason, in writing, within the same 72 hours. No call, no pitch, no follow-up blizzard. The refusal is the work.",
            }}
          />
        </Container>
      </section>

      {/* the filter */}
      <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-soft)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="THE FILTER" title="Consulting is for the business with the whole system in play." className="mb-10" />
          <FitFilter
            positive={[
              { text: "Fragmented marketing that no single owner runs" },
              { text: "Growth that keeps outrunning the plan" },
              { text: "A founder who wants one partner instead of four vendors" },
            ]}
            negative={[
              { text: "A single-specialty gap. Buy the one pillar that fills it.", explanation: "We'll say so honestly — the filter applies inside the engagement too." },
            ]}
          />
        </Container>
      </section>

      <FaqSection eyebrow="FAQ · CONSULTING" title="The questions before the proposal." items={faqs} />

      <CtaBand variant="research" />
    </>
  );
}