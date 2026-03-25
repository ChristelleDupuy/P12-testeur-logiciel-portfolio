export default function About() {
    return (
      <section id="about" className="container mt-5">
        <h2 className="text-center accent-title">À propos</h2>
  
        <div className="row align-items-center mt-4">
          <div className="col-md-4 text-center">
            <img
              src="/images/ta-photo.png"
              alt="Photo Christelle"
              className="imageAboutPage"
            />
          </div>
  
          <div className="col-md-8">
            <p>
              Développeuse front-end et consultante QA, je combine rigueur
              technique et sens du détail pour concevoir des interfaces fiables,
              performantes et centrées utilisateur.
            </p>
          </div>
        </div>
      </section>
    );
  }