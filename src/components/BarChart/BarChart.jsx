import './barchart.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function BarChartComponent({ data }) {

  const maxKg = Math.max(...data.sessions.map(session => session.kilogram)); // trouve valeur max de kg parmi toutes les sessions
  const minKg = Math.min(...data.sessions.map(session => session.kilogram)); // trouve valeur min de kg parmi toutes les sessions
  const domainMin = minKg - 2; // Valeur min à afficher sur l'axe Y avec 1 unité de marge
  const domainMax = maxKg + 2; // Valeur max à afficher sur l'axe Y avec 1 unité de marge

  return (
    <ResponsiveContainer className="barchart-graph-container" width={835} height={320} >
      <BarChart
        data={data.sessions}
      >
        <CartesianGrid strokeDasharray="3" vertical={false}/>
        <XAxis dataKey="day" />
        <YAxis yAxisId="left" orientation="left" hide={true} />
        <YAxis yAxisId="right" orientation="right" axisLine={false} domain={[domainMin, domainMax]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="kilogram" fill="black" yAxisId="right" barSize={10} radius={[4, 4, 0, 0]} />
        <Bar dataKey="calories" fill="red" yAxisId="left" barSize={10} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartComponent;
