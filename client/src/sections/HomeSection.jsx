import { useLang } from "../contexts/LangContext";
import { useTypewriter } from "../hooks/useTypewriter";
import { personalInfo, projects, socials } from "../data/projects";
import Footer from "../components/Footer";
import ProjectModal from "../components/ProjectModal";
import { useState } from "react";

const SOCIAL_ICONS = [
  { href: socials.website,  icon: "🌐", label: "Website" },
  { href: socials.github,   icon: "🐙", label: "GitHub" },
  { href: socials.facebook, icon: "📘", label: "Facebook" },
  { href: socials.twitter,  icon: "🐦", label: "Twitter / X" },
  { href: socials.youtube,  icon: "▶️", label: "YouTube" },
  { href: socials.linkedin, icon: "💼", label: "LinkedIn" },
];

export default function HomeSection({ setActive }) {
  const { t, isAr } = useLang();
  const roles = isAr ? personalInfo.rolesAr : personalInfo.roles;
  const role = useTypewriter(roles, 75, 1800);
  const featured = projects.filter((p) => p.featured);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="section">
        <div className="hero">
          <div className="hero-badge">
            <span className="dot" />
            {t(personalInfo.availability, personalInfo.availabilityAr)}
          </div>

          <h1 className="hero-name">
            {t("Hi, I'm ", "مرحباً، أنا ")}<span>{isAr ? personalInfo.nameAr : "Yossof"}</span>
          </h1>

          <div className="hero-role">
            <span>{role}</span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-bio">
            {t(personalInfo.bioBrief, personalInfo.bioBriefAr)}
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => setActive("contact")} data-hover>
              {t("Let's Talk →", "تحدث معي ←")}
            </button>
            <a
              href="/resume.pdf"
              download
              className="btn-outline"
              data-hover
            >
              {t("⬇ Resume", "⬇ السيرة الذاتية")}
            </a>
          </div>

          <div className="hero-socials">
            {SOCIAL_ICONS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="social-icon" title={s.label} aria-label={s.label} data-hover>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="home-projects">
          <p className="home-projects-title">{t("✦ Latest Projects", "✦ آخر المشاريع")}</p>
          <div className="home-projects-grid">
            {featured.map((p) => (
              <div key={p.id} className="project-card featured" onClick={() => setSelected(p)} data-hover>
                <div style={{ fontSize: "11px", color: "var(--accent)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 }}>
                  {p.category}
                </div>
                <div className="project-title">{isAr && p.nameAr ? p.nameAr : p.name}</div>
                <p className="project-desc">
                  {(isAr && p.descriptionAr ? p.descriptionAr : p.description).slice(0, 100)}…
                </p>
                <div>
                  {p.tags.slice(0, 3).map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <button className="btn-outline" onClick={() => setActive("projects")} data-hover
              style={{ fontSize: "14px", padding: "10px 24px" }}>
              {t("View All Projects →", "جميع المشاريع ←")}
            </button>
          </div>
        </div>

        <Footer setActive={setActive} />
      </section>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
