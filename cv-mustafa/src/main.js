const translations = {
  ar: {
    nav: ['نبذة', 'المهارات', 'المشاريع', 'المسار', 'تواصل'],
    roles: ['طالب هندسة برمجيات', 'مطوّر ويب', 'مصوّر فوتوغرافي'],
    heroSummary: 'أجمع بين شغفي بالتقنية والتصوير، وأبني تجارب ويب تفاعلية.',
    projectsCta: 'شاهد أعمالي',
    contactCta: 'تواصل معي',
    profileAlt: 'مصطفى صفاء عبد الصاحب',
    title: 'مصطفى صفاء عبد الصاحب — السيرة الذاتية',
    description: 'مصطفى صفاء عبد الصاحب — طالب هندسة برمجيات في جامعة واسط، مطوّر ويب ومصوّر فوتوغرافي.',
    navLabel: 'التنقل',
    themeLabel: 'تبديل المظهر',
    langLabel: 'التبديل إلى الإنجليزية',
    langText: 'إنجليزي',
    github: 'حساب GitHub',
    about: 'نبذة',
    aboutEn: 'نبذة شخصية',
    aboutText: 'طالب في كلية علوم الحاسوب وتكنولوجيا المعلومات بجامعة واسط، تخصص البرمجيات. أعمل على تطوير تطبيقات الويب الحديثة، وتوظيف أدوات الذكاء الاصطناعي في عملي.',
    aboutEnglish: 'Software engineering student at the College of Computer Science and Information Technology, University of Wasit. My interest in technology and photography continues to grow, and I treat every new tool as something to master rather than merely try. Today I focus on web development and on applying AI tools across my academic and practical work.',
    skills: 'المهارات',
    skillsEn: 'المهارات التقنية',
    web: 'تطوير الويب',
    ai: 'هندسة أوامر الذكاء الاصطناعي',
    office: 'حزمة مايكروسوفت أوفيس',
    photography: 'التصوير الفوتوغرافي',
    work: 'الأعمال',
    workEn: 'مشاريع مختارة',
    openSite: 'افتح الموقع',
    projectPreview: 'معاينة موقع',
    skillDetails: {
      web: 'HTML5 · CSS3 · JavaScript',
      ai: 'معتمد من مركز دبي للذكاء الاصطناعي',
      office: 'Word · Excel · PowerPoint',
      photography: 'تصوير فوتوغرافي احترافي',
    },
    projects: [
      { name: 'Viray Studio', category: 'مشروع شخصي', description: 'تطبيق ويب لاستوديو تصوير فوتوغرافي، يجمع معرض الأعمال وواجهة الحجز.', url: 'https://viraystudio.netlify.app/', image: new URL('../assets/project-viray.png', import.meta.url).href, tags: ['HTML5', 'CSS3', 'JavaScript'] },
      { name: 'ALsayed Company', category: 'متجر إلكتروني', description: 'متجر للأجهزة التقنية والهواتف والإكسسوارات، مع عرض الضمان والتوصيل والطلب عبر واتساب.', url: 'https://alsayed-company.vercel.app', image: new URL('../assets/project-alsayed.png', import.meta.url).href, tags: ['تجارة إلكترونية', 'متجاوب', 'ويب'] },
      { name: 'برمجة الرافدين', category: 'فريقنا البرمجي', description: 'فريق عراقي يطوّر المواقع وتطبيقات الهاتف والحلول البرمجية في الكوت.', url: 'https://al-rafidan-pro.vercel.app', image: new URL('../assets/project-rafidain.png', import.meta.url).href, tags: ['ويب', 'تطبيقات الهاتف', 'برمجيات'] },
    ],
    certification: 'الشهادة',
    certificationEn: 'شهادة إتمام',
    certTitle: 'مليون خبير لأوامر الذكاء الاصطناعي',
    certEnglish: '1 Million Prompters',
    certDate: 'شهادة إتمام — حزيران ٢٠٢٥',
    certDateEnglish: 'Certificate of completion — June 2025',
    certOrganization: 'مركز دبي للذكاء الاصطناعي<br>مؤسسة دبي للمستقبل',
    zoom: 'تكبير الشهادة',
    close: 'إغلاق',
    path: 'المسار',
    pathEn: 'التعليم والخبرة',
    timelineDetails: [
      'تصوير فوتوغرافي احترافي · @vray_photography',
      'طالب هندسة البرمجيات · كلية علوم الحاسوب وتكنولوجيا المعلومات',
      'مركز دبي للذكاء الاصطناعي · مؤسسة دبي للمستقبل',
      'HTML5 · CSS3 · JavaScript · Netlify',
    ],
    beginning: 'بداية مسيرتي في عالم التصوير والتقنية',
    beginningText: 'من هنا بدأت رحلتي في التصوير والتقنية، وما زلت أطور خبرتي فيهما.',
    beginningEnglishText: 'This is where my journey in photography and technology began, and I continue to grow in both fields.',
    university: 'جامعة واسط',
    universityText: 'طالب بكالوريوس في هندسة البرمجيات، كلية علوم الحاسوب وتكنولوجيا المعلومات.',
    universityEnglishText: "Bachelor's degree student in Software Engineering at the College of Computer Science and IT.",
    promptCertificate: 'شهادة هندسة الأوامر',
    promptText: 'أتممتُ برنامج «مليون خبير لأوامر الذكاء الاصطناعي».',
    promptEnglishText: 'Completed the 1 Million Prompters programme.',
    launch: 'إطلاق Viray Studio',
    launchText: 'أول تطبيق ويب أبنيه بالكامل وأنشره على الإنترنت.',
    launchEnglishText: 'The first web application I built end to end and deployed publicly.',
    native: 'اللغة الأم',
    englishLevel: 'قراءة وكتابة ومحادثة',
    contact: 'تواصل',
    contactEn: 'معلومات التواصل',
    email: 'الأيميل',
    phone: 'واتساب / هاتف',
    phoneText: '٠٧٨٣ ٢٩١ ٦٥٥٢',
    programming: 'الحلول البرمجية',
    photographyWork: 'أعمال التصوير',
    personal: 'حساب شخصي',
    skip: 'تخطَّ إلى المحتوى',
    footer: 'صمم بواسطة السيد',
  },
  en: {
    nav: ['About', 'Skills', 'Projects', 'Path', 'Contact'],
    roles: ['Software Engineering Student', 'Web Developer', 'Photographer'],
    heroSummary: 'Bringing technology and photography together to create thoughtful web experiences.',
    projectsCta: 'Explore my work',
    contactCta: 'Get in touch',
    profileAlt: 'Mustafa Safaa AbdulAlsahib',
    title: 'Mustafa Safaa AbdulAlsahib — Curriculum Vitae',
    description: 'Mustafa Safaa AbdulAlsahib — software engineering student at the University of Wasit, web developer and photographer.',
    navLabel: 'Navigation',
    themeLabel: 'Toggle theme',
    langLabel: 'Switch to Arabic',
    langText: 'Arabic',
    github: 'GitHub',
    about: 'About',
    aboutEn: 'Profile',
    aboutText: 'Software engineering student and web developer with an interest in practical AI tools and photography.',
    aboutEnglish: 'Software engineering student at the College of Computer Science and Information Technology, University of Wasit. My interest in technology and photography continues to grow, and I treat every new tool as something to master rather than merely try. Today I focus on web development and on applying AI tools across my academic and practical work.',
    skills: 'Skills',
    skillsEn: 'Technical skills',
    web: 'Web development',
    ai: 'AI prompt engineering',
    office: 'Microsoft Office suite',
    photography: 'Photography',
    work: 'Work',
    workEn: 'Selected projects',
    openSite: 'Open the site',
    projectPreview: 'Website preview',
    skillDetails: {
      web: 'HTML5 · CSS3 · JavaScript',
      ai: 'Certified by the Dubai Centre for Artificial Intelligence',
      office: 'Word · Excel · PowerPoint',
      photography: 'Professional photography',
    },
    projects: [
      { name: 'Viray Studio', category: 'Personal project', description: 'A photography studio website combining a portfolio and booking experience.', url: 'https://viraystudio.netlify.app/', image: new URL('../assets/project-viray.png', import.meta.url).href, tags: ['HTML5', 'CSS3', 'JavaScript'] },
      { name: 'ALsayed Company', category: 'E-commerce', description: 'An online store for computers, phones and tech accessories, featuring warranty, delivery and WhatsApp ordering.', url: 'https://alsayed-company.vercel.app', image: new URL('../assets/project-alsayed.png', import.meta.url).href, tags: ['E-commerce', 'Responsive', 'Web'] },
      { name: 'Rafidain Programming', category: 'Our software team', description: 'An Iraqi software team building websites, mobile apps and custom software solutions in Al-Kut.', url: 'https://al-rafidan-pro.vercel.app', image: new URL('../assets/project-rafidain.png', import.meta.url).href, tags: ['Web', 'Mobile', 'Software'] },
    ],
    certification: 'Certification',
    certificationEn: 'Certificate of completion',
    certTitle: '1 Million Prompters',
    certEnglish: '1 Million Prompters',
    certDate: 'Certificate of completion — June 2025',
    certDateEnglish: 'Certificate of completion — June 2025',
    certOrganization: 'Dubai Centre for Artificial Intelligence<br>Dubai Future Foundation',
    zoom: 'View larger',
    close: 'Close',
    path: 'Path',
    pathEn: 'Education & experience',
    timelineDetails: [
      'Professional photography practice · @vray_photography',
      'Software Engineering student · College of Computer Science & IT',
      'Dubai Centre for Artificial Intelligence · Dubai Future Foundation',
      'HTML5 · CSS3 · JavaScript · Netlify',
    ],
    beginning: 'The beginning of my journey in photography and technology',
    beginningText: 'This is where my journey in photography and technology began, and I continue to grow in both fields.',
    beginningEnglishText: 'This is where my journey in photography and technology began, and I continue to grow in both fields.',
    university: 'University of Wasit',
    universityText: "Bachelor's degree student in Software Engineering at the College of Computer Science and IT.",
    universityEnglishText: "Bachelor's degree student in Software Engineering at the College of Computer Science and IT.",
    promptCertificate: 'Prompt engineering certificate',
    promptText: 'Completed the 1 Million Prompters programme.',
    promptEnglishText: 'Completed the 1 Million Prompters programme.',
    launch: 'Viray Studio goes live',
    launchText: 'The first web application I built end to end and deployed publicly.',
    launchEnglishText: 'The first web application I built end to end and deployed publicly.',
    native: 'Native',
    englishLevel: 'Reading, writing, conversation',
    contact: 'Contact',
    contactEn: 'Get in touch',
    email: 'Email',
    phone: 'WhatsApp / phone',
    phoneText: '0783 291 6552',
    programming: 'Programming solutions',
    photographyWork: 'Photography work',
    personal: 'Personal account',
    skip: 'Skip to content',
    footer: 'Designed by Al-Sayed',
  },
};

const icons = {
  external: '<path d="M13.5 10.5 21 3M21 3h-6M21 3v6M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/>',
  mail: '<path d="M3 7.5 12 13l9-5.5"/><rect x="3" y="5" width="18" height="14" rx="3"/>',
  code: '<path d="m8 17-5-5 5-5M16 7l5 5-5 5"/>',
  spark: '<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="3.4"/>',
  office: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H17l3 3v14.5a.5.5 0 0 1-.5.5h-13A2.5 2.5 0 0 1 4 18.5Z"/><path d="M8 9h7M8 13h7M8 17h4"/>',
  camera: '<path d="M3 8.5A2.5 2.5 0 0 1 5.5 6H8l1.4-2h5.2L16 6h2.5A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5Z"/><circle cx="12" cy="12.2" r="3.4"/>',
  github: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/>',
  user: '<circle cx="12" cy="8.2" r="3.7"/><path d="M4.5 20.2a7.5 7.5 0 0 1 15 0"/>',
  navAbout: '<circle cx="12" cy="7.5" r="3.5"/><path d="M4 21a8 8 0 0 1 16 0H4Z"/><path class="icon__accent" d="M18.2 4.7 20 3m-.5 4.1 2.2-.1"/>',
  navSkills: '<path d="m12 2 2.5 6.3L21 11l-6.5 2.7L12 20l-2.5-6.3L3 11l6.5-2.7L12 2Z"/><path class="icon__accent" d="m19 15 .8 1.8 1.7.7-1.7.8-.8 1.7-.7-1.7-1.8-.8 1.8-.7L19 15Z"/>',
  navWork: '<path d="M3 7.5c0-1 .8-1.8 1.8-1.8h5.1l2 2h7.3c1 0 1.8.8 1.8 1.8v8.7c0 1-.8 1.8-1.8 1.8H4.8c-1 0-1.8-.8-1.8-1.8V7.5Z"/><path class="icon__accent" d="M4 10h16"/>',
  navPath: '<path d="M12 22s8-7.2 8-13a8 8 0 1 0-16 0c0 5.8 8 13 8 13Z"/><circle cx="12" cy="9" r="2.7" fill="var(--bg-deep)" stroke="none"/>',
  navContact: '<path d="M2 10.1 21.5 2l-7.9 19.7-3.8-7.8L2 10.1Z"/><path class="icon__accent" d="m9.8 13.9 6.1-6.1"/>',
};

const app = document.getElementById('app');
const profileImage = new URL('../assets/profile.jpg', import.meta.url).href;
const certificateImage = new URL('../assets/certificate.jpg', import.meta.url).href;
const readStorage = (key) => {
  try { return window.localStorage.getItem(key); } catch { return null; }
};
const writeStorage = (key, value) => {
  try { window.localStorage.setItem(key, value); } catch { /* Storage may be unavailable. */ }
};
let nextIconId = 0;
const icon = (name) => {
  const gradientId = `icon-gradient-${nextIconId++}`;
  const isFilled = name === 'github' || name.startsWith('nav');
  return `<svg class="icon icon--${name}" viewBox="0 0 24 24" fill="${isFilled ? `url(#${gradientId})` : 'none'}" stroke="${isFilled ? 'none' : `url(#${gradientId})`}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><defs><linearGradient id="${gradientId}" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse"><stop stop-color="var(--azure)"/><stop offset="1" stop-color="var(--amber)"/></linearGradient></defs>${icons[name]}</svg>`;
};
let language = readStorage('cv-lang') === 'en' ? 'en' : 'ar';
let theme = readStorage('cv-theme');
if (theme !== 'dark' && theme !== 'light') {
  theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}
let activeSection = 'about';
let typedRoleTimer;
let revealObserver;
let activeObserver;
let lastFocusedElement;
let previousBodyOverflow;
let previousBodyPadding;

function render() {
  const t = translations[language];
  const isArabic = language === 'ar';
  const timeline = [
    { title: t.beginning, text: isArabic ? t.beginningText : t.beginningEnglishText, detail: t.timelineDetails[0] },
    { title: t.university, text: isArabic ? t.universityText : t.universityEnglishText, detail: t.timelineDetails[1] },
    { title: t.promptCertificate, text: isArabic ? t.promptText : t.promptEnglishText, detail: t.timelineDetails[2] },
    { title: t.launch, text: isArabic ? t.launchText : t.launchEnglishText, detail: t.timelineDetails[3] },
  ];
  const skills = [
    [t.web, t.skillDetails.web, 'code'],
    [t.ai, t.skillDetails.ai, 'spark'],
    [t.office, t.skillDetails.office, 'office'],
    [t.photography, t.skillDetails.photography, 'camera'],
  ];
  const contacts = [
    { href: 'mailto:std2025.mabdul25@uowasit.edu.iq', title: t.email, text: 'std2025.mabdul25@uowasit.edu.iq', icon: 'mail' },
    { href: 'https://wa.me/9647832916552', title: t.phone, text: t.phoneText, icon: 'user', external: true },
    { href: 'https://github.com/yi3w', title: t.github, text: 'github.com/yi3w', icon: 'github', external: true },
    { href: 'https://www.instagram.com/prog_alrafidain', title: t.programming, text: '@prog_alrafidain', icon: 'instagram', external: true },
    { href: 'https://www.instagram.com/vray_photography', title: t.photographyWork, text: '@vray_photography', icon: 'camera', external: true },
    { href: 'https://www.instagram.com/yi3w', title: t.personal, text: '@yi3w', icon: 'user', external: true },
  ];
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.documentElement.dataset.theme = theme;
  document.title = t.title;
  document.querySelector('meta[name="description"]').content = t.description;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#000926' : '#D6E6F3';
  document.querySelector('meta[property="og:title"]').content = t.title;
  document.querySelector('meta[property="og:description"]').content = t.description;
  document.querySelector('meta[property="og:locale"]').content = isArabic ? 'ar_IQ' : 'en_US';
  writeStorage('cv-lang', language);
  writeStorage('cv-theme', theme);

  app.innerHTML = `
    <a class="skip" href="#about">${t.skip}</a>
    <div class="code-rain" aria-hidden="true"><span>01 · 10 · 11 · { } · &lt;/&gt; · 01 · 10 · 11 · { } · &lt;/&gt; · 01</span><span>00 · 01 · 10 · [ ] · 11 · &lt;/&gt; · 00 · 01 · 10 · [ ] · 11</span><span>10 · 11 · { } · 00 · 01 · &lt;/&gt; · 10 · 11 · { } · 00 · 01</span><span>11 · 00 · 01 · [ ] · 10 · &lt;/&gt; · 11 · 00 · 01 · [ ] · 10</span><span>01 · { } · 10 · 11 · 00 · &lt;/&gt; · 01 · { } · 10 · 11 · 00</span></div>
    <div class="aurora" aria-hidden="true"><span class="a1"></span><span class="a2"></span><span class="a3"></span></div>
    <div class="grain" aria-hidden="true"></div><div class="pointer-glow" aria-hidden="true"></div>
    <div class="scroll-progress" aria-hidden="true"><span class="scroll-progress__bar" id="scrollProgress"></span></div>
    <nav class="dock" id="dock" aria-label="${t.navLabel}"><div class="dock__inner glass">
      ${['about', 'skills', 'work', 'path', 'contact'].map((id, i) => `<a href="#${id}" aria-current="${activeSection === id}">${icon(`nav${id[0].toUpperCase()}${id.slice(1)}`)}<span>${t.nav[i]}</span></a>`).join('')}
      <span class="dock__sep" aria-hidden="true"></span>
      <button class="dock__tool dock__tool--language" type="button" data-action="language" aria-label="${t.langLabel}" title="${t.langLabel}">${t.langText}</button>
      <button class="dock__tool" type="button" data-action="theme" aria-label="${t.themeLabel}" title="${t.themeLabel}">${theme === 'dark'
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>'}</button>
    </div></nav>
    <main class="shell">
      <header class="hero" id="top"><div class="hero__grid"><div>
        <h1 class="rise"><span>${isArabic ? 'مصطفى صفاء ' : 'Mustafa '}<span class="hero__name-highlight">${isArabic ? 'عبد الصاحب' : 'Safaa AbdulAlsahib'}</span></span></h1>
        <p class="hero__role" aria-live="off" aria-label="${t.roles.join(', ')}" dir="${isArabic ? 'rtl' : 'ltr'}"><span id="typedRole"></span><span class="hero__cursor" aria-hidden="true"></span></p>
        <p class="hero__summary">${t.heroSummary}</p>
        <div class="hero__actions"><a class="btn btn--accent" href="#work">${icon('code')}<span>${t.projectsCta}</span></a><a class="btn hero__btn-secondary" href="#contact">${icon('mail')}<span>${t.contactCta}</span></a></div>
      </div><div class="portrait glass rise"><img src="${profileImage}" alt="${t.profileAlt}" width="900" height="1601" fetchpriority="high"></div></div></header>
      <div class="stack">
        <section id="about" data-section class="reveal${activeSection === 'about' ? ' is-in' : ''}"><div class="head"><h2>${t.about}</h2><span class="en" dir="${isArabic ? 'rtl' : 'ltr'}">${t.aboutEn}</span></div><div class="glass panel"><p class="${isArabic ? 'lede' : 'lede-en'}" dir="${isArabic ? 'rtl' : 'ltr'}">${isArabic ? t.aboutText : t.aboutEnglish}</p></div></section>
        <section id="skills" data-section class="reveal"><div class="head"><h2>${t.skills}</h2><span class="en" dir="${isArabic ? 'rtl' : 'ltr'}">${t.skillsEn}</span></div><div class="skills">${skills.map(([title, detail, name]) => `<article class="skill glass"><div class="skill__mark">${icon(name)}</div><h3>${title}</h3><p dir="${isArabic ? 'rtl' : 'ltr'}">${detail}</p></article>`).join('')}</div></section>
        <section id="work" data-section class="reveal"><div class="head"><h2>${t.work}</h2><span class="en" dir="${isArabic ? 'rtl' : 'ltr'}">${t.workEn}</span></div><div class="projects-list">${t.projects.map((project) => `<article class="project glass"><div class="project__body"><div class="project__kicker" dir="${isArabic ? 'rtl' : 'ltr'}">${project.category}</div><h3>${project.name}</h3><p class="project__desc">${project.description}</p><div class="tags">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}</div><div class="actions"><a class="btn btn--accent" href="${project.url}" target="_blank" rel="noopener noreferrer">${icon('external')}<span>${t.openSite}</span></a></div></div><div class="project__shot"><img class="project__screenshot" src="${project.image}" alt="${t.projectPreview}: ${project.name}" loading="lazy" width="1000" height="541"></div></article>`).join('')}</div></section>
        <section id="cert" data-section class="reveal"><div class="head"><h2>${t.certification}</h2><span class="en" dir="${isArabic ? 'rtl' : 'ltr'}">${t.certificationEn}</span></div><article class="cert glass"><div class="cert__img"><button class="cert__image-button" type="button" data-action="open-certificate" aria-label="${t.zoom}"><img src="${certificateImage}" alt="${isArabic ? t.certTitle : t.certEnglish}" width="1206" height="847" loading="lazy"></button></div><div class="cert__body"><h3>${isArabic ? t.certTitle : t.certEnglish}</h3><p class="cert__meta"><span>${isArabic ? t.certDate : t.certDateEnglish}</span><span class="en" dir="${isArabic ? 'rtl' : 'ltr'}">${t.certOrganization}</span></p><div class="actions"><button class="btn" type="button" data-action="open-certificate"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M11 8.5v5M8.5 11h5"/></svg><span>${t.zoom}</span></button></div></div></article></section>
        <section id="path" data-section class="reveal"><div class="head"><h2>${t.path}</h2><span class="en" dir="${isArabic ? 'rtl' : 'ltr'}">${t.pathEn}</span></div><div class="timeline">${timeline.map((item) => `<article class="tl glass"><h3>${item.title}</h3><p>${item.text}</p><span class="en" dir="${isArabic ? 'rtl' : 'ltr'}">${item.detail}</span></article>`).join('')}</div><div class="langs"><div class="lang glass"><b>${isArabic ? 'العربية' : 'Arabic'}</b><span>${t.native}</span></div><div class="lang glass"><b>${isArabic ? 'الإنجليزية' : 'English'}</b><span>${t.englishLevel}</span></div></div></section>
        <section id="contact" data-section class="reveal"><div class="head"><h2>${t.contact}</h2><span class="en" dir="${isArabic ? 'rtl' : 'ltr'}">${t.contactEn}</span></div><div class="contact">${contacts.map((item) => `<a class="glass" href="${item.href}" ${item.external ? 'target="_blank" rel="noopener noreferrer"' : ''}><span class="contact__ic">${icon(item.icon)}</span><span class="contact__txt"><b>${item.title}</b><span>${item.text}</span></span></a>`).join('')}</div></section>
      </div><footer><div class="sig">${t.footer}</div></footer>
    </main>
    <div class="lightbox" role="dialog" aria-modal="true" aria-label="${t.certification}" aria-hidden="true" data-open="false" id="lightbox"><button class="lightbox__close" type="button" data-action="close-certificate" aria-label="${t.close}">&times;</button><img src="${certificateImage}" alt="${isArabic ? t.certTitle : t.certEnglish}" width="1206" height="847"></div>`;
  startRoleAnimation(t.roles);
  observeSections();
}

function startRoleAnimation(roles) {
  window.clearInterval(typedRoleTimer);
  const output = document.getElementById('typedRole');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    output.textContent = roles[0];
    return;
  }
  let roleIndex = 0;
  let characterIndex = 0;
  let deleting = false;
  let pause = 0;
  typedRoleTimer = window.setInterval(() => {
    if (pause > 0) { pause -= 1; return; }
    const characters = Array.from(roles[roleIndex]);
    characterIndex += deleting ? -1 : 1;
    output.textContent = characters.slice(0, characterIndex).join('');
    if (!deleting && characterIndex === characters.length) { deleting = true; pause = 15; }
    else if (deleting && characterIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; pause = 3; }
  }, 85);
}

function observeSections() {
  revealObserver?.disconnect();
  activeObserver?.disconnect();
  const sections = [...document.querySelectorAll('[data-section]')];
  if (!('IntersectionObserver' in window)) {
    sections.forEach((section) => section.classList.add('is-in'));
    return;
  }
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-in'); });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
  activeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      activeSection = entry.target.id;
      document.querySelectorAll('.dock a').forEach((link) => {
        link.setAttribute('aria-current', String(link.hash === `#${activeSection}`));
      });
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  sections.forEach((section) => {
    revealObserver.observe(section);
    if (section.id !== 'cert') activeObserver.observe(section);
  });
}

function setLightbox(open) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  lightbox.dataset.open = String(open);
  lightbox.setAttribute('aria-hidden', String(!open));
  if (open) {
    lastFocusedElement = document.activeElement;
    previousBodyOverflow = document.body.style.overflow;
    previousBodyPadding = document.body.style.paddingInlineEnd;
    const scrollbarGap = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarGap > 0) document.body.style.paddingInlineEnd = `${scrollbarGap}px`;
    lightbox.querySelector('.lightbox__close').focus();
  } else {
    document.body.style.overflow = previousBodyOverflow;
    document.body.style.paddingInlineEnd = previousBodyPadding;
    lastFocusedElement?.focus();
  }
}

app.addEventListener('click', (event) => {
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (action === 'language') {
    language = language === 'ar' ? 'en' : 'ar';
    render();
  } else if (action === 'theme') {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#000926' : '#D6E6F3';
    writeStorage('cv-theme', theme);
    event.target.closest('button').innerHTML = theme === 'dark'
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>';
  } else if (action === 'open-certificate') {
    setLightbox(true);
  } else if (action === 'close-certificate' || (event.target.id === 'lightbox')) {
    setLightbox(false);
  }
});

document.addEventListener('keydown', (event) => {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox || lightbox.dataset.open !== 'true') return;
  if (event.key === 'Escape') setLightbox(false);
  if (event.key === 'Tab') {
    event.preventDefault();
    lightbox.querySelector('.lightbox__close').focus();
  }
});

let scrollFrame = 0;
const updateScrollProgress = () => {
  scrollFrame = 0;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
  document.getElementById('scrollProgress')?.style.setProperty('--scroll-progress', progress);
};
window.addEventListener('scroll', () => {
  if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScrollProgress);
}, { passive: true });
window.addEventListener('resize', updateScrollProgress);
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let pointerFrame = 0;
  window.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse' || pointerFrame) return;
    pointerFrame = window.requestAnimationFrame(() => {
      const root = document.documentElement;
      root.style.setProperty('--pointer-x', `${event.clientX}px`);
      root.style.setProperty('--pointer-y', `${event.clientY}px`);
      root.classList.add('has-pointer-glow');
      pointerFrame = 0;
    });
  }, { passive: true });
}

render();
document.documentElement.classList.remove('no-js');
updateScrollProgress();
