type SkillsProps = {
  language: "en" | "es";
};

const Skills = ({ language }: SkillsProps) => {
  const content = {
    en: {
      title: "Skills",
      subtitle:
        "A combination of software development, data-driven thinking, and industrial expertise applied to real-world operations.",
      cards: [
        {
          title: "Software Development",
          text: "JavaScript, React, HTML, CSS, Git, GitHub, VS Code, and web application structure.",
        },
        {
          title: "Data & Applied AI",
          text: "Data analysis, dashboards, failure pattern identification, predictive thinking, and applied AI for industry.",
        },
        {
          title: "Industrial Expertise",
          text: "LWD, MWD, RSS, maintenance, reliability, QA/QC, operational analysis, and technical problem-solving.",
        },
      ],
    },
    es: {
      title: "Habilidades",
      subtitle:
        "Una combinación de desarrollo de software, pensamiento basado en datos y experiencia industrial aplicada a operaciones reales.",
      cards: [
        {
          title: "Desarrollo de Software",
          text: "JavaScript, React, HTML, CSS, Git, GitHub, VS Code y estructura de aplicaciones web.",
        },
        {
          title: "Datos e IA Aplicada",
          text: "Análisis de datos, dashboards, identificación de patrones de falla, pensamiento predictivo e IA aplicada a la industria.",
        },
        {
          title: "Experiencia Industrial",
          text: "LWD, MWD, RSS, mantenimiento, confiabilidad, QA/QC, análisis operacional y resolución de problemas técnicos.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="skills" className="section-shell section-dark text-center">
      <div className="container-md">
        <h2 className="section-title">{t.title}</h2>

        <p className="section-subtitle">{t.subtitle}</p>

        <div className="card-grid">
          {t.cards.map((card) => (
            <div key={card.title} className="card card-fixed">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;