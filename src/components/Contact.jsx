import "./Contact.css";

const contactLinks = [
  {
    label: "Email",
    value: "ratnadepchoyal@gmail.com",
    href: "mailto:ratnadepchoyal@gmail.com",
    icon: "✉",
  },
  {
    label: "GitHub",
    value: "github.com/ratnadeep006",
    href: "https://github.com/ratnadeep006",
    icon: "◈",
  },
  {
    label: "LinkedIn",
    value: "Ratnadeep Choyal",
    href: "https://www.linkedin.com/in/ratnadeep-choyal-553100376/",
    icon: "in",
  },
  {
    label: "LeetCode",
    value: "ratnadeepchoyal",
    href: "https://leetcode.com/u/ratnadeepchoyal/",
    icon: "{}",
  },
];

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-header">
        <p className="section-tag">CONTACT</p>
        <h2>Let's <span>Connect</span></h2>
        <p>
          Feel free to reach out for collaborations,
          opportunities, or just to say hello.
        </p>
      </div>

      <div className="contact-container">

        {/* Left — links */}
        <div className="contact-card">
          <h3>Get In Touch</h3>
          <div className="contact-links">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-row"
              >
                <span className="link-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="link-text">
                  <span className="link-label">{item.label}</span>
                  <span className="link-value">{item.value}</span>
                </span>
                <span className="link-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — message */}
        <div className="contact-message">
          <div className="message-badge">Available for work</div>
          <h3>Open To Opportunities</h3>
          <p>
            I'm currently pursuing B.Tech in Computer Science Engineering
            and actively looking for opportunities to learn, collaborate,
            and contribute to meaningful projects.
          </p>
          <ul className="open-to-list">
            <li>Internships</li>
            <li>Freelance projects</li>
            <li>Open source collaboration</li>
          </ul>
          <a
            href="mailto:ratnadepchoyal@gmail.com"
            className="contact-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send Message →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;