import './piechart.css';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import { formatDataPieChart } from '../../assets/dataFormating.js';

function PieChartComponent({ data }) {
  const { graphData, colors, scorePercentage } = formatDataPieChart(data); // formatage du score en %

  return (
    <ResponsiveContainer className="piechart-responsive-container" width={258} height={274}>
      <span className='text-piechart'>Score</span>
      <PieChart>
        <Pie data={graphData} dataKey="value" nameKey="name" cx="50%" cy="50%" 
        outerRadius={80} innerRadius={70} startAngle={-280} endAngle={80} cornerRadius={10}>
          {graphData.map((_, index) => ( // créer 2 cellules une pour le score et une pour le reste
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Pie 
        data={[{ value: 1 }]} // Données factices pour la deuxième pie qui n'est là que pour un background blanc
        cx="50%"
        cy="50%"
        innerRadius={0} // Définit le rayon intérieur pour remplir tout l'espace intérieur
        outerRadius={69}
        fill="#FFF" // Définit la couleur de fond en blanc
        > 
        <Label content={({ viewBox }) => { // PLACE LE TEXTE AU CENTRE / reçoit viewbox (boite de vue du label) 
          const { cx, cy } = viewBox; // extrait les coordonnées du centre de la boîte de vue
          return (
            <text x={cx} y={cy} dy={0} textAnchor="middle"> {/* x et y place le texte au centre de la boîte de vue */}
              <tspan style={{ fontWeight: '700', fontSize: 26 }}>{`${scorePercentage}%`}</tspan>
              <tspan x={cx} dy={24} textAnchor="middle" style={{ lineHeight: 26, fill: '#808080', fontWeight: 500, fontSize: 16 }}> de votre</tspan>
              <tspan x={cx} dy={24} textAnchor="middle" style={{ lineHeight: 26, fill: '#808080', fontWeight: 500, fontSize: 16 }}>objectif</tspan>
            </text>
          );
        }} />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieChartComponent;
