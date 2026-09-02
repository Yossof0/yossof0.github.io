import { useState } from "react";
import { useLang } from "../contexts/LangContext";
import Footer from "../components/Footer";
import { X, Camera } from "lucide-react";

const PHOTOS = [
  {
    id: 1,
    src: "/gallery/photo-1.jpg",
    alt: "Yossof — Street style",
    span: "tall",
  },
  {
    id: 2,
    src: "/gallery/photo-2.jpg",
    alt: "Yossof — Cairo vibes",
    span: "normal",
  },
  { id: 3, src: "/gallery/photo-3.png", alt: "Yossof — Sunset", span: "tall" },
];

export default function GallerySection({ setActive }) {
  const { t } = useLang();
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">
            <Camera size={22} strokeWidth={2} color="var(--accent)" />
            {t("Gallery", "معرض الصور")}
          </h2>
          <div className="section-line" />
          <p style={{ marginTop: 10, color: "var(--text2)", fontSize: "14px" }}>
            {t("Recent photos.", "صور حديثة.")}
          </p>
        </div>

        <div className="gallery-masonry">
          {PHOTOS.map(photo => (
            <div
              key={photo.id}
              className={`gallery-item ${photo.span === "tall" ? "gallery-item--tall" : ""}`}
              onClick={() => setLightbox(photo)}
              data-hover
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="gallery-overlay">
                <Camera size={20} color="#fff" />
              </div>
            </div>
          ))}
        </div>

        <Footer setActive={setActive} />
      </section>

      {lightbox && (
        <div className="modal-overlay" onClick={() => setLightbox(null)}>
          <div
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
          >
            <button
              className="modal-close"
              onClick={() => setLightbox(null)}
              style={{ position: "absolute", top: -16, right: -16, zIndex: 10 }}
              data-hover
            >
              <X size={14} />
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              style={{
                maxWidth: "90vw",
                maxHeight: "85vh",
                borderRadius: 16,
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
