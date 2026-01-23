import React from "react";
import "./DonateGrantsPage.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LearningSeminarSection from "../components/LearningSeminarSection/LearningSeminarSection";
import TrainingWorkshopSection from "../components/TrainingWorkshopSection/TrainingWorkshopSection";

import heroImg from "../assets/heroimg2.jpg";     
import csr1 from "../assets/public1.png";
import csr2 from "../assets/public2.jpg";
import csr3 from "../assets/public3.jpg";

export default function DonateGrantsPage() {

  const csrProjects = [
    {
      img: csr1,
      title: "Partner with Us to Preserve India's Living Heritage.",
      author: "Dr.Kantikumar Pawar",
      year: "2025",
      abstract:
        "This study delves into the fascinating archaeological landscapes of Central India, a region rich with remnants of ancient civilizations. Through a series of systematic excavations and surveys conducted between 2019–2023, the research documents the evolution of human settlement patterns, technological advancements, and socio-economic transitions from the Megalithic period to the Medieval era.",
      introduction:
        "Central India, with its strategic location and rich cultural heritage, has long served as a corridor for trade, migration, and cultural exchange. The research emphasizes how the rivers, plateaus, and forest belts shaped human habitation and resource utilization. The project also integrates interdisciplinary approaches involving archaeology, geo-morphology, and material culture analysis."
    },
    {
      img: csr2,
      title: "Symbolism and Faith: The Buddhist Caves of Western India",
      author: "Dr.Kantikumar Pawar",
      year: "2025",
      abstract:
        "This study focuses on the fascinating archaeological landscapes of Central India, a region rich with remnants of ancient civilizations. Through a series of systematic excavations and surveys conducted between 2019–2023, the research documents the evolution of human settlement patterns, technological advancements, and socio-economic transitions from the Megalithic period to the Medieval era.",
      introduction:
        "Central India, with its strategic location and rich cultural heritage, has long served as a corridor for trade, migration, and cultural exchange. The research emphasizes how the rivers, plateaus, and forest belts shaped human habitation and resource utilization. The project also integrates interdisciplinary approaches involving archaeology, geo-morphology, and material culture analysis."
    },
    {
      img: csr3,
      title: "Conservation Beyond: Time - Case Studies in Heritage Preservation",
      author: "Dr.Kantikumar Pawar",
      year: "2025",
      abstract:
        "This study delves into the fascinating archaeological landscapes of Central India, a region rich with remnants of ancient civilizations. Through a series of systematic excavations and surveys conducted between 2019–2023, the research documents the evolution of human settlement patterns, technological advancements, and socio-economic transitions from the Megalithic period to the Medieval era.",
      introduction:
        "Central India, with its strategic location and rich cultural heritage, has long served as a corridor for trade, migration, and cultural exchange. The research emphasizes how the rivers, plateaus, and forest belts shaped human habitation and resource utilization. The project also integrates interdisciplinary approaches involving archaeology, geo-morphology, and material culture analysis."
    },
  ];

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="donate-hero">
        <img src={heroImg} alt="Donate Hero" className="donate-hero-img" />
        <div className="donate-hero-overlay">
          <h1>
            Together We Restore, Educate & <br />
            Empower the Future.
          </h1>
        </div>
      </section>

      {/* CSR CONTENT */}
      <section className="csr-section">
        <div className="csr-container">

          {/* label */}
          <div className="csr-label">
            Corporate CSR
            <span className="csr-underline"></span>
          </div>

          {/* Projects */}
          {csrProjects.map((p, index) => (
            <div key={index} className="csr-block">

              <div className="csr-row">
                <img src={p.img} alt={p.title} className="csr-img" />

                <div className="csr-text">
                  <h2 className="csr-title">{p.title}</h2>

                  <p className="csr-meta">
                    <b>Author :</b> {p.author} <br />
                    <b>Year :</b> {p.year}
                  </p>

                  <p className="csr-heading">Abstract</p>
                  <p className="csr-para">{p.abstract}</p>

                  <p className="csr-heading">Introduction</p>
                  <p className="csr-para">{p.introduction}</p>

                  <button className="csr-btn">Know More</button>
                </div>
              </div>

              {/* separator */}
              {index !== csrProjects.length - 1 && <div className="csr-separator" />}
            </div>
          ))}

        </div>
      </section>
<LearningSeminarSection />
<TrainingWorkshopSection />
      <Footer />
    </>
  );
}
