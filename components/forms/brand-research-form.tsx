"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/cn";
import { submitBrandResearch, type BrandResearchInput } from "@/lib/actions";

const emptyInput: BrandResearchInput = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  whatYouDo: "",
  whoItsFor: "",
  competitiveSet: "",
  cannotSayOutLoud: "",
};

const steps = [
  {
    index: "01",
    eyebrow: "STEP 1 — WHO WE'RE TALKING TO",
    title: "You, and the business",
    fields: ["fullName", "businessName", "email", "phone"] as const,
  },
  {
    index: "02",
    eyebrow: "STEP 2 — THE BUSINESS",
    title: "What it does, and who it's for",
    fields: ["whatYouDo", "whoItsFor", "competitiveSet"] as const,
  },
  {
    index: "03",
    eyebrow: "STEP 3 — THE REFUSAL",
    title: "What you can't say out loud",
    fields: ["cannotSayOutLoud"] as const,
  },
] as const;

const fieldLabels: Record<keyof BrandResearchInput, { label: string; help?: string; kind?: "textarea"; placeholder: string }> = {
  fullName: { label: "Your name", placeholder: "What should we call you?" },
  businessName: { label: "The business", placeholder: "The name it runs under" },
  email: { label: "Email", placeholder: "you@business.com" },
  phone: { label: "Phone", placeholder: "+91 …" },
  whatYouDo: { label: "What does the business do?", kind: "textarea", placeholder: "Keep it plain. The fancy version travels further if the plain version is true.", help: "2–4 lines. We read properly, so read-up costs you ten minutes." },
  whoItsFor: { label: "Who is it for?", kind: "textarea", placeholder: "The customer, described without adjectives." },
  competitiveSet: { label: "Who else could they choose?", kind: "textarea", placeholder: "Name the alternative. Direct or otherwise." },
  cannotSayOutLoud: { label: "What can't you say out loud?", kind: "textarea", placeholder: "Optional, but the most useful answer on the form. What's true about the business that never makes the deck?", help: "Optional" },
};

const fieldOrder: (keyof BrandResearchInput)[] = [
  "fullName",
  "businessName",
  "email",
  "phone",
  "whatYouDo",
  "whoItsFor",
  "competitiveSet",
  "cannotSayOutLoud",
];

export function BrandResearchForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<BrandResearchInput>(emptyInput);
  const [serverErrors, setServerErrors] = useState<Record<string, string>>({});
  const [isPending, startTransition] = useTransition();

  const current = steps[step];
  const isLast = step === steps.length - 1;

  function setField(key: keyof BrandResearchInput, value: string) {
    setData((d) => ({ ...d, [key]: value }));
    setServerErrors((e) => {
      if (!(key in e)) return e;
      const next = { ...e };
      delete next[key];
      return next;
    });
  }

  function attemptSubmit() {
    const payload = {
      ...data,
      cannotSayOutLoud: data.cannotSayOutLoud || "",
    };
    startTransition(async () => {
      const res = await submitBrandResearch(payload);
      if (res.ok) {
        router.push("/submitted");
      } else if (res.fieldErrors) {
        setServerErrors(res.fieldErrors);
        const firstError = fieldOrder.find((f) => res.fieldErrors?.[f]);
        if (firstError) {
          const stepIdx = steps.findIndex((s) => (s.fields as readonly string[]).includes(firstError));
          if (stepIdx >= 0) setStep(stepIdx);
        }
      }
    });
  }

  function onContinue() {
    if (isLast) {
      attemptSubmit();
    } else {
      setStep((s) => s + 1);
    }
  }

  return (
    <div>
      <div className="mb-8 flex items-center gap-3">
        {steps.map((s, i) => (
          <div key={s.index} className="flex items-center gap-3">
            <span
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-colors",
                i === step ? "bg-[var(--action)]" : i < step ? "bg-[var(--pillar-strategy)]" : "bg-[var(--rule)]"
              )}
              aria-hidden="true"
            />
            {i < steps.length - 1 ? <span className="h-px w-8 bg-[var(--rule)]" aria-hidden="true" /> : null}
          </div>
        ))}
        <span className="mono-sm ml-auto text-[var(--text-muted)]">STEP {step + 1} / 3</span>
      </div>

      <div key={current.index} className="rad-reveal">
        <div className="eyebrow mb-2 text-[var(--action)]">{current.eyebrow}</div>
        <h2 className="text-[clamp(25px,3.4vw,39px)] font-semibold tracking-[-0.015em] text-[var(--text-primary)]">
          {current.title}
        </h2>

        <div className="mt-8 space-y-5">
          {current.fields.map((key) => {
            const cfg = fieldLabels[key];
            const error = serverErrors[key];
            return (
              <div key={key}>
                <label htmlFor={`br-${key}`} className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
                  {cfg.label}
                </label>
                {cfg.kind === "textarea" ? (
                  <textarea
                    id={`br-${key}`}
                    name={key}
                    rows={key === "cannotSayOutLoud" ? 3 : 4}
                    value={data[key]}
                    onChange={(e) => setField(key, e.target.value)}
                    placeholder={cfg.placeholder}
                    aria-invalid={!!error}
                    className={cn(
                      "w-full rounded-[var(--radius-sm)] border bg-[var(--bg-page)] px-3.5 py-3 text-[15px] leading-relaxed text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)]",
                      error ? "border-[var(--rad-red)]" : "border-[var(--rule)]"
                    )}
                  />
                ) : (
                  <input
                    id={`br-${key}`}
                    name={key}
                    type={key === "email" ? "email" : "text"}
                    value={data[key]}
                    onChange={(e) => setField(key, e.target.value)}
                    placeholder={cfg.placeholder}
                    aria-invalid={!!error}
                    className={cn(
                      "w-full rounded-[var(--radius-sm)] border bg-[var(--bg-page)] px-3.5 py-3 text-[15px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)]",
                      error ? "border-[var(--rad-red)]" : "border-[var(--rule)]"
                    )}
                  />
                )}
                {cfg.help ? <div className="mt-1 text-xs text-[var(--text-muted)]">{cfg.help}</div> : null}
                {error ? <div className="mt-1 text-xs font-medium text-[var(--rad-red-ink)]">{error}</div> : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="text-sm font-medium text-[var(--text-body)] hover:text-[var(--text-primary)]"
          >
            ← Back
          </button>
        ) : (
          <span className="mono-sm text-[var(--text-muted)]">ABOUT 10 MINUTES</span>
        )}
        <button
          type="button"
          onClick={onContinue}
          disabled={isPending}
          className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-[var(--action)] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--action-loud)] disabled:opacity-50"
        >
          {isPending ? "Sending…" : isLast ? "Send the business" : "Continue"}
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}