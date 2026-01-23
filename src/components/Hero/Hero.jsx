import React from "react";


import heroRuins from "../../assets/hero-ruins.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>Preserving the Soul of Our Civilization</h1>
          <div className="highlight-box">
            <strong>VĀRASĀ</strong>&nbsp; Association Preserving Our Timeless Heritage .
          </div>
          <p className="hero-subtext">
            We safeguard, revive, and share the stories of heritage that belong to all of us – the past, present, and future.
          </p>
          <button className="primary-btn">Know More</button>
        </div>

        <div className="hero-image" aria-hidden="true">
          <div className="circle-bg"></div>
          <img src={heroRuins} alt="Temple ruins" />
        </div>
      </div>

      <div className="hero-slider">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
}
