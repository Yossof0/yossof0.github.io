import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useLang } from "../contexts/LangContext";
import { X, ExternalLink, Github } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const { t, isAr } = useLang();
  const scrollY = useRef(0);

  useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    scrollY.current = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY.current}px`;
    document.body.style.width = "100%";
    document.body.style.overflowY = "scroll";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      window.scrollTo(0, scrollY.current);
    };
  }, [onClose]);

  if (!project) return null;
  const name = isAr && project.nameAr ? project.nameAr : project.name;
  const desc =
    isAr && project.descriptionAr ? project.descriptionAr : project.description;

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        boxSizing: "border-box",
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        animation: "fadeIn 0.2s ease",
      }}
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: "var(--card2)",
          border: "1px solid var(--border2)",
          borderRadius: 20,
          width: "100%",
          maxWidth: 580,
          maxHeight: "88vh",
          overflowY: "auto",
          position: "relative",
          boxShadow:
            "0 32px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)",
          display: "flex",
          flexDirection: "column",
          animation: "slideUp 0.25s cubic-bezier(0.22,1,0.36,1)",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 20px",
            borderBottom: "1px solid var(--border2)",
            position: "sticky",
            top: 0,
            background: "var(--card2)",
            zIndex: 1,
            borderRadius: "20px 20px 0 0",
            flexShrink: 0,
          }}
        >
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              margin: 0,
              color: "var(--text)",
            }}
          >
            {name}
          </h2>
          <button
            onClick={onClose}
            data-hover
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "var(--bg3)",
              border: "1px solid var(--border2)",
              color: "var(--text2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "none",
              flexShrink: 0,
              transition: "background 0.2s, color 0.2s",
            }}
          >
            <X size={14} strokeWidth={2} />
          </button>
        </div>

        {/* Screenshot */}
        {project.image && (
          <div
            style={{
              width: "100%",
              overflow: "hidden",
              background: "var(--bg2)",
              flexShrink: 0,
            }}
          >
            <img
              src={project.image}
              alt={name}
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
                objectPosition: "top",
                maxHeight: 280,
              }}
            />
          </div>
        )}

        {/* Body */}
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "var(--accent)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {project.category}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {project.tags.map(tag => (
              <span
                key={tag}
                style={{
                  padding: "3px 10px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 600,
                  background: "var(--accentbg)",
                  color: "var(--accent)",
                  border: "1px solid var(--accentbg2)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <p
            style={{
              fontSize: 14,
              color: "var(--text2)",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {desc}
          </p>
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              paddingTop: 4,
              borderTop: "1px solid var(--border)",
            }}
          >
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  fontSize: 14,
                  padding: "10px 22px",
                  textDecoration: "none",
                }}
                data-hover
              >
                <ExternalLink size={15} strokeWidth={2} />
                {t("View Live", "عرض المشروع")}
              </a>
            ) : (
              <span
                style={{
                  fontSize: 13,
                  color: "var(--text3)",
                  fontWeight: 600,
                  alignSelf: "center",
                }}
              >
                🔧 {t("Not live yet", "غير منشور")}
              </span>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{
                fontSize: 14,
                padding: "10px 22px",
                textDecoration: "none",
              }}
              data-hover
            >
              <Github size={15} strokeWidth={2} />
              {t("GitHub", "جيت هاب")}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>,
    document.body
  );
}
