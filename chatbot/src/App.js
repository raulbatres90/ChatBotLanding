import { useState, useEffect, useContext, useMemo, useCallback } from "react";
import { translations } from "./translations";
import { Button, Footer, NavBar, ShiningDiv } from "react-landing-ui";
import ReactFlagsSelect from "react-flags-select";
import IconLogo from "./assets/PulseBot2.png";
import { TypeAnimation } from 'react-type-animation';
import "./App.css";

function App() {
  const [language, setLanguage] = useState("en");
  const t = translations[language];

  const goToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      //scroll down effect
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const HeroTypeAnimation = useCallback(() => (
    <TypeAnimation
      sequence={[
        `${t.heroTitleBanner} ${t.business1}`,
        1000,
        `${t.heroTitleBanner} ${t.business2}`,
        1000,
        `${t.heroTitleBanner} ${t.business3}`,
        1000,
        `${t.heroTitleBanner} ${t.business4}`,
        1000,
        `${t.heroTitleBanner} ${t.business5}`,
        1000,
        `${t.heroTitleBanner} ${t.business6}`,
        1000,
      ]}
      speed={50}
      style={{ fontSize: '2em' }}
      repeat={Infinity}
    />
  ), [t]);

  return (
    <>
      <NavBar logo={<span><img className="logo" src={IconLogo} alt="Logo" /></span>}>
        <a href="#about" style={{ color: "white" }} onClick={(e) => { e.preventDefault(); goToSection("about"); }}>About</a>
        <a href="#pricing" style={{ color: "white" }} onClick={(e) => { e.preventDefault(); goToSection("pricing"); }}>Pricing</a>
        <a href="#roadmap" style={{ color: "white" }} onClick={(e) => { e.preventDefault(); goToSection("roadmap"); }}>Roadmap</a>
        <a href="#integrations" style={{ color: "white" }} onClick={() => { goToSection("integrations"); }}>Contact</a>
      </NavBar>
      {/* LANGUAGE SWITCH */}
      <div className="language-switch">
        <ReactFlagsSelect
          className="languaje-component"
          countries={["US", "ES"]}
          defaultCountry={language === "es" ? "ES" : "US"}
          selected={language === "es" ? "ES" : "US"}
          onSelect={(code) => setLanguage(code === "ES" ? "es" : "en")}
          showSelectedLabel={false}
          showSecondarySelectedLabel={false}
          showOptionLabel={false}
        />
      </div>

      {/* HERO */}
      <div className="main">
        <section className="hero">
          <ShiningDiv>
            <h1>
              <HeroTypeAnimation />
            </h1>
          </ShiningDiv>
          <p className="hero-subtitle">{t.heroSubtitle}</p>
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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* INTEGRATIONS */}
        <section className="integrations" id="integrations">
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

      <Footer
        style={{ padding: "10px !important" }}
        logo={<span><img className="logo" src={IconLogo} alt="Logo" /></span>}
        mainLinks={<>
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Roadmap</a>
          <a href="#">Contact</a>
        </>}
        extraLinks={<>
          <a href="#">Privacy</a>
          <a href="#"> &copy; Archit 2022</a>
        </>}
      />
    </>
  );
}

export default App;
