import { useState } from "react";
import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import "./App.css";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeFilter)
        );

  return (
    <div className="portfolio-react">
      <h1>Mes projets</h1>

      <div className="filters">
        <button onClick={() => setActiveFilter("all")}>Tous</button>
        <button onClick={() => setActiveFilter("dev")}>
          Développement
        </button>
        <button onClick={() => setActiveFilter("test")}>
          Test
        </button>
        <button onClick={() => setActiveFilter("gestion")}>
          Gestion de projet
        </button>
      </div>

    <div
  className={`projects-grid ${
    filteredProjects.length % 3 === 1 ? "one-left" : ""
  }`}
>
  {filteredProjects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ))}
</div>
    </div>
  );
}

export default App;