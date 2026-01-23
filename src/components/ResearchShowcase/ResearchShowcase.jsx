import React from "react";
import "./ResearchShowcase.css";

import img1 from "../../assets/public1.png";
import img2 from "../../assets/public2.jpg";
import img3 from "../../assets/public3.jpg";
import img4 from "../../assets/public4.jpg";
import img6 from "../../assets/seminar1.jpg";
import img7 from "../../assets/training2.jpg";
import img8 from "../../assets/training3.jpg";
import img9 from "../../assets/traning4.jpg";

export default function ResearchShowcase() {
  const sections = [
    {
      title: "Publications",
      items: [
        {
          img: img1,
          title: "Unearthing the Past",
          desc: "Archaeological excavation insights and cultural heritage findings."
        },
        {
          img: img2,
          title: "Sculptures and Relics",
          desc: "The artistic legacy of Indian heritage and temple architecture."
        },
        {
          img: img3,
          title: "Conservation Beyond",
          desc: "Protecting monuments through research, preservation and surveys."
        },
        {
          img: img4,
          title: "Trail & Heritage Walk",
          desc: "Exploring sites through cultural trails, interpretation and tours."
        }
      ],
      btn: "Know More"
    },

    {
      title: "Learning & Seminars",
      items: [
        {
          img: img6,
          title: "Archaeological Field Training",
          desc: "Hands-on workshops on excavation methods and documentation."
        },
        {
          img: img2,
          title: "Heritage Site Conservation Workshop",
          desc: "Training sessions on conservation, restoration and mapping."
        },
        {
          img: img3,
          title: "Raigad Fort",
          desc: "Educational field visit and study program in heritage fort research."
        },
        {
          img: img4,
          title: "Hampi",
          desc: "Site interpretation & knowledge program for heritage awareness."
        }
      ],
      btn: "Read Story"
    },

    {
      title: "Training & Workshop",
      items: [
        {
          img: img6,
          title: "Archaeological Field Training",
          desc: "Comprehensive training module for excavation and survey."
        },
        {
          img: img7,
          title: "Heritage Site Conservation Workshop",
          desc: "Learn heritage restoration, protection methods and case studies."
        },
        {
          img: img8,
          title: "Museum Studies & Artifact Handling",
          desc: "Training in cataloguing, artifacts handling and display planning."
        },
        {
          img: img9,
          title: "Heritage Documentation & GIS Mapping",
          desc: "Digital mapping, documentation and photogrammetry workshop."
        }
      ],
      btn: "Register Now"
    }
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
                  <img src={item.img} alt={item.title} className="showcase-img" />

                  <div className="showcase-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>

                    <button className="showcase-btn">{sec.btn}</button>
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
