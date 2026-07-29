type ProjectsProps = {
  language: "en" | "es";
};

const Projects = ({ language }: ProjectsProps) => {
  const content = {
    en: {
      title: "Projects",
      subtitle:
        "Selected portfolio concepts focused on industrial data, maintenance insights, and software-driven decision support for real-world operations.",
      cards: [
        {
          title: "Health Analyzer Dashboard",
          tags: ["Dashboard", "Data Analysis", "Reliability"],
          text:
            "Interactive dashboard concept designed to visualize drilling tool performance, monitor operational data, and identify failure patterns.",
        },
        {
          title: "Failure Analysis Tool",
          tags: ["Failure Trends", "Maintenance", "Decision Support"],
          text:
            "Data-driven concept focused on identifying equipment failure trends and supporting maintenance decision-making.",
        },
        {
          title: "Maintenance Insights",
          tags: ["Predictive Thinking", "Optimization", "Industrial Data"],
          text:
            "Conceptual solution aimed at optimizing maintenance strategies through historical data analysis and predictive thinking.",
        },
      ],
    },
    es: {
      title: "Proyectos",
      subtitle:
        "Conceptos de portafolio enfocados en datos industriales, análisis de mantenimiento y soporte a decisiones impulsado por software para operaciones reales.",
      cards: [
        {
          title: "Dashboard Health Analyzer",
          tags: ["Dashboard", "Análisis de Datos", "Confiabilidad"],
          text:
            "Concepto de dashboard interactivo diseñado para visualizar el desempeño de herramientas de perforación, monitorear datos operacionales e identificar patrones de falla.",
        },
        {
          title: "Herramienta de Análisis de Fallas",
          tags: ["Tendencias de Falla", "Mantenimiento", "Soporte a Decisiones"],
          text:
            "Concepto basado en datos enfocado en identificar tendencias de fallas en equipos y apoyar la toma de decisiones de mantenimiento.",
        },
        {
          title: "Maintenance Insights",
          tags: ["Pensamiento Predictivo", "Optimización", "Datos Industriales"],
          text:
            "Solución conceptual orientada a optimizar estrategias de mantenimiento mediante análisis de datos históricos y pensamiento predictivo.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="projects" className="section-shell section-dark text-center">
      <div className="container-md">
        <h2 className="section-title">{t.title}</h2>

        <p className="section-subtitle">{t.subtitle}</p>

        <div className="card-grid">
          {t.cards.map((card) => (
            <div key={card.title} className="card card-fixed">
              <h3 className="card-title">{card.title}</h3>

              <div className="chip-row">
                <span className="chip chip-primary">{card.tags[0]}</span>
                <span className="chip chip-neutral">{card.tags[1]}</span>
                <span className="chip chip-neutral">{card.tags[2]}</span>
              </div>

              <p className="card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;