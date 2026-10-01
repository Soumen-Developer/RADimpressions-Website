// app/(site)/privacy-policy/page.tsx — Privacy Policy. Structured headings
// only, per SITEMAP D.17: real legal content is required from the client.
// No legal text is drafted as final.

import type { Metadata } from "next";
import { LegalStub } from "@/components/layout/legal-stub";

export const metadata: Metadata = {
  title: "Privacy Policy — RADIMPRESSION",
  description:
    "What the brand research form collects, how it's used and kept, and who to ask — once counsel signs the final text off.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalStub
      eyebrow="PRIVACY POLICY"
      title="What we hold, and why."
      lead="This page will set out exactly what the brand research form and any enquiries collect, where it is stored, and how long it is kept. Each section announces itself now; the text ships with counsel review."
      plate="PLATE 15"
      sections={[
        { heading: "What we collect", pending: "The answers to the brand research form and the contact details you choose to leave." },
        { heading: "How we use it", pending: "To read the business you sent, reply within 72 hours, and keep the records the practice runs on." },
        { heading: "Cookies and analytics", pending: "Privacy-respecting analytics only — no cross-site tracking is bought or sold." },
        { heading: "Retention", pending: "How long submissions and correspondence are held before deletion." },
        { heading: "Your rights", pending: "To see what we hold about you, and to have it corrected or deleted." },
        { heading: "Contact", pending: "The person to write to about anything in this policy." },
      ]}
    />
  );
}