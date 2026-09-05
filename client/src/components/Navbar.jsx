import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useLang } from "../contexts/LangContext";
import {
  House,
  User,
  Code2,
  Mail,
  Briefcase,
  Camera,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "home", Icon: House, labelEn: "Home", labelAr: "الرئيسية" },
  { id: "about", Icon: User, labelEn: "About", labelAr: "عني" },
  { id: "projects", Icon: Code2, labelEn: "Projects", labelAr: "المشاريع" },
  { id: "contact", Icon: Mail, labelEn: "Contact", labelAr: "تواصل" },
  { id: "business", Icon: Briefcase, labelEn: "Business", labelAr: "خدماتي" },
  { id: "gallery", Icon: Camera, labelEn: "Gallery", labelAr: "معرض الصور" },
];

export default function Navbar({ active, setActive }) {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = id => {
    setActive(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop — top center pill */}
      <nav
        className="nav-pill nav-desktop"
        role="navigation"
        aria-label="Main navigation"
      >
        {NAV_ITEMS.map(({ id, Icon, labelEn, labelAr }) => (
          <button
            key={id}
            className={`nav-btn ${active === id ? "active" : ""}`}
            onClick={() => handleNav(id)}
            title={lang === "en" ? labelEn : labelAr}
            aria-label={lang === "en" ? labelEn : labelAr}
            aria-current={active === id ? "page" : undefined}
            data-hover
          >
            <Icon size={18} strokeWidth={2} />
          </button>
        ))}
        <div className="nav-divider" />
        <div className="nav-controls">
          <button
            className="nav-ctrl-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            data-hover
          >
            {theme === "dark" ? (
              <Sun size={15} strokeWidth={2} />
            ) : (
              <Moon size={15} strokeWidth={2} />
            )}
          </button>
          <button
            className="nav-ctrl-btn"
            onClick={toggleLang}
            aria-label="Toggle language"
            data-hover
          >
            {lang === "en" ? "ع" : "EN"}
          </button>
        </div>
      </nav>

      {/* Mobile hamburger — top right */}
      <button
        className="nav-mobile-trigger"
        onClick={() => setMobileOpen(o => !o)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        data-hover
      >
        {mobileOpen ? (
          <X size={20} strokeWidth={2} />
        ) : (
          <Menu size={20} strokeWidth={2} />
        )}
      </button>

      {/* Mobile slide-down menu */}
      <div
        className={`nav-mobile-menu ${mobileOpen ? "open" : ""}`}
        role="navigation"
      >
        <div className="nav-mobile-inner">
          {NAV_ITEMS.map(({ id, Icon, labelEn, labelAr }) => (
            <button
              key={id}
              className={`nav-mobile-item ${active === id ? "active" : ""}`}
              onClick={() => handleNav(id)}
              data-hover
            >
              <Icon size={18} strokeWidth={2} />
              <span>{lang === "en" ? labelEn : labelAr}</span>
            </button>
          ))}
          <div className="nav-mobile-controls">
            <button className="nav-ctrl-btn" onClick={toggleTheme} data-hover>
              {theme === "dark" ? (
                <Sun size={16} strokeWidth={2} />
              ) : (
                <Moon size={16} strokeWidth={2} />
              )}
            </button>
            <button
              className="nav-ctrl-btn"
              onClick={toggleLang}
              data-hover
              style={{ fontSize: "13px", fontWeight: 800 }}
            >
              {lang === "en" ? "ع" : "EN"}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="nav-mobile-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
