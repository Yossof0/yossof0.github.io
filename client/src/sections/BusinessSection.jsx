import { useLang } from "../contexts/LangContext";
import Footer from "../components/Footer";
import { Briefcase } from "lucide-react";

const SERVICES = [
  {
    icon: "🌐",
    titleEn: "Web Application Development",
    titleAr: "تطوير تطبيقات الويب",
    descEn:
      "Full-stack web apps built with React, TypeScript, Node.js, and modern databases. From idea to deployment.",
    descAr:
      "تطبيقات ويب متكاملة مبنية بـ React وTypeScript وNode.js وقواعد البيانات الحديثة. من الفكرة حتى النشر.",
  },
  {
    icon: "🏪",
    titleEn: "Landing Page & Business Sites",
    titleAr: "صفحات الهبوط والمواقع التجارية",
    descEn:
      "Fast, clean, and conversion-focused landing pages and business websites — designed to impress and built to last.",
    descAr: "صفحات هبوط ومواقع تجارية سريعة ونظيفة ومصممة للتحويل.",
  },
  {
    icon: "🛍️",
    titleEn: "E-Commerce Solutions",
    titleAr: "حلول التجارة الإلكترونية",
    descEn:
      "Custom online stores with product management, auth, payments integration, and admin dashboards.",
    descAr:
      "متاجر إلكترونية مخصصة مع إدارة المنتجات، المصادقة، تكامل الدفع، ولوحات الإدارة.",
  },
  {
    icon: "🔧",
    titleEn: "Custom Tools & Dashboards",
    titleAr: "أدوات ولوحات تحكم مخصصة",
    descEn:
      "Internal tools, dashboards, POS systems, and productivity apps tailored exactly to your workflow.",
    descAr:
      "أدوات داخلية، لوحات تحكم، أنظمة نقاط بيع، وتطبيقات إنتاجية مصممة بدقة لسير عملك.",
  },
  {
    icon: "🎨",
    titleEn: "UI/UX Design & Implementation",
    titleAr: "تصميم وتنفيذ واجهات المستخدم",
    descEn:
      "Pixel-perfect implementations from your design, or I can design it from scratch — clean, modern, accessible.",
    descAr:
      "تنفيذ دقيق من تصميمك، أو أصمم من الصفر — نظيف، حديث، وقابل للوصول.",
  },
  {
    icon: "🌍",
    titleEn: "Multi-Language (EN / AR) Support",
    titleAr: "دعم اللغتين (عربي / إنجليزي)",
    descEn:
      "Full RTL/LTR support for Arabic and English — right at home whether your audience is global or local.",
    descAr: "دعم كامل للعربية والإنجليزية مع RTL/LTR.",
  },
];

const WHY_ME = [
  {
    icon: "⚡",
    en: "Fast delivery — I work independently, no agency overhead",
    ar: "تسليم سريع — أعمل بشكل مستقل، بدون تكاليف وكالات",
  },
  {
    icon: "🔍",
    en: "I care about the details: clean code, good UX, real performance",
    ar: "أهتم بالتفاصيل: كود نظيف، تجربة مستخدم جيدة، أداء حقيقي",
  },
  {
    icon: "🗣️",
    en: "Direct communication — you talk to the developer, not a middleman",
    ar: "تواصل مباشر — تتكلم مع المطور نفسه، لا وسيط",
  },
  {
    icon: "🌐",
    en: "Bilingual (EN/AR) — I can serve Egyptian & international clients",
    ar: "ثنائي اللغة — أخدم العملاء المصريين والدوليين",
  },
  {
    icon: "💡",
    en: "Self-taught with a proven track record of shipped projects",
    ar: "متعلم ذاتياً مع سجل حافل من المشاريع المنجزة",
  },
];

export default function BusinessSection({ setActive }) {
  const { t, isAr } = useLang();

  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">
          <Briefcase size={22} strokeWidth={2} color="var(--accent)" />
          {t("Work With Me", "اعمل معي")}
        </h2>
        <div className="section-line" />
        <p
          style={{
            marginTop: 14,
            color: "var(--text2)",
            fontSize: "15px",
            maxWidth: 580,
            lineHeight: 1.7,
          }}
        >
          {t(
            "I'm a freelance web developer based in Cairo, Egypt — available worldwide. Whether you need a web app, a landing page, or a custom tool, I can build it.",
            "أنا مطور ويب مستقل مقيم في القاهرة، مصر — متاح للعمل عالمياً. سواء احتجت تطبيق ويب، صفحة هبوط، أو أداة مخصصة، يمكنني بناؤها."
          )}
        </p>
      </div>

      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: 800,
          color: "var(--text2)",
          marginBottom: 16,
        }}
      >
        {t("✦ What I Offer", "✦ ما أقدمه")}
      </h3>
      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">{s.icon}</div>
            <div className="service-title">{isAr ? s.titleAr : s.titleEn}</div>
            <div className="service-desc">{isAr ? s.descAr : s.descEn}</div>
          </div>
        ))}
      </div>

      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: 800,
          color: "var(--text2)",
          marginBottom: 16,
        }}
      >
        {t("✦ Why Work With Me", "✦ لماذا أختارني")}
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginBottom: 40,
        }}
      >
        {WHY_ME.map((w, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 14,
              alignItems: "flex-start",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "14px 18px",
            }}
          >
            <span style={{ fontSize: "1.3rem" }}>{w.icon}</span>
            <span
              style={{
                fontSize: "14px",
                color: "var(--text2)",
                lineHeight: 1.6,
              }}
            >
              {isAr ? w.ar : w.en}
            </span>
          </div>
        ))}
      </div>

      <div className="business-cta">
        <h3>{t("Ready to build something? 🚀", "جاهز لبناء شيء ما؟ 🚀")}</h3>
        <p>
          {t(
            "Let's talk about your project. I'm available for freelance work, long-term collaboration, and one-off builds.",
            "تحدث معي عن مشروعك. أنا متاح للعمل الحر، التعاون طويل الأمد، والمشاريع الفردية."
          )}
        </p>
        <button
          className="btn-primary"
          onClick={() => setActive("contact")}
          data-hover
          style={{ fontSize: "16px", padding: "14px 36px" }}
        >
          {t("Get in Touch →", "تواصل معي ←")}
        </button>
      </div>

      <Footer setActive={setActive} />
    </section>
  );
}
