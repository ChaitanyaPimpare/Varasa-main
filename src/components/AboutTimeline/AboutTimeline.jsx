import React from "react";
import "./AboutTimeline.css";
import founderImg from "../../assets/founder.png";
import advisor1 from "../../assets/advisor1.png";
import advisor2 from "../../assets/advisor2.png";
import advisor3 from "../../assets/advisor3.png";
import advisor4 from "../../assets/advisor4.png";
import pillarImg from "../../assets/pillar.png";

export default function AboutTimeline() {
  const timelineData = [
    {
      img: founderImg,
      title: "Dr. Kantikumar A. Pawar",
      subtitle: "FOUNDER",
      desc: `**Dr. Kantikumar Anant Pawar** is the Founder and General Secretary of **VĀRASĀ – Association for Cultural Heritage and Archaeology, Pune.**
A passionate academician and archaeologist, he brings over **15 years of experience** in teaching, research, and heritage conservation.  
He holds a **Ph.D. in Ancient Indian History, Culture, and Archaeology** from Deccan College, Pune (2015), and a **Post Graduate Diploma in Archaeology (PGDA)** from the Institute of Archaeology, ASI, New Delhi (2007).  
Dr. Pawar has directed several **major excavation projects in Maharashtra** and contributed to numerous archaeological surveys across India.  
He has been honored with prestigious awards such as **UGC-JRF** and **INTACH National Research Fellowship** and published **27 national** and **3 international** research papers.  
Through **VĀRASĀ**, he continues to mentor young researchers and promote India’s cultural heritage.`,
    },
    {
      img: advisor1,
      title: "Adv. Ganesh Halkare",
      subtitle: "LEGAL ADVISOR",
      desc: `**Adv. Ganesh Halkare** is a practicing advocate with deep expertise in **heritage law, property rights, and cultural policy.**
He provides valuable **legal and administrative guidance** to VĀRASĀ Foundation.  
His work focuses on **legal compliance**, **intellectual property rights**, and the **protection of historically significant sites**.  
He has been instrumental in structuring legal frameworks for heritage preservation initiatives and fostering collaborations with **government bodies and NGOs**.`,
    },
    {
      img: advisor2,
      title: "Dr. Shweta More",
      subtitle: "ADVISOR",
      desc: `**Dr. Shweta More** is a researcher focused on **Indian iconography and cultural continuity.**
She has contributed extensively to **heritage documentation and academic outreach**.`,
    },
    {
      img: advisor3,
      title: "Dr. Amit Bhandari",
      subtitle: "ADVISOR",
      desc: `**Dr. Amit Bhandari** is a historian and field archaeologist contributing to **heritage documentation** and **salvage archaeology projects**.`,
    },
    {
      img: advisor4,
      title: "Sneha Kulkarni",
      subtitle: "COORDINATOR",
      desc: `**Sneha Kulkarni** coordinates **awareness programs, workshops, and exhibitions** for public engagement and education under **VĀRASĀ**.`,
    },
  ];

  return (
    
    <section className="about-timeline">

      <div className="timeline-wrapper">
        {timelineData.map((item, index) => (
          <div className="timeline-row" key={index}>
            <div className="timeline-card">
              <div className="pillar-holder">
                <img src={pillarImg} alt="pillar" className="pillar-img" />
              </div>

              <div className="timeline-content">
                <div className="timeline-photo-container">
                  <div className="photo-circle">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="timeline-photo"
                    />
                  </div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-subtitle">{item.subtitle}</p>
                </div>

                <p
                  className="timeline-desc"
                  dangerouslySetInnerHTML={{
                    __html: item.desc.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                  }}
                />
                
              </div>
            </div>
          </div>
        ))}
      </div>
   
    </section>
  );
}
