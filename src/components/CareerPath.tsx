type CareerPathProps = {
  language: "en" | "es";
};

const CareerPath = ({ language }: CareerPathProps) => {
  const content = {
    en: {
      title: "Career Path",
      subtitle:
        "A career path shaped by field operations, maintenance, reliability, and a strategic transition into software, data, and applied AI.",
      items: [
        {
          title: "Schlumberger / SLB",
          role: "RSS / MWD / LWD Maintenance • Reliability • QA/QC",
          text:
            "Built expertise in drilling tool maintenance, functional testing, technical documentation, and operational reliability in critical Oil & Gas environments.",
        },
        {
          title: "Weatherford",
          role: "Technical Leadership • LWD / RSS Labs • Process Improvement",
          text:
            "Expanded leadership in maintenance operations, lab implementation, troubleshooting, and quality-driven execution for high-value drilling tools.",
        },
        {
          title: "Software Engineering Transition",
          role: "Software • Data Analysis • Applied AI Direction",
          text:
            "Translating operational expertise into digital solutions through software, data analysis, dashboards, and applied AI.",
        },
      ],
    },
    es: {
      title: "Trayectoria Profesional",
      subtitle:
        "Una trayectoria construida a partir de operaciones en campo, mantenimiento, confiabilidad y una transición estratégica hacia software, datos e IA aplicada.",
      items: [
        {
          title: "Schlumberger / SLB",
          role: "Mantenimiento RSS / MWD / LWD • Confiabilidad • QA/QC",
          text:
            "Desarrollé experiencia en mantenimiento de herramientas de perforación, pruebas funcionales, documentación técnica y confiabilidad operacional en entornos críticos de Oil & Gas.",
        },
        {
          title: "Weatherford",
          role: "Liderazgo Técnico • Laboratorios LWD / RSS • Mejora de Procesos",
          text:
            "Fortalecí el liderazgo en operaciones de mantenimiento, implementación de laboratorios, troubleshooting y ejecución técnica orientada a la calidad en herramientas de alto valor.",
        },
        {
          title: "Transición a Ingeniería de Software",
          role: "Software • Análisis de Datos • Dirección hacia IA Aplicada",
          text:
            "Transformando la experiencia operacional en soluciones digitales a través de software, análisis de datos, dashboards e IA aplicada.",
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {t.items.map((item) => (
            <div key={item.title} className="card" style={{ textAlign: "left" }}>
              <h3 style={{ margin: "0 0 10px 0", fontSize: "24px" }}>
                {item.title}
              </h3>
              <p
                style={{
                  color: "#a5b4fc",
                  margin: "0 0 10px 0",
                  fontWeight: 600,
                }}
              >
                {item.role}
              </p>
              <p className="card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPath;