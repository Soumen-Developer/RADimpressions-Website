# RADimpressions Website

> **Think big. Advertise smart.** — A modern, performant marketing website for RADimpressions, built with Next.js 16, TypeScript, and Tailwind CSS v4.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.3-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ed?logo=docker)](https://www.docker.com/)
[![Deploy on Render](https://img.shields.io/badge/Deploy%20on-Render-46e3b7?logo=render)](https://render.com/)

---

## ✨ Features

| Category | Highlights |
|----------|------------|
| **Performance** | Next.js App Router, `output: standalone`, static generation (86 pages), zero-JS where possible |
| **Design System** | Custom components: Hero Playground, Disciplines Orbit, Work Showcase, Pillar Cards, Magnetic Links |
| **Animation** | Framer Motion: scroll-triggered reveals, page transitions, magnetic hover, marquee, cursor stage |
| **Content** | MDX-powered blog/insights, dynamic routing for services, industries, work, case studies |
| **SEO** | JSON-LD structured data, sitemap.xml, robots.txt, Open Graph, meta tags per page |
| **Forms** | Brand research forms, contact forms with validation |
| **Accessibility** | Semantic HTML, ARIA labels, focus management, reduced-motion support |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm / pnpm / yarn

### Development

```bash
# Install dependencies
npm install

# Start dev server (with Turbopack)
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run start
```

---

## 🐳 Docker Deployment

### Build & Run Locally

```bash
# Build image
docker build -t radimpression .

# Run container
docker run -p 3000:3000 radimpression

# Visit http://localhost:3000
```

### Render Deployment

1. Connect this repository to [Render](https://dashboard.render.com)
2. Create a **Web Service** → selects `Dockerfile` automatically
3. Deploy — zero config needed

The Dockerfile uses:
- **Multi-stage build** (deps → builder → runner)
- **Next.js standalone output** (~100MB vs ~1GB)
- **Non-root user** (UID 1001)
- **Health check** at `/`

---

## 📁 Project Structure

```
radimpression/
├── app/
│   ├── (site)/              # Marketing site route group
│   │   ├── about/           # About, careers
│   │   ├── careers/         # Job listings
│   │   ├── catalog/         # Service catalog
│   │   ├── consulting/      # Consulting pages
│   │   ├── contact/         # Contact form
│   │   ├── faq/             # FAQ accordion
│   │   ├── hiring/          # Hiring process
│   │   ├── how-we-work/     # Philosophy, pricing, engagement
│   │   ├── industries/      # Dynamic industry pages
│   │   ├── insights/        # Blog + categories
│   │   ├── pricing/         # Pricing tiers
│   │   ├── services/        # Dynamic service pages
│   │   ├── work/            # Portfolio / case studies
│   │   ├── layout.tsx       # Site layout (header, footer)
│   │   └── page.tsx         # Homepage
│   ├── (flat)/              # Flat utility pages
│   ├── api/                 # API routes
│   ├── globals.css          # Global styles + Tailwind v4
│   ├── layout.tsx           # Root layout (providers, fonts)
│   └── page.tsx             # Root redirect
├── components/
│   ├── blocks/              # Page sections (CTA, FAQ, Process, etc.)
│   ├── forms/               # Form components
│   ├── home/                # Homepage-specific (Hero, Work, Clients)
│   ├── layout/              # Header, Footer, Navigation
│   ├── motion/              # Animation primitives
│   ├── seo/                 # JSON-LD, meta helpers
│   └── ui/                  # Reusable UI (Accordion, Primitives)
├── content/                 # Typed content constants (TS)
├── lib/                     # Utilities (SEO, slugs, types, cn)
├── public/                  # Static assets (logos, portfolio images)
├── Dockerfile               # Multi-stage production Dockerfile
├── next.config.ts           # Next.js config (standalone output)
└── tsconfig.json            # TypeScript config
```

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 16 (App Router, RSC, Server Actions) |
| **Language** | TypeScript 5 (strict mode) |
| **Styling** | Tailwind CSS v4 (CSS-first, OKLCH colors) |
| **Animation** | Framer Motion 12 |
| **Content** | MDX (via `next-mdx-remote` / content layer) |
| **Icons** | Lucide React |
| **Forms** | React Hook Form + Zod |
| **Deployment** | Docker → Render |
| **Linting** | ESLint 9 (flat config) |

---

## 📦 Key Components

| Component | Purpose |
|-----------|---------|
| `HeroPlayground` | Interactive hero with magnetic elements |
| `DisciplinesOrbit` | Animated orbiting service categories |
| `WorkShowcase` | Filterable portfolio grid |
| `PillarCard/Cycle` | Animated service pillars |
| `ProcessSteps` | Numbered process visualization |
| `ScrollThread` | Scroll-linked narrative |
| `MagneticLink` | Cursor-attraction hover effect |
| `PageTransition` | Route transition animations |

---

## 🌐 Routes Overview

| Route | Type | Description |
|-------|------|-------------|
| `/` | SSG | Homepage |
| `/about` | SSG | About + careers |
| `/careers` | SSG | Job listings |
| `/catalog` | SSG | Service catalog |
| `/consulting` | SSG | Consulting overview |
| `/contact` | SSG | Contact form |
| `/faq` | SSG | FAQ accordion |
| `/hiring` | SSG | Hiring process |
| `/how-we-work/*` | SSG | Philosophy, pricing, engagement |
| `/industries/[industry]/[service]` | SSG | Dynamic industry pages |
| `/insights` | SSG | Blog index |
| `/insights/[slug]` | SSG | Blog posts |
| `/pricing` | SSG | Pricing tiers |
| `/services/[slug]` | SSG | Service detail pages |
| `/work/[slug]` | SSG | Case studies |

---

## 🔧 Configuration

### Environment Variables

```env
# Optional: Analytics, CMS, etc.
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_SITE_URL=https://radimpressions.com
```

### Tailwind v4

Uses CSS-first config in `app/globals.css` with `@theme` directive. No `tailwind.config.js` needed.

---

## 📄 License

Proprietary — RADimpressions. All rights reserved.

---

## 🤝 Contributing

Internal project. For questions, contact the RADimpressions team.

---

**Built with precision by the RADimpressions team.**