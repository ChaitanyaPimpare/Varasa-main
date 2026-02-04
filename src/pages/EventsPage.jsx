import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { loadData } from "../utils/storage";
import "./EventsPage.css";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setEvents(loadData("events_page", []));
  }, []);

  // ⭐ AUTO SLIDER
  useEffect(() => {
    if (!events.length) return;

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % events.length);
    }, 3000); // change slide every 4 seconds

    return () => clearInterval(interval);
  }, [events]);

  if (!events.length) {
    return (
      <>
        <Header />
        <div className="coming-section">
          <div className="coming-card">
            <h2>🚧 Events Coming Soon 🚧</h2>
            <p>Stay connected for upcoming cultural and heritage events.</p>
          </div>
        </div>
      </>
    );
  }

  const event = events[index];

  return (
    <>
      <Header />
      <section className="event-slider-section">
        <div className="event-feature-card fade-in" key={index}>
          {event.img && (
            <div className="event-feature-image">
              <img src={event.img} alt={event.title} />
            </div>
          )}

          <div className="event-feature-content">
            <h2>{event.title}</h2>
            <p className="event-desc">{event.desc}</p>

            <div className="event-meta">
              {event.date && <span>📅 {event.date}</span>}
              {event.location && <span>📍 {event.location}</span>}
            </div>
          </div>
        </div>

        <div className="slider-dots">
          {events.map((_, i) => (
            <span
              key={i}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
