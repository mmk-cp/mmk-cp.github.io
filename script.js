'use strict';

const translations = {
  fa: {
    skip: 'پرش به محتوای اصلی',
    brandName: 'محمد مهدی کریمی',
    brandRole: 'توسعه‌دهنده بک‌اند، DevOps و WordPress',
    navAbout: 'درباره من',
    navExperience: 'سوابق',
    navProjects: 'پروژه‌ها',
    navSkills: 'مهارت‌ها',
    navEducation: 'تحصیلات',
    exportPdf: 'خروجی PDF',
    eyebrow: 'BACK-END · DEVOPS · WORDPRESS',
    name: 'محمد مهدی کریمی',
    title: 'توسعه‌دهنده بک‌اند، DevOps و WordPress',
    heroSummary: 'توسعه‌دهنده نرم‌افزار با تمرکز بر بک‌اند، عملیات و تحویل سرویس‌های وب، و راهکارهای وردپرسی. با Python و PHP، Django، FastAPI، Flask و Laravel، APIهای REST، پایگاه‌های دادهٔ رابطه‌ای و NoSQL، Docker، Linux و Object Storage کار کرده‌ام. علاوه بر وب‌اپلیکیشن‌های داده‌محور، در طراحی و توسعهٔ وب‌سایت‌های WordPress و افزونه‌های WordPress/WooCommerce نیز فعال هستم.',
    locationLabel: 'موقعیت',
    location: 'تهران، ایران',
    focusLabel: 'تمرکز اصلی',
    focus: 'بک‌اند، DevOps و WordPress',
    workTypeLabel: 'نوع همکاری',
    workType: 'پروژه‌ای',
    profileCardTitle: 'اطلاعات تماس',
    phoneDisplay: '09009993232',
    telegram: 'تلگرام',
    bale: 'بله',
    whatsapp: 'واتساپ',
    messenger: 'پیام‌رسان',
    aboutTitle: 'درباره من',
    aboutText: 'توسعه‌دهنده نرم‌افزار با تجربه در ساخت و نگه‌داری سرویس‌های بک‌اند، APIهای REST و وب‌اپلیکیشن‌های داده‌محور. با Python و PHP و فریم‌ورک‌های Django، FastAPI، Flask و Laravel کار می‌کنم و تجربه استفاده از پایگاه‌های دادهٔ رابطه‌ای و NoSQL، Redis، مدیریت فایل و Object Storage را دارم. در مسئولیت‌های DevOps، نیازهای اجرای پروژه را با Docker، Linux، Git و ابزارهای زیرساختی پیگیری می‌کنم. در کنار این مسیر، طراحی و توسعهٔ وب‌سایت‌های WordPress شرکت و افزونه‌های WordPress/WooCommerce نیز بخشی از کار من است. در تحویل پروژه بر کد قابل نگه‌داری، مستندسازی روشن و همکاری شفاف تیمی تمرکز دارم.',
    strength1Title: 'بک‌اند و API',
    strength1Text: 'طراحی و توسعهٔ منطق کسب‌وکار، سرویس‌های وب و APIهای REST با Python و PHP؛ تجربهٔ عملی با Django، FastAPI، Flask و Laravel.',
    strength2Title: 'داده و ذخیره‌سازی',
    strength2Text: 'کار با PostgreSQL، MySQL/MariaDB، MongoDB، SQL Server و Redis برای داده و کش؛ به‌همراه مدیریت فایل در Amazon S3 و Object Storage.',
    strength3Title: 'DevOps و اجرای سرویس',
    strength3Text: 'استفاده از Docker، Linux و Git برای نیازهای پروژه، آماده‌سازی محیط و پشتیبانی از اجرای سرویس‌ها.',
    strength4Title: 'WordPress و WooCommerce',
    strength4Text: 'طراحی سایت، توسعه و سفارشی‌سازی افزونه‌های WordPress و کار با WooCommerce با PHP و JavaScript.',
    experienceTitle: 'سوابق شغلی',
    tehran: 'تهران',
    job1Date: 'تیر ۱۴۰۴ تا اکنون',
    job1Title: 'توسعه‌دهنده بک‌اند، DevOps و WordPress',
    job1Company: 'بیجک',
    job1Text: 'همکاری در توسعه و نگه‌داری محصولات بیجک؛ شامل سرویس‌های بک‌اند Python، مسئولیت‌های DevOps موردنیاز پروژه، و طراحی و توسعهٔ وب‌سایت و افزونه‌های WordPress/WooCommerce شرکت.',
    job1Point1: 'توسعه و نگه‌داری سرویس‌های بک‌اند و APIهای محصولات با Python، FastAPI و Django.',
    job1Point2: 'پیگیری نیازهای DevOps پروژه با Docker، Linux، Git و ابزارهای مرتبط با اجرای سرویس‌ها.',
    job1Point3: 'طراحی و توسعهٔ وب‌سایت وردپرسی شرکت و برنامه‌نویسی افزونه‌های WordPress/WooCommerce.',
    jobNewDate: 'آذر ۱۴۰۲ تا خرداد ۱۴۰۴',
    jobNewTitle: 'طراحی و برنامه‌نویسی وب‌اپلیکیشن',
    jobNewText: 'توسعهٔ سامانه‌های داده‌محور، از جمله گردش مکاتبات و اپلیکیشن دفترچه تلفن، با Flask و Python و کار با MongoDB، MySQL و SQL Server برای داده‌های حجیم.',
    jobNewPoint1: 'پیاده‌سازی سرویس‌ها و قابلیت‌های وب با Flask و Python برای سامانه‌های داده‌محور.',
    jobNewPoint2: 'کار با MongoDB، MySQL و SQL Server برای ذخیره‌سازی، جست‌وجو و مدیریت داده.',
    jobNewPoint3: 'مشارکت در طراحی راهکارهای قابل استفاده برای مجموعه‌های بزرگ داده و سناریوهای Big Data.',
    job2Date: 'فروردین ۱۴۰۲ تا آذر ۱۴۰۲',
    job2Title: 'طراحی و برنامه‌نویسی وب‌اپلیکیشن',
    job2Company: 'پل درمانگران ایرانیان کهن',
    job2Text: 'توسعه سرویس‌های وب و رابط‌های کاربردی با Laravel، PHP، JavaScript و MySQL.',
    job2Point1: 'توسعه سرویس‌های وب و قابلیت‌های کاربری با Laravel، PHP، JavaScript و MySQL.',
    job2Point2: 'مشارکت در طراحی رابط با Bootstrap 5 و آماده‌سازی تجربه PWA در بخش‌های پروژه.',
    job3Date: 'آذر ۱۴۰۱ تا دی ۱۴۰۱',
    job3Title: 'طراح وب‌سایت وردپرس',
    job3Company: 'گروه حقوقی کهن',
    job3Text: 'طراحی و پیاده‌سازی وب‌سایت سازمانی گروه حقوقی با WordPress، HTML5 و CSS3؛ از ساختار صفحه‌ها تا ظاهر نهایی.',
    job3Point1: 'طراحی ساختار صفحات و پیاده‌سازی رابط وب‌سایت سازمانی با WordPress، HTML5 و CSS3.',
    job3Point2: 'سازمان‌دهی صفحه‌ها و اجزای رابط متناسب با محتوای حقوقی و سازمانی سایت.',
    job4Date: 'آبان ۱۴۰۰ تا شهریور ۱۴۰۱',
    job4Title: 'طراح سایت و سئو',
    job4Company: 'ریکاوری اطلاعات دیتاویژن',
    job4Text: 'طراحی وب‌سایت خدمات تعمیر و بازیابی اطلاعات و همکاری در بهینه‌سازی ساختار و محتوای صفحات.',
    job4Point1: 'طراحی و پیاده‌سازی سایت خدمات بازیابی داده با WordPress، PHP و JavaScript.',
    job4Point2: 'بهینه‌سازی محتوای صفحات و ساختار ارائهٔ خدمات برای دیده‌شدن بهتر در موتورهای جست‌وجو.',
    job5Date: 'آبان ۱۴۰۰ تا تیر ۱۴۰۱',
    job5Title: 'طراحی وب‌سایت',
    job5Company: 'Rasel Group',
    job5Text: 'طراحی و پیاده‌سازی وب‌سایت با WordPress، HTML و CSS و هماهنگ‌سازی ظاهر صفحات با نیازهای محتوایی.',
    job5Point1: 'طراحی و پیاده‌سازی صفحه‌های وب با WordPress، HTML و CSS.',
    job5Point2: 'هماهنگ‌سازی ساختار و ظاهر صفحه‌ها با نیازهای محتوایی وب‌سایت.',
    projectsKicker: 'پروژه‌های کاربردی و متن‌باز',
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
    projectPhonebookText: 'وب‌اپلیکیشن مدیریت مجموعه بزرگ مخاطبان با داده‌های داخلی اختصاصی، صفحه‌بندی و جست‌وجوی پیشرفته برای بازیابی سریع اطلاعات؛ پیاده‌سازی‌شده با Flask و MongoDB و مناسب برای سناریوهای حدود ۱۰ میلیون رکورد.',
    projectPhonebookPoint1: 'مدیریت داده‌های داخلی اختصاصی مخاطبان در کنار امکان مرور صفحه‌ای داده‌ها.',
    projectPhonebookPoint2: 'پیاده‌سازی جست‌وجوی پیشرفته برای یافتن سریع اطلاعات در مجموعه مخاطبان.',
    projectPhonebookPoint3: 'طراحی‌شده برای کار با مجموعه‌های پرحجم و سناریوهای نزدیک به ۱۰ میلیون رکورد.',
    openSourceTitle: 'پروژه‌های متن‌باز',
    allGithubProjects: 'همه پروژه‌ها در GitHub',
    repo1Text: 'افزونه و ابزارهای WordPress/WooCommerce برای اکوسیستم بیجک.',
    repo2Text: 'پروژه وب چندفناوری با بک‌اند Python، رابط TypeScript/JavaScript و محیط توسعه مبتنی بر Docker.',
    repo3Text: 'ابزار Python برای کار با تاریخ‌ها و تقویم جلالی.',
    repo4Text: 'ابزار تحت وب برای انجام تغییرات روی تصویر و فایل‌های TIFF.',
    repo5Text: 'پنل مدیریتی تحت وب مبتنی بر Flask برای RADIUS.',
    repo6Text: 'ابزار Python با کمک OCR برای تشخیص و اصلاح جهت اسناد اسکن‌شده فارسی.',
    repo7Text: 'ابزار Python برای فشرده‌سازی و تبدیل تصاویر TIFF چندصفحه‌ای.',
    skillsTitle: 'توانمندی‌های فنی',
    coreStackTitle: 'بک‌اند و API',
    coreStackNote: 'توسعهٔ منطق کسب‌وکار، سرویس‌های وب و APIهای REST با Python و PHP و فریم‌ورک‌های Django، FastAPI، Flask و Laravel.',
    databaseTitle: 'داده، کش و ذخیره‌سازی',
    databaseNote: 'تجربهٔ کار با پایگاه‌های دادهٔ رابطه‌ای و NoSQL، Redis برای کش، و Amazon S3/Object Storage برای مدیریت فایل.',
    infraTitle: 'DevOps و ابزارهای پروژه',
    infraNote: 'استفاده از Docker، Linux و Git برای نیازهای توسعه، اجرای سرویس‌ها و نگه‌داری پروژه‌ها.',
    wordpressTitle: 'WordPress و توسعهٔ وب',
    wordpressNote: 'طراحی و توسعهٔ سایت‌های WordPress و افزونه‌های WordPress/WooCommerce با PHP، JavaScript، HTML و CSS.',
    familiarTitle: 'فناوری‌ها و مفاهیم آشنا',
    familiarNote: 'آشنایی با ابزارها و مفاهیمی که در آموزش، پروژه‌ها یا همکاری تیمی با آن‌ها کار کرده‌ام؛ سطح تسلط در همهٔ آن‌ها یکسان نیست.',
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
    printDataSkills: 'داده و ابزارها:',
    printWebSkills: 'وب و WordPress:'
  },
  en: {
    skip: 'Skip to main content',
    brandName: 'Mohammad Mehdi Karimi',
    brandRole: 'Back-end, DevOps & WordPress Developer',
    navAbout: 'About',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navEducation: 'Education',
    exportPdf: 'Export PDF',
    eyebrow: 'BACK-END · DEVOPS · WORDPRESS',
    name: 'Mohammad Mehdi Karimi',
    title: 'Back-end, DevOps & WordPress Developer',
    heroSummary: 'Software developer focused on back-end engineering, web-service delivery and maintenance, and WordPress solutions. I have worked with Python and PHP; Django, FastAPI, Flask, and Laravel; REST APIs; relational and NoSQL databases; Docker, Linux, and object storage. Alongside data-driven web applications, I contribute to the design and development of WordPress websites and WordPress/WooCommerce plugins.',
    locationLabel: 'Location',
    location: 'Tehran, Iran',
    focusLabel: 'Primary focus',
    focus: 'Back-end · DevOps · WordPress',
    workTypeLabel: 'Engagement',
    workType: 'Project-based',
    profileCardTitle: 'Contact details',
    phoneDisplay: '+98 900 999 3232',
    telegram: 'Telegram',
    bale: 'Bale',
    whatsapp: 'WhatsApp',
    messenger: 'Messenger',
    aboutTitle: 'About me',
    aboutText: 'Software developer with experience building and maintaining back-end services, REST APIs, and data-driven web applications. I work with Python and PHP and the Django, FastAPI, Flask, and Laravel frameworks, and have used relational and NoSQL databases, Redis, file workflows, and object storage. In DevOps responsibilities, I support project runtime needs with Docker, Linux, Git, and infrastructure tooling. I also design and develop the company’s WordPress websites and WordPress/WooCommerce plugins. I focus on maintainable code, clear documentation, and transparent collaboration when delivering projects.',
    strength1Title: 'Back-end & APIs',
    strength1Text: 'Designing and developing business logic, web services, and REST APIs with Python and PHP; hands-on experience with Django, FastAPI, Flask, and Laravel.',
    strength2Title: 'Data & storage',
    strength2Text: 'Working with PostgreSQL, MySQL/MariaDB, MongoDB, SQL Server, and Redis for data and caching needs, plus file handling with Amazon S3 and object storage.',
    strength3Title: 'DevOps & service runtime',
    strength3Text: 'Using Docker, Linux, and Git for project needs, environment preparation, and service runtime support.',
    strength4Title: 'WordPress & WooCommerce',
    strength4Text: 'Designing websites and developing and customizing WordPress plugins and WooCommerce features with PHP and JavaScript.',
    experienceTitle: 'Work experience',
    tehran: 'Tehran',
    job1Date: 'Jul 2025 — Present',
    job1Title: 'Back-end, DevOps & WordPress Developer',
    job1Company: 'Bijak',
    job1Text: 'Contributing to the development and maintenance of Bijak products, including Python back-end services, project DevOps responsibilities, and the design and development of the company’s WordPress website and WordPress/WooCommerce plugins.',
    job1Point1: 'Developing and maintaining product back-end services and APIs with Python, FastAPI, and Django.',
    job1Point2: 'Supporting project DevOps needs with Docker, Linux, Git, and tooling related to service runtime.',
    job1Point3: 'Designing and developing the company’s WordPress website and WordPress/WooCommerce plugins.',
    jobNewDate: 'Dec 2023 — Jun 2025',
    jobNewTitle: 'Web Application Developer',
    jobNewText: 'Developed data-driven systems, including a correspondence workflow and a phonebook application, with Flask and Python, using MongoDB, MySQL, and SQL Server for high-volume data.',
    jobNewPoint1: 'Implemented web services and application features with Flask and Python for data-driven systems.',
    jobNewPoint2: 'Worked with MongoDB, MySQL, and SQL Server for data storage, search, and management.',
    jobNewPoint3: 'Contributed to solutions designed for large datasets and Big Data-oriented scenarios.',
    job2Date: 'Apr 2023 — Dec 2023',
    job2Title: 'Web Application Developer',
    job2Company: 'Pol Darmanegaran Iranian Kohan',
    job2Text: 'Developed web services and user-facing features with Laravel, PHP, JavaScript, and MySQL.',
    job2Point1: 'Developed web services and user-facing features with Laravel, PHP, JavaScript, and MySQL.',
    job2Point2: 'Contributed to interface work with Bootstrap 5 and PWA-oriented parts of the project.',
    job3Date: 'Dec 2022 — Jan 2023',
    job3Title: 'WordPress Web Designer',
    job3Company: 'Kohan Legal Group',
    job3Text: 'Designed and implemented an organizational website for a legal group with WordPress, HTML5, and CSS3, from page structure to final presentation.',
    job3Point1: 'Designed the page structure and implemented the website interface with WordPress, HTML5, and CSS3.',
    job3Point2: 'Organized pages and interface elements around the site’s legal and organizational content.',
    job4Date: 'Nov 2021 — Sep 2022',
    job4Title: 'Web Designer & SEO',
    job4Company: 'DataVision Data Recovery',
    job4Text: 'Designed a website for data-recovery services and contributed to the structure and content optimization of its pages.',
    job4Point1: 'Designed and implemented a data-recovery services website with WordPress, PHP, and JavaScript.',
    job4Point2: 'Optimized page content and service presentation for stronger search visibility.',
    job5Date: 'Nov 2021 — Jul 2022',
    job5Title: 'Web Designer',
    job5Company: 'Rasel Group',
    job5Text: 'Designed and implemented a WordPress website with HTML and CSS, aligning page presentation with its content needs.',
    job5Point1: 'Designed and implemented website pages with WordPress, HTML, and CSS.',
    job5Point2: 'Aligned page structure and presentation with the site’s content requirements.',
    projectsKicker: 'Applied projects & open source',
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
    projectPhonebookText: 'A web application for managing a large contact dataset with custom internal fields, pagination, and advanced search for fast retrieval, implemented with Flask and MongoDB and suited to scenarios of around ten million records.',
    projectPhonebookPoint1: 'Managed custom internal contact fields alongside paginated data browsing.',
    projectPhonebookPoint2: 'Implemented advanced search for rapid retrieval within the contact dataset.',
    projectPhonebookPoint3: 'Designed for high-volume datasets and scenarios approaching ten million records.',
    openSourceTitle: 'Open-source projects',
    allGithubProjects: 'All projects on GitHub',
    repo1Text: 'WordPress/WooCommerce plugin and utilities for the Bijak ecosystem.',
    repo2Text: 'A multi-technology web project with a Python back end, TypeScript/JavaScript front end, and Docker-based development setup.',
    repo3Text: 'A Python utility for working with Jalali calendar dates.',
    repo4Text: 'A web utility for image and TIFF-file operations.',
    repo5Text: 'A Flask-based web administration panel for RADIUS.',
    repo6Text: 'An OCR-assisted Python utility for detecting and correcting the orientation of Persian scanned documents.',
    repo7Text: 'A Python utility for compressing and converting multi-page TIFF images.',
    skillsTitle: 'Technical capabilities',
    coreStackTitle: 'Back-end & APIs',
    coreStackNote: 'Building business logic, web services, and REST APIs with Python and PHP using Django, FastAPI, Flask, and Laravel.',
    databaseTitle: 'Data, caching & storage',
    databaseNote: 'Experience with relational and NoSQL databases, Redis for caching, and Amazon S3/object storage for file handling.',
    infraTitle: 'DevOps & project tools',
    infraNote: 'Using Docker, Linux, and Git for development, service runtime needs, and project maintenance.',
    wordpressTitle: 'WordPress & web development',
    wordpressNote: 'Designing and developing WordPress websites and WordPress/WooCommerce plugins with PHP, JavaScript, HTML, and CSS.',
    familiarTitle: 'Familiar technologies & concepts',
    familiarNote: 'Familiarity with tools and concepts encountered through learning, projects, or team work; proficiency is not equal across all of them.',
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
    printDataSkills: 'Data & tooling:',
    printWebSkills: 'Web & WordPress:'
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
    ? 'رزومه محمد مهدی کریمی، توسعه‌دهنده نرم‌افزار با تمرکز بر بک‌اند، DevOps و WordPress. تماس: 09009993232'
    : 'Resume of Mohammad Mehdi Karimi, a software developer focused on back-end engineering, DevOps, and WordPress. Contact: +98 900 999 3232';

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
