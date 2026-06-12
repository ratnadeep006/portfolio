import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <p className="section-tag">CONTACT</p>

        <h2>
          Let's <span>Connect</span>
        </h2>

        <p>
          Feel free to reach out for collaborations,
          opportunities, or just to say hello.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <h3>Get In Touch</h3>

          <div className="contact-links">
            <a
              href="mailto:ratnadepchoyal@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              📧 Email
            </a>

            <a
              href="https://github.com/ratnadeep006"
              target="_blank"
              rel="noreferrer"
            >
              💻 GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ratnadeep-choyal-553100376/"
              target="_blank"
              rel="noreferrer"
            >
              🔗 LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/ratnadeepchoyal/"
              target="_blank"
              rel="noreferrer"
            >
              🏆 LeetCode
            </a>
          </div>
        </div>

        <div className="contact-message">
          <h3>Open To Opportunities</h3>

          <p>
            I am currently pursuing B.Tech in Computer
            Science Engineering and actively looking
            for opportunities to learn, collaborate,
            and contribute to meaningful projects.
          </p>

          <a
            href="mailto:ratnadepchoyal@gmail.com"
            className="contact-btn"
          >
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;