import '../../styles/Components/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ButtonMailto from "../Buttons/Mailito";
import ButtonLinkedIn from '../Buttons/LinkedIn';
import ButtonGithub from '../Buttons/Github';

export default function Footer() {
    return (
        <footer>
            <p>© Portfolio - THOMAS Dymitri. All rights reserved</p>
            <div className='social-links'>
                <ButtonMailto
                    mailto="mailto:no-reply@example.com"
                    label={<FontAwesomeIcon icon={faEnvelope} style={{ width: '30px', height: '30px', color: ' #1C3464' }} />}
                />
                <ButtonLinkedIn
                    linkedin="https://www.linkedin.com/in/dymitri-thomas-a16765296/"
                    label={<FontAwesomeIcon icon={faLinkedin} style={{ width: '30px', height: '30px', color: ' #1C3464' }} />}
                />
                <ButtonGithub
                    github="https://github.com/Niksooh?tab=repositories"
                    label={<FontAwesomeIcon icon={faGithub} style={{ width: '30px', height: '30px', color: '#1C3464' }} />}
                />
            </div>
        </footer>
    );
}
