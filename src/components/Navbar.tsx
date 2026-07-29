import { useState } from "react";

type NavbarProps = {
  language: "en" | "es";
  setLanguage: (language: "en" | "es") => void;
};

const Navbar = ({ language, setLanguage }: NavbarProps) => {
  const [hovered, setHovered] = useState<string | null>(null);

  const labels = {
    en: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    es: {
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
  };

  const t = labels[language];

  const linkStyle = (name: string) => ({
    color: hovered === name ? "#ffffff" : "#cbd5e0",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 500,
    transition: "all 0.25s ease",
    transform: hovered === name ? "translateY(-1px)" : "translateY(0)",
    cursor: "pointer",
  });

  const languageButton = (lang: "en" | "es") => ({
    padding: "6px 10px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.08)",
    backgroundColor:
      language === lang ? "#6366f1" : "rgba(30, 41, 59, 0.88)",
    color: "white",
    cursor: "pointer",
    fontWeight: 600,
    transition: "all 0.25s ease",
  });

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "rgba(5, 8, 22, 0.88)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "18px 32px",
      }}
    >
      <div
        className="container-lg"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "22px",
            fontWeight: 700,
            letterSpacing: "0.2px",
          }}
        >
          Erik Chávez
        </div>

        <div className="nav-links">
          <a
            href="#about"
            style={linkStyle("about")}
            onMouseEnter={() => setHovered("about")}
            onMouseLeave={() => setHovered(null)}
          >
            {t.about}
          </a>

          <a
            href="#skills"
            style={linkStyle("skills")}
            onMouseEnter={() => setHovered("skills")}
            onMouseLeave={() => setHovered(null)}
          >
            {t.skills}
          </a>

          <a
            href="#projects"
            style={linkStyle("projects")}
            onMouseEnter={() => setHovered("projects")}
            onMouseLeave={() => setHovered(null)}
          >
            {t.projects}
          </a>

          <a
            href="#contact"
            style={linkStyle("contact")}
            onMouseEnter={() => setHovered("contact")}
            onMouseLeave={() => setHovered(null)}
          >
            {t.contact}
          </a>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginLeft: "24px",
            }}
          >
            <button
              onClick={() => setLanguage("en")}
              style={languageButton("en")}
            >
              EN
            </button>

            <button
              onClick={() => setLanguage("es")}
              style={languageButton("es")}
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;