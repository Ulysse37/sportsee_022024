import './radarchart.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { formatRadarChartData } from '../../assets/dataFormating.js';

   
function RadarChartComponent({ perfData }) {
  const userPerformance = formatRadarChartData(perfData); // formate les types de performance en français avec une majuscule

  return (
    <ResponsiveContainer className="radarchart-responsive-container" width={258} height={274}>
      <RadarChart cx="50%" cy="50%" outerRadius="59%" data={userPerformance}>
        <PolarGrid radialLines={false}/>
        <PolarAngleAxis dataKey="kind" tick={{ fontSize: 12, fontWeight: 500, fill: 'white' }} />
        <Radar name="Performance" dataKey="value" fill="rgba(255, 1, 1, 0.7)" fillOpacity={0.9} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default RadarChartComponent;
