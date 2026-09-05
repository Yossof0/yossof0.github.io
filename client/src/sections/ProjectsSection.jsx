import { useState, useMemo } from "react";
import { projects, socials } from "../data/projects";
import { useLang } from "../contexts/LangContext";
import ProjectModal from "../components/ProjectModal";
import Footer from "../components/Footer";
import {
  Code2,
  LayoutGrid,
  List,
  Github,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const CATEGORIES = ["All", "Web", "Extension"];

export default function ProjectsSection({ setActive }) {
  const { t, isAr } = useLang();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // "list" | "grid"
  const [hoverPreview, setHoverPreview] = useState(null); // for list view hover
  const ref = useScrollReveal();

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const matchCat = filter === "All" || p.category === filter;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.nameAr && p.nameAr.includes(q)) ||
        p.tags.some(tag => tag.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [filter, search]);

  const getCatCount = cat =>
    projects.filter(p => cat === "All" || p.category === cat).length;

  return (
    <>
      <section className="section projects-section" ref={ref}>
        {/* ── Big centered title ── */}
        <div className="projects-hero reveal">
          <h1 className="projects-big-title">{t("My Projects", "مشاريعي")}</h1>
          <p className="projects-subtitle">
            {t(
              "A collection of web apps, tools, and extensions I've built.",
              "مجموعة من تطبيقات الويب والأدوات والإضافات التي بنيتها."
            )}
          </p>
          <div className="projects-hero-actions">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-ripple"
              data-hover
            >
              <Github size={16} strokeWidth={2} />
              {t("GitHub Profile", "ملفي على GitHub")}
            </a>
            <button
              className="btn-outline btn-ripple"
              onClick={() => setActive("business")}
              data-hover
            >
              <ArrowUpRight size={16} strokeWidth={2} />
              {t("Work With Me", "اعمل معي")}
            </button>
          </div>
        </div>

        {/* ── Filter + toggle ── */}
        <div className="projects-toolbar reveal">
          <div className="filter-bar" style={{ flex: 1 }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
                data-hover
              >
                {cat === "All"
                  ? t("All", "الكل")
                  : cat === "Web"
                    ? t("Web", "ويب")
                    : t("Extensions", "إضافات")}
                <span className="filter-count">{getCatCount(cat)}</span>
              </button>
            ))}
            <input
              type="text"
              className="search-box"
              placeholder={t("Search…", "بحث…")}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="view-toggle">
            <button
              className={`view-toggle-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
              aria-label="List view"
              data-hover
            >
              <List size={16} />
            </button>
            <button
              className={`view-toggle-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
              data-hover
            >
              <LayoutGrid size={16} />
            </button>
          </div>
        </div>

        {/* ── List View ── */}
        {viewMode === "list" && (
          <div className="projects-list reveal">
            <div className="projects-list-header">
              <span>{t("CLIENT / PROJECT", "المشروع")}</span>
              <span>{t("CATEGORY", "الفئة")}</span>
              <span>{t("YEAR", "السنة")}</span>
            </div>
            {filtered.map((p, i) => (
              <div
                key={p.id}
                className="projects-list-row reveal"
                style={{ transitionDelay: `${i * 0.04}s` }}
                onClick={() => setSelected(p)}
                onMouseEnter={() => setHoverPreview(p)}
                onMouseLeave={() => setHoverPreview(null)}
                data-hover
              >
                <span className="list-row-name">
                  {isAr && p.nameAr ? p.nameAr : p.name}
                </span>
                <span className="list-row-cat">{p.category}</span>
                <span className="list-row-year">2024</span>
                <ArrowUpRight size={16} className="list-row-arrow" />
              </div>
            ))}

            {/* Hover preview image */}
            {hoverPreview?.image && (
              <div className="list-hover-preview">
                <img src={hoverPreview.image} alt={hoverPreview.name} />
              </div>
            )}
          </div>
        )}

        {/* ── Grid View ── */}
        {viewMode === "grid" && (
          <div className="projects-grid-big">
            {filtered.map((p, i) => (
              <div
                key={p.id}
                className={`project-grid-card reveal reveal-delay-${(i % 4) + 1}`}
                onClick={() => setSelected(p)}
                data-hover
              >
                {/* Screenshot */}
                <div className="project-grid-img">
                  {p.image ? (
                    <img src={p.image} alt={p.name} loading="lazy" />
                  ) : (
                    <div className="project-grid-placeholder">
                      <Code2 size={32} color="var(--text3)" />
                    </div>
                  )}
                  <div className="project-grid-overlay">
                    <div className="project-grid-actions">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="project-icon-btn"
                          title="Live"
                          data-hover
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="project-icon-btn"
                        title="GitHub"
                        data-hover
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Bottom info */}
                <div className="project-grid-info">
                  <div className="project-grid-cat">{p.category}</div>
                  <div className="project-grid-name">
                    {isAr && p.nameAr ? p.nameAr : p.name}
                  </div>
                  <div className="project-grid-tags">
                    {p.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "60px 0",
              color: "var(--text3)",
            }}
          >
            {t("No projects found.", "لا توجد مشاريع مطابقة.")}
          </div>
        )}

        <Footer setActive={setActive} />
      </section>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
