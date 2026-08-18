# Resume Changes — Engineering Portfolio Redesign

## Summary

This release turns the site into a modern developer portfolio (English default) with a formal, separate PDF resume. The previous iteration already introduced a shared bilingual data model and dynamic print rendering; this iteration keeps that architecture and builds on it with: English-by-default routing, Jalali calendar dates for the Persian view/PDF, a fully redesigned web UI with tasteful motion, `Backend Developer` positioning (without `مهندس بک‌اند`), and the corrected year **2026** for the blog content agent.

## Positioning & Content

- Default identity is now **Backend Developer · DevOps · Agentic AI** (EN) / **توسعه‌دهنده بک‌اند · DevOps · Agentic AI** (FA). The word `مهندس` is no longer used as a personal job title in Persian; existing institutional titles in job history were preserved as factual where present, but branding copy was revised.
- Hero redesigned as the primary brand statement: large name with gradient accent, role line, a pill-style tech-line badge row (`Python · FastAPI · Django · Docker · Linux · LLM Systems`), a concise high-signal summary, contact actions, and a floating identity card. The data source is `resume-data.js` → `profile.heroSummary` / `profile.techLine`.
- About/summary and experience bullets remain evidence-based (Context → Work → framing) without invented metrics.
- **Year correction:** `AI Agent for Blog Content Production` is now `year: 2026` in `resume-data.js` and renders as `2026` (EN) / `۱۴۰۵` (FA, via `jalali.js` mid-year mapping) in all web, print, and metadata contexts. The adjacent address-validation agent remains `2025`.
- VoIP experience (`Asterisk`, `Issabel`, `SIP`) stays modestly in the *DevOps & Infrastructure* skill group only — no dedicated telecom section.

## Data Architecture

- `resume-data.js` is the single source. Dates moved from display strings (`date: { fa, en }`) to ISO ranges: `startDate: "2025-07"`, `endDate: null | "YYYY-MM"`, and `year: 2026` for year-only projects. Education similarly now uses `startDate`/`endDate`.
- New file `jalali.js` provides `gregorianToJalali`, `formatRange(lang, start, end)`, and `formatProjectYear(lang, year)`. Persian ranges like `تیر ۱۴۰۴ تا اکنون` and English ranges like `Jul 2025 — Present` are derived from the same ISO values.
- `script.js` consumes these helpers (`formatDateLabel`, `projectYearLabel`) in `renderExperience`, `renderEducation`, `renderProjects`, and `renderPrint`, so no date string is duplicated between display, data, and PDF.

## Routing & Default Language

- `https://mmk-cp.ir/` opens in **English** (`html lang="en" dir="ltr"` in the document default, `og:locale en_US` as primary, `x-default` → `/`).
- `https://mmk-cp.ir/#fa` opens the Persian view; `https://mmk-cp.ir/#en` opens English. Switching updates `history.replaceState` and `localStorage` (`resume-language`), and `hashchange` supports back/forward.
- `resolveInitialLanguage()` now defaults to `'en'` (hash → storage → English), per spec.

## Web UI Redesign

- Color system unchanged (deep teal / coral), but hero now has a mesh: subtle grid (`hero-grid`), three blurred gradient orbs with `driftA/B` keyframes, and a card glow (`identity-card-glow`, `brand-mark-glow`).
- Topbar: glass + backdrop blur; active desktop-nav link gets an animated coral underline and `is-active` class via scroll-spy (`IntersectionObserver` on sections, refreshed on language change).
- Reveal: every `.reveal` section fades/slides in via `IntersectionObserver`; hero is visible immediately; strength cards stagger (`cardIn`). All disabled under `prefers-reduced-motion`.
- Timeline: styled line + cardized entries (`timeline-body` with hover border + shadow). Previous `timeline-marker` pulse kept; animated progress fill scaffold present.
- Project cards: top accent line, border and shadow lift on hover, a pill flow diagram (`agent-flow`) with sequential `nudge` arrow animations (mirrored for RTL), and case studies via native `<details>` with hover feedback.
- Skills: pill layout with hover lift; VoIP and OCR groups include their items inline with no inflated visual weight.
- Repo/earlier/education/certificate cards gain subtle hover states.
- Mobile: a hamburger toggle (`nav-toggle`) and a slide-down `mobile-drawer` complement the always-visible `mobile-nav` scroller. `JetBrains Mono` added to the font stack for code-like labels.
- No heavy animation library, no particle system, no continuous parallax — motion is limited to fades, micro-lifts, and the two hero-orbs at low opacity.

## PDF / Print

- PDF shares data, not presentation. The web may be colorful and interactive; the print path is plain: no orbs, no grids, no drawer, no language switcher, no case-study expansion chrome — just content.
- `renderPrint(lang)` emits a clean A4 document: header, about, categorized skills, experience, featured + secondary projects (with `-->`-joined flow lines as text), open-source list, and the education/certificates/languages strip. Dates inside the PDF are language-correct (Gregorian EN / Jalali FA) because the same `formatRange` path is reused.
- Print CSS (`@page A4`, `break-inside: avoid`, suppressed nav/drawer/animations) was reviewed and kept.

## SEO & i18n

- Canonical stays `https://mmk-cp.ir/`; `hreflang en/fa/x-default` (with `#en`/`#fa` fragments noted) remain. Meta description, `og:*`, `twitter:*`, and JSON-LD `Person.jobTitle` are synchronized with the new positioning and language default, with English as the `x-default` entry point.
- Mixed-direction text: tech names, URLs, flow steps, and `dir="ltr"` fragments stay legible inside Persian `dir="rtl"`.

## How to maintain

- **Add an experience entry:** push into `resumeData.experience.primary` or `.earlier` in `resume-data.js` using `startDate`/`endDate` (ISO `YYYY-MM`, `null` for ongoing) and `{ fa, en }` leaves; Jalali rendering is automatic.
- **Add a project:** push into `featuredProjects` with `year` (integer), `kind`, `title/summary/points/tags`, optional `flow` (string array) and `caseStudy`. Single-year display uses `formatProjectYear`.
- **Update dates:** edit only the ISO value in `resume-data.js`; both web and both PDFs update together.
- **Translate a new field:** add both `fa` and `en` leaves side-by-side in the same object.
- **PDF vs. web:** edit `renderPrint` in `script.js` to change the formal resume ordering/presentation without touching the interactive portfolio.

## Files

- `jalali.js` — new (Gregorian ↔ Jalali conversion and localized date formatting)
- `resume-data.js` — updated (ISO dates, year 2026, Developer titles)
- `index.html` — redesigned (English default, new hero with orbs/grid, nav toggle + drawer, mono font, SEO alignment)
- `styles.css` — redesigned (hero orbs/grid, reveal, nav active state, card lift, flow nudge, drawer, responsive updates)
- `script.js` — updated (English default, Jalali wiring, scroll-spy, reveal observer, mobile drawer)
- `404.html` — updated (English-first bilingual copy, Developer branding)
- `manifest.webmanifest` — theme aligned
- `RESUME_TODO.md` — resolved items moved to a Confirmed section
- `RESUME_CHANGES.md` — this file
- `README.md` — year table updated
