import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🖥️",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "MySQL"],
    },
    {
      title: "Programming",
      icon: "💻",
      skills: ["C++", "DSA"],
    },
    {
      title: "Tools",
      icon: "🛠️",
      skills: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <p className="section-tag">MY SKILLS</p>

        <h2>
          Technologies I <span>Work With</span>
        </h2>

        <p>
          Technologies and tools I use to build modern,
          scalable and responsive web applications.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-card-header">
              <div className="skill-icon" aria-hidden="true">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
            </div>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;