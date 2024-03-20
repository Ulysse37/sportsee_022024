import './navbar.css';
import logo from "../../assets/sportsee-logo.svg";

function NavBar({ toggleData, changeUser, getCurrentUserId }) {

  const handleSettingClick = (event) => {
    event.preventDefault(); // empêche le rechargement de la page au clic sur le lien
    toggleData(); // Appelle la fonction de basculement des données du composant App
  }
  const handleProfileClick = (event) => {
    event.preventDefault(); // empêche le rechargement de la page au clic
    if (getCurrentUserId() === 12) { // Bascule entre les 2 userId
      changeUser(18); // Passe de 12 à 18
    } else {
      changeUser(12); // Passe de 18 à 12
    }
  }
  return (
    <nav className='navbar'>
      <img className='navbar-logo' src={logo} alt='logo SportSee' />
      <ul>
        <li>
          <a href='/'>Accueil</a>
        </li>
        <li>
          <a href='/' onClick={handleProfileClick}>Profil</a>
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
