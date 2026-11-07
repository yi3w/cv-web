import { useEffect, useRef, useState } from 'react';
import profileImage from '../assets/profile.jpg';
import certificateImage from '../assets/certificate.jpg';

const translations = {
  ar: {
    nav: ['نبذة', 'المهارات', 'المشاريع', 'المسار', 'تواصل'],
    roles: ['طالب هندسة برمجيات', 'مطوّر ويب', 'مصوّر فوتوغرافي'],
    studyBadge: 'طالب هندسة برمجيات',
    universityBadge: 'جامعة واسط',
    nameSubline: 'Mustafa Safaa AbdulAlsahib',
    heroSummary: 'أجمع بين شغفي بالتقنية والتصوير، وأبني تجارب ويب تفاعلية.',
    projectsCta: 'شاهد أعمالي',
    contactCta: 'تواصل معي',
    profileAlt: 'مصطفى صفاء عبد الصاحب',
    title: 'مصطفى صفاء عبد الصاحب — السيرة الذاتية',
    description: 'مصطفى صفاء عبد الصاحب — طالب هندسة برمجيات في جامعة واسط، مطوّر ويب ومصوّر فوتوغرافي.',
    navLabel: 'التنقل',
    themeLabel: 'تبديل المظهر',
    langLabel: 'Switch to English',
    langText: 'EN',
    about: 'نبذة',
    aboutEn: 'About',
    aboutText: 'طالب في كلية علوم الحاسوب وتكنولوجيا المعلومات بجامعة واسط، تخصص البرمجيات. أعمل على تطوير تطبيقات الويب الحديثة، وتوظيف أدوات الذكاء الاصطناعي في عملي.',
    aboutEnglish: 'Software engineering student at the College of Computer Science and Information Technology, University of Wasit. I stepped into technology and photography in 2012 and still treat every new tool as something to master rather than merely try. Today I focus on web development and on applying AI tools across my academic and practical work.',
    skills: 'المهارات',
    skillsEn: 'Skills',
    web: 'تطوير الويب',
    ai: 'هندسة أوامر الذكاء الاصطناعي',
    office: 'حزمة Microsoft Office',
    photography: 'التصوير الفوتوغرافي',
    work: 'الأعمال',
    workEn: 'Selected project',
    projectText: 'تطبيق ويب لاستوديو تصوير فوتوغرافي: صفحة عرض للأعمال وواجهة حجز، مبني من الصفر ومنشور على الإنترنت.',
    projectEnglish: 'A web application for a photography studio: a portfolio surface and a booking interface, built from scratch and deployed live.',
    openSite: 'افتح الموقع',
    source: 'الشيفرة',
    projectNote: 'إلى جانب ذلك، شاركتُ في عدد من المشاريع الدراسية داخل الكلية والجامعة.',
    projectNoteEnglish: 'Alongside this, I have taken part in a number of academic projects within the college and the university.',
    projects: [
      { name: 'Viray Studio', category: 'مشروع شخصي', description: 'تطبيق ويب لاستوديو تصوير فوتوغرافي، يجمع معرض الأعمال وواجهة الحجز.', url: 'https://viraystudio.netlify.app/', tags: ['HTML5', 'CSS3', 'JavaScript'] },
      { name: 'ALsayed Company', category: 'متجر إلكتروني', description: 'متجر للأجهزة التقنية والهواتف والإكسسوارات، مع عرض الضمان والتوصيل والطلب عبر واتساب.', url: 'https://alsayed-company.vercel.app', tags: ['E-commerce', 'Responsive', 'Web'] },
      { name: 'برمجة الرافدين', category: 'فريقنا البرمجي', description: 'فريق عراقي يطوّر المواقع وتطبيقات الهاتف والحلول البرمجية في الكوت.', url: 'https://al-rafidan-pro.vercel.app', tags: ['Web', 'Mobile', 'Software'] },
    ],
    certification: 'الشهادة',
    certTitle: 'مليون خبير لأوامر الذكاء الاصطناعي',
    certEnglish: '1 Million Prompters',
    certDate: 'شهادة إتمام — حزيران ٢٠٢٥',
    certDateEnglish: 'Certificate of completion — June 2025',
    zoom: 'تكبير الشهادة',
    zoomEnglish: 'View larger',
    close: 'إغلاق',
    path: 'المسار',
    pathEn: 'Education & experience',
    beginning: 'بداية مسيرتي في عالم التصوير والتقنية',
    beginningEnglish: 'The beginning of my journey in photography and technology',
    beginningText: 'من هنا بدأت رحلتي في التصوير والتقنية، وما زلت أطور خبرتي فيهما.',
    beginningEnglishText: 'This is where my journey in photography and technology began, and I continue to grow in both fields.',
    university: 'جامعة واسط',
    universityEnglish: 'University of Wasit',
    universityText: 'طالب بكالوريوس في هندسة البرمجيات، كلية علوم الحاسوب وتكنولوجيا المعلومات.',
    universityEnglishText: "Bachelor's degree student in Software Engineering at the College of Computer Science and IT.",
    promptCertificate: 'شهادة هندسة الأوامر',
    promptCertificateEnglish: 'Prompt engineering certificate',
    promptText: 'أتممتُ برنامج «مليون خبير لأوامر الذكاء الاصطناعي» في حزيران.',
    promptEnglishText: 'Completed the 1 Million Prompters programme in June.',
    launch: 'إطلاق Viray Studio',
    launchEnglish: 'Viray Studio goes live',
    launchText: 'أول تطبيق ويب أبنيه بالكامل وأنشره على الإنترنت.',
    launchEnglishText: 'The first web application I built end to end and deployed publicly.',
    native: 'اللغة الأم',
    nativeEnglish: 'Native',
    englishLevel: 'قراءة وكتابة ومحادثة',
    englishLevelEnglish: 'Reading, writing, conversation',
    contact: 'تواصل',
    contactEn: 'Contact',
    email: 'الأيميل',
    phone: 'واتساب / هاتف',
    programming: 'الحلول البرمجية',
    photographyWork: 'أعمال التصوير',
    personal: 'حساب شخصي',
    skip: 'تخطَّ إلى المحتوى',
    footer: 'صمم بواسطة السيد',
  },
  en: {
    nav: ['About', 'Skills', 'Projects', 'Path', 'Contact'],
    roles: ['Software Engineering Student', 'Web Developer', 'Photographer'],
    studyBadge: 'Software Engineering',
    universityBadge: 'University of Wasit',
    nameSubline: 'Software Engineering · University of Wasit',
    heroSummary: 'Bringing technology and photography together to create thoughtful web experiences.',
    projectsCta: 'Explore my work',
    contactCta: 'Get in touch',
    profileAlt: 'Mustafa Safaa AbdulAlsahib',
    title: 'Mustafa Safaa AbdulAlsahib — Curriculum Vitae',
    description: 'Mustafa Safaa AbdulAlsahib — software engineering student at the University of Wasit, web developer and photographer.',
    navLabel: 'Navigation',
    themeLabel: 'Toggle theme',
    langLabel: 'Switch to Arabic',
    langText: 'AR',
    about: 'About',
    aboutEn: 'Profile',
    aboutText: 'Software engineering student and web developer with an interest in practical AI tools and photography.',
    aboutEnglish: 'Software engineering student at the College of Computer Science and Information Technology, University of Wasit. I stepped into technology and photography in 2012 and still treat every new tool as something to master rather than merely try. Today I focus on web development and on applying AI tools across my academic and practical work.',
    skills: 'Skills',
    skillsEn: 'Technical skills',
    web: 'Web development',
    ai: 'AI prompt engineering',
    office: 'Microsoft Office suite',
    photography: 'Photography',
    work: 'Work',
    workEn: 'Selected projects',
    projectText: 'A web application for a photography studio: a portfolio surface and a booking interface, built from scratch and deployed live.',
    projectEnglish: 'A web application for a photography studio: a portfolio surface and a booking interface, built from scratch and deployed live.',
    openSite: 'Open the site',
    source: 'Source code',
    projectNote: 'Alongside these projects, I have also taken part in academic projects at the college and university.',
    projectNoteEnglish: 'Alongside this, I have taken part in a number of academic projects within the college and the university.',
    projects: [
      { name: 'Viray Studio', category: 'Personal project', description: 'A photography studio website combining a portfolio and booking experience.', url: 'https://viraystudio.netlify.app/', tags: ['HTML5', 'CSS3', 'JavaScript'] },
      { name: 'ALsayed Company', category: 'E-commerce', description: 'An online store for computers, phones and tech accessories, featuring warranty, delivery and WhatsApp ordering.', url: 'https://alsayed-company.vercel.app', tags: ['E-commerce', 'Responsive', 'Web'] },
      { name: 'Rafidain Programming', category: 'Our software team', description: 'An Iraqi software team building websites, mobile apps and custom software solutions in Al-Kut.', url: 'https://al-rafidan-pro.vercel.app', tags: ['Web', 'Mobile', 'Software'] },
    ],
    certification: 'Certification',
    certTitle: '1 Million Prompters',
    certEnglish: '1 Million Prompters',
    certDate: 'Certificate of completion — June 2025',
    certDateEnglish: 'Certificate of completion — June 2025',
    zoom: 'View larger',
    zoomEnglish: 'View larger',
    close: 'Close',
    path: 'Path',
    pathEn: 'Education & experience',
    beginning: 'The beginning of my journey in photography and technology',
    beginningEnglish: 'The beginning of my journey in photography and technology',
    beginningEnglishText: 'This is where my journey in photography and technology began, and I continue to grow in both fields.',
    university: 'University of Wasit',
    universityEnglish: 'University of Wasit',
    universityEnglishText: "Bachelor's degree student in Software Engineering at the College of Computer Science and IT.",
    promptCertificate: 'Prompt engineering certificate',
    promptCertificateEnglish: 'Prompt engineering certificate',
    promptEnglishText: 'Completed the 1 Million Prompters programme in June.',
    launch: 'Viray Studio goes live',
    launchEnglish: 'Viray Studio goes live',
    launchEnglishText: 'The first web application I built end to end and deployed publicly.',
    native: 'Native',
    englishLevel: 'Reading, writing, conversation',
    contact: 'Contact',
    contactEn: 'Get in touch',
    email: 'Email',
    phone: 'WhatsApp / phone',
    programming: 'Programming solutions',
    photographyWork: 'Photography work',
    personal: 'Personal account',
    skip: 'Skip to content',
    footer: 'Designed by Al-Sayed',
  },
};

function readStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage can be unavailable in private browsing; the in-memory state still works.
  }
}

function Icon({ name }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: false,
  };
  const paths = {
    external: <><path d="M13.5 10.5 21 3M21 3h-6M21 3v6" /><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" /></>,
    mail: <><path d="M3 7.5 12 13l9-5.5" /><rect x="3" y="5" width="18" height="14" rx="3" /></>,
    code: <path d="m8 17-5-5 5-5M16 7l5 5-5 5" />,
    spark: <><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /><circle cx="12" cy="12" r="3.4" /></>,
    office: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H17l3 3v14.5a.5.5 0 0 1-.5.5h-13A2.5 2.5 0 0 1 4 18.5Z" /><path d="M8 9h7M8 13h7M8 17h4" /></>,
    camera: <><path d="M3 8.5A2.5 2.5 0 0 1 5.5 6H8l1.4-2h5.2L16 6h2.5A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5Z" /><circle cx="12" cy="12.2" r="3.4" /></>,
    github: <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.6" /><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" /></>,
    user: <><circle cx="12" cy="8.2" r="3.7" /><path d="M4.5 20.2a7.5 7.5 0 0 1 15 0" /></>,
  };

  return (
    <svg
      {...common}
      fill={name === 'github' ? 'currentColor' : common.fill}
      stroke={name === 'github' ? 'none' : common.stroke}
    >
      {paths[name]}
    </svg>
  );
}

function SectionHeading({ title, english }) {
  return (
    <div className="head">
      <h2>{title}</h2>
      <span className="en">{english}</span>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState(() => readStorage('cv-lang') === 'en' ? 'en' : 'ar');
  const [theme, setTheme] = useState(() => {
    const saved = readStorage('cv-theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });
  const [activeSection, setActiveSection] = useState('about');
  const [revealed, setRevealed] = useState(() => new Set());
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [typedRole, setTypedRole] = useState('');
  const dialogCloseRef = useRef(null);
  const lastFocusedRef = useRef(null);
  const t = translations[language];
  const isArabic = language === 'ar';

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = isArabic ? 'rtl' : 'ltr';
    root.dataset.theme = theme;
    document.title = t.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.description);
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#000926' : '#D6E6F3',
    );
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', t.description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute(
      'content',
      isArabic ? 'ar_IQ' : 'en_US',
    );
    writeStorage('cv-lang', language);
    writeStorage('cv-theme', theme);
  }, [language, theme, t.description, t.title, isArabic]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedRole(t.roles[0]);
      return undefined;
    }

    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    let pause = 0;
    setTypedRole('');

    const timer = window.setInterval(() => {
      if (pause > 0) {
        pause -= 1;
        return;
      }

      const characters = Array.from(t.roles[roleIndex]);
      characterIndex += deleting ? -1 : 1;
      setTypedRole(characters.slice(0, characterIndex).join(''));

      if (!deleting && characterIndex === characters.length) {
        deleting = true;
        pause = 15;
      } else if (deleting && characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % t.roles.length;
        pause = 3;
      }
    }, 85);

    return () => window.clearInterval(timer);
  }, [t.roles]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-section]'));
    if (!('IntersectionObserver' in window)) {
      setRevealed(new Set(sections.map((section) => section.id)));
      return undefined;
    }

    const revealObserver = new IntersectionObserver((entries) => {
      setRevealed((current) => {
        const next = new Set(current);
        entries.forEach((entry) => {
          if (entry.isIntersecting) next.add(entry.target.id);
        });
        return next;
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -45% 0px' });

    sections.forEach((section) => {
      revealObserver.observe(section);
      if (section.id !== 'cert') activeObserver.observe(section);
    });

    return () => {
      revealObserver.disconnect();
      activeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0
        ? Math.min(1, Math.max(0, window.scrollY / scrollable))
        : 0;
      document.getElementById('scrollProgress')?.style.setProperty('--scroll-progress', progress);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;
    let frame = 0;
    let x = 0;
    let y = 0;

    const move = (event) => {
      if (event.pointerType !== 'mouse') return;
      x = event.clientX;
      y = event.clientY;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const root = document.documentElement;
        root.style.setProperty('--pointer-x', `${x}px`);
        root.style.setProperty('--pointer-y', `${y}px`);
        root.classList.add('has-pointer-glow');
        frame = 0;
      });
    };

    window.addEventListener('pointermove', move, { passive: true });
    return () => {
      window.removeEventListener('pointermove', move);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove('has-pointer-glow');
    };
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingInlineEnd;
    const scrollbarGap = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarGap > 0) document.body.style.paddingInlineEnd = `${scrollbarGap}px`;
    dialogCloseRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setLightboxOpen(false);
      if (event.key === 'Tab') {
        event.preventDefault();
        dialogCloseRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingInlineEnd = previousPadding;
      lastFocusedRef.current?.focus();
    };
  }, [lightboxOpen]);

  const revealClass = (id) => `reveal${revealed.has(id) ? ' is-in' : ''}`;
  const openCertificate = (event) => {
    lastFocusedRef.current = event.currentTarget;
    setLightboxOpen(true);
  };

  const skills = [
    { title: t.web, detail: 'HTML5 · CSS3 · JavaScript', icon: 'code' },
    { title: t.ai, detail: 'Certified — Dubai Centre for AI', icon: 'spark' },
    { title: t.office, detail: 'Word · Excel · PowerPoint', icon: 'office' },
    { title: t.photography, detail: 'Professional photography', icon: 'camera' },
  ];

  const timeline = [
    {
      year: '2012',
      title: t.beginning,
      text: isArabic ? t.beginningText : t.beginningEnglishText,
      englishText: 'Professional photography practice · @vray_photography',
    },
    {
      year: isArabic ? '2024 — الآن' : '2024 — Present',
      title: t.university,
      text: isArabic ? t.universityText : t.universityEnglishText,
      englishText: 'Software Engineering student · College of Computer Science & IT',
    },
    {
      year: '2025',
      title: t.promptCertificate,
      text: isArabic ? t.promptText : t.promptEnglishText,
      englishText: 'Dubai Centre for AI · Dubai Future Foundation',
    },
    {
      year: '2025',
      title: t.launch,
      text: isArabic ? t.launchText : t.launchEnglishText,
      englishText: 'HTML5 · CSS3 · JavaScript · Netlify',
    },
  ];

  const contacts = [
    { href: 'mailto:std2025.mabdul25@uowasit.edu.iq', title: t.email, text: 'std2025.mabdul25@uowasit.edu.iq', icon: 'mail' },
    { href: 'https://wa.me/9647832916552', title: t.phone, text: '0783 291 6552', icon: 'user', external: true },
    { href: 'https://github.com/yi3w', title: 'GitHub', text: 'github.com/yi3w', icon: 'github', external: true },
    { href: 'https://www.instagram.com/prog_alrafidain', title: t.programming, text: '@prog_alrafidain', icon: 'instagram', external: true },
    { href: 'https://www.instagram.com/vray_photography', title: t.photographyWork, text: '@vray_photography', icon: 'camera', external: true },
    { href: 'https://www.instagram.com/yi3w', title: t.personal, text: '@yi3w', icon: 'user', external: true },
  ];

  return (
    <>
      <a className="skip" href="#about">{t.skip}</a>
      <div className="code-rain" aria-hidden="true">
        <span>01 · 10 · 11 · {'{ }'} · &lt;/&gt; · 01 · 10 · 11 · {'{ }'} · &lt;/&gt; · 01</span>
        <span>00 · 01 · 10 · {'[ ]'} · 11 · &lt;/&gt; · 00 · 01 · 10 · {'[ ]'} · 11</span>
        <span>10 · 11 · {'{ }'} · 00 · 01 · &lt;/&gt; · 10 · 11 · {'{ }'} · 00 · 01</span>
        <span>11 · 00 · 01 · {'[ ]'} · 10 · &lt;/&gt; · 11 · 00 · 01 · {'[ ]'} · 10</span>
        <span>01 · {'{ }'} · 10 · 11 · 00 · &lt;/&gt; · 01 · {'{ }'} · 10 · 11 · 00</span>
      </div>
      <div className="aurora" aria-hidden="true">
        <span className="a1" /><span className="a2" /><span className="a3" />
      </div>
      <div className="grain" aria-hidden="true" />
      <div className="pointer-glow" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true">
        <span className="scroll-progress__bar" id="scrollProgress" />
      </div>

      <nav className="dock" id="dock" aria-label={t.navLabel}>
        <div className="dock__inner glass">
          {['about', 'skills', 'work', 'path', 'contact'].map((id, index) => (
            <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'true' : 'false'}>
              {t.nav[index]}
            </a>
          ))}
          <span className="dock__sep" aria-hidden="true" />
          <button
            className="dock__tool"
            type="button"
            aria-label={t.langLabel}
            title={isArabic ? 'English' : 'العربية'}
            onClick={() => setLanguage(isArabic ? 'en' : 'ar')}
          >
            {t.langText}
          </button>
          <button
            className="dock__tool"
            type="button"
            aria-label={t.themeLabel}
            title={t.themeLabel}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" focusable="false">
              {theme === 'dark'
                ? <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
                : <><circle cx="12" cy="12" r="4.2" /><path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></>}
            </svg>
          </button>
        </div>
      </nav>

      <main className="shell">
        <header className="hero" id="top">
          <div className="hero__grid">
            <div>
              <div className="hero__badges rise">
                <span className="hero__badge hero__badge--accent">{t.studyBadge}</span>
                <span className="hero__badge">{t.universityBadge}</span>
              </div>
              <h1 className="rise">
                <span>
                  {isArabic ? 'مصطفى صفاء ' : 'Mustafa '}
                  <span className="hero__name-highlight">{isArabic ? 'عبد الصاحب' : 'Safaa AbdulAlsahib'}</span>
                </span>
                <span className="name-en">{t.nameSubline}</span>
              </h1>
              <p className="hero__role" aria-live="off" aria-label={t.roles.join(', ')} dir={isArabic ? 'rtl' : 'ltr'}>
                <span>{typedRole}</span><span className="hero__cursor" aria-hidden="true" />
              </p>
              <p className="hero__summary">{t.heroSummary}</p>
              <div className="hero__actions">
                <a className="btn btn--accent" href="#work">
                  <Icon name="code" /><span>{t.projectsCta}</span>
                </a>
                <a className="btn hero__btn-secondary" href="#contact">
                  <Icon name="mail" /><span>{t.contactCta}</span>
                </a>
              </div>
              <div className="chips rise">
                <a className="chip glass" href="https://viraystudio.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <Icon name="external" /><span>{isArabic ? 'آخر مشروع لي' : 'My latest project'}</span>
                </a>
                <a className="chip glass" href="https://github.com/yi3w" target="_blank" rel="noopener noreferrer">
                  <Icon name="github" /><span>GitHub</span>
                </a>
                <a className="chip glass" href="https://www.instagram.com/vray_photography" target="_blank" rel="noopener noreferrer">
                  <Icon name="instagram" /><span>{isArabic ? 'أعمالي في التصوير' : 'Photography work'}</span>
                </a>
                <a className="chip glass" href="#contact">
                  <Icon name="mail" /><span>{isArabic ? 'تواصل معي' : 'Get in touch'}</span>
                </a>
              </div>
            </div>
            <div className="portrait glass rise">
              <img src={profileImage} alt={t.profileAlt} width="900" height="1601" fetchPriority="high" />
            </div>
          </div>
        </header>

        <div className="stack">
          <section id="about" data-section className={revealClass('about')}>
            <SectionHeading title={t.about} english={t.aboutEn} />
            <div className="glass panel">
              <p className={isArabic ? 'lede' : 'lede-en'} dir={isArabic ? 'rtl' : 'ltr'}>
                {isArabic ? t.aboutText : t.aboutEnglish}
              </p>
            </div>
          </section>

          <section id="skills" data-section className={revealClass('skills')}>
            <SectionHeading title={t.skills} english={t.skillsEn} />
            <div className="skills">
              {skills.map((skill) => (
                <article className="skill glass" key={skill.title}>
                  <div className="skill__mark"><Icon name={skill.icon} /></div>
                  <h3>{skill.title}</h3>
                  <p>{skill.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="work" data-section className={revealClass('work')}>
            <SectionHeading title={t.work} english={t.workEn} />
            <div className="projects-list">
              {t.projects.map((project) => (
                <article className="project glass" key={project.url}>
                  <div className="project__body">
                    <div className="project__kicker" dir={isArabic ? 'rtl' : 'ltr'}>{project.category}</div>
                    <h3>{project.name}</h3>
                    <p className="project__desc">{project.description}</p>
                    <div className="tags">
                      {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                    </div>
                    <div className="actions">
                      <a className="btn btn--accent" href={project.url} target="_blank" rel="noopener noreferrer">
                        <Icon name="external" /><span>{t.openSite}</span>
                      </a>
                    </div>
                  </div>
                  <div className="project__shot" aria-hidden="true">
                    <div className="browser">
                      <div className="browser__bar"><i /><i /><i /><span className="browser__url">{new URL(project.url).host}</span></div>
                      <div className="browser__body">
                        <i /><i /><i />
                        <div className="browser__grid">{Array.from({ length: 6 }, (_, index) => <i key={index} />)}</div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="project__note">{isArabic ? t.projectNote : t.projectNoteEnglish}</p>
          </section>

          <section id="cert" data-section className={revealClass('cert')}>
            <SectionHeading title={t.certification} english={isArabic ? 'Certification' : 'Certificate'} />
            <article className="cert glass">
              <div className="cert__img">
                <button className="cert__image-button" type="button" onClick={openCertificate} aria-label={t.zoom}>
                  <img src={certificateImage} alt={isArabic ? t.certTitle : t.certEnglish} width="1206" height="847" loading="lazy" />
                </button>
              </div>
              <div className="cert__body">
                <h3>{isArabic ? t.certTitle : t.certEnglish}</h3>
                <p className="cert__meta">
                  <span>{isArabic ? t.certDate : t.certDateEnglish}</span>
                  <span className="en">Dubai Centre for Artificial Intelligence<br />Dubai Future Foundation</span>
                </p>
                <div className="actions">
                  <button className="btn" type="button" onClick={openCertificate}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
                      <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5M11 8.5v5M8.5 11h5" />
                    </svg>
                    <span>{t.zoom}</span>
                  </button>
                </div>
              </div>
            </article>
          </section>

          <section id="path" data-section className={revealClass('path')}>
            <SectionHeading title={t.path} english={t.pathEn} />
            <div className="timeline">
              {timeline.map((item) => (
                <article className="tl glass" key={`${item.year}-${item.title}`}>
                  <span className="tl__year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="en">{item.englishText}</span>
                </article>
              ))}
            </div>
            <div className="langs">
              <div className="lang glass"><b>{isArabic ? 'العربية' : 'Arabic'}</b><span>{t.native}</span></div>
              <div className="lang glass"><b>{isArabic ? 'الإنجليزية' : 'English'}</b><span>{t.englishLevel}</span></div>
            </div>
          </section>

          <section id="contact" data-section className={revealClass('contact')}>
            <SectionHeading title={t.contact} english={t.contactEn} />
            <div className="contact">
              {contacts.map((item) => (
                <a className="glass" href={item.href} key={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined}>
                  <span className="contact__ic"><Icon name={item.icon} /></span>
                  <span className="contact__txt"><b>{item.title}</b><span>{item.text}</span></span>
                </a>
              ))}
            </div>
          </section>
        </div>

        <footer>
          <div className="sig">{t.footer}</div>
        </footer>
      </main>

      <div
        className="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={isArabic ? 'الشهادة' : 'Certificate'}
        aria-hidden={!lightboxOpen}
        data-open={lightboxOpen}
        onClick={(event) => {
          if (event.target === event.currentTarget) setLightboxOpen(false);
        }}
      >
        <button className="lightbox__close" ref={dialogCloseRef} type="button" aria-label={t.close} onClick={() => setLightboxOpen(false)}>
          &times;
        </button>
        <img src={certificateImage} alt={isArabic ? t.certTitle : t.certEnglish} width="1206" height="847" />
      </div>
    </>
  );
}

export default App;
