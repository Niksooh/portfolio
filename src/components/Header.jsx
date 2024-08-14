import { NavLink } from "react-router-dom";
import '../styles/headerStyle.css'
import { useReactToPrint } from 'react-to-print';
import  '../assets/logo/logo-transparent-png.webp'

export function Header() {

  return <>
    <header>
      <img src="../assets/logo/logo-transparent-png.webp" alt="Logo de Dymitri Thomas avec la mention intégrateur web" />
      <nav className='btnNav'>
        <NavLink className={({ isActive }) => (isActive ? "navLink activeLink" : "navLink")} to="/">Accueil</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "navLink activeLink" : "navLink")} to="/a définir">A propos</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "navLink activeLink" : "navLink")} to="/a définir">CV</NavLink>{/* importer pdf */}
        <NavLink className={({ isActive }) => (isActive ? "navLink activeLink" : "navLink")} to="/a définir">Contact</NavLink>{/* Mettre lien vers mail */}
      </nav>
    </header>
  </>
}

