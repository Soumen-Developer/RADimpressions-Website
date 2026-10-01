// app/(site)/terms/page.tsx — Terms of Service. Structured headings only,
// per SITEMAP D.17: real legal content is required from the client and
// nothing here is drafted as final.

import type { Metadata } from "next";
import { LegalStub } from "@/components/layout/legal-stub";

export const metadata: Metadata = {
  title: "Terms of Service — RADIMPRESSION",
  description:
    "The offer, claims, the teardown, and how an engagement runs and ends — in plain words, once counsel signs the final text off.",
};

export default function TermsPage() {
  return (
    <LegalStub
      eyebrow="TERMS OF SERVICE"
      title="In plain words."
      lead="This page will hold the terms of the engagement once counsel reviews them. Until then, each section announces itself — the text next to it ships with real copy or not at all."
      plate="PLATE 14"
      sections={[
        { heading: "The offer", pending: "What the ₹499 paid call is, what the sprint is, and what neither promises." },
        { heading: "Claims", pending: "That claims about our work describe engagements or disclosed scenarios, and never a guaranteed result." },
        { heading: "The teardown", pending: "That a teardown delivered under brand research is yours to keep, whether or not the engagement proceeds." },
        { heading: "Engagement terms", pending: "How scopes, notice, and payment work once an engagement starts." },
        { heading: "Ending an engagement", pending: "What happens on cancellation, in writing, before anything is paid." },
      ]}
    />
  );
}