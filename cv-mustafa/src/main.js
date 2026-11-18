const translations = {
  ar: {
    nav: ['نبذة', 'المهارات', 'المشاريع', 'المسار', 'تواصل'],
    roles: ['طالب علوم برامجيات', 'مطوّر ويب', 'مصوّر فوتوغرافي'],
    heroSummary: 'شغوف بالبرمجة والتصوير، وأسعى إلى التعلم والاكتشاف والتطوير في عالم الحاسوب والتقنية.',
    continueJourney: 'اكتشف الرحلة',
    projectsCta: 'شاهد أعمالي',
    contactCta: 'تواصل معي',
    profileAlt: 'مصطفى صفاء عبد الصاحب',
    title: 'مصطفى صفاء عبد الصاحب — السيرة الذاتية',
    description: 'مصطفى صفاء عبد الصاحب — طالب بكالوريوس في قسم علوم البرامجيات بجامعة واسط، مهتم بالبرمجة والتقنية والتصوير.',
    navLabel: 'التنقل',
    preferencesLabel: 'إعدادات اللغة والمظهر',
    themeLabel: 'تبديل المظهر',
    langLabel: 'التبديل إلى الإنجليزية',
    langText: 'إنجليزي',
    github: 'حساب GitHub',
    about: 'نبذة',
    aboutEn: 'نبذة شخصية',
    aboutText: 'طالب بكالوريوس في قسم علوم البرامجيات بكلية علوم الحاسوب وتكنولوجيا المعلومات في جامعة واسط، وشغوف بالبرمجة والتصوير والتقنية.',
    aboutEnglish: 'Bachelor’s student in the Department of Software Sciences at the College of Computer Science and Information Technology, University of Wasit. Passionate about programming, photography, and technology.',
    skills: 'المهارات',
    skillsEn: 'المهارات التقنية',
    web: 'تطوير الويب',
    ai: 'هندسة أوامر الذكاء الاصطناعي',
    photography: 'التصوير الفوتوغرافي',
    work: 'الأعمال',
    workEn: 'مشاريع مختارة',
    openSite: 'افتح الموقع',
    projectPreview: 'معاينة موقع',
    skillDetails: {
      web: 'HTML5 · CSS3 · JavaScript',
      ai: 'معتمد من مركز دبي للذكاء الاصطناعي',
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
    pathEn: 'التعليم والتخصص',
    universityYear: '2024 — إلى الآن',
    university: 'جامعة واسط',
    universityText: 'طالب بكالوريوس في قسم علوم البرامجيات، كلية علوم الحاسوب وتكنولوجيا المعلومات.',
    universityEnglishText: "Bachelor's student in the Department of Software Sciences, College of Computer Science and Information Technology.",
    promptCertificate: '2025',
    promptText: 'شهادة هندسة الأوامر.',
    promptEnglishText: 'Prompt Engineering Certificate.',
    specializationYear: '2026',
    specializationText: 'تخصصت في الفرع الجديد: برمجة الأنظمة الطبية الذكية الحديثة.',
    specializationEnglishText: 'Specialized in the new field of modern intelligent medical systems programming.',
    campusVideoHeading: 'كلية علوم الحاسوب وتكنولوجيا المعلومات — جامعة واسط',
    contact: 'تواصل',
    contactEn: 'معلومات التواصل',
    email: 'البريد الإلكتروني',
    phone: 'واتساب',
    programming: 'الحلول البرمجية',
    photographyWork: 'أعمال التصوير',
    personal: 'حساب شخصي',
    skip: 'تخطَّ إلى المحتوى',
    footer: 'جميع حقوق التصميم محفوظة لدى مصطفى صفاء',
  },
  en: {
    nav: ['About', 'Skills', 'Projects', 'Path', 'Contact'],
    roles: ['Software Sciences Student', 'Web Developer', 'Photographer'],
    heroSummary: 'Passionate about programming and photography, I strive to keep learning, exploring, and growing in computing and technology.',
    continueJourney: 'Scroll to explore',
    projectsCta: 'Explore my work',
    contactCta: 'Get in touch',
    profileAlt: 'Mustafa Safaa AbdulAlsahib',
    title: 'Mustafa Safaa AbdulAlsahib — Curriculum Vitae',
    description: 'Mustafa Safaa AbdulAlsahib — bachelor’s student in Software Sciences at the University of Wasit, passionate about programming, technology, and photography.',
    navLabel: 'Navigation',
    preferencesLabel: 'Language and appearance settings',
    themeLabel: 'Toggle theme',
    langLabel: 'Switch to Arabic',
    langText: 'Arabic',
    github: 'GitHub',
    about: 'About',
    aboutEn: 'Profile',
    aboutText: 'Bachelor’s student in the Department of Software Sciences at the College of Computer Science and Information Technology, University of Wasit. Passionate about programming, photography, and technology.',
    aboutEnglish: 'Bachelor’s student in the Department of Software Sciences at the College of Computer Science and Information Technology, University of Wasit. Passionate about programming, photography, and technology.',
    skills: 'Skills',
    skillsEn: 'Technical skills',
    web: 'Web development',
    ai: 'AI prompt engineering',
    photography: 'Photography',
    work: 'Work',
    workEn: 'Selected projects',
    openSite: 'Open the site',
    projectPreview: 'Website preview',
    skillDetails: {
      web: 'HTML5 · CSS3 · JavaScript',
      ai: 'Certified by the Dubai Centre for Artificial Intelligence',
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
    pathEn: 'Education & specialization',
    universityYear: '2024 — Present',
    university: 'University of Wasit',
    universityText: "Bachelor's student in the Department of Software Sciences, College of Computer Science and Information Technology.",
    universityEnglishText: "Bachelor's student in the Department of Software Sciences, College of Computer Science and Information Technology.",
    promptCertificate: '2025',
    promptText: 'Prompt Engineering Certificate.',
    promptEnglishText: 'Prompt Engineering Certificate.',
    specializationYear: '2026',
    specializationText: 'Specialized in the new field of modern intelligent medical systems programming.',
    specializationEnglishText: 'Specialized in the new field of modern intelligent medical systems programming.',
    campusVideoHeading: 'College of Computer Science and Information Technology — University of Wasit',
    contact: 'Contact',
    contactEn: 'Get in touch',
    email: 'Email',
    phone: 'WhatsApp',
    programming: 'Programming solutions',
    photographyWork: 'Photography work',
    personal: 'Personal account',
    skip: 'Skip to content',
    footer: 'All design rights reserved by Mustafa Safaa',
  },
};

const icons = {
  external: '<path d="M13.5 10.5 21 3M21 3h-6M21 3v6M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/>',
  mail: '<path d="M3 7.5 12 13l9-5.5"/><rect x="3" y="5" width="18" height="14" rx="3"/>',
  code: '<path d="m8 17-5-5 5-5M16 7l5 5-5 5"/>',
  spark: '<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="3.4"/>',
  camera: '<path d="M3 8.5A2.5 2.5 0 0 1 5.5 6H8l1.4-2h5.2L16 6h2.5A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5Z"/><circle cx="12" cy="12.2" r="3.4"/>',
  github: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/>',
  user: '<circle cx="12" cy="8.2" r="3.7"/><path d="M4.5 20.2a7.5 7.5 0 0 1 15 0"/>',
};

const preferenceToggleIcons = {
  closed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="12" x="3" y="6" rx="6"/><circle cx="9" cy="12" r="2.7"/></svg>',
  open: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="12" x="3" y="6" rx="6"/><circle cx="15" cy="12" r="2.7"/></svg>',
};

const app = document.getElementById('app');
const profileImage = new URL('../assets/profile.jpg', import.meta.url).href;
const certificateImage = new URL('../assets/certificate.jpg', import.meta.url).href;
const universityVideo = new URL('../assets/university-wasit.mp4', import.meta.url).href;
const universityPoster = new URL('../assets/university-wasit-poster.jpg', import.meta.url).href;
const readStorage = (key) => {
  try { return window.localStorage.getItem(key); } catch { return null; }
};
const writeStorage = (key, value) => {
  try { window.localStorage.setItem(key, value); } catch { /* Storage may be unavailable. */ }
};
let nextIconId = 0;
const icon = (name) => {
  const gradientId = `icon-gradient-${nextIconId++}`;
  const isFilled = name === 'github';
  return `<svg class="icon icon--${name}" viewBox="0 0 24 24" fill="${isFilled ? `url(#${gradientId})` : 'none'}" stroke="${isFilled ? 'none' : `url(#${gradientId})`}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><defs><linearGradient id="${gradientId}" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse"><stop stop-color="var(--azure)"/><stop offset="1" stop-color="var(--amber)"/></linearGradient></defs>${icons[name]}</svg>`;
};
let language = readStorage('cv-lang') === 'en' ? 'en' : 'ar';
let theme = readStorage('cv-theme');
if (theme !== 'dark' && theme !== 'light') {
  theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}
let activeSection = 'about';
document.documentElement.dataset.sceneChapter = activeSection;
let typedRoleTimer;
let revealObserver;
let activeObserver;
let finalCaptureArmed = true;
let captureSequenceTimeout;
let lastFocusedElement;
let previousBodyOverflow;
let previousBodyPadding;

function render() {
  const t = translations[language];
  const isArabic = language === 'ar';
  const timeline = [
    { title: t.universityYear, text: isArabic ? t.universityText : t.universityEnglishText, detail: t.university },
    { title: t.promptCertificate, text: isArabic ? t.promptText : t.promptEnglishText },
    { title: t.specializationYear, text: isArabic ? t.specializationText : t.specializationEnglishText },
  ];
  const skills = [
    [t.web, t.skillDetails.web, 'code'],
    [t.ai, t.skillDetails.ai, 'spark'],
    [t.photography, t.skillDetails.photography, 'camera'],
  ];
  const contacts = [
    { href: 'mailto:std2025.mabdul25@uowasit.edu.iq', title: t.email, icon: 'mail' },
    { href: 'https://wa.me/9647832916552', title: t.phone, icon: 'user', external: true },
    { href: 'https://github.com/yi3w', title: t.github, icon: 'github', external: true },
    { href: 'https://www.instagram.com/prog_alrafidain', title: t.programming, icon: 'instagram', external: true },
    { href: 'https://www.instagram.com/vray_photography', title: t.photographyWork, icon: 'camera', external: true },
    { href: 'https://www.instagram.com/yi3w', title: t.personal, icon: 'user', external: true },
  ];
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.documentElement.dataset.theme = theme;
  document.title = t.title;
  document.querySelector('meta[name="description"]').content = t.description;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#000926' : '#D6E6F3';
  document.querySelector('meta[property="og:title"]').content = t.title;
  document.querySelector('meta[property="og:description"]').content = t.description;
  document.querySelector('meta[property="og:image"]').content = profileImage;
  document.querySelector('meta[property="og:locale"]').content = isArabic ? 'ar_IQ' : 'en_US';
  writeStorage('cv-lang', language);
  writeStorage('cv-theme', theme);

  app.innerHTML = `
    <a class="skip" href="#about">${t.skip}</a>
    <div class="aurora" aria-hidden="true"><span class="a1"></span><span class="a2"></span><span class="a3"></span></div>
    <div class="grain" aria-hidden="true"></div><div class="pointer-glow" aria-hidden="true"></div>
    <div class="scroll-progress" aria-hidden="true"><span class="scroll-progress__bar" id="scrollProgress"></span></div>
    <nav class="dock" id="dock" aria-label="${t.navLabel}"><div class="dock__inner glass">
      ${['about', 'skills', 'work', 'path', 'contact'].map((id, i) => `<a href="#${id}" aria-current="${activeSection === id}"><span>${t.nav[i]}</span></a>`).join('')}
      <span class="dock__sep" aria-hidden="true"></span>
      <button class="dock__tool dock__preferences-toggle" type="button" data-action="preferences" aria-label="${t.preferencesLabel}" title="${t.preferencesLabel}" aria-expanded="false" aria-controls="dockPreferencesPanel">
        ${preferenceToggleIcons.closed}
      </button>
    </div></nav>
    <div class="dock__preferences-panel glass" id="dockPreferencesPanel" role="group" aria-label="${t.preferencesLabel}" hidden>
      <button class="dock__tool dock__tool--language" type="button" data-action="language" aria-label="${t.langLabel}" title="${t.langLabel}">${t.langText}</button>
      <button class="dock__tool" type="button" data-action="theme" aria-label="${t.themeLabel}" title="${t.themeLabel}">${theme === 'dark'
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>'}</button>
    </div>
    <main class="shell">
      <header class="hero" id="top"><div class="hero__grid"><div>
        <h1 class="rise"><span>${isArabic ? 'مصطفى صفاء عبد الصاحب' : 'Mustafa Safaa AbdulAlsahib'}</span></h1>
        <p class="hero__role" aria-live="off" aria-label="${t.roles.join(', ')}" dir="${isArabic ? 'rtl' : 'ltr'}"><span id="typedRole"></span><span class="hero__cursor" aria-hidden="true"></span></p>
        <p class="hero__summary">${t.heroSummary}</p>
        <div class="hero__actions"><a class="btn btn--accent" href="#work">${icon('code')}<span>${t.projectsCta}</span></a><a class="btn hero__btn-secondary" href="#contact">${icon('mail')}<span>${t.contactCta}</span></a></div>
      </div><div class="portrait glass rise"><img src="${profileImage}" alt="${t.profileAlt}" width="900" height="1601" fetchpriority="high"></div></div><a class="scroll-cue" href="#about"><span>${t.continueJourney}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg></a></header>
      <div class="stack">
        <section id="about" data-section class="reveal${activeSection === 'about' ? ' is-in' : ''}"><div class="head"><h2>${t.about}</h2><span class="en" dir="${isArabic ? 'rtl' : 'ltr'}">${t.aboutEn}</span></div><div class="glass panel"><p class="${isArabic ? 'lede' : 'lede-en'}" dir="${isArabic ? 'rtl' : 'ltr'}">${isArabic ? t.aboutText : t.aboutEnglish}</p></div></section>
        <section id="skills" data-section class="reveal"><div class="head"><h2>${t.skills}</h2><span class="en" dir="${isArabic ? 'rtl' : 'ltr'}">${t.skillsEn}</span></div><div class="skills">${skills.map(([title, detail, name]) => `<article class="skill glass"><div class="skill__mark">${icon(name)}</div><h3>${title}</h3><p dir="${isArabic ? 'rtl' : 'ltr'}">${detail}</p></article>`).join('')}</div></section>
        <section id="work" data-section class="reveal"><div class="head"><h2>${t.work}</h2><span class="en" dir="${isArabic ? 'rtl' : 'ltr'}">${t.workEn}</span></div><div class="projects-list">${t.projects.map((project) => `<article class="project glass"><div class="project__body"><div class="project__kicker" dir="${isArabic ? 'rtl' : 'ltr'}">${project.category}</div><h3>${project.name}</h3><p class="project__desc">${project.description}</p><div class="tags">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}</div><div class="actions"><a class="btn btn--accent" href="${project.url}" target="_blank" rel="noopener noreferrer">${icon('external')}<span>${t.openSite}</span></a></div></div><div class="project__shot"><img class="project__screenshot" src="${project.image}" alt="${t.projectPreview}: ${project.name}" loading="lazy" width="1000" height="541"></div></article>`).join('')}</div></section>
        <section id="cert" data-section class="reveal"><div class="head"><h2>${t.certification}</h2><span class="en" dir="${isArabic ? 'rtl' : 'ltr'}">${t.certificationEn}</span></div><article class="cert glass"><div class="cert__img"><button class="cert__image-button" type="button" data-action="open-certificate" aria-label="${t.zoom}"><img src="${certificateImage}" alt="${isArabic ? t.certTitle : t.certEnglish}" width="1206" height="847" loading="lazy"></button></div><div class="cert__body"><h3>${isArabic ? t.certTitle : t.certEnglish}</h3><p class="cert__meta"><span>${isArabic ? t.certDate : t.certDateEnglish}</span><span class="en" dir="${isArabic ? 'rtl' : 'ltr'}">${t.certOrganization}</span></p><div class="actions"><button class="btn" type="button" data-action="open-certificate"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M11 8.5v5M8.5 11h5"/></svg><span>${t.zoom}</span></button></div></div></article></section>
        <section id="path" data-section class="reveal"><div class="head"><h2>${t.path}</h2><span class="en" dir="${isArabic ? 'rtl' : 'ltr'}">${t.pathEn}</span></div><div class="timeline">${timeline.map((item) => `<article class="tl glass"><h3>${item.title}</h3><p>${item.text}</p>${item.detail ? `<span class="en" dir="${isArabic ? 'rtl' : 'ltr'}">${item.detail}</span>` : ''}</article>`).join('')}</div><figure class="campus-video glass"><video src="${universityVideo}" poster="${universityPoster}" controls playsinline preload="none" aria-label="${t.campusVideoHeading}"></video><figcaption><strong>${t.campusVideoHeading}</strong></figcaption></figure></section>
        <section id="contact" data-section class="reveal"><div class="head"><h2>${t.contact}</h2><span class="en" dir="${isArabic ? 'rtl' : 'ltr'}">${t.contactEn}</span></div><div class="contact">${contacts.map((item) => `<a class="glass" href="${item.href}" aria-label="${item.title}" ${item.external ? 'target="_blank" rel="noopener noreferrer"' : ''}><span class="contact__ic">${icon(item.icon)}</span><span class="contact__txt"><b>${item.title}</b></span></a>`).join('')}</div></section>
      </div><footer><div class="sig">${t.footer}</div></footer>
    </main>
      <div class="capture-sequence" id="finalCapture" aria-hidden="true" hidden>
        <span class="capture-sequence__flash"></span>
        <span class="capture-sequence__ring capture-sequence__ring--one"></span>
        <span class="capture-sequence__ring capture-sequence__ring--two"></span>
        <span class="capture-sequence__ring capture-sequence__ring--three"></span>
        <span class="capture-sequence__iris"><i></i></span>
      </div>
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
      const sceneChapter = entry.target.id;
      activeSection = sceneChapter === 'cert' ? 'path' : sceneChapter;
      document.documentElement.dataset.sceneChapter = sceneChapter;
      document.querySelectorAll('.dock a').forEach((link) => {
        link.setAttribute('aria-current', String(link.hash === `#${activeSection}`));
      });
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  sections.forEach((section) => {
    revealObserver.observe(section);
    activeObserver.observe(section);
  });
}

function installChapterNavigation() {
  let chapterLocked = false;
  let unlockTimer;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const moveChapter = (direction) => {
    const chapters = [
      document.getElementById('top'),
      ...document.querySelectorAll('[data-section]'),
    ].filter(Boolean);
    const center = window.innerHeight / 2;
    let currentIndex = chapters.findIndex((chapter) => {
      const bounds = chapter.getBoundingClientRect();
      return bounds.top <= center && bounds.bottom > center;
    });
    if (currentIndex < 0) {
      currentIndex = chapters.reduce((closest, chapter, index) => {
        const distance = Math.abs(chapter.getBoundingClientRect().top - center);
        return distance < closest.distance ? { index, distance } : closest;
      }, { index: 0, distance: Infinity }).index;
    }

    const current = chapters[currentIndex];
    const bounds = current.getBoundingClientRect();
    const oversized = bounds.height > window.innerHeight + 24;
    let behavior = reducedMotion.matches ? 'instant' : 'smooth';

    if (oversized && direction > 0 && bounds.bottom > window.innerHeight + 32) {
      return false;
    }
    if (oversized && direction < 0 && bounds.top < -32) {
      return false;
    }
    const next = chapters[currentIndex + direction];
    if (!next) return false;
    next.scrollIntoView({ block: 'start', behavior });

    chapterLocked = true;
    window.clearTimeout(unlockTimer);
    unlockTimer = window.setTimeout(() => { chapterLocked = false; }, reducedMotion.matches ? 120 : 850);
    return true;
  };

  window.addEventListener('wheel', (event) => {
    if (reducedMotion.matches || event.ctrlKey || Math.abs(event.deltaY) < 6
      || (event.target instanceof Element && event.target.closest('video, audio, input, textarea, select, [contenteditable="true"]'))
      || document.getElementById('lightbox')?.dataset.open === 'true') return;
    if (chapterLocked) {
      event.preventDefault();
      return;
    }
    if (moveChapter(Math.sign(event.deltaY))) event.preventDefault();
  }, { passive: false });

  document.addEventListener('keydown', (event) => {
    if (reducedMotion.matches || event.altKey || event.ctrlKey || event.metaKey
      || document.getElementById('lightbox')?.dataset.open === 'true'
      || (event.target instanceof Element && event.target.closest('a, button, input, textarea, select, video, [contenteditable="true"]'))) return;
    const direction = ['ArrowDown', 'PageDown', ' '].includes(event.key) ? 1
      : ['ArrowUp', 'PageUp'].includes(event.key) ? -1
        : 0;
    if (direction && moveChapter(direction)) event.preventDefault();
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
    const closeButton = lightbox.querySelector('.lightbox__close');
    closeButton?.focus({ preventScroll: true });
    window.setTimeout(() => {
      if (lightbox.dataset.open === 'true') closeButton?.focus({ preventScroll: true });
    }, 50);
  } else {
    document.body.style.overflow = previousBodyOverflow;
    document.body.style.paddingInlineEnd = previousBodyPadding;
    lastFocusedElement?.focus();
  }
}

function closePreferencesPanel() {
  const panel = document.getElementById('dockPreferencesPanel');
  if (!panel || panel.hidden) return;
  panel.hidden = true;
  const button = document.querySelector('[data-action="preferences"]');
  button?.setAttribute('aria-expanded', 'false');
  if (button) button.innerHTML = preferenceToggleIcons.closed;
}

app.addEventListener('click', (event) => {
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (action === 'preferences') {
    const button = event.target.closest('button');
    const panel = document.getElementById('dockPreferencesPanel');
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    button.innerHTML = preferenceToggleIcons[open ? 'open' : 'closed'];
    panel.hidden = !open;
    if (open) {
      const bounds = button.getBoundingClientRect();
      const left = Math.max(8, Math.min(bounds.left + bounds.width / 2 - panel.offsetWidth / 2, window.innerWidth - panel.offsetWidth - 8));
      const top = Math.min(bounds.bottom + 8, window.innerHeight - panel.offsetHeight - 8);
      panel.style.left = `${left}px`;
      panel.style.top = `${top}px`;
    }
  } else if (action === 'language') {
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
    event.preventDefault();
    setLightbox(true);
  } else if (action === 'close-certificate' || (event.target.id === 'lightbox')) {
    setLightbox(false);
  }

  if (!event.target.closest('#dockPreferencesPanel') && action !== 'preferences') closePreferencesPanel();
});

document.addEventListener('keydown', (event) => {
  const preferencesPanel = document.getElementById('dockPreferencesPanel');
  if (event.key === 'Escape' && preferencesPanel && !preferencesPanel.hidden) {
    closePreferencesPanel();
    document.querySelector('[data-action="preferences"]')?.focus();
  }

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
  const endThreshold = Math.max(96, Math.min(180, window.innerHeight * 0.16));
  if (progress < 0.82) finalCaptureArmed = true;
  if (!finalCaptureArmed || scrollable <= 0
    || window.scrollY + window.innerHeight < document.documentElement.scrollHeight - endThreshold) return;

  finalCaptureArmed = false;
  document.documentElement.dataset.cameraCapture = 'true';
  document.documentElement.dataset.cameraCaptureTime = String(performance.now());
  window.dispatchEvent(new Event('camera:shutter'));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sequence = document.getElementById('finalCapture');
  if (!sequence) return;
  window.clearTimeout(captureSequenceTimeout);
  sequence.hidden = false;
  sequence.classList.remove('is-active');
  void sequence.offsetWidth;
  sequence.classList.add('is-active');
  captureSequenceTimeout = window.setTimeout(() => {
    const activeSequence = document.getElementById('finalCapture');
    if (!activeSequence) return;
    activeSequence.classList.remove('is-active');
    activeSequence.hidden = true;
  }, reducedMotion ? 420 : 2600);
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
installChapterNavigation();

const experienceScene = document.getElementById('experienceScene');
if (experienceScene && 'WebGLRenderingContext' in window) {
  const loadAmbientScene = () => {
    import('./ambient-scene.js')
      .then(({ initAmbientScene }) => initAmbientScene(experienceScene))
      .catch((error) => console.error('Unable to load the ambient 3D scene.', error));
  };
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadAmbientScene, { timeout: 2000 });
  } else {
    window.setTimeout(loadAmbientScene, 300);
  }
}
