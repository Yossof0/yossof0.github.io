import { createFileRoute } from "@tanstack/react-router";
import ProjectsSection from "@/portfolio/sections/ProjectsSection";
import { useSectionNavigate } from "@/portfolio/PortfolioShell";
import { sectionHead } from "@/portfolio/sections";

export const Route = createFileRoute("/projects")({
  head: () =>
    sectionHead(
      "Projects — Yossof Abdelwahed",
      "Websites, tools and browser extensions built by Yossof Abdelwahed.",
    ),
  component: Page,
});

function Page() {
  const goTo = useSectionNavigate();
  return <ProjectsSection setActive={goTo} />;
}
