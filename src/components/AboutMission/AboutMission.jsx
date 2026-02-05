import React from "react";
import "./AboutMission.css";
import advisor3 from "../../assets/advisor3.png";

export default function AboutMission() {
  return (
    <section className="about-mission">
      <div className="vertical-line">
        <div className="top-emblem"></div>
        <div className="middle-symbol"></div>
        <div className="bottom-symbol"></div>
      </div>

      <div className="mission-container">
        {/* Mission Section */}
        <div className="card mission-card">
          <h2>Our Mission</h2>
          <ul>
            <li><strong>Heritage Research & Conservation:</strong> Conducting explorations, excavations, and documentation for preservation of ancient materials and artifacts.</li>
            <li><strong>Scholarship & Academic Support:</strong> Providing research opportunities and grants for students and professionals.</li>
            <li><strong>Education & Awareness:</strong> Organizing seminars, heritage walks, and workshops for public engagement.</li>
            <li><strong>Publications:</strong> Publishing journals, books, and original materials to promote heritage education.</li>
            <li><strong>Community Outreach:</strong> Conducting awareness campaigns and creative collaborations for heritage protection.</li>
            <li><strong>Museums & Cultural Spaces:</strong> Establishing galleries and repositories for interactive education.</li>
            <li><strong>Digital Integration:</strong> Creating online repositories and interactive research databases.</li>
          </ul>
          {/* <button className="know-more-btn">Know More</button> */}
        </div>

        {/* Vision Section */}
        <div className="card vision-card">
          <h2>Our Vision</h2>
          <p>
            To initiate collaborative short and long-term research in archaeology, art, architecture,
            history, and cultural heritage management by connecting institutions, universities,
            museums, and archaeological departments across India and abroad.
          </p>
        </div>

        {/* Core Values Section */}
      <div className="card values-card">
      <h2>Core Values</h2>
      <div className="values-grid">
        <div className="value-item">Integrity in Research</div>
        <div className="value-item">Respect for Cultural Diversity</div>
        
        {/* Dummy image of star/compass rose */}
        <div className="compass-rose-container">
          <img src={advisor3} alt="Compass Rose" className="compass-rose-image" />
        </div>

        <div className="value-item">Collaboration & Partnership</div>
        <div className="value-item">Sustainability in Conservation</div>
      </div>
    </div>
      </div>
    </section>
  );
}
