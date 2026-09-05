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
    title: "Full-Stack Web Developer — Narcissus E-Commerce",
    titleAr: "مطور ويب متكامل — منصة نرجس",
    meta: "2024 – 2025",
    desc: "Built a complete e-commerce platform from scratch: React + TypeScript frontend, Node.js/Express + tRPC backend, Supabase PostgreSQL. Auth, admin dashboards, multi-language support, theming. Deployed on Railway.",
    descAr:
      "بنيت منصة تجارة إلكترونية متكاملة: React + TypeScript، Node.js/Express + tRPC، Supabase PostgreSQL. مصادقة، لوحات إدارة، دعم اللغتين. نشر على Railway.",
  },
  {
    title: "Frontend Developer — TTT Pro (TicXO)",
    titleAr: "مطور واجهات — تيك تاك تو برو",
    meta: "2024",
    desc: "Feature-rich Tic Tac Toe app with AI (minimax), Learn Mode, difficulty levels, dark mode, sound effects. React, TypeScript, Tailwind CSS, Vite.",
    descAr:
      "تطبيق إكس-أو متكامل مع AI (minimax)، وضع تعليمي، مستويات صعوبة، وضع مظلم.",
  },
  {
    title: "Frontend Developer — Word Combination Calculator",
    titleAr: "مطور واجهات — حاسبة تركيب الكلمات",
    meta: "Early 2025",
    desc: "Permutation tool with EN/AR dictionary validation via Wiktionary API, filters, quiz mode, URL sharing. Deployed to GitHub Pages.",
    descAr:
      "أداة تباديل مع التحقق من القاموس العربي والإنجليزي، فلاتر، وضع لعبة، مشاركة الرابط.",
  },
  {
    title: "Browser Extension Developer — Custom Grab Cursor",
    titleAr: "مطور إضافات — المؤشر المخصص",
    meta: "2024",
    desc: "Browser extension replacing the default cursor with a smooth custom grab animation. Pure JavaScript.",
    descAr: "إضافة متصفح تستبدل المؤشر بحركة إمساك مخصصة.",
  },
  {
    title: "Frontend Developer — Shelfify POS",
    titleAr: "مطور واجهات — Shelfify",
    meta: "2025",
    desc: "Point-of-Sale & product manager: catalog management, purchase tracking, transaction history. React, TypeScript, Tailwind.",
    descAr: "نظام نقاط بيع: إدارة الكتالوج، تتبع المشتريات، تاريخ المعاملات.",
  },
  {
    title: "Self-Taught Developer — Continuous Learning",
    titleAr: "مطور ذاتي التعليم",
    meta: "2022 – Present",
    desc: "Started with JavaScript, mastered the React ecosystem, expanded into full-stack with Node.js, tRPC, Drizzle ORM, PostgreSQL. Recently migrated to Linux.",
    descAr:
      "بدأت بـ JavaScript، أتقنت React، توسعت نحو Full-Stack مع Node.js وPostgreSQL.",
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

      {/* ── Two column: bio + photo ── */}
      <div className="about-hero">
        <div className="about-bio-col">
          <div className="about-bio-text reveal">
            {t(personalInfo.bioFull, personalInfo.bioFullAr)}
          </div>

          <div className="about-stats reveal reveal-delay-1">
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
                <div className="about-stat-label">
                  {t("Projects Built", "مشروع منجز")}
                </div>
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

        <div className="about-photo-col reveal reveal-delay-2">
          <div className="about-photo-wrap">
            <img src="/gallery/photo-3.png" alt="Yossof Abdelwahed" />
          </div>
          <div className="about-photo-accent" />
        </div>
      </div>

      {/* ── Tech Stack ── */}
      <div style={{ marginBottom: 56 }}>
        <h3
          className="section-title reveal"
          style={{ fontSize: "1.3rem", marginBottom: 4 }}
        >
          <Code2 size={20} strokeWidth={2} color="var(--accent)" />
          {t("Tech Stack", "التقنيات")}
        </h3>
        <div className="section-line reveal" style={{ marginBottom: 24 }} />
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
                    className={`tech-item reveal reveal-delay-${(i % 4) + 1}`}
                    data-hover
                  >
                    <span className="tech-emoji">{item.emoji}</span>
                    <span>{isAr ? item.nameAr : item.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Experience ── */}
      <div style={{ marginBottom: 56 }}>
        <h3
          className="section-title reveal"
          style={{ fontSize: "1.3rem", marginBottom: 4 }}
        >
          <Briefcase size={20} strokeWidth={2} color="var(--accent)" />
          {t("Experience", "الخبرة")}
        </h3>
        <div className="section-line reveal" style={{ marginBottom: 32 }} />
        <div className="timeline-v">
          {experience.map((e, i) => (
            <div
              key={i}
              className={`timeline-v-item reveal reveal-delay-${(i % 4) + 1}`}
            >
              <div className="timeline-v-meta">{e.meta}</div>
              <div className="timeline-v-title">
                {isAr ? e.titleAr : e.title}
              </div>
              <div className="timeline-v-desc">{isAr ? e.descAr : e.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Education ── */}
      <div style={{ marginBottom: 48 }}>
        <h3
          className="section-title reveal"
          style={{ fontSize: "1.3rem", marginBottom: 4 }}
        >
          <GraduationCap size={20} strokeWidth={2} color="var(--accent)" />
          {t("Education & Certifications", "التعليم والشهادات")}
        </h3>
        <div className="section-line reveal" style={{ marginBottom: 32 }} />
        <div className="timeline-v">
          {education.map((e, i) => (
            <div key={i} className="timeline-v-item reveal">
              <div className="timeline-v-meta">{e.meta}</div>
              <div className="timeline-v-title">
                {isAr ? e.titleAr : e.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer setActive={setActive} />
    </section>
  );
}
