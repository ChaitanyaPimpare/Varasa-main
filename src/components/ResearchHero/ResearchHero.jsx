import React from "react";
import "./ResearchHero.css";
import nalandaImg from "../../assets/nalanda.png";

export default function ResearchHero() {
  return (
    <section className="research-hero">
      <div className="research-hero-inner">

        {/* Left image */}
        <div className="research-img-wrapper">
          <div className="gold-semi-circle"></div>
          <img src={nalandaImg} alt="Nalanda" className="research-image" />
        </div>

        {/* Right text */}
        <div className="research-text">
          <h2>Research & Knowledge Center – Inspired by the Legacy of Nalanda</h2>

          <p>
            Rooted in the timeless spirit of Nalanda University, the Research & Knowledge Center
            stands as a beacon of wisdom, discovery, and continuous learning. Like Nalanda — where
            scholars once gathered to explore science, philosophy, art, and logic — this center
            fosters the same passion for curiosity and the pursuit of truth.
            <br /><br />
            Here, knowledge flows freely across disciplines, nurturing minds to think critically
            and innovate fearlessly. The center embodies the heritage of India’s ancient
            intellectual traditions, blending them with modern research and technology to shape a
            brighter, wiser future.
            <br /><br />
            It is not merely a place to study — it is a living ecosystem of ideas, collaboration,
            and enlightenment, carrying forward Nalanda’s eternal message: “Knowledge grows when
            shared.”
          </p>

          <button className="research-btn">Our Work</button>
        </div>

      </div>
    </section>
  );
}
