# Resume TODO — Missing factual details that would let the portfolio get stronger without invention

These are facts worth filling in when convenient. Nothing here is shown on the site; leaving them blank is always better than guessing.

## Confirmed since last update

The following items are now treated as confirmed facts and no longer unknown:

- Default website language is English (`https://mmk-cp.ir` → English). Persian is fully supported via the language switcher / `/#fa`.
- Persian dates use the Jalali calendar; English dates use Gregorian. Both are rendered from the same ISO source via `jalali.js`.
- **AI Agent for Blog Content Production** is a **2026** project (year `2026` in `resume-data.js`, `۱۴۰۵` in the Persian view).
- Hands-on VoIP experience with **Asterisk** and **Issabel** and work with **SIP / online SIP providers** is confirmed and rendered modestly as part of the *DevOps & Infrastructure* skill group — not as a separate telecom specialization.

The remaining open items below are unchanged — they record genuinely missing details, not contradictions.

## Bijak (2025-07 — Present)

- Approximate request volume for the main backend API(s) (e.g., requests per day or peak RPS)?
- Number of production services you directly maintain?
- Any measurable improvement you can cite (deployment time, release cadence, latency, uptime)? If none is solid, leave it out.
- Approximate database scale for the largest related dataset?
- Team size you work with day-to-day?

## Correspondence Workflow & Phonebook (Dec 2023 — Jun 2025)

- Can the "≥ 5M records" and "≈ 10M records" figures be tied to a specific measured dataset or load test? If not, should the wording be softened to "designed for high-volume datasets"?
- Any other systems or integrations built in this period that are not yet listed?

## Infrastructure / DevOps

- Which reverse proxy / edge layer is actually used in your environments (Nginx, Traefik, HAProxy)? Confirm to keep the skills list honest.
- Confirm GitLab CI/CD usage (or other CI).
- KVM / libvirt — is this hands-on administration experience or familiarity through study/lab? Adjust wording accordingly.
- Docker Compose — confirm hands-on use at Bijak or formalize as general familiarity.
- Any production incident or migration worth a 2-line bullet (without sensitive details)?

## VoIP (remaining unknowns)

- Approximate number of extensions or deployment scale (if shareable).
- Exact SIP provider names that are okay to mention.
- Scope detail that can be shared safely (lab vs. production).

## Agentic AI

- Rough workflow counts or tool counts for the two agent projects (e.g., "validates ~6 checks then calls 2 external tools") if that framing helps a reader visualize the system.
- Any measurable outcome (e.g., manual steps eliminated per order, time saved per workflow)?

## WooCommerce / WordPress integrations

- Approximate number of stores or order volume touched by the Bijak/WooCommerce work, if known.
- Any specific integrations (payment, shipping, SEO/Yoast) that are part of the real systems?

## Contact & Online presence

- LinkedIn profile URL (if you have one and want it in the PDF footer).
- Phone number — include in the PDF header only if you want it public.
- Any other professional profile worth linking (e.g., Stack Overflow, Dev.to)?

## SEO / Domain

- Whether to add `sitemap.xml` with explicit `/#en` and `/#fa` alternates (optional for a hash-routed single-page site; currently `robots.txt` allows all and no sitemap is needed for GitHub Pages default discovery).
