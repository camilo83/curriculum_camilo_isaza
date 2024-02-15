import './projects.scss';

export default function MyProjects() {
  return (
    <div className="project-container">
      <h1>My Projects</h1>
      <div className="project">
        <h2>Superkaskos</h2>
        <p>
          This project involves the development of an innovative e-commerce
          website for Superkaskos, a prominent company based in Medellín. The
          platform is designed to provide an exceptional user experience,
          allowing customers to easily browse and purchase helmets. It also
          features advanced functionalities for admin profiles, enabling
          real-time product information updates. This project marks my debut as
          a Full Stack developer, showcasing my ability to integrate frontend
          and backend solutions efficiently.
        </p>
        <div className="video-container">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/f9QZBGe7e-4"
            title="Superkaskos Project Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
