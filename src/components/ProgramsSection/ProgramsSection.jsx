import React, { useEffect, useState } from "react";
import { getSection } from "../../api/contentApi";

export default function ProgramsSection() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getSection("programs");
      setPrograms(data);
    }
    load();
  }, []);

  return (
    <section id="programs" className="programs-section">
      <h3 className="section-title">Programs</h3>

      <div className="events-grid">
        {programs.map(p => (
          <div className="event-card" key={p.id}>
            {p.img && (
              <img
                src={`https://varasa-backend.onrender.com/${p.img}`}
                alt={p.title}
              />
            )}

            <div className="event-content">
              <h5>{p.title}</h5>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
