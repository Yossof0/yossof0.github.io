import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = window.localStorage.getItem("portfolio-lang");
    if (savedLang === "en" || savedLang === "ar") {
      setLang(savedLang);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof document === "undefined") return;
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
    window.localStorage.setItem("portfolio-lang", lang);
  }, [lang, mounted]);

  const toggleLang = () => setLang((l) => (l === "en" ? "ar" : "en"));
  const isAr = mounted ? lang === "ar" : false;

  // t() helper: picks Arabic or English value
  const t = (en, ar) => (isAr ? ar : en);

  return (
    <LangContext.Provider value={{ lang: mounted ? lang : "en", toggleLang, isAr, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
