import { useSelector } from 'react-redux';
import './projects.scss';
import { RootState } from '../../store/store';

export default function MyProjects() {
  const { language } = useSelector((state: RootState) => state.languageState);

  return (
    <div className="project-container">
      {language === 'english' ? (
        <>
          <h1>My Projects</h1>
          <div className="project">
            <h2>Superkaskos</h2>
            <p>
              This project involves the development of an innovative e-commerce
              website for Superkaskos, a prominent company based in Medellín.
              The platform is designed to provide an exceptional user
              experience, allowing customers to easily browse and purchase
              helmets. It also features advanced functionalities for admin
              profiles, enabling real-time product information updates. This
              project marks my debut as a Full Stack developer, showcasing my
              ability to integrate frontend and backend solutions efficiently.
            </p>
            <div className="video-container">
              <video controls>
                <source src="./superkaskos_video.mp4" type="video/mp4" />
              </video>
            </div>
            <h2>The Alchemist Experiments Social Media</h2>
            <p>
              The Alchemist is a social network prototype for uploading and
              sharing experiments online. It is connected to an API (which I
              own) that contains a complete list of elements and a section for
              scientists that complements the page. On it, users can register
              and share their experiments. We also have an administrator profile
              that allows modifying or updating information about the element or
              the scientist, as well as deleting it.
            </p>
            <div className="image-container">
              <img src="./theAlchemist.png" alt="The Alchemist image" />
              <img src="./scientists.png" alt="The Alchemist image" />
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>Mis Proyectos</h1>
          <div className="project">
            <h2>Superkaskos</h2>
            <p>
              Este proyecto implica el desarrollo de un innovador sitio web de
              comercio electrónico para Superkaskos, una destacada empresa con
              sede en Medellín. La plataforma está diseñada para proporcionar
              una experiencia de usuario excepcional, permitiendo a los clientes
              navegar y comprar cascos fácilmente. También cuenta con
              funcionalidades avanzadas para perfiles de administrador,
              habilitando actualizaciones de información de productos en tiempo
              real. Este proyecto marca mi debut como desarrollador Full Stack,
              demostrando mi capacidad para integrar soluciones de frontend y
              backend de manera eficiente.
            </p>
            <div className="video-container">
              <video controls>
                <source src="./superkaskos_video.mp4" type="video/mp4" />
              </video>
            </div>
            <h2>The Alchemist Experiments Social Media</h2>
            <p>
              The Alchemist es un prototipo de red social para subir y compartir
              experimentos en línea. Esta conectado a una API (de la cual soy
              dueño) con el listado completo de elementos y una sección de
              cientificos que complementan la página. En ella, los usuarios
              pueden registrarse y compartir sus experimentos y contamos con un
              perfil de administrador que le perimte modificar o actualizar
              información sobre el elemento o el cientifico y de igual manera
              eliminarlo.
            </p>
            <div className="image-container">
              <img src="./theAlchemist.png" alt="The Alchemist image" />
              <img src="./scientists.png" alt="The Alchemist image" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
