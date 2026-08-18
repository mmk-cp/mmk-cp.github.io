'use strict';

/* UI strings — resume content lives in resume-data.js */
const uiStrings = {
  fa: {
    skip: 'پرش به محتوای اصلی',
    brandName: 'محمد مهدی کریمی',
    brandRole: 'توسعه‌دهنده بک‌اند · DevOps · Agentic AI',
    navAbout: 'درباره من',
    navExperience: 'سوابق',
    navProjects: 'پروژه‌ها',
    navSkills: 'مهارت‌ها',
    navContact: 'تماس',
    exportPdf: 'خروجی PDF',
    toggleNav: 'باز و بسته کردن فهرست',
    eyebrow: 'BACKEND DEVELOPMENT · DEVOPS · AGENTIC AI',
    name: 'محمد مهدی کریمی',
    title: 'توسعه‌دهنده بک‌اند · DevOps · Agentic AI',
    locationLabel: 'موقعیت',
    location: 'تهران، ایران',
    focusLabel: 'تمرکز اصلی',
    focus: 'بک‌اند · DevOps · Agentic AI',
    workTypeLabel: 'نوع همکاری',
    workType: 'پروژه‌ای',
    profileCardTitle: 'اطلاعات تماس',
    available: 'در دسترس',
    telegram: 'تلگرام',
    bale: 'بله',
    messenger: 'پیام‌رسان',
    aboutTitle: 'درباره من',
    experienceTitle: 'سوابق شغلی',
    earlierExperienceTitle: 'سابقهٔ پیشین — وب و WordPress',
    projectsKicker: 'پروژه‌های Agentic AI، کاربردی و متن‌باز',
    projectsTitle: 'پروژه‌های منتخب',
    productionProject: 'پروژه کاربردی',
    agenticAIProject: 'پروژه Agentic AI',
    openSourceTitle: 'پروژه‌های متن‌باز',
    allGithubProjects: 'همه پروژه‌ها در GitHub',
    secondaryProjectsTitle: 'سایر پروژه‌ها',
    caseStudyLabel: 'بررسی فنی',
    caseStudyProblem: 'مسئله',
    caseStudyApproach: 'رویکرد',
    caseStudyDecisions: 'تصمیم‌های مهندسی',
    caseStudyStack: 'Stack',
    skillsTitle: 'توانمندی‌های فنی',
    educationTitle: 'تحصیلات',
    certificatesTitle: 'گواهی دوره‌ها',
    mft: 'مجتمع فنی تهران',
    score: 'نمره',
    duration: 'مدت',
    issued: 'صدور',
    viewCertificate: 'مشاهده گواهی',
    languageTitle: 'زبان',
    footerContact: 'تماس:',
    footerCopy: 'محمد مهدی کریمی — تهران',
    footerTerminalHint: 'آماده همکاری',
    printSkillsTitle: 'مهارت‌های کلیدی',
    softSkillsCompact: 'حل مسئله · کار تیمی و مسئولیت‌پذیری · مدیریت بحران · برنامه‌ریزی · پذیرش بازخورد'
  },
  en: {
    skip: 'Skip to main content',
    brandName: 'Mohammad Mahdi Karimi',
    brandRole: 'Backend Developer · DevOps · Agentic AI',
    navAbout: 'About',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navContact: 'Contact',
    exportPdf: 'Export PDF',
    toggleNav: 'Toggle navigation',
    eyebrow: 'BACKEND DEVELOPMENT · DEVOPS · AGENTIC AI',
    name: 'Mohammad Mahdi Karimi',
    title: 'Backend Developer · DevOps · Agentic AI',
    locationLabel: 'Location',
    location: 'Tehran, Iran',
    focusLabel: 'Primary focus',
    focus: 'Backend · DevOps · Agentic AI',
    workTypeLabel: 'Engagement',
    workType: 'Project-based',
    profileCardTitle: 'Contact details',
    available: 'Available',
    telegram: 'Telegram',
    bale: 'Bale',
    messenger: 'Messenger',
    aboutTitle: 'About me',
    experienceTitle: 'Work experience',
    earlierExperienceTitle: 'Earlier Experience — Web & WordPress',
    projectsKicker: 'Agentic AI, applied projects & open source',
    projectsTitle: 'Selected projects',
    productionProject: 'Applied project',
    agenticAIProject: 'Agentic AI project',
    openSourceTitle: 'Open-source projects',
    allGithubProjects: 'All projects on GitHub',
    secondaryProjectsTitle: 'Other projects',
    caseStudyLabel: 'Engineering case study',
    caseStudyProblem: 'Problem',
    caseStudyApproach: 'Architecture / Approach',
    caseStudyDecisions: 'Engineering decisions',
    caseStudyStack: 'Stack',
    skillsTitle: 'Technical capabilities',
    educationTitle: 'Education',
    certificatesTitle: 'Training certificates',
    mft: 'Tehran Institute of Technology',
    score: 'Score',
    duration: 'Duration',
    issued: 'Issued',
    viewCertificate: 'View certificate',
    languageTitle: 'Language',
    footerContact: 'Contact:',
    footerCopy: 'Mohammad Mahdi Karimi — Tehran',
    footerTerminalHint: 'open to collaboration',
    printSkillsTitle: 'Key skills',
    softSkillsCompact: 'Problem solving · Teamwork · Crisis management · Planning · Receptive to feedback'
  }
};

const html = document.documentElement;
const languageButtons = document.querySelectorAll('[data-lang]');
const printButton = document.getElementById('printButton');
const profileImage = document.getElementById('profileImage');
const printResumeEl = document.getElementById('printResume');
const certificateDialog = document.getElementById('certificateDialog');
const certificateImage = document.getElementById('certificateImage');
const certificateDialogTitle = document.getElementById('certificateDialogTitle');
const closeDialog = document.getElementById('closeDialog');
const desktopNav = document.getElementById('desktopNav');
const navToggle = document.getElementById('navToggle');
const mobileDrawer = document.getElementById('mobileDrawer');

function langKey(lang) { return lang === 'en' ? 'en' : 'fa'; }
function t(lang, key) { return (uiStrings[lang] && uiStrings[lang][key]) || uiStrings.fa[key] || ''; }
function rd(lang, obj) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[langKey(lang)] || obj.fa || obj.en || '';
}
function esc(s) {
  var d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

/* Typewriter for hero role */
var typeTimer = null;
function typeRole(lang) {
  var heroRole = document.getElementById('heroRole');
  if (!heroRole) return;
  var text = rd(lang, resumeData.profile.title) || t(lang, 'title');
  if (typeTimer) clearTimeout(typeTimer);
  heroRole.innerHTML = '';
  var typed = document.createElement('span');
  typed.className = 'hero-role-typed';
  var cursor = document.createElement('span');
  cursor.className = 'hero-role-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  heroRole.appendChild(typed);
  heroRole.appendChild(cursor);
  var i = 0;
  function step() {
    if (i < text.length) {
      typed.textContent += text.charAt(i);
      i++;
      typeTimer = setTimeout(step, 32 + Math.random() * 28);
    }
  }
  setTimeout(step, 250);
}

/* ---------- Jalali helpers (from jalali.js) ---------- */
function formatDateLabel(lang, startISO, endISO) {
  if (typeof formatRange === 'function') return formatRange(lang, startISO, endISO);
  // fallback
  return (startISO || '') + ' — ' + (endISO || (lang === 'fa' ? 'اکنون' : 'Present'));
}
function projectYearLabel(lang, year) {
  if (typeof formatProjectYear === 'function') return formatProjectYear(lang, year);
  return String(year);
}

/* ---------- Render: Hero summary ---------- */
function renderHeroSummary(lang) {
  var el = document.getElementById('heroSummary');
  if (el) el.textContent = rd(lang, resumeData.profile.heroSummary);
}

/* ---------- Render: About ---------- */
function renderAbout(lang) {
  var aboutText = document.getElementById('aboutText');
  if (aboutText) aboutText.textContent = rd(lang, resumeData.about.text);
  var grid = document.getElementById('strengthGrid');
  if (!grid) return;
  grid.innerHTML = resumeData.about.strengths.map(function (s) {
    return '<article><span class="mini-icon" aria-hidden="true">' + esc(s.icon) + '</span>'
      + '<h3>' + esc(rd(lang, s.title)) + '</h3>'
      + '<p>' + esc(rd(lang, s.text)) + '</p></article>';
  }).join('');
}

/* ---------- Render: Experience ---------- */
function renderExperience(lang) {
  var tl = document.getElementById('experienceTimeline');
  if (tl) {
    tl.innerHTML = resumeData.experience.primary.map(function (job) {
      var companyHtml = '';
      if (job.company) {
        var cName = esc(rd(lang, job.company));
        companyHtml = job.companyUrl
          ? '<p class="company"><a href="' + esc(job.companyUrl) + '" target="_blank" rel="noopener noreferrer">' + cName + '</a></p>'
          : '<p class="company">' + cName + '</p>';
      }
      var bullets = job.bullets.map(function (b) { return '<li>' + esc(rd(lang, b)) + '</li>'; }).join('');
      var tags = job.tags.map(function (tg) { return '<span>' + esc(tg) + '</span>'; }).join('');
      var loc = job.location ? esc(rd(lang, job.location)) : esc(t(lang, 'tehran'));
      var dateLabel = esc(formatDateLabel(lang, job.startDate, job.endDate));
      var isoDate = esc(job.startDate || '');
      return '<article class="timeline-item">'
        + '<div class="timeline-marker" aria-hidden="true"></div>'
        + '<div class="timeline-meta"><time datetime="' + isoDate + '">' + dateLabel + '</time><span>' + loc + '</span></div>'
        + '<div class="timeline-body">'
        + '<h3>' + esc(rd(lang, job.title)) + '</h3>'
        + companyHtml
        + '<p>' + esc(rd(lang, job.summary)) + '</p>'
        + '<ul class="achievement-list">' + bullets + '</ul>'
        + '<div class="tags">' + tags + '</div>'
        + '</div></article>';
    }).join('');
  }
  var earlier = document.getElementById('earlierExperience');
  if (earlier) {
    var earlierTitle = esc(t(lang, 'earlierExperienceTitle'));
    var cards = resumeData.experience.earlier.map(function (job) {
      var dateLabel = esc(formatDateLabel(lang, job.startDate, job.endDate));
      return '<article class="earlier-card">'
        + '<div class="earlier-meta"><time datetime="' + esc(job.startDate || '') + '">' + dateLabel + '</time> · <span>' + esc(rd(lang, job.company)) + '</span></div>'
        + '<h3>' + esc(rd(lang, job.title)) + '</h3>'
        + '<p>' + esc(rd(lang, job.description)) + '</p>'
        + '</article>';
    }).join('');
    earlier.innerHTML = '<h3 class="earlier-heading">' + earlierTitle + '</h3><div class="earlier-grid">' + cards + '</div>';
  }
}

/* ---------- Flow diagram ---------- */
function renderFlow(flow) {
  if (!flow || !flow.length) return '';
  var steps = flow.map(function (s) { return '<span class="flow-step">' + esc(s) + '</span>'; }).join('<span class="flow-arrow" aria-hidden="true">→</span>');
  return '<div class="agent-flow" dir="ltr" aria-label="Agent workflow">' + steps + '</div>';
}

/* ---------- Render: Projects ---------- */
function renderProjects(lang) {
  var featured = document.getElementById('featuredProjects');
  if (featured) {
    featured.innerHTML = resumeData.featuredProjects.map(function (p) {
      var kicker = p.kind === 'agentic' ? esc(t(lang, 'agenticAIProject')) : esc(t(lang, 'productionProject'));
      var year = esc(projectYearLabel(lang, p.year));
      var points = p.points.map(function (pt) { return '<li>' + esc(rd(lang, pt)) + '</li>'; }).join('');
      var tags = p.tags.map(function (tg) { return '<span>' + esc(tg) + '</span>'; }).join('');
      var flowHtml = renderFlow(p.flow);
      var caseHtml = '';
      if (p.caseStudy) {
        var cs = p.caseStudy;
        caseHtml = '<details class="case-study"><summary>' + esc(t(lang, 'caseStudyLabel')) + '</summary>'
          + '<div class="case-body">'
          + '<div class="case-row"><strong>' + esc(t(lang, 'caseStudyProblem')) + '</strong><p>' + esc(rd(lang, cs.problem)) + '</p></div>'
          + '<div class="case-row"><strong>' + esc(t(lang, 'caseStudyApproach')) + '</strong><p>' + esc(rd(lang, cs.approach)) + '</p></div>'
          + '<div class="case-row"><strong>' + esc(t(lang, 'caseStudyDecisions')) + '</strong><p>' + esc(rd(lang, cs.decisions)) + '</p></div>'
          + '<div class="case-row"><strong>' + esc(t(lang, 'caseStudyStack')) + '</strong><p dir="ltr">' + esc(cs.stack) + '</p></div>'
          + '</div></details>';
      }
      return '<article class="project-card project-card-featured">'
        + '<div class="project-topline"><span class="project-type">' + kicker + '</span><span class="project-year">' + year + '</span></div>'
        + '<h3>' + esc(rd(lang, p.title)) + '</h3>'
        + '<p>' + esc(rd(lang, p.summary)) + '</p>'
        + flowHtml
        + '<ul class="project-points">' + points + '</ul>'
        + caseHtml
        + '<div class="tags">' + tags + '</div>'
        + '</article>';
    }).join('');
  }
  var secondary = document.getElementById('secondaryProjects');
  if (secondary) {
    var sec = resumeData.secondaryProjects;
    if (!sec || !sec.length) { secondary.innerHTML = ''; return; }
    var secTitle = esc(t(lang, 'secondaryProjectsTitle'));
    var secCards = sec.map(function (p) {
      var tags = p.tags.map(function (tg) { return '<span>' + esc(tg) + '</span>'; }).join('');
      return '<article class="project-card project-card-secondary">'
        + '<h3>' + esc(rd(lang, p.title)) + '</h3>'
        + '<p>' + esc(rd(lang, p.summary)) + '</p>'
        + '<div class="tags">' + tags + '</div></article>';
    }).join('');
    secondary.innerHTML = '<h3 class="subsection-title secondary-title">' + secTitle + '</h3><div class="secondary-grid">' + secCards + '</div>';
  }
  var repoGrid = document.getElementById('repoGrid');
  if (repoGrid) {
    repoGrid.innerHTML = resumeData.openSource.map(function (r) {
      return '<a class="repo-card" href="' + esc(r.url) + '" target="_blank" rel="noopener noreferrer">'
        + '<span class="repo-icon" aria-hidden="true">GH</span>'
        + '<span class="repo-body"><strong dir="ltr">' + esc(r.name) + '</strong><p>' + esc(rd(lang, r.description)) + '</p><span dir="ltr">' + esc(r.tags) + '</span></span>'
        + '</a>';
    }).join('');
  }
}

/* ---------- Render: Skills ---------- */
function renderSkills(lang) {
  var container = document.getElementById('skillsContainer');
  if (!container) return;
  container.innerHTML = resumeData.skills.map(function (g) {
    var items = g.items.map(function (it) { return '<span>' + esc(it) + '</span>'; }).join('');
    return '<div class="skill-group">'
      + '<h3>' + esc(rd(lang, g.title)) + '</h3>'
      + '<p class="skill-note">' + esc(rd(lang, g.note)) + '</p>'
      + '<div class="skill-list">' + items + '</div>'
      + '</div>';
  }).join('');
  var soft = document.createElement('div');
  soft.className = 'skill-group skill-group-soft';
  soft.innerHTML = '<h3>' + (lang === 'fa' ? 'مهارت‌های نرم' : 'Soft skills') + '</h3>'
    + '<p class="skill-note skill-note-soft">' + esc(t(lang, 'softSkillsCompact')) + '</p>';
  container.appendChild(soft);
}

/* ---------- Render: Education ---------- */
function renderEducation(lang) {
  var el = document.getElementById('educationContainer');
  if (!el) return;
  var edu = resumeData.education;
  var dateLabel = formatDateLabel(lang, edu.startDate, edu.endDate);
  el.innerHTML = '<article class="education-item"><div>'
    + '<h3>' + esc(rd(lang, edu.degree)) + '</h3>'
    + '<p>' + esc(rd(lang, edu.university)) + '</p>'
    + '<time datetime="' + esc(edu.startDate || '') + '">' + esc(dateLabel) + '</time>'
    + '</div></article>';
}

/* ---------- Render: Certificates ---------- */
function renderCertificates(lang) {
  var el = document.getElementById('certificatesContainer');
  if (!el) return;
  el.innerHTML = resumeData.certificates.map(function (c) {
    return '<article class="certificate-card">'
      + '<div><h3>' + esc(c.name) + '</h3>'
      + '<p>' + esc(rd(lang, c.issuer)) + '</p>'
      + '<dl><div><dt>' + esc(t(lang, 'duration')) + '</dt><dd>' + esc(rd(lang, c.duration)) + '</dd></div>'
      + '<div><dt>' + esc(t(lang, 'issued')) + '</dt><dd dir="ltr">' + esc(c.issued) + '</dd></div></dl></div>'
      + '<button class="text-button no-print" type="button" data-certificate="' + esc(c.id) + '">' + esc(t(lang, 'viewCertificate')) + '</button>'
      + '</article>';
  }).join('');
  wireCertificateButtons(lang);
}

/* ---------- Render: Languages ---------- */
function renderLanguages(lang) {
  var el = document.getElementById('languagesContainer');
  if (!el) return;
  el.innerHTML = resumeData.languages.map(function (lng) {
    return '<div class="language-item"><div><strong>' + esc(rd(lang, lng.name)) + '</strong><span>' + esc(rd(lang, lng.level)) + '</span></div></div>';
  }).join('');
}

/* ---------- Render: Print ---------- */
function renderPrint(lang) {
  if (!printResumeEl) return;
  var p = resumeData.profile;
  var isEn = lang === 'en';
  var name = esc(rd(lang, p.name));
  var title = esc(rd(lang, p.title));
  var loc = esc(rd(lang, p.location));
  var aboutHtml = esc(rd(lang, resumeData.about.text));
  var printHeader = '<header class="print-header">'
    + '<div class="print-identity">'
    + '<h1>' + name + '</h1>'
    + '<p class="print-role">' + title + '</p>'
    + '<p class="print-techline" dir="ltr">' + esc(p.techLine) + '</p>'
    + '<p class="print-contact"><a href="mailto:' + esc(p.email) + '">' + esc(p.email) + '</a>'
    + '<span aria-hidden="true"> · </span><a href="' + esc(p.website) + '" target="_blank" rel="noopener noreferrer">' + esc(p.website.replace('https://', '')) + '</a>'
    + '<span aria-hidden="true"> · </span><span class="print-messenger"><span>' + esc(t(lang, 'messenger')) + '</span> <b dir="ltr">@mmk_cp</b></span>'
    + '<span aria-hidden="true"> · </span><span>' + loc + '</span></p>'
    + '</div>'
    + '<img class="print-photo" src="assets/img/profile.png" width="300" height="300" alt="' + (isEn ? 'Portrait of Mohammad Mahdi Karimi' : 'تصویر پرسنلی محمد مهدی کریمی') + '" decoding="sync">'
    + '</header>';
  var printAbout = '<section class="print-section"><h2>' + esc(t(lang, 'aboutTitle')) + '</h2><p>' + aboutHtml + '</p></section>';
  var skillLines = resumeData.skills.map(function (g) {
    return '<p><strong>' + esc(rd(lang, g.title)) + ':</strong> ' + esc(g.items.join(', ')) + '</p>';
  }).join('');
  var printSkills = '<section class="print-section print-skills"><h2>' + esc(t(lang, 'printSkillsTitle')) + '</h2>' + skillLines + '</section>';
  var expItems = '';
  resumeData.experience.primary.forEach(function (job) {
    var cHtml = '';
    if (job.company) {
      var cn = esc(rd(lang, job.company));
      cHtml = job.companyUrl ? '<b><a href="' + esc(job.companyUrl) + '" target="_blank" rel="noopener noreferrer">' + cn + '</a></b> · ' : '<b>' + cn + '</b> · ';
    }
    var bullets = job.bullets.map(function (b) { return '<li>' + esc(rd(lang, b)) + '</li>'; }).join('');
    var dateLabel = esc(formatDateLabel(lang, job.startDate, job.endDate));
    expItems += '<article class="print-item">'
      + '<div class="print-item-heading"><h3>' + esc(rd(lang, job.title)) + '</h3><span>' + cHtml + '<time>' + dateLabel + '</time></span></div>'
      + '<p>' + esc(rd(lang, job.summary)) + '</p><ul>' + bullets + '</ul></article>';
  });
  resumeData.experience.earlier.forEach(function (job) {
    var dateLabel = esc(formatDateLabel(lang, job.startDate, job.endDate));
    expItems += '<article class="print-item print-item-compact">'
      + '<div class="print-item-heading"><h3>' + esc(rd(lang, job.title)) + '</h3><span><b>' + esc(rd(lang, job.company)) + '</b> · <time>' + dateLabel + '</time></span></div>'
      + '<p>' + esc(rd(lang, job.description)) + '</p></article>';
  });
  var printExp = '<section class="print-section"><h2>' + esc(t(lang, 'experienceTitle')) + '</h2>' + expItems + '</section>';
  var projItems = '';
  resumeData.featuredProjects.forEach(function (proj) {
    var yr = esc(projectYearLabel(lang, proj.year));
    var flowPrint = proj.flow && proj.flow.length ? '<p class="print-flow" dir="ltr">' + esc(proj.flow.join(' → ')) + '</p>' : '';
    projItems += '<article class="print-item"><div class="print-item-heading"><h3>' + esc(rd(lang, proj.title)) + '</h3><span>' + yr + '</span></div>'
      + '<p>' + esc(rd(lang, proj.summary)) + '</p>' + flowPrint + '</article>';
  });
  if (resumeData.secondaryProjects && resumeData.secondaryProjects.length) {
    resumeData.secondaryProjects.forEach(function (proj) {
      projItems += '<article class="print-item print-item-compact"><div class="print-item-heading"><h3>' + esc(rd(lang, proj.title)) + '</h3></div>'
        + '<p>' + esc(rd(lang, proj.summary)) + '</p></article>';
    });
  }
  projItems += '<p class="print-github"><strong>' + esc(t(lang, 'openSourceTitle')) + ':</strong> <a href="https://github.com/mmk-cp">github.com/mmk-cp</a></p>';
  projItems += '<ul class="print-repo-list">';
  resumeData.openSource.forEach(function (r) {
    projItems += '<li><a href="' + esc(r.url) + '" target="_blank" rel="noopener noreferrer" dir="ltr">' + esc(r.name) + '</a><span>' + esc(rd(lang, r.description)) + '</span></li>';
  });
  projItems += '</ul>';
  var printProjects = '<section class="print-section"><h2>' + esc(t(lang, 'projectsTitle')) + '</h2>' + projItems + '</section>';
  var edu = resumeData.education;
  var certLine = resumeData.certificates.map(function (c) { return c.name + ' (' + rd(lang, c.duration) + ')'; }).join(' · ') + ' · ' + rd(lang, resumeData.certificates[0].issuer);
  var langLine = resumeData.languages.map(function (l) { return esc(rd(lang, l.name)) + ' · ' + esc(rd(lang, l.level)); }).join(' · ');
  var eduLabel = esc(formatDateLabel(lang, edu.startDate, edu.endDate));
  var printFinal = '<section class="print-section print-final-section">'
    + '<div><h2>' + esc(t(lang, 'educationTitle')) + '</h2><p><strong>' + esc(rd(lang, edu.degree)) + '</strong> · ' + esc(rd(lang, edu.university)) + ' · ' + eduLabel + '</p></div>'
    + '<div><h2>' + esc(t(lang, 'certificatesTitle')) + '</h2><p>' + esc(certLine) + '</p></div>'
    + '<div><h2>' + esc(t(lang, 'languageTitle')) + '</h2><p>' + langLine + '</p></div>'
    + '</section>';
  printResumeEl.innerHTML = printHeader + printAbout + printSkills + printExp + printProjects + printFinal;
}

/* ---------- Certificates ---------- */
function wireCertificateButtons(lang) {
  document.querySelectorAll('[data-certificate]').forEach(function (btn) {
    var clone = btn.cloneNode(true);
    btn.parentNode.replaceChild(clone, btn);
  });
  document.querySelectorAll('[data-certificate]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.dataset.certificate;
      var cert = resumeData.certificates.find(function (c) { return c.id === id; });
      if (!cert) return;
      var isEn = lang === 'en';
      certificateImage.src = cert.image;
      certificateImage.alt = isEn ? cert.name + ' certificate — Mohammad Mahdi Karimi' : 'تصویر گواهی ' + cert.name + ' — محمد مهدی کریمی';
      certificateDialogTitle.textContent = cert.name;
      if (typeof certificateDialog.showModal === 'function') certificateDialog.showModal();
      else window.open(cert.image, '_blank', 'noopener,noreferrer');
    });
  });
}

/* ---------- SEO meta ---------- */
function updateSeoMeta(lang) {
  var isEn = lang === 'en';
  document.title = isEn
    ? 'Mohammad Mahdi Karimi — Backend Developer · DevOps · Agentic AI'
    : 'محمد مهدی کریمی — توسعه‌دهنده بک‌اند · DevOps · Agentic AI';
  var desc = isEn
    ? 'Resume of Mohammad Mahdi Karimi — Backend Developer, DevOps and Agentic AI. Python, FastAPI, Docker, Linux and LLM-powered systems.'
    : 'رزومه محمد مهدی کریمی — توسعه‌دهنده بک‌اند، DevOps و Agentic AI. تجربه در Python، FastAPI، Docker، Linux و سامانه‌های مبتنی بر LLM.';
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = desc;
  var ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = document.title;
  var ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.content = desc;
  var twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.content = document.title;
  var twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.content = desc;
  var schema = document.getElementById('person-schema');
  if (schema) {
    try {
      var data = JSON.parse(schema.textContent);
      data.jobTitle = isEn ? 'Backend Developer · DevOps · Agentic AI' : 'توسعه‌دهنده بک‌اند · DevOps · Agentic AI';
      schema.textContent = JSON.stringify(data);
    } catch (_) {}
  }
}

/* ---------- Language ---------- */
function setLanguage(language, persist) {
  if (persist === undefined) persist = true;
  var lang = uiStrings[language] ? language : 'en';
  html.lang = lang;
  html.dir = lang === 'fa' ? 'rtl' : 'ltr';
  updateSeoMeta(lang);
  var p = resumeData.profile;
  var portraitAlt = lang === 'fa' ? 'تصویر پرسنلی محمد مهدی کریمی' : 'Portrait of Mohammad Mahdi Karimi';
  if (profileImage) profileImage.alt = portraitAlt;
  var avail = document.querySelector('.availability-label');
  if (avail) avail.textContent = t(lang, 'available');
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.dataset.i18n;
    if (uiStrings[lang] && Object.prototype.hasOwnProperty.call(uiStrings[lang], key)) {
      el.textContent = uiStrings[lang][key];
    }
  });
  languageButtons.forEach(function (btn) {
    var active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  var topbar = document.querySelector('.topbar');
  if (topbar) topbar.setAttribute('aria-label', lang === 'fa' ? 'نوار ابزار رزومه' : 'Resume toolbar');
  if (desktopNav) desktopNav.setAttribute('aria-label', lang === 'fa' ? 'بخش‌های رزومه' : 'Resume sections');
  var langSwitch = document.querySelector('.language-switch');
  if (langSwitch) langSwitch.setAttribute('aria-label', lang === 'fa' ? 'انتخاب زبان' : 'Select language');
  if (printButton) {
    printButton.setAttribute('aria-label', t(lang, 'exportPdf'));
    printButton.setAttribute('title', t(lang, 'exportPdf'));
  }
  if (closeDialog) closeDialog.setAttribute('aria-label', lang === 'fa' ? 'بستن' : 'Close');
  if (navToggle) navToggle.setAttribute('aria-label', t(lang, 'toggleNav'));
  renderHeroSummary(lang);
  typeRole(lang);
  renderAbout(lang);
  renderExperience(lang);
  renderProjects(lang);
  renderSkills(lang);
  renderEducation(lang);
  renderCertificates(lang);
  renderLanguages(lang);
  renderPrint(lang);
  if (persist) {
    var targetHash = lang === 'en' ? '#en' : '#fa';
    if (location.hash !== targetHash) {
      if (history.replaceState) history.replaceState(null, '', targetHash);
      else location.hash = targetHash;
    }
    try { localStorage.setItem('resume-language', lang); } catch (_) {}
  }
  // Refresh scroll-spy after language change (layout may shift)
  requestAnimationFrame(refreshScrollSpy);
}

function resolveInitialLanguage() {
  var hash = (location.hash || '').replace('#', '').toLowerCase();
  if (hash === 'en' || hash === 'fa') return hash;
  try {
    var saved = localStorage.getItem('resume-language');
    if (saved === 'en' || saved === 'fa') return saved;
  } catch (_) {}
  return 'en';
}

/* ---------- Print helpers ---------- */
function waitForImage(img) {
  if (!img.src) return Promise.resolve();
  if (img.complete) {
    if (typeof img.decode === 'function') return img.decode().catch(function () {});
    return Promise.resolve();
  }
  return new Promise(function (resolve) {
    img.addEventListener('load', resolve, { once: true });
    img.addEventListener('error', resolve, { once: true });
  });
}
function waitForPrintResources() {
  var fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready.catch(function () {}) : Promise.resolve();
  var imagesReady = Array.from(document.images).map(waitForImage);
  return Promise.all([fontsReady].concat(imagesReady));
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  // Hero is visible immediately
  var hero = document.querySelector('.hero');
  if (hero) hero.classList.add('is-visible');
}

/* ---------- Scroll spy for desktop nav ---------- */
var spyObserver = null;
function refreshScrollSpy() {
  if (spyObserver) spyObserver.disconnect();
  if (!desktopNav || window.matchMedia('(max-width: 1040px)').matches) return;
  var links = desktopNav.querySelectorAll('a[href^="#"]');
  if (!links.length) return;
  var sections = [];
  links.forEach(function (a) {
    var id = a.getAttribute('href').slice(1);
    var sec = document.getElementById(id);
    if (sec) sections.push({ link: a, section: sec });
  });
  if (!('IntersectionObserver' in window)) return;
  spyObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id;
        links.forEach(function (l) { l.classList.toggle('is-active', l.getAttribute('href') === '#' + id); });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
  sections.forEach(function (s) { spyObserver.observe(s.section); });
}

/* ---------- Event wiring ---------- */
languageButtons.forEach(function (btn) {
  btn.addEventListener('click', function () { setLanguage(btn.dataset.lang); });
});
window.addEventListener('hashchange', function () {
  var hash = (location.hash || '').replace('#', '').toLowerCase();
  if ((hash === 'en' || hash === 'fa') && hash !== html.lang) setLanguage(hash, true);
});

/* Mobile drawer with backdrop */
var drawerBackdrop = document.getElementById('drawerBackdrop');
function toggleDrawer(open) {
  if (navToggle) navToggle.setAttribute('aria-expanded', String(open));
  if (mobileDrawer) mobileDrawer.hidden = !open;
  if (drawerBackdrop) drawerBackdrop.hidden = !open;
}
if (navToggle && mobileDrawer) {
  navToggle.addEventListener('click', function () {
    var open = navToggle.getAttribute('aria-expanded') !== 'true';
    toggleDrawer(open);
  });
  mobileDrawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { toggleDrawer(false); });
  });
}
if (drawerBackdrop) {
  drawerBackdrop.addEventListener('click', function () { toggleDrawer(false); });
}

/* Hero spotlight follows mouse */
var heroSpotlight = document.getElementById('heroSpotlight');
if (heroSpotlight) {
  document.querySelector('.hero').addEventListener('mousemove', function (e) {
    var rect = e.currentTarget.getBoundingClientRect();
    var x = ((e.clientX - rect.left) / rect.width) * 100;
    var y = ((e.clientY - rect.top) / rect.height) * 100;
    heroSpotlight.style.setProperty('--mx', x + '%');
    heroSpotlight.style.setProperty('--my', y + '%');
  });
}

/* Scroll progress indicator */
var scrollProgress = document.getElementById('scrollProgress');
if (scrollProgress) {
  window.addEventListener('scroll', function () {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var p = h > 0 ? window.scrollY / h : 0;
    scrollProgress.style.transform = 'scaleX(' + p + ')';
  }, { passive: true });
}

/* Role typing animation — initialized on first boot via typeRole, re-triggered on language switch */
var roleEl = null;

var printInProgress = false;
if (printButton) {
  printButton.addEventListener('click', function () {
    if (printInProgress) return;
    printInProgress = true;
    printButton.disabled = true;
    var originalTitle = document.title;
    var lang = html.lang;
    var printTitle = lang === 'fa' ? 'رزومه محمد مهدی کریمی' : 'Mohammad Mahdi Karimi - Resume';
    var restored = false;
    function restore() {
      if (restored) return;
      restored = true;
      document.title = originalTitle;
      printButton.disabled = false;
      printInProgress = false;
    }
    waitForPrintResources().then(function () {
      document.title = printTitle;
      window.addEventListener('afterprint', restore, { once: true });
      window.print();
      window.setTimeout(restore, 1500);
    }).catch(function () { restore(); window.print(); });
  });
}
if (closeDialog && certificateDialog) {
  closeDialog.addEventListener('click', function () { certificateDialog.close(); });
  certificateDialog.addEventListener('click', function (e) { if (e.target === certificateDialog) certificateDialog.close(); });
}
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && certificateDialog && certificateDialog.open) certificateDialog.close();
  if (e.key === 'Escape' && mobileDrawer && !mobileDrawer.hidden) toggleDrawer(false);
});

/* ---------- Boot ---------- */
setLanguage(resolveInitialLanguage(), false);
initReveal();
refreshScrollSpy();
window.addEventListener('resize', function () { refreshScrollSpy(); });
