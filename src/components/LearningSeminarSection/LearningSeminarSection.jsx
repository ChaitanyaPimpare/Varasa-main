import React from "react";
import "./LearningSeminarSection.css";

import seminar1 from "../../assets/training2.jpg";
import seminar2 from "../../assets/training3.jpg";
import seminar3 from "../../assets/seminar1.jpg";
export default function LearningSeminarSection() {
  const learningItems = [
    {
      img: seminar1,
      heading: "Archaeological Field Training",
      title: "Hands-on Experience in Excavation & Exploration",
      year: "2025",
      overview:
        "The Archaeological Field Training Program offers participants a unique opportunity to immerse themselves in the fascinating world of excavation (exploration and heritage conservation). Designed for students, researchers, and heritage enthusiasts, this program bridges the gap between academic learning and real-world archaeological practice.",
      highlights: [
        "Excavation Techniques: Learn professional excavation methods including trenching, stratigraphic observation, artifact handling, and soil profiling.",
        "Documentation & Recording: Understand the importance of accurate documentation using field notes, drawing, photography, and mapping.",
        "Conservation Practices: Learn preventive and remedial conservation of artifacts and site features.",
        "Cultural Outreach: Engage with local communities and understand cultural and heritage landscapes.",
        "Expert Mentorship: Receive hands-on training from seasoned archaeologists and conservation professionals."
      ],
      btn: "Know More"
    },
    {
      img: seminar2,
      heading: "Symbolism and Faith: The Buddhist Caves of Western India",
      author: "Dr.Kantikumar Pawar",
      year: "2025",
      abstract:
        "This study delves into the fascinating archaeological landscapes of Central India, a region rich with remnants of ancient civilizations. Through a series of systematic excavations and surveys conducted between 2019–2023, the research documents the evolution of human settlement patterns, technological advancements, and socio-economic transitions from the Megalithic period to the Medieval era.",
      introduction:
        "Central India, with its strategic location and rich cultural heritage, has long served as a corridor for trade, migration, and cultural exchange. The research emphasizes how the rivers, plateaus, and forest belts shaped human habitation and resource utilization."
    },
    {
      img: seminar3,
      heading: "Conservation Beyond",
      author: "Dr.Kantikumar Pawar",
      year: "2025",
      abstract:
        "This study delves into the fascinating archaeological landscapes of Central India, a region rich with remnants of ancient civilizations. Through a series of systematic excavations and surveys conducted between 2019–2023, the research documents the evolution of human settlement patterns, technological advancements, and socio-economic transitions from the Megalithic period to the Medieval era.",
      introduction:
        "Central India, with its strategic location and rich cultural heritage, has long served as a corridor for trade, migration, and cultural exchange. The research emphasizes how the rivers, plateaus, and forest belts shaped human habitation and resource utilization."
    }
  ];

  return (
    <section className="learning-section">
      <div className="learning-container">

        {/* Label */}
        <div className="learning-label">
          Learning & Seminar
          <span className="learning-underline"></span>
        </div>

        {/* Items */}
        {learningItems.map((item, index) => (
          <div key={index} className="learning-block">

            <div className="learning-row">
              <img src={item.img} alt={item.heading} className="learning-img" />

              <div className="learning-text">
                <h2 className="learning-title">{item.heading}</h2>

                {/* If it is training type show different format */}
                {item.title ? (
                  <>
                    <p className="learning-meta">
                      <b>Title :</b> {item.title} <br />
                      <b>Year :</b> {item.year}
                    </p>

                    <p className="learning-heading">Overview</p>
                    <p className="learning-para">{item.overview}</p>

                    <p className="learning-heading">Practical Highlights</p>
                    <ul className="learning-list">
                      {item.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>

                    <button className="learning-btn">{item.btn}</button>
                  </>
                ) : (
                  <>
                    <p className="learning-meta">
                      <b>Author :</b> {item.author} <br />
                      <b>Year :</b> {item.year}
                    </p>

                    <p className="learning-heading">Abstract</p>
                    <p className="learning-para">{item.abstract}</p>

                    <p className="learning-heading">Introduction</p>
                    <p className="learning-para">{item.introduction}</p>

                    <button className="learning-btn">Know More</button>
                  </>
                )}
              </div>
            </div>

            {/* separator */}
            {index !== learningItems.length - 1 && <div className="learning-separator" />}
          </div>
        ))}
      </div>
    </section>
  );
}
