# Shitij Yadav — Developer Portfolio

A premium, dark-theme single-page portfolio built with **React + TypeScript**,
**Tailwind CSS v4**, **Framer Motion**, and **Lucide** icons. Designed to feel
modern, clean, and recruiter-friendly.

## Sections

- **Hero** — profile image (with initials fallback), animated gradient glow,
  floating tech badges, and three CTAs (Download Resume / View Projects / Contact).
- **Stats** — four glass stat cards with animated count-up.
- **About** — professional summary, career objective, and education in a modern
  card layout.
- **Skills** — categorized cards (Frontend / Backend / Database / Tools) with
  animated progress bars and hover.
- **Projects** — full-width alternating rows (image ⇄ content) with banner, key
  features, tech badges, Live Demo + GitHub buttons, and glassmorphism.
- **Experience** — full-width premium card with achievements in a dense grid.
- **Resume** — card with a PDF thumbnail, **Download** (direct) and **View** (new
  tab) buttons, plus live file size and last-updated. No large embedded viewer.
- **Contact** — Email / Phone / LinkedIn / GitHub cards plus a
  "Let's Build Something Amazing Together" CTA band (Hire Me / Download Resume).
- **Background** — a continuous fixed layer: gradient-mesh blobs, masked grid,
  and floating particles that tie all sections together.

## Tech

| Concern    | Choice                                  |
| ---------- | --------------------------------------- |
| Framework  | React 18 + TypeScript (Vite SPA)        |
| Styling    | Tailwind CSS v4 (dark theme, glass UI)  |
| Animation  | Framer Motion (scroll reveals, stagger) |
| Icons      | lucide-react + custom brand SVGs        |
| Fonts      | Inter (body) + Sora (display)           |

## Getting started

Requires **Node.js 18+**.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
npm run type-check
```

## Make it yours

Almost everything lives in **`src/data/portfolio.ts`** — edit it to update your
name, tagline, social links, projects, skills, and experience.

- **Profile photo** — drop a square image at `public/profile.jpg`. Until then a
  gradient initials avatar is shown automatically.
- **Resume** — replace `public/resume.pdf` with your real PDF (a working
  placeholder ships in the repo). The card reads the file's real size and
  last-modified date at runtime, falling back to the values in `portfolio.ts`.
- **Resume thumbnail** — optionally add `public/resume-thumb.png` (a rendered
  first page looks great). Without it, a clean faux-document preview is drawn.
- **Project covers** — add an `image` path to a project in `portfolio.ts` to use
  a screenshot; otherwise a branded gradient cover is generated.

## Structure

```
src/
├── App.tsx                  # composes all sections + skip link
├── index.css                # Tailwind theme, glass/grid/gradient utilities
├── data/portfolio.ts        # ← single source of content
├── lib/
│   ├── motion.ts            # shared Framer Motion variants
│   └── useCountUp.ts        # in-view count-up hook for stats
└── components/
    ├── Background.tsx       # gradient mesh + grid + floating particles
    ├── Navbar.tsx           # sticky glass nav, mobile menu
    ├── Hero.tsx             # avatar, floating badges, CTAs, socials
    ├── Stats.tsx            # animated stat cards
    ├── About.tsx            # summary, objective, education
    ├── Skills.tsx           # categorized cards + progress bars
    ├── Projects.tsx         # alternating full-width project rows
    ├── Experience.tsx       # full-width experience card
    ├── ResumeCard.tsx       # thumbnail + download/view + metadata
    ├── Contact.tsx          # contact cards + CTA band
    ├── Footer.tsx
    ├── SectionHeading.tsx   # shared animated heading
    └── icons.tsx            # GitHub / LinkedIn brand SVGs
```

## Accessibility

- Skip-to-content link, semantic landmarks, and labelled icon-only links.
- Keyboard-operable nav and focus-visible styles throughout.
- Respects `prefers-reduced-motion` (animations collapse to near-instant).
```
