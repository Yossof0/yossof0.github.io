import { createFileRoute } from "@tanstack/react-router";
import GallerySection from "@/portfolio/sections/GallerySection";
import { useSectionNavigate } from "@/portfolio/PortfolioShell";
import { sectionHead } from "@/portfolio/sections";

export const Route = createFileRoute("/gallery")({
  head: () =>
    sectionHead(
      "Gallery — Yossof Abdelwahed",
      "Photo gallery of Yossof Abdelwahed.",
    ),
  component: Page,
});

function Page() {
  const goTo = useSectionNavigate();
  return <GallerySection setActive={goTo} />;
}
