import './App.css';


import { USER_MAIN_DATA } from './assets/data.js';
/* import { USER_ACTIVITY } from './assets/data.js';
import { USER_AVERAGE_SESSIONS } from './assets/data.js';
import { USER_PERFORMANCE } from './assets/data.js'; */

import SideBar from "./components/SideBar/SideBar";
import Banner from "./components/Banner/Banner";
import KeyInfoCard from "./components/KeyInfo/KeyInfoCard.jsx";
import LineChartComponent from "./components/LineChart/LineChart";

function App() {
  
  return (
    <main>
      <SideBar />
      <div className='central-container'>
        <Banner name={USER_MAIN_DATA[0].userInfos.firstName} text="Félicitation ! Vous avez explosé vos objectifs hier 👏" />
        <KeyInfoCard item={USER_MAIN_DATA[0]} />
        <LineChartComponent />
      </div>
    </main>
  );
}

export default App;
