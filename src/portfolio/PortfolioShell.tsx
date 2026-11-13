import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LangProvider, useLang } from "./contexts/LangContext";
import Cursor from "./components/Cursor";
import Aurora from "./components/Aurora";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import {
  SECTION_IDS,
  SECTION_PATHS,
  SECTION_TITLES_AR,
  sectionFromLegacyHash,
  sectionFromPath,
  type SectionId,
} from "./sections";

export function useSectionNavigate() {
  const navigate = useNavigate();
  return useCallback(
    (id: SectionId) => {
      void navigate({ to: SECTION_PATHS[id] ?? "/" });
    },
    [navigate],
  );
}

function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = sectionFromPath(pathname);
  const goTo = useSectionNavigate();
  const navigate = useNavigate();
  const { isAr } = useLang() as { isAr: boolean };

  // Direction of the page transition, based on nav order.
  const prev = useRef<SectionId>(active);
  const direction = useRef<"forward" | "backward">("forward");
  if (prev.current !== active) {
    direction.current =
      SECTION_IDS.indexOf(active) >= SECTION_IDS.indexOf(prev.current) ? "forward" : "backward";
    prev.current = active;
  }

  // Old links like yoursite.com/#/about keep working.
  useEffect(() => {
    const legacy = sectionFromLegacyHash(window.location.hash);
    if (legacy) void navigate({ to: SECTION_PATHS[legacy], replace: true, hash: "" });
  }, [navigate]);

  useEffect(() => {
    if (isAr) document.title = SECTION_TITLES_AR[active];
  }, [active, isAr]);

  return (
    <>
      <Aurora />
      <Cursor />
      <ScrollProgress />
      <div key={active} className={`page-transition page-transition--${direction.current}`}>
        {children}
      </div>
      <ScrollToTop />
      <Navbar active={active} setActive={goTo} />
    </>
  );
}

export default function PortfolioShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LangProvider>
        <Shell>{children}</Shell>
      </LangProvider>
    </ThemeProvider>
  );
}
