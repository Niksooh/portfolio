import imgBooki from '../assets/photo/booki.webp';
import imgOhmyfood from '../assets/photo/ohmyfood.webp';
import imgSophieBluel from '../assets/photo/sophie_bluel.webp';
import imgKasa from '../assets/photo/kasa.webp';
import imgNinaCarducci from '../assets/photo/nina_carducci.webp';
import img724Event from '../assets/photo/724events.webp';
import '../styles/Pages/ProjectStyle.css'

const projects = [
  {
    id: "booki",
    title: "Booki - Agence de voyage",
    cover: imgBooki,
    description: "Création de la page d'accueil d'une agence de voyage",
    tool: "Outil : HTML5 et CSS3",
    link: ""
  },
  {
    id: "ohmyfood",
    title: "OhMyFooD - Application de commande en ligne",
    cover: imgOhmyfood,
    description: "Améliorez l'interface d'un site mobile avec des animations CSS",
    tool: "Outil : HTML5 et SASS",
    link: "https://niksooh.github.io/Ohmyfood-P4/"
  },
  {
    id: "sophie_bluel",
    title: "Sophie Bluel - Photographe",
    cover: imgSophieBluel,
    description: "Création d'une page web dynamique",
    tool: "Outil : HTML5, CSS3 et JavaScript",
    link: "https://github.com/Niksooh/P6_sophie_bluel.git"
  },
  {
    id: "kasa",
    title: "Kasa - Agence immobillière",
    cover: imgKasa,
    description: "Création d'une application web de location immobilière",
    tool: "Outil : HTML5, CSS3, JavaScript et React",
    link: "https://github.com/Niksooh/kasa-P8.git"
  },
  {
    id: "nina_carducci",
    title: "Nina Carducci - Photographe",
    cover: imgNinaCarducci,
    description: "Optimisation du référencement d'un site de photographe",
    tool: "Outil : HTML5, CSS3, Lighthouse, Google Rich Snippet et Wave",
    link: "https://github.com/Niksooh/p9-ninacarducci.git"
  },
  {
    id: "724events",
    title: "724Events - Agence d'organisation dévènement",
    cover: img724Event,
    description: "Débuggez le site d'une agence d'événementiel",
    tool: "Outil : HTML5, CSS3, JavaScript, React et Chrome DevTools",
    link: "https://github.com/Niksooh/p10_724events.git"
  }
];

const ProjectList = () => (
  <>
    <h1>Mes projets réalisés</h1>
    <div className='cardsContainer'>
      {projects.map((project) => (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className='cardsLink' key={project.id}>
          <div className='cards'>
            <h2>{project.title}</h2>
            <img className='cardsImg' src={project.cover} alt={project.title} />
            <p>{project.description}</p>
            <p>{project.tool}</p>
          </div>
        </a>
      ))}
    </div>
  </>
);

export default ProjectList;
