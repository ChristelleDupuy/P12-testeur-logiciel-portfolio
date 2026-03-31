import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className="projects-grid">
        {projects.map((project, index) => (
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