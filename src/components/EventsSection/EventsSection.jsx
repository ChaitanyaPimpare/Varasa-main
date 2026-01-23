import React from "react";

import event1 from "../../assets/event1.jpg";
import event2 from "../../assets/event2.jpg";
import event3 from "../../assets/event3.png";
import event4 from "../../assets/event4.jpg";

export default function EventsSection() {
  const events = [
    {
      img: event1,
      title: "Human Genetic Studies",
      desc: "Genetic and microbiome studies of Central Indian populations to understand historical migration patterns and cultural evolution.",
    },
    {
      img: event2,
      title: "Archaeological Survey of Tadoba–Andhari",
      desc: "A systematic survey dedicated to uncovering the cultural and historical layers within Tadoba–Andhari.",
    },
    {
      img: event3,
      title: "Cultural Notice Board at Tadoba–Andhari",
      desc: "A public-engagement project aimed at raising awareness among visitors about the Reserve’s archaeological and cultural significance.",
    },
    {
      img: event4,
      title: "Archaeological Documentary Film on Tadoba",
      desc: "A visual research initiative to capture the lesser-known cultural narratives and historical evidence of Tadoba–Andhari.",
    },
  ];

  return (
    <section id="events" className="events-section">
      <h3 className="section-title">Events</h3>
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
