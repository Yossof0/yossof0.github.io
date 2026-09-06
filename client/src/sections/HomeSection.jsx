import { useLang } from "../contexts/LangContext";
import { useTypewriter } from "../hooks/useTypewriter";
import { personalInfo, projects, socials } from "../data/projects";
import Footer from "../components/Footer";
import ProjectModal from "../components/ProjectModal";
import { useState } from "react";
import {
  Globe,
  Github,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Download,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const SOCIAL_ICONS = [
  { href: socials.website, Icon: Globe, label: "Website" },
  { href: socials.github, Icon: Github, label: "GitHub" },
  { href: socials.facebook, Icon: Facebook, label: "Facebook" },
  { href: socials.twitter, Icon: Twitter, label: "Twitter / X" },
  { href: socials.youtube, Icon: Youtube, label: "YouTube" },
  { href: socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
];

export default function HomeSection({ setActive }) {
  const { t, isAr } = useLang();
  const roles = isAr ? personalInfo.rolesAr : personalInfo.roles;
  const role = useTypewriter(roles, 75, 1800);
  const featured = projects.filter(p => p.featured);
  const [selected, setSelected] = useState(null);
  const ref = useScrollReveal();

  return (
    <>
      <section className="section section--home" ref={ref}>
        {/* ── Hero ── */}
        <div className="hero">
          <img src="/images/hero-bg.jpg" alt="" className="hero-bg-photo" />

          <div className="hero-badge">
            <span className="dot" />
            {t(personalInfo.availability, personalInfo.availabilityAr)}
          </div>

          <h1 className="hero-name">
            {t("Hi, I'm Yossof", "مرحباً، أنا يوسف")}
          </h1>

          <div className="hero-role">
            <span>{role}</span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-bio">
            {t(personalInfo.bioBrief, personalInfo.bioBriefAr)}
          </p>

          <div className="hero-actions">
            <button
              className="btn-primary btn-ripple"
              onClick={() => setActive("contact")}
              data-hover
            >
              {t("Let's Talk →", "تحدث معي ←")}
            </button>
            <a
              href="/resume.pdf"
              download
              className="btn-outline btn-ripple"
              data-hover
            >
              <Download size={15} strokeWidth={2} />
              {t("Resume", "السيرة الذاتية")}
            </a>
          </div>

          <div className="hero-socials">
            {SOCIAL_ICONS.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title={label}
                aria-label={label}
                data-hover
              >
                <Icon size={17} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        {/* ── Latest Projects ── */}
        <div className="home-projects-wrap">
          <div className="home-projects-header reveal">
            <h2 className="home-projects-heading">
              {t("✦ Latest Projects", "✦ آخر المشاريع")}
            </h2>
            <button
              className="home-view-all"
              onClick={() => setActive("projects")}
              data-hover
            >
              {t("View All", "عرض الكل")} <ArrowRight size={15} />
            </button>
          </div>

          <div className="home-projects-grid">
            {featured.map((p, i) => (
              <div
                key={p.id}
                className={`home-project-card reveal reveal-delay-${i + 1}`}
                onClick={() => setSelected(p)}
                data-hover
              >
                {/* Screenshot */}
                <div className="home-project-img">
                  {p.image ? (
                    <img src={p.image} alt={p.name} loading="lazy" />
                  ) : (
                    <div className="home-project-placeholder" />
                  )}
                </div>

                {/* Info */}
                <div className="home-project-body">
                  <div className="home-project-name">
                    {isAr && p.nameAr ? p.nameAr : p.name}
                  </div>
                  <p className="home-project-desc">
                    {(isAr && p.descriptionAr
                      ? p.descriptionAr
                      : p.description
                    ).slice(0, 90)}
                    …
                  </p>
                  <div className="home-project-tags">
                    {p.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Icon actions */}
                  <div className="home-project-actions">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="home-project-icon-btn"
                      title="GitHub"
                      data-hover
                    >
                      <Github size={16} strokeWidth={2} />
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="home-project-icon-btn"
                        title="Live"
                        data-hover
                      >
                        <ExternalLink size={16} strokeWidth={2} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
          <Footer setActive={setActive} />
        </div>
      </section>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
