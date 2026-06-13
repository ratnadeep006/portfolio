import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo">RC</a>

        {/* Desktop links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#contact" className="nav-btn">Hire Me →</a>

        {/* Hamburger */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile dropdown — outside <header> so it overlays correctly */}
      <div className={`nav-mobile-menu ${menuOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} onClick={closeMenu}>
            {link.name} <span className="menu-arrow">›</span>
          </a>
        ))}
        <div className="menu-divider"></div>
        <a href="#contact" className="menu-cta" onClick={closeMenu}>
          Hire Me →
        </a>
      </div>
    </>
  );
}

export default Navbar;