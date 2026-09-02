import { useState, useEffect, useCallback } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LangProvider } from "./contexts/LangContext";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import BusinessSection from "./sections/BusinessSection";
import GallerySection from "./sections/GallerySection";
import "./index.css";

const SECTIONS = {
  home: {
    Component: HomeSection,
    title: "Yossof Abdelwahed — Web Developer",
    titleAr: "يوسف عبدالواحد — مطور ويب",
  },
  about: {
    Component: AboutSection,
    title: "About — Yossof Abdelwahed",
    titleAr: "عني — يوسف عبدالواحد",
  },
  projects: {
    Component: ProjectsSection,
    title: "Projects — Yossof Abdelwahed",
    titleAr: "المشاريع — يوسف عبدالواحد",
  },
  contact: {
    Component: ContactSection,
    title: "Contact — Yossof Abdelwahed",
    titleAr: "تواصل — يوسف عبدالواحد",
  },
  business: {
    Component: BusinessSection,
    title: "Work With Me — Yossof Abdelwahed",
    titleAr: "اعمل معي — يوسف عبدالواحد",
  },
  gallery: {
    Component: GallerySection,
    title: "Gallery — Yossof Abdelwahed",
    titleAr: "معرض الصور — يوسف عبدالواحد",
  },
};

const VALID_ROUTES = Object.keys(SECTIONS);

function getRouteFromHash() {
  const hash = window.location.hash.replace("#/", "").toLowerCase();
  return VALID_ROUTES.includes(hash) ? hash : "home";
}

function Portfolio() {
  const [active, setActive] = useState(getRouteFromHash);
  const [animKey, setAnimKey] = useState(0);
  const [direction, setDirection] = useState("forward");

  const ROUTE_ORDER = VALID_ROUTES;

  const navigate = useCallback(
    id => {
      if (id === active) return;
      const prevIdx = ROUTE_ORDER.indexOf(active);
      const nextIdx = ROUTE_ORDER.indexOf(id);
      setDirection(nextIdx >= prevIdx ? "forward" : "backward");
      setAnimKey(k => k + 1);
      setActive(id);

      // Update URL hash
      window.history.pushState(null, "", id === "home" ? "#/" : `#/${id}`);

      // Update page title
      const lang = document.documentElement.getAttribute("lang") || "en";
      const section = SECTIONS[id];
      document.title = lang === "ar" ? section.titleAr : section.title;

      window.scrollTo({ top: 0, behavior: "instant" });
    },
    [active]
  );

  // Handle browser back/forward
  useEffect(() => {
    const onPopState = () => {
      const route = getRouteFromHash();
      if (route !== active) {
        setAnimKey(k => k + 1);
        setActive(route);
        const lang = document.documentElement.getAttribute("lang") || "en";
        document.title =
          lang === "ar" ? SECTIONS[route].titleAr : SECTIONS[route].title;
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [active]);

  // Set initial hash if none
  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState(null, "", "#/");
    }
    const lang = document.documentElement.getAttribute("lang") || "en";
    document.title =
      lang === "ar" ? SECTIONS[active].titleAr : SECTIONS[active].title;
  }, []);

  const { Component } = SECTIONS[active] || SECTIONS.home;

  return (
    <>
      <Cursor />
      <div
        key={animKey}
        className={`page-transition page-transition--${direction}`}
      >
        <Component setActive={navigate} />
      </div>
      <ScrollToTop />
      <Navbar active={active} setActive={navigate} />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Portfolio />
      </LangProvider>
    </ThemeProvider>
  );
}
