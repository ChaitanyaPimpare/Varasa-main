import React from "react";
import "./ContactPage.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ResearchHero from "../components/ResearchHero/ResearchHero";
import logoSymbol from "../assets/logo-symbol.png";

import bg from "../assets/heritageBg.png";  // ✅ optional background

export default function ContactPage() {
  return (
    <>
      <Header />
 <ResearchHero />
      <section className="contact-page">
        <div className="contact-card">
          
          {/* Top Logo */}
          <div className="contact-top">
            <img src={logoSymbol} alt="Varasa Logo" className="contact-logo" />
            <p className="contact-subtitle">
              Association for Cultural Heritage and Archaeology
            </p>
          </div>

          {/* Title Bar */}
          <div className="contact-title-bar">Contact Us</div>

          {/* Content */}
          <div className="contact-content">
            
            {/* Left Side */}
            <div
              className="contact-left"
              style={{
                backgroundImage: `url(${bg})`,
              }}
            >
              <div className="contact-left-circle">
                <h2>Experience Varasa’s</h2>
                <p>
                  Cultural Heritage <br /> & Archaeology
                </p>
              </div>
            </div>

            {/* Right Side Form */}
            <form className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="" />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" placeholder="" />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder=""></textarea>
              </div>

              <p className="privacy-note">
                * I consent to the processing of my personal data (Privacy Policy)
              </p>

              <button type="submit" className="submit-btn">
                SUBMIT
              </button>
            </form>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
