import React from "react";
import "./ResearchMission.css";

export default function ResearchMission() {
  return (
    <section className="research-mission">
      <div className="mission-card-large">
        <p className="mission-subtitle">Association for Cultural Heritage and Archaeology</p>

        <h3 className="mission-title">Our Mission</h3>

        <ul className="mission-list">
          <li><strong>Heritage Research & Conservation</strong> - Conducting explorations, excavations, and documentation for preservation of ancient monuments and artifacts.</li>
          <li><strong>Scholarship & Academic Support</strong> - Providing research opportunities and grants for students and heritage professionals.</li>
          <li><strong>Education & Awareness</strong> - Organizing seminars, festivals, heritage walks, and workshops for public engagement.</li>
          <li><strong>Publications</strong> - Publishing journals, books, and digital materials to promote heritage education.</li>
          <li><strong>Community Outreach</strong> - Conducting awareness campaigns and mobile exhibitions for public participation.</li>
          <li><strong>Museums & Cultural Spaces</strong> - Establishing galleries and collaborative museum projects.</li>
          <li><strong>Digital Integration</strong> - Creating online repositories and interactive research databases.</li>
        </ul>

        <button className="mission-btn">Know More</button>
      </div>
    </section>
  );
}