# Rejie Rufin — Portfolio

A premium, responsive personal portfolio for a freight forwarding operations specialist who designs
practical digital solutions with Microsoft Power Apps and AI-assisted no-code tooling.

Built with Vite, React, and TypeScript. No runtime UI dependencies.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
```

## What to edit

All content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts). Placeholders are written inside
square brackets so they are easy to find.

| What | Where |
| --- | --- |
| Name, taglines, hero copy | `profile` |
| Email, LinkedIn, GitHub, location, resume path | `profile` (bottom of the object) |
| About paragraphs and quote | `aboutParagraphs`, `aboutQuote` |
| Freight forwarding capabilities | `expertiseCapabilities` |
| Operational data & controls + data flow | `controlCapabilities`, `dataFlow` |
| Process improvement | `processCapabilities`, `processStatement` |
| Digital skills | `skillGroups` |
| Featured solutions and full case studies | `projects` |
| Method steps | `buildSteps` |
| Experience (employer / dates / location placeholders) | `experience` |
| Value equation | `valueEquation` |
| Innovation Lab concepts | `labProjects` |
| Contact copy | `contact` |

No employer, date, certification, promotion, metric, or client result is invented anywhere in the data
file. The Experience section shows `[Add company name]`, `[Add employment dates]`, and `[Add location]`
as visible placeholders until real details are supplied. Potential business value is described
qualitatively only.

## Replace the portrait

Drop a professional photograph at:

```
public/portrait.jpg
```

Recommended: portrait orientation, roughly 4:5, at least 1200 × 1500 px, subject centred near the top.
Until that file exists, the hero shows a monogram placeholder with a container-terminal line motif.
The image is cropped with `object-fit: cover` and is never retouched or altered by the site.

## Replace the resume

The download buttons point to `profile.resumeUrl`, which defaults to `/RUFIN_REJIE_RESUME.pdf`
(`public/RUFIN_REJIE_RESUME.pdf`). Replace that file to update the download.

That PDF is encrypted with the password `hiremenow2026`, which is shown next to the download button in
the Contact section. The value lives in `profile.resumePassword`; set it to an empty string to hide the
note, and save an unencrypted PDF if you would rather not require a password.

## Contact details

Email, LinkedIn, GitHub, and location are set in `profile` at the top of `src/data/portfolio.ts`,
along with the labels displayed for the LinkedIn and GitHub links.

## Deployment

`npm run build` produces a static site in `dist/`. Any static host works. For Freebuff Sites, the
prebuilt Worker in [`worker/worker.js`](worker/worker.js) plus [`deploy.json`](deploy.json) serve the
build with a single-page fallback.

## Structure

```
src/
  App.tsx                 page composition, case-study routing, scroll state
  data/portfolio.ts       all editable content
  components/             one component per section, plus case study modal and mockups
  lib/hooks.ts            scroll reveal, nav highlight, progress bar
  styles/
    base.css              tokens, layout, nav, hero, footer, buttons
    sections.css          all page sections
    case-study.css        concept mockups, workflow rail, case study modal
public/
  portrait.jpg            add your photo here
  RUFIN_REJIE_RESUME.pdf  resume download
```

## Accessibility & performance notes

- Sections reveal on scroll; all motion is disabled under `prefers-reduced-motion`.
- Case studies open in an accessible dialog with Escape to close and a keyboard-navigable contents list.
- Mobile navigation is a full-width panel with a labelled toggle.
- No web fonts are bundled; Sora and Inter load from Google Fonts with system fallbacks.
