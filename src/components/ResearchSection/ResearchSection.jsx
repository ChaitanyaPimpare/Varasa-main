import React from "react";


import research1 from "../../assets/research1.png";
import research2 from "../../assets/research2.png";
import research3 from "../../assets/research3.png";
import research4 from "../../assets/research4.png";

export default function ResearchSection() {
  const researchItems = [
    { img: research1, title: "Publications" },
    { img: research2, title: "Lectures" },
    { img: research3, title: "Seminar" },
    { img: research4, title: "Training / Workshop" },
  ];

  return (
    <section id="research" className="research-section">
      <h3 className="section-title">Research</h3>
      <div className="research-grid">
        {researchItems.map((item, i) => (
          <div className="research-card" key={i}>
            <img src={item.img} alt={item.title} className="research-icon" />
            <h5>{item.title}</h5>
            <button className="primary-btn">Know More</button>
          </div>
        ))}
      </div>
    </section>
  );
}
