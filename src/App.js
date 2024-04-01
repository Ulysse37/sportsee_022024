import { useState, useEffect } from 'react';
import './App.css';
// components
import Banner from "./components/Banner/Banner";
import BarChartComponent from './components/BarChart/BarChart';
import KeyInfoCard from "./components/KeyInfoCard/KeyInfoCard";
import LineChartComponent from "./components/LineChart/LineChart";
import RadarChartComponent from './components/RadarChart/RadarChart';
import PieChartComponent from './components/PieChart/PieChart';

// data du mock
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './assets/data.js';

// data api
import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance, checkApiAvailability } from './assets/services';

/* const userId = 12;
const userData = await getUserData(userId);
const activityData = await getUserActivity(userId);
const averageSessionsData = await getUserAverageSessions(userId);
const performanceData = await getUserPerformance(userId); */
/* console.log("données utilisateur", userData.data);
console.log("activité utilisateur API", activityData.data);
console.log("durée session utilisateur", averageSessionsData.data);
console.log("performance utilisateur" ,performanceData.data); */

function App({ isMockData, getCurrentApiUserId, getCurrentMockUser }) {
  /* checkApiAvailability().then(result => {
    console.log('L\'API est disponible:', result);
  }) */
  console.log("App lancé");
  console.log(`Données affichées : ${isMockData ? 'Données mockées' : 'Données de l\'API'}`);
  const userMockId = getCurrentMockUser(); // Renvoie l'utilisateur actuel à partir du mock
  
  const userId = getCurrentApiUserId(); // Renvoie l'ID actuelle de l'utilisateur à partir de l'API
  const [userData, setUserData] = useState(null); // initialise état local et une fonction pour le mettre à jour
  const [activityData, setActivityData] = useState(null);
  const [averageSessionsData, setAverageSessionsData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => { // Effectue toutes ces fonctions à chaque fois que l'userId change
    const fetchData = async () => {  // Récupère les données de l'API de l'utilisateur 
      const userData = await getUserData(userId);
      const activityData = await getUserActivity(userId);
      const averageSessionsData = await getUserAverageSessions(userId);
      const performanceData = await getUserPerformance(userId);
      setUserData(userData); // Met à jour l'état de chaque donnée en fonction de l'utilisateur 
      setActivityData(activityData);
      setAverageSessionsData(averageSessionsData);
      setPerformanceData(performanceData);
    };

    fetchData();
  }, [userId]);
  
  
  console.log("Utilisateur données mockées : ", userMockId);
  console.log("Utilisateur données API : ", userId);
  return (
    <main>
      {/* {isMockData ? (
      <Banner name={USER_MAIN_DATA[userMockId].userInfos.firstName} text="Félicitations ! Vous avez explosé vos objectifs hier 👏" />
      ) : (
      <Banner name={userData.data.userInfos.firstName} text="Félicitations ! Vous avez explosé vos objectifs hier 👏" />
      )}
      {isMockData ? (
      <KeyInfoCard item={USER_MAIN_DATA[userMockId]} />
      ) : (
      <KeyInfoCard item={userData.data} />
      )}
      {isMockData ? (
      <BarChartComponent data={USER_ACTIVITY[userMockId]} />
      ) : (
      <BarChartComponent data={activityData.data} />
      )}
      <div className='bottom-graph-container'>
        {isMockData ? (
        <LineChartComponent data={USER_AVERAGE_SESSIONS[userMockId]} />
        ) : (
        <LineChartComponent data={averageSessionsData.data} />
        )}
        {isMockData ? (
        <RadarChartComponent perfData={USER_PERFORMANCE[userMockId]} />
      ) : (
        <RadarChartComponent perfData={performanceData.data} />
      )}
        {isMockData ? (
        <PieChartComponent data={USER_MAIN_DATA[userMockId]} />
        ) : (
        <PieChartComponent data={userData.data} />
        )}
      </div> */}
    </main>
  );
}

export default App;
