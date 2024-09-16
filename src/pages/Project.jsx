import imgBooki from '../assets/photo/booki.webp';
import imgOhmyfood from '../assets/photo/ohmyfood.webp';
import imgSophieBluel from '../assets/photo/sophie_bluel.webp';
import imgKasa from '../assets/photo/kasa.webp';
import imgNinaCarducci from '../assets/photo/nina_carducci.webp';
import img724Event from '../assets/photo/724events.webp';
import imgArgentBank from '../assets/photo/argent_bank.webp'
import '../styles/Pages/ProjectStyle.css'

export const projects = [
  {
    id: "Argent Bank",
    title: "Argent Bank - Application bancaire",
    cover: imgArgentBank,
    description: "Implémentez le front-end d'une application bancaire        (Projet Formation)",
    tool: "Outils : HTML5, CSS3, JavaScript, React",
    link: "https://github.com/Niksooh/P11_argent_bank.git"
  },
  {
    id: "724events",
    title: "724Events - Agence d'organisation dévènement",
    cover: img724Event,
    description: "Débuggez le site d'une agence d'événementiel                    (Projet Formation)",
    tool: "Outils : HTML5, CSS3, JavaScript, React et Chrome DevTools",
    link: "https://github.com/Niksooh/p10_724events.git"
  },
  {
    id: "nina_carducci",
    title: "Nina Carducci - Photographe",
    cover: imgNinaCarducci,
    description: "Optimisation du référencement d'un site de photographe        (Projet Formation)",
    tool: "Outils : HTML5, CSS3, Lighthouse, Google Rich Snippet et Wave",
    link: "https://github.com/Niksooh/p9-ninacarducci.git"
  },
  {
    id: "kasa",
    title: "Kasa - Agence immobillière",
    cover: imgKasa,
    description: "Création d'une application web de location immobilière        (Projet Formation)",
    tool: "Outils : HTML5, CSS3, JavaScript et React",
    link: "https://github.com/Niksooh/kasa-P8.git"
  },
  {
    id: "sophie_bluel",
    title: "Sophie Bluel - Photographe",
    cover: imgSophieBluel,
    description: "Création d'une page web dynamique                    (Projet Formation)",
    tool: "Outils : HTML5, CSS3 et JavaScript",
    link: "https://github.com/Niksooh/P6_sophie_bluel.git"
  },
  {
    id: "ohmyfood",
    title: "OhMyFooD - Application de commande en ligne",
    cover: imgOhmyfood,
    description: "Améliorez l'interface d'un site mobile avec des animations CSS (Projet Formation)",
    tool: "Outils : HTML5 et SASS",
    link: "https://niksooh.github.io/Ohmyfood-P4/"
  },
  {
    id: "booki",
    title: "Booki - Agence de voyage",
    cover: imgBooki,
    description: "Création de la page d'accueil d'une agence de voyage        (Projet Formation)",
    tool: "Outils : HTML5 et CSS3",
    link: "https://niksooh.github.io/booki/"
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
