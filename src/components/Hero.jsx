import "./Hero.css";
import developerImg from "../assets/images/developer-3d.png";

function Hero({ name = "Your Name", role = "Full Stack Developer" }) {
  return (
    <section className="hero" id="home" aria-label="Hero section">
      <div className="hero-left">
        <p className="hero-intro">Hello, I'm</p>

        <h1 className="hero-name">{name}</h1>

        <h2 className="hero-role">{role}</h2>

        <p className="hero-description">
          Full Stack Developer and Engineering Student passionate about building
          modern web applications that combine intuitive user experiences with
          robust backend systems. I work with React, Node.js, Express.js, and
          MySQL, focusing on clean code and scalable architecture.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-wrapper">
          <img
            src={developerImg}
            alt={`${name} developer illustration`}
            className="hero-image"
            loading="lazy"
          />
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;