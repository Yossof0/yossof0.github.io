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
import "./index.css";

function Portfolio() {
  const [active, setActive] = useState("home");

  const renderSection = () => {
    switch (active) {
      case "home":     return <HomeSection     key="home"     setActive={setActive} />;
      case "about":    return <AboutSection    key="about"    setActive={setActive} />;
      case "projects": return <ProjectsSection key="projects" setActive={setActive} />;
      case "contact":  return <ContactSection  key="contact"  setActive={setActive} />;
      case "business": return <BusinessSection key="business" setActive={setActive} />;
      default:         return <HomeSection     key="home"     setActive={setActive} />;
    }
  };

  return (
    <>
      <Cursor />
      {renderSection()}
      <Navbar active={active} setActive={setActive} />
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
