import { useLang } from "../contexts/LangContext";
import {
  Zap,
  MessageCircle,
  Gem,
  Languages,
  ArrowRight,
  Sparkles,
  PenTool,
  Code2,
  Rocket,
  Search,
} from "lucide-react";

const MARQUEE = [
  ["Web Apps", "تطبيقات الويب"],
  ["Landing Pages", "صفحات الهبوط"],
  ["E-Commerce", "متاجر إلكترونية"],
  ["Dashboards", "لوحات التحكم"],
  ["Browser Extensions", "إضافات المتصفح"],
  ["UI / UX", "تصميم الواجهات"],
  ["Arabic & English Sites", "مواقع عربي وإنجليزي"],
  ["Business Websites", "مواقع الشركات"],
];

export function ServiceMarquee() {
  const { isAr } = useLang();
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map(([en, ar], i) => (
          <span key={i} className="marquee-item">
            <Sparkles size={14} strokeWidth={2} />
            {isAr ? ar : en}
          </span>
        ))}
      </div>
    </div>
  );
}

const PERKS = [
  {
    Icon: Gem,
    en: ["Premium look, every pixel", "Sites that make your brand look like the best in its field."],
    ar: ["مظهر فاخر بكل التفاصيل", "مواقع تجعل علامتك التجارية تبدو الأفضل في مجالها."],
  },
  {
    Icon: Zap,
    en: ["Fast delivery", "I work independently — no agency overhead, no waiting in a queue."],
    ar: ["تسليم سريع", "أعمل بشكل مستقل — بدون تكاليف وكالات وبدون انتظار."],
  },
  {
    Icon: MessageCircle,
    en: ["You talk to the builder", "Direct communication from the first message to launch day."],
    ar: ["تتكلم مع المطور مباشرة", "تواصل مباشر من أول رسالة حتى يوم الإطلاق."],
  },
  {
    Icon: Languages,
    en: ["Arabic & English", "Full right-to-left support — ready for local and global customers."],
    ar: ["عربي وإنجليزي", "دعم كامل للاتجاهين — جاهز لعملائك محلياً وعالمياً."],
  },
];

export function PerksGrid() {
  const { isAr } = useLang();
  return (
    <div className="perks-wrap">
      <div className="eyebrow reveal">{isAr ? "لماذا يختارني العملاء" : "Why clients choose me"}</div>
      <h2 className="display-heading reveal">
        {isAr ? (
          <>
            موقعك يستحق أن <em>يُبهر</em>
          </>
        ) : (
          <>
            Your website should <em>impress</em>, not just exist.
          </>
        )}
      </h2>
      <div className="perks-grid">
        {PERKS.map(({ Icon, en, ar }, i) => {
          const [title, desc] = isAr ? ar : en;
          return (
            <div key={i} className={`perk-card glass-card reveal reveal-delay-${(i % 4) + 1}`} data-hover>
              <div className="perk-icon">
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <div className="perk-title">{title}</div>
              <p className="perk-desc">{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const STEPS = [
  { Icon: Search, en: ["Discover", "Tell me your idea. I ask the right questions and shape a clear plan."], ar: ["الفهم", "أخبرني بفكرتك، وأحوّلها لخطة واضحة."] },
  { Icon: PenTool, en: ["Design", "A polished look that fits your brand — you approve before I build."], ar: ["التصميم", "شكل أنيق يناسب علامتك — توافق عليه قبل البناء."] },
  { Icon: Code2, en: ["Build", "Clean, fast code with regular previews so you always see progress."], ar: ["البناء", "كود نظيف وسريع مع معاينات مستمرة لتتابع التقدم."] },
  { Icon: Rocket, en: ["Launch", "Your site goes live — and I stay around for tweaks and support."], ar: ["الإطلاق", "موقعك يصبح متاحاً — وأبقى معك للتعديلات والدعم."] },
];

export function ProcessSteps() {
  const { isAr } = useLang();
  return (
    <div className="process-wrap">
      <div className="eyebrow reveal">{isAr ? "كيف نعمل معاً" : "How we work together"}</div>
      <h2 className="display-heading reveal">
        {isAr ? (
          <>
            من الفكرة إلى <em>الإطلاق</em>
          </>
        ) : (
          <>
            From idea to <em>launch</em>, simply.
          </>
        )}
      </h2>
      <div className="process-grid">
        {STEPS.map(({ Icon, en, ar }, i) => {
          const [title, desc] = isAr ? ar : en;
          return (
            <div key={i} className={`process-card glass-card reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="process-num">0{i + 1}</div>
              <div className="process-icon">
                <Icon size={18} strokeWidth={1.8} />
              </div>
              <div className="perk-title">{title}</div>
              <p className="perk-desc">{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function FinalCTA({ setActive }) {
  const { isAr } = useLang();
  return (
    <div className="final-cta reveal">
      <div className="final-cta-glow" aria-hidden="true" />
      <div className="eyebrow">{isAr ? "متاح لمشاريع جديدة" : "Now booking new projects"}</div>
      <h2 className="final-cta-title">
        {isAr ? (
          <>
            لنصنع شيئاً <em>استثنائياً</em> معاً
          </>
        ) : (
          <>
            Let's build something <em>remarkable</em> together.
          </>
        )}
      </h2>
      <p className="final-cta-text">
        {isAr
          ? "أخبرني بفكرتك وسأرد عليك بخطة واضحة وتقدير للتكلفة. بدون التزام."
          : "Tell me about your idea and I'll come back with a clear plan and a cost estimate. No commitment."}
      </p>
      <div className="final-cta-actions">
        <button className="btn-primary btn-glow" onClick={() => setActive("contact")} data-hover>
          {isAr ? "ابدأ مشروعك" : "Start your project"}
          <ArrowRight size={16} className="flip-rtl" />
        </button>
        <button className="btn-outline" onClick={() => setActive("business")} data-hover>
          {isAr ? "شاهد خدماتي" : "See what I offer"}
        </button>
      </div>
    </div>
  );
}
