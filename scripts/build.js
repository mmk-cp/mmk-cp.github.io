#!/usr/bin/env node
'use strict';
/**
 * Build-time pre-rendering for mmk-cp.github.io
 *
 * Reads resume-data.js + jalali.js + index.html template,
 * injects real resume HTML for crawlers / no-JS users.
 *
 * Outputs:
 *   index.html      — English (default, /)
 *   en/index.html   — English (canonical /en/)
 *   fa/index.html   — Persian (canonical /fa/)
 *
 * The generated files keep their interactive JS intact — content is
 * visible without JS and enhanced with JS (progressive enhancement).
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

// --- Load runtime data ---
function loadResumeData() {
  const code = fs.readFileSync(path.join(ROOT, 'resume-data.js'), 'utf8');
  // resume-data.js declares `const resumeData = {...}` in strict mode;
  // wrapping in a Function lets us return it.
  const fn = new Function(code + '\n return resumeData;');
  return fn();
}
function loadJalali() {
  const code = fs.readFileSync(path.join(ROOT, 'jalali.js'), 'utf8');
  const fn = new Function(code + '\n return { formatRange, formatRangeEn, formatRangeFa, formatProjectYear, gregorianToJalali, formatDateEn, formatDateFa };');
  return fn();
}

const resumeData = loadResumeData();
const jalaliCtx = loadJalali();

// uiStrings lives in script.js — replicate minimal subset for template fill,
// or load it similarly. For simplicity we inline the needed labels here.
const labels = {
  en: {
    location: 'Tehran, Iran', focus: 'Backend · DevOps · Agentic AI',
    availability: 'Open to collaboration', aboutTitle: 'About me',
    experienceTitle: 'Work experience', earlierTitle: 'Earlier Experience — Web & WordPress',
    projectsKicker: 'Agentic AI, applied projects & open source', projectsTitle: 'Selected projects',
    agenticLabel: 'Agentic AI project', productionLabel: 'Applied project',
    secondaryTitle: 'Other projects', openSourceTitle: 'Open-source projects', allGithub: 'All projects on GitHub',
    caseStudyLabel: 'Engineering case study', problem: 'Problem', approach: 'Architecture / Approach', decisions: 'Engineering decisions', stack: 'Stack',
    skillsTitle: 'Technical capabilities', educationTitle: 'Education', certTitle: 'Training certificates',
    mft: 'Tehran Institute of Technology', duration: 'Duration', issued: 'Issued', viewCert: 'View certificate',
    langTitle: 'Language', footerContact: 'Contact:', footerHint: 'open to collaboration',
  },
  fa: {
    location: 'تهران، ایران', focus: 'بک‌اند · DevOps · Agentic AI',
    availability: 'آماده همکاری', aboutTitle: 'درباره من',
    experienceTitle: 'سوابق شغلی', earlierTitle: 'سابقهٔ پیشین — وب و WordPress',
    projectsKicker: 'پروژه‌های Agentic AI، کاربردی و متن‌باز', projectsTitle: 'پروژه‌های منتخب',
    agenticLabel: 'پروژه Agentic AI', productionLabel: 'پروژه کاربردی',
    secondaryTitle: 'سایر پروژه‌ها', openSourceTitle: 'پروژه‌های متن‌باز', allGithub: 'همه پروژه‌ها در GitHub',
    caseStudyLabel: 'بررسی فنی', problem: 'مسئله', approach: 'رویکرد', decisions: 'تصمیم‌های مهندسی', stack: 'Stack',
    skillsTitle: 'توانمندی‌های فنی', educationTitle: 'تحصیلات', certTitle: 'گواهی دوره‌ها',
    mft: 'مجتمع فنی تهران', duration: 'مدت', issued: 'صدور', viewCert: 'مشاهده گواهی',
    langTitle: 'زبان', footerContact: 'تماس:', footerHint: 'آماده همکاری',
  }
};

function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function rd(lang, obj) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[lang] || obj.fa || obj.en || '';
}
function formatRange(lang, s, e) { return jalaliCtx.formatRange(lang, s, e); }
function projectYear(lang, y) { return jalaliCtx.formatProjectYear(lang, y); }

// --- Section renderers (mirror script.js but produce strings) ---
function renderHeroSummary(lang) { return esc(rd(lang, resumeData.profile.heroSummary)); }
function renderAbout(lang) {
  const text = esc(rd(lang, resumeData.about.text));
  const cards = resumeData.about.strengths.map(s =>
    `<article><span class="mini-icon" aria-hidden="true">${esc(s.icon)}</span><h3>${esc(rd(lang, s.title))}</h3><p>${esc(rd(lang, s.text))}</p></article>`
  ).join('');
  return { text, cards };
}
function renderExperience(lang) {
  const primary = resumeData.experience.primary.map(job => {
    const company = job.company ? (job.companyUrl
      ? `<p class="company"><a href="${esc(job.companyUrl)}" target="_blank" rel="noopener noreferrer">${esc(rd(lang, job.company))}</a></p>`
      : `<p class="company">${esc(rd(lang, job.company))}</p>`) : '';
    const bullets = job.bullets.map(b => `<li>${esc(rd(lang, b))}</li>`).join('');
    const tags = job.tags.map(t => `<span>${esc(t)}</span>`).join('');
    const date = esc(formatRange(lang, job.startDate, job.endDate));
    return `<article class="timeline-item"><div class="timeline-marker" aria-hidden="true"></div><div class="timeline-meta"><time datetime="${esc(job.startDate||'')}">${date}</time><span>${esc(rd(lang, job.location)||'')}</span></div><div class="timeline-body"><h3>${esc(rd(lang, job.title))}</h3>${company}<p>${esc(rd(lang, job.summary))}</p><ul class="achievement-list">${bullets}</ul><div class="tags">${tags}</div></div></article>`;
  }).join('');
  const earlierCards = resumeData.experience.earlier.map(job => {
    const date = esc(formatRange(lang, job.startDate, job.endDate));
    return `<article class="earlier-card"><div class="earlier-meta"><time datetime="${esc(job.startDate||'')}">${date}</time> · <span>${esc(rd(lang, job.company))}</span></div><h3>${esc(rd(lang, job.title))}</h3><p>${esc(rd(lang, job.description))}</p></article>`;
  }).join('');
  const earlier = `<h3 class="earlier-heading">${esc(labels[lang].earlierTitle)}</h3><div class="earlier-grid">${earlierCards}</div>`;
  return { primary, earlier };
}
function renderFlow(flow) {
  if (!flow || !flow.length) return '';
  const steps = flow.map(s => `<span class="flow-step">${esc(s)}</span>`).join('<span class="flow-arrow" aria-hidden="true">→</span>');
  return `<div class="agent-flow" dir="ltr" aria-label="Agent workflow">${steps}</div>`;
}
function renderProjects(lang) {
  const featured = resumeData.featuredProjects.map(p => {
    const kicker = esc(p.kind === 'agentic' ? labels[lang].agenticLabel : labels[lang].productionLabel);
    const year = esc(projectYear(lang, p.year));
    const points = p.points.map(pt => `<li>${esc(rd(lang, pt))}</li>`).join('');
    const tags = p.tags.map(t => `<span>${esc(t)}</span>`).join('');
    const flow = renderFlow(p.flow);
    const cs = p.caseStudy ? `<details class="case-study"><summary>${esc(labels[lang].caseStudyLabel)}</summary><div class="case-body"><div class="case-row"><strong>${esc(labels[lang].problem)}</strong><p>${esc(rd(lang, p.caseStudy.problem))}</p></div><div class="case-row"><strong>${esc(labels[lang].approach)}</strong><p>${esc(rd(lang, p.caseStudy.approach))}</p></div><div class="case-row"><strong>${esc(labels[lang].decisions)}</strong><p>${esc(rd(lang, p.caseStudy.decisions))}</p></div><div class="case-row"><strong>${esc(labels[lang].stack)}</strong><p dir="ltr">${esc(p.caseStudy.stack)}</p></div></div></details>` : '';
    return `<article class="project-card project-card-featured"><div class="project-topline"><span class="project-type">${kicker}</span><span class="project-year">${year}</span></div><h3>${esc(rd(lang, p.title))}</h3><p>${esc(rd(lang, p.summary))}</p>${flow}<ul class="project-points">${points}</ul>${cs}<div class="tags">${tags}</div></article>`;
  }).join('');
  const secondaryList = resumeData.secondaryProjects || [];
  const secondary = secondaryList.length ? `<h3 class="subsection-title secondary-title">${esc(labels[lang].secondaryTitle)}</h3><div class="secondary-grid">${secondaryList.map(p => {
    const tags = p.tags.map(t=>`<span>${esc(t)}</span>`).join('');
    return `<article class="project-card project-card-secondary"><h3>${esc(rd(lang, p.title))}</h3><p>${esc(rd(lang, p.summary))}</p><div class="tags">${tags}</div></article>`;
  }).join('')}</div>` : '';
  const repos = resumeData.openSource.map(r => `<a class="repo-card" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer"><span class="repo-icon" aria-hidden="true">GH</span><span class="repo-body"><strong dir="ltr">${esc(r.name)}</strong><p>${esc(rd(lang, r.description))}</p><span dir="ltr">${esc(r.tags)}</span></span></a>`).join('');
  return { featured, secondary, repos };
}
function renderSkills(lang) {
  const groups = resumeData.skills.map(g => {
    const items = g.items.map(it => `<span>${esc(it)}</span>`).join('');
    return `<div class="skill-group"><h3>${esc(rd(lang, g.title))}</h3><p class="skill-note">${esc(rd(lang, g.note))}</p><div class="skill-list">${items}</div></div>`;
  }).join('');
  const soft = `<div class="skill-group skill-group-soft"><h3>${lang==='fa'?'مهارت‌های نرم':'Soft skills'}</h3><p class="skill-note skill-note-soft">${esc(lang==='fa'?'حل مسئله · کار تیمی و مسئولیت‌پذیری · مدیریت بحران · برنامه‌ریزی · پذیرش بازخورد':'Problem solving · Teamwork · Crisis management · Planning · Receptive to feedback')}</p></div>`;
  return groups + soft;
}
function renderEducation(lang) {
  const edu = resumeData.education;
  const date = esc(formatRange(lang, edu.startDate, edu.endDate));
  return `<article class="education-item"><div><h3>${esc(rd(lang, edu.degree))}</h3><p>${esc(rd(lang, edu.university))}</p><time datetime="${esc(edu.startDate||'')}">${date}</time></div></article>`;
}
function renderCertificates(lang) {
  return resumeData.certificates.map(c => `<article class="certificate-card"><div><h3>${esc(c.name)}</h3><p>${esc(rd(lang, c.issuer))}</p><dl><div><dt>${esc(labels[lang].duration)}</dt><dd>${esc(rd(lang, c.duration))}</dd></div><div><dt>${esc(labels[lang].issued)}</dt><dd dir="ltr">${esc(c.issued)}</dd></div></dl></div><button class="text-button no-print" type="button" data-certificate="${esc(c.id)}">${esc(labels[lang].viewCert)}</button></article>`).join('');
}
function renderLanguages(lang) {
  return resumeData.languages.map(l => `<div class="language-item"><div><strong>${esc(rd(lang, l.name))}</strong><span>${esc(rd(lang, l.level))}</span></div></div>`).join('');
}

// --- Template patching ---
const TEMPLATE_PATH = fs.existsSync(path.join(ROOT, 'index.template.html'))
  ? path.join(ROOT, 'index.template.html')
  : path.join(ROOT, 'index.html');
let template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

function buildForLang(lang) {
  const isEn = lang === 'en';
  const about = renderAbout(lang);
  const exp = renderExperience(lang);
  const proj = renderProjects(lang);
  const skills = renderSkills(lang);
  const edu = renderEducation(lang);
  const certs = renderCertificates(lang);
  const langs = renderLanguages(lang);
  const heroSummary = renderHeroSummary(lang);
  const lbl = labels[lang];

  let html = template;

  // Lang/dir on <html>
  html = html.replace(/<html lang="[^"]*" dir="[^"]*">/, `<html lang="${lang}" dir="${lang==='fa'?'rtl':'ltr'}">`);

  // Canonical + hreflang per language
  const canonicalForLang = lang === 'en'
    ? 'https://mmk-cp.ir/'
    : 'https://mmk-cp.ir/fa/';
  // For en/index.html we want /en/ canonical, for fa /fa/, for root /.
  // The caller passes canonical explicitly; default here is for root (en).
  // We'll patch hreflang to always list all three as absolute paths.
  html = html.replace(
    /<link rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${canonicalForLang}">`
  );
  html = html.replace(
    /<link rel="alternate" hreflang="en"[^>]*>\s*<link rel="alternate" hreflang="fa"[^>]*>\s*<link rel="alternate" hreflang="x-default"[^>]*>/,
    `<link rel="alternate" hreflang="en" href="https://mmk-cp.ir/en/">\n  <link rel="alternate" hreflang="fa" href="https://mmk-cp.ir/fa/">\n  <link rel="alternate" hreflang="x-default" href="https://mmk-cp.ir/">`
  );

  // Title + meta description + og:locale
  const titleEn = 'Mohammad Mahdi Karimi — Backend Developer · DevOps · Agentic AI';
  const titleFa = 'محمد مهدی کریمی — توسعه‌دهنده بک‌اند · DevOps · Agentic AI';
  const descEn = 'Resume of Mohammad Mahdi Karimi — Backend Developer, DevOps and Agentic AI. Python, FastAPI, Docker, Linux and LLM-powered systems.';
  const descFa = 'رزومه محمد مهدی کریمی — توسعه‌دهنده بک‌اند، DevOps و Agentic AI. تجربه در Python، FastAPI، Docker، Linux و سامانه‌های مبتنی بر LLM.';
  const title = isEn ? titleEn : titleFa;
  const desc = isEn ? descEn : descFa;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(desc)}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(title)}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${esc(isEn ? 'Backend-focused developer working across APIs, production services, Linux infrastructure, containerized deployments, and LLM-powered agent workflows.' : 'توسعه‌دهنده بک‌اند با تمرکز بر سرویس‌های production، زیرساخت و سامانه‌های Agentic AI مبتنی بر LLM.')}">`);
  html = html.replace(/<meta property="og:locale" content="[^"]*">/, `<meta property="og:locale" content="${isEn ? 'en_US' : 'fa_IR'}">`);
  html = html.replace(/<meta property="og:locale:alternate" content="[^"]*">/, `<meta property="og:locale:alternate" content="${isEn ? 'fa_IR' : 'en_US'}">`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${esc(title)}">`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${esc(isEn ? 'Backend-focused developer across APIs, production services, and LLM-powered agent workflows.' : 'توسعه‌دهنده بک‌اند با تمرکز بر سرویس‌های production، زیرساخت و سامانه‌های Agentic AI.')}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${esc(canonicalForLang)}">`);

  // JSON-LD jobTitle + knowsAbout (keep visible content matching)
  html = html.replace(/"jobTitle": "[^"]*"/, `"jobTitle": "${isEn ? 'Backend Developer · DevOps · Agentic AI' : 'توسعه‌دهنده بک‌اند · DevOps · Agentic AI'}"`);

  // Inject static content into empty/filled containers (preserve placeholders for hydration; idempotent)
  html = html.replace(
    /<p class="hero-summary" id="heroSummary">.*?<\/p>/s,
    `<p class="hero-summary" id="heroSummary">${heroSummary}</p>`
  );
  // Patch quick-facts availability static text for crawler (data-i18n will still hydrate)
  html = html.replace(
    /<dd data-i18n="workType">[^<]*<\/dd>/,
    `<dd data-i18n="workType">${esc(labels[lang].availability)}</dd>`
  );
  html = html.replace(
    /<dt data-i18n="workTypeLabel">[^<]*<\/dt>/,
    `<dt data-i18n="workTypeLabel">${esc(lang==='fa' ? 'وضعیت همکاری' : 'Availability')}</dt>`
  );
  html = html.replace(
    /<p class="lead" id="aboutText">.*?<\/p>/s,
    `<p class="lead" id="aboutText">${about.text}</p>`
  );
  html = html.replace(
    /<div class="strength-grid" id="strengthGrid">.*?<\/div>/s,
    `<div class="strength-grid" id="strengthGrid">${about.cards}</div>`
  );
  html = html.replace(
    /<div class="timeline" id="experienceTimeline">.*?<\/div>/s,
    `<div class="timeline" id="experienceTimeline">${exp.primary}</div>`
  );
  html = html.replace(
    /<div class="earlier-experience" id="earlierExperience">.*?<\/div>/s,
    `<div class="earlier-experience" id="earlierExperience">${exp.earlier}</div>`
  );
  html = html.replace(
    /<div class="featured-projects" id="featuredProjects">.*?<\/div>/s,
    `<div class="featured-projects" id="featuredProjects">${proj.featured}</div>`
  );
  html = html.replace(
    /<div id="secondaryProjects">.*?<\/div>/s,
    `<div id="secondaryProjects">${proj.secondary}</div>`
  );
  html = html.replace(
    /<div class="repo-grid" id="repoGrid">.*?<\/div>/s,
    `<div class="repo-grid" id="repoGrid">${proj.repos}</div>`
  );
  html = html.replace(
    /<div id="skillsContainer">.*?<\/div>/s,
    `<div id="skillsContainer">${skills}</div>`
  );
  html = html.replace(
    /<div id="educationContainer">.*?<\/div>/s,
    `<div id="educationContainer">${edu}</div>`
  );
  html = html.replace(
    /<div id="certificatesContainer">.*?<\/div>/s,
    `<div id="certificatesContainer">${certs}</div>`
  );
  html = html.replace(
    /<div id="languagesContainer">.*?<\/div>/s,
    `<div id="languagesContainer">${langs}</div>`
  );

  // Active language button + section headings labels (keep data-i18n but set initial text)
  // We patch only the minimal visible labels that are data-i18n driven and empty in template.
  // For robustness, keep the existing data-i18n spans but they already have English text fallback
  // in template; build ensures initial text matches lang.
  // Fix quick-facts availability display: template had data-i18n="workType" but new data key is availability
  // Ensure noscript fallback shows real content without duplication
  html = html.replace(
    /<noscript>.*?<\/noscript>/s,
    `<noscript><style>.reveal{opacity:1!important;transform:none!important}</style><p style="max-width:860px;margin:24px auto;padding:12px 16px;border:1px solid #d7e3de;border-radius:8px;background:#fff;color:#172622;text-align:center">${isEn ? 'JavaScript is disabled — you are viewing the static English resume. Switch to <a href="/fa/">Persian</a> or enable JavaScript for full interactivity.' : 'جاوااسکریپت غیرفعال است — نسخهٔ ایستای فارسی را مشاهده می‌کنید. برای نسخهٔ انگلیسی به <a href="/">صفحهٔ اصلی</a> بروید.'}</p></noscript>`
  );

  return html;
}

// --- Write outputs ---

function writeFile(p, content) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content, 'utf8');
  console.log('wrote', path.relative(ROOT, p), `(${content.length} bytes)`);
}

// Root is English (default)
const enRoot = buildForLang('en');
writeFile(path.join(ROOT, 'index.html'), enRoot);

// /en/ canonical English copy (for hreflang target) — fix asset paths for subdir
function fixSubdirPaths(html) {
  return html
    .replace(/href="styles\.css"/, 'href="../styles.css"')
    .replace(/href="assets\//g, 'href="../assets/')
    .replace(/src="assets\//g, 'src="../assets/')
    .replace(/src="jalali\.js"/, 'src="../jalali.js"')
    .replace(/src="resume-data\.js"/, 'src="../resume-data.js"')
    .replace(/src="script\.js"/, 'src="../script.js"')
    .replace(/href="manifest\.webmanifest"/, 'href="../manifest.webmanifest"')
    .replace(/href="assets\/img\/favicon\.svg"/, 'href="../assets/img/favicon.svg"');
}
const enCanonical = fixSubdirPaths(enRoot.replace(
  /<link rel="canonical" href="[^"]*">/,
  '<link rel="canonical" href="https://mmk-cp.ir/en/">'
));
writeFile(path.join(ROOT, 'en', 'index.html'), enCanonical);

// /fa/ Persian pre-render
let faHtml = buildForLang('fa');
faHtml = faHtml.replace(
  /<link rel="canonical" href="[^"]*">/,
  '<link rel="canonical" href="https://mmk-cp.ir/fa/">'
);
faHtml = fixSubdirPaths(faHtml);
writeFile(path.join(ROOT, 'fa', 'index.html'), faHtml);

// --- Validate ---
function assertContains(file, needle, label) {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.includes(needle)) {
    console.error(`FAIL ${label}: missing "${needle}" in ${file}`);
    process.exitCode = 1;
  } else {
    console.log(`PASS ${label}`);
  }
}
assertContains(path.join(ROOT, 'index.html'), 'Mohammad Mahdi Karimi', 'en name in root');
assertContains(path.join(ROOT, 'index.html'), 'AI Agent for Blog Content Production', 'en blog agent in root');
assertContains(path.join(ROOT, 'index.html'), '2026', '2026 in root');
assertContains(path.join(ROOT, 'index.html'), 'Asterisk', 'VoIP visible in root');
assertContains(path.join(ROOT, 'index.html'), 'Jul 2025', 'Gregorian date in root');
assertContains(path.join(ROOT, 'fa', 'index.html'), 'محمد مهدی کریمی', 'fa name');
assertContains(path.join(ROOT, 'fa', 'index.html'), '۱۴۰۵', 'fa 2026 as 1405');
assertContains(path.join(ROOT, 'fa', 'index.html'), 'تیر ۱۴۰۴', 'fa Jalali date');
assertContains(path.join(ROOT, 'fa', 'index.html'), 'Asterisk', 'fa VoIP');

console.log('Build complete.');
