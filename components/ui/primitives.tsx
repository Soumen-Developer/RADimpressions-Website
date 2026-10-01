// components/ui/primitives.tsx — shared primitives. No hex, tokens only.

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

/* ── Container ─────────────────────────────────────────────────────────── */

export function Container({
  className,
  children,
  wide = false,
}: {
  className?: string;
  children: ReactNode;
  wide?: boolean;
}) {
  const size = wide ? "max-w-[1440px]" : "max-w-[1200px]";
  return (
    <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", size, className)}>
      {children}
    </div>
  );
}

/* ── Eyebrow — the mono signature ──────────────────────────────────────── */

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("eyebrow", className)}>{children}</div>;
}

/* ── Tag ───────────────────────────────────────────────────────────────── */

export function Tag({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode;
  tone?: "default" | "pillar" | "outline" | "soft" | "deep";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "mono-sm inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[var(--radius-sm)] whitespace-nowrap",
        tone === "default" && "bg-[var(--bg-soft)] text-[var(--text-muted)]",
        tone === "pillar" && "bg-[var(--pillar-strategy)] text-white",
        tone === "outline" && "border border-[var(--rule)] text-[var(--text-body)]",
        tone === "soft" && "bg-[var(--bg-tint)] text-[var(--text-primary)]",
        tone === "deep" && "bg-[var(--bg-deep)] text-[var(--text-on-deep)]",
        className
      )}
    >
      {children}
    </span>
  );
}

/* ── Section heading ───────────────────────────────────────────────────── */

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "deep";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-[56ch]",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <Eyebrow
          className={cn(
            "mb-5",
            align === "center" && "justify-center",
            align !== "center" && "chapter-kick",
            tone === "deep" && "text-[var(--rule)]"
          )}
        >
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={cn(
          "text-[clamp(31px,4.6vw,58px)] leading-[1.02] tracking-[-0.03em] font-bold",
          tone === "deep" ? "text-[var(--text-on-deep)]" : "text-[var(--text-primary)]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {intro ? (
        <div
          className={cn(
            "mt-5 text-lg leading-relaxed",
            tone === "deep" ? "text-[var(--rule)]" : "text-[var(--text-body)]"
          )}
        >
          {intro}
        </div>
      ) : null}
    </div>
  );
}

/* ── Arrow icon ────────────────────────────────────────────────────────── */

export function Arrow({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn("inline-block", flip && "rotate-180", className)}
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M3 8h10m0 0L9 4m4 4-4 4" strokeLinecap="square" />
    </svg>
  );
}

/* ── Button (renders <a> or <button>) ──────────────────────────────────── */

type ButtonVariant = "primary" | "loud" | "dark" | "outline" | "ghost" | "onDeep";
type ButtonSize = "sm" | "md" | "lg";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-medium tracking-[-0.01em] transition-all duration-200 [transition-timing-function:var(--ease-brand)] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap select-none";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--action)] text-white shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:bg-[var(--action-loud)] active:translate-y-0 px-5 py-3 text-sm",
  loud:
    "bg-[var(--action-loud)] text-white shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0 px-5 py-3 text-sm",
  dark: "bg-[#241b1e] text-[var(--text-on-deep)] border border-[var(--rule)] hover:-translate-y-0.5 hover:bg-[#2c2124] active:translate-y-0 px-5 py-3 text-sm",
  outline:
    "border border-[var(--rule)] text-[var(--text-primary)] hover:-translate-y-0.5 hover:border-[var(--text-primary)] active:translate-y-0 px-5 py-3 text-sm",
  ghost:
    "text-[var(--action)] hover:bg-[var(--bg-soft)] px-4 py-2 text-sm",
  onDeep:
    "bg-white text-[var(--bg-deep)] hover:-translate-y-0.5 hover:bg-[var(--bg-soft)] active:translate-y-0 px-5 py-3 text-sm",
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "text-xs px-3.5 py-2",
  md: "text-sm px-5 py-3",
  lg: "text-base px-6 py-3.5",
};

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(buttonBase, buttonVariants[variant], buttonSizes[size], withArrow && "group", className)}
      {...rest}
    >
      {children}
      {withArrow ? <Arrow className="transition-transform group-hover:translate-x-0.5" /> : null}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(buttonBase, buttonVariants[variant], buttonSizes[size], withArrow && "group", className)}
      {...rest}
    >
      {children}
      {withArrow ? <Arrow className="transition-transform group-hover:translate-x-0.5" /> : null}
    </button>
  );
}

/* ── Stat — requires a source. No source, no render. ───────────────────── */

export function Stat({
  value,
  label,
  source,
  tone = "light",
  className,
}: {
  value: string;
  label: string;
  source: string;
  tone?: "light" | "deep";
  className?: string;
}) {
  if (!source) return null;
  return (
    <div className={cn("border-l-2 pl-4", tone === "deep" ? "border-[var(--rule)]" : "border-[var(--pillar-strategy)]", className)}>
      <div
        className={cn(
          "tabular display text-[clamp(31px,4vw,49px)] leading-none font-semibold tracking-[-0.02em]",
          tone === "deep" ? "text-[var(--text-on-deep)]" : "text-[var(--text-primary)]"
        )}
      >
        {value}
      </div>
      <div className={cn("mt-2 text-sm", tone === "deep" ? "text-[var(--rule)]" : "text-[var(--text-body)]")}>
        {label}
      </div>
      <div className={cn("eyebrow mt-2 !text-[10px]", tone === "deep" && "!text-[var(--rule)]")}>
        SOURCE: {source}
      </div>
    </div>
  );
}

/* ── Pillar mark (colour rule + name) ──────────────────────────────────── */

import type { PillarSlug } from "@/lib/brand";

export function pillarColourVar(slug: PillarSlug): string {
  return {
    strategy: "var(--pillar-strategy)",
    "brand-communication": "var(--pillar-comms)",
    media: "var(--pillar-media)",
    "complete-support": "var(--pillar-complete)",
  }[slug];
}

export function PillarMark({
  slug,
  name,
  className,
}: {
  slug: PillarSlug;
  name: string;
  className?: string;
}) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <span className="inline-block h-2.5 w-2.5" style={{ background: pillarColourVar(slug) }} aria-hidden="true" />
      <span className="mono-sm text-[var(--text-muted)]">{name}</span>
    </div>
  );
}