import { useState } from 'react';
import NavBar from '../NavBar/Navbar';
import SideBar from '../SideBar/SideBar';
import App from '../../App';

function PageContainer() {
  const [isMockData, setIsMockData] = useState(true);

  const toggleData = () => { // Fonction pour basculer entre les données mockées et celles de l'API
    setIsMockData(prevState => !prevState); // Inverse la valeur actuelle de isMockData
  }

  return (
    <div className='page-container'>
      <NavBar toggleData={toggleData} />
      <SideBar />
      <App isMockData={isMockData}/>
    </div>
  );
}

export default PageContainer;
