import MateriaEstadoBadge from './MateriaEstadoBadge';
import { useState } from 'react';
import { createPortal } from 'react-dom';
export default function MateriaCard({ mat, actualizarEstado, showToast }) {
  const [modalOpen, setModalOpen] = useState(false);
  // Bloquear hover en cards cuando el modal está abierto
  if (typeof window !== 'undefined') {
    if (modalOpen) {
      document.body.classList.add('modal-abierto');
    } else {
      document.body.classList.remove('modal-abierto');
    }
  }
  const estados = ['pendiente', 'cursando', 'regular', 'aprobada'];

  return (
    <>
      <div
        className={`materia-card ${mat.estado} ${!mat.desbloqueada ? 'bloqueada' : ''}`}
        tabIndex={0}
        aria-label={`Materia ${mat.nombre}`}
        onClick={() => setModalOpen(true)}
        style={{
          background: '#fff',
          border: '2px solid #2563eb',
          borderRadius: 10,
          color: '#1e293b',
          boxShadow: '0 2px 8px #2563eb22',
          fontWeight: 700,
          fontSize: '1em',
          margin: '0.2em',
          padding: '0.7em 0.5em',
          transition: 'box-shadow 0.2s, border 0.2s',
          cursor: 'pointer',
        }}
        onMouseOver={e => e.currentTarget.style.boxShadow = '0 4px 16px #2563eb44'}
        onMouseOut={e => e.currentTarget.style.boxShadow = '0 2px 8px #2563eb22'}
      >
        {/* Badge visual, solo ícono */}
        <span className={mat.electiva ? 'badge-electiva' : 'badge-obligatoria'} aria-label={mat.electiva ? 'Electiva' : 'Obligatoria'}>
          {mat.electiva ? '★' : '⬤'}
        </span>
        {/* Nombre de la materia */}
        <span className="nombre">{mat.nombre}</span>
        {/* Estado debajo del nombre */}
        <div style={{margin:'0.15em auto 0.2em auto'}}>
          <MateriaEstadoBadge estado={mat.estado} />
        </div>
        {/* Bloqueo */}
        {!mat.desbloqueada && (
          <span className="bloqueo" title="Correlativas faltantes" aria-label="Materia bloqueada" role="img" tabIndex={0}>🔒</span>
        )}
      </div>
      {modalOpen && typeof window !== 'undefined' && createPortal(
        <div className="materia-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="materia-modal-content" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={mat.desbloqueada ? `Cambiar estado de ${mat.nombre}` : `Correlativas de ${mat.nombre}`}>
            <button className="cerrar" onClick={() => setModalOpen(false)} aria-label="Cerrar">×</button>
            <div style={{ fontWeight: 700, fontSize: '1.1em', color: '#2563eb', textAlign: 'center', marginBottom:'0.7em' }}>{mat.nombre}</div>
            {mat.desbloqueada ? (
              <div>
                <div className="modal-estados">
                  {estados.map(e => (
                    <button
                      key={e}
                      className={`btn-estado ${e}`}
                      disabled={mat.estado === e}
                      style={{ opacity: mat.estado === e ? 0.6 : 1, minWidth: 90 }}
                      onClick={async ev => {
                        ev.stopPropagation();
                        if (mat.estado !== e) {
                          try {
                            await actualizarEstado(mat.id, e);
                            showToast('Estado actualizado', 'success');
                          } catch (err) {
                            showToast(err.message || 'Transición inválida', 'error');
                          }
                          setModalOpen(false);
                        }
                      }}
                    >
                      {e.charAt(0).toUpperCase() + e.slice(1)}
                    </button>
                  ))}
                </div>
                <div className="correlativas">
                  <span style={{fontWeight:600, color:'#a21caf'}}>Correlativas requeridas para desbloquear:</span>
                  {Array.isArray(mat.correlativas) ? (
                    mat.correlativas.length > 0 ? (
                      <ul>
                        {mat.correlativas.map((c, i) => (
                          <li key={i}>
                            <span style={{fontWeight:600}}>{c.nombre}</span>
                            <span style={{marginLeft:'0.5em', fontSize:'0.95em', color:c.tipo==='regular'?'#0ea5e9':'#059669'}}>
                              {c.tipo === 'regular' ? ' (Regular)' : ' (Aprobada)'}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span style={{ marginLeft: '0.5em' }}>Ninguna</span>
                    )
                  ) : (
                    <span style={{ marginLeft: '0.5em' }}>No se encontraron correlativas</span>
                  )}
                </div>
              </div>
            ) : (
              <div className="correlativas">
                <span style={{fontWeight:600, color:'#a21caf'}}>Correlativas necesarias para desbloquear esta materia:</span>
                {Array.isArray(mat.correlativas) ? (
                  mat.correlativas.length > 0 ? (
                    <ul>
                      {mat.correlativas.map((c, i) => (
                        <li key={i}>
                          <span style={{fontWeight:600}}>{c.nombre}</span>
                          <span style={{marginLeft:'0.5em', fontSize:'0.95em', color:c.tipo==='regular'?'#0ea5e9':'#059669'}}>
                            {c.tipo === 'regular' ? ' (Regular)' : ' (Aprobada)'}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span style={{ marginLeft: '0.5em' }}>Ninguna</span>
                  )
                ) : (
                  <span style={{ marginLeft: '0.5em' }}>No se encontraron correlativas</span>
                )}
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
