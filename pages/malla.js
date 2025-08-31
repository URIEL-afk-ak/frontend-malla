import { useEffect } from 'react';
import { useMalla } from '../hooks/useMalla';
import { useToast } from '../hooks/useToast';
import MateriaCard from '../components/MateriaCard';
// import eliminado, ahora se importa en _app.js

export default function MallaLista() {
  const { malla, loading, error, cargarMalla, actualizarEstado } = useMalla();
  const { showToast, Toast } = useToast();
  useEffect(() => { cargarMalla(); }, [cargarMalla]);

  // Agrupar materias por año
  const agrupado = malla.reduce((acc, mat) => {
    acc[mat.anio] = acc[mat.anio] || [];
    acc[mat.anio].push(mat);
    return acc;
  }, {});
  const anios = Object.keys(agrupado).map(Number).sort((a, b) => a - b);

  return (
  <div style={{ width: '100vw', minHeight: '100vh', maxWidth: '100vw', margin: '0', padding: '4em 0 0 0', background: '#e5e7eb', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowX: 'hidden' }}>
  {/* Título eliminado por pedido del usuario */}
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
                <MateriaCard key={mat.id} mat={mat} actualizarEstado={actualizarEstado} showToast={showToast} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Toast />
    </div>
  );
}
// ...existing code...
