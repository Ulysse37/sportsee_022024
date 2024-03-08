import './barchart.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function CustomTooltip({ active, payload }) { //custom tooltip pour le styliser plus facilement 
  if (active) { //payload contient les valeurs pour le point où le curseur est positionné
    return (
      <div className="barchart-tooltip-container">
        <p>{`${payload[0].value} kg`}</p>
        <p>{`${payload[1].value} kCal`}</p>
      </div>
    );
  }
  
  return null;
}

function BarChartComponent({ data }) {

  const maxKg = Math.max(...data.sessions.map(session => session.kilogram)); // trouve valeur max de kg parmi toutes les sessions
  const minKg = Math.min(...data.sessions.map(session => session.kilogram)); // trouve valeur min de kg parmi toutes les sessions
  const domainMin = minKg - 2; // Valeur min à afficher sur l'axe Y avec 1 unité de marge
  const domainMax = maxKg + 2; // Valeur max à afficher sur l'axe Y avec 1 unité de marge

  return (
    <div className='barchart-container'>
      <div className="barchart-text">
        <p className='barchart-text-title'>Activité quotidienne</p>
        <ul className='barchart-text-list'>
          <li className='barchart-text-poids'>Poids (kg)</li>
          <li className='barchart-text-calories'>Calories brûlées (kCal)</li>
        </ul>
      </div>
      <ResponsiveContainer className="barchart-responsive-container" width={750} height={220}>
        <BarChart data={data.sessions}>
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis dataKey="day" tickFormatter={(value) => new Date(value).getDate()} /* formate les dates afin d'afficher les jours du mois en numéro */
          tick={{ dy: 10 }}
          tickLine={{ display: 'none' }}
          scale='point' /* supprime l'espace à droite et à gauche de l'axe x */
          padding={{ left: 13, right: 12 }} /* ajuste le positionnement des 1ères données à droite et à gauche de l'axe */
          /> 
          <YAxis yAxisId="left" orientation="left" hide={true} />
          <YAxis yAxisId="right" orientation="right" axisLine={false} 
          domain={[domainMin, domainMax]}
          tickLine={{ display: 'none' }} 
          tick={{ dx: 20 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="kilogram" fill="black" yAxisId="right" barSize={10} radius={[4, 4, 0, 0]} />
          <Bar dataKey="calories" fill="red" yAxisId="left" barSize={10} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartComponent;
