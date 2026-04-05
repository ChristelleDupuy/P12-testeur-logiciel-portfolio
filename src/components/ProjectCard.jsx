export default function ProjectCard({ title, context, image, onClick }) {
    return (
      <div className="project-card">
  
        <div className="project-image-wrapper">
          <img src={image} alt={title} className="project-image" />
        </div>
  
        <div className="project-content">
          <h3>{title}</h3>
          <p>{context}</p>
        </div>
  
        <button className="open-modal" onClick={onClick}>
          En savoir plus
        </button>
  
      </div>
    );
  }