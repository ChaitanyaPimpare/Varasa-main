import React, { useEffect, useState } from "react";
import { loadData } from "../../utils/storage";
import "./ResearchShowcase.css";

export default function ResearchShowcase() {
  const [publications, setPublications] = useState([]);
  const [seminars, setSeminars] = useState([]);
  const [training, setTraining] = useState([]);

  useEffect(() => {
    setPublications(loadData("research_publications", []));
    setSeminars(loadData("research_seminars", []));
    setTraining(loadData("research_training", []));
  }, []);

  const sections = [
    { title: "Publications", items: publications },
    { title: "Learning & Seminars", items: seminars },
    { title: "Training & Workshop", items: training }
  ];

  return (
    <section className="research-showcase-section">
      <div className="research-showcase-container">
        {sections.map((sec, index) => (
          <div key={index} className="showcase-block">
            <h3 className="showcase-title">{sec.title}</h3>

            <div className="showcase-grid">
              {sec.items.map((item, idx) => (
                <div key={idx} className="showcase-card">
                  {item.img && (
                    <img src={item.img} alt={item.title} className="showcase-img" />
                  )}
<div className="showcase-content">
  <h4>{item.title}</h4>
  <p>{item.desc}</p>

  {/* Show Author/Year ONLY for Publications */}
  {sec.title === "Publications" && (item.author || item.year) && (
    <p className="showcase-meta">
      {item.author && <>Author: {item.author}</>}
      {item.author && item.year && " | "}
      {item.year && <>Year: {item.year}</>}
    </p>
  )}
</div>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
