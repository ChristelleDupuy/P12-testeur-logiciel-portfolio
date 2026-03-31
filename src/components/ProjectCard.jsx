export default function ProjectCard({ title, context, image, onClick }) {
    return (
      <div className="project-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{context}</p>
  
        <button className="open-modal" onClick={onClick}>
          En savoir plus
        </button>
      </div>
    );
  }