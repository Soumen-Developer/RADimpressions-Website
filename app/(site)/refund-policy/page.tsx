// app/(site)/refund-policy/page.tsx — Refund Policy. Structured headings
// only, per SITEMAP D.17: final legal text is required from the client. The
// operating position (what is and isn't refundable) ships elsewhere already.

import type { Metadata } from "next";
import { LegalStub } from "@/components/layout/legal-stub";

export const metadata: Metadata = {
  title: "Refund Policy — RADIMPRESSION",
  description:
    "The ₹499 call, the sprint, and the retainer — what each holds and where refunds sit, once counsel signs the final text off.",
};

export default function RefundPolicyPage() {
  return (
    <LegalStub
      eyebrow="REFUND POLICY"
      title="What's yours, what isn't."
      lead="The practice's operating position on money is already stated on the site: the ₹499 call is a working session and not credited; the sprint is credited in full if a retainer follows within 30 days. The formal refund text below ships with counsel review."
      plate="PLATE 16"
      sections={[
        { heading: "The ₹499 call", pending: "That the call is a working session purchased up front and is not credited against a subsequent engagement." },
        { heading: "The sprint", pending: "That the full sprint fee is credited against a retainer that begins within 30 days of the sprint concluding." },
        { heading: "The retainer", pending: "How notice periods and unspent balance are handled when a retainer ends." },
        { heading: "Cancellation", pending: "What a client is owed at any stage, in writing, before anything is paid." },
      ]}
    />
  );
}