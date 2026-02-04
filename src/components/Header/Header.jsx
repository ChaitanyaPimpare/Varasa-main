import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoSymbol from "../../assets/logo-symbol.jpg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // 🔐 Hidden admin trigger logic
  const clickCount = useRef(0);
  const timer = useRef(null);

  const handleLogoClick = () => {
    clickCount.current += 1;

    if (clickCount.current === 3) {
      navigate("/admin-login"); // ✅ React Router navigation
    }

    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      clickCount.current = 0;
    }, 1500);
  };

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
            <img
              src={logoSymbol}
              alt="Varasa logo"
              onClick={handleLogoClick}
              style={{ cursor: "pointer" }}
            />
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
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
            <Link to="/research" onClick={() => setMenuOpen(false)}>Research</Link>
            <Link to="/donations" onClick={() => setMenuOpen(false)}>Donate/Grants</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
