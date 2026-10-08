# Stanley Aketch — Portfolio

> **Biochemist in the making.** Clinical diagnostics, food analysis and health data —
> *"I turn messy samples into clean, trustworthy numbers."*

A story-first, single-page portfolio built with **Next.js 16.4**, **React 19.3**, **Tailwind CSS 4.3**
and **Framer Motion**. Warm editorial design ("The Lab Notebook"): paper cream, espresso ink,
one ember-amber accent, generous white space, scroll-driven motion and laboratory imagery.

---

## Quick start

Requires **Node.js 22.14+**. The `.nvmrc` selects Node 22. npm is the canonical package manager; commit `package-lock.json` with dependency changes.

```bash
# install exactly the locked dependency versions
npm ci

# start the dev server
npm run dev
```

Open **http://localhost:3000**.

```bash
# production build + start
npm run build
npm start

# lint and strict type checking
npm run check
```

No environment variables, no database — the whole site is static and self-contained.

---

## What's inside

The page follows the story-first order from the content spec:
**pitch → selected work → experience timeline**, then the supporting chapters.

| Section on the page | Component file |
| --- | --- |
| Draft banner + sticky navigation | `src/components/portfolio/nav.tsx` |
| Hero — pitch, portrait, stats, floating QC cards | `src/components/portfolio/hero.tsx` |
| Scrolling discipline ticker | `src/components/portfolio/marquee.tsx` |
| The short version · Why biochemistry · Working principles | `src/components/portfolio/story.tsx` |
| Where I'd fit — 5 ranked career doors + quick answers | `src/components/portfolio/where-fit.tsx` |
| Selected work — 3 case files (thesis, food chemistry, R data project) | `src/components/portfolio/selected-work.tsx` |
| Experience — attachment timeline + typical day | `src/components/portfolio/experience.tsx` |
| Toolbox — 3 confidence tiers | `src/components/portfolio/toolbox.tsx` |
| Learning path — year-by-year degree + credentials | `src/components/portfolio/learning-path.tsx` |
| Beyond the lab · Testimonials · If you hire me | `src/components/portfolio/closing.tsx` |
| Gallery + Let's talk (contact) | `src/components/portfolio/gallery-contact.tsx` |
| Publishing checklist + footer | `src/components/portfolio/appendix-footer.tsx` |
| Shared motion primitives (Reveal, Stagger, CountUp…) | `src/components/portfolio/primitives.tsx` |

Copy lives directly in these components — open the file, edit the text, save.
All `[square bracket]` placeholders from the draft content are rendered as
**dotted-underline tokens** so they're impossible to miss (see below).

---

## The placeholder workflow

The site is in **draft status**: every `[placeholder]` value is wrapped in a `<Ph>` token
(defined in `primitives.tsx`) that renders with a dotted underline and an ember tint.
To finalise the site:

1. Search the `src/components/portfolio/` folder for `<Ph>` usages.
2. Replace each `<Ph>[value]</Ph>` with the real content as plain text (or `<b>` for emphasis).
3. Remove the draft banner in `nav.tsx` (search for `DRAFT`).
4. Run through the interactive **publishing checklist** at the bottom of the page —
   it mirrors the spec's "before you publish" appendix.
5. Swap the AI-generated placeholder imagery (see below) for real lab photos, charts
   and the poster — keep the same file names and nothing else changes.

---

## Assets

The 51 supplied WebP images live in `public/images/stanley_gallery/`. They are used throughout the hero, story cards, career doors, research methods, experience timeline, skills, education, activities, testimonials, hiring plan, gallery and contact cards.

`src/lib/portfolio-images.ts` provides typed static imports. `src/components/portfolio/card-image.tsx` provides consistent crops, responsive sizes, lazy loading and automatic blur placeholders through Next.js Image. Original assets remain intact. Card images are decorative when adjacent text already describes the subject; standalone gallery images have descriptive alt text.

The existing illustrative data charts remain in `public/images/stanley/`; generated photographs do not replace scientific figures or verify draft project details. Replace placeholders with Stanley's actual details before publishing.

- `tools/gen-charts.py` rebuilds the illustrative charts (requires matplotlib).
- `tools/gen-images.sh` is the original image generation helper.

## Design system

Defined once in `src/app/globals.css` (Tailwind 4 CSS-first `@theme`):

- **Palette** — `paper #faf7f0` · `cream` · `sand` · `line` · `ink #251a12` ·
  `ink-soft` · `ink-faint` · **accent `ember #b4540a`** (+ `ember-deep/soft/mist`) ·
  `sage #64754c` · `espresso` (dark sections) · `clay` (alerts).
- **Type** — *Fraunces* (display serif, via `next/font`), *Inter* (body), *Geist Mono* (data/labels).
- **Motion** — Framer Motion scroll reveals, staggered lists, parallax hero, count-up stats,
  animated meters and a CSS marquee; all wrapped in `prefers-reduced-motion` guards.
- **Layout** — generous white space, editorial rules/hairlines, arch-cropped imagery,
  sticky nav with scroll-spy underlines, full mobile layout with a sheet menu.

## Upgrade and performance checks

- Next.js 16.4.0 and React 19.3.0 use the stable release channel; Turbopack is the default for development and builds.
- Motion uses `LazyMotion` with `m` components and only the DOM animation features needed by this site.
- The page and CSS marquee stay server rendered. Images use Next.js optimization, responsive sizes, and lazy loading below the fold; the portrait uses the Next.js 16 `preload` API.
- Skill meters animate transforms instead of width. Hero parallax respects reduced motion.
- React Strict Mode, standard Next.js lint checks, and strict TypeScript checks are enabled.
- The mobile menu supports Escape, focus trapping, focus restoration, and unlocks scrolling when switching to desktop.
- ESLint remains on 9.39 because Next.js's import, React, and accessibility plugins do not yet declare ESLint 10 support.
- TypeScript remains on 6.0 because the current TypeScript ESLint parser requires `<6.1`; Node types follow the Node 22 runtime.

The dependency audit currently reports a development-only `braces` advisory through Next.js's lint plugin (`GHSA-vfj7-8cjw-p6xm`); the registry has no patched `braces` release. Avoid `npm audit fix --force`, which proposes downgrading Next.js's lint configuration.

Run `npm run check` and `npm run build` before deploying. Google fonts are downloaded at build time by `next/font`, then served locally; the build requires access to Google Fonts.

## Project structure

```
├── public/
│   └── images/stanley/     # all imagery (see table above)
├── src/
│   ├── app/
│   │   ├── layout.tsx      # fonts + metadata
│   │   ├── page.tsx        # assembles the 13 section components
│   │   └── globals.css     # design system (@theme tokens, keyframes, .ph token)
│   ├── components/portfolio/  # one file per story chapter (table above)
│   └── lib/utils.ts        # cn() helper
├── tools/                  # chart + image regeneration scripts
├── next.config.ts
└── package.json
```

## Deploying

Any Node host works. The zero-config option:

```bash
# Vercel (recommended)
npx vercel
```

Also fine: `npm run build && npm start` behind Nginx/Caddy, or a Docker image based on
`node:22-alpine` running `npm ci && npm run build && npm start`.

---

Built for Stanley Aketch · B.Sc. Biochemistry · Moi University · Kenya.
