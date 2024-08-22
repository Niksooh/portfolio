import { NavLink } from "react-router-dom";
import '../../styles/Components/Header.css';
import logo from '../../assets/logo/logo-transparent-png.webp';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importer FontAwesomeIcon
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Importer l'icône faBars

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <img className="image_header" src={logo} alt="Logo de Dymitri Thomas avec la mention intégrateur web" />
      <button className="hamburger" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon className= 'iconHam' icon={faBars} /> {/* Utiliser FontAwesomeIcon avec faBars */}
      </button>
      <nav className={`btnNav ${open ? "open" : ""}`}>
        <NavLink
          className={({ isActive }) => (isActive ? "navLink animatedLink activeLink" : "navLink animatedLink")}
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "navLink animatedLink activeLink" : "navLink animatedLink")}
          to="/skills"
        >
          Compétences
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "navLink animatedLink activeLink" : "navLink animatedLink")}
          to="/project"
        >
          Projets
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "navLink animatedLink activeLink" : "navLink animatedLink")}
          to="/contact"
        >
          Contact
        </NavLink>
        <a className="navLink animatedLink" href="cv_dym.pdf" target="_blank" rel="noopener noreferrer">
          CV
        </a>
      </nav>
    </header>
  );
}
