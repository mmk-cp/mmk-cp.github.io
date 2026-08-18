# Resume Changes — Engineering Portfolio Redesign

## Summary

Final refinement pass preserving the existing modern portfolio (English-default, Jalali dates, developer-oriented motion) while completing content hierarchy, Persian localization, and PDF formalization. Previous iteration introduced static pre-rendering, English-default routing, `Developer` positioning, and the corrected **2026** blog-agent year — all kept intact.

## Positioning & Content

### Global vs. Bijak title
- **Global portfolio brand:** `Backend Developer · DevOps · Agentic AI` / `توسعه‌دهنده بک‌اند · DevOps · Agentic AI` — used in Hero, metadata, OG, `@graph` `Person.jobTitle`, `RESUME_TODO`, and report.
- **Bijak experience title:** `Backend Developer · DevOps` / `توسعه‌دهنده بک‌اند · DevOps` — distinct from the global Agentic AI brand, per the job scope that covers both Backend and DevOps. The `Agentic AI` work is described in Bijak's bullets/content, not duplicated in the formal title.

### Bijak bullets & Agentic AI visibility
- Bijak now has **four** bullets (vs. prior three that left Agentic AI only in the summary):
  1. Backend services/APIs with Python/FastAPI/Django in production.
  2. **DevOps is stated as active responsibility** — *"Handling DevOps responsibilities across Docker, Linux, and Git, including containerized runtime environments, deployment-related configuration, and service operation and troubleshooting"* (no longer "supporting project DevOps needs").
  3. **Agentic AI as a visible bullet** — *"Contributing to Agentic AI systems and LLM-based workflows, including model orchestration, tool calling, external API integration, and human-controlled workflow stages."*
  4. Website/WooCommerce plugins with integrations.
- Tech tags unchanged; DevOps is now first-class in the title and the bullets without claiming full infrastructure ownership.

### Summaries (30–40% shorter)
- `resume-data.js` `about.text` trimmed from 3 sentences + generic closing to **2 high-signal Persian sentences / 2 English sentences**. Removed `I focus on precise problem solving, maintainable architecture, and clear documentation.` Technology breadth remains in Skills; summaries now state backend focus, Python/PHP + frameworks, Agentic AI with tool calling, and Docker/Linux/WooCommerce as complementary — no filler.

### Experience cleanup
- `Dec 2023 — Jun 2025` ("Built data-driven systems… Big Data") — removed third bullet `Big Data-adjacent scenarios` and `Big Data` tag. `Big Data` was vague / badge-like; high-volume data is now conveyed as *for high-volume data* / *for high-volume data* without inflating to platform claims. Record-count scale remains only in Featured Projects where measured (`5M` / `10M`) and not inflated.
- `Apr 2023 — Dec 2023` (Pol Darmanegaran) — fixed summary-vs-bullet duplication: summary is now *Contributed to Laravel-based web services and product features.* (vs. bullets that then detail Laravel/PHP/JS/MySQL and Bootstrap/PWA). No repeated sentence with different verbs.
- Organization for `Dec 2023 — Jun 2025` remains `company: null` — no company badge is shown; a `RESUME_TODO` entry requests safe organization/context rather than inventing one. `Nov 2021 — Sep 2022` keeps its `DataVision` company.

## Dates & Project year

- ISO sources in `resume-data.js` unchanged: `startDate`/`endDate` (`YYYY-MM`, `null` for present), `year: 2026` for the blog agent. Display is still derived via `jalali.js` `formatRange` / `formatProjectYear`.
- Certificate issue dates changed from manual `2019/10/28` display to ISO `2019-10-28` and rendered via `formatDateFa`/`formatDateEn`: EN shows *Oct 2019* / *Sep 2019* (month-year), FA shows *آبان ۱۳۹۸* / *مهر ۱۳۹۸* — fully Jalali in Persian, Gregorian in English. Build cert patch now uses `formatDateFa`/`formatDateEn` directly.

## Persian localization

- **Headings:** Build `scripts/build.js` now patches all `data-i18n` section headings at generation time so static Persian HTML is fully localized (previously only quick-facts were patched): `About me→درباره من`, `Work experience→سوابق کاری`, `Selected projects→پروژه‌های منتخب`, `Technical capabilities→توانمندی‌های فنی`, `Education→تحصیلات`, `Training certificates→گواهی‌ها و دوره‌ها`, `Language→زبان‌ها`, `Language` in side heading, `Open-source→پروژه‌های متن‌باز`, etc. Also `Agentic AI, applied projects & open source → Agentic AI، پروژه‌های کاربردی و متن‌باز` and `Engineering case study→بررسی فنی` etc. via labels.
- **Kickers/decisions:** `Stack` → `فناوری‌ها` in Persian. `earlier-heading` and nav labels (`About/Experience/Projects/Skills/Contact`) also localized in static Persian.
- **Quick-facts/profile:** `Location→موقعیت`, `Primary focus→تمرکز اصلی`, `Contact details→اطلاعات تماس`, `Skip to main content→پرش به محتوای اصلی`, availability badge `Available→در دسترس`, `Engagement: Project-based → وضوع همکاری: آماده همکاری` already present — now also extended for `location`/`focus` values.
- **Dialog:** `Certificate → گواهی` for `#certificateDialogTitle` in Persian static build.
- `index.template.html` remains English; hydration via `script.js` `uiStrings` stays authoritative at runtime — build simply pre-renders the same Persian strings for crawlers.

## Print / PDF

- **PDF section headings** now use dedicated `print*` keys: `Professional Summary` / `چکیده حرفه‌ای`, `Certifications & Training` / `گواهی‌ها و دوره‌ها`, `Languages` / `زبان‌ها` — so the PDF says *Languages* (plural) and *Certifications & Training* while the web sidebar stays *Training certificates* / *Language* as requested.
- **Open Source — web vs. PDF split:** Website still shows the full 7-repo grid (no reduction). PDF now shows a curated **5-repo** slice (`openSource.slice(0,5)`) and, when more exist, appends `+ 2 more → github.com/mmk-cp` (EN) / `+ 2 مورد بیشتر` (FA) — no full GitHub index in the formal resume.
- **Long repo name:** `PersianScannedDocOrientationCorrection` maps to display `Persian Scanned Doc Orientation` in the PDF (URL unchanged) and the repo list column widened from `40mm` to `44mm` so monospace wrapping is clean — no mid-word ugliness in the middle of a single long token.
- **Typography & density:** A4 margins tightened to `9mm`, body from `10pt/1.65` to `9.2pt/1.55`, header from `23pt/6mm` to `20pt/4mm`, `.print-photo` `28mm→24mm`, `.print-section` `break-inside: avoid` removed (now flows) while keeping `break-inside: avoid` on individual `.print-item`/`.print-repo-list li`. Added `.print-about p` compact, `.print-more`, and smaller `.print-repo-list` sizing (`7.4pt`) so a balanced **2-page** English PDF is achievable without shrinking below professional readability.
- **Photo:** Kept in the header in both languages; alt text localized. No ATS-only pass removed it.
- **Links & text extraction:** Real text, selectable, link-enabled; DOM order is simple (header→summary→skills→experience→projects→education/certs/languages). The retuned spacing keeps reading order sensible across columns.

## SEO & static rendering

- Pre-renderer `scripts/build.js` unchanged in architecture: reads `resume-data.js` + `jalali.js`, injects into `index.template.html`, writes `index.html` (default EN `/`), `en/index.html` (`/en/`), `fa/index.html` (`/fa/`), fixing asset paths (`../`) for subdirectories, setting per-language canonical + `hreflang en/fa/x-default` (`x-default→/`), and validating `2026/۱۴۰۵`, `Jul 2025/تیر ۱۴۰۴`, and `Asterisk`. No client-only regression.
- Structured data `@graph` (`Person`+`WebSite`+`ProfilePage`) retained; brand mismatch (`Backend·DevOps·WordPress`) verified absent — WordPress now only in legitimate experience/skills.
- `sitemap.xml` unchanged (lists `/` `/en/` `/fa/` with `xhtml:link` alternates). `robots.txt` stays `Allow: /`. `og:image` keeps `profile.png`.

## Maintenance

- Edit `resume-data.js` `{fa,en}` leaves; dates as ISO; run `node scripts/build.js` to regenerate all three HTMLs. For the `Dec 2023 — Jun 2025` company, set `resume-data.js` `experience.primary[1].company` when a safe organization string exists.
- PDF curation is presentation-only (`selectedRepos`/`pdfLimit`) — same canonical data, different density, no duplicated `resume-*.js` files.

## Files

- `resume-data.js` — shortened `about.text` (~35% reduction), Bijak title + 4-bullet Agentic AI, removed `Big Data` tag, fixed Pol summary, cert `issued` → `YYYY-MM-DD`.
- `script.js` — `uiStrings` `printAboutTitle`/`printCertificatesTitle`/`printLanguageTitle`, cert Jalali via `formatDateLabel`, PDF 5-repo cap, `stackLabel→فناوری‌ها` in fa, skill `·` separator, dialog/script housekeeping.
- `scripts/build.js` — Persian cert Jalali, `فناوری‌ها` stack, localized section/dialog/extra-label patch for full Persian static.
- `styles.css` — tighter A4 print metrics, `print-about`/`print-more`, wider repo column, section flow fix for 2-page balance.
- `index.template.html` — unchanged (EN source of truth for builds).
- `RESUME_TODO.md` — new `Dec 2023 — Jun 2025` missing-org section + `Confirmed` header; remaining unknowns preserved without invention.
- `RESUME_CHANGES.md` — this file.
