import React, { useEffect, useState } from "react";
import { loadData } from "../../utils/storage";

export default function ProgramsSection() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    setPrograms(loadData("programs", []));   // ✅ DIRECT KEY
  }, []);

  return (
    <section id="programs" className="programs-section">
      <h3 className="section-title">Programs</h3>
      <div className="events-grid">
        {programs.map(p => (
          <div className="event-card" key={p.id}>
            {p.img && <img src={p.img} alt={p.title} />}
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
