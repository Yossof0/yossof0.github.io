import { socials, personalInfo } from "../data/projects";
import { useLang } from "../contexts/LangContext";

const SOCIAL_ICONS = [
  { key: "website",  href: socials.website,  icon: "🌐", label: "Website" },
  { key: "github",   href: socials.github,   icon: "🐙", label: "GitHub" },
  { key: "facebook", href: socials.facebook, icon: "📘", label: "Facebook" },
  { key: "twitter",  href: socials.twitter,  icon: "🐦", label: "Twitter / X" },
  { key: "youtube",  href: socials.youtube,  icon: "▶️", label: "YouTube" },
  { key: "linkedin", href: socials.linkedin, icon: "💼", label: "LinkedIn" },
  { key: "email",    href: `mailto:${socials.email}`, icon: "✉️", label: "Email" },
];

export default function Footer({ setActive }) {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-name">Yossof0</div>
          <div className="footer-sub">{t("Web Developer · Cairo, Egypt", "مطور ويب · القاهرة، مصر")}</div>
        </div>

        <div className="footer-links">
          <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 4 }}>
            {t("Quick Links", "روابط سريعة")}
          </span>
          {[
            { id: "about",    en: "About",    ar: "عني" },
            { id: "projects", en: "Projects", ar: "المشاريع" },
            { id: "contact",  en: "Contact",  ar: "تواصل" },
            { id: "business", en: "Business", ar: "خدماتي" },
          ].map((l) => (
            <button
              key={l.id}
              className="footer-link"
              onClick={() => setActive(l.id)}
              style={{ background: "none", border: "none", padding: 0, textAlign: "inherit" }}
              data-hover
            >
              {t(l.en, l.ar)}
            </button>
          ))}
        </div>

        <div className="footer-socials">
          {SOCIAL_ICONS.map((s) => (
            <a
              key={s.key}
              href={s.href}
              target={s.key !== "email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="social-icon"
              title={s.label}
              aria-label={s.label}
              data-hover
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        © {year} Yossof Abdelwahed ·{" "}
        <a href={socials.website} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }} data-hover>
          yossof0.github.io
        </a>
        {" · "}
        {t("Built with React & ❤️", "صُنع بـ React و ❤️")}
      </div>
    </footer>
  );
}
