import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "MySQL"],
    },
    {
      title: "Programming",
      skills: ["C++", "DSA"],
    },
    {
      title: "Tools",
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
          Technologies and tools that I use to build
          modern, scalable and responsive web applications.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <h3>{category.title}</h3>

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