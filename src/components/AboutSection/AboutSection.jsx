import React from "react";


import logoSymbol from "../../assets/logo-symbol.png";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-logo">
          <div className="circle-logo">
            <img src={logoSymbol} alt="Varasa Symbol" />
            <p>Association for Cultural Heritage and Archaeology</p>
          </div>
        </div>
        <div className="about-text">
          <h3>About Us</h3>
          <p>
            VĀRASĀ Association for Cultural Heritage and Archaeology, Pune (est. 2011),
            is a non-profit organization dedicated to preserving and promoting India’s
            rich cultural heritage. Registered under the Societies Registration Act,
            1860 and the Bombay Public Trust Act, VARASA works to safeguard historical
            treasures through research, excavation, documentation, conservation, and restoration.
          </p>
          <p>
            With a passionate team of archaeologists, historians, scientists, and
            conservation experts, we strive to keep the legacy of our tangible and
            intangible heritage alive for future generations.
          </p>
          <button className="primary-btn">Know More</button>
        </div>
      </div>
    </section>
  );
}
