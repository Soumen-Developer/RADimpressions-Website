// app/(flat)/layout.tsx — minimal chrome for conversion routes.

import { LegalRow } from "@/components/layout/legal-row";

export default function FlatLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-page)]">
      <main className="flex-1">{children}</main>
      <LegalRow />
    </div>
  );
}