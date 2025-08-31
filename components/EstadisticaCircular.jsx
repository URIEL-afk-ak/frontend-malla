import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#22c55e', '#ffc107', '#adb5bd']; // Verde, amarillo, gris
const ESTADOS = ['aprobada', 'regular', 'pendiente'];

// Etiqueta personalizada centrada sobre cada segmento
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    percent > 0 ? (
      <text x={x} y={y} fill="#23272f" textAnchor="middle" dominantBaseline="central" style={{fontWeight:'bold', fontSize:'1.1em'}}>
        {`${Math.round(percent * 100)}%`}
      </text>
    ) : null
  );
};

export default function EstadisticaCircular({ resumen }) {
  // Sumar totales por estado
  const total = ESTADOS.reduce((acc, estado) => acc + (resumen[estado] || 0), 0);
  const data = ESTADOS.map((estado, i) => ({
    name: estado.charAt(0).toUpperCase() + estado.slice(1),
    value: resumen[estado] || 0
  }));

  return (
    <div style={{ width: '100%', height: 220, display:'flex', alignItems:'center', justifyContent:'center' }}>
      <ResponsiveContainer width={220} height={220}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={85}
            innerRadius={45}
            stroke="#fff"
            strokeWidth={3}
            style={{filter:'drop-shadow(0 2px 8px #23272f22)'}}
            label={renderCustomLabel}
            labelLine={false}
          >
            {data.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={COLORS[i]} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [`${value} materias`, name]} wrapperStyle={{fontWeight:600, fontSize:'1em', color:'#23272f', background:'#fff', borderRadius:8, boxShadow:'0 2px 8px #23272f22'}}/>
          <Legend formatter={v => <span style={{fontWeight:600, fontSize:'0.98em', color:'#23272f'}}>{v}</span>} iconSize={16} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
