"use client";

// components/layout/footer.tsx — "The Closing Argument". A conversion surface
// with navigation attached. Reading order top to bottom: availability bar
// (scarcity + live IST clock) → the ask (FooterCta) → compressed equal-weight
// navigation → watermark wordmark → legal micro-row. Client-rendered for the
// live clock, the CTA animations, and the copy-to-clipboard affordance.

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/primitives";
import { brand } from "@/lib/brand";
import { servicesNav, industriesNav } from "@/components/layout/nav-data";
import { FooterCta } from "@/components/layout/footer-cta";

const COMPANY = [
  { label: "Work", href: "/work" },
  { label: "Consulting", href: "/consulting" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/about/careers" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Pricing", href: "/pricing" },
];

function useIstClock() {
  const [ist, setIst] = useState<string>("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    });
    const tick = () => setIst(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return ist;
}

export function Footer() {
  const year = new Date().getFullYear();
  const ist = useIstClock();
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const visibleIndustries = industriesNav.slice(0, 4);
  const hiddenIndustries = industriesNav.slice(4);

  return (
    <footer
      className="mt-auto text-white"
      style={{ background: "var(--rad-footer-bg)" }}
    >
      {/* ── BLOCK 1 · availability bar ─────────────────────────────────────── */}
      <div className="flex items-center justify-between gap-4 border-b border-white/15 px-5 py-3.5 sm:px-8 lg:px-14">
        <p className="mono-sm flex items-center gap-2.5 whitespace-nowrap text-[11px] tracking-[0.14em] text-white/80">
          <span className="rad-pulse inline-block h-2 w-2 rounded-full bg-[var(--rad-red)]" aria-hidden="true" />
          ACCEPTING Q4 ENGAGEMENTS — 2 OF 5 REMAINING
        </p>
        <p className="mono-sm tabular whitespace-nowrap text-[11px] tracking-[0.14em] text-white/70" suppressHydrationWarning>
          {ist ? `MUMBAI ${ist} IST` : "MUMBAI --:-- IST"}
        </p>
      </div>

      {/* ── BLOCK 2 · the ask ──────────────────────────────────────────────── */}
      <Container className="border-b border-white/15 py-20 lg:py-28">
        <FooterCta />
      </Container>

      {/* ── BLOCK 3 · equal-weight compressed navigation ───────────────────── */}
      <Container className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-x-10 gap-y-12 sm:grid-cols-3">
          <nav aria-label="Services">
            <FooterHeading>Services</FooterHeading>
            <ul className="mt-5 space-y-3.5 text-sm text-white/80">
              {servicesNav.map((s) => (
                <li key={s.slug}>
                  <Link href={s.href} className="hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <FooterHeading>Company</FooterHeading>
            <ul className="mt-5 space-y-3.5 text-sm text-white/80">
              {COMPANY.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Industries">
            <FooterHeading>Industries</FooterHeading>
            <ul className="mt-5 space-y-3.5 text-sm text-white/80">
              {visibleIndustries.map((ind) => (
                <li key={ind.slug}>
                  <Link href={ind.href} className="hover:text-white">
                    {ind.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => setIndustriesOpen((v) => !v)}
                  aria-expanded={industriesOpen}
                  className="flex items-center gap-2 text-white/55 transition-colors hover:text-white"
                >
                  <span aria-hidden="true" className="text-[15px] leading-none">{industriesOpen ? "−" : "+"}</span>
                  {industriesOpen ? "Show fewer" : `${hiddenIndustries.length} more`}
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    industriesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className="mt-3.5 space-y-3.5 border-t border-white/15 pt-3.5">
                      {hiddenIndustries.map((ind) => (
                        <li key={ind.slug}>
                          <Link href={ind.href} className="hover:text-white">
                            {ind.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </Container>

      {/* ── BLOCK 4 · watermark wordmark (clear of the legal strip) ────────── */}
      <div className="border-t border-white/15 px-4 pb-10 pt-14 sm:px-8 lg:px-14">
        <p
          className="display mx-auto select-none whitespace-nowrap text-center font-extrabold leading-none tracking-[-0.04em]"
          style={{
            fontSize: "clamp(48px, 12vw, 210px)",
            color: "var(--rad-footer-watermark)",
          }}
          aria-hidden="true"
        >
          <span style={{ color: "var(--rad-red)" }}>RAD</span>
          IMPRESSION
        </p>
      </div>

      {/* legal micro-row */}
      <div className="flex flex-col gap-3 border-t border-white/15 px-5 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-14">
        <p>
          © {year} {brand.name}. All rights reserved.
        </p>
        <ul className="flex flex-wrap items-center gap-5">
          {LEGAL.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* closing plate — ends the numbered document */}
      <div className="border-t border-white/10 px-5 py-4 sm:px-8 lg:px-14">
        <p className="mono-sm whitespace-nowrap text-center text-[11px] tracking-[0.14em] text-white/50">
          END OF DOCUMENT — 16 PLATES · ONE BRIEF · RADIMPRESSION
        </p>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow !text-[11px] !text-white/60">{children}</div>;
}
