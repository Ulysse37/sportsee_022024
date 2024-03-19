import './navbar.css';
import logo from "../../assets/sportsee-logo.svg";

function NavBar({ toggleData }) {

  const handleSettingClick = (event) => {
    event.preventDefault(); // empêche le rechargement de la page au clic sur le lien
    toggleData(); // Appelle la fonction de basculement des données du composant App
  }

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
          <a href='/' onClick={handleSettingClick}>Réglage</a>
        </li>
        <li>
          <a href='/'>Communauté</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
