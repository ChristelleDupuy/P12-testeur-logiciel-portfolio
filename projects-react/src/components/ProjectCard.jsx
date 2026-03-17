export default function ProjectCard({ project }) {
    return (
      <div className="project-card">
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.context}</p>
  
          <div className="tech-list">
            {project.tech.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }