import React, { useEffect, useState } from "react";
import { getSection } from "../../api/contentApi";

export default function ResearchHomeSection() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getSection("researchHome");
      setItems(data);
    }
    load();
  }, []);

  return (
    <section id="research-home" className="research-section">
      <h3 className="section-title">Research Highlights</h3>

      <div className="research-grid">
        {items.map(item => (
          <div className="research-card" key={item.id}>
            {item.img && (
              <img
                src={`https://varasa-backend.onrender.com${item.img}`}
                alt={item.title}
                className="research-icon"
              />
            )}

            <h5>{item.title}</h5>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
