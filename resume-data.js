'use strict';

/* Central resume data — single source for fa/en web + print.
   Dates are stored as ISO (Gregorian) strings and converted to
   Jalali at render time via jalali.js. */

const resumeData = {
  profile: {
    name: { fa: 'محمد مهدی کریمی', en: 'Mohammad Mahdi Karimi' },
    title: { fa: 'مهندس DevOps و نرم‌افزار', en: 'DevOps & Software Engineer' },
    eyebrow: { fa: 'DEVOPS · SOFTWARE ENGINEERING · AGENTIC AI', en: 'DEVOPS · SOFTWARE ENGINEERING · AGENTIC AI' },
    techLine: 'Docker · Linux · CI/CD · Python · FastAPI · LLM Systems',
    heroSummary: {
      fa: 'مهندس DevOps و نرم‌افزار فعال در حوزه زیرساخت Linux، استقرار کانتینری و سرویس‌های بک‌اند؛ از نصب و راه‌اندازی فیزیکی و نرم‌افزاری سرورها و مجازی‌سازی با KVM، Proxmox و VMware تا خطوط CI/CD، محیط‌های Docker و APIهای production با Python. در کنار آن، سامانه‌های Agentic AI مبتنی بر LLM با فراخوانی ابزار و کنترل انسانی و همچنین توسعه و یکپارچه‌سازی WordPress/WooCommerce را انجام می‌دهم.',
      en: 'DevOps and software engineer working across Linux infrastructure, containerized deployments, and backend services — from physical and software setup of servers and virtualization with KVM, Proxmox, and VMware to CI/CD pipelines, Docker environments, and production Python APIs. I also build LLM-powered agentic systems with tool calling and human-in-the-loop controls, alongside WordPress/WooCommerce development and integrations.'
    },
    location: { fa: 'تهران، ایران', en: 'Tehran, Iran' },
    focus: { fa: 'DevOps · مهندسی نرم‌افزار · Agentic AI', en: 'DevOps · Software Engineering · Agentic AI' },
    availability: { fa: 'آماده همکاری', en: 'Open to collaboration' },
    email: 'mail@mmk-cp.ir',
    website: 'https://mmk-cp.ir',
    github: 'https://github.com/mmk-cp',
    linkedin: 'https://www.linkedin.com/in/mmk-cp/',
    telegram: 'https://t.me/mmk_cp',
    bale: 'https://ble.ir/mmk_cp'
  },

  about: {
    text: {
      fa: 'مهندس DevOps و نرم‌افزار با تجربه در نصب و راه‌اندازی فیزیکی و نرم‌افزاری سرورها، مجازی‌سازی با KVM، Proxmox و VMware، و مدیریت محیط‌های Linux. خطوط CI/CD با GitLab را راه‌اندازی کرده‌ام و سرویس‌های production را با Docker و Docker Compose مستقر و نگه‌داری می‌کنم؛ آشنایی پایه با Kubernetes نیز دارم. در کنار زیرساخت، سرویس‌های بک‌اند و APIهای REST را با Python — FastAPI، Django و Flask — و PHP/Laravel توسعه داده‌ام و سامانه‌های Agentic AI با OpenAI، LangChain و LangGraph شامل فراخوانی ابزار و کنترل انسانی پیاده‌سازی کرده‌ام.',
      en: 'DevOps and software engineer with experience in physical and software setup of servers, virtualization with KVM, Proxmox, and VMware, and Linux environment management. I set up CI/CD pipelines with GitLab and deploy and maintain production services with Docker and Docker Compose, with foundational familiarity with Kubernetes. Alongside infrastructure, I develop backend services and REST APIs in Python — FastAPI, Django, and Flask — and PHP/Laravel, and implement Agentic AI systems with OpenAI, LangChain, and LangGraph, including tool calling and human-in-the-loop controls.'
    },
    strengths: [
      {
        id: 'infra', icon: 'OPS',
        title: { fa: 'زیرساخت و DevOps', en: 'Infrastructure & DevOps' },
        text: { fa: 'نصب و راه‌اندازی سرورها، مجازی‌سازی با KVM/Proxmox/VMware، خطوط CI/CD، استقرار Docker و مدیریت Linux همراه با VoIP مبتنی بر Asterisk، Issabel و SIP.', en: 'Server setup, virtualization with KVM/Proxmox/VMware, CI/CD pipelines, Docker deployments, and Linux administration, plus Asterisk, Issabel, and SIP-based VoIP.' }
      },
      {
        id: 'backend', icon: 'API',
        title: { fa: 'مهندسی نرم‌افزار و API', en: 'Software Engineering & APIs' },
        text: { fa: 'طراحی منطق کسب‌وکار، سرویس‌های وب و REST API با Python (FastAPI، Django، Flask) و PHP/Laravel.', en: 'Designing business logic, web services, and REST APIs with Python (FastAPI, Django, Flask) and PHP/Laravel.' }
      },
      {
        id: 'data', icon: 'DATA',
        title: { fa: 'داده و ذخیره‌سازی', en: 'Data & Storage' },
        text: { fa: 'کار با PostgreSQL، MySQL/MariaDB، MongoDB، SQL Server و Redis؛ مدیریت فایل در Amazon S3 و Object Storage.', en: 'Working with PostgreSQL, MySQL/MariaDB, MongoDB, SQL Server, and Redis; file handling with Amazon S3 and object storage.' }
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
        title: { fa: 'مهندس DevOps و نرم‌افزار', en: 'DevOps & Software Engineer' },
        company: { fa: 'بیجک', en: 'Bijak' },
        companyUrl: 'https://bijak.ir/',
        location: { fa: 'تهران', en: 'Tehran' },
        startDate: '2025-07',
        endDate: null,
        summary: {
          fa: 'فعالیت در محصولات بیجک در حوزه زیرساخت، استقرار و سرویس‌های بک‌اند Python، همراه با توسعه سامانه‌های Agentic AI و VoIP هوشمند و وب‌سایت و افزونه‌های WordPress/WooCommerce شرکت.',
          en: 'Working on Bijak products across infrastructure, deployments, and Python backend services, alongside Agentic AI and intelligent VoIP systems and the company website and WordPress/WooCommerce plugins.'
        },
        bullets: [
          { fa: 'نصب و راه‌اندازی فیزیکی و نرم‌افزاری سرورها و مدیریت محیط‌های Linux؛ کار با ماشین‌های مجازی KVM، Proxmox و VMware.', en: 'Physical and software setup of servers and Linux environment management; working with KVM, Proxmox, and VMware virtual machines.' },
          { fa: 'راه‌اندازی خطوط CI/CD با GitLab و استقرار و نگه‌داری سرویس‌های production با Docker و Docker Compose؛ آشنایی پایه با Kubernetes.', en: 'Setting up GitLab CI/CD pipelines and deploying and maintaining production services with Docker and Docker Compose; foundational familiarity with Kubernetes.' },
          { fa: 'توسعه و نگه‌داری سرویس‌ها و APIهای بک‌اند محصولات با Python، FastAPI و Django در محیط production.', en: 'Developing and maintaining product backend services and APIs with Python, FastAPI, and Django in production.' },
          { fa: 'طراحی و توسعه سامانه‌ها و گردش‌کارهای Agentic AI مبتنی بر LLM، شامل ارکستراسیون مدل، فراخوانی ابزار، اتصال به APIهای بیرونی و مراحل کنترل‌شده توسط انسان.', en: 'Designing and developing LLM-based Agentic AI systems and workflows, including model orchestration, tool calling, external API integration, and human-controlled workflow stages.' },
          { fa: 'راه‌اندازی و توسعه زیرساخت و سامانه‌های VoIP هوشمند با Asterisk، Issabel، PJSIP/SIP و اتصال به سرویس‌های AI؛ شامل پلتفرم تماس خروجی و مسیریابی تماس ورودی به ایجنت صوتی.', en: 'Setting up and developing intelligent VoIP infrastructure and systems with Asterisk, Issabel, PJSIP/SIP, and AI service integration — including an outbound calling platform and inbound-call routing to a voice agent.' },
          { fa: 'طراحی و توسعه وب‌سایت شرکت و افزونه‌های WordPress/WooCommerce با یکپارچه‌سازی سرویس‌های داخلی و خارجی.', en: 'Designing and developing the company website and WordPress/WooCommerce plugins integrated with internal and external services.' }
        ],
        tags: ['Docker', 'Linux', 'GitLab CI/CD', 'KVM', 'Proxmox', 'VMware', 'FastAPI', 'Django', 'Python', 'Asterisk', 'SIP', 'WordPress', 'WooCommerce', 'PHP']
      },
      {
        id: 'data-driven',
        title: { fa: 'توسعه‌دهنده وب‌اپلیکیشن', en: 'Web Application Developer' },
        company: null,
        location: { fa: 'تهران', en: 'Tehran' },
        startDate: '2023-12',
        endDate: '2025-06',
        summary: {
          fa: 'توسعه سامانه‌های داده‌محور از جمله گردش مکاتبات و دفترچه تلفن سازمانی، با Flask و Python و کار با MongoDB، MySQL و SQL Server برای داده‌های پرحجم.',
          en: 'Built data-driven systems including a correspondence workflow and an organizational phonebook, using Flask and Python with MongoDB, MySQL, and SQL Server for high-volume data.'
        },
        bullets: [
          { fa: 'پیاده‌سازی سرویس‌ها و قابلیت‌های وب با Flask و Python برای سامانه‌های داده‌محور؛ از ثبت و پیگیری مکاتبات تا مدیریت مجموعه بزرگ مخاطبان.', en: 'Implemented web services and features with Flask and Python for data-driven systems, from correspondence tracking to large contact-dataset management.' },
          { fa: 'کار با MongoDB، MySQL و SQL Server برای ذخیره‌سازی، جست‌وجو و مدیریت داده در سناریوهای پرحجم.', en: 'Worked with MongoDB, MySQL, and SQL Server for storage, search, and data management in high-volume scenarios.' }
        ],
        tags: ['Flask', 'Python', 'MongoDB', 'MySQL', 'SQL Server']
      },
      {
        id: 'pol-darman',
        title: { fa: 'توسعه‌دهنده وب‌اپلیکیشن', en: 'Web Application Developer' },
        company: { fa: 'پل درمانگران ایرانیان کهن', en: 'Pol Darmanegaran Iranian Kohan' },
        location: { fa: 'تهران', en: 'Tehran' },
        startDate: '2023-04',
        endDate: '2023-12',
        summary: {
          fa: 'همکاری در توسعه سرویس‌های تحت وب مبتنی بر Laravel برای نیازهای محصول.',
          en: 'Contributed to Laravel-based web services and product features.'
        },
        bullets: [
          { fa: 'پیاده‌سازی منطق سرویس و قابلیت‌های کاربری با Laravel، PHP، JavaScript و MySQL.', en: 'Implemented service logic and user-facing features with Laravel, PHP, JavaScript, and MySQL.' },
          { fa: 'مشارکت در پیاده‌سازی رابط با Bootstrap 5 و آماده‌سازی تجربه PWA در بخش‌هایی از پروژه.', en: 'Contributed to interface implementation with Bootstrap 5 and PWA-oriented parts of the project.' }
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
      id: 'outbound-voice',
      kind: 'production',
      year: 2026,
      title: { fa: 'پلتفرم تماس خروجی هوشمند', en: 'Intelligent Outbound Voice Platform' },
      summary: {
        fa: 'سامانه کامل مدیریت تماس خروجی با پنل فارسی و RTL: بک‌اند FastAPI با احراز هویت JWT و API Key، فرانت‌اند Next.js، موتور SIP اختصاصی مبتنی بر PJSIP در کانتینر جدا، تبدیل متن به گفتار با ElevenLabs همراه با کش صوتی، و صف تماس با MySQL، Redis و object storage. استقرار کامل با Docker Compose در محیط توسعه و production.',
        en: 'Full outbound-calling management system with a Persian RTL panel: FastAPI backend with JWT and API-key auth, Next.js frontend, a dedicated PJSIP-based SIP engine in its own container, ElevenLabs text-to-speech with audio caching, and call queueing over MySQL, Redis, and object storage. Fully deployed with Docker Compose across dev and production environments.'
      },
      points: [
        { fa: 'پیاده‌سازی موتور SIP کانتینری با PJSIP و اتصال امن credentialهای SIP با رمزنگاری در دیتابیس.', en: 'Implemented a containerized PJSIP SIP engine with encrypted SIP credential storage.' },
        { fa: 'طراحی API عملیاتی با Swagger، health/readiness probe و ماژول اختیاری اتصال ضبط تماس Issabel.', en: 'Designed the operational API with Swagger, health/readiness probes, and an optional Issabel call-recording integration.' }
      ],
      tags: ['Python', 'FastAPI', 'Next.js', 'PJSIP', 'SIP', 'ElevenLabs', 'MySQL', 'Redis', 'Docker'],
      flow: ['Template', 'TTS Cache', 'Call Queue', 'SIP Engine', 'Report'],
      caseStudy: {
        problem: { fa: 'فرایند تماس خروجی نیاز به ساخت Template، آماده‌سازی صدا، انتخاب خط و گزارش‌گیری یکپارچه داشت و credentialهای SIP و سرویس صوتی نباید در کد یا مخزن قرار می‌گرفتند.', en: 'Outbound calling needed unified template building, voice preparation, line selection, and reporting — with SIP and voice-service credentials kept out of code and repos.' },
        approach: { fa: 'معماری چندسرویسی با Docker Compose انتخاب شد: بک‌اند، فرانت، موتور SIP، دیتابیس و object storage جدا از هم. credentialها از پنل ثبت و رمزنگاری‌شده ذخیره می‌شوند.', en: 'A multi-service Docker Compose architecture was chosen: backend, frontend, SIP engine, database, and object storage separated. Credentials are registered from the panel and stored encrypted.' },
        decisions: { fa: 'موتور SIP به‌صورت سرویس مستقل کانتینری پیاده شد تا چرخه عمر تماس از API جدا بماند؛ کش segmentهای صوتی تکراری هزینه TTS را کم می‌کند.', en: 'The SIP engine runs as an independent containerized service to keep call lifecycle separate from the API; caching repeated voice segments reduces TTS cost.' },
        stack: 'Python · FastAPI · Next.js · PJSIP · ElevenLabs · MySQL · Redis · Docker'
      }
    },
    {
      id: 'blog-agent',
      kind: 'agentic',
      year: 2026,
      title: { fa: 'AI Agent تولید محتوای وبلاگ', en: 'AI Agent for Blog Content Production' },
      summary: {
        fa: 'عامل هوشمند چندمرحله‌ای فارسی برای تولید محتوای وبلاگ با بک‌اند FastAPI/LangGraph، داشبورد Next.js، MySQL برای حساب‌ها، MongoDB برای checkpoint و تاریخچه، و object storage سازگار S3 برای فایل‌های تولیدشده. جریان کار stateful است تا کاربر در نقاط کنترل انسانی خروجی را تأیید یا ویرایش کند و اجرا از همان وضعیت ادامه یابد. استقرار production با Docker Compose.',
        en: 'Persian multi-step AI agent for blog content production with a FastAPI/LangGraph backend, Next.js dashboard, MySQL for accounts, MongoDB for checkpoints and history, and S3-compatible storage for generated files. The workflow is stateful, letting a human approve or edit outputs at review gates and resume from the same state. Production deployment with Docker Compose.'
      },
      points: [
        { fa: 'ارکستراسیون مراحل مستقل تولید محتوا و مدیریت وضعیت گردش‌کار با LangGraph.', en: 'Orchestrated independent content-production stages and managed workflow state with LangGraph.' },
        { fa: 'پیاده‌سازی human-in-the-loop برای توقف، بازبینی، اصلاح و ادامهٔ کنترل‌شدهٔ فرایند.', en: 'Implemented human-in-the-loop controls for pausing, reviewing, revising, and resuming the process in a controlled way.' }
      ],
      tags: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'Next.js', 'MySQL', 'MongoDB', 'Docker', 'Human-in-the-loop'],
      flow: ['User Input', 'LangGraph Agent', 'LLM (OpenAI)', 'Tool / Stage', 'Human Review', 'Result'],
      caseStudy: {
        problem: { fa: 'تولید محتوای وبلاگ نیاز به چند مرحلهٔ وابسته دارد و خروجی هر مرحله باید پیش از ادامه بازبینی شود؛ بدون کنترل انسانی، خطا در مراحل اولیه تمام زنجیره را بی‌اعتبار می‌کرد.', en: 'Blog content production spans several dependent stages, and each stage output needs review before continuing; without human oversight, an early-stage error would invalidate the entire chain.' },
        approach: { fa: 'هر مرحله به‌عنوان گرهٔ مستقل در گراف LangGraph پیاده شد و وضعیت کامل گردش‌کار در state نگه‌داری می‌شود. در نقاط بازبینی، اجرا متوقف شده و پس از تأیید یا ویرایش کاربر از همان وضعیت ادامه می‌یابد.', en: 'Each stage was implemented as an independent node in a LangGraph graph, with full workflow state persisted. At review gates execution pauses and resumes from the same state after the user approves or edits.' },
        decisions: { fa: 'LangGraph برای ارکستراسیون و مدیریت state انتخاب شد تا اجرای قابل ازسرگیری و شاخه‌بندی مراحل ساده بماند؛ LangChain برای انتزاع فراخوانی LLM به کار رفت.', en: 'LangGraph was chosen for orchestration and state management to keep resumable execution and stage branching simple; LangChain abstracts LLM invocation.' },
        stack: 'Python · FastAPI · LangChain · LangGraph · Next.js · MySQL · MongoDB · Docker'
      }
    },
    {
      id: 'address-agent',
      kind: 'agentic',
      year: 2026,
      title: { fa: 'AI Agent اعتبارسنجی و مکان‌یابی آدرس', en: 'AI Agent for Address Validation & Geolocation' },
      summary: {
        fa: 'سرویس پیشنهاد موقعیت آدرس فارسی با FastAPI، صف job پایدار، و worker مستقل که از ابزارهای MCP نشان و Playwright استفاده می‌کند. برای هر آدرس تا سه پیشنهاد دارای شاهد تولید می‌شود؛ انتخاب candidate یا اصلاح دستی اپراتور جدا ثبت می‌شود و نتیجه اصلی ایجنت بازنویسی نمی‌گردد. اعتبارسنجی با reverse geocoding و آستانهٔ شباهت انجام می‌شود و در صورت عدم عبور، مختصات مرجع شهر به‌عنوان fallback ذخیره می‌گردد. آماده‌سازی با MySQL و Redis، انتشار image از رجیستری داخلی و استقرار با Portainer؛ readiness سرویس با health probe و آزمون زنده مدل کنترل می‌شود.',
        en: 'Persian address-geolocation service with FastAPI, a durable job queue, and an independent worker using Neshan and Playwright MCP tools. Each address yields up to three evidenced candidates; operator selection or manual pin correction is recorded separately without overwriting the agent result. Validation uses reverse geocoding with a similarity threshold, falling back to city reference coordinates below threshold. Backed by MySQL and Redis, published via an internal registry image, and deployed with Portainer; readiness is gated by health probes and a live model check.'
      },
      points: [
        { fa: 'طراحی pipeline اعتبارسنجی و نرمال‌سازی برای داده‌های ناقص یا ناسازگار شهر، استان و آدرس.', en: 'Designed a validation and normalization pipeline for incomplete or inconsistent city, province, and address data.' },
        { fa: 'پیاده‌سازی تصمیم‌گیری مبتنی بر آستانهٔ شباهت همراه با fallback قابل اتکا و trace کامل هر تلاش برای بازبینی اپراتور.', en: 'Implemented similarity-threshold decisions with a reliable fallback and full per-attempt traces for operator review.' }
      ],
      tags: ['Python', 'FastAPI', 'AI Agent', 'MCP', 'Neshan API', 'Playwright', 'MySQL', 'Redis', 'Docker', 'Portainer'],
      flow: ['Address Job', 'LLM + MCP Tools', 'Neshan Search', 'Reverse Geocode', 'Similarity Check', 'Store / Fallback'],
      caseStudy: {
        problem: { fa: 'در ثبت سفارش، آدرس‌ها اغلب ناقص یا نامنسجم‌اند و نگاشت نادرست به مختصات می‌تواند مسیر لجستیک را مختل کند.', en: 'At order time, addresses are often incomplete or inconsistent, and incorrect geocoding can disrupt logistics.' },
        approach: { fa: 'هر آدرس به‌صورت job مستقل در صف پایدار ثبت می‌شود؛ worker با ابزارهای MCP مختصات نامزد را گرفته و با reverse geocoding راستی‌آزمایی می‌کند. نتیجه هر تلاش با شواهد و screenshot در trace ذخیره می‌شود.', en: 'Each address becomes an independent job in a durable queue; the worker retrieves candidate coordinates via MCP tools and verifies them with reverse geocoding. Every attempt is stored with evidence and screenshots in a trace.' },
        decisions: { fa: 'تصمیم نهایی بر اساس آستانهٔ شباهت بین آدرس ورودی و آدرس بازگشتی گرفته می‌شود؛ انتخاب اپراتور نتیجه ایجنت را بازنویسی نمی‌کند تا ارزیابی دقت در پایلوت ممکن بماند.', en: 'The final decision uses a similarity threshold against the reverse-geocoded address; operator selection never overwrites the agent result so accuracy can be evaluated in the pilot.' },
        stack: 'Python · FastAPI · MCP · Neshan API · Playwright · MySQL · Redis · Docker · Portainer'
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
      id: 'issabel-realtime',
      title: { fa: 'اتصال Issabel به ایجنت صوتی AI', en: 'Issabel to Realtime AI Voice Agent' },
      summary: { fa: 'مسیریابی تماس ورودی از ترانک Issabel به برنامه Python با ARI و ExternalMedia و انتقال صدای RTP به سرویس AI؛ تست‌شده روی Asterisk 18.', en: 'Routing inbound calls from an Issabel trunk into a Python app via ARI and ExternalMedia, streaming RTP audio to an AI service; tested on Asterisk 18.' },
      tags: ['Python', 'Asterisk', 'ARI', 'RTP', 'Issabel', 'OpenAI Realtime']
    },
    {
      id: 'ai-services',
      title: { fa: 'سرویس تخمین ابعاد تصویر با AI', en: 'AI Image Dimension Estimation Service' },
      summary: { fa: 'سرویس FastAPI با صف Celery و Redis: ثبت درخواست، پاسخ ۲۰۲ و تحویل نتیجه ناهمگام همراه با احراز هویت کلید و endpointهای مدیریتی.', en: 'FastAPI service with a Celery/Redis queue: request registration, 202 responses, and async result delivery with key auth and admin endpoints.' },
      tags: ['Python', 'FastAPI', 'Celery', 'Redis', 'MySQL', 'Docker']
    },
    {
      id: 'pol-drug',
      title: { fa: 'پل دراگ استور', en: 'Pol Drug Store' },
      summary: { fa: 'مجموعهٔ سرویس‌های وب برای ثبت آگهی‌های مرتبط با داروخانه‌ها و رزرو وقت مشاوره دارویی؛ توسعه‌یافته با Laravel، PHP و MySQL.', en: 'Web services for pharmacy-related listings and pharmaceutical consultation bookings, built with Laravel, PHP, and MySQL.' },
      tags: ['Laravel', 'PHP', 'MySQL', 'MariaDB', 'JavaScript', 'Bootstrap 5']
    }
  ],

  openSource: [
    { id: 'egress-share', name: 'EgressShare', url: 'https://github.com/mmk-cp/EgressShare', description: { fa: 'اشتراک‌گذاری تونل VPN، پروکسی SOCKS5 یا HTTP روی هات‌اسپات Wi-Fi یا اترنت در Linux.', en: 'Share VPN tunnels, SOCKS5, or HTTP proxies over Wi-Fi hotspot or Ethernet on Linux.' }, tags: 'Shell · Linux · Networking' },
    { id: 'shared-browser', name: 'shared-browser-tabs', url: 'https://github.com/mmk-cp/shared-browser-tabs', description: { fa: 'مرورگر Chromium اشتراکی self-hosted برای دسترسی چندکاربره به یک نشست پایدار مرورگر از روی یک سرور.', en: 'Self-hosted shared Chromium browser for multi-user access to one persistent session from a single server.' }, tags: 'Python · Docker · DevOps' },
    { id: 'bijak-woo', name: 'bijak-woo', url: 'https://github.com/mostafaamiri/bijak-woo', description: { fa: 'افزونه و ابزارهای WordPress/WooCommerce برای اکوسیستم بیجک (مشارکت‌کننده).', en: 'WordPress/WooCommerce plugin and utilities for the Bijak ecosystem (contributor).' }, tags: 'PHP · JavaScript · CSS' },
    { id: 'ham-hesab', name: 'ham-hesab', url: 'https://github.com/mmk-cp/ham-hesab', description: { fa: 'پروژهٔ وب چندفناوری با بک‌اند Python، رابط TypeScript/JavaScript و محیط توسعه مبتنی بر Docker.', en: 'Multi-technology web project with a Python backend, TypeScript/JavaScript frontend, and Docker-based development setup.' }, tags: 'Python · TypeScript · Docker' },
    { id: 'jalali-calendar', name: 'jalali-calendar', url: 'https://github.com/mmk-cp/jalali-calendar', description: { fa: 'ابزار Python برای کار با تاریخ‌ها و تقویم جلالی.', en: 'Python utility for working with Jalali calendar dates.' }, tags: 'Python' },
    { id: 'cropx', name: 'cropX', url: 'https://github.com/Majholl/cropX', description: { fa: 'ابزار تحت وب برای انجام تغییرات روی تصویر و فایل‌های TIFF.', en: 'Web utility for image and TIFF-file operations.' }, tags: 'Python · Shell · Docker' },
    { id: 'radius', name: 'RadiusAdminPanel', url: 'https://github.com/mmk-cp/RadiusAdminPanel', description: { fa: 'پنل مدیریتی تحت وب مبتنی بر Flask برای RADIUS.', en: 'Flask-based web administration panel for RADIUS.' }, tags: 'Python · Flask · JavaScript' },
    { id: 'persian-ocr', name: 'PersianScannedDocOrientationCorrection', url: 'https://github.com/mmk-cp/PersianScannedDocOrientationCorrection', description: { fa: 'ابزار Python با کمک OCR برای تشخیص و اصلاح جهت اسناد اسکن‌شدهٔ فارسی.', en: 'OCR-assisted Python utility for detecting and correcting the orientation of Persian scanned documents.' }, tags: 'Python · OCR · Jupyter' },
    { id: 'tiff-compressor', name: 'multipage-tiff-compressor', url: 'https://github.com/mmk-cp/multipage-tiff-compressor', description: { fa: 'ابزار Python برای فشرده‌سازی و تبدیل تصاویر TIFF چندصفحه‌ای.', en: 'Python utility for compressing and converting multi-page TIFF images.' }, tags: 'Python · TIFF' }
  ],

  skills: [
    {
      id: 'infra',
      title: { fa: 'زیرساخت و DevOps', en: 'DevOps & Infrastructure' },
      note: { fa: 'نصب و راه‌اندازی سرورها، مجازی‌سازی، خطوط CI/CD، کانتینرسازی و مدیریت Linux همراه با VoIP.', en: 'Server setup, virtualization, CI/CD pipelines, containerization, and Linux administration, plus VoIP.' },
      items: ['Linux', 'Docker', 'Docker Compose', 'CI/CD', 'GitLab CI/CD', 'Git', 'KVM', 'Proxmox', 'VMware', 'Kubernetes (familiar)', 'Nginx', 'Traefik', 'TLS / SSL', 'Object Storage', 'S3', 'Asterisk', 'Issabel', 'SIP / PJSIP']
    },
    {
      id: 'backend',
      title: { fa: 'مهندسی نرم‌افزار', en: 'Software Engineering' },
      note: { fa: 'طراحی منطق کسب‌وکار، سرویس‌های وب و APIهای REST در اکوسیستم Python و PHP.', en: 'Building business logic, web services, and REST APIs across the Python and PHP ecosystems.' },
      items: ['Python', 'PHP', 'FastAPI', 'Django', 'Flask', 'Laravel', 'REST APIs', 'API Integration', 'Next.js']
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
    { id: 'java', name: 'Java SE 8 Programming', issuer: { fa: 'مجتمع فنی تهران', en: 'Tehran Institute of Technology' }, duration: { fa: '۵۰ ساعت', en: '50 hours' }, issued: '2019-10-28', image: 'assets/certificates/java-se-8.png' },
    { id: 'network', name: 'Network+', issuer: { fa: 'مجتمع فنی تهران', en: 'Tehran Institute of Technology' }, duration: { fa: '۳۰ ساعت', en: '30 hours' }, issued: '2019-09-29', image: 'assets/certificates/network-plus.png' }
  ],

  languages: [
    { name: { fa: 'فارسی', en: 'Persian' }, level: { fa: 'زبان مادری', en: 'Native' } },
    { name: { fa: 'انگلیسی', en: 'English' }, level: { fa: 'سطح متوسط', en: 'Intermediate' } }
  ]
};
