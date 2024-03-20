import './App.css';
import { useState, useEffect } from 'react';
// components
import Banner from "./components/Banner/Banner";
import BarChartComponent from './components/BarChart/BarChart';
import KeyInfoCard from "./components/KeyInfoCard/KeyInfoCard";
import LineChartComponent from "./components/LineChart/LineChart";
import RadarChartComponent from './components/RadarChart/RadarChart';
import PieChartComponent from './components/PieChart/PieChart';

// data du mock
import { USER_MAIN_DATA } from './assets/data.js';
import { USER_ACTIVITY } from './assets/data.js';
import { USER_AVERAGE_SESSIONS } from './assets/data.js';
import { USER_PERFORMANCE } from './assets/data.js';

// data api
import { getUserData } from './assets/services';
import { getUserActivity } from './assets/services';
import { getUserAverageSessions } from './assets/services';
import { getUserPerformance } from './assets/services';

/* const userId = 12;
const userData = await getUserData(userId);
const activityData = await getUserActivity(userId);
const averageSessionsData = await getUserAverageSessions(userId);
const performanceData = await getUserPerformance(userId); */
/* console.log("données utilisateur", userData.data);
console.log("activité utilisateur API", activityData.data);
console.log("durée session utilisateur", averageSessionsData.data);
console.log("performance utilisateur" ,performanceData.data); */

function App({ isMockData, getCurrentUserId  }) {
  console.log(`Données affichées : ${isMockData ? 'Données mockées' : 'Données de l\'API'}`);
  const userId = getCurrentUserId();
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [averageSessionsData, setAverageSessionsData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData(userId);
      const activityData = await getUserActivity(userId);
      const averageSessionsData = await getUserAverageSessions(userId);
      const performanceData = await getUserPerformance(userId);
      setUserData(userData);
      setActivityData(activityData);
      setAverageSessionsData(averageSessionsData);
      setPerformanceData(performanceData);
    };

    fetchData();
  }, [userId]);
  
  return (
    <main>
      {isMockData ? (
      <Banner name={USER_MAIN_DATA[0].userInfos.firstName} text="Félicitations ! Vous avez explosé vos objectifs hier 👏" />
      ) : (
      <Banner name={userData.data.userInfos.firstName} text="Félicitations ! Vous avez explosé vos objectifs hier 👏" />
      )}
      {isMockData ? (
      <KeyInfoCard item={USER_MAIN_DATA[0]} />
      ) : (
      <KeyInfoCard item={userData.data} />
      )}
      {isMockData ? (
      <BarChartComponent data={USER_ACTIVITY[0]} />
      ) : (
      <BarChartComponent data={activityData.data} />
      )}
      <div className='bottom-graph-container'>
        {isMockData ? (
        <LineChartComponent data={USER_AVERAGE_SESSIONS[0]} />
        ) : (
        <LineChartComponent data={averageSessionsData.data} />
        )}
        {isMockData ? (
        <RadarChartComponent perfData={USER_PERFORMANCE[0]} />
      ) : (
        <RadarChartComponent perfData={performanceData.data} />
      )}
        {isMockData ? (
        <PieChartComponent data={USER_MAIN_DATA[0]} />
        ) : (
        <PieChartComponent data={userData.data} />
        )}
      </div>
    </main>
  );
}

export default App;
