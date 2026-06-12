import "./Navbar.css";

function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        RC
      </a>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-btn">
        Hire Me
      </a>
    </header>
  );
}

export default Navbar;