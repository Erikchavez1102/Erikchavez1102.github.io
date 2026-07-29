type ExperienceProps = {
  language: "en" | "es";
};

const Experience = ({ language }: ExperienceProps) => {
  const content = {
    en: {
      title: "Experience Snapshot",
      subtitle:
        "A hybrid profile built across industrial operations, reliability, software engineering, and applied AI.",
      cards: [
        {
          title: "12+",
          text: "Years in Oil & Gas operations",
        },
        {
          title: "LWD • MWD • RSS",
          text: "Maintenance, reliability, QA/QC expertise",
        },
        {
          title: "Software + Data",
          text: "Building solutions with analysis and automation",
        },
        {
          title: "Applied AI",
          text: "Applied AI for industrial decision-making",
        },
      ],
    },
    es: {
      title: "Resumen de experiencia",
      subtitle:
        "Un perfil híbrido construido entre operaciones industriales, confiabilidad, ingeniería de software e IA aplicada.",
      cards: [
        {
          title: "12+",
          text: "Años en operaciones de Oil & Gas",
        },
        {
          title: "LWD • MWD • RSS",
          text: "Experiencia en mantenimiento, confiabilidad y QA/QC",
        },
        {
          title: "Software + Datos",
          text: "Construyendo soluciones con análisis y automatización",
        },
        {
          title: "IA Aplicada",
          text: "IA aplicada para la toma de decisiones industriales",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="section-shell section-deep text-center">
      <div className="container-md">
        <h2 className="section-title">{t.title}</h2>

        <p className="section-subtitle">{t.subtitle}</p>

        <div className="card-grid">
          {t.cards.map((card) => (
            <div key={card.title} className="card card-stat">
              <h3
                style={{
                  fontSize: card.title === "LWD • MWD • RSS" ? "28px" : "34px",
                  margin: "0 0 10px 0",
                }}
              >
                {card.title}
              </h3>
              <p className="card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;