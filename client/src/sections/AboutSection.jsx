import { personalInfo, techStack } from "../data/projects";
import { useLang } from "../contexts/LangContext";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  User,
  Code2,
  GraduationCap,
  Briefcase,
  Trophy,
  Layers,
  Users,
  Coffee,
  Calendar,
  Building2,
} from "lucide-react";

const CATEGORIES = ["Frontend", "Backend", "Tools"];

const education = [
  {
    title: "Basic Education Completion Certificate",
    titleAr: "شهادة إتمام التعليم الأساسي",
    meta: "2025 – 2026",
  },
];

const experience = [
  {
    title: "Full-Stack Web Developer",
    titleAr: "مطور ويب متكامل",
    company: "Narcissus E-Commerce",
    companyAr: "منصة نرجس",
    meta: "2024 – 2025",
    desc: "Built a complete e-commerce platform from scratch: React + TypeScript frontend, Node.js/Express + tRPC backend, Supabase PostgreSQL. Auth, admin dashboards, multi-language support, theming. Deployed on Railway.",
    descAr: "بنيت منصة تجارة إلكترونية متكاملة من الصفر.",
    bullets: [
      "React + TypeScript frontend with full theming & RTL support",
      "Node.js / Express + tRPC backend with JWT auth",
      "Admin & owner dashboards, product/order management",
      "Deployed on Railway with Supabase PostgreSQL",
    ],
    bulletsAr: [
      "واجهة React + TypeScript مع دعم RTL والثيمات",
      "خلفية Node.js + tRPC مع JWT",
      "لوحات إدارة، إدارة المنتجات والطلبات",
      "نشر على Railway مع Supabase PostgreSQL",
    ],
  },
  {
    title: "Frontend Developer",
    titleAr: "مطور واجهات",
    company: "TTT Pro (TicXO)",
    companyAr: "تيك تاك تو برو",
    meta: "2024",
    desc: "Feature-rich Tic Tac Toe with AI (minimax), Learn Mode, multiple difficulty levels, dark mode, sound effects.",
    descAr: "تطبيق إكس-أو مع AI ووضع تعليمي.",
    bullets: [
      "AI opponent using minimax algorithm",
      "Learn Mode: teaches strategy step by step",
      "Multiple board sizes, difficulty levels & sound effects",
    ],
    bulletsAr: [
      "خصم ذكاء اصطناعي باستخدام minimax",
      "وضع تعليمي يشرح الاستراتيجيات",
      "أحجام لوحة متعددة ومستويات صعوبة",
    ],
  },
  {
    title: "Frontend Developer",
    titleAr: "مطور واجهات",
    company: "Word Combination Calculator",
    companyAr: "حاسبة تركيب الكلمات",
    meta: "Early 2025",
    desc: "Permutation tool with EN/AR dictionary validation, filters, quiz mode, URL sharing.",
    descAr: "أداة تباديل مع التحقق من القاموس.",
    bullets: [
      "Generates all letter permutations",
      "EN/AR dictionary validation via Wiktionary API",
      "Quiz/challenge mode & URL state sharing",
    ],
    bulletsAr: [
      "يولد جميع تباديل الحروف",
      "التحقق من القاموس عبر Wiktionary API",
      "وضع اختبار ومشاركة الرابط",
    ],
  },
  {
    title: "Extension Developer",
    titleAr: "مطور إضافات",
    company: "Custom Grab Cursor",
    companyAr: "المؤشر المخصص",
    meta: "2024",
    desc: "Browser extension replacing the default cursor with a smooth custom grab animation.",
    descAr: "إضافة متصفح تستبدل المؤشر.",
    bullets: [
      "Smooth grab animation on any webpage",
      "Pure JavaScript, Manifest V3",
    ],
    bulletsAr: ["حركة إمساك سلسة على أي صفحة", "JavaScript خالص، Manifest V3"],
  },
  {
    title: "Frontend Developer",
    titleAr: "مطور واجهات",
    company: "Shelfify POS",
    companyAr: "Shelfify",
    meta: "2025",
    desc: "Point-of-Sale & product manager: catalog, purchases, transaction history.",
    descAr: "نظام نقاط بيع وإدارة منتجات.",
    bullets: [
      "Product catalog & inventory management",
      "Purchase tracking & transaction history",
      "Clean keyboard-friendly interface",
    ],
    bulletsAr: [
      "إدارة كتالوج المنتجات والمخزون",
      "تتبع المشتريات وتاريخ المعاملات",
      "واجهة نظيفة سهلة الاستخدام",
    ],
  },
  {
    title: "Self-Taught Developer",
    titleAr: "مطور ذاتي التعليم",
    company: "Continuous Learning",
    companyAr: "تطوير مستمر",
    meta: "2022 – Present",
    desc: "Started with JavaScript, mastered React ecosystem, expanded into full-stack with Node.js, tRPC, PostgreSQL. Recently migrated to Linux.",
    descAr: "بدأت بـ JavaScript وتوسعت نحو Full-Stack.",
    bullets: [
      "JavaScript → TypeScript → React → Full-Stack",
      "Node.js, Express, tRPC, Drizzle ORM, PostgreSQL",
      "Migrated to Linux for a better dev environment",
    ],
    bulletsAr: [
      "JavaScript → TypeScript → React → Full-Stack",
      "Node.js وExpress وtRPC وDrizzle ORM وPostgreSQL",
      "انتقلت إلى Linux لبيئة تطوير أفضل",
    ],
  },
];

export default function AboutSection({ setActive }) {
  const { t, isAr } = useLang();
  const ref = useScrollReveal();

  return (
    <section className="section" ref={ref}>
      {/* ── Header ── */}
      <div className="section-header reveal">
        <h2 className="section-title">
          <User size={22} strokeWidth={2} color="var(--accent)" />
          {t("About Me", "عني")}
        </h2>
        <div className="section-line" />
      </div>

      {/* ── Top: bio left, photo right ── */}
      <div className="about-hero reveal">
        <div className="about-bio-col">
          <div className="about-bio-text">
            {t(personalInfo.bioFull, personalInfo.bioFullAr)}
          </div>
          <div className="about-stats">
            <div className="about-stat">
              <div className="about-stat-icon">
                <Trophy size={18} />
              </div>
              <div>
                <div className="about-stat-num">3+</div>
                <div className="about-stat-label">
                  {t("Years Experience", "سنوات خبرة")}
                </div>
              </div>
            </div>
            <div className="about-stat">
              <div className="about-stat-icon">
                <Layers size={18} />
              </div>
              <div>
                <div className="about-stat-num">6+</div>
                <div className="about-stat-label">{t("Projects", "مشروع")}</div>
              </div>
            </div>
            <div className="about-stat">
              <div className="about-stat-icon">
                <Users size={18} />
              </div>
              <div>
                <div className="about-stat-num">10+</div>
                <div className="about-stat-label">{t("Clients", "عميل")}</div>
              </div>
            </div>
            <div className="about-stat">
              <div className="about-stat-icon">
                <Coffee size={18} />
              </div>
              <div>
                <div className="about-stat-num">∞</div>
                <div className="about-stat-label">
                  {t("Coffee Cups", "كوب قهوة")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-photo-col">
          <div className="about-photo-wrap">
            <img src="/gallery/photo-1.jpg" alt="Yossof Abdelwahed" />
          </div>
          <div className="about-photo-accent" />
        </div>
      </div>

      {/* ── Two column: Experience LEFT, Tech Stack RIGHT ── */}
      <div className="about-two-col">
        {/* LEFT — Experience */}
        <div className="about-exp-col">
          <h3 className="about-col-title reveal">
            <Briefcase size={18} strokeWidth={2} color="var(--accent)" />
            {t("Experience", "الخبرة")}
          </h3>

          <div className="exp-timeline">
            {experience.map((e, i) => (
              <div
                key={i}
                className={`exp-item reveal reveal-delay-${(i % 3) + 1}`}
              >
                <div className="exp-dot" />
                <div className="exp-content">
                  <div className="exp-meta">
                    <Calendar size={12} />
                    {e.meta}
                  </div>
                  <div className="exp-title">{isAr ? e.titleAr : e.title}</div>
                  <div className="exp-company">
                    <Building2 size={12} />
                    {isAr ? e.companyAr : e.company}
                  </div>
                  <p className="exp-desc">{isAr ? e.descAr : e.desc}</p>
                  <ul className="exp-bullets">
                    {(isAr ? e.bulletsAr : e.bullets).map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Tech Stack + Education */}
        <div className="about-right-col">
          {/* Tech Stack */}
          <div className="about-right-sticky">
            <h3 className="about-col-title reveal">
              <Code2 size={18} strokeWidth={2} color="var(--accent)" />
              {t("Tech Stack", "التقنيات")}
            </h3>
            {CATEGORIES.map(cat => (
              <div key={cat}>
                <div className="tech-group-title reveal">
                  {t(
                    cat,
                    cat === "Frontend"
                      ? "واجهات"
                      : cat === "Backend"
                        ? "خلفية"
                        : "أدوات"
                  )}
                </div>
                <div className="tech-grid">
                  {techStack
                    .filter(item => item.category === cat)
                    .map((item, i) => (
                      <div
                        key={item.name}
                        className={`tech-item reveal reveal-delay-${(i % 3) + 1}`}
                        data-hover
                      >
                        <span className="tech-emoji">{item.emoji}</span>
                        <span>{isAr ? item.nameAr : item.name}</span>
                      </div>
                    ))}
                </div>
              </div>
            ))}

            {/* Education */}
            <h3 className="about-col-title reveal" style={{ marginTop: 40 }}>
              <GraduationCap size={18} strokeWidth={2} color="var(--accent)" />
              {t("Education & Certifications", "التعليم والشهادات")}
            </h3>
            {education.map((e, i) => (
              <div key={i} className="edu-card reveal">
                <div className="edu-icon-badge">
                  <GraduationCap size={16} color="var(--accent)" />
                  <span>{t("Education", "تعليم")}</span>
                </div>
                <div className="edu-title">{isAr ? e.titleAr : e.title}</div>
                <div className="edu-meta">{e.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer setActive={setActive} />
    </section>
  );
}
