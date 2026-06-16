import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { personalInfo, socials } from "../data/projects";
import { useLang } from "../contexts/LangContext";
import Footer from "../components/Footer";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";

// ─── REPLACE THESE with your EmailJS credentials ───────────────
const EMAILJS_SERVICE_ID = "service_0xioeyk";
const EMAILJS_TEMPLATE_ID = "template_pafvk1f";
const EMAILJS_PUBLIC_KEY = "Ezwb-ggi5WVMwD3dK";
// ────────────────────────────────────────────────────────────────

const INFO_ITEMS = (t, isAr) => [
  {
    Icon: Mail,
    label: t("Email", "البريد الإلكتروني"),
    value: socials.email,
    href: `mailto:${socials.email}`,
  },
  {
    Icon: MapPin,
    label: t("Location", "الموقع"),
    value: t(personalInfo.location, personalInfo.locationAr),
  },
  {
    Icon: Phone,
    label: t("Phone", "الهاتف"),
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    Icon: Clock,
    label: t("Office Hours", "ساعات العمل"),
    value: t(personalInfo.officeHours, personalInfo.officeHoursAr),
  },
];

export default function ContactSection({ setActive }) {
  const { t, isAr } = useLang();
  const formRef = useRef();
  const [status, setStatus] = useState(null);
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
      setCharCount(0);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">
          <Mail size={22} strokeWidth={2} color="var(--accent)" />
          {t("Get in Touch", "تواصل معي")}
        </h2>
        <div className="section-line" />
        <p style={{ marginTop: 12, color: "var(--text2)", fontSize: "14px" }}>
          {t(
            "Have a project in mind or want to collaborate? I'd love to hear from you.",
            "هل لديك مشروع أو تريد التعاون؟ يسعدني التواصل معك."
          )}
        </p>
      </div>

      <div className="contact-grid">
        {/* Left: Info */}
        <div className="contact-info">
          {INFO_ITEMS(t, isAr).map(item => (
            <div key={item.label} className="contact-item">
              <div className="contact-item-icon">
                <item.Icon size={16} strokeWidth={2} />
              </div>
              <div>
                <div className="contact-item-label">{item.label}</div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="contact-item-value"
                    style={{ color: "var(--text)", textDecoration: "none" }}
                    data-hover
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="contact-item-value">{item.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Form */}
        <form ref={formRef} className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="from_name">
                {t("Name", "الاسم")}
              </label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                className="form-input"
                placeholder={t("Your name", "اسمك")}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="reply_to">
                {t("Email", "البريد الإلكتروني")}
              </label>
              <input
                id="reply_to"
                name="reply_to"
                type="email"
                className="form-input"
                placeholder={t("your@email.com", "بريدك@مثال.com")}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="subject">
              {t("Subject", "الموضوع")}
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className="form-input"
              placeholder={t("What's this about?", "موضوع الرسالة")}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">
              {t("Message", "الرسالة")}
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              placeholder={t("Your message…", "رسالتك…")}
              maxLength={1000}
              required
              onChange={e => setCharCount(e.target.value.length)}
            />
            <div className="form-count">{charCount}/1000</div>
          </div>

          {status === "success" && (
            <div className="form-status success">
              {t(
                "✅ Message sent! I'll get back to you soon.",
                "✅ تم إرسال الرسالة! سأرد عليك قريباً."
              )}
            </div>
          )}
          {status === "error" && (
            <div className="form-status error">
              {t(
                "❌ Something went wrong. Try emailing me directly.",
                "❌ حدث خطأ. جرّب مراسلتي مباشرة."
              )}
            </div>
          )}

          <button
            type="submit"
            className="btn-primary"
            disabled={status === "sending"}
            data-hover
            style={{
              alignSelf: "flex-end",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Send size={15} strokeWidth={2} />
            {status === "sending"
              ? t("Sending…", "جاري الإرسال…")
              : t("Send Message", "إرسال الرسالة")}
          </button>
        </form>
      </div>

      <Footer setActive={setActive} />
    </section>
  );
}
