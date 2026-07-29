import logoErik from "../assets/logo-erik.png";

type FooterProps = {
  language: "en" | "es";
};

const Footer = ({ language }: FooterProps) => {
  const content = {
    en: {
      line: "Erik Chávez — Software Engineer | Applied AI | Data Solutions",
      subline:
        "Building the bridge between industrial expertise, software, and data-driven decision-making.",
    },
    es: {
      line: "Erik Chávez — Ingeniero de Software | IA Aplicada | Soluciones de Datos",
      subline:
        "Construyendo el puente entre la experiencia industrial, el software y la toma de decisiones basada en datos.",
    },
  };

  const t = content[language];

  return (
    <footer
      style={{
        backgroundColor: "#050816",
        color: "white",
        padding: "50px 20px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        textAlign: "center",
      }}
    >
      <div className="container-md">
        <img
          src={logoErik}
          alt="Logo Erik Chávez"
          style={{
            width: "320px",
            maxWidth: "100%",
            height: "auto",
            objectFit: "contain",
            margin: "0 auto 28px auto",
            filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.25))",
          }}
        />

        <p
          style={{
            color: "#cbd5e0",
            fontSize: "16px",
            margin: "0 0 10px 0",
          }}
        >
          {t.line}
        </p>

        <p
          style={{
            color: "#8b9bb8",
            fontSize: "14px",
            margin: 0,
          }}
        >
          {t.subline}
        </p>
      </div>
    </footer>
  );
};

export default Footer;