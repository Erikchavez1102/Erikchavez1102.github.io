type AboutProps = {
  language: "en" | "es";
};

const About = ({ language }: AboutProps) => {
  const content = {
    en: {
      title: "About Me",
      paragraphs: [
        "I am a Software Engineer with a strong background in industrial operations, specializing in drilling tools, reliability, and quality-driven maintenance within the Oil & Gas industry.",
        "Over the years, I have worked in critical operational environments where technical precision, maintenance quality, and decision-making directly impact performance and reliability.",
        "Today, I am focused on combining software, data analysis, and applied AI to build practical solutions that improve maintenance strategies, industrial visibility, and operational decision-making.",
      ],
    },
    es: {
      title: "Sobre mí",
      paragraphs: [
        "Soy Ingeniero de Software con una sólida trayectoria en operaciones industriales, especializado en herramientas de perforación, confiabilidad y mantenimiento orientado a la calidad dentro de la industria Oil & Gas.",
        "A lo largo de los años he trabajado en entornos operacionales críticos donde la precisión técnica, la calidad del mantenimiento y la toma de decisiones impactan directamente el desempeño y la confiabilidad.",
        "Hoy estoy enfocado en combinar software, análisis de datos e IA aplicada para construir soluciones prácticas que mejoren las estrategias de mantenimiento, la visibilidad industrial y la toma de decisiones operacionales.",
      ],
    },
  };

  const t = content[language];

  return (
    <section id="about" className="section-shell text-center">
      <div className="container-sm">
        <h2 className="section-title">{t.title}</h2>

        <p className="card-text" style={{ lineHeight: "1.8" }}>
          {t.paragraphs[0]}
        </p>

        <p className="card-text" style={{ lineHeight: "1.8", marginTop: "16px" }}>
          {t.paragraphs[1]}
        </p>

        <p className="card-text" style={{ lineHeight: "1.8", marginTop: "16px" }}>
          {t.paragraphs[2]}
        </p>
      </div>
    </section>
  );
};

export default About;