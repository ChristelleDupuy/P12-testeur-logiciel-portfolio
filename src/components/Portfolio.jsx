import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          project.category.includes(filter)
        );

  return (
    <>
      
      <div className="portfolio-filters">
  <button
    className={filter === "dev" ? "active" : ""}
    onClick={() => setFilter("dev")}
  >
    Développement
  </button>

  <button
    className={filter === "test" ? "active" : ""}
    onClick={() => setFilter("test")}
  >
    Test
  </button>

  <button
    className={filter === "gestion" ? "active" : ""}
    onClick={() => setFilter("gestion")}
  >
    Gestion de projet
  </button>

  <button
    className={filter === "all" ? "active" : ""}
    onClick={() => setFilter("all")}
  >
    Tous
  </button>
</div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay active">
          <div className="custom-modal">
            <span
              className="close-modal"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </span>

            <h2>{selectedProject.title}</h2>

            <h3>Résumé du projet</h3>
            <p>{selectedProject.details.resume}</p>

            <h3>Objectif</h3>
            <p>{selectedProject.details.objectif}</p>

            <h3>Travail réalisé</h3>
            <ul>
              {selectedProject.details.travail.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}