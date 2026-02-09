import React, { useEffect, useState } from "react";
import { getSection } from "../../api/contentApi";
import "./ResearchShowcase.css";

export default function ResearchShowcase() {
  const [publications, setPublications] = useState([]);
  const [seminars, setSeminars] = useState([]);
  const [training, setTraining] = useState([]);

  /* -------- LOAD FROM BACKEND -------- */
  useEffect(() => {
    async function loadAll() {
      const pub = await getSection("research_publications");
      const sem = await getSection("research_seminars");
      const train = await getSection("research_training");

      setPublications(pub);
      setSeminars(sem);
      setTraining(train);
    }

    loadAll();
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
              {sec.items.map(item => (
                <div key={item.id} className="showcase-card">

                  {/* IMAGE */}
                  {item.img && (
                    <img
                      src={`https://varasa-main-six.vercel.app/${item.img}`}
                      alt={item.title}
                      className="showcase-img"
                    />
                  )}

                  <div className="showcase-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>

                    {/* Publications Meta */}
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
