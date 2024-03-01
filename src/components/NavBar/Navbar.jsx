import './navbar.css';
import logo from "../../assets/sportsee-logo.svg";

function NavBar() {

  return (
    <nav className='navbar'>
      <img className='navbar-logo' src={logo} alt='logo SportSee' />
      <ul>
        <li>
          <a href='/'>Accueil</a>
        </li>
        <li>
          <a href='/'>Profil</a>
        </li>
        <li>
          <a href='/'>Réglage</a>
        </li>
        <li>
          <a href='/'>Communauté</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
