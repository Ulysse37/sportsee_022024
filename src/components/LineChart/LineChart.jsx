import './linechart.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { USER_AVERAGE_SESSIONS } from '../../assets/data';

function ShortDayNameFormat(day) {
  const days = ["L", "M", "M", "K", "V", "S", "D"];
  return days[day - 1];
}

function LineChartComponent() {
  const data = USER_AVERAGE_SESSIONS[0].sessions.map((session) => ({
    day: ShortDayNameFormat(session.day),
    sessionLength: session.sessionLength,
  }));

function CustomTooltip({ active, payload }) { //payload contient les valeurs pour le point où le curseur est positionné
  if (active) {
    return (
      <div className="custom-tooltip-container">
        <p className="custom-tooltip-text">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
}

  return (
    <div className="graph-container">
      <ResponsiveContainer className="linechart-responsive-container" width="30%" height={263}>
        <LineChart data={data}>
          <XAxis dataKey="day" hide={true} />
          <YAxis hide={true} />
          <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" dot={false} />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
      <div className="day-labels"> 
        {data.map((entry, index) => (
          <span key={`day-label-${index}`} className="day-label">
            {entry.day}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LineChartComponent;
