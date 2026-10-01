// content/misc.ts — contact, legal, careers, submitted. No fabricated content.

export const contact = {
  heading: "Talk to us",
  body: "The fastest way to reach us is the brand research form — every submission gets a reply within 72 hours. For anything else, write to support.",
  email: "support@radimpression.com",
  phone: "+91 76662 32291",
  emailNote: "For anything that isn't a brand research submission — billing, logistics, the polite follow-ups you haven't had.",
  phoneNote: "Generally reachable Mon–Fri. The brand research 72-hour promise runs on calendar days.",
  form: {
    heading: "A brief, before the brief",
    body: "Ten minutes. The answers tell us more than a week of calls.",
    fields: [
      "What the business does",
      "Who it is for",
      "The competitive set",
      "What you can't say out loud",
    ],
  },
} as const;

export const legal = {
  lastUpdated: "Q1",
  sections: [
    {
      heading: "The offer",
      body: "The ₹499 paid call is a 60-minute working session and is not credited against any subsequent engagement. The sprint is priced on request, holds two slots a month, and is credited in full if a retainer begins within 30 days of the sprint's conclusion. Capacity stands at five new engagements a quarter.",
    },
    {
      heading: "Claims",
      body: "Where we make claims about our work, they are claims about engagements or scenarios; a 'worked scenario' is disclosed as such and does not name a client. Nothing on this site promises a specific result.",
    },
    {
      heading: "The teardown",
      body: "Recorded teardowns are working documents of an engagement. A teardown delivered under the brand research process is yours to keep regardless of whether the engagement proceeds.",
    },
    {
      heading: "Contact",
      body: "support@radimpression.com · +91 76662 32291.",
    },
  ],
} as const;

export const careers = {
  heading: "We hire slowly.",
  body: "A small team, deliberately. When a role opens, it will be named here with its actual scope. Until then, the practice's position on hiring is the position on everything else: we'd rather say no, with reasons.",
  applyLine: "If you're the kind of person who reads the 'no, with reasons' line and recognises the work you'd do here, write to us. The subject line: the position doesn't exist.",
  email: "support@radimpression.com",
} as const;

export const submitted = {
  heading: "Received. Now it's on us.",
  body: "Your submission is in the queue, in the order it arrived. The 72-hour reply is a commitment, not a target.",
  nextSteps: [
    { step: "01", label: "We read it", note: "The form is read properly, not skimmed for a budget figure." },
    { step: "02", label: "The verdict", note: "A yes or a no, with reasons, within 72 hours. Always." },
    { step: "03", label: "If yes — the teardown", note: "The recorded teardown is the first working document of the engagement." },
  ],
  narrative:
    "If we believe we can help, you get a recorded teardown of what we'd change, walked through on a 60-minute paid call. If we can't, you get a straight reason instead. Both share the same deadline.",
  reframe:
    "The 60 minutes is a working session at ₹499, not credited against anything. The sprint, when proposed, is priced on request and credited in full if the retainer follows within 30 days.",
} as const;

export const workEmptyState = {
  heading: "The case studies are being written, not invented.",
  body: "Every case study on this site is a real engagement — none are composites. Until the founder signs off the first set, the Work index shows the filter and the empty state rather than fabricated numbers.",
} as const;