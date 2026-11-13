import { socials } from "../data/projects";
import { useLang } from "../contexts/LangContext";
import {
  Globe,
  Github,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
} from "lucide-react";

const SOCIAL_ICONS = [
  { key: "github", href: socials.github, Icon: Github, label: "GitHub" },
  { key: "youtube", href: socials.youtube, Icon: Youtube, label: "YouTube" },
  {
    key: "linkedin",
    href: socials.linkedin,
    Icon: Linkedin,
    label: "LinkedIn",
  },
  { key: "email", href: `mailto:${socials.email}`, Icon: Mail, label: "Email" },
  {
    key: "facebook",
    href: socials.facebook,
    Icon: Facebook,
    label: "Facebook",
  },
  {
    key: "twitter",
    href: socials.twitter,
    Icon: Twitter,
    label: "Twitter / X",
  },
  { key: "website", href: socials.website, Icon: Globe, label: "Website" },
];

export default function Footer({ setActive }) {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Col 1 — Name + bio */}
        <div className="footer-brand">
          <div className="footer-name">Yossof0</div>
          <p className="footer-bio">
            {t(
              "Frontend & Full-Stack Web Developer. Building clean, fast web experiences for clients worldwide.",
              "مطور ويب متكامل. أبني تجارب ويب نظيفة وسريعة للعملاء حول العالم."
            )}
          </p>
        </div>

        {/* Col 2 — Quick Links */}
        <div className="footer-links-col">
          <div className="footer-col-title">
            {t("Quick Links", "روابط سريعة")}
          </div>
          {[
            { id: "about", en: "About", ar: "عني" },
            { id: "projects", en: "Projects", ar: "المشاريع" },
            { id: "contact", en: "Contact", ar: "تواصل" },
          ].map(l => (
            <button
              key={l.id}
              className="footer-link"
              onClick={() => setActive(l.id)}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                textAlign: "inherit",
              }}
              data-hover
            >
              {t(l.en, l.ar)}
            </button>
          ))}
        </div>

        {/* Col 3 — Connect */}
        <div className="footer-connect-col">
          <div className="footer-col-title">{t("Connect", "تواصل")}</div>
          <div className="footer-social-grid">
            {SOCIAL_ICONS.map(({ key, href, Icon, label }) => (
              <a
                key={key}
                href={href}
                target={key !== "email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="footer-social-btn"
                title={label}
                aria-label={label}
                data-hover
              >
                <Icon size={16} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>
          © {year} Yossof Abdelwahed |{" "}
          <a
            href={socials.website}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", textDecoration: "none" }}
            data-hover
          >
            yossof0.github.io
          </a>
          . {t("All rights reserved.", "جميع الحقوق محفوظة.")}
        </span>
        <button
          className="footer-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          data-hover
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
