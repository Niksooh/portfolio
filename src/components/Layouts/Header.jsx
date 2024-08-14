import { NavLink } from "react-router-dom";
import '../../styles/Components/Header.css';
import logo from '../../assets/logo/logo-transparent-png.webp';
import ButtonMailto from "../Buttons/Mailito";

export default function Header() {
  return (
    <header>
      <img className="image_header" src={logo} alt="Logo de Dymitri Thomas avec la mention intégrateur web" />
      <nav className='btnNav'>
        <NavLink className={({ isActive }) => (isActive ? "navLink activeLink" : "navLink")} to="/">Accueil</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "navLink activeLink" : "navLink")} to="/skills">Compétences</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "navLink activeLink" : "navLink")} to="/project">Projets</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "navLink activeLink" : "navLink")} to="/a définir">CV</NavLink> {/* importer pdf */}
        <ButtonMailto mailto="mailto:no-reply@example.com" label="Contact" />
      </nav>
    </header>
  );
}
