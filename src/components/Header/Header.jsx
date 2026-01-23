import React, { useState } from "react";



import logoSymbol from "../../assets/logo-symbol.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="top-bar-inner">
          <span className="brand-highlight">VĀRASĀ</span>
          Association for Cultural Heritage and Archaeology
        </div>
      </div>

      <div className="nav-bar">
        <div className="nav-inner container">
          <div className="logo-box">
            <img src={logoSymbol} alt="Varasa logo" />
          </div>

          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav
            className={`nav-links ${menuOpen ? "open" : ""}`}
            aria-label="Main Navigation"
          >
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/events">Events</a>
            <a href="/research">Research</a>
            <a href="/donations">Donate/Grants</a>
            <a href="/contact">Contact Us</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
