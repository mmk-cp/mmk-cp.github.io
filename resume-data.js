'use strict';

/* Central resume data — single source for fa/en web + print.
   Dates are stored as ISO (Gregorian) strings and converted to
   Jalali at render time via jalali.js. */

const resumeData = {
  profile: {
    name: { fa: 'محمد مهدی کریمی', en: 'Mohammad Mahdi Karimi' },
    title: { fa: 'توسعه‌دهنده بک‌اند · DevOps · Agentic AI', en: 'Backend Developer · DevOps · Agentic AI' },
    eyebrow: { fa: 'BACKEND DEVELOPMENT · DEVOPS · AGENTIC AI', en: 'BACKEND DEVELOPMENT · DEVOPS · AGENTIC AI' },
    techLine: 'Python · FastAPI · Django · Docker · Linux · LLM Systems',
    heroSummary: {
      fa: 'توسعه‌دهنده نرم‌افزار با تمرکز بر سرویس‌های بک‌اند، زیرساخت و استقرار، APIهای مقیاس‌پذیر و عامل‌های هوشمند مبتنی بر LLM. تجربه عملی در طراحی و نگه‌داری سرویس‌های production با Python، کار با محیط Linux و کانتینرهای Docker، و پیاده‌سازی گردش‌کارهای چندمرحله‌ای با LangGraph و OpenAI. در کنار این محورها، توسعه و سفارشی‌سازی افزونه‌های WordPress و WooCommerce و یکپارچه‌سازی آن‌ها با سرویس‌های داخلی و خارجی نیز بخشی از تجربهٔ حرفه‌ای من است.',
      en: 'Backend-focused developer working across API development, production infrastructure, service deployment, and LLM-powered agentic systems. Hands-on experience designing and maintaining production services with Python, operating in Linux environments, containerizing with Docker, and building multi-step agentic workflows with LangGraph and OpenAI. WordPress and WooCommerce plugin development and integration with internal and external services complement this core work.'
    },
    location: { fa: 'تهران، ایران', en: 'Tehran, Iran' },
    focus: { fa: 'بک‌اند · DevOps · Agentic AI', en: 'Backend · DevOps · Agentic AI' },
    workType: { fa: 'پروژه‌ای', en: 'Project-based' },
    email: 'mail@mmk-cp.ir',
    website: 'https://mmk-cp.ir',
    github: 'https://github.com/mmk-cp',
    telegram: 'https://t.me/mmk_cp',
    bale: 'https://ble.ir/mmk_cp'
  },

  about: {
    text: {
      fa: 'توسعه‌دهنده نرم‌افزار با تجربه در طراحی و نگه‌داری سرویس‌های بک‌اند، APIهای REST و وب‌اپلیکیشن‌های داده‌محور با Python، PHP، Django، FastAPI، Flask و Laravel. در پروژه‌های Agentic AI با OpenAI، LangChain و LangGraph گردش‌کارهای چندمرحله‌ای دارای human-in-the-loop، فراخوانی ابزار و اتصال به APIهای بیرونی پیاده‌سازی کرده‌ام. در حوزهٔ زیرساخت با Docker، Linux و Git محیط اجرا را آماده می‌کنم و سرویس‌ها را در چرخهٔ تحویل نگه می‌دارم؛ توسعهٔ سایت و افزونه‌های WordPress و WooCommerce نیز به‌عنوان تجربهٔ مکمل در کنار کار اصلی بک‌اند قرار دارد. در تحویل پروژه بر حل دقیق مسئله، معماری قابل نگه‌داری و مستندسازی روشن تمرکز دارم.',
      en: 'Software developer focused on designing and maintaining backend services, REST APIs, and data-driven web applications with Python, PHP, Django, FastAPI, Flask, and Laravel. In Agentic AI projects I have used OpenAI, LangChain, and LangGraph to implement multi-step workflows with human-in-the-loop controls, tool calling, and external API integrations. On the infrastructure side I work with Docker, Linux, and Git to prepare runtime environments and keep services running through the delivery cycle, while WordPress and WooCommerce site and plugin development sits alongside the core backend work as complementary experience. I focus on precise problem solving, maintainable architecture, and clear documentation.'
    },
    strengths: [
      {
        id: 'backend', icon: 'API',
        title: { fa: 'توسعه بک‌اند و API', en: 'Backend & APIs' },
        text: { fa: 'طراحی API، منطق کسب‌وکار و سرویس‌های وب با Django، FastAPI، Flask و Laravel.', en: 'Designing business logic, web services, and REST APIs with Django, FastAPI, Flask, and Laravel.' }
      },
      {
        id: 'data', icon: 'DATA',
        title: { fa: 'داده و ذخیره‌سازی', en: 'Data & Storage' },
        text: { fa: 'کار با PostgreSQL، MySQL/MariaDB، MongoDB، SQL Server و Redis؛ مدیریت فایل در Amazon S3 و Object Storage.', en: 'Working with PostgreSQL, MySQL/MariaDB, MongoDB, SQL Server, and Redis; file handling with Amazon S3 and object storage.' }
      },
      {
        id: 'infra', icon: 'OPS',
        title: { fa: 'زیرساخت و استقرار', en: 'Infrastructure & Deployment' },
        text: { fa: 'کار عملی با Docker و Linux، آماده‌سازی محیط اجرا، پشتیبانی از چرخهٔ تحویل و تجربه راه‌اندازی VoIP با Asterisk، Issabel و SIP.', en: 'Hands-on work with Docker and Linux, runtime preparation, delivery-cycle support, and VoIP infrastructure experience with Asterisk, Issabel, and SIP.' }
      },
      {
        id: 'wordpress', icon: 'WP',
        title: { fa: 'WordPress و WooCommerce', en: 'WordPress & WooCommerce' },
        text: { fa: 'طراحی سایت و توسعهٔ افزونه‌های WordPress/WooCommerce؛ سفارشی‌سازی تجربهٔ کاربری و یکپارچه‌سازی با سرویس‌های داخلی.', en: 'Designing sites and developing WordPress/WooCommerce plugins; customizing user experience and integrating with internal services.' }
      }
    ]
  },

  experience: {
    primary: [
      {
        id: 'bijak',
        title: { fa: 'توسعه‌دهنده بک‌اند، DevOps و Agentic AI', en: 'Backend Developer · DevOps · Agentic AI' },
        company: { fa: 'بیجک', en: 'Bijak' },
        companyUrl: 'https://bijak.ir/',
        location: { fa: 'تهران', en: 'Tehran' },
        startDate: '2025-07',
        endDate: null,
        summary: {
          fa: 'همکاری در توسعه و نگه‌داری محصولات بیجک؛ شامل سرویس‌های بک‌اند Python، مسئولیت‌های DevOps و پیاده‌سازی سامانه‌های Agentic AI، و طراحی و توسعهٔ وب‌سایت و افزونه‌های WordPress/WooCommerce شرکت.',
          en: 'Contributing to Bijak products across Python backend services, DevOps responsibilities, Agentic AI systems, and the design and development of the company website and WordPress/WooCommerce plugins.'
        },
        bullets: [
          { fa: 'توسعه و نگه‌داری سرویس‌ها و APIهای بک‌اند محصولات با Python، FastAPI و Django در محیط production.', en: 'Developing and maintaining product backend services and APIs with Python, FastAPI, and Django in production.' },
          { fa: 'پشتیبانی از نیازهای DevOps پروژه با Docker، Linux، Git و ابزارهای مرتبط با کانتینرسازی و اجرای سرویس‌ها.', en: 'Supporting project DevOps needs with Docker, Linux, Git, and tooling for containerization and service runtime.' },
          { fa: 'طراحی و توسعهٔ وب‌سایت شرکت و افزونه‌های WordPress/WooCommerce با یکپارچه‌سازی سرویس‌های داخلی و خارجی.', en: 'Designing and developing the company website and WordPress/WooCommerce plugins integrated with internal and external services.' }
        ],
        tags: ['FastAPI', 'Django', 'Python', 'Docker', 'Linux', 'Git', 'WordPress', 'WooCommerce', 'PHP']
      },
      {
        id: 'data-driven',
        title: { fa: 'توسعه‌دهنده وب‌اپلیکیشن', en: 'Web Application Developer' },
        company: null,
        location: { fa: 'تهران', en: 'Tehran' },
        startDate: '2023-12',
        endDate: '2025-06',
        summary: {
          fa: 'توسعهٔ سامانه‌های داده‌محور از جمله گردش مکاتبات و دفترچه تلفن سازمانی، با Flask و Python و کار با MongoDB، MySQL و SQL Server برای داده‌های حجیم.',
          en: 'Built data-driven systems including a correspondence workflow and an organizational phonebook, using Flask and Python with MongoDB, MySQL, and SQL Server for high-volume data.'
        },
        bullets: [
          { fa: 'پیاده‌سازی سرویس‌ها و قابلیت‌های وب با Flask و Python برای سامانه‌های داده‌محور؛ از ثبت و پیگیری مکاتبات تا مدیریت مجموعهٔ بزرگ مخاطبان.', en: 'Implemented web services and features with Flask and Python for data-driven systems, from correspondence tracking to large contact-dataset management.' },
          { fa: 'کار با MongoDB، MySQL و SQL Server برای ذخیره‌سازی، جست‌وجو و مدیریت داده در سناریوهای پرحجم.', en: 'Worked with MongoDB, MySQL, and SQL Server for storage, search, and data management in high-volume scenarios.' },
          { fa: 'مشارکت در طراحی راهکارهای قابل اجرا برای مجموعه‌های بزرگ داده و سناریوهای نزدیک به Big Data.', en: 'Contributed to practical solutions designed for large datasets and Big Data-adjacent scenarios.' }
        ],
        tags: ['Flask', 'Python', 'MongoDB', 'MySQL', 'SQL Server', 'Big Data']
      },
      {
        id: 'pol-darman',
        title: { fa: 'توسعه‌دهنده وب‌اپلیکیشن', en: 'Web Application Developer' },
        company: { fa: 'پل درمانگران ایرانیان کهن', en: 'Pol Darmanegaran Iranian Kohan' },
        location: { fa: 'تهران', en: 'Tehran' },
        startDate: '2023-04',
        endDate: '2023-12',
        summary: {
          fa: 'توسعهٔ سرویس‌های وب و رابط‌های کاربردی با Laravel، PHP، JavaScript و MySQL.',
          en: 'Developed web services and user-facing features with Laravel, PHP, JavaScript, and MySQL.'
        },
        bullets: [
          { fa: 'توسعهٔ سرویس‌های وب و قابلیت‌های کاربری با Laravel، PHP، JavaScript و MySQL.', en: 'Built web services and user-facing features with Laravel, PHP, JavaScript, and MySQL.' },
          { fa: 'مشارکت در پیاده‌سازی رابط با Bootstrap 5 و آماده‌سازی تجربهٔ PWA در بخش‌هایی از پروژه.', en: 'Contributed to interface implementation with Bootstrap 5 and PWA-oriented parts of the project.' }
        ],
        tags: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap 5', 'PWA']
      }
    ],
    earlier: [
      {
        id: 'kohan-legal',
        title: { fa: 'طراح وب‌سایت WordPress', en: 'WordPress Web Designer' },
        company: { fa: 'گروه حقوقی کهن', en: 'Kohan Legal Group' },
        location: { fa: 'تهران', en: 'Tehran' },
        startDate: '2022-12',
        endDate: '2023-01',
        description: { fa: 'طراحی و پیاده‌سازی وب‌سایت سازمانی گروه حقوقی با WordPress، HTML5 و CSS3.', en: 'Designed and implemented an organizational website for a legal group with WordPress, HTML5, and CSS3.' }
      },
      {
        id: 'datavision',
        title: { fa: 'طراح سایت و سئو', en: 'Web Designer & SEO' },
        company: { fa: 'ریکاوری اطلاعات دیتاویژن', en: 'DataVision Data Recovery' },
        location: { fa: 'تهران', en: 'Tehran' },
        startDate: '2021-11',
        endDate: '2022-09',
        description: { fa: 'طراحی وب‌سایت خدمات تعمیر و بازیابی اطلاعات و بهینه‌سازی ساختار و محتوای صفحات برای سئو.', en: 'Designed a data-recovery services website and optimized page structure and content for SEO.' }
      },
      {
        id: 'rasel',
        title: { fa: 'طراح وب‌سایت', en: 'Web Designer' },
        company: { fa: 'Rasel Group', en: 'Rasel Group' },
        location: { fa: 'تهران', en: 'Tehran' },
        startDate: '2021-10',
        endDate: '2022-07',
        description: { fa: 'طراحی و پیاده‌سازی وب‌سایت با WordPress، HTML و CSS و هماهنگ‌سازی ظاهر صفحات با نیازهای محتوایی.', en: 'Designed and implemented a website with WordPress, HTML, and CSS, aligning presentation with content needs.' }
      }
    ]
  },

  featuredProjects: [
    {
      id: 'blog-agent',
      kind: 'agentic',
      year: 2026,
      title: { fa: 'AI Agent تولید محتوای وبلاگ', en: 'AI Agent for Blog Content Production' },
      summary: {
        fa: 'عامل هوشمند چندمرحله‌ای برای تولید محتوای وبلاگ، پیاده‌سازی‌شده با Python، OpenAI، LangChain و LangGraph. جریان کار به‌صورت stateful طراحی شده تا کاربر در نقاط کنترل انسانی خروجی را تأیید یا ویرایش کند، دستور تازه‌ای بیفزاید و اجرا را از همان وضعیت ادامه دهد.',
        en: 'Multi-step AI agent for blog content production built with Python, OpenAI, LangChain, and LangGraph. The workflow is stateful, letting a human approve or edit outputs at review gates, add instructions, and resume execution from the same state.'
      },
      points: [
        { fa: 'ارکستراسیون مراحل مستقل تولید محتوا و مدیریت وضعیت گردش‌کار با LangGraph.', en: 'Orchestrated independent content-production stages and managed workflow state with LangGraph.' },
        { fa: 'پیاده‌سازی human-in-the-loop برای توقف، بازبینی، اصلاح و ادامهٔ کنترل‌شدهٔ فرایند.', en: 'Implemented human-in-the-loop controls for pausing, reviewing, revising, and resuming the process in a controlled way.' }
      ],
      tags: ['Python', 'OpenAI API', 'LangChain', 'LangGraph', 'Human-in-the-loop', 'Stateful Workflow'],
      flow: ['User Input', 'LangGraph Agent', 'LLM (OpenAI)', 'Tool / Stage', 'Human Review', 'Result'],
      caseStudy: {
        problem: { fa: 'تولید محتوای وبلاگ نیاز به چند مرحلهٔ وابسته دارد و خروجی هر مرحله باید پیش از ادامه بازبینی شود؛ بدون کنترل انسانی، خطا در مراحل اولیه تمام زنجیره را بی‌اعتبار می‌کرد.', en: 'Blog content production spans several dependent stages, and each stage output needs review before continuing; without human oversight, an early-stage error would invalidate the entire chain.' },
        approach: { fa: 'هر مرحله به‌عنوان گرهٔ مستقل در گراف LangGraph پیاده شد و وضعیت کامل گردش‌کار در state نگه‌داری می‌شود. در نقاط بازبینی، اجرا متوقف شده و پس از تأیید یا ویرایش کاربر از همان وضعیت ادامه می‌یابد.', en: 'Each stage was implemented as an independent node in a LangGraph graph, with full workflow state persisted. At review gates execution pauses and resumes from the same state after the user approves or edits.' },
        decisions: { fa: 'LangGraph برای ارکستراسیون و مدیریت state انتخاب شد تا اجرای قابل ازسرگیری و شاخه‌بندی مراحل ساده بماند؛ LangChain برای انتزاع فراخوانی LLM به کار رفت.', en: 'LangGraph was chosen for orchestration and state management to keep resumable execution and stage branching simple; LangChain abstracts LLM invocation.' },
        stack: 'Python · OpenAI API · LangChain · LangGraph'
      }
    },
    {
      id: 'address-agent',
      kind: 'agentic',
      year: 2025,
      title: { fa: 'AI Agent اعتبارسنجی و مکان‌یابی آدرس', en: 'AI Agent for Address Validation & Geolocation' },
      summary: {
        fa: 'سامانهٔ هوشمند پردازش آدرس در فرایند ثبت سفارش که وجود شهر و استان، تعلق شهر به استان و ساختار آدرس را کنترل و نرمال‌سازی می‌کند. پس از ارزیابی متن توسط LLM، عامل با tool calling آدرس را به API نشان می‌فرستد، مختصات نامزد را دریافت می‌کند و با reverse geocoding نشانی بازگشتی را با متن ورودی می‌سنجد؛ مختصات دقیق فقط در صورت عبور از آستانهٔ شباهت ذخیره می‌شود و در غیر این صورت مختصات مرجع شهر جایگزین خواهد شد.',
        en: 'Intelligent address-processing system for order registration that validates city and province existence, verifies city-province membership, and normalizes address structure. After the LLM evaluates the address text, the agent uses tool calling to send it to the Neshan API, retrieve candidate coordinates, reverse-geocode them, and compare the returned address with the input. Precise coordinates are stored only above a similarity threshold; otherwise city reference coordinates are used.'
      },
      points: [
        { fa: 'طراحی pipeline اعتبارسنجی و نرمال‌سازی برای داده‌های ناقص یا ناسازگار شهر، استان و آدرس.', en: 'Designed a validation and normalization pipeline for incomplete or inconsistent city, province, and address data.' },
        { fa: 'یکپارچه‌سازی LLM tool calling با API نشان و پیاده‌سازی تصمیم‌گیری مبتنی بر آستانهٔ شباهت همراه با fallback قابل اتکا.', en: 'Integrated LLM tool calling with the Neshan API and implemented similarity-threshold decisions with a reliable fallback.' }
      ],
      tags: ['Python', 'AI Agent', 'LLM', 'Tool Calling', 'Neshan API', 'Geocoding'],
      flow: ['Address Input', 'LLM Evaluation', 'Tool: Neshan Search', 'Reverse Geocode', 'Similarity Check', 'Store / Fallback'],
      caseStudy: {
        problem: { fa: 'در ثبت سفارش، آدرس‌ها اغلب ناقص یا نامنسجم‌اند و نگاشت نادرست به مختصات می‌تواند مسیر لجستیک را مختل کند.', en: 'At order time, addresses are often incomplete or inconsistent, and incorrect geocoding can disrupt logistics.' },
        approach: { fa: 'عامل ابتدا متن آدرس را با LLM ارزیابی می‌کند، سپس از طریق tool calling با API نشان مختصات نامزد را می‌گیرد و با reverse geocoding آن را راستی‌آزمایی می‌کند.', en: 'The agent first evaluates the address text with an LLM, then retrieves candidate coordinates via tool calling to the Neshan API and verifies them with reverse geocoding.' },
        decisions: { fa: 'تصمیم نهایی بر اساس آستانهٔ شباهت بین آدرس ورودی و آدرس بازگشتی از reverse geocode گرفته می‌شود؛ در صورت عدم عبور از آستانه، مختصات مرجع شهر به‌عنوان fallback ذخیره می‌شود تا از ذخیرهٔ مختصات نادرست جلوگیری شود.', en: 'The final decision uses a similarity threshold between the input address and the reverse-geocoded result; below threshold the city reference coordinates are stored as a fallback to avoid persisting incorrect coordinates.' },
        stack: 'Python · LLM · Tool Calling · Neshan API · Geocoding'
      }
    },
    {
      id: 'correspondence',
      kind: 'production',
      year: 2024,
      title: { fa: 'سامانه گردش مکاتبات', en: 'Correspondence Workflow System' },
      summary: {
        fa: 'سامانهٔ داخلی ثبت، ارسال و پیگیری مکاتبات با اتصال مستقیم به اسکنر، مدیریت ضمیمه، ثبت دریافت، ارجاع و پاسخ. معماری سامانه با Flask، MongoDB، Amazon S3 و OCR در آزمون عملی برای حداقل ۵ میلیون رکورد ارزیابی شده است.',
        en: 'Internal system for registering, sending, and tracking correspondence with direct scanner integration, attachment handling, receipt logging, forwarding, and replies. Built with Flask, MongoDB, Amazon S3, and OCR and evaluated in practical testing for at least five million records.'
      },
      points: [
        { fa: 'پوشش مسیر ثبت، اسکن، دریافت، ارجاع و پاسخ به مکاتبات داخلی.', en: 'Covers the full internal correspondence flow from registration and scanning through receipt, forwarding, and reply.' },
        { fa: 'مدیریت فایل‌های ضمیمه و ذخیره‌سازی شیء در کنار داده‌های عملیاتی سامانه.', en: 'Manages attachments and object storage alongside the system\'s operational data.' }
      ],
      tags: ['Python', 'Flask', 'MongoDB', 'Amazon S3', 'OCR', 'Bootstrap']
    },
    {
      id: 'phonebook',
      kind: 'production',
      year: 2024,
      title: { fa: 'اپلیکیشن دفترچه تلفن سازمانی', en: 'Organizational Phonebook Application' },
      summary: {
        fa: 'وب‌اپلیکیشن مدیریت مجموعهٔ بزرگ مخاطبان با داده‌های داخلی اختصاصی، صفحه‌بندی و جست‌وجوی پیشرفته برای بازیابی سریع اطلاعات؛ پیاده‌سازی‌شده با Flask و MongoDB و مناسب برای سناریوهای حدود ۱۰ میلیون رکورد.',
        en: 'Web application for managing a large contact dataset with custom internal fields, pagination, and advanced search for fast retrieval, implemented with Flask and MongoDB and suited to scenarios of around ten million records.'
      },
      points: [
        { fa: 'مدیریت داده‌های داخلی اختصاصی مخاطبان در کنار امکان مرور صفحه‌ای داده‌ها.', en: 'Managed custom internal contact fields alongside paginated browsing.' },
        { fa: 'پیاده‌سازی جست‌وجوی پیشرفته برای یافتن سریع اطلاعات در مجموعهٔ مخاطبان.', en: 'Implemented advanced search for rapid retrieval within the contact dataset.' },
        { fa: 'طراحی‌شده برای کار با مجموعه‌های پرحجم و سناریوهای نزدیک به ۱۰ میلیون رکورد.', en: 'Designed for high-volume datasets and scenarios approaching ten million records.' }
      ],
      tags: ['Python', 'Flask', 'MongoDB', 'jQuery', 'Bootstrap 4']
    }
  ],

  secondaryProjects: [
    {
      id: 'pol-drug',
      title: { fa: 'پل دراگ استور', en: 'Pol Drug Store' },
      summary: { fa: 'مجموعهٔ سرویس‌های وب برای ثبت آگهی‌های مرتبط با داروخانه‌ها و رزرو وقت مشاوره دارویی؛ توسعه‌یافته با Laravel، PHP و MySQL.', en: 'Web services for pharmacy-related listings and pharmaceutical consultation bookings, built with Laravel, PHP, and MySQL.' },
      tags: ['Laravel', 'PHP', 'MySQL', 'MariaDB', 'JavaScript', 'Bootstrap 5']
    }
  ],

  openSource: [
    { id: 'bijak-woo', name: 'bijak-woo', url: 'https://github.com/mostafaamiri/bijak-woo', description: { fa: 'افزونه و ابزارهای WordPress/WooCommerce برای اکوسیستم بیجک.', en: 'WordPress/WooCommerce plugin and utilities for the Bijak ecosystem.' }, tags: 'PHP · JavaScript · CSS' },
    { id: 'ham-hesab', name: 'ham-hesab', url: 'https://github.com/mmk-cp/ham-hesab', description: { fa: 'پروژهٔ وب چندفناوری با بک‌اند Python، رابط TypeScript/JavaScript و محیط توسعه مبتنی بر Docker.', en: 'Multi-technology web project with a Python backend, TypeScript/JavaScript frontend, and Docker-based development setup.' }, tags: 'Python · TypeScript · Docker' },
    { id: 'jalali-calendar', name: 'jalali-calendar', url: 'https://github.com/mmk-cp/jalali-calendar', description: { fa: 'ابزار Python برای کار با تاریخ‌ها و تقویم جلالی.', en: 'Python utility for working with Jalali calendar dates.' }, tags: 'Python' },
    { id: 'cropx', name: 'cropX', url: 'https://github.com/Majholl/cropX', description: { fa: 'ابزار تحت وب برای انجام تغییرات روی تصویر و فایل‌های TIFF.', en: 'Web utility for image and TIFF-file operations.' }, tags: 'Python · Shell · Docker' },
    { id: 'radius', name: 'RadiusAdminPanel', url: 'https://github.com/mmk-cp/RadiusAdminPanel', description: { fa: 'پنل مدیریتی تحت وب مبتنی بر Flask برای RADIUS.', en: 'Flask-based web administration panel for RADIUS.' }, tags: 'Python · Flask · JavaScript' },
    { id: 'persian-ocr', name: 'PersianScannedDocOrientationCorrection', url: 'https://github.com/mmk-cp/PersianScannedDocOrientationCorrection', description: { fa: 'ابزار Python با کمک OCR برای تشخیص و اصلاح جهت اسناد اسکن‌شدهٔ فارسی.', en: 'OCR-assisted Python utility for detecting and correcting the orientation of Persian scanned documents.' }, tags: 'Python · OCR · Jupyter' },
    { id: 'tiff-compressor', name: 'multipage-tiff-compressor', url: 'https://github.com/mmk-cp/multipage-tiff-compressor', description: { fa: 'ابزار Python برای فشرده‌سازی و تبدیل تصاویر TIFF چندصفحه‌ای.', en: 'Python utility for compressing and converting multi-page TIFF images.' }, tags: 'Python · TIFF' }
  ],

  skills: [
    {
      id: 'backend',
      title: { fa: 'توسعه بک‌اند', en: 'Backend Development' },
      note: { fa: 'طراحی منطق کسب‌وکار، سرویس‌های وب و APIهای REST در اکوسیستم Python و PHP.', en: 'Building business logic, web services, and REST APIs across the Python and PHP ecosystems.' },
      items: ['Python', 'PHP', 'FastAPI', 'Django', 'Flask', 'Laravel', 'REST APIs', 'API Integration']
    },
    {
      id: 'data',
      title: { fa: 'پایگاه داده و ذخیره‌سازی', en: 'Databases & Data Stores' },
      note: { fa: 'مدل‌سازی داده، جست‌وجو، صفحه‌بندی و کار با داده‌های رابطه‌ای و NoSQL.', en: 'Data modeling, search, pagination, and work with relational and NoSQL stores.' },
      items: ['PostgreSQL', 'MySQL', 'MariaDB', 'MongoDB', 'SQL Server', 'Redis']
    },
    {
      id: 'infra',
      title: { fa: 'زیرساخت و DevOps', en: 'DevOps & Infrastructure' },
      note: { fa: 'کانتینرسازی، مدیریت محیط Linux، استقرار سرویس‌ها و تجربه VoIP.', en: 'Containerization, Linux environment management, service deployment, and VoIP setup experience.' },
      items: ['Linux', 'Docker', 'Docker Compose', 'Git', 'GitLab CI/CD', 'Nginx', 'Traefik', 'TLS / SSL', 'Object Storage', 'S3', 'KVM', 'libvirt', 'Asterisk', 'Issabel', 'SIP']
    },
    {
      id: 'agentic',
      title: { fa: 'سامانه‌های Agentic AI / LLM', en: 'Agentic AI / LLM Systems' },
      note: { fa: 'طراحی عامل‌های چندمرحله‌ای، مدیریت state، کنترل انسانی و اتصال مدل به ابزارها.', en: 'Designing multi-step agents with state management, human oversight, and model-to-tool connectivity.' },
      items: ['LangChain', 'LangGraph', 'LLM API Integration', 'Tool Calling', 'Structured Output', 'Stateful Agents', 'Human-in-the-loop', 'Agent Workflows', 'API Orchestration']
    },
    {
      id: 'wordpress',
      title: { fa: 'اکوسیستم WordPress', en: 'WordPress Ecosystem' },
      note: { fa: 'طراحی و توسعهٔ سایت و افزونه؛ سفارشی‌سازی و یکپارچه‌سازی با سرویس‌های داخلی.', en: 'Site and plugin design and development; customization and integration with internal services.' },
      items: ['WordPress', 'WooCommerce', 'Plugin Development', 'Custom Integrations', 'REST APIs']
    },
    {
      id: 'dataproc',
      title: { fa: 'پردازش داده و تصویر', en: 'Data Processing' },
      note: { fa: 'کار با اسناد اسکن‌شده، OCR و پردازش تصویر در پروژه‌های کاربردی.', en: 'Working with scanned documents, OCR, and image processing in applied projects.' },
      items: ['OCR', 'Scanned Document Processing', 'Image Orientation Correction', 'TIFF Processing']
    }
  ],

  education: {
    degree: { fa: 'کارشناسی مهندسی کامپیوتر', en: 'B.Sc. in Computer Engineering' },
    university: { fa: 'دانشگاه آزاد اسلامی، واحد پردیس', en: 'Islamic Azad University, Pardis Branch' },
    startDate: '2021-09',
    endDate: null
  },

  certificates: [
    { id: 'java', name: 'Java SE 8 Programming', issuer: { fa: 'مجتمع فنی تهران', en: 'Tehran Institute of Technology' }, duration: { fa: '۵۰ ساعت', en: '50 hours' }, issued: '2019/10/28', image: 'assets/certificates/java-se-8.png' },
    { id: 'network', name: 'Network+', issuer: { fa: 'مجتمع فنی تهران', en: 'Tehran Institute of Technology' }, duration: { fa: '۳۰ ساعت', en: '30 hours' }, issued: '2019/09/29', image: 'assets/certificates/network-plus.png' }
  ],

  languages: [
    { name: { fa: 'فارسی', en: 'Persian' }, level: { fa: 'زبان مادری', en: 'Native' } },
    { name: { fa: 'انگلیسی', en: 'English' }, level: { fa: 'سطح متوسط', en: 'Intermediate' } }
  ]
};
