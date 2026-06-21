import { useState, useMemo } from "react";
import { projects } from "../data/projects";
import { useLang } from "../contexts/LangContext";
import ProjectModal from "../components/ProjectModal";
import Footer from "../components/Footer";
import { Code2, Rocket, Github } from "lucide-react";

const CATEGORIES = ["All", "Web", "Extension"];

export default function ProjectsSection({ setActive }) {
  const { t, isAr } = useLang();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = filter === "All" || p.category === filter;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.nameAr && p.nameAr.includes(q)) ||
        p.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        p.description.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [filter, search]);

  return (
    <>
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">
            <Code2 size={22} strokeWidth={2} color="var(--accent)" />
            {t("Projects", "المشاريع")}
          </h2>
          <div className="section-line" />
        </div>

        <div className="filter-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
              data-hover
            >
              {cat === "All" ? t("All", "الكل") : cat === "Web" ? t("Web", "ويب") : t("Extensions", "إضافات")}
            </button>
          ))}
          <input
            type="text"
            className="search-box"
            placeholder={t("Search projects…", "ابحث في المشاريع…")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text3)", fontSize: "15px" }}>
            {t("No projects found.", "لا توجد مشاريع مطابقة.")}
          </div>
        ) : (
          <div className="projects-grid">
            {filtered.map((p) => (
              <div
                key={p.id}
                className={`project-card ${p.featured ? "featured" : ""}`}
                onClick={() => setSelected(p)}
                data-hover
              >
                {p.image && (
                  <div className="project-thumb">
                    <img src={p.image} alt={p.name} loading="lazy" />
                  </div>
                )}
                <div style={{ fontSize: "11px", color: "var(--accent)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 }}>
                  {p.category}{p.featured ? " · ⭐" : ""}
                </div>
                <div className="project-title">{isAr && p.nameAr ? p.nameAr : p.name}</div>
                <p className="project-desc">
                  {(isAr && p.descriptionAr ? p.descriptionAr : p.description).slice(0, 110)}…
                </p>
                <div>
                  {p.tags.map((tag) => (
                    <span key={tag} className={`tag ${p.category === "Extension" ? "ext" : ""}`}>{tag}</span>
                  ))}
                </div>
                <div style={{ marginTop: 14, fontSize: "12px", color: "var(--text3)", display: "flex", gap: 10, alignItems: "center" }}>
                  {p.live
                    ? <span style={{ color: "var(--accent)", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}><Rocket size={12} /> {t("Live", "مباشر")}</span>
                    : <span style={{ display: "flex", alignItems: "center", gap: 4 }}>🔧 {t("In Progress", "قيد التطوير")}</span>}
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Github size={12} /> {t("GitHub", "جيت هاب")}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <Footer setActive={setActive} />
      </section>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
