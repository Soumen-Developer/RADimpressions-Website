// components/blocks/faq-section.tsx — heading + accordion.

import { SectionHeading } from "@/components/ui/primitives";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import type { FaqItem } from "@/lib/types";

export function FaqSection({
  eyebrow = "FAQ",
  title,
  intro,
  items,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: FaqItem[];
}) {
  return (
    <section className="border-t border-[var(--rule-soft)] bg-[var(--bg-page)]">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
          <div className="lg:pt-1">
            <FaqAccordion items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}