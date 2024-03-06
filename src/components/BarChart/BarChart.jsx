import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function BarChartComponent({ data }) {

  return (
    <BarChart
      width={835}
      height={320}
      data={data.sessions}
    >
      <CartesianGrid strokeDasharray="3" vertical={false}/>
      <XAxis dataKey="day" />
      <YAxis yAxisId="left" orientation="left" hide={true} />
      <YAxis yAxisId="right" orientation="right" axisLine={false} />
      <Tooltip />
      <Legend />
      <Bar dataKey="kilogram" fill="black" yAxisId="right" barSize={10} radius={[4, 4, 0, 0]} />
      <Bar dataKey="calories" fill="red" yAxisId="left" barSize={10} radius={[4, 4, 0, 0]} />
    </BarChart>
  );
}

export default BarChartComponent;
