import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LangProvider } from "./contexts/LangContext";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import BusinessSection from "./sections/BusinessSection";
import GallerySection from "./sections/GallerySection";
import "./index.css";

const SECTIONS = {
  home: HomeSection,
  about: AboutSection,
  projects: ProjectsSection,
  contact: ContactSection,
  business: BusinessSection,
  gallery: GallerySection,
};

function Portfolio() {
  const [active, setActive] = useState("home");
  const [prev, setPrev] = useState(null);
  const [animKey, setAnimKey] = useState(0);

  const navigate = id => {
    if (id === active) return;
    setPrev(active);
    setActive(id);
    setAnimKey(k => k + 1);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const Section = SECTIONS[active] || HomeSection;

  return (
    <>
      <Cursor />
      <div key={animKey} className="page-transition">
        <Section setActive={navigate} />
      </div>
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
