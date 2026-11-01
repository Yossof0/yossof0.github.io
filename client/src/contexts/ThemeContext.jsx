import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return window.localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("data-theme", theme);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("portfolio-theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
