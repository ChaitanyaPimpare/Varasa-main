import React from "react";

import footerLogo from "../../assets/footerLogo.png";



export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={footerLogo} alt="Varasa Logo" className="logo-img" />
            <p>
              VARASA Foundation is a non-profit organization dedicated to cultural
              heritage preservation, archaeological research, and awareness initiatives.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#research">Research</a></li>
              <li><a href="#donate">Donate</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Details</h4>
            <p>
              VARASA Foundation <br />
              A-903 Ruturang Society, behind Paranjape School <br />
              Pune, Maharashtra – 411038, India
            </p>
            <p><strong>Phone:</strong> +91-9881409532</p>
            <p><strong>Email:</strong> varasa.acha@gmail.com</p>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="/">Facebook</a></li>
              <li><a href="/">Instagram</a></li>
              <li><a href="/">Twitter</a></li>
              <li><a href="/">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="footer-bottom-bar">
        <div className="footer-bottom">
          <span className="brand-highlight">VĀRASĀ</span> © 2025 VARASA Foundation.  
          All Rights Reserved & Design by Laxman Dagade
        </div>
      </div>
    </>
  );
}
