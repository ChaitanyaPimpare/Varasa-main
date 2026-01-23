import React from "react";
import "./AboutIntro.css";
import aboutTopImg from "../../assets/aboutTop2.png"; // your sculpture image

export default function AboutIntro() {
  return (
    <section className="about-intro">
      <div className="about-container">
        {/* LEFT SIDE — IMAGE WITH CIRCLE */}
        <div className="about-image-wrapper">
          <div className="circles-bg"></div>
          <img src={aboutTopImg} alt="VARASA Heritage Sculpture" className="heritage-img" />
        </div>

        {/* RIGHT SIDE — TEXT */}
        <div className="about-content">
          <h2>About <span className="highlight">Varasa</span></h2>
          <p>
            VĀRASĀ Association for Cultural Heritage and Archaeology, Pune established under
            Societies Registration Act, 1860 and Bombay Public Trust Act (est. 4th November 2011
            Reg. No. Maha. 1918/2011) is a non-profit organization committed to the heritage
            preservation, research, and promotion of tangible and intangible cultural heritage
            and archaeology. Our mission is to safeguard historical treasures, raise awareness
            about the significance of cultural heritage, and support archaeological research
            and conservation efforts.
          </p>
          <p>
            With a team of passionate archaeologists, scientists, historians, conservationists,
            and heritage professionals, VĀRASĀ actively engages in excavation projects,
            documentation, conservation and restoration of heritage sites, ensuring that
            history remains accessible and meaningful for future generations.
          </p>
          <button className="about-btn">Our Work</button>
        </div>
      </div>
    </section>
  );
}
