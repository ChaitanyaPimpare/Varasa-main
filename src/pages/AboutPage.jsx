import React from "react";
import Header from "../components/Header/Header";
import AboutIntro from "../components/AboutIntro/AboutIntro";
import HeritageBanner from "../components/HeritageBanner/HeritageBanner";
import Footer from "../components/Footer/Footer";
import "./AboutPage.css";

import Varasalogo2 from "../assets/Varasalogo2.jpg";

import founderImg from "../assets/founder.png";
import advisor1 from "../assets/advisor1.png";
import advisor2 from "../assets/advisor2.png";
import advisor from "../assets/advisor.jpg";
// import adviso from "../assets/adviso.png";
import advisor5 from "../assets/advisor5.png";
import advisor6 from "../assets/advisor6.jpg";
import advisor7 from "../assets/advisor7.jpg";
import advisor8 from "../assets/advisor8.jpg";
import pillarImg from "../assets/pillar.png";
import pillar2 from "../assets/pillar2.png";
import pillar3 from "../assets/pillar3.png";
// import Wheel from "../assets/Wheel.png";
import Statue from "../assets/Statue.png";
import ShivMudra from "../assets/ShivMudra.png";
import Peacock from "../assets/Peacock.png";
import Bull from "../assets/Bull.png";
import Star from "../assets/Star.png";
import eagle from "../assets/eagle.png";
import tiger1 from "../assets/tiger1.png";
import tiger2 from "../assets/tiger2.png";
import inkbottle from "../assets/inkbottle.png";
import Sym from "../assets/Sym.png";
import Symbol from "../assets/Symbol.png";
import Symbol2 from "../assets/Symbol2.png";
import Symbol3 from "../assets/Symbol3.png";
import Symbol5 from "../assets/Symbol5.png";


export default function AboutPage() {
  const timelineData = [
    {
      img: founderImg,
      title: "Dr. Kantikumar A. Pawar",
      sideImg: pillarImg,
      bottomImg: tiger1,
      circleImg:Symbol,
      subtitle: "FOUNDER",
      desc: `Dr. Kantikumar Anant Pawar is the Founder and General Secretary of VĀRASĀ – Association for Cultural Heritage and Archaeology, Pune. 
A passionate academician and archaeologist, he brings over 15 years of experience in teaching, research, and heritage conservation.
Dr. Pawar holds a Ph.D. in Ancient Indian History, Culture, and Archaeology from Deccan College, Pune (2015) and a Post Graduate Diploma in Archaeology (PGDA) from the Institute of Archaeology, ASI, New Delhi (2007). He has also qualified for UGC-NET with JRF (2007).
His expertise spans archaeological excavations, conservation,
documentation, and cultural heritage management. 
He has actively directed three major excavation projects in Maharashtra and contributed to numerous archaeological surveys across India. 
He also played a vital role in the Polavaram Dam Salvage Archaeology Project (2017–18), preserving invaluable artifacts before their submergence. With 27 national and 3 international publications, participation in over 50 seminars, and years of guidance to Ph.D. and M.A. scholars, Dr. Pawar stands as a bridge between academic research and practical heritage conservation. He has been honored with prestigious awards such as the UGC-JRF and INTACH National Research Fellowship. 
Dr. Pawar is a life member of leading professional organizations like ISPQS, SOSAA, RASI, and IAS, and has coordinated multiple international conferences on Rock Art and Salvage Archaeology. Through VĀRASĀ, he continues to inspire and mentor young researchers, aiming to preserve India’s cultural legacy and make heritage accessible and meaningful for future generations.`,
    },
    {
      img: advisor1,
      title: "Prof. Yashadatta S. Alone",
      sideImg: pillar2,
      bottomImg: tiger2,
      pillarClass: "pillar-tall",
      circleImg:Symbol2,
      subtitle: "Vice President",
      desc: `<p>**Prof. Yashadatta S. Alone** serves as the **Vice President of VĀRASĀ** – Association for Cultural Heritage and Archaeology and is currently a Professor of **Visual Studies at the School of Arts and Aesthetics, Jawaharlal Nehru University (JNU), New Delhi.**<p/>
      He holds a **Ph.D.** and **M.Phil.** in History from the Centre for Historical Studies, Jawaharlal Nehru University, and a **Master’s degree** in **Fine Arts (Art History)** from the **Maharaja Sayajirao University of Baroda**. With over **18 years of experience in teaching and research at JNU**, he has previously taught at **Deccan College Postgraduate Research Institute, Pune**, and **Kurukshetra University**.
      <p>Prof. Alone’s academic career is marked by a strong interdisciplinary approach combining art history, archaeology, and cultural theory. His research focuses on ancient Indian and Buddhist art, rock-cut architecture, visual culture of marginalized communities, and Ambedkarite aesthetics. His scholarship reinterprets traditional Indian art through critical social and cultural frameworks, emphasizing inclusivity and philosophical depth.
      He was nominated as an ICCR Chair Visiting Professor at Shenzhen University, China, and has served as a Visiting Professor at several prestigious global universities including Renmin University (Beijing), East China Normal University (Shanghai), Autónoma University (Madrid), and Heidelberg University (Germany).<p/>
      Prof. Alone has lectured extensively across India, China, Spain, and Germany, contributing to international dialogues on Buddhist visual culture, Indian aesthetics, and contemporary art. He is the author of the acclaimed book “Buddhist Caves of Western India: Forms and Patronage”, which offers an analytical understanding of the social and cultural contexts of Buddhist cave architecture.**.
      <p>His pioneering conceptual framework, “Protected Ignorance”, critically examines the politics of knowledge and exclusion within the field of art history. Prof. Alone’s academic excellence has been recognized through several fellowships, including the UGC Research Fellowship, and his service as an expert member on the Planning Commission’s Expert Group on Culture, Ministry of Culture, Government of India.`,
    },
    {
      img: advisor2,
      title: "Adv. Ganesh Halkare",
      sideImg: pillar3,
      rightbottomImg:Bull,
     pillarClass: "pillar-medium",
      circleImg:Symbol3,
      subtitle: "Treasurer",
      desc: `**Adv. Ganesh Halkare**  is a practicing advocate with deep expertise in heritage law, property rights, and cultural conservation policy. 
      With a strong commitment to safeguarding India’s tangible and intangible heritage, he provides valuable legal and administrative guidance to VĀRASĀ Foundation. His work focuses on legal compliance in heritage conservation projects, intellectual property rights related to archaeological research, and the protection of historically significant sites under state and national legislation.
      Adv.Halkare has been instrumental in structuring legal frameworks for heritage preservation initiatives and fostering collaborations between government bodies, NGOs, and research organizations. His vision is to ensure that every cultural asset is protected with integrity and transparency for future generations.`,
    },
 
    {
      img: advisor,
      title: "Ms. Leena Zilpe",
      sideImg: Statue,
      circleImg:Symbol5,

      subtitle: "Archaeologist | Heritage Conservationist |Co-Founder VĀRASĀ Foundation",
      desc: `Ms.Leena Zilpe is a leading national conservator of cultural property at the National Research Laboratory for Conservation of Cultural Property (NRLC), under India’s Ministry of Culture. Based in Nagpur, she has spearheaded the preservation of iconic collections, including Mahatma Gandhi’s personal artifacts (2008–2010) and over 170 items belonging to Dr. B. R. Ambedkar for a museum in Chicholi. A postgraduate in Applied Art as well as Archaeology from Nagpur University, she topped her museology course at NRLC’s Lucknow center and holds multi-disciplinary expertise in ancient Indian history, linguistics (Sanskrit, Prakrit, Pali, Urdu), and conservation techniques. Her projects include restoring masterpieces by Gaitonde and Raza, reconstructing a 51‑feet Bhagavad Gita scroll, and preserving temple paintings, palm-leaf manuscripts, and historic textiles. Through her initiatives, she advocates minimal-intervention principles and sustainable preservation practices tailored to climate‑vulnerable contexts.`,
    },
    {
      img: advisor5,
      title: "Mr. Shivam Dubey",
      sideImg: ShivMudra,
      circleImg:Symbol2,
      subtitle: "Archaeologist | Research Scholar | Heritage Documentation Specialist",
      desc: `a PhD scholar at Nagpur University, specializes in Ancient Indian Culture and Archaeology. A 2016 postgraduate from St. Xavier's College, Mumbai, he has expertise in temple architecture, iconography, and heritage studies, focusing on the Kalachuris and Central India. He has led key projects like the Sirpur Heritage Assessment and Bandhavgarh excavations, the latter earning global acclaim. Shivam has presented 25+ papers, authored 19+ publications and 11 books, and conducted extensive fieldwork across Madhya Pradesh. He collaborates with ASI, Indian Archaeological Society, and others, promoting heritage awareness via platforms like the G20 Summit and Heritage Pathshala.`,
    },
    {
      img: advisor6,
      title: "Mr. Satish G. Dhakne",
      sideImg:Statue,
      circleImg:Symbol3,
      subtitle: "Archaeologist | Research Fellow | Museology & Conservation Specialist",
      desc: `**Mr. Satish Gajana Dhakne** is a Ph.D. scholar at Deccan College, Pune, with an M.A. (2020) and a recent PG Diploma in Museology (2025). He also holds a certificate in Digital Archaeology (2023). He has participated in major excavations at Nagpur, Phanigiri, and Tandoor, and worked with the Department of Archaeology, Maharashtra (2022–2024), gaining experience in conservation and heritage documentation. Currently, he teaches at SNDT College, Pune, and conducts freelance archaeological research. His interests include temple architecture, iconography, conservation, and field survey.`,
    },
    {
      img: advisor7,
      title: "Mr. Abhijeet Khedkar",
      circleImg:Bull,
      subtitle: "Project Research Fellow | Archaeologist | Cultural Heritage Specialist",
      desc: `Abhijit Khedkar, a dedicated scholar of archaeology and cultural heritage, holds a Master’s degree in Ancient Indian History, Culture, and Archaeology from Deccan College Postgraduate and Research Institute, Pune (2019), following a Bachelor's in History from Fergusson College, Pune (2017). He completed his schooling from Army Public School, Pune under the CBSE board. He has also pursued a Diploma in Marine Archaeology jointly offered by Deccan College and the National Institute of Oceanography, Goa, and a Certificate Course in Persian Language and Literature from the Culture House of Iran, Mumbai. Abhijit has gained substantial field experience, having participated in the archaeological excavation at Nagardhan (Nagpur), representing a cultural sequence from the Early Iron Age to the medieval period, and worked as a Trench Supervisor during the excavation at Phubgaon (Amravati), organized by the Archaeological Survey of India. He also attended the 22nd International Congress of the Rock Art Society of India, showcasing his engagement with wider archaeological discourses. His academic and field training reflect a strong commitment to archaeological research and cultural preservation.`,
      rightbottomImg: eagle,
    },
    {
      img: advisor8,
      title: "Mrs. Sarla (Rashmi) Bhirud",
      
      circleImg:Symbol2,
      subtitle: "Independent Researcher | Blogger | Writer | Archaeology & Cultural Studies Scholar",
      desc: `Sarla (Rashmi) Bhirud is a versatile scholar and writer with a rich academic and professional background spanning zoology, communication, Indology, and archaeology. She completed her B.Sc. in Zoology from M.J. College, Jalgaon and Fergusson College, Pune in 1991, followed by a Master’s in Communication Studies from the University of Pune in 1994. She gained a decade of experience as an Associate Producer at EMRC, Pune. Her deep interest in cultural heritage led her to pursue an M.A. in Indology (2015) from Tilak Maharashtra Vidyapith, Pune, and later an M.Phil. in Archaeology (2019) from Deccan College Post Graduate and Research Institute under the guidance of Dr. Pramod Joglekar. She also has hands-on experience in artifact documentation from archaeological sites during her time at Deccan College.
      Rashmi Bhirud has authored multiple research papers and published works in archaeology and cultural studies, focusing particularly on the Khandesh region, including topics such as Toranmal, Jalgaon’s archaeological landscape, and tribal memorials in Nandurbar. Her Marathi books—विविध धर्मांची ओळख, पूर्वजांचे संचित, and अदिती ते ती—are widely appreciated, and several others are in press. She actively contributes to academic conferences and writes on heritage, history, and social issues in newspapers like Lokmat and Janadesh. A committed poet, she has published four poetry collections each in Hindi/Urdu and Marathi. Her work reflects a deep commitment to cultural preservation, regional history, and community engagement through both scholarship and creative writing.`,
      bottomImg: Peacock,
  },
  ];

  return (
    <>
      <Header />
      <AboutIntro />
  

      <section className="about-section">
     <div className="vertical-line">
  {/* Big Top Circle */}
  <div className="circle top-circle">
    <img src={Sym} alt="Top Icon" />
  </div>

  {/* Circles for Mission, Vision, Values (3 total) */}
  {[...Array(3)].map((_, i) => (
    <div key={`mission-circle-${i}`} className="circle mission-circle">
      <img src={timelineData[i]?.circleImg || Symbol} alt={`mission-${i}`} />
    </div>
  ))}

  {/* Circles aligned with timeline cards (except last two) */}
  {timelineData.map((item, index) => {
    if (index < 1 || index >= timelineData.length - 2) return null;
    return (
      <div key={`timeline-circle-${index}`} className="circle timeline-circle">
        <img src={item.circleImg} alt={`circle-${index}`} />
      </div>
    );
  })}
</div>



     

        <div className="content-wrapper">
          {/* --- Mission Section --- */}
          <div className="card mission-card">
               <div className="Mission-img">
                      <img src={Varasalogo2} alt="Compass Rose" className="compass-rose-image" />
                  </div>
                  <h4>Association for Cultural Heritage and Archaeology</h4>
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
            <button className="know-more-btn">Know More</button>
          </div>

          {/* --- Vision Section --- */}
          <div className="card vision-card">
            <h2>Our Vision</h2>
            <p>
              To initiate collaborative short and long-term research in archaeology, art, architecture,
              history, and cultural heritage management by connecting institutions, universities,
              museums, and archaeological departments across India and abroad.
            </p>
          </div>

          {/* --- Core Values Section --- */}
          <div className="card values-card">
            <h2>Core Values</h2>
            <div className="values-grid">
              <div className="value-item">Integrity in Research</div>
              <div className="value-item">Respect for Cultural Diversity</div>
              <div className="compass-rose-container">
                <img src={Star} alt="Compass Rose" className="compass-rose-image" />
              </div>
              <div className="value-item">Collaboration & Partnership</div>
              <div className="value-item">Sustainability in Conservation</div>
            </div>
          </div>

        
        {/* --- Timeline Section --- */}
{/* --- Timeline Section --- */}
{timelineData.map((item, index) => {
  const isLastThree = index >= timelineData.length - 3;
  const isFirstThree = index < 3;
  const isLastCard = index === timelineData.length - 1;

  return (
    <React.Fragment key={index}>
      <div className="card timeline-card">
        {/* LEFT PILLAR OR PLACEHOLDER */}
       {item.sideImg ? (
  <div className="pillar-holder">
    <img src={item.sideImg} alt="side" className={`pillar-img ${item.pillarClass || ''}`} />
  </div>
) : (
  <div className="pillar-placeholder"></div>
)}

        {/* RIGHT CONTENT */}
        <div className="timeline-content">
          {index === 0 && <h2 className="our-team-heading">Our Team</h2>}

          <div className="timeline-photo-container">
            <div className={`photo-circle ${isLastThree ? "circle-shape" : ""}`}>
              <img src={item.img} alt={item.title} className="timeline-photo" />
            </div>

            {(isFirstThree || isLastCard) && (
              <div className="ink-bottle">
                <img src={inkbottle} alt="ink" />
              </div>
            )}

            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-subtitle">{item.subtitle}</p>
          </div>

          <p
            className="timeline-desc"
            dangerouslySetInnerHTML={{
              __html: item.desc.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
            }}
          />

        {item.bottomImg && (
  <div
    className={`timeline-bottom-img ${
      index === timelineData.length - 1 ? "last-card-bottom" : ""
    } ${item.bottomImg === tiger1 ? "tiger1-img" : ""}
      ${item.bottomImg === tiger2 ? "tiger2-img" : ""}`}
  >
    <img src={item.bottomImg} alt="bottom decoration" />
  </div>
)}


          {/* Right-side Image */}
          {item.rightbottomImg && (
            <div
              className={`timeline-right-img ${
                item.rightbottomImg.includes("Bull")
                  ? "bull-image"
                  : item.rightbottomImg.includes("eagle")
                  ? "eagle-image"
                  : ""
              } ${index === timelineData.length - 1 ? "last-card-bottom" : ""}`}
            >
              <img src={item.rightbottomImg} alt="right decoration" />
            </div>
          )}
        </div>
      </div>

      {/* --- HORIZONTAL YELLOW BAR BELOW THE VERTICAL LINE --- */}
      {index === 0 && <div className="horizontal-yellow-lin"></div>}
      {index === 0 && <div className="horizontal-yellow-line"></div>}
    </React.Fragment>
  );
})}
</div>
</section>

{/* Bottom yellow divider + footer section */}
<div className="yellow-divider"></div>
<HeritageBanner />
<Footer />

    </>
  );
}
