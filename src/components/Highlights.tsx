type HighlightsProps = {
  language: "en" | "es";
};

const Highlights = ({ language }: HighlightsProps) => {
  const content = {
    en: {
      title: "What I Bring",
      subtitle:
        "A hybrid profile that combines industrial operations, software thinking, and data-driven decision-making.",
      cards: [
        {
          title: "Operational Expertise",
          text: "Deep understanding of drilling tools, field reliability, QA/QC, and maintenance workflows in Oil & Gas.",
        },
        {
          title: "Software Mindset",
          text: "Ability to structure ideas, build digital solutions, and connect technical problems with software-based approaches.",
        },
        {
          title: "Data-Driven Thinking",
          text: "Focused on identifying patterns, improving decisions, and turning operational data into actionable insights.",
        },
        {
          title: "AI for Industry",
          text: "Focused on applying analytics, automation, and AI to industrial processes and decision-making.",
        },
      ],
    },
    es: {
      title: "Lo que aporto",
      subtitle:
        "Un perfil híbrido que combina operaciones industriales, mentalidad de software y toma de decisiones basada en datos.",
      cards: [
        {
          title: "Experiencia Operacional",
          text: "Sólido entendimiento de herramientas de perforación, confiabilidad en campo, QA/QC y flujos de mantenimiento en Oil & Gas.",
        },
        {
          title: "Mentalidad de Software",
          text: "Capacidad para estructurar ideas, construir soluciones digitales y conectar problemas técnicos con enfoques basados en software.",
        },
        {
          title: "Pensamiento Basado en Datos",
          text: "Enfoque en identificar patrones, mejorar decisiones y convertir datos operacionales en información accionable.",
        },
        {
          title: "IA para la Industria",
          text: "Enfocado en aplicar analítica, automatización e IA a procesos industriales y toma de decisiones.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="section-shell section-dark text-center">
      <div className="container-md">
        <h2 className="section-title">{t.title}</h2>

        <p className="section-subtitle">{t.subtitle}</p>

        <div className="card-grid">
          {t.cards.map((card) => (
            <div key={card.title} className="card card-stat">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;