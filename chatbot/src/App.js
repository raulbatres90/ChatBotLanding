import { useState } from "react";
import { translations } from "./translations";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("es");
  const t = translations[language];

  return (
    <div>
      {/* LANGUAGE SWITCH */}
      <div className="language-switch">
        <button
          className={language === "es" ? "active" : ""}
          onClick={() => setLanguage("es")}
        >
          ES
        </button>
        <button
          className={language === "en" ? "active" : ""}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
      </div>

      {/* HERO */}
      <section className="hero">
        <h1>{t.heroTitle}</h1>
        <p className="slogan">{t.heroSubtitle}</p>
        <button className="cta">{t.cta}</button>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>{t.featuresTitle}</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🤖 {t.feature1Title}</h3>
            <p>{t.feature1Desc}</p>
          </div>
          <div className="feature-card">
            <h3>🕒 {t.feature2Title}</h3>
            <p>{t.feature2Desc}</p>
          </div>
          <div className="feature-card">
            <h3>📈 {t.feature3Title}</h3>
            <p>{t.feature3Desc}</p>
          </div>
        </div>
      </section>

      {/* BUSINESS */}
      <section className="business">
        <h2>{t.businessTitle}</h2>
        <div className="business-grid">
          <div className="business-card">🍽️ Restaurants</div>
          <div className="business-card">🛒 Retail stores</div>
          <div className="business-card">💇 Salons & Barbershops</div>
          <div className="business-card">🛠️ Service businesses</div>
          <div className="business-card">🏥 Clinics</div>
          <div className="business-card">📦 Local entrepreneurs</div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="integrations">
        <h2>{t.integrationsTitle}</h2>
        <p className="integration-text">{t.integrationsDesc}</p>

        <div className="integration-highlight">
          <span>📲</span>
          <div>
            <h3>{t.whatsappTitle}</h3>
            <p>{t.whatsappDesc}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
