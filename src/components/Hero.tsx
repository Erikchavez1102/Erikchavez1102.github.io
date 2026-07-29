import fotoErik from "../assets/foto-erik.png";
import {
  ArrowDownToLine,
  Briefcase,
  CircleCheck,
} from "lucide-react";

type HeroProps = {
  language: "en" | "es";
};

const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      badge: "Available for Opportunities",
      title: "Building Intelligent Solutions",
      subtitle: "for Industrial Operations",
      role: "Software Engineer • Applied AI • Data Solutions",
      text: "I connect industrial operations, software engineering, and artificial intelligence to create practical solutions that improve reliability, operational efficiency, and data-driven decision-making.",
      projects: "View Projects",
      cv: "Download CV",
      stats: [
        { title: "12+", text: "Years" },
        { title: "Software", text: "Engineer" },
        { title: "Applied", text: "AI" },
        { title: "Oil &", text: "Gas" },
      ],
    },
    es: {
      badge: "Disponible para nuevas oportunidades",
      title: "Construyendo Soluciones Inteligentes",
      subtitle: "para Operaciones Industriales",
      role: "Ingeniero de Software • IA Aplicada • Soluciones de Datos",
      text: "Conecto operaciones industriales, ingeniería de software e inteligencia artificial para crear soluciones prácticas que mejoran la confiabilidad, la eficiencia operativa y la toma de decisiones basada en datos.",
      projects: "Ver Proyectos",
      cv: "Descargar CV",
      stats: [
        { title: "12+", text: "Años" },
        { title: "Ingeniero", text: "Software" },
        { title: "IA", text: "Aplicada" },
        { title: "Oil &", text: "Gas" },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="hero">
      <div className="container-lg">

        <div className="hero-badge">
          <CircleCheck size={18}/>
          {t.badge}
        </div>

        <div className="hero-layout">

          <div className="hero-left">

            <h1 className="hero-title">
              {t.title}
              <br />
              <span>{t.subtitle}</span>
            </h1>

            <h2 className="hero-name">
              Erik Chávez
            </h2>

            <h3 className="hero-role">
              {t.role}
            </h3>

            <p className="hero-text">
              {t.text}
            </p>

            <div className="btn-row">

              <a href="#projects" className="btn btn-primary">
                <Briefcase size={18}/>
                {t.projects}
              </a>

              <a
                href="/cv-erik.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-surface"
              >
                <ArrowDownToLine size={18}/>
                {t.cv}
              </a>

            </div>

          </div>

          <div className="hero-right">

            <img
              src={fotoErik}
              alt="Erik Chávez"
              className="hero-image"
            />

          </div>

        </div>

        <div className="hero-stats">

          {t.stats.map((item, index) => (

            <div className="hero-stat" key={index}>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Hero;