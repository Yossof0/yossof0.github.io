import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en";
    return window.localStorage.getItem("portfolio-lang") || "en";
  });

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("portfolio-lang", lang);
    }
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
