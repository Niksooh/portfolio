import { NavLink } from "react-router-dom";
import '../../styles/Components/Header.css';
import logo from '../../assets/logo/logo-transparent-png.webp';


export default function Header() {
  return (
    <header>
      <img className="image_header" src={logo} alt="Logo de Dymitri Thomas avec la mention intégrateur web" />
      <nav className='btnNav'>
        <NavLink className={({ isActive }) => (isActive ? "navLink animatedLink activeLink" : "navLink animatedLink")} to="/">Accueil</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "navLink animatedLink activeLink" : "navLink animatedLink")} to="/skills">Compétences</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "navLink animatedLink activeLink" : "navLink animatedLink")} to="/project">Projets</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "navLink animatedLink activeLink" : "navLink animatedLink")} to="/contact">Contact</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "navLink animatedLink activeLink" : "navLink animatedLink")} to="/a définir">CV</NavLink> {/* importer pdf */}
      </nav>
    </header>
  );
}