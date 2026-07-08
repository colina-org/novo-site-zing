# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000), Turbopack
npm run build    # Production build
npm run start    # Serve the production build
npm run lint     # ESLint (flat config: eslint-config-next core-web-vitals + typescript)
```

There are no tests in this project. Per user preference, **do not run builds after each change** — it is not considered necessary.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 (PostCSS, no `tailwind.config`) · Swiper 12 · AOS (scroll animations) · Nodemailer (contact form email).

Import alias: `@/*` maps to the repo root.

## Architecture

Marketing/landing site (pt-BR) for **Zing Innovation by IEBT**, a public-sector innovation platform. Each route is a Server Component page that composes a vertical stack of section components.

### Routes (`app/`)
`/` (page.tsx), `/sobre`, `/contato`, `/cpsi`, `/programas`, `/programas/[slug]`, `/programa-inovacao-aberta`, `/gestao-de-hubs`, `/desafios-intraempreendedorismo`.

`app/layout.tsx` wraps every page with `<Header />`, `<Footer />`, and `<AosInit />`, and defines global SEO metadata (title template `%s | Zing Innovation`). Each page exports its own `metadata` object.

### Components (`app/components/`)
- Shared sections live directly in `components/` (e.g. `header.tsx`, `footer.tsx`, `ClientsSection.tsx`, `CommunitySection.tsx`, `FaqSection.tsx`).
- Page-specific sections live in **per-page subfolders**: `cpsi/`, `programas/`, `programa-inovacao-aberta/`, `gestao-hubs/`, `desafios-de-intraempreendedorismo/`, `sobre/`, `contato/`.
- **Folder names do not always match route names** — e.g. route `/gestao-de-hubs` uses `components/gestao-hubs/`, route `/desafios-intraempreendedorismo` uses `components/desafios-de-intraempreendedorismo/`. Component subfolders often duplicate the same section names (`Hero`, `About`, `Clients`, `FaqSection`, `WhyZing`/`WhyUse`) tailored per page rather than sharing one configurable component.

### Data colocated with components
There is no CMS or data layer. Content arrays are exported from the component that renders them and reused elsewhere:
- `programs` array is exported from `components/programas/ProgramCards.tsx` and consumed by `app/programas/[slug]/page.tsx` for `generateStaticParams`, `generateMetadata`, and the detail page. Adding/editing a program = editing this array (each entry has `slug`, `href`, optional `content`/`videos`/`anexos`/`avaliacoes`).

### Server actions (`app/actions/`)
`contato.ts` (and `cpsi.ts`) are `"use server"` modules. The contact form sends email via Nodemailer using SMTP env vars: `SMTP_HOST`, `SMTP_PORT` (default 587, secure when 465), `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM`, `CONTATO_TO`. Returns a `{ status, message }` state; missing config returns an error state rather than throwing.

### Other env vars
`NEXT_PUBLIC_SITE_URL` sets `metadataBase` (falls back to `http://localhost:3000`).

## Styling conventions

- Tailwind v4 theme is defined in `app/globals.css` via `@theme` — custom colors (`purplePrimary`, `purpleSecondary`, `bluePrimary`, `greyPrimary`, `gradientbg`), fonts, animations, and **custom breakpoints `desktop` (1268px) and `nav` (1137px)**.
- Use **Tailwind v4 canonical class names**: `bg-linear-to-*` (not `bg-gradient-to-*`), numeric arbitrary scales like `flex-466`/`max-w-200` (not `flex-[466]`/`max-w-[800px]`), and theme colors by name (e.g. `border-purpleSecondary`).
- `globals.css` imports `styles/fonts.css` (the custom **Sundry** / SundryNarrow font family, loaded from `app/fonts/`) and `styles/buttons.css` (`.btn-primary`). Body font is Sundry.
- `.container` utility = `w-full max-w-7xl px-4 mx-auto relative z-3`.
- Swiper styling is per-instance: a wrapper class on the Swiper (e.g. `.programs-swiper`, `.testimonials-pagination`, `.clients`) is targeted in `globals.css` to override pagination/timing.

## Swiper pattern

Swiper components are Client Components. Standard form:
```tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid"; // per-module css as needed
```
