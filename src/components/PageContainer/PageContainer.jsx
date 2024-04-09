import { useState } from 'react';
import NavBar from '../NavBar/Navbar';
import SideBar from '../SideBar/SideBar';
import App from '../../App';

function PageContainer() {
  const [isMockData, setIsMockData] = useState(true);
  const toggleData = () => { // Fonction pour basculer entre les données mockées et celles de l'API
    setIsMockData(prevState => !prevState); // Inverse la valeur actuelle de isMockData
  };
  const getMockStatut = () => { // Renvoie la valeur de isMockData -> savoir si on est dans le cas des données mockées ou de l'API
    return isMockData;
  };

//! gère le changement de profile entre les 2 utilisateurs dans les données mockées
  const [selectedUser, setSelectedUser] = useState(0); // utilisateur par défaut = 1er du tableau des données donc 0
  const toggleMockUser = (nextUserId) => { // Met à jour la valeur de selectedUser selon la valeur de nextUserId
    setSelectedUser(nextUserId);
  };
  const getCurrentMockUser = () => { // Renvoie la valeur de selectedUser
    return selectedUser;
  };

//! gère le changement de profile entre les 2 utilisateurs dans les données de l'API
  const [userId, setUserId] = useState(12); // Id de l'utilisateur par défaut = 12 pour l'api
  const changeApiUser = (newUserId) => { // Met à jour la valeur de setUserId selon la valeur de newUserId
    setUserId(newUserId);
  };
  const getCurrentApiUserId = () => { // Renvoie l'userId actuel
    return userId;
  };

  return (
    <div className='page-container'>
      <NavBar getMockStatut={getMockStatut} toggleData={toggleData} changeApiUser={changeApiUser} getCurrentApiUserId={getCurrentApiUserId} toggleMockUser={toggleMockUser} getCurrentMockUser={getCurrentMockUser} />
      <SideBar />
      <App isMockData={isMockData} getCurrentApiUserId={getCurrentApiUserId} getCurrentMockUser={getCurrentMockUser} />
    </div>
  );
}

export default PageContainer;
