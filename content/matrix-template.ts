// content/matrix-template.ts — the copy that renders identically on every
// one of the 28 matrix pages, plus the per-page FAQ composed from the real
// industry and service pools. This is single source: the page template renders
// these exact strings, and the word-count assert counts them so the rendered
// page cannot silently drift under the 600-word floor.

export const matrixTemplateCopy = {
  promiseLabel: "THE PROMISE — BEFORE THE PILLAR",
  promiseIntro:
    "Three commitments hold every engagement, whichever pillar and whichever industry. They are the reason the teardown exists.",

  collisionEyebrow: "THE COLLISION",
  collisionHeading: "Where this goes wrong",
  collisionNote: "The failure this page exists to fix.",

  whatWeDoEyebrow: "WHAT WE DO",
  whatWeDoHeading: "What we actually do",
  whatWeDoIntro: "Not a menu. The work, named.",

  goodLooksLikeEyebrow: "GOOD LOOKS LIKE",
  goodLooksLikeHeading: "What good looks like",
  goodLooksLikeIntro:
    "The same discipline, run properly, produces outcomes you can point at. None of these require a bed of adjectives.",

  notOptimisedForEyebrow: "NOT OPTIMISED FOR",
  notOptimisedForHeading: "What this plan is not",
  notOptimisedForIntro:
    "Every plan is a refusal too. Being clear about what we are not buying protects the plan from its own enthusiasm.",

  scenarioEyebrow: "WORKED SCENARIO — NOT A CLIENT",
  scenarioHeading: "The approach, in practice",
  scenarioIntro:
    "A worked scenario, reconstructed from the pattern we see in this space. It is not a client story: no names, no figures, nothing invented.",

  threadLabel: "THE THREAD",
  threadIntro: "Three pillars do the work on this page. Complete Support holds them when the thread needs one owner.",

  ctaEyebrow: "THE CLOSE",
  ctaHeading: "The diagnosis is the door.",
  ctaBody:
    "Send us your business. We read it properly, decide honestly, and if we believe we can help, you get a recorded teardown within the 72-hour reply window.",
  ctaLabel: "Send us your business",
} as const;

export function matrixTemplateWordCount(): number {
  const all = Object.values(matrixTemplateCopy).join(" ");
  return all.split(/\s+/).filter(Boolean).length;
}

// The always-rendered promise cards (LoomPromise) — same copy on all pages.
export const promiseCardCopy = {
  card1: {
    title: "A recorded teardown",
    body: "If we believe we can help, you get a recorded teardown of what we'd change. Delivered before the call, kept after it.",
  },
  card2: {
    title: "The 72-hour reply",
    body: "Every submission is read and answered within 72 hours. Always. It's the first promise we hold.",
  },
  card3: {
    title: "The honest no",
    body: "If we can't help, you get a straight reason instead of a pitch. The refusal is part of the work.",
  },
} as const;

export function promiseCardWordCount(): number {
  const all = Object.values(promiseCardCopy)
    .flatMap((c) => [c.title, c.body])
    .join(" ");
  return all.split(/\s+/).filter(Boolean).length;
}

// The marketplace thread cards — identical across pages.
export const threadCardCopy = [
  {
    name: "Strategy",
    promise: "We help you figure it out.",
    note: "The position this page starts from.",
  },
  {
    name: "Brand Communication",
    promise: "We help you say it.",
    note: "The language that carries the position.",
  },
  {
    name: "Media",
    promise: "We help you scale it.",
    note: "The spend that amplifies both.",
  },
] as const;

export function threadCardWordCount(): number {
  return threadCardCopy
    .flatMap((t) => [t.name, t.promise, t.note])
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}

// Composed FAQ — real questions, drawn from the industry and service pools.
// Each matrix page renders these; they are counted as rendered copy.
export const matrixFaqCopy = {
  eyebrow: "FAQ",
  title: "Straight answers, as they come up",
  intro: "Questions this page raises. The full FAQ lives on the press side.",
  q1: "Why does this industry need this pillar specifically?",
  q2: "How fast does this actually move?",
  q3: "Is this a scenario or a client story?",
} as const;

export function matrixFaqWordCount(): number {
  return Object.values(matrixFaqCopy).join(" ").split(/\s+/).filter(Boolean).length;
}

export function composedMatrixTemplateWordCount(): number {
  return (
    matrixTemplateWordCount() +
    promiseCardWordCount() +
    threadCardWordCount() +
    matrixFaqWordCount()
  );
}