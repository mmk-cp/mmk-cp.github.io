# Resume Changes — Engineering Portfolio Redesign (Final Polish)

## Summary

This is a final hardening pass that preserves the existing modern portfolio direction while making it production-ready for crawlers, no-JS users, and recruiters. The visual identity, English-first branding (`Backend Developer · DevOps · Agentic AI`), Jalali date system, and animated interactions were kept; the changes focus on crawler visibility, static pre-rendering, contact hierarchy, PDF refinement, and multilingual SEO correctness. No invented metrics or full redesign was performed.

## What changed in this pass

### Availability wording
- Replaced the inflexible `Engagement: Project-based` / `نوع همکاری: پروژه‌ای` with `Availability: Open to collaboration` / `وضعیت همکاری: آماده همکاری` in both languages. The source of truth moved from `uiStrings.workType` in `script.js` to `resumeData.profile.availability` in intent, and the hero's quick-facts now communicate openness to employment, remote work, and collaborations without discouraging any opportunity type.

### Contact hierarchy
- **Hero:** Primary CTA is now Email (light button) + GitHub (ghost button) — the two internationally recognized professional channels. Telegram moved to a compact secondary link row (`hero-link-secondary`) and Bale to a tertiary low-weight link (`hero-link-tertiary`). This keeps the hero clean, avoids five equal-weight buttons, and preserves Bale for the Persian audience without letting it compete with Email/GitHub in English.
- **Identity card:** Kept as a secondary contact surface (Email / Telegram / Bale) — no change to its presence, only the hero hierarchy was tightened.
- **Footer & PDF:** Both keep Email + GitHub + website as primary; Telegram/Bale remain secondary/tertiary. The PDF header was updated to `Email · github.com/mmk-cp · mmk-cp.ir · location` so GitHub is now prominent in the formal resume.

### Static rendering & crawler visibility (critical)
- **Problem:** All core resume sections were empty in the initial HTML (`<p id="aboutText"></p>`, `<div id="experienceTimeline"></div>`, etc.) and injected only by `script.js`. Crawlers, text extractors, and no-JS users saw only the shell.
- **Solution:** Added a build-time pre-renderer `scripts/build.js` that reads `resume-data.js` + `jalali.js` and injects real HTML into the template. The build writes:
  - `index.html` — English pre-rendered (default `/`, canonical `https://mmk-cp.ir/`)
  - `en/index.html` — English copy (canonical `https://mmk-cp.ir/en/`, assets via `../`)
  - `fa/index.html` — Persian pre-rendered (canonical `https://mmk-cp.ir/fa/`, Jalali dates)
  - `index.template.html` — clean English template (empty containers) preserved for future builds
- After the build, `index.html`, `en/index.html`, and `fa/index.html` each contain the full resume (name, summary, all experience with dates, all featured projects with descriptions and years, skills including every `Asterisk`/`Issabel`/`SIP` token, education, certificates, languages) as selectable HTML — no duplication of data, no keyword stuffing, just the same content that the hydrated UI shows.
- **No-JS fallback:** A `<noscript>` block now explains the static view and links to the other language, plus `reveal` is forced visible via `<noscript><style>.reveal{opacity:1!important}`. The page remains fully readable with JS disabled; only animations, language switching animation, and the PDF button require JS.
- **Hydration:** `script.js` still hydrates on top of the pre-rendered content. On `setLanguage` it re-renders the sections from the same `resumeData`, so switching languages works and refreshing preserves the selected language via `history.replaceState` + `localStorage`.

### Dates
- No change to the date logic itself — `jalali.js` continues to provide `formatRange` / `formatProjectYear`. The build now uses it at pre-render time, so the Persian static HTML already contains `تیر ۱۴۰۴ تا اکنون` / `۱۴۰۵` for the 2026 agent, while English contains `Jul 2025 — Present` / `2026`. The PDF uses the same path at print time.

### SEO & multilingual
- **Canonical/hreflang:** Root canonical is `https://mmk-cp.ir/` (English), `en/` and `fa/` have their own canonicals. All three advertise `hreflang en/fa/x-default` pointing to the real directory URLs (`/en/`, `/fa/`), and `x-default` points to the English default `/`.
- **Sitemap:** Added `sitemap.xml` listing `/`, `/en/`, `/fa/` with `xhtml:link` alternates.
- **Structured data:** Expanded `Person` to a `@graph` with `Person` (now including `image` and extended `knowsAbout` with `Asterisk`/`SIP`/`Tool Calling`), `WebSite` (`inLanguage ["en","fa"]`), and `ProfilePage` (`inLanguage` per build). The build patches `jobTitle` and `inLanguage` per language.
- **Title/metadata audit:** Confirmed no stale `Backend · DevOps · WordPress` pillar remains in hero/meta; all `WordPress` mentions are now only in legitimate work history or skills. Meta descriptions are per-language originals, not machine translations.
- **`og:image`:** Kept `assets/img/profile.png`; title now correctly reflects `Backend Developer · DevOps · Agentic AI`.

### VoIP / Agentic AI crawler visibility
- Both `Asterisk` / `Issabel` / `SIP` (in the `DevOps & Infrastructure` skill list) and the Agentic AI vocabulary (`LangGraph`, `LLM`, `Tool Calling`, `Human-in-the-loop`, `Stateful Workflow`) are now in the pre-rendered static HTML for both languages, not only in JS-injected detail panels. `knowsAbout` also contains `Asterisk`/`SIP`.

### PDF
- Header contact order changed to Email → GitHub → website → location per the requested hierarchy.
- Dates remain language-correct (Gregorian EN / Jalali FA) via the shared `formatRange` path, including `2026` / `۱۴۰۵` for the blog-content agent.
- No web-only UI (orbs, grid, drawer, language switcher, animations) leaks into `@media print`; `break-inside: avoid` and A4 margins are preserved, text stays selectable, and links remain clickable.

## Positioning & content (unchanged)
- Primary identity stays `Backend Developer · DevOps · Agentic AI` / `توسعه‌دهنده بک‌اند · DevOps · Agentic AI`; `مهندس بک‌اند` is not used as a personal title. WordPress/WooCommerce remain secondary. `AI Agent for Blog Content Production` remains `year: 2026` (EN `2026`, FA `۱۴۰۵`) everywhere.

## How to maintain

- **Edit content:** Change only `resume-data.js` (or its `{fa,en}` leaves). Jalali conversion is automatic.
- **Pre-render after edits:** Run `node scripts/build.js` — it reads `index.template.html` + data and regenerates `index.html`, `en/index.html`, `fa/index.html` with correct hreflang/canonical/asset paths. Do not hand-edit the built `index.html` content blocks; edit the template or the data.
- **Add an experience/project:** Push into `resumeData.experience.*` or `featuredProjects` using `startDate`/`endDate` (ISO `YYYY-MM`, `null` for ongoing) and integer `year`; year display uses `formatProjectYear`.
- **Translate:** Add both `fa` and `en` leaves side-by-side in the same object.
- **PDF vs. web:** Edit `renderPrint` in `script.js` to change formal resume ordering/presentation without touching the interactive portfolio.

## Files

- `scripts/build.js` — new (build-time pre-renderer for EN/FA static HTML)
- `index.template.html` — new (clean English template with empty containers, kept for builds)
- `index.html` — now pre-rendered English (crawler-visible), previously a JS shell
- `en/index.html` — new (English canonical copy)
- `fa/index.html` — new (Persian pre-rendered, Jalali dates)
- `sitemap.xml` — new
- `resume-data.js` — `profile.availability` wording updated (`Open to collaboration` / `آماده همکاری`)
- `script.js` — `uiStrings` availability labels + PDF header GitHub prioritization + existing hydration intact
- `index.template.html` — JSON-LD expanded to `@graph` (Person + WebSite + ProfilePage)
- `styles.css` — hero secondary/tertiary link styles + `[hidden]` fix + drawer backdrop (from prior polish, preserved)
- `404.html` — English-first bilingual copy (preserved)
- `RESUME_TODO.md` — confirmed section kept
- `RESUME_CHANGES.md` — this file
- `README.md` — year table already updated to 2026

## Build & validation

- `node scripts/build.js` — regenerates all three HTML outputs and validates `2026`, `Asterisk`, Jalali/Gregorian dates in the static files.
- Manual checks recommended: open `/` in English, `/#fa` or `/fa/` in Persian, disable JS and confirm all sections remain readable, print preview in both languages, and responsive at mobile widths.
