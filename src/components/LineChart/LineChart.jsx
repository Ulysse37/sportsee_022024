import './linechart.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function ShortDayNameFormat(day) { // formate les jours de la semaines donnés en n° en lettre
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  return days[day - 1];
}

function CustomTooltip({ active, payload }) { //custom tooltip pour le styliser plus facilement 
  if (active) { //payload contient les valeurs pour le point où le curseur est positionné
    return (
      <div className="custom-tooltip-container">
        <p className="custom-tooltip-text">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
}

function LineChartComponent({ data }) {
  const averageSession = data.sessions.map((session) => ({
    day: ShortDayNameFormat(session.day),
    sessionLength: session.sessionLength,
  }));

  return (
    <div className="linechart-graph-container">
      <ResponsiveContainer className="linechart-responsive-container" width={258} height={233}>
        <LineChart data={averageSession}>
          <XAxis dataKey="day" hide={true} />
          <YAxis hide={true} />
          <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" strokeWidth={2} dot={false} />
          <Tooltip content={<CustomTooltip />} />
          <text x={90} y={15} textAnchor="middle" dominantBaseline="middle" className="chart-text">
            Durée moyenne des
            <tspan x={54} dy={20}>sessions</tspan>
          </text>
        </LineChart>
      </ResponsiveContainer>
      <div className="day-labels"> {/* ajout des jours de la semaine sur l'axe x */}
        {averageSession.map((entry, index) => (
          <span key={`day-label-${index}`} className="day-label">
            {entry.day}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LineChartComponent;
