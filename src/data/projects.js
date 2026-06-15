export const projects = [
  {
    id: 1,
    name: "TTT Pro",
    nameAr: "تيك تاك تو برو",
    description:
      "A feature-rich Tic Tac Toe web app with AI opponent, Learn Mode that teaches strategy step by step, multiple difficulty levels, dark mode, and sound effects.",
    descriptionAr:
      "تطبيق إكس-أو متكامل مع ذكاء اصطناعي، ووضع تعليمي يشرح الاستراتيجيات خطوة بخطوة، ومستويات صعوبة متعددة، ووضع مظلم.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    category: "Web",
    github: "https://github.com/Yossof0/TicXO",
    live: "https://yossof0.github.io/TicXO",
    featured: true,
  },
  {
    id: 2,
    name: "Narcissus",
    nameAr: "نرجس",
    description:
      "A full-stack e-commerce platform for a premium handmade products brand. Features include auth, admin/owner panels, multi-language support, theming, and a Supabase + PostgreSQL backend deployed on Railway.",
    descriptionAr:
      "منصة تجارة إلكترونية متكاملة لعلامة تجارية متخصصة في المنتجات اليدوية الفاخرة. تشمل المصادقة، لوحات الإدارة، دعم تعدد اللغات، والنشر على Railway.",
    tags: ["React", "Node.js", "Supabase", "PostgreSQL", "tRPC"],
    category: "Web",
    github: "https://github.com/Yossof0/Narcissus",
    live: null,
    featured: true,
  },
  {
    id: 3,
    name: "Word Combination Calculator",
    nameAr: "حاسبة تركيب الكلمات",
    description:
      "Generates all permutations from a set of letters, checks them against English/Arabic dictionaries via Wiktionary API, includes advanced filters, letter frequency stats, a Word Challenge quiz mode, localStorage saved sets, and URL state sharing.",
    descriptionAr:
      "يولد جميع التباديل من مجموعة حروف، ويتحقق منها عبر واجهة Wiktionary، مع فلاتر متقدمة وإحصاءات تكرار الحروف ووضع اختبار.",
    tags: ["React", "Tailwind", "JavaScript"],
    category: "Web",
    github: "https://github.com/Yossof0/WordCombination",
    live: "https://yossof0.github.io/WordCombination",
    featured: true,
  },
  {
    id: 4,
    name: "Shelfify",
    nameAr: "شيلفيفاي",
    description:
      "A Point-of-Sale & Product Manager app. Manage your product catalog, track purchases, and view transaction history — all from a clean, keyboard-friendly interface.",
    descriptionAr:
      "تطبيق لإدارة نقاط البيع والمنتجات. يمكّنك من إدارة الكتالوج، تتبع المشتريات، وعرض تاريخ المعاملات بواجهة نظيفة وسهلة الاستخدام.",
    tags: ["React", "TypeScript", "Tailwind"],
    category: "Web",
    github: "https://github.com/Yossof0/Shelfify",
    live: null,
    featured: false,
  },
  {
    id: 5,
    name: "Custom Grab Cursor Extension",
    nameAr: "إضافة المؤشر المخصص",
    description:
      "A browser extension that replaces the default cursor with a custom grab animation. Provides smooth animations and interactive feedback for a more engaging browsing experience.",
    descriptionAr:
      "إضافة للمتصفح تستبدل المؤشر الافتراضي بحركة إمساك مخصصة مع انيميشن سلس وتفاعل بصري محسّن.",
    tags: ["JavaScript", "Browser Extension", "UI/UX"],
    category: "Extension",
    github: "https://github.com/Yossof0/CustomGrab",
    live: null,
    featured: false,
  },
  {
    id: 6,
    name: "Rubik's Cube Teaching Website",
    nameAr: "موقع تعليم مكعب روبيك",
    description:
      "An interactive educational platform with step-by-step tutorials and 3D visual demonstrations for solving Rubik's cubes. Built for beginners and intermediate solvers.",
    descriptionAr:
      "منصة تعليمية تفاعلية مع شروحات خطوة بخطوة ومعروضات ثلاثية الأبعاد لحل مكعب روبيك. مصممة للمبتدئين والمتوسطين.",
    tags: ["JavaScript", "3D Graphics", "Education"],
    category: "Web",
    github: "https://github.com/Yossof0/Rubiks",
    live: "https://yossof0.github.io/Rubiks",
    featured: false,
  },
];

export const techStack = [
  { name: "JavaScript", nameAr: "جافاسكريبت", emoji: "💛", category: "Frontend" },
  { name: "TypeScript", nameAr: "تايب سكريبت", emoji: "💙", category: "Frontend" },
  { name: "React / Next.js", nameAr: "رياكت / نكست", emoji: "⚛️", category: "Frontend" },
  { name: "HTML5 / CSS3", nameAr: "HTML5 / CSS3", emoji: "❤️", category: "Frontend" },
  { name: "TailwindCSS", nameAr: "تيل ويند", emoji: "🎨", category: "Frontend" },
  { name: "Flutter", nameAr: "فلاتر", emoji: "📱", category: "Frontend" },
  { name: "Node.js / Express", nameAr: "نود جي إس", emoji: "🔧", category: "Backend" },
  { name: "Python", nameAr: "بايثون", emoji: "🐍", category: "Backend" },
  { name: "PHP", nameAr: "PHP", emoji: "🔑", category: "Backend" },
  { name: "JWT / OAuth", nameAr: "JWT / OAuth", emoji: "🔒", category: "Backend" },
  { name: "SQL", nameAr: "SQL", emoji: "🧠", category: "Backend" },
  { name: "Docker", nameAr: "دوكر", emoji: "⚙️", category: "Tools" },
  { name: "Git", nameAr: "جيت", emoji: "📚", category: "Tools" },
  { name: "Electron", nameAr: "إلكترون", emoji: "🌐", category: "Tools" },
];

export const socials = {
  github: "https://github.com/Yossof0",
  website: "https://yossof0.github.io",
  facebook: "https://facebook.com/YossofABD",
  twitter: "https://x.com/Overclock33",
  youtube: "https://youtube.com/@OverClock33",
  linkedin: "https://www.linkedin.com/in/yossof-abdelwahed-20b2b1408",
  email: "yossef2989@gmail.com",
};

export const personalInfo = {
  name: "Yossof Abdelwahed",
  nameAr: "يوسف عبدالواحد",
  phone: "+20 01554873048",
  location: "Cairo, Egypt",
  locationAr: "القاهرة، مصر",
  officeHours: "Sunday – Thursday",
  officeHoursAr: "الأحد – الخميس",
  availability: "Available for freelance work",
  availabilityAr: "متاح للعمل الحر",
  roles: ["Frontend Developer", "Full-Stack Developer", "UI/UX Enthusiast", "Open Source Builder"],
  rolesAr: ["مطور واجهات أمامية", "مطور متكامل", "مهتم بتجربة المستخدم", "مطور مفتوح المصدر"],
  bioBrief:
    "I build clean, fast, and thoughtful web experiences. Based in Cairo, Egypt — available worldwide.",
  bioBriefAr:
    "أبني تجارب ويب نظيفة وسريعة ومدروسة. أعمل من القاهرة، مصر — متاح للعمل عالمياً.",
  bioFull: `I'm Yossof, a self-taught web developer from Cairo, Egypt with around 3 years of experience building web applications and tools.

I started with JavaScript and fell deep into the React ecosystem — TypeScript, Tailwind, Vite, and the whole modern frontend stack. Over time I expanded into full-stack development with Node.js, Express, tRPC, Drizzle ORM, and PostgreSQL via Supabase, deploying on Railway and GitHub Pages.

I've built e-commerce platforms, game apps, productivity tools, browser extensions, and educational websites. I care about the details: clean UI, good UX, sensible architecture, and code that actually makes sense to read.

Currently open to freelance work and client projects — especially web apps, landing pages, and custom tools.`,
  bioFullAr: `أنا يوسف، مطور ويب من القاهرة، مصر، اكتسبت خبرتي بشكل ذاتي على مدار حوالي 3 سنوات في بناء تطبيقات وأدوات الويب.

بدأت بجافاسكريبت وانغمست في نظام React — TypeScript وTailwind وVite وكامل مكدس الواجهات الحديثة. مع الوقت توسعت نحو التطوير المتكامل مع Node.js وExpress وtRPC وDrizzle ORM وPostgreSQL عبر Supabase.

بنيت منصات تجارة إلكترونية، تطبيقات ألعاب، أدوات إنتاجية، إضافات متصفح، ومواقع تعليمية. أهتم بالتفاصيل: واجهة نظيفة، تجربة مستخدم جيدة، وكود منطقي وقابل للقراءة.

حالياً متاح للعمل الحر — خاصة تطبيقات الويب، صفحات الهبوط، والأدوات المخصصة.`,
};
