export const SECTION_IDS = ["home", "about", "projects", "contact", "business", "gallery"] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export const SECTION_PATHS: Record<SectionId, "/" | "/about" | "/projects" | "/contact" | "/business" | "/gallery"> = {
  home: "/",
  about: "/about",
  projects: "/projects",
  contact: "/contact",
  business: "/business",
  gallery: "/gallery",
};

export const SECTION_TITLES_AR: Record<SectionId, string> = {
  home: "يوسف عبدالواحد — مطور ويب",
  about: "عني — يوسف عبدالواحد",
  projects: "المشاريع — يوسف عبدالواحد",
  contact: "تواصل — يوسف عبدالواحد",
  business: "اعمل معي — يوسف عبدالواحد",
  gallery: "معرض الصور — يوسف عبدالواحد",
};

export function sectionFromPath(pathname: string): SectionId {
  const id = pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
  return (SECTION_IDS as readonly string[]).includes(id) ? (id as SectionId) : "home";
}

/** Maps old hash links like "#/about" to a section, or null when the hash is not a section link. */
export function sectionFromLegacyHash(hash: string): SectionId | null {
  if (!hash.startsWith("#/")) return null;
  const id = hash.slice(2).toLowerCase();
  return (SECTION_IDS as readonly string[]).includes(id) ? (id as SectionId) : null;
}

export function sectionHead(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  };
}
