import '../styles/Pages/SkillStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faHandFist } from '@fortawesome/free-solid-svg-icons';



export default function Skills() {
    return (

            <section className="skillsContainer">
                <h1>Mes compétences</h1>

                <div className="card langage">
                    <h2 className='H2'>Outils & Langages</h2>
                    <div className="icons-container">
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faHtml5} className="icon" />
                            <p>HTML5</p>
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faCss3Alt} className="icon" />
                            <p>CSS3</p>
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faJs} className="icon" />
                            <p>JavaScript</p>
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faReact} className="icon" />
                            <p>React</p>
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faBootstrap} className="icon" />
                            <p>Bootstrap</p>
                        </div>
                    </div>
                </div>

                <div className="card environment">
                    <h2 className='H2'>Environnement</h2>
                    <div className="icons-container">
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faCode} className="icon" />
                            <p>VS Code</p>
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                            <p>Github</p>
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faTrello} className="icon" />
                            <p>Trello</p>
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faFigma} className="icon" />
                            <p>Figma</p>
                        </div>
                    </div>
                </div>

                <div className="card softSkills">
                    <h2 className='H2'>Soft Skills</h2>
                    <div className="icons-container">
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faHandshake} className="icon" />
                            <p>Travail en équipe</p>
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faQuestion} className="icon" />
                            <p>Curiosité</p>
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faBookOpen} className="icon" />
                            <p>Aime apprendre</p>
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faHandFist} className="icon" />
                            <p>Autonome</p>
                        </div>
                    </div>
                </div>
            </section>
    );
}