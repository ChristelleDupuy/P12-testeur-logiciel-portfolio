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

            <h3>Contexte</h3>
            <p>{selectedProject.details.resume}</p>

            <h3>Objectif</h3>
            <p>{selectedProject.details.objectif}</p>

            <h3>Réalisations</h3>
            <ul>
              {selectedProject.details.travail.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {selectedProject.details.learned && (
              <>
                <h3>Ce que j’ai appris</h3>
                <ul>
                  {selectedProject.details.learned.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {selectedProject.details.stack && (
              <>
                <h3>Stack technique</h3>
                <p>{selectedProject.details.stack.join(", ")}</p>
              </>
            )}

            <div style={{ marginTop: "20px" }}>
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="open-modal"
                >
                  Voir le code
                </a>
              )}

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="open-modal"
                  style={{ marginLeft: "10px" }}
                >
                  Voir le site
                </a>
              )}

              {selectedProject.qa && (
                <a
                  href={selectedProject.qa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="open-modal"
                  style={{ marginLeft: "10px" }}
                >
                  Dossier de tests
                </a>
              )}

              {selectedProject.kanban && (
                <a
                  href={selectedProject.kanban}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="open-modal"
                  style={{ marginLeft: "10px" }}
                >
                  Kanban (Trello)
                </a>
               )}

{selectedProject.docs && (
  <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
    {selectedProject.docs.specs && (
      <a href={selectedProject.docs.specs} target="_blank" className="open-modal">
        Spécifications
      </a>
    )}

    {selectedProject.docs.veille && (
      <a
        href={selectedProject.docs.veille}
        target="_blank"
        className="open-modal"
        style={{ marginLeft: "10px" }}
      >
        Veille
      </a>
    )}

    {selectedProject.docs.presentation && (
      <a
        href={selectedProject.docs.presentation}
        target="_blank"
        className="open-modal"
        style={{ marginLeft: "10px" }}
      >
        Présentation
      </a>
    )}
  </div>
)}

{selectedProject.docs && (
  <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "10px" }}>

    {selectedProject.docs.exigences && (
      <a href={selectedProject.docs.exigences} target="_blank" className="open-modal">
        Revue des exigences
      </a>
    )}

    {selectedProject.docs.strategie && (
      <a href={selectedProject.docs.strategie} target="_blank" className="open-modal">
        Stratégie de test
      </a>
    )}

    {selectedProject.docs.recette && (
      <a href={selectedProject.docs.recette} target="_blank" className="open-modal">
        Cahier de recette
      </a>
    )}

  </div>
)}

{selectedProject.isFormation && (
  <p style={{ fontSize: "0.9rem", opacity: 0.7, marginTop: "10px" }}>
    Projet réalisé dans le cadre de ma formation OpenClassrooms
  </p>
)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}