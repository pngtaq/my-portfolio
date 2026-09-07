# Portfolio — John Raison Salvador

Personal portfolio site. React 19 + Vite 7 + Tailwind CSS 4, deployed as a static SPA.

## Getting started

```bash
npm install
npm run dev
```

| Script            | What it does                        |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Vite dev server with HMR            |
| `npm run build`   | Production build into `dist/`       |
| `npm run preview` | Serve the production build locally  |
| `npm run lint`    | ESLint over the whole project       |

## Project structure

```
src/
  components/        Section components (About, WorkExperience, Projects, …)
    ui/              Small reusable pieces (Card, SectionHeader, tags)
    svg/             Inline icons
  context/           ThemeProvider + theme context
  data/              All site content lives here — edit these, not the JSX
  hooks/             useTheme
  pages/             Routed pages (/projects, /certificates, /techstack, 404)
public/
  images/            Optimised portraits (me-light.jpg, me-dark.jpg)
  certificates/      Certificate scans
  resume.pdf         Source of truth for the site's content
```

## Editing content

Everything a visitor reads comes from `src/data/`:

- `profile.js` — name, role, location, email, social links, availability
- `work.js` — professional experience
- `experience.js` — courses and degree timeline
- `projects.js` — shipped projects
- `certificates.js` — certifications
- `techStack.js` — skills (full list plus the home-page highlights)
- `recommendations.js` — **empty by design**; add real quotes and the
  Recommendations card appears automatically

Keep these in sync with `public/resume.pdf`.

## Theming

Theme state lives in a single `ThemeProvider` (`src/context/`). A small inline
script in `index.html` applies the saved theme before first paint so dark-mode
visitors never see a white flash — keep the two in sync if you change the
storage key.

The portrait flip between light and dark photos is pure CSS (`.flip-*` in
`src/index.css`), keyed off the `dark` class on `<html>`.

## Images

The portraits are pre-cropped, EXIF-rotated and resized to 800×800 (~50 KB
each). Full-resolution originals are kept in `.originals/`, which is
gitignored — never put multi-megabyte source photos in `public/`.

## Deployment

Static build served by a Cloudflare **Worker** (Workers Static Assets), on
`raisonsalvador.dev`. Configuration lives in `wrangler.jsonc`; there is no
`main`, so no Worker script runs per request — Cloudflare serves `dist/`
directly.

| Setting                | Value           |
| ---------------------- | --------------- |
| Build command          | `npm run build` |
| Deploy command         | `npx wrangler deploy` |
| `NODE_VERSION`         | `22`            |

Vite 7 requires Node `^20.19.0 || >=22.12.0`, so the Node version has to be set
explicitly — Cloudflare's default build image is older and the build fails
without it.

Client-side routing comes from `assets.not_found_handling` in `wrangler.jsonc`,
set to `single-page-application`: any path with no matching file in `dist/` is
served `index.html` with a 200, so `/projects` survives a direct visit or a
refresh.

Do **not** reintroduce `public/_redirects` with the usual `/*  /index.html  200`
SPA rule. Workers Static Assets rejects it at deploy time as an infinite loop —
it normalises `/index.html` back to `/`, which re-matches `/*` and triggers the
same rule again. That rule is a Pages/Netlify idiom; the Worker equivalent is
the `not_found_handling` setting above.

Social preview images in `index.html` are absolute URLs on the apex domain.
Scrapers fetch them with no page context, so a root-relative path resolves
against their own host and the preview comes back blank.
