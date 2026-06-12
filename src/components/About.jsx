import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-left">
          <div className="about-card">
            <h3>Education</h3>

            <div className="education-item">
              <h4>B.Tech - Computer Science Engineering</h4>
              <p>Malwa Institute of Science and Technology, Indore</p>
              <span>2023 - 2027</span>
            </div>

            <div className="education-item">
              <h4>Higher Secondary (12th)</h4>
              <p>Lions Higher Secondary School, Manawar</p>
              <span>76.8% • 2023</span>
            </div>

            <div className="education-item">
              <h4>Secondary (10th)</h4>
              <p>Paradise Higher School, Manawar</p>
              <span>72% • 2021</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <p className="section-tag">ABOUT ME</p>

          <h2>
            Full Stack Developer &
            <span> CSE Student</span>
          </h2>

          <p className="about-text">
            I am Ratnadeep Choyal, a Computer Science Engineering
            student at Malwa Institute of Science and Technology,
            Indore, with an expected graduation year of 2027.
          </p>

          <p className="about-text">
            I enjoy building responsive web applications using
            React, Node.js, and MySQL. Alongside development,
            I actively practice Data Structures and Algorithms
            in C++ to strengthen my problem-solving skills and
            software engineering fundamentals.
          </p>

          <div className="social-links">
            <a
              href="https://github.com/ratnadeep006"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ratnadeep-choyal-553100376/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/ratnadeepchoyal/"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>
          </div>

          <div className="about-buttons">
            <a
              href="/resume.pdf"
              target="_blank"
              className="resume-btn"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="contact-btn"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;