import { useEffect, useState } from 'react';
import EstadisticaCircular from '../components/EstadisticaCircular';

// Página base para notas y promedio

export default function Notas() {
  const [materias, setMaterias] = useState([]);
  const [notas, setNotas] = useState({});
  const [promedio, setPromedio] = useState(null);
  const [creditosElectivas, setCreditosElectivas] = useState(0);
  const [resumen, setResumen] = useState({ aprobada: 0, regular: 0, pendiente: 0 });
  const [mensaje, setMensaje] = useState('');
  const [editando, setEditando] = useState(null);
  const [notaEditando, setNotaEditando] = useState('');
  const [errorNota, setErrorNota] = useState('');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/malla`)
      .then(res => res.json())
      .then(json => {
        // Solo materias aprobadas
        const aprobadas = Array.isArray(json.data) ? json.data.filter(m => m.estado === 'aprobada') : [];
        setMaterias(aprobadas);
        // Créditos electivas
        const electivasAprobadas = aprobadas.filter(m => m.electiva);
        const creditos = electivasAprobadas.reduce((acc, m) => acc + (m.creditos || 0), 0);
        setCreditosElectivas(creditos);
      });
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notas/promedio`)
      .then(res => res.json())
      .then(json => setPromedio(json.data.promedio));
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/estadisticas/resumen`)
      .then(res => res.json())
      .then(json => {
        let totales = { aprobada: 0, regular: 0, pendiente: 0 };
        Object.values(json.data).forEach(estados => {
          totales.aprobada += estados.aprobada || 0;
          totales.regular += estados.regular || 0;
          totales.pendiente += estados.pendiente || 0;
        });
        setResumen(totales);
      });
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notas`)
      .then(res => res.json())
      .then(json => {
        if (json.status === 'success' && Array.isArray(json.data)) {
          const notasGuardadas = {};
          json.data.forEach(n => {
            notasGuardadas[n.id] = n.nota !== null ? n.nota : '';
          });
          setNotas(notasGuardadas);
        }
      });
  }, []);
  return (
    <main style={{ width: '100vw', minHeight: '100vh', maxWidth: '100vw', margin: '0', padding: '4em 0 0 0', background: '#e5e7eb', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowX: 'hidden' }}>
      <h1 style={{ fontSize: '1.8em', fontWeight: 700, color: '#2563eb', marginBottom: '1.2em', textAlign: 'center' }}>Notas y Estadísticas</h1>
      <div style={{ display: 'flex', gap: '2em', alignItems: 'flex-start' }}>
        {/* Tabla de notas */}
        <div style={{ flex: 2, background: 'rgba(255,255,255,0.85)', borderRadius: '12px', boxShadow: '0 2px 12px 0 #2563eb11', padding: '1em 0.7em', minWidth: 320 }}>
          {mensaje && <div style={{ background: 'linear-gradient(90deg,#22c55e 60%,#38bdf8 100%)', color: '#fff', fontWeight: 600, borderRadius: '8px', padding: '0.5em', marginBottom: '0.7em', textAlign: 'center', fontSize: '0.98em', boxShadow: '0 2px 8px #22c55e44' }}>{mensaje}</div>}
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 0.3em', fontSize: '0.98em', fontFamily: 'Inter, sans-serif' }}>
            <thead>
              <tr style={{ background: 'linear-gradient(90deg,#2563eb 60%,#38bdf8 100%)', color: '#fff', borderRadius: '8px' }}>
                <th style={{ padding: '0.5em', borderTopLeftRadius: '8px' }}>Materia</th>
                <th>Tipo</th>
                <th>Créditos</th>
                <th>Nota</th>
                <th style={{ borderTopRightRadius: '8px', textAlign: 'center' }}>Acción</th>
              </tr>
            </thead>
            <tbody>
              {materias.map(mat => (
                <tr key={mat.id} style={{
                  background: mat.electiva ? 'linear-gradient(90deg,#f3e8ff 60%,#e0f2fe 100%)' : '#fff',
                  boxShadow: '0 2px 8px #2563eb11',
                  borderRadius: '6px',
                  transition: 'background 0.18s'
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(90deg,#e0f2fe 60%,#bae6fd 100%)'}
                  onMouseLeave={e => e.currentTarget.style.background = mat.electiva ? 'linear-gradient(90deg,#f3e8ff 60%,#e0f2fe 100%)' : '#fff'}
                >
                  <td style={{ padding: '0.5em 0.4em', fontWeight: 600, color: '#111', fontSize: '0.98em' }}>{mat.nombre}</td>
                  <td style={{ fontWeight: 500, color: '#111' }}>{mat.electiva ? 'Electiva' : 'Obligatoria'}</td>
                  <td style={{ fontWeight: 500, color: '#111' }}>{mat.electiva ? mat.creditos || '-' : '-'}</td>
                  <td>
                    {editando === mat.id ? (
                      <input
                        type="text"
                        inputMode="decimal"
                        pattern="[0-9]+([\\.,][0-9]*)?"
                        min={6}
                        max={10}
                        value={notaEditando}
                        onChange={e => {
                          let val = e.target.value.replace(',', '.');
                          if (/^\d{0,2}(\.\d{0,2})?$/.test(val) || val === '') {
                            const num = Number(val);
                            if (val === '' || (num >= 6 && num <= 10)) {
                              setNotaEditando(val);
                              setErrorNota('');
                            } else {
                              setNotaEditando(val);
                              setErrorNota('Solo se permiten valores entre 6 y 10');
                            }
                          }
                        }}
                        style={{
                          width: '54px',
                          height: '32px',
                          fontSize: '1.08em',
                          borderRadius: '6px',
                          border: '2px solid #23272f',
                          textAlign: 'center',
                          color: '#111'
                        }}
                      />
                    ) : (
                      <span style={{color:'#111'}}>{notas[mat.id] !== undefined ? notas[mat.id] : '-'}</span>
                    )}
                  </td>
                  <td>
                    {editando === mat.id ? (
                      <button
                        onClick={async () => {
                          const valor = notaEditando;
                          if (valor === '' || isNaN(valor) || Number(valor) < 6 || Number(valor) > 10) {
                            setErrorNota('La nota debe ser un número entre 6 y 10');
                            return;
                          }
                          setErrorNota('');
                          await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notas`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ materiaId: mat.id, valor: Number(valor) })
                          });
                          // Actualizar notas
                          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notas`)
                            .then(res => res.json())
                            .then(json => {
                              if (json.status === 'success' && Array.isArray(json.data)) {
                                const notaActual = json.data.find(n => n.id === mat.id);
                                setNotas(prev => ({ ...prev, [mat.id]: notaActual?.nota ?? '' }));
                              }
                            });
                          // Actualizar promedio
                          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notas/promedio`)
                            .then(res => res.json())
                            .then(json => setPromedio(json.data.promedio));
                          setEditando(null);
                        }}
                        style={{
                          background: '#22c55e',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '6px',
                          padding: '0.3em 0.9em',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >Guardar</button>
                    ) : (
                      <button
                        onClick={() => {
                          setEditando(mat.id);
                          setNotaEditando(notas[mat.id] !== undefined ? String(notas[mat.id]) : '');
                          setErrorNota('');
                        }}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          padding: '4px',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'filter 0.18s',
                          filter: 'grayscale(0.3)',
                        }}
                        onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0) drop-shadow(0 2px 6px #2563eb33)'}
                        onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(0.3)'}
                        title="Editar nota"
                      >
                        <svg width="22" height="22" viewBox="0 0 20 20" fill="#2563eb" xmlns="http://www.w3.org/2000/svg"><path d="M4 13.5V16h2.5l7.06-7.06-2.5-2.5L4 13.5zm12.71-7.29a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.76 3.76 1.83-1.83z"/></svg>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Panel de estadísticas y gráfica */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2em', background: 'rgba(255,255,255,0.7)', borderRadius: '12px', boxShadow: '0 2px 12px 0 #2563eb11', padding: '1em 0.7em', minWidth: 220, backdropFilter: 'blur(6px)' }}>
          <EstadisticaCircular resumen={resumen} />
          <div style={{ width: '100%', marginTop: '0.5em', display: 'flex', flexDirection: 'column', gap: '0.7em' }}>
            <div style={{ background: '#f3f4f6', borderRadius: '8px', padding: '0.7em 0.7em', fontWeight: 600, fontSize: '1em', color: '#23272f', boxShadow: '0 2px 8px #23272f11', textAlign: 'center' }}>Promedio general: <span style={{ fontWeight: 700, fontSize: '1.08em' }}>{promedio ? promedio.toFixed(2) : '-'}</span></div>
            <div style={{ background: '#f3f4f6', borderRadius: '8px', padding: '0.7em 0.7em', fontWeight: 600, fontSize: '1em', color: '#23272f', boxShadow: '0 2px 8px #23272f11', textAlign: 'center' }}>Créditos electivas aprobadas: <span style={{ fontWeight: 700, fontSize: '1.08em' }}>{creditosElectivas}</span></div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '1.5em' }}>
        <button onClick={() => window.location.href = '/'} style={{
          background: '#2563eb',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          padding: '0.6em 1.2em',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 2px 8px #2563eb22',
          transition: 'background 0.18s'
        }}>
          Volver al inicio
        </button>
      </div>
    </main>
  );
}                 

