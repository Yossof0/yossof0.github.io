import { createFileRoute } from "@tanstack/react-router";
import AboutSection from "@/portfolio/sections/AboutSection";
import { useSectionNavigate } from "@/portfolio/PortfolioShell";
import { sectionHead } from "@/portfolio/sections";

export const Route = createFileRoute("/about")({
  head: () =>
    sectionHead(
      "About — Yossof Abdelwahed",
      "Background, skills and tech stack of Yossof Abdelwahed, a web developer from Cairo, Egypt.",
    ),
  component: Page,
});

function Page() {
  const goTo = useSectionNavigate();
  return <AboutSection setActive={goTo} />;
}
