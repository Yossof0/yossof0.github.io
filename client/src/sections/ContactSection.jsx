import { useRef, useState, useMemo } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { personalInfo, socials } from "../data/projects";
import { useLang } from "../contexts/LangContext";
import Footer from "../components/Footer";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  Hammer,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";

const RECAPTCHA_SITE_KEY = "6LdhXiwtAAAAAHTzW7W9CR8oWT3GSdCbPNCwJQLn";

const EMAILJS_SERVICE_ID = "service_0xioeyk";
const EMAILJS_TEMPLATE_ID = "template_pafvk1f";
const EMAILJS_PUBLIC_KEY = "Ezwb-ggi5WVMwD3dK";

const USD_RATE = 50; // 1 USD = 50 EGP

const PROJECT_TYPES = [
  { id: "webapp", label: "Web App", labelAr: "تطبيق ويب" },
  { id: "landing", label: "Landing Page", labelAr: "صفحة هبوط" },
  { id: "ecommerce", label: "E-Commerce Store", labelAr: "متجر إلكتروني" },
  { id: "extension", label: "Browser Extension", labelAr: "إضافة متصفح" },
  { id: "api", label: "API / Backend Only", labelAr: "API / خلفية فقط" },
  { id: "portfolio", label: "Portfolio Site", labelAr: "موقع معرض أعمال" },
  {
    id: "dashboard",
    label: "Dashboard / Admin Panel",
    labelAr: "لوحة تحكم / إدارة",
  },
];

// avg EGP min/max per service
const SERVICES = [
  {
    id: "frontend",
    label: "Frontend UI",
    labelAr: "واجهة المستخدم",
    min: 1500,
    max: 4000,
    icon: "🎨",
    types: ["webapp", "landing", "ecommerce", "portfolio", "dashboard"],
  },
  {
    id: "backend",
    label: "Backend / API",
    labelAr: "الخلفية / API",
    min: 2000,
    max: 6000,
    icon: "⚙️",
    types: ["webapp", "ecommerce", "api", "dashboard"],
  },
  {
    id: "auth",
    label: "Authentication",
    labelAr: "المصادقة",
    min: 800,
    max: 2000,
    icon: "🔐",
    types: ["webapp", "ecommerce", "dashboard"],
  },
  {
    id: "payments",
    label: "Payments",
    labelAr: "المدفوعات",
    min: 1500,
    max: 4000,
    icon: "💳",
    types: ["ecommerce", "webapp"],
  },
  {
    id: "inventory",
    label: "Inventory",
    labelAr: "المخزون",
    min: 1000,
    max: 3000,
    icon: "📦",
    types: ["ecommerce", "dashboard", "webapp"],
  },
  {
    id: "search",
    label: "Search",
    labelAr: "البحث",
    min: 500,
    max: 1500,
    icon: "🔍",
    types: ["webapp", "ecommerce", "dashboard", "portfolio"],
  },
  {
    id: "admin",
    label: "Admin Dashboard",
    labelAr: "لوحة الإدارة",
    min: 2000,
    max: 5000,
    icon: "🖥️",
    types: ["webapp", "ecommerce", "dashboard", "api"],
  },
  {
    id: "security",
    label: "Security",
    labelAr: "الأمان",
    min: 800,
    max: 2500,
    icon: "🛡️",
    types: ["webapp", "ecommerce", "api", "dashboard"],
  },
  {
    id: "hosting",
    label: "Hosting Setup",
    labelAr: "إعداد الاستضافة",
    min: 500,
    max: 1500,
    icon: "🌐",
    types: ["webapp", "landing", "ecommerce", "portfolio", "dashboard", "api"],
  },
  {
    id: "analytics",
    label: "Analytics",
    labelAr: "التحليلات",
    min: 500,
    max: 1500,
    icon: "📊",
    types: ["webapp", "ecommerce", "landing", "dashboard"],
  },
  {
    id: "mobile",
    label: "Mobile Support",
    labelAr: "دعم الجوال",
    min: 800,
    max: 2000,
    icon: "📱",
    types: ["webapp", "landing", "ecommerce", "portfolio", "dashboard"],
  },
  {
    id: "bugfix",
    label: "Bug Fixing",
    labelAr: "إصلاح الأخطاء",
    min: 300,
    max: 1000,
    icon: "🐛",
    types: [
      "webapp",
      "ecommerce",
      "api",
      "dashboard",
      "extension",
      "landing",
      "portfolio",
    ],
  },
  {
    id: "extension_core",
    label: "Extension Core",
    labelAr: "نواة الإضافة",
    min: 1000,
    max: 3000,
    icon: "🧩",
    types: ["extension"],
  },
  {
    id: "popup_ui",
    label: "Popup / Options UI",
    labelAr: "واجهة النافذة",
    min: 500,
    max: 1500,
    icon: "🪟",
    types: ["extension"],
  },
  {
    id: "content",
    label: "Content Scripts",
    labelAr: "سكريبتات المحتوى",
    min: 500,
    max: 2000,
    icon: "📝",
    types: ["extension"],
  },
];

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

function fmt(n) {
  return n.toLocaleString();
}

// ─── Build For Me Modal ──────────────────────────────────────────────────────
function BuildModal({ onClose, onAttach }) {
  const { t, isAr } = useLang();
  const [step, setStep] = useState(1); // 1=type, 2=services, 3=summary
  const [projectType, setProjectType] = useState(null);
  const [selected, setSelected] = useState({});
  const [extraInfo, setExtraInfo] = useState("");
  const [copied, setCopied] = useState(false);

  const availableServices = useMemo(
    () =>
      projectType ? SERVICES.filter(s => s.types.includes(projectType)) : [],
    [projectType]
  );

  const selectedServices = SERVICES.filter(s => selected[s.id]);

  const totalMin = selectedServices.reduce((acc, s) => acc + s.min, 0);
  const totalMax = selectedServices.reduce((acc, s) => acc + s.max, 0);
  const avgEGP = Math.round((totalMin + totalMax) / 2);
  const avgUSD = Math.round(avgEGP / USD_RATE);

  const toggle = id => setSelected(prev => ({ ...prev, [id]: !prev[id] }));

  const prompt = useMemo(() => {
    if (!projectType || selectedServices.length === 0) return "";
    const typeName = PROJECT_TYPES.find(p => p.id === projectType)?.label;
    const serviceList = selectedServices
      .map(s => `  - ${s.label} (~${fmt(Math.round((s.min + s.max) / 2))} EGP)`)
      .join("\n");
    return `Project Request — ${typeName}
━━━━━━━━━━━━━━━━━━━━━
Services needed:
${serviceList}

Estimated cost: ${fmt(totalMin)}–${fmt(totalMax)} EGP (~$${fmt(Math.round(totalMin / USD_RATE))}–$${fmt(Math.round(totalMax / USD_RATE))} USD)
Average: ~${fmt(avgEGP)} EGP / ~$${fmt(avgUSD)} USD
${extraInfo ? `\nAdditional info:\n${extraInfo}` : ""}`;
  }, [
    projectType,
    selectedServices,
    totalMin,
    totalMax,
    avgEGP,
    avgUSD,
    extraInfo,
  ]);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAttach = () => {
    onAttach({
      prompt,
      totalMin,
      totalMax,
      count: selectedServices.length,
    });
    onClose();
  };

  return (
    <div
      className="modal-overlay"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="modal" style={{ maxWidth: 620, width: "100%" }}>
        <button className="modal-close" onClick={onClose} data-hover>
          <X size={14} />
        </button>

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 6,
          }}
        >
          <Hammer size={20} color="var(--accent)" strokeWidth={2} />
          <h2 style={{ fontSize: "1.3rem", fontWeight: 900, margin: 0 }}>
            {t("Build For Me", "ابنِ لي مشروعاً")}
          </h2>
        </div>
        <p
          style={{ fontSize: "13px", color: "var(--text2)", marginBottom: 24 }}
        >
          {t(
            "Configure your project and get an instant cost estimate.",
            "صمّم مشروعك واحصل على تقدير تكلفة فوري."
          )}
        </p>

        {/* Step indicators */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
          {[
            t("Project Type", "النوع"),
            t("Services", "الخدمات"),
            t("Summary", "الملخص"),
          ].map((label, i) => (
            <div key={i} style={{ flex: 1, textAlign: "center" }}>
              <div
                style={{
                  height: 4,
                  borderRadius: 2,
                  marginBottom: 6,
                  background:
                    step > i
                      ? "var(--accent)"
                      : step === i + 1
                        ? "var(--accent)"
                        : "var(--border)",
                  opacity: step === i + 1 ? 1 : step > i + 1 ? 0.7 : 0.3,
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  color: step === i + 1 ? "var(--accent)" : "var(--text3)",
                  fontWeight: 700,
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Step 1 — Project Type */}
        {step === 1 && (
          <div>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--text3)",
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                marginBottom: 12,
              }}
            >
              {t("What are you building?", "ماذا تريد أن تبني؟")}
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}
            >
              {PROJECT_TYPES.map(pt => (
                <button
                  key={pt.id}
                  data-hover
                  onClick={() => {
                    setProjectType(pt.id);
                    setSelected({});
                  }}
                  style={{
                    background:
                      projectType === pt.id ? "var(--accentbg2)" : "var(--bg3)",
                    border: `1.5px solid ${projectType === pt.id ? "var(--accent)" : "var(--border)"}`,
                    borderRadius: 10,
                    padding: "12px 14px",
                    textAlign: "left",
                    color:
                      projectType === pt.id ? "var(--accent)" : "var(--text)",
                    fontSize: "13px",
                    fontWeight: 700,
                    fontFamily: "inherit",
                    transition: "all 0.2s",
                  }}
                >
                  {isAr ? pt.labelAr : pt.label}
                </button>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: 20,
              }}
            >
              <button
                className="btn-primary"
                onClick={() => setStep(2)}
                disabled={!projectType}
                data-hover
                style={{ opacity: projectType ? 1 : 0.4 }}
              >
                {t("Next →", "التالي ←")}
              </button>
            </div>
          </div>
        )}

        {/* Step 2 — Services */}
        {step === 2 && (
          <div>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--text3)",
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                marginBottom: 12,
              }}
            >
              {t("Select services", "اختر الخدمات")}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                maxHeight: 320,
                overflowY: "auto",
                paddingRight: 4,
              }}
            >
              {availableServices.map(s => {
                const avg = Math.round((s.min + s.max) / 2);
                const avgU = Math.round(avg / USD_RATE);
                const isOn = !!selected[s.id];
                return (
                  <div
                    key={s.id}
                    data-hover
                    onClick={() => toggle(s.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: isOn ? "var(--accentbg)" : "var(--bg3)",
                      border: `1.5px solid ${isOn ? "var(--accent)" : "var(--border)"}`,
                      borderRadius: 10,
                      padding: "12px 14px",
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      <span style={{ fontSize: "18px" }}>{s.icon}</span>
                      <div>
                        <div
                          style={{
                            fontSize: "13px",
                            fontWeight: 700,
                            color: isOn ? "var(--accent)" : "var(--text)",
                          }}
                        >
                          {isAr ? s.labelAr : s.label}
                        </div>
                        <div
                          style={{ fontSize: "11px", color: "var(--text3)" }}
                        >
                          {fmt(s.min)}–{fmt(s.max)} EGP
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 800,
                          color: "var(--accent)",
                        }}
                      >
                        ~{fmt(avg)} EGP
                      </div>
                      <div style={{ fontSize: "11px", color: "var(--text3)" }}>
                        ~${fmt(avgU)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Running total */}
            {selectedServices.length > 0 && (
              <div
                style={{
                  marginTop: 16,
                  background: "var(--accentbg)",
                  border: "1px solid var(--accentbg2)",
                  borderRadius: 10,
                  padding: "12px 16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--accent)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                    }}
                  >
                    {t("Running Total", "الإجمالي")}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "var(--text2)",
                      marginTop: 2,
                    }}
                  >
                    {selectedServices.length}{" "}
                    {t("services selected", "خدمات مختارة")}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 900,
                      color: "var(--accent)",
                    }}
                  >
                    {fmt(totalMin)}–{fmt(totalMax)} EGP
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--text3)" }}>
                    ~${fmt(Math.round(totalMin / USD_RATE))}–$
                    {fmt(Math.round(totalMax / USD_RATE))} USD
                  </div>
                </div>
              </div>
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <button
                className="btn-outline"
                onClick={() => setStep(1)}
                data-hover
                style={{ fontSize: "14px", padding: "10px 20px" }}
              >
                ← {t("Back", "رجوع")}
              </button>
              <button
                className="btn-primary"
                onClick={() => setStep(3)}
                disabled={selectedServices.length === 0}
                data-hover
                style={{ opacity: selectedServices.length > 0 ? 1 : 0.4 }}
              >
                {t("Next →", "التالي ←")}
              </button>
            </div>
          </div>
        )}

        {/* Step 3 — Summary */}
        {step === 3 && (
          <div>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--text3)",
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                marginBottom: 12,
              }}
            >
              {t("Your project summary", "ملخص مشروعك")}
            </p>

            {/* Cost card */}
            <div
              style={{
                background: "var(--accentbg)",
                border: "1px solid var(--accentbg2)",
                borderRadius: 12,
                padding: "16px 20px",
                marginBottom: 16,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "var(--accent)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  marginBottom: 8,
                }}
              >
                {t("Estimated Cost", "التكلفة التقديرية")}
              </div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 900,
                  color: "var(--accent)",
                }}
              >
                {fmt(totalMin)} – {fmt(totalMax)} EGP
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--text3)",
                  marginTop: 4,
                }}
              >
                ${fmt(Math.round(totalMin / USD_RATE))} – $
                {fmt(Math.round(totalMax / USD_RATE))} USD · avg ~{fmt(avgEGP)}{" "}
                EGP / ~${fmt(avgUSD)}
              </div>
            </div>

            {/* Services list */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                marginBottom: 16,
              }}
            >
              {selectedServices.map(s => (
                <span
                  key={s.id}
                  style={{
                    background: "var(--bg3)",
                    border: "1px solid var(--border)",
                    borderRadius: 999,
                    padding: "4px 12px",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "var(--text2)",
                  }}
                >
                  {s.icon} {isAr ? s.labelAr : s.label}
                </span>
              ))}
            </div>

            {/* Extra info */}
            <div className="form-group" style={{ marginBottom: 16 }}>
              <label className="form-label">
                {t("Additional info (optional)", "معلومات إضافية (اختياري)")}
              </label>
              <textarea
                className="form-textarea"
                style={{ height: 90 }}
                placeholder={t(
                  "Describe your project in more detail…",
                  "صف مشروعك بمزيد من التفاصيل…"
                )}
                value={extraInfo}
                onChange={e => setExtraInfo(e.target.value)}
              />
            </div>

            {/* Generated prompt preview */}
            <div
              style={{
                background: "var(--bg3)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "12px 14px",
                marginBottom: 20,
                fontFamily: "monospace",
                fontSize: "12px",
                color: "var(--text2)",
                whiteSpace: "pre-wrap",
                maxHeight: 160,
                overflowY: "auto",
              }}
            >
              {prompt}
            </div>

            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <button
                className="btn-outline"
                onClick={() => setStep(2)}
                data-hover
                style={{ fontSize: "14px", padding: "10px 20px" }}
              >
                ← {t("Back", "رجوع")}
              </button>
              <div style={{ display: "flex", gap: 10 }}>
                <button
                  className="btn-outline"
                  onClick={handleCopy}
                  data-hover
                  style={{
                    fontSize: "14px",
                    padding: "10px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? t("Copied!", "تم النسخ!") : t("Copy Prompt", "نسخ")}
                </button>
                <button
                  className="btn-primary"
                  onClick={handleAttach}
                  data-hover
                  style={{
                    fontSize: "14px",
                    padding: "10px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Mail size={14} />
                  {t("Attach to Message", "إرفاق بالرسالة")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main ContactSection ─────────────────────────────────────────────────────
export default function ContactSection({ setActive }) {
  const { t, isAr } = useLang();
  const formRef = useRef();
  const [status, setStatus] = useState(null);
  const [charCount, setCharCount] = useState(0);
  const [showBuilder, setShowBuilder] = useState(false);
  const [messageValue, setMessageValue] = useState("");
  const [estimate, setEstimate] = useState(null); // { prompt, totalMin, totalMax, count }
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState(false);
  const recaptchaRef = useRef();

  const handleSubmit = async e => {
    e.preventDefault();

    // Honeypot check — bots fill every field including hidden ones; humans never see this field
    const honeypot = formRef.current.elements["website_url"]?.value;
    if (honeypot) {
      // Silently pretend success so bots don't know they were caught
      setStatus("success");
      formRef.current.reset();
      setMessageValue("");
      setEstimate(null);
      setCharCount(0);
      return;
    }

    // reCAPTCHA check — must be solved before sending
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);

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
      setMessageValue("");
      setEstimate(null);
      setCharCount(0);
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    }
  };

  const handleAttach = data => {
    setEstimate(data);
  };

  const removeEstimate = () => setEstimate(null);

  return (
    <>
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

        {/* Build For Me banner */}
        <div
          style={{
            background: "var(--accentbg)",
            border: "1px solid var(--accentbg2)",
            borderRadius: 14,
            padding: "16px 20px",
            marginBottom: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Hammer size={22} color="var(--accent)" strokeWidth={2} />
            <div>
              <div style={{ fontWeight: 800, fontSize: "15px" }}>
                {t("Build For Me", "ابنِ لي مشروعاً")}
              </div>
              <div style={{ fontSize: "13px", color: "var(--text2)" }}>
                {t(
                  "Pick services, get a cost estimate, attach to your message.",
                  "اختر الخدمات، احصل على تقدير التكلفة، وأرفقه برسالتك."
                )}
              </div>
            </div>
          </div>
          <button
            className="btn-primary"
            onClick={() => setShowBuilder(true)}
            data-hover
            style={{ whiteSpace: "nowrap" }}
          >
            {t("Start Builder →", "ابدأ ←")}
          </button>
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
            {/* Honeypot — invisible to humans, bots tend to fill every field */}
            <input
              type="text"
              name="website_url"
              tabIndex={-1}
              autoComplete="off"
              style={{
                position: "absolute",
                opacity: 0,
                height: 0,
                width: 0,
                pointerEvents: "none",
                zIndex: -1,
              }}
              aria-hidden="true"
            />
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

              {estimate && (
                <div
                  style={{
                    background: "var(--accentbg)",
                    border: "1px solid var(--accentbg2)",
                    borderRadius: 10,
                    padding: "12px 14px",
                    marginBottom: 8,
                    position: "relative",
                  }}
                >
                  <button
                    type="button"
                    onClick={removeEstimate}
                    data-hover
                    aria-label={t("Remove estimate", "إزالة التقدير")}
                    style={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "var(--bg3)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text2)",
                      padding: 0,
                    }}
                  >
                    <X size={12} />
                  </button>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 4,
                    }}
                  >
                    <Hammer size={14} color="var(--accent)" />
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 800,
                        color: "var(--accent)",
                      }}
                    >
                      {t("Project Estimate Attached", "تقدير المشروع مُرفق")}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "var(--text)",
                      fontWeight: 700,
                    }}
                  >
                    {fmt(estimate.totalMin)}–{fmt(estimate.totalMax)} EGP
                    <span style={{ color: "var(--text3)", fontWeight: 500 }}>
                      {" "}
                      · {estimate.count} {t("services", "خدمات")}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--text3)",
                      marginTop: 2,
                    }}
                  >
                    {t(
                      "This will be sent along with your message and can't be edited.",
                      "سيتم إرسال هذا مع رسالتك ولا يمكن تعديله."
                    )}
                  </div>
                </div>
              )}

              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder={t("Your message…", "رسالتك…")}
                maxLength={1000}
                required
                value={messageValue}
                onChange={e => {
                  setMessageValue(e.target.value);
                  setCharCount(e.target.value.length);
                }}
              />
              <div className="form-count">{charCount}/1000</div>

              {/* Hidden field — sent to EmailJS alongside the message, not editable by the user */}
              <input
                type="hidden"
                name="project_estimate"
                value={estimate ? estimate.prompt : ""}
              />
            </div>

            {/* reCAPTCHA — must be solved before sending */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={token => {
                  setCaptchaToken(token);
                  setCaptchaError(false);
                }}
                onExpired={() => setCaptchaToken(null)}
                theme="dark"
              />
              {captchaError && (
                <span
                  style={{
                    fontSize: "12px",
                    color: "#ef4444",
                    fontWeight: 600,
                  }}
                >
                  {t(
                    "Please verify you're not a robot.",
                    "يرجى تأكيد أنك لست روبوتاً."
                  )}
                </span>
              )}
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

      {showBuilder && (
        <BuildModal
          onClose={() => setShowBuilder(false)}
          onAttach={handleAttach}
        />
      )}
    </>
  );
}
