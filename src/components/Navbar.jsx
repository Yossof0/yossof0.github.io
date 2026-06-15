import { useTheme } from "../contexts/ThemeContext";
import { useLang } from "../contexts/LangContext";

const NAV_ITEMS = [
  { id: "home",     icon: "⌂",  labelEn: "Home",     labelAr: "الرئيسية" },
  { id: "about",    icon: "◉",  labelEn: "About",    labelAr: "عني" },
  { id: "projects", icon: "⟨⟩", labelEn: "Projects", labelAr: "المشاريع" },
  { id: "contact",  icon: "✉",  labelEn: "Contact",  labelAr: "تواصل" },
  { id: "business", icon: "⬡",  labelEn: "Business", labelAr: "خدماتي" },
];

export default function Navbar({ active, setActive }) {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();

  return (
    <nav className="nav-pill" role="navigation" aria-label="Main navigation">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          className={`nav-btn ${active === item.id ? "active" : ""}`}
          onClick={() => setActive(item.id)}
          title={lang === "en" ? item.labelEn : item.labelAr}
          aria-label={lang === "en" ? item.labelEn : item.labelAr}
          aria-current={active === item.id ? "page" : undefined}
          data-hover
        >
          {item.icon}
        </button>
      ))}

      <div className="nav-divider" />

      <div className="nav-controls">
        <button
          className="nav-ctrl-btn"
          onClick={toggleTheme}
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          aria-label="Toggle theme"
          data-hover
        >
          {theme === "dark" ? "☀" : "◗"}
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
