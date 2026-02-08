import React, { useEffect, useState } from "react";
import { getSection } from "../../api/contentApi";

export default function EventsSection() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getSection("events");
      setEvents(data);
    }
    load();
  }, []);

  return (
    <section id="events" className="events-section">
      <h3 className="section-title">Events</h3>

      <div className="events-grid">
        {events.map(e => (
          <div className="event-card" key={e.id}>
            {e.img && (
              <img
                src={`http://127.0.0.1:5000${e.img}`}
                alt={e.title}
              />
            )}

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
