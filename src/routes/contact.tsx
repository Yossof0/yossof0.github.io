import { createFileRoute } from "@tanstack/react-router";
import ContactSection from "@/portfolio/sections/ContactSection";
import { useSectionNavigate } from "@/portfolio/PortfolioShell";
import { sectionHead } from "@/portfolio/sections";

export const Route = createFileRoute("/contact")({
  head: () =>
    sectionHead(
      "Contact — Yossof Abdelwahed",
      "Get in touch with Yossof Abdelwahed about a project, a quote or a collaboration.",
    ),
  component: Page,
});

function Page() {
  const goTo = useSectionNavigate();
  return <ContactSection setActive={goTo} />;
}
