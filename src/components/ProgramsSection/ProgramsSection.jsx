import React from "react";

import program1 from "../../assets/program1.png";
import program2 from "../../assets/program2.jpg";
import program3 from "../../assets/program3.png";
import program4 from "../../assets/program4.jpg";

export default function EventsSection() {
  const events = [
    {
      img: program1,
      title: "Human Genetic Studies",
      desc: "Genetic and microbiome studies of Central Indian populations to understand historical migration patterns and cultural evolution.",
    },
    {
      img: program2,
      title: "Archaeological Survey of Tadoba–Andhari",
      desc: "A systematic survey dedicated to uncovering the cultural and historical layers within Tadoba–Andhari.",
    },
    {
      img: program3,
      title: "Cultural Notice Board at Tadoba–Andhari",
      desc: "A public-engagement project aimed at raising awareness among visitors about the Reserve’s archaeological and cultural significance.",
    },
    {
      img: program4,
      title: "Archaeological Documentary Film on Tadoba",
      desc: "A visual research initiative to capture the lesser-known cultural narratives and historical evidence of Tadoba–Andhari.",
    },
  ];

  return (
    <section id="Programs" className="programs-section">
      <h3 className="section-title">Programs</h3>
      <div className="events-grid">
        {events.map((e, i) => (
          <div className="event-card" key={i}>
            <img src={e.img} alt={e.title} />
            <div className="event-content">
              <h5>{e.title}</h5>
              <p>{e.desc}</p>
              <button className="primary-btn">Know More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
