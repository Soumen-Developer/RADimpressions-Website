// app/(site)/insights/category/[category]/page.tsx — category template
// (SITEMAP D.13.7, row 20). Six instances, each opening with an intro
// paragraph unique to the category, then the filtered grid. Empty categories
// ship with an honest empty state — no fabricated articles.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Eyebrow, Tag } from "@/components/ui/primitives";
import { PageLead } from "@/components/ui/page-lead";
import { InsightCard } from "@/components/cards";
import { JsonLd } from "@/components/seo/json-ld";
import { itemListSchema, breadcrumbSchema } from "@/lib/seo";
import { CtaBand } from "@/components/blocks/cta-band";
import { all } from "@/content/insights";
import type { InsightCategory } from "@/lib/types";

const categories: InsightCategory[] = ["positioning", "brand", "media", "marketing-ops", "industry-notes", "craft"];

const meta: Record<InsightCategory, { title: string; intro: string; empty: string }> = {
  positioning: {
    title: "The position is the plan.",
    intro:
      "Arguments and answers about deciding what the business is for, whom it serves, and what it will refuse. Every other category on this site assumes this one is settled.",
    empty: "",
  },
  brand: {
    title: "Saying it.",
    intro:
      "Identity, language, and the assets that carry both. What makes output recognisably yours — and why most of what fails here fails before the design.",
    empty: "Nothing in this category yet. The first piece lands here when it's ready, not on schedule.",
  },
  media: {
    title: "Spending that compounds.",
    intro:
      "Distribution, paid, and the discipline around both. The recurring theme: media amplifies what already exists — so the only defensible headline is the number that reconciles with the bank.",
    empty: "",
  },
  "marketing-ops": {
    title: "How marketing is run.",
    intro:
      "Budgets, retainers, teams, and reporting — the operating layer most marketing plans don't mention. Notes on the number that reconciles and the promise that holds.",
    empty: "",
  },
  "industry-notes": {
    title: "Notes from the category.",
    intro:
      "Observations from the industries on this site — where the buying cycle, the season, and the storefront differ. Written to change how the market reads the plan, not the other way round.",
    empty: "Nothing here yet. The first industry note lands when a category is read properly, not on schedule.",
  },
  craft: {
    title: "The work of making.",
    intro:
      "On the craft itself — briefs that survive contact with a designer, hierarchies that hold a grid, and the discipline between idea and artefact.",
    empty: "Nothing in this category yet. The first piece on craft lands here when it's ready.",
  },
};

export function generateStaticParams() {
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  if (!(categories as string[]).includes(category)) return {};
  const label = category.replace("-", " ");
  return {
    title: `${label} — insights — RADIMPRESSION`,
    description: meta[category as InsightCategory].intro.slice(0, 155),
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (!(categories as string[]).includes(category)) notFound();
  const cat = category as InsightCategory;
  const articles = all.filter((a) => a.category === cat);
  const m = meta[cat];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Insights", path: "/insights" },
            { name: cat.replace("-", " "), path: `/insights/category/${cat}` },
          ]),
          itemListSchema(
            articles.map((a) => ({ name: a.title, path: `/insights/${a.slug}` }))
          ),
        ]}
      />

      <PageLead
        eyebrow="INSIGHTS — CATEGORY"
        title={m.title}
        intro={m.intro}
        meta={
          <div className="flex flex-wrap items-center gap-3">
            <Tag tone="soft">{cat.replace("-", " ").toUpperCase()}</Tag>
            <span className="mono-sm text-[var(--text-muted)]">CATEGORY · {articles.length} POSTED</span>
          </div>
        }
        plate={`PLATE 07 · ${cat.replace("-", " ").toUpperCase()}`}
      />

      <section>
        <Container className="py-16 sm:py-20">
          {articles.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((a) => (
                <InsightCard key={a.slug} insight={a} />
              ))}
            </div>
          ) : (
            <div className="rounded-[var(--radius-md)] border border-[var(--rule)] border-dashed p-8">
              <Eyebrow>EMPTY, HONESTLY</Eyebrow>
              <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-[var(--text-body)]">{m.empty}</p>
              <p className="mt-4 text-sm text-[var(--text-muted)]">
                The category ships because it exists on search — the first piece lands when it&apos;s written to standard.
              </p>
            </div>
          )}
        </Container>
      </section>

      <CtaBand variant="consulting" />
    </>
  );
}