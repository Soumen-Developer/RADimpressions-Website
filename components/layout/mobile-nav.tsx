"use client";

// components/layout/mobile-nav.tsx — full-screen dark room overlay that drops
// in below the header bar (the bar stays on top with its logo, CTA, and the
// hamburger which morphs into an ×). Links stack at 30px, left-aligned with a
// 40px gutter, and stagger up from translateY(24px), 50ms apart.

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { brand } from "@/lib/brand";

const PRIMARY = [
  { label: "How We Work", href: "/how-we-work" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Consulting", href: "/consulting" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-40 overflow-y-auto bg-[var(--bg-page)] transition-opacity duration-200 xl:hidden",
        open ? "opacity-100" : "pointer-events-none opacity-0"
      )}
      aria-hidden={!open}
    >
      <div className="pt-24 sm:pt-28">
        <nav aria-label="Mobile" className="px-10">
          <ul className="flex flex-col">
            {PRIMARY.map((item, i) => {
              const active = pathname === item.href;
              return (
                <li
                  key={item.href}
                  style={{ animationDelay: `${i * 50}ms` }}
                  className="menu-item-in border-b border-[var(--rule-soft)] py-1"
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "block py-2 text-[30px] font-medium leading-none tracking-[-0.02em] text-[var(--text-primary)] transition-colors",
                      active ? "text-[var(--action)]" : "hover:text-[var(--action)]"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="px-10 pb-12 pt-9">
          <Link
            href="/brand-research"
            onClick={onClose}
            className="menu-item-in flex h-14 w-full max-w-sm items-center justify-center rounded-full border border-[var(--text-primary)]/30 bg-transparent text-sm font-medium uppercase tracking-[0.1em] text-[var(--text-primary)] transition-colors duration-200 hover:bg-white hover:text-[var(--bg-deep)]"
            style={{ animationDelay: `${PRIMARY.length * 50}ms` }}
          >
            Start a project
          </Link>
          <p className="mt-6 text-sm text-[var(--text-body)]">
            <a href={`mailto:${brand.email}`} className="text-[var(--text-primary)] underline-offset-4 hover:underline">
              {brand.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
