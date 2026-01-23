import React from "react";
import "./TrainingWorkshopSection.css";

import trainingImg from "../../assets/seminar1.jpg"; // ✅ use your image

export default function TrainingWorkshopSection() {
  const schedule = [
    { day: "Day 1", topic: "Orientation", activity: "Introduction & Objectives" },
    { day: "Day 2", topic: "Excavation", activity: "Trenching & Stratigraphy" },
    { day: "Day 3", topic: "Documentation", activity: "Drawing / Photography / GPS" },
    { day: "Day 4", topic: "Conservation", activity: "Artifact Handling & Preservation" },
    { day: "Day 5", topic: "Field Visit", activity: "Heritage Walk & Case Studies" },
  ];

  return (
    <section className="training-section">
      <div className="training-container">

        {/* Label */}
        <div className="training-label">
          Training & Workshop
          <span className="training-underline"></span>
        </div>

        {/* Title */}
        <h2 className="training-title">Archaeological Field <br /> Training</h2>

        {/* content */}
        <div className="training-row">
          {/* Left image */}
          <div className="training-left">
            <img src={trainingImg} alt="Training" className="training-img" />
          </div>

          {/* Right text */}
          <div className="training-right">

            <h4 className="training-subheading">Overview</h4>
            <p className="training-text">
              The Archaeological Field Training Program offers participants a unique opportunity to
              immerse themselves in the fascinating world of excavation (exploration) and heritage
              conservation. Designed for students, researchers, and heritage enthusiasts, this
              program bridges the gap between academic learning and real-world archaeological practice.
            </p>

            <h4 className="training-subheading">Practical Highlights</h4>
            <ul className="training-list">
              <li><b>Excavation Techniques:</b> Learn professional excavation methods including trenching, stratigraphic observation, artifact handling, and soil profiling.</li>
              <li><b>Documentation & Recording:</b> Accurate documentation using field notes, drawing, photography, and digital mapping tools.</li>
              <li><b>Conservation Practices:</b> Preventive and remedial conservation of artifacts and site features.</li>
              <li><b>Cultural Outreach:</b> Engage with local heritage communities and understand settlement landscapes.</li>
              <li><b>Expert Mentorship:</b> Training from seasoned archaeologists & conservation professionals.</li>
            </ul>

            <h4 className="training-subheading">Trainers / Mentors</h4>
            <ul className="training-mentors">
              <li>Ms. Laxmi Zatre – Heritage Conservation Expert</li>
              <li>Mr. Abhijit Khodke – GIS & Documentation Specialist</li>
              <li>Dr. Yashasudha — Archaeology & Research Director</li>
            </ul>

            <h4 className="training-subheading">Program Schedule</h4>

            <table className="training-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Topic</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((s, i) => (
                  <tr key={i}>
                    <td>{s.day}</td>
                    <td>{s.topic}</td>
                    <td>{s.activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h4 className="training-subheading">Location</h4>
            <p className="training-text">
              Shriram Fort Region, Pune District, Maharashtra
            </p>

            <h4 className="training-subheading">Eligibility / Who Can Join</h4>
            <p className="training-text">
              Students, researchers, architects, heritage professionals and anyone interested in
              archaeology and cultural preservation.
            </p>

            <button className="training-apply-btn">Apply Now</button>

          </div>
        </div>

        {/* bottom separator */}
        <div className="training-separator"></div>
      </div>
    </section>
  );
}
