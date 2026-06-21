import { useEffect } from "react";
import { useLang } from "../contexts/LangContext";

export default function ProjectModal({ project, onClose }) {
  const { t, isAr } = useLang();

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  const name = isAr && project.nameAr ? project.nameAr : project.name;
  const desc = isAr && project.descriptionAr ? project.descriptionAr : project.description;

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" onClick={onClose} aria-label="Close" data-hover>✕</button>

        {project.image && (
          <div className="modal-thumb">
            <img src={project.image} alt={name} />
          </div>
        )}

        <div style={{ fontSize: "11px", color: "var(--accent)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
          {project.category}
        </div>

        <h2 className="modal-title" id="modal-title">{name}</h2>
        <p className="modal-desc">{desc}</p>

        <div className="modal-tags">
          {project.tags.map((tag) => (
            <span key={tag} className={`tag ${project.category === "Extension" ? "ext" : ""}`}>{tag}</span>
          ))}
        </div>

        <div className="modal-actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ fontSize: "14px", padding: "10px 22px" }}
            data-hover
          >
            🐙 {t("GitHub", "جيت هاب")}
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "14px", padding: "10px 22px" }}
              data-hover
            >
              🚀 {t("Live Demo", "عرض مباشر")}
            </a>
          ) : (
            <span style={{ fontSize: "13px", color: "var(--text3)", fontWeight: 600, alignSelf: "center" }}>
              {t("🔧 Not live yet", "🔧 غير منشور بعد")}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
