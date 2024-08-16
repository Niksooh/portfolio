import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ButtonMailto from "../components/Buttons/Mailito";
import ButtonLinkedIn from '../components/Buttons/LinkedIn';
import ButtonGithub from '../components/Buttons/Github';
import '../styles/Pages/ContactStyle.css'


export default function Contact() {
    return (

            <section className="contactContainer">
                <div className='contact'>
                    <h1>Contact</h1>
                    <ButtonMailto
                        mailto="mailto:no-reply@example.com"
                        label={<FontAwesomeIcon icon={faEnvelope} style={{ width: '70px', height: '70px', color: ' #1C3464' }} />}
                    /></div>
                <div className='rs'>
                    <h1>Réseaux sociaux</h1>
                    <ButtonLinkedIn
                        linkedin="https://www.linkedin.com/in/dymitri-thomas-a16765296/"
                        label={<FontAwesomeIcon icon={faLinkedin} style={{ width: '80px', height: '80px', color: ' #1C3464' }} />}
                    />
                </div>
                <div className='github'>
                    <h1>Github</h1>
                    <ButtonGithub
                        github="https://github.com/Niksooh?tab=repositories"
                        label={<FontAwesomeIcon icon={faGithub} style={{ width: '80px', height: '80px', color: '#1C3464' }} />}
                    />
                </div>
            </section>
    )
}