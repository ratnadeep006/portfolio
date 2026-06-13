import "./Footer.css";

const socialLinks = [
  { label: "GitHub",   href: "https://github.com/ratnadeep006" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ratnadeep-choyal-553100376/" },
  { label: "LeetCode", href: "https://leetcode.com/u/ratnadeepchoyal/" },
];

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Brand */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">RC</a>
          <p className="footer-tagline">
            Full Stack Developer &amp; CS Engineering Student
          </p>
          <p className="footer-location">📍 Indore, India</p>
        </div>

        {/* Nav */}
        <div className="footer-col">
          <p className="footer-col-title">Navigation</p>
          <ul>
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="footer-col">
          <p className="footer-col-title">Find Me On</p>
          <ul>
            {socialLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © 2026 Ratnadeep Choyal. All rights reserved.
        </p>
        <p className="footer-made">
          Built with React &amp; ❤️
        </p>
      </div>
    </footer>
  );
}

export default Footer;