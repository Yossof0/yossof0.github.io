import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Youtube,
  Mail,
  Phone,
  Globe,
  Sun,
  Moon,
  Facebook,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * Design Philosophy: Tech Forward Minimalism
 * - Clean geometric patterns with electric blue accents
 * - Smooth animations and transitions
 * - Asymmetric layout with floating elements
 * - Professional yet modern aesthetic
 * - Full Arabic and English language support
 * - Complete Light/Dark mode support
 */

interface Project {
  id: string;
  titleKey: string;
  descKey: string;
  tagsKey: string;
  link: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    titleKey: "project.customGrab.title",
    descKey: "project.customGrab.desc",
    tagsKey: "project.customGrab.tags",
    link: "https://github.com/Yossof0/CustomGrab",
    featured: true,
  },
  {
    id: "2",
    titleKey: "project.narcissus.title",
    descKey: "project.narcissus.desc",
    tagsKey: "project.narcissus.tags",
    link: "https://yossof0.github.io/Narcissus",
    featured: true,
  },
  {
    id: "3",
    titleKey: "project.rubiks.title",
    descKey: "project.rubiks.desc",
    tagsKey: "project.rubiks.tags",
    link: "https://yossof0.github.io/Rubiks",
    featured: true,
  },
  {
    id: "4",
    titleKey: "project.ticxo.title",
    descKey: "project.ticxo.desc",
    tagsKey: "project.ticxo.tags",
    link: "https://yossof0.github.io/TicXO",
    featured: true,
  },
  {
    id: "5",
    titleKey: "project.wordComb.title",
    descKey: "project.wordComb.desc",
    tagsKey: "project.wordComb.tags",
    link: "https://yossof0.github.io/Combs",
    featured: false,
  },
  {
    id: "6",
    titleKey: "project.mathTable.title",
    descKey: "project.mathTable.desc",
    tagsKey: "project.mathTable.tags",
    link: "https://yossof0.github.io/MathTableSet",
    featured: false,
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const isArabic = language === "ar";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.style.colorScheme = "light";
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isArabic]);

  const skillCategories = [
    {
      title: t("skills.frontend"),
      items: t("skills.frontendItems").split(","),
    },
    {
      title: t("skills.design"),
      items: t("skills.designItems").split(","),
    },
    {
      title: t("skills.tools"),
      items: t("skills.toolsItems").split(","),
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 overflow-hidden ${
        theme === "dark" ? "bg-gray-950" : "bg-white"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-900/80 border-b border-gray-800"
            : "bg-white/80 border-b border-gray-100"
        } backdrop-blur-md`}
      >
        <div className="container flex items-center justify-between h-16">
          <div
            className={`text-2xl font-bold transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="text-blue-600">Y</span>ossof
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
              title={t("theme.toggle")}
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              <Globe size={18} />
              {isArabic ? "EN" : "AR"}
            </button>
            <a
              href="https://github.com/Yossof0/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                theme === "dark"
                  ? "text-gray-400 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.facebook.com/YossofABD/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                theme === "dark"
                  ? "text-gray-400 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.youtube.com/@overclock33"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                theme === "dark"
                  ? "text-gray-400 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://www.x.com/OverClock33"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                theme === "dark"
                  ? "text-gray-400 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image with overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663626115847/RNgZsSrX79kKJotYnXW9SU/hero-bg-a7iZ8cugnFNNeUi2MXQFfK.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: theme === "dark" ? 0.15 : 0.4,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div
          className={`absolute inset-0 z-1 transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gradient-to-b from-gray-950 via-gray-950/80 to-gray-950"
              : "bg-gradient-to-b from-white via-white/80 to-white"
          }`}
        />

        {/* Animated geometric shapes */}
        <div
          className={`absolute top-20 left-10 w-32 h-32 border-2 rounded-lg opacity-20 animate-pulse ${
            theme === "dark" ? "border-blue-400" : "border-blue-200"
          }`}
        />
        <div
          className={`absolute bottom-20 right-20 w-24 h-24 border-2 rounded-full opacity-15 ${
            theme === "dark" ? "border-blue-400" : "border-blue-300"
          }`}
          style={{
            animation: "float 6s ease-in-out infinite",
          }}
        />

        <div className="container relative z-10">
          <div className={`max-w-3xl ${isArabic ? "text-right" : ""}`}>
            <div className="inline-block mb-4">
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-blue-900/40 text-blue-300"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                {t("hero.badge")}
              </span>
            </div>

            <h1
              className={`text-5xl md:text-6xl font-bold mb-6 leading-tight transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {t("hero.title")
                .split(" ")
                .map((word, idx) => (
                  <span key={idx}>
                    {idx === t("hero.title").split(" ").length - 1 ? (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                        {word}
                      </span>
                    ) : (
                      word
                    )}{" "}
                  </span>
                ))}
            </h1>

            <p
              className={`text-xl mb-8 leading-relaxed max-w-2xl transition-colors duration-300 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } ${isArabic ? "text-right" : ""}`}
            >
              {t("hero.description")}
            </p>

            <div
              className={`flex flex-wrap gap-4 ${isArabic ? "justify-end" : ""}`}
            >
              <a href="#projects" className="scroll-smooth">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all hover:shadow-lg">
                  {t("hero.viewProjects")}
                </Button>
              </a>
              <a
                href="https://github.com/Yossof0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className={`px-8 py-6 text-lg rounded-lg transition-colors duration-300 ${
                    theme === "dark"
                      ? "border-gray-600 text-gray-200 hover:bg-gray-800"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Github size={20} className={isArabic ? "ml-2" : "mr-2"} />
                  {t("hero.github")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className={`py-20 relative overflow-hidden transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663626115847/RNgZsSrX79kKJotYnXW9SU/skills-pattern-apy77Si6aDswLQMMKyAswH.webp')`,
            backgroundSize: "400px",
            opacity: 0.3,
          }}
        />

        <div className="container relative z-10">
          <h2
            className={`text-4xl font-bold mb-12 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            } ${isArabic ? "text-right" : ""}`}
          >
            {t("skills.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-lg border transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 hover:border-blue-500"
                    : "bg-white border-gray-200 hover:border-blue-200"
                } hover:shadow-lg ${isArabic ? "text-right" : ""}`}
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <h3
                  className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {category.title}
                </h3>
                <div
                  className={`flex flex-wrap gap-2 ${isArabic ? "justify-end" : ""}`}
                >
                  {category.items.map(skill => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                        theme === "dark"
                          ? "bg-blue-900/40 text-blue-300"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Can Build Section */}
      <section
        className={`py-20 relative overflow-hidden transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-950" : "bg-white"
        }`}
      >
        <div className="container relative z-10">
          <h2
            className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            } ${isArabic ? "text-right" : ""}`}
          >
            {t("services.title")}
          </h2>
          <p
            className={`mb-12 text-lg transition-colors duration-300 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            } ${isArabic ? "text-right" : ""}`}
          >
            {t("services.subtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                titleKey: "services.businessWebsites",
                descKey: "services.businessWebsitesDesc",
              },
              {
                titleKey: "services.landingPages",
                descKey: "services.landingPagesDesc",
              },
              {
                titleKey: "services.ecommerce",
                descKey: "services.ecommerceDesc",
              },
              {
                titleKey: "services.dashboards",
                descKey: "services.dashboardsDesc",
              },
              {
                titleKey: "services.educational",
                descKey: "services.educationalDesc",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-lg border transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 hover:border-blue-500"
                    : "bg-white border-gray-200 hover:border-blue-300"
                } hover:shadow-lg ${isArabic ? "text-right" : ""}`}
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <h3
                  className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {t(service.titleKey)}
                </h3>
                <p
                  className={`transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t(service.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className={`py-20 relative overflow-hidden transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="container relative z-10">
          <h2
            className={`text-4xl font-bold mb-12 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            } ${isArabic ? "text-right" : ""}`}
          >
            {t("contact.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                label: t("contact.phone"),
                value: "+20 01554873048",
                href: "tel:+201554873048",
              },
              {
                icon: Mail,
                label: t("contact.email"),
                value: t("contact.emailValue"),
                href: `mailto:${t("contact.emailValue")}`,
              },
              {
                icon: Globe,
                label: t("contact.nick"),
                value: "Yossof0",
                href: "#",
              },
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <a
                  key={idx}
                  href={contact.href}
                  className={`p-6 rounded-lg border transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-700 hover:border-blue-500"
                      : "bg-white border-gray-200 hover:border-blue-200"
                  } hover:shadow-lg ${isArabic ? "text-right" : ""}`}
                  style={{
                    animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  <div
                    className={`flex items-center gap-3 mb-3 ${isArabic ? "justify-end" : ""}`}
                  >
                    <Icon size={24} className="text-blue-600" />
                    <h3
                      className={`text-lg font-semibold transition-colors duration-300 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {contact.label}
                    </h3>
                  </div>
                  <p
                    className={`font-medium transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {contact.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 relative overflow-hidden transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663626115847/RNgZsSrX79kKJotYnXW9SU/project-showcase-bg-HxEhooGEMnz397qG3ppTeQ.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />

        <div className="container relative z-10">
          <h2
            className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            } ${isArabic ? "text-right" : ""}`}
          >
            {t("projects.title")}
          </h2>
          <p
            className={`mb-12 text-lg transition-colors duration-300 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            } ${isArabic ? "text-right" : ""}`}
          >
            {t("projects.subtitle")}
          </p>

          {/* Featured Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects
              .filter(p => p.featured)
              .map((project, idx) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  style={{
                    animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  <div
                    className={`rounded-lg border p-6 h-full flex flex-col transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-gray-800 border-gray-700 hover:border-blue-500"
                        : "bg-white border-gray-200 hover:border-blue-300"
                    } hover:shadow-xl ${isArabic ? "text-right" : ""}`}
                  >
                    <h3
                      className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                        theme === "dark"
                          ? "text-white group-hover:text-blue-400"
                          : "text-gray-900 group-hover:text-blue-600"
                      }`}
                    >
                      {t(project.titleKey)}
                    </h3>
                    <p
                      className={`mb-4 flex-grow transition-colors duration-300 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {t(project.descKey)}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mb-4 ${isArabic ? "justify-end" : ""}`}
                    >
                      {t(project.tagsKey)
                        .split(",")
                        .map(tag => (
                          <span
                            key={tag}
                            className={`px-2 py-1 rounded text-xs font-medium transition-colors duration-300 ${
                              theme === "dark"
                                ? "bg-gray-700 text-gray-200"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                    <div
                      className={`flex items-center text-blue-600 group-hover:translate-x-1 transition-transform ${isArabic ? "justify-end group-hover:translate-x-0 group-hover:-translate-x-1" : ""}`}
                    >
                      {t("projects.view")}
                      <ExternalLink
                        size={16}
                        className={isArabic ? "mr-2" : "ml-2"}
                      />
                    </div>
                  </div>
                </a>
              ))}
          </div>

          {/* Other Projects */}
          <div className="mb-8">
            <h3
              className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              } ${isArabic ? "text-right" : ""}`}
            >
              {t("projects.other")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects
                .filter(p => !p.featured)
                .map(project => (
                  <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div
                      className={`rounded-lg border p-4 transition-all duration-300 ${
                        theme === "dark"
                          ? "bg-gray-800 border-gray-700 hover:border-blue-500"
                          : "bg-white border-gray-200 hover:border-blue-300"
                      } hover:shadow-lg ${isArabic ? "text-right" : ""}`}
                    >
                      <h4
                        className={`font-semibold transition-colors duration-300 mb-2 ${
                          theme === "dark"
                            ? "text-white group-hover:text-blue-400"
                            : "text-gray-900 group-hover:text-blue-600"
                        }`}
                      >
                        {t(project.titleKey)}
                      </h4>
                      <p
                        className={`text-sm mb-3 transition-colors duration-300 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {t(project.descKey)}
                      </p>
                      <div
                        className={`flex items-center text-blue-600 text-sm group-hover:translate-x-1 transition-transform ${isArabic ? "justify-end group-hover:translate-x-0 group-hover:-translate-x-1" : ""}`}
                      >
                        {t("projects.view_short")}
                        <ExternalLink
                          size={14}
                          className={isArabic ? "mr-1" : "ml-1"}
                        />
                      </div>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-lg animate-pulse" />
          <div className="absolute bottom-10 right-10 w-32 h-32 border border-white rounded-full" />
        </div>

        <div
          className={`container relative z-10 text-center ${isArabic ? "text-right" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div
            className={`flex flex-wrap justify-center gap-4 ${isArabic ? "justify-end" : ""}`}
          >
            <a
              href="https://github.com/Yossof0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-lg transition-all">
                <Github size={20} className={isArabic ? "ml-2" : "mr-2"} />
                {t("cta.github")}
              </Button>
            </a>
            <a
              href="https://www.youtube.com/@overclock33"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-lg transition-all">
                <Youtube size={20} className={isArabic ? "ml-2" : "mr-2"} />
                {t("cta.youtube")}
              </Button>
            </a>
            <a
              href="https://www.facebook.com/YossofABD/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-lg transition-all">
                <Facebook size={20} className={isArabic ? "ml-2" : "mr-2"} />
                {t("cta.facebook")}
              </Button>
            </a>
            <a
              href="https://www.x.com/OverClock33"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-lg transition-all">
                <FaXTwitter size={20} className={isArabic ? "ml-2" : "mr-2"} />
                {t("cta.x")}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-black text-gray-400"
            : "bg-gray-900 text-gray-400"
        } ${isArabic ? "text-right" : ""}`}
      >
        <div className="container">
          <div
            className={`flex flex-col md:flex-row justify-between items-center ${isArabic ? "md:flex-row-reverse" : ""}`}
          >
            <div
              className={`font-bold mb-4 md:mb-0 transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-white"
              }`}
            >
              <span className="text-blue-400">Y</span>ossof Abdelwahed
            </div>
            <div className={`flex gap-6 ${isArabic ? "flex-row-reverse" : ""}`}>
              <a
                href="https://github.com/Yossof0/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.youtube.com/@overclock33"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://www.facebook.com/YossofABD/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.x.com/OverClock33/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                X (Twitter)
              </a>
            </div>
          </div>
          <div
            className={`border-t transition-colors duration-300 ${
              theme === "dark" ? "border-gray-800" : "border-gray-800"
            } mt-8 pt-8 text-center text-sm`}
          >
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(6, 102, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(6, 102, 255, 0.6);
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
