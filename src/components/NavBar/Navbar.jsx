import './navbar.css';
import logo from "../../assets/sportsee-logo.svg";

function NavBar() {

  return (
    <nav className='navbar'>
      <img className='navbar-logo' src={logo} alt='logo SportSee' />
      <ul>
        <a href='/'>
          <li>Accueil</li>
        </a>
        <a href='/'>
          <li>Profil</li>
        </a>
        <a href='/'>
          <li>Réglage</li>
        </a>
        <a href='/'>
          <li>Communauté</li>
        </a>
      </ul>
    </nav>
  )
}

export default NavBar;
