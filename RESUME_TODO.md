# Resume TODO — Missing factual details

These are facts worth filling in when convenient. Nothing here is shown on the site; leaving them blank is always better than guessing.

## Confirmed (no longer TODO)
- Default language is English (`/` → English, `/fa/` → Persian, `/en/` also English).
- Persian dates use Jalali calendar via `jalali.js` (including certificate issue dates).
- `AI Agent for Blog Content Production` is a **2026** project (EN `2026` / FA `۱۴۰۵`). Address-validation agent remains `2025` / `۱۴۰۴`.
- VoIP: hands-on experience exists for **Asterisk**, **Issabel**, **SIP**, online SIP providers — shown modestly under *DevOps & Infrastructure*; not a primary specialization.
- Bijak role title is **Backend Developer · DevOps** (FA `توسعه‌دهنده بک‌اند · DevOps`); global brand is **Backend Developer · DevOps · Agentic AI**.

## Dec 2023 — Jun 2025 — Missing organization context
- The `Web Application Developer` period `Dec 2023 — Jun 2025` (dataId `data-driven`) currently has `company: null` — no organization/company displayed. If there is a formal organization, employer, client, or engagement type safe to mention, add it to `resume-data.js` (`company` / `companyUrl`). Otherwise intentionally leave it blank — do not invent `Freelance` unless confirmed.

## Bijak (2025-07 — Present)
- Approximate request volume or peak RPS for the main backend API(s)?
- Number of production services you directly maintain?
- Any measurable improvement you can cite without disclosing sensitive internals?
- Database scale for the largest dataset you work with day-to-day?
- Team size you work with day-to-day?

## Correspondence & Phonebook (Dec 2023 — Jun 2025)
- Confirm that the "≥ 5M records" and "≈ 10M records" figures are measured/tested scales (they are currently worded as *evaluated in practical testing for at least…* and *suited to scenarios of around…*).
- Any other systems or integrations built in this period not yet listed?

## Infrastructure / DevOps
- Which reverse proxy / edge layer is actually used in your environments (Nginx, Traefik)?
- Confirm GitLab CI/CD usage (or other CI).
- KVM / libvirt — hands-on administration or familiarity through study/lab? Adjust wording if needed.
- Docker Compose — confirm hands-on use at Bijak or formalize as general familiarity.

## VoIP (remaining unknowns)
- Approximate number of extensions, if safe to mention.
- Any SIP provider names that are okay to mention publicly.

## Agentic AI
- Rough workflow counts or tool counts that help a reader visualize complexity (e.g., "~6 validation checks then 2 external tools").
- Any measurable outcome (manual steps eliminated per order, time saved per workflow)?

## WooCommerce / WordPress integrations
- Approximate number of stores or order volume touched by the Bijak/WooCommerce work, if known.
- Specific integrations worth naming (payment, shipping, SEO/Yoast) that are part of the real systems.

## Contact & Online presence
- LinkedIn profile URL (if you want it in the PDF header).
- Phone — include in PDF header only if you want it public.

## SEO / Deployment
- No further action required. `sitemap.xml` with `/`, `/en/`, `/fa/` + hreflang is present. If you later add a new language route, add it to the sitemap and to `scripts/build.js`.
