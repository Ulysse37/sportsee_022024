import { useState } from 'react';
import NavBar from '../NavBar/Navbar';
import SideBar from '../SideBar/SideBar';
import App from '../../App';

function PageContainer() {
  const [isMockData, setIsMockData] = useState(true);
  const toggleData = () => { // Fonction pour basculer entre les données mockées et celles de l'API
    setIsMockData(prevState => !prevState); // Inverse la valeur actuelle de isMockData
  }

  const [userId, setUserId] = useState(12); // Id de l'utilisateur par défaut = 12
  const changeUser = (newUserId) => { // Bascule entre les utilisateurs 12 et 18
    setUserId(newUserId);
  }
  const getCurrentUserId = () => { // Renvoie l'userId actuel
    return userId;
  }

  return (
    <div className='page-container'>
      <NavBar toggleData={toggleData} changeUser={changeUser} getCurrentUserId={getCurrentUserId} />
      <SideBar />
      <App isMockData={isMockData} getCurrentUserId={getCurrentUserId} />
    </div>
  );
}

export default PageContainer;
