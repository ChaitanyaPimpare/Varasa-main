import React, { useEffect, useState } from "react";
import { loadData } from "../../utils/storage";

export default function EventsSection() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(loadData("events", []));   // ✅ FIXED KEY
  }, []);

  return (
    <section id="events" className="events-section">
      <h3 className="section-title">Events</h3>
      <div className="events-grid">
        {events.map(e => (
          <div className="event-card" key={e.id}>
            {e.img && <img src={e.img} alt={e.title} />}
            <div className="event-content">
              <h5>{e.title}</h5>
              <p>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
