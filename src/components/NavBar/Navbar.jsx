import './navbar.css';
import logo from "../../assets/sportsee-logo.svg";

function NavBar({ getMockStatut, toggleData, changeApiUser, getCurrentApiUserId, toggleMockUser, getCurrentMockUser }) {

  const handleSettingClick = (event) => {
    console.log("handleSettingClick"); 
    event.preventDefault(); // empêche le rechargement de la page au clic sur le lien
    toggleData(); // Appelle la fonction de basculement des données du composant App
  };
  const handleProfileClick = (event) => {
    event.preventDefault(); // empêche le rechargement de la page au clic
  
    if (getMockStatut() === true) { // Si on est dans le cas des données mockées
      if (getCurrentMockUser() === 0) { // que l'utilisateur est le 1er du tableau
        toggleMockUser(1); // on bascule vers l'utilisateur 2
      } else {
        toggleMockUser(0); // sinon on bascule vers l'utilisateur 1
      }
    } else { // Si on est dans le cas des données de l'API 
      if (getCurrentApiUserId() === 12) { // que l'utilisateur a l'userid 12
        changeApiUser(18); // on bascule vers l'utilisateur 18
      } else {
        changeApiUser(12); // sinon on bascule vers l'utilisateur 12
      }
    }
  };
  
  return (
    <nav className='navbar'>
      <img className='navbar-logo' src={logo} alt='logo SportSee' />
      <ul>
        <li>
          <a href='/'>Accueil</a>
        </li>
        <li>
          <a href='/' onClick={handleProfileClick} >Profil</a>
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
