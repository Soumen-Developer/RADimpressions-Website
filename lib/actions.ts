// lib/actions.ts — server actions. Persistence is a durable JSONL store until
// Payload + Postgres is wired in (then these load the CMS injector unchanged).

"use server";

import { mkdirSync, appendFileSync } from "fs";
import path from "path";
import { z } from "zod";

const brandResearchSchema = z.object({
  fullName: z.string().trim().min(2, "Tell us your name.").max(120),
  businessName: z.string().trim().min(2, "Tell us the business name.").max(200),
  email: z.string().trim().email("A working email helps us reply within 72 hours.").max(200),
  phone: z.string().trim().min(5, "A phone number we can reach the business on.").max(30),
  whatYouDo: z.string().trim().min(20, "A proper read needs more than a sentence. Give us 2–4 lines.").max(4000),
  whoItsFor: z.string().trim().min(20, "Who the business is for matters as much as what it sells.").max(4000),
  competitiveSet: z.string().trim().min(10, "Name the alternative your customer could choose.").max(4000),
  cannotSayOutLoud: z.string().trim().max(4000).optional().default(""),
});

export type BrandResearchInput = z.infer<typeof brandResearchSchema>;

export interface SubmitResult {
  ok: boolean;
  id?: string;
  fieldErrors?: Record<string, string>;
  error?: string;
}

function storeDir() {
  const dir = path.join(process.cwd(), "data");
  mkdirSync(dir, { recursive: true });
  return dir;
}

export async function submitBrandResearch(input: BrandResearchInput): Promise<SubmitResult> {
  const parsed = brandResearchSchema.safeParse(input);
  if (!parsed.success) {
    const fieldErrors = Object.fromEntries(
      Object.entries(parsed.error.flatten().fieldErrors).map(([k, v]) => [k, v?.[0] ?? ""])
    );
    return { ok: false, fieldErrors };
  }

  const id = `br-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  const record = {
    id,
    createdAt: new Date().toISOString(),
    ...parsed.data,
    status: "received",
  };

  try {
    appendFileSync(path.join(storeDir(), "submissions.jsonl"), JSON.stringify(record) + "\n", "utf8");
  } catch (err) {
    console.error("submission write failed", err);
    return { ok: false, error: "We couldn't save your submission. Try again — the 72-hour promise still stands if the form lands." };
  }

  return { ok: true, id };
}