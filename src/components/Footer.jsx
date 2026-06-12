import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <h3>Ratnadeep Choyal</h3>

        <p>
          Full Stack Developer & Computer Science Engineering Student
        </p>

        <div className="footer-links">
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

        <p className="footer-copy">
          © 2026 Ratnadeep Choyal. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;