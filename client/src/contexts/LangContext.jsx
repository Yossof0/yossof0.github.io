import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("portfolio-lang") || "en";
  });

  useEffect(() => {
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("portfolio-lang", lang);
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "en" ? "ar" : "en"));
  const isAr = lang === "ar";

  // t() helper: picks Arabic or English value
  const t = (en, ar) => (isAr ? ar : en);

  return (
    <LangContext.Provider value={{ lang, toggleLang, isAr, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
