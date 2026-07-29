type ContactProps = {
  language: "en" | "es";
};

const Contact = ({ language }: ContactProps) => {
  const content = {
    en: {
      title: "Contact",
      subtitle:
        "I am open to opportunities in software engineering, applied AI, and data-driven industrial solutions where operational experience and analytical thinking can create measurable impact.",
      email: "Email Me",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Download CV",
    },
    es: {
      title: "Contacto",
      subtitle:
        "Estoy abierto a oportunidades en ingeniería de software, IA aplicada y soluciones industriales basadas en datos, donde la experiencia operacional y el pensamiento analítico puedan generar un impacto medible.",
      email: "Escríbeme",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Descargar CV",
    },
  };

  const t = content[language];

  return (
    <section id="contact" className="section-shell section-dark text-center">
      <div className="container-sm">
        <h2 className="section-title">{t.title}</h2>

        <p className="section-subtitle">{t.subtitle}</p>

        <div className="btn-row">
          <a href="mailto:giovanny1102@gmail.com" className="btn btn-primary">
            {t.email}
          </a>

          <a
            href="https://www.linkedin.com/in/erikchavez1102"
            target="_blank"
            rel="noreferrer"
            className="btn btn-surface"
          >
            {t.linkedin}
          </a>

          <a
            href="https://github.com/Erikchavez1102"
            target="_blank"
            rel="noreferrer"
            className="btn btn-surface"
          >
            {t.github}
          </a>

          <a
            href="/cv-erik.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-surface"
          >
            {t.cv}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;