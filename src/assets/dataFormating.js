// Fichier formatant les données pour différents composants
// LineChart
function formatDayName(day) { // formate les jours de la semaines donnés en n° en lettre
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  return days[day - 1];
}

export function formatDataLineChart(data) { 
  const averageSession = data.sessions.map((session) => ({
    day: formatDayName(session.day),
    sessionLength: session.sessionLength,
  }));

  return averageSession;
}

// PieChart
export function formatDataPieChart(data) {
  let scorePercentage;   // Calcul du pourcentage du score
  if (data.todayScore !== undefined) { // si utilisation de todayScore
    scorePercentage = data.todayScore * 100;
  } else if (data.score !== undefined) { // si utilisation de score
    scorePercentage = data.score * 100;
  } else { // Valeur par défaut si aucune clé de données n'est présente
    scorePercentage = 0;
  }

  const graphData = [{ name: 'Score', value: scorePercentage }, { name: 'Reste', value: 100 - scorePercentage }];
  const colors = ['rgba(255, 0, 0, 1)', 'rgba(251, 251, 251, 1)'];

  return { graphData, colors, scorePercentage };
}

// RadarChart
const TypePerformance = { //contient les valeurs numériques à leurs mots correspondant
  1: 'Cardio',
  2: 'Energie',
  3: 'Endurance',
  4: 'Force',
  5: 'Vitesse',
  6: 'Intensité'
};

export function formatRadarChartData(perfData) {
  const userPerformance = perfData.data.map(item => ({
    ...item, // créer copie de l'objet avec le type de performance en toute lettre
    kind: TypePerformance[item.kind] //remplace la valeur par le type de performance correspondant à celle-ci
  }));

  return userPerformance;
}
