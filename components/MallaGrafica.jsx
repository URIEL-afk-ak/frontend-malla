import { useEffect } from 'react';
import { useMalla } from '../hooks/useMalla';
import MateriaCard from './MateriaCard';

export default function MallaGrafica() {
  const { malla, loading, error, actualizarEstado, cargarMalla } = useMalla();

  useEffect(() => {
    cargarMalla();
  }, [cargarMalla]);

  // Agrupar materias por año
  const agrupado = malla.reduce((acc, mat) => {
    acc[mat.anio] = acc[mat.anio] || [];
    acc[mat.anio].push(mat);
    return acc;
  }, {});
  const anios = Object.keys(agrupado).map(Number).sort((a, b) => a - b);

  return (
    <div style={{ width: '100%', minHeight: 400, background:'#fff', borderRadius:'16px', boxShadow:'0 2px 16px 0 #2563eb11', padding:'1.5em', marginBottom:'1.5em' }}>
      <h2 style={{fontWeight:700, fontSize:'1.3rem', marginBottom:'1.2rem', color:'#2563eb'}}>Malla Gráfica</h2>
      {loading && <div style={{color:'#2563eb', fontWeight:600}} role="status" aria-live="polite">Cargando...</div>}
      {error && <div style={{color:'#e11d48', fontWeight:600}} role="alert">{error}</div>}
      <div className="malla-grid">
        {anios.map((anio, idx) => (
          <div key={anio} className={`malla-anio-panel anio-${idx+1}`}> 
            <div className="malla-anio-header">
              <span className="malla-anio-icon">📅</span>
              <span className="malla-anio-titulo">Año {anio}</span>
            </div>
            <div className="malla-anio-materias">
              {agrupado[anio].map(mat => (
                <MateriaCard key={mat.id} mat={mat} actualizarEstado={actualizarEstado} showToast={() => {}} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
