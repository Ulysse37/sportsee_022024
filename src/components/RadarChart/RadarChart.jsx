import './radarchart.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

import { USER_PERFORMANCE } from '../../assets/data';

const TypePerformance = { //contient les valeurs numériques à leurs mots correspondant
  1: 'Cardio',
  2: 'Energie',
  3: 'Endurance',
  4: 'Force',
  5: 'Vitesse',
  6: 'Intensité'
};
   
function RadarChartComponent() {
  const data = USER_PERFORMANCE[0].data.map(item => ({
    ...item, // créer copie de l'objet avec le type de performance en toute lettre
    kind: TypePerformance[item.kind] //remplace la valeur par le type de performance correspondant à celle-ci
  }))

  return (
    <ResponsiveContainer className="radarchart-responsive-container" width={258} height={274}>
      <RadarChart /* style={{ width: "100%", height: "85%" }} */ cx="50%" cy="50%" outerRadius="65%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" tick={{ fontSize: 12, fontWeight: 500, fill: 'white' }} />
        <Radar name="Performance" dataKey="value" fill="rgba(255, 1, 1, 0.7)" fillOpacity={0.9} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default RadarChartComponent;
