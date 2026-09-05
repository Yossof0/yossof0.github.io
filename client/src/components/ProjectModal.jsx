import { useEffect } from "react";
import { useLang } from "../contexts/LangContext";
import { X, ExternalLink, Github } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const { t, isAr } = useLang();

  useEffect(() => {
    const handler = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;
  const name = isAr && project.nameAr ? project.nameAr : project.name;
  const desc =
    isAr && project.descriptionAr ? project.descriptionAr : project.description;

  return (
    <div
      className="modal-overlay"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div
        className="modal modal-project"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header bar */}
        <div className="modal-header">
          <h2 className="modal-header-title" id="modal-title">
            {name}
          </h2>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close"
            data-hover
          >
            <X size={16} />
          </button>
        </div>

        {/* Screenshot */}
        {project.image && (
          <div className="modal-screenshot">
            <img src={project.image} alt={name} />
          </div>
        )}

        {/* Tags */}
        <div className="modal-tags">
          {project.tags.map(tag => (
            <span
              key={tag}
              className={`tag ${project.category === "Extension" ? "ext" : ""}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="modal-desc">{desc}</p>

        {/* Actions */}
        <div className="modal-actions">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "14px", padding: "11px 24px" }}
              data-hover
            >
              <ExternalLink size={15} strokeWidth={2} />
              {t("View Live Project", "عرض المشروع")}
            </a>
          ) : (
            <span
              style={{
                fontSize: "13px",
                color: "var(--text3)",
                fontWeight: 600,
                alignSelf: "center",
              }}
            >
              🔧 {t("Not live yet", "غير منشور بعد")}
            </span>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ fontSize: "14px", padding: "11px 24px" }}
            data-hover
          >
            <Github size={15} strokeWidth={2} />
            {t("View on GitHub", "جيت هاب")}
          </a>
        </div>
      </div>
    </div>
  );
}
