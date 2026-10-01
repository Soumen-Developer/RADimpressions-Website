// components/seo/json-ld.tsx — renders one or more JSON-LD blobs.

import type { JsonLd } from "@/lib/seo";

export function JsonLd({ data }: { data: JsonLd }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
      ))}
    </>
  );
}