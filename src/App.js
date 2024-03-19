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

import { getUserData } from './assets/services';
import { getUserActivity } from './assets/services';
import { getUserAverageSessions } from './assets/services';
import { getUserPerformance } from './assets/services';

const userId = 12;

const userData = await getUserData(userId);
const activityData = await getUserActivity(userId);
const averageSessionsData = await getUserAverageSessions(userId);
const performanceData = await getUserPerformance(userId);
console.log("données utilisateur", userData);
console.log("activité utilisateur", activityData);
console.log("durée session utilisateur", averageSessionsData);
console.log("performance utilisateur" ,performanceData);

function App() {
  
  return (
    <main>
      <Banner name={USER_MAIN_DATA[0].userInfos.firstName} text="Félicitations ! Vous avez explosé vos objectifs hier 👏" />
      <KeyInfoCard item={USER_MAIN_DATA[0]} />
      <BarChartComponent data={USER_ACTIVITY[0]} />
      <div className='bottom-graph-container'>
        <LineChartComponent />
        <RadarChartComponent />
        <PieChartComponent data={USER_MAIN_DATA[0]} />
      </div>
    </main>
  );
}

export default App;
