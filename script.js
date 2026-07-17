'use strict';

const translations = {
  fa: {
    skip: 'پرش به محتوای اصلی',
    brandName: 'محمد مهدی کریمی',
    brandRole: 'توسعه‌دهنده بک‌اند',
    navAbout: 'درباره من',
    navExperience: 'سوابق',
    navProjects: 'پروژه‌ها',
    navSkills: 'مهارت‌ها',
    navEducation: 'تحصیلات',
    exportPdf: 'خروجی PDF',
    eyebrow: 'BACK-END · API DESIGN · WEB APPLICATIONS',
    name: 'محمد مهدی کریمی',
    title: 'توسعه‌دهنده بک‌اند و وب‌اپلیکیشن',
    heroSummary: 'توسعه‌دهنده نرم‌افزار با تمرکز بر طراحی و پیاده‌سازی سرویس‌های بک‌اند، APIهای REST و وب‌اپلیکیشن‌های داده‌محور. تجربه عملی من شامل Python، PHP، Django، FastAPI، Flask، Laravel، پایگاه‌های داده رابطه‌ای و NoSQL، Docker و Object Storage است.',
    locationLabel: 'موقعیت',
    location: 'تهران، ایران',
    focusLabel: 'تمرکز اصلی',
    focus: 'Back-end & Web Applications',
    workTypeLabel: 'نوع همکاری',
    workType: 'پروژه‌ای',
    profileCardTitle: 'اطلاعات تماس',
    telegram: 'تلگرام',
    bale: 'بله',
    messenger: 'پیام‌رسان',
    aboutKicker: 'معرفی حرفه‌ای',
    aboutTitle: 'درباره من',
    aboutText: 'توسعه‌دهنده نرم‌افزار با تمرکز بر بک‌اند و وب‌اپلیکیشن‌ها. در پروژه‌های عملی از Python و PHP، APIهای REST، پایگاه‌های داده رابطه‌ای و NoSQL، Docker و Object Storage استفاده کرده‌ام. تجربه من از توسعه قابلیت‌های وب تا سامانه‌های داده‌محور مانند گردش مکاتبات، دفترچه تلفن و ابزارهای پردازش اسناد را دربر می‌گیرد. به تحلیل مسئله، کدنویسی قابل نگهداری، مستندسازی روشن و همکاری مؤثر در تیم اهمیت می‌دهم.',
    strength1Title: 'توسعه بک‌اند',
    strength1Text: 'طراحی API، منطق کسب‌وکار و سرویس‌های وب با Django، FastAPI، Flask و Laravel.',
    strength2Title: 'سامانه‌های داده‌محور',
    strength2Text: 'کار با PostgreSQL، MySQL، MongoDB، SQL Server و Redis برای نیازهای متنوع داده.',
    strength3Title: 'تحویل پروژه',
    strength3Text: 'استفاده عملی از Docker، Linux و Object Storage در سطح نیازهای اجرای پروژه.',
    experienceKicker: 'مسیر حرفه‌ای',
    experienceTitle: 'سوابق شغلی',
    tehran: 'تهران',
    job1Date: 'تیر ۱۴۰۴ تا اکنون',
    job1Title: 'عضو تیم بک‌اند',
    job1Company: 'بیجک',
    job1Text: 'مشارکت در توسعه بک‌اند محصولات تیم با استفاده از FastAPI و Django.',
    job1Point1: 'همکاری در توسعه و نگهداری سرویس‌های بک‌اند مبتنی بر FastAPI و Django.',
    job1Point2: 'مشارکت در پیاده‌سازی قابلیت‌ها و APIهای محصولات تیمی با Python.',
    job2Date: 'فروردین ۱۴۰۲ تا آذر ۱۴۰۲',
    job2Title: 'طراحی و برنامه‌نویسی وب‌اپلیکیشن',
    job2Company: 'پل درمانگران ایرانیان کهن',
    job2Text: 'توسعه سرویس‌های وب و رابط‌های کاربردی با Laravel، PHP، JavaScript و MySQL.',
    job2Point1: 'توسعه سرویس‌های وب و قابلیت‌های کاربری با Laravel، PHP، JavaScript و MySQL.',
    job2Point2: 'مشارکت در طراحی رابط با Bootstrap 5 و آماده‌سازی تجربه PWA در بخش‌های پروژه.',
    job3Date: 'آذر ۱۴۰۱ تا دی ۱۴۰۱',
    job3Title: 'طراح وب‌سایت وردپرس',
    job3Company: 'گروه حقوقی کهن',
    job3Text: 'طراحی و پیاده‌سازی وب‌سایت سازمانی با WordPress، HTML5 و CSS3.',
    job3Point1: 'طراحی و پیاده‌سازی وب‌سایت سازمانی با WordPress، HTML5 و CSS3.',
    job3Point2: 'سازمان‌دهی صفحه‌ها و اجزای رابط متناسب با محتوای حقوقی و سازمانی سایت.',
    job4Date: 'آبان ۱۴۰۰ تا شهریور ۱۴۰۱',
    job4Title: 'طراح سایت و سئو',
    job4Company: 'ریکاوری اطلاعات دیتاویژن',
    job4Text: 'طراحی وب‌سایت خدمات تعمیر و بازیابی هارد و فعالیت در بهینه‌سازی محتوای وب‌سایت.',
    job4Point1: 'طراحی وب‌سایت خدمات تعمیر و بازیابی داده با WordPress، PHP و JavaScript.',
    job4Point2: 'همکاری در بهینه‌سازی محتوای صفحات برای دیده‌شدن بهتر در موتورهای جست‌وجو.',
    job5Date: 'آبان ۱۴۰۰ تا تیر ۱۴۰۱',
    job5Title: 'طراحی وب‌سایت',
    job5Company: 'Rasel Group',
    job5Text: 'طراحی و پیاده‌سازی وب‌سایت با WordPress، HTML و CSS.',
    job5Point1: 'طراحی و پیاده‌سازی صفحه‌های وب با WordPress، HTML و CSS.',
    job5Point2: 'هماهنگ‌سازی ساختار و ظاهر صفحه‌ها با نیازهای محتوایی وب‌سایت.',
    projectsKicker: 'نمونه‌کار و متن‌باز',
    projectsTitle: 'پروژه‌های منتخب',
    productionProject: 'پروژه کاربردی',
    projectCorrespondenceTitle: 'سیستم گردش مکاتبات',
    projectCorrespondenceText: 'سامانه داخلی ثبت، ارسال و پیگیری مکاتبات با اتصال مستقیم به اسکنر، مدیریت ضمیمه، ثبت دریافت، ارجاع و پاسخ. معماری سامانه با Flask، MongoDB، Amazon S3 و OCR در آزمون عملی برای حداقل ۵ میلیون رکورد ارزیابی شده است.',
    projectCorrespondencePoint1: 'پوشش مسیر ثبت، اسکن، دریافت، ارجاع و پاسخ به مکاتبات داخلی.',
    projectCorrespondencePoint2: 'مدیریت فایل‌های ضمیمه و ذخیره‌سازی شیء در کنار داده‌های عملیاتی سامانه.',
    projectDrugTitle: 'پل دراگ استور',
    projectDrugText: 'مجموعه‌ای از سرویس‌های وب برای ثبت آگهی‌های مرتبط با داروخانه‌ها و رزرو وقت مشاوره در حوزه دارویی؛ توسعه‌یافته با Laravel، PHP، MySQL/MariaDB، JavaScript و Bootstrap 5.',
    projectDrugPoint1: 'پیاده‌سازی جریان‌های ثبت آگهی و رزرو وقت در سرویس‌های وب پروژه.',
    projectDrugPoint2: 'کار با لایه‌های داده و رابط کاربری برای ارائه قابلیت‌های کاربردی حوزه دارویی.',
    projectPhonebookTitle: 'اپلیکیشن دفترچه تلفن',
    projectPhonebookText: 'وب‌اپلیکیشن مدیریت مجموعه بزرگ مخاطبان با داده‌های داخلی اختصاصی، صفحه‌بندی و جست‌وجوی پیشرفته برای بازیابی سریع اطلاعات؛ پیاده‌سازی‌شده با Flask و MongoDB.',
    projectPhonebookPoint1: 'مدیریت داده‌های داخلی اختصاصی مخاطبان در کنار امکان مرور صفحه‌ای داده‌ها.',
    projectPhonebookPoint2: 'پیاده‌سازی جست‌وجوی پیشرفته برای یافتن سریع اطلاعات در مجموعه مخاطبان.',
    openSourceTitle: 'پروژه‌های متن‌باز',
    allGithubProjects: 'همه پروژه‌ها در GitHub',
    repo1Text: 'افزونه و ابزارهای مرتبط با اکوسیستم بیجک و WooCommerce.',
    repo2Text: 'پروژه وب چندفناوری با بک‌اند Python و رابط TypeScript/JavaScript.',
    repo3Text: 'ابزار تقویم جلالی با تمرکز بر پردازش تاریخ در Python.',
    repo4Text: 'صفحه وب برای انجام تغییرات روی تصاویر و فایل‌های TIFF.',
    repo5Text: 'پنل مدیریتی تحت وب برای RADIUS با Flask.',
    repo6Text: 'اصلاح خودکار جهت اسناد اسکن‌شده فارسی با OCR.',
    repo7Text: 'فشرده‌سازی و تبدیل تصاویر TIFF چندصفحه‌ای.',
    skillsTitle: 'مهارت‌های فنی',
    coreStackTitle: 'فناوری‌های محوری',
    coreStackNote: 'فناوری‌هایی که در مسیر اصلی توسعه بک‌اند و پروژه‌های وب استفاده کرده‌ام.',
    databaseTitle: 'پایگاه داده و کش',
    infraTitle: 'زیرساخت و ابزارها',
    familiarTitle: 'فناوری‌ها و مفاهیم آشنا',
    educationTitle: 'تحصیلات',
    degree: 'کارشناسی مهندسی کامپیوتر',
    university: 'دانشگاه آزاد اسلامی، واحد پردیس',
    educationDate: 'مهر ۱۴۰۰ تا اکنون',
    certificatesTitle: 'گواهی دوره‌ها',
    mft: 'مجتمع فنی تهران',
    score: 'نمره',
    duration: 'مدت',
    issued: 'صدور',
    javaDuration: '۵۰ ساعت',
    networkDuration: '۳۰ ساعت',
    viewCertificate: 'مشاهده گواهی',
    softSkillsTitle: 'مهارت‌های نرم',
    soft1: 'حل مسئله و تحلیل',
    soft2: 'کار تیمی و مسئولیت‌پذیری',
    soft3: 'مدیریت بحران و استرس',
    soft4: 'برنامه‌ریزی و آموزش',
    soft5: 'خلاقیت و ایده‌پردازی',
    soft6: 'پذیرش بازخورد',
    languageTitle: 'زبان',
    english: 'انگلیسی',
    englishLevel: 'سطح متوسط',
    printSkillsTitle: 'مهارت‌های کلیدی',
    printCoreSkills: 'تمرکز اصلی:',
    printDataSkills: 'داده و ابزارها:'
  },
  en: {
    skip: 'Skip to main content',
    brandName: 'Mohammad Mehdi Karimi',
    brandRole: 'Back-end Developer',
    navAbout: 'About',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navEducation: 'Education',
    exportPdf: 'Export PDF',
    eyebrow: 'BACK-END · API DESIGN · WEB APPLICATIONS',
    name: 'Mohammad Mehdi Karimi',
    title: 'Back-end & Web Application Developer',
    heroSummary: 'Software developer focused on designing and implementing back-end services, REST APIs, and data-driven web applications. My hands-on experience includes Python, PHP, Django, FastAPI, Flask, Laravel, relational and NoSQL databases, Docker, and object storage.',
    locationLabel: 'Location',
    location: 'Tehran, Iran',
    focusLabel: 'Primary focus',
    focus: 'Back-end & Web Applications',
    workTypeLabel: 'Engagement',
    workType: 'Project-based',
    profileCardTitle: 'Contact details',
    telegram: 'Telegram',
    bale: 'Bale',
    messenger: 'Messenger',
    aboutKicker: 'Professional profile',
    aboutTitle: 'Profile',
    aboutText: 'Software developer focused on back-end engineering and web applications. I have used Python and PHP, REST APIs, relational and NoSQL databases, Docker, and object storage in practical projects. My work spans web features and data-driven systems such as correspondence workflows, phonebooks, and document-processing tools. I value careful problem analysis, maintainable code, clear documentation, and effective collaboration.',
    strength1Title: 'Back-end development',
    strength1Text: 'API design, business logic, and web services with Django, FastAPI, Flask, and Laravel.',
    strength2Title: 'Data-driven systems',
    strength2Text: 'PostgreSQL, MySQL, MongoDB, SQL Server, and Redis across varied data needs.',
    strength3Title: 'Project delivery',
    strength3Text: 'Practical use of Docker, Linux, and object storage for project delivery needs.',
    experienceKicker: 'Professional path',
    experienceTitle: 'Work experience',
    tehran: 'Tehran',
    job1Date: 'Jul 2025 — Present',
    job1Title: 'Back-end Team Member',
    job1Company: 'Bijak',
    job1Text: 'Contributing to the team’s back-end products using FastAPI and Django.',
    job1Point1: 'Collaborating on the development and maintenance of FastAPI- and Django-based back-end services.',
    job1Point2: 'Contributing to product features and APIs with Python in a team environment.',
    job2Date: 'Apr 2023 — Dec 2023',
    job2Title: 'Web Application Developer',
    job2Company: 'Pol Darmanegaran Iranian Kohan',
    job2Text: 'Developed web services and user-facing features with Laravel, PHP, JavaScript, and MySQL.',
    job2Point1: 'Developed web services and user-facing features with Laravel, PHP, JavaScript, and MySQL.',
    job2Point2: 'Contributed to interface work with Bootstrap 5 and PWA-oriented parts of the project.',
    job3Date: 'Dec 2022 — Jan 2023',
    job3Title: 'WordPress Web Designer',
    job3Company: 'Kohan Legal Group',
    job3Text: 'Designed and implemented an organizational website using WordPress, HTML5, and CSS3.',
    job3Point1: 'Designed and implemented an organizational website with WordPress, HTML5, and CSS3.',
    job3Point2: 'Organized pages and interface elements around the site’s legal and organizational content.',
    job4Date: 'Nov 2021 — Sep 2022',
    job4Title: 'Web Designer & SEO',
    job4Company: 'DataVision Data Recovery',
    job4Text: 'Built a website for hard-drive repair and data-recovery services and worked on website content optimization.',
    job4Point1: 'Designed a data-recovery services website with WordPress, PHP, and JavaScript.',
    job4Point2: 'Contributed to on-page content optimization for stronger search visibility.',
    job5Date: 'Nov 2021 — Jul 2022',
    job5Title: 'Web Designer',
    job5Company: 'Rasel Group',
    job5Text: 'Designed and implemented a website using WordPress, HTML, and CSS.',
    job5Point1: 'Designed and implemented website pages with WordPress, HTML, and CSS.',
    job5Point2: 'Aligned page structure and presentation with the site’s content requirements.',
    projectsKicker: 'Portfolio & open source',
    projectsTitle: 'Selected projects',
    productionProject: 'Applied project',
    projectCorrespondenceTitle: 'Correspondence Workflow System',
    projectCorrespondenceText: 'An internal system for registering, sending, and tracking correspondence with direct scanner integration, attachment handling, receipt registration, forwarding, and replies. Its Flask, MongoDB, Amazon S3, and OCR architecture was evaluated in practical testing for at least five million records.',
    projectCorrespondencePoint1: 'Covers the internal correspondence flow from registration and scanning through receipt, forwarding, and reply.',
    projectCorrespondencePoint2: 'Handles attachments and object storage alongside the system’s operational data.',
    projectDrugTitle: 'Pol Drug Store',
    projectDrugText: 'A set of web services for pharmacy-related advertisements and pharmaceutical consultation bookings, built with Laravel, PHP, MySQL/MariaDB, JavaScript, and Bootstrap 5.',
    projectDrugPoint1: 'Implemented advertisement publishing and appointment-booking flows for the project’s web services.',
    projectDrugPoint2: 'Worked across the data and interface layers for domain-specific user features.',
    projectPhonebookTitle: 'Phonebook Application',
    projectPhonebookText: 'A web application for managing a large contact dataset with custom internal fields, pagination, and advanced search for fast retrieval, implemented with Flask and MongoDB.',
    projectPhonebookPoint1: 'Managed custom internal contact fields alongside paginated data browsing.',
    projectPhonebookPoint2: 'Implemented advanced search for rapid retrieval within the contact dataset.',
    openSourceTitle: 'Open-source projects',
    allGithubProjects: 'All projects on GitHub',
    repo1Text: 'Plugin and utilities for the Bijak and WooCommerce ecosystem.',
    repo2Text: 'A multi-technology web project with a Python back end and TypeScript/JavaScript front end.',
    repo3Text: 'A Jalali calendar utility focused on date processing in Python.',
    repo4Text: 'A web page for editing images and TIFF files.',
    repo5Text: 'A Flask-based web administration panel for RADIUS.',
    repo6Text: 'Automatic orientation correction for Persian scanned documents using OCR.',
    repo7Text: 'Compression and conversion utility for multi-page TIFF images.',
    skillsTitle: 'Technical skills',
    coreStackTitle: 'Core stack',
    coreStackNote: 'Technologies used across my primary back-end and web-project work.',
    databaseTitle: 'Databases & caching',
    infraTitle: 'Infrastructure & tools',
    familiarTitle: 'Familiar technologies & concepts',
    educationTitle: 'Education',
    degree: 'B.Sc. in Computer Engineering',
    university: 'Islamic Azad University, Pardis Branch',
    educationDate: 'Sep 2021 — Present',
    certificatesTitle: 'Training certificates',
    mft: 'Tehran Institute of Technology',
    score: 'Score',
    duration: 'Duration',
    issued: 'Issued',
    javaDuration: '50 hours',
    networkDuration: '30 hours',
    viewCertificate: 'View certificate',
    softSkillsTitle: 'Soft skills',
    soft1: 'Problem solving & analysis',
    soft2: 'Teamwork & accountability',
    soft3: 'Crisis and stress management',
    soft4: 'Planning & teaching',
    soft5: 'Creativity & ideation',
    soft6: 'Receptive to feedback',
    languageTitle: 'Language',
    english: 'English',
    englishLevel: 'Intermediate',
    printSkillsTitle: 'Key skills',
    printCoreSkills: 'Core stack:',
    printDataSkills: 'Data & tooling:'
  }
};

const html = document.documentElement;
const languageButtons = document.querySelectorAll('[data-lang]');
const printButton = document.getElementById('printButton');
const profileImage = document.getElementById('profileImage');
const printProfileImage = document.getElementById('printProfileImage');
const certificateDialog = document.getElementById('certificateDialog');
const certificateImage = document.getElementById('certificateImage');
const certificateDialogTitle = document.getElementById('certificateDialogTitle');
const closeDialog = document.getElementById('closeDialog');

const certificateData = {
  java: {
    src: 'assets/certificates/java-se-8.png',
    fa: { title: 'گواهی Java SE 8 Programming', alt: 'تصویر گواهی دوره Java SE 8 Programming محمد مهدی کریمی' },
    en: { title: 'Java SE 8 Programming Certificate', alt: 'Java SE 8 Programming training certificate for Mohammad Mehdi Karimi' }
  },
  network: {
    src: 'assets/certificates/network-plus.png',
    fa: { title: 'گواهی Network+', alt: 'تصویر گواهی دوره Network+ محمد مهدی کریمی' },
    en: { title: 'Network+ Certificate', alt: 'Network+ training certificate for Mohammad Mehdi Karimi' }
  }
};

function setLanguage(language, persist = true) {
  const lang = translations[language] ? language : 'fa';
  const dictionary = translations[lang];

  html.lang = lang;
  html.dir = lang === 'fa' ? 'rtl' : 'ltr';
  document.title = lang === 'fa'
    ? 'محمد مهدی کریمی | رزومه'
    : 'Mohammad Mehdi Karimi | Resume';

  document.querySelector('meta[name="description"]').content = lang === 'fa'
    ? 'رزومه محمد مهدی کریمی، توسعه‌دهنده نرم‌افزار با تمرکز بر بک‌اند، API و وب‌اپلیکیشن‌ها.'
    : 'Resume of Mohammad Mehdi Karimi, a software developer focused on back-end engineering, APIs, and web applications.';

  const portraitAlt = lang === 'fa'
    ? 'تصویر پرسنلی محمد مهدی کریمی'
    : 'Portrait of Mohammad Mehdi Karimi';
  profileImage.alt = portraitAlt;
  printProfileImage.alt = portraitAlt;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.textContent = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  document.querySelector('.topbar').setAttribute('aria-label', lang === 'fa' ? 'نوار ابزار رزومه' : 'Resume toolbar');
  document.querySelector('.desktop-nav').setAttribute('aria-label', lang === 'fa' ? 'بخش‌های رزومه' : 'Resume sections');
  document.querySelector('.mobile-nav').setAttribute('aria-label', lang === 'fa' ? 'دسترسی سریع به بخش‌های رزومه' : 'Quick navigation to resume sections');
  document.querySelector('.language-switch').setAttribute('aria-label', lang === 'fa' ? 'انتخاب زبان' : 'Select language');
  printButton.setAttribute('aria-label', dictionary.exportPdf);
  printButton.setAttribute('title', dictionary.exportPdf);
  document.querySelector('.level-dots').setAttribute('aria-label', lang === 'fa' ? 'سه از پنج' : 'Three out of five');
  closeDialog.setAttribute('aria-label', lang === 'fa' ? 'بستن' : 'Close');

  if (persist) {
    try { localStorage.setItem('resume-language', lang); } catch (_) { /* Storage may be unavailable. */ }
  }
}

function waitForImage(image) {
  if (!image.src) return Promise.resolve();
  if (image.complete) {
    if (typeof image.decode === 'function') return image.decode().catch(() => undefined);
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    image.addEventListener('load', resolve, { once: true });
    image.addEventListener('error', resolve, { once: true });
  });
}

async function waitForPrintResources() {
  const fontsReady = document.fonts && document.fonts.ready
    ? document.fonts.ready.catch(() => undefined)
    : Promise.resolve();
  const imagesReady = Array.from(document.images).map(waitForImage);
  await Promise.all([fontsReady, ...imagesReady]);
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

let printInProgress = false;
printButton.addEventListener('click', async () => {
  if (printInProgress) return;

  printInProgress = true;
  printButton.disabled = true;
  const originalTitle = document.title;
  const lang = html.lang;
  const printTitle = lang === 'fa'
    ? 'رزومه محمد مهدی کریمی'
    : 'Mohammad Mehdi Karimi - Resume';
  let restored = false;

  const restore = () => {
    if (restored) return;
    restored = true;
    document.title = originalTitle;
    printButton.disabled = false;
    printInProgress = false;
  };

  try {
    await waitForPrintResources();
    document.title = printTitle;
    window.addEventListener('afterprint', restore, { once: true });
    window.print();
    window.setTimeout(restore, 1500);
  } catch (_) {
    restore();
    window.print();
  }
});

document.querySelectorAll('[data-certificate]').forEach((button) => {
  button.addEventListener('click', () => {
    const item = certificateData[button.dataset.certificate];
    const language = html.lang === 'en' ? 'en' : 'fa';
    certificateImage.src = item.src;
    certificateImage.alt = item[language].alt;
    certificateDialogTitle.textContent = item[language].title;
    if (typeof certificateDialog.showModal === 'function') {
      certificateDialog.showModal();
    } else {
      window.open(item.src, '_blank', 'noopener,noreferrer');
    }
  });
});

closeDialog.addEventListener('click', () => certificateDialog.close());
certificateDialog.addEventListener('click', (event) => {
  if (event.target === certificateDialog) certificateDialog.close();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && certificateDialog.open) certificateDialog.close();
});

let initialLanguage = 'fa';
try {
  const saved = localStorage.getItem('resume-language');
  if (saved === 'fa' || saved === 'en') initialLanguage = saved;
} catch (_) { /* Use the default language. */ }
setLanguage(initialLanguage, false);
