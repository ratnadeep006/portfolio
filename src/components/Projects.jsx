import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Task Manager",
      description:
        "A full-stack task management application with authentication and task tracking.",
      tech: ["React", "Node.js", "Express", "MySQL"],
      github: "https://github.com/",
      live: "https://task-manager-frontend-one-green.vercel.app/login",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing skills, projects and experience.",
      tech: ["React", "CSS"],
      github: "https://github.com/",
      live: "https://",
    },
    {
      title: "E-Commerce UI",
      description:
        "Responsive e-commerce frontend with modern UI and reusable components.",
      tech: ["React", "CSS"],
      github: "https://github.com/",
      live: "https://",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>
          A collection of projects showcasing my skills and experience in web
          development.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <p className="project-number">
              {String(index + 1).padStart(2, "0")}
            </p>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.tech.map((t) => (
                <span className="tech-tag" key={t}>{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo ↗
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;