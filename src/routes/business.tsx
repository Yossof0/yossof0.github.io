import { createFileRoute } from "@tanstack/react-router";
import BusinessSection from "@/portfolio/sections/BusinessSection";
import { useSectionNavigate } from "@/portfolio/PortfolioShell";
import { sectionHead } from "@/portfolio/sections";

export const Route = createFileRoute("/business")({
  head: () =>
    sectionHead(
      "Work With Me — Yossof Abdelwahed",
      "Web development services from Yossof Abdelwahed: websites, web apps and more for clients worldwide.",
    ),
  component: Page,
});

function Page() {
  const goTo = useSectionNavigate();
  return <BusinessSection setActive={goTo} />;
}
