import { useTheme } from "../contexts/ThemeContext";
import { useLang } from "../contexts/LangContext";
import { House, User, Code2, Mail, Briefcase, Sun, Moon } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", Icon: House, labelEn: "Home", labelAr: "الرئيسية" },
  { id: "about", Icon: User, labelEn: "About", labelAr: "عني" },
  { id: "projects", Icon: Code2, labelEn: "Projects", labelAr: "المشاريع" },
  { id: "contact", Icon: Mail, labelEn: "Contact", labelAr: "تواصل" },
  { id: "business", Icon: Briefcase, labelEn: "Business", labelAr: "خدماتي" },
];

export default function Navbar({ active, setActive }) {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();

  return (
    <nav className="nav-pill" role="navigation" aria-label="Main navigation">
      {NAV_ITEMS.map(({ id, Icon, labelEn, labelAr }) => (
        <button
          key={id}
          className={`nav-btn ${active === id ? "active" : ""}`}
          onClick={() => setActive(id)}
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
          title={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
          aria-label="Toggle theme"
          data-hover
        >
          {theme === "dark" ? (
            <Sun size={16} strokeWidth={2} />
          ) : (
            <Moon size={16} strokeWidth={2} />
          )}
        </button>
        <button
          className="nav-ctrl-btn"
          onClick={toggleLang}
          title={lang === "en" ? "العربية" : "English"}
          aria-label="Toggle language"
          data-hover
          style={{ fontSize: "11px", fontWeight: 800 }}
        >
          {lang === "en" ? "ع" : "EN"}
        </button>
      </div>
    </nav>
  );
}
