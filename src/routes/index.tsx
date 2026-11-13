import { createFileRoute } from "@tanstack/react-router";
import HomeSection from "@/portfolio/sections/HomeSection";
import { useSectionNavigate } from "@/portfolio/PortfolioShell";
import { sectionHead } from "@/portfolio/sections";
import { ASSETS } from "@/portfolio/assets";

export const Route = createFileRoute("/")({
  head: () => ({
    ...sectionHead(
      "Yossof Abdelwahed — Web Developer",
      "Frontend & Full-Stack Web Developer based in Cairo, Egypt. Available for freelance work worldwide.",
    ),
    // The landing wallpaper is the first big thing visitors see; start fetching it right away.
    links: [
      {
        rel: "preload",
        as: "image",
        href: ASSETS["/hero/wallpaper-dark.webp"],
        type: "image/webp",
        fetchPriority: "high",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const goTo = useSectionNavigate();
  return <HomeSection setActive={goTo} />;
}
