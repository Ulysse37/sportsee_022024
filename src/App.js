import './App.css';


import { USER_MAIN_DATA } from './assets/data.js';
import { USER_ACTIVITY } from './assets/data.js';
/* import { USER_AVERAGE_SESSIONS } from './assets/data.js';
import { USER_PERFORMANCE } from './assets/data.js'; */

import Banner from "./components/Banner/Banner";
import BarChartComponent from './components/BarChart/BarChart';
import KeyInfoCard from "./components/KeyInfoCard/KeyInfoCard";
import LineChartComponent from "./components/LineChart/LineChart";
import RadarChartComponent from './components/RadarChart/RadarChart';
import PieChartComponent from './components/PieChart/PieChart';

function App() {
  
  return (
    <main>
      <section className='central-container'>
        <Banner name={USER_MAIN_DATA[0].userInfos.firstName} text="Félicitations ! Vous avez explosé vos objectifs hier 👏" />
        <BarChartComponent data={USER_ACTIVITY[0]} />
        <div className='bottom-graph-container'>
          <LineChartComponent />
          <RadarChartComponent />
          <PieChartComponent data={USER_MAIN_DATA[0]} />
        </div>
      </section>
      <KeyInfoCard item={USER_MAIN_DATA[0]} />
    </main>
  );
}

export default App;
