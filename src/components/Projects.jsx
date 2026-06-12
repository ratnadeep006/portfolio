import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Task Manager",
      description:
        "A full-stack task management application with authentication and task tracking.",
      tech: "React, Node.js, Express, MySQL",
      github: "#",
      live: "#",
    },

    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing skills, projects and experience.",
      tech: "React, CSS",
      github: "#",
      live: "#",
    },

    {
      title: "E-Commerce UI",
      description:
        "Responsive e-commerce frontend with modern UI and reusable components.",
      tech: "React, CSS",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      className="projects"
      id="projects"
    >
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>
          A collection of projects showcasing my
          skills and experience in web development.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.tech}</span>

            <div className="project-links">
              <a href={project.github}>
                GitHub
              </a>

              <a href={project.live}>
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;