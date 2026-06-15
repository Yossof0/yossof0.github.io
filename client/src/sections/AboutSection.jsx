import { personalInfo, techStack } from "../data/projects";
import { useLang } from "../contexts/LangContext";
import Footer from "../components/Footer";

const CATEGORIES = ["Frontend", "Backend", "Tools"];

const education = [
  {
    title: "Basic Education Completion Certificate",
    titleAr: "شهادة إتمام التعليم الأساسي",
    meta: "2025 – 2026",
    icon: "🎓",
  },
];

const experience = [
  {
    title: "Full-Stack Web Developer — Narcissus E-Commerce",
    titleAr: "مطور ويب متكامل — منصة نرجس",
    meta: "2024 – 2025",
    icon: "💼",
    desc: "Built a complete e-commerce platform from scratch: React + TypeScript frontend, Node.js/Express + tRPC backend, Supabase PostgreSQL database. Implemented auth (JWT/OAuth), admin & owner dashboards, multi-language support (EN/AR), theming system, and full product/order management. Deployed on Railway.",
    descAr: "بنيت منصة تجارة إلكترونية متكاملة من الصفر: React + TypeScript للواجهة الأمامية، Node.js/Express + tRPC للخلفية، Supabase PostgreSQL للبيانات. نفّذت المصادقة، لوحات الإدارة، دعم اللغتين، نظام الثيمات، وإدارة المنتجات والطلبات. نشر على Railway.",
  },
  {
    title: "Frontend Developer — TTT Pro (TicXO)",
    titleAr: "مطور واجهات — تيك تاك تو برو",
    meta: "2024",
    icon: "🎮",
    desc: "Designed and built a feature-rich Tic Tac Toe web app with an AI opponent (minimax), a Learn Mode teaching strategy step by step, multiple difficulty levels, dark mode propagation, sound effects, and animated UI. Built with React, TypeScript, Tailwind CSS, and Vite.",
    descAr: "صممت وبنيت تطبيق إكس-أو متكامل مع خصم ذكاء اصطناعي (minimax)، ووضع تعليمي يشرح الاستراتيجيات، ومستويات صعوبة متعددة، ووضع مظلم، وتأثيرات صوتية. مبني بـ React وTypeScript وTailwind CSS وVite.",
  },
  {
    title: "Frontend Developer — Word Combination Calculator",
    titleAr: "مطور واجهات — حاسبة تركيب الكلمات",
    meta: "Early 2025",
    icon: "🔤",
    desc: "Built a permutation-based word tool: generates all combinations from input letters, validates against English/Arabic dictionaries via Wiktionary API, advanced filters, letter frequency stats, quiz/challenge game modes, localStorage saved sets, and URL state sharing. Deployed to GitHub Pages.",
    descAr: "بنيت أداة كلمات قائمة على التباديل: تولّد جميع التركيبات من الحروف المدخلة، تتحقق عبر Wiktionary API، فلاتر متقدمة، إحصاءات الحروف، أوضاع لعبة، وحفظ في localStorage مع مشاركة الرابط.",
  },
  {
    title: "Browser Extension Developer — Custom Grab Cursor",
    titleAr: "مطور إضافات متصفح — المؤشر المخصص",
    meta: "2024",
    icon: "🖱️",
    desc: "Created a browser extension that replaces the default cursor with a smooth custom grab animation, providing interactive visual feedback for a more engaging browsing experience. Pure JavaScript.",
    descAr: "طوّرت إضافة متصفح تستبدل المؤشر الافتراضي بحركة إمساك مخصصة مع تغذية راجعة بصرية تفاعلية. JavaScript خالص.",
  },
  {
    title: "Frontend Developer — Shelfify POS",
    titleAr: "مطور واجهات — Shelfify",
    meta: "2025",
    icon: "🏪",
    desc: "Building a Point-of-Sale & Product Manager app: catalog management, purchase tracking, transaction history — clean keyboard-friendly interface. React, TypeScript, Tailwind CSS.",
    descAr: "أبني تطبيق إدارة نقاط البيع والمنتجات: إدارة الكتالوج، تتبع المشتريات، تاريخ المعاملات — واجهة نظيفة وسهلة الاستخدام.",
  },
  {
    title: "Self-Taught Developer — Continuous Learning",
    titleAr: "مطور ذاتي التعليم — تطوير مستمر",
    meta: "2022 – Present",
    icon: "🧠",
    desc: "Started with JavaScript fundamentals, progressively mastered the modern frontend stack (React, TypeScript, Tailwind, Vite), expanded into full-stack development (Node.js, Express, tRPC, Drizzle ORM, PostgreSQL), and recently migrated to Linux for a better dev environment.",
    descAr: "بدأت بأساسيات JavaScript، وتطورت تدريجياً نحو إتقان مكدس الواجهات الحديثة، ثم توسعت نحو التطوير المتكامل، وانتقلت مؤخراً إلى Linux.",
  },
];

export default function AboutSection({ setActive }) {
  const { t, isAr } = useLang();

  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="icon">◉</span>
          {t("About Me", "عني")}
        </h2>
        <div className="section-line" />
      </div>

      {/* Bio */}
      <div className="about-grid">
        <div>
          <p className="bio-text">
            {t(personalInfo.bioFull, personalInfo.bioFullAr)}
          </p>
        </div>
        <div className="stats-row" style={{ gridColumn: "auto", gridTemplateColumns: "1fr" }}>
          <div className="stat-card"><div className="stat-number">3+</div><div className="stat-label">{t("Years Experience", "سنوات خبرة")}</div></div>
          <div className="stat-card"><div className="stat-number">6+</div><div className="stat-label">{t("Projects Built", "مشروع منجز")}</div></div>
          <div className="stat-card"><div className="stat-number">∞</div><div className="stat-label">{t("Coffee Cups", "كوب قهوة")}</div></div>
        </div>
      </div>

      {/* Tech Stack */}
      <div style={{ marginTop: 48 }}>
        <h3 className="section-title" style={{ fontSize: "1.3rem", marginBottom: 4 }}>
          <span className="icon">⟨/⟩</span>
          {t("Tech Stack", "التقنيات")}
        </h3>
        <div className="section-line" style={{ marginBottom: 24 }} />

        {CATEGORIES.map((cat) => (
          <div key={cat}>
            <div className="tech-group-title">{t(cat, cat === "Frontend" ? "واجهات" : cat === "Backend" ? "خلفية" : "أدوات")}</div>
            <div className="tech-grid">
              {techStack.filter((t) => t.category === cat).map((item) => (
                <div key={item.name} className="tech-item" data-hover>
                  <span className="tech-emoji">{item.emoji}</span>
                  <span>{isAr ? item.nameAr : item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div style={{ marginTop: 48 }}>
        <h3 className="section-title" style={{ fontSize: "1.3rem", marginBottom: 4 }}>
          <span className="icon">🎓</span>
          {t("Education & Certifications", "التعليم والشهادات")}
        </h3>
        <div className="section-line" style={{ marginBottom: 24 }} />
        <div className="timeline">
          {education.map((e, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-title">{isAr ? e.titleAr : e.title}</div>
              <div className="timeline-meta">{e.meta}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div style={{ marginTop: 48 }}>
        <h3 className="section-title" style={{ fontSize: "1.3rem", marginBottom: 4 }}>
          <span className="icon">💼</span>
          {t("Experience", "الخبرة")}
        </h3>
        <div className="section-line" style={{ marginBottom: 24 }} />
        <div className="timeline">
          {experience.map((e, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-title">{isAr ? e.titleAr : e.title}</div>
              <div className="timeline-meta">{e.icon} {e.meta}</div>
              <div className="timeline-desc">{isAr ? e.descAr : e.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer setActive={setActive} />
    </section>
  );
}
