import React, { useState, useEffect } from 'react';

const DIAS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const HORAS = Array.from({ length: 17 }, (_, i) => `${(7 + i).toString().padStart(2, '0')}:00`);

export default function Horario() {
  const [materias, setMaterias] = useState([]); // Solo materias en estado cursando
  const [horarios, setHorarios] = useState({}); // { materiaId: [{ dia, inicio, fin, aula }] }
  const [modal, setModal] = useState({ open: false, materia: null });
  const [bloques, setBloques] = useState([]); // [{dia, inicio, fin, aula}]
  const [editModal, setEditModal] = useState({ open: false, bloque: null, materia: null });

  // Cargar materias en estado cursando y sus horarios
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/horarios`)
      .then(res => res.json())
      .then(json => {
        if (json.status === 'success' && json.data) {
          setMaterias(json.data); // json.data = materias en estado cursando (con Horarios)
          const horariosMap = {};
          json.data.forEach(materia => {
            if (materia.Horarios && materia.Horarios.length > 0) {
              horariosMap[materia.id] = materia.Horarios.map(h => ({
                dia: h.dia,
                inicio: h.inicio,
                fin: h.fin,
                aula: h.aula
              }));
            }
          });
          setHorarios(horariosMap);
        }
      });
  }, []);

  const openModal = materia => {
    console.log('Abriendo modal para:', materia);
    setModal({ open: true, materia });
    setBloques([{ dia: '', inicio: '', fin: '', aula: '' }]);
  };

  const closeModal = () => {
    setModal({ open: false, materia: null });
    setBloques([]);
  };

  // Nuevo: función para borrar un horario
  const deleteHorario = (materiaId, dia) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/horarios`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ materiaId, dia })
    }).then(() => {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/horarios`)
        .then(res => res.json())
        .then(json => {
          if (json.status === 'success' && json.data) {
            const horariosMap = {};
            json.data.forEach(materia => {
              if (materia.Horarios && materia.Horarios.length > 0) {
                horariosMap[materia.id] = materia.Horarios.map(h => ({
                  dia: h.dia,
                  inicio: h.inicio,
                  fin: h.fin,
                  aula: h.aula
                }));
              }
            });
            setHorarios(horariosMap);
          }
        });
    });
  };

  // Guardar: si ya existe un horario para ese día y materia, actualizarlo; si no, crearlo
  const saveHorario = () => {
    // Validar todos los bloques
    for (const bloque of bloques) {
      if (!bloque.dia || !bloque.inicio || !bloque.fin) return;
    }
    // Eliminar todos los horarios existentes de la materia para los días seleccionados
    const diasSeleccionados = bloques.map(b => b.dia.toLowerCase());
    Promise.all(diasSeleccionados.map(dia =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/horarios`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ materiaId: modal.materia.id, dia })
      })
    )).then(() => {
      // Crear todos los bloques
      Promise.all(bloques.map(bloque =>
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/horarios`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ materiaId: modal.materia.id, ...bloque, dia: bloque.dia.toLowerCase() })
        })
      )).then(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/horarios`)
          .then(res => res.json())
          .then(json => {
            if (json.status === 'success' && json.data) {
              const horariosMap = {};
              json.data.forEach(materia => {
                if (materia.Horarios && materia.Horarios.length > 0) {
                  horariosMap[materia.id] = materia.Horarios.map(h => ({
                    dia: h.dia,
                    inicio: h.inicio,
                    fin: h.fin,
                    aula: h.aula
                  }));
                }
              });
              setHorarios(horariosMap);
            }
            closeModal();
          });
      });
    });
  };

  // handleBloqueChange para actualizar el bloque del modal
  const handleBloqueChange = (idx, field, value) => {
    setBloques(bloques => bloques.map((b, i) => i === idx ? { ...b, [field]: value } : b));
  };

  // Abrir modal de edición al hacer click en un bloque
  const openEditModal = (bloque, materia) => {
    setEditModal({ open: true, bloque: { ...bloque }, materia });
  };

  const closeEditModal = () => {
    setEditModal({ open: false, bloque: null, materia: null });
  };

  // Guardar cambios de edición
  const saveEdit = () => {
    const b = editModal.bloque;
    if (!b.dia || !b.inicio || !b.fin) return;
    // Actualizar: eliminar el anterior y crear el nuevo
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/horarios`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ materiaId: editModal.materia.id, dia: editModal.bloque.dia })
    }).then(() => {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/horarios`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ materiaId: editModal.materia.id, ...b, dia: b.dia.toLowerCase() })
      }).then(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/horarios`)
          .then(res => res.json())
          .then(json => {
            if (json.status === 'success' && json.data) {
              const horariosMap = {};
              json.data.forEach(materia => {
                if (materia.Horarios && materia.Horarios.length > 0) {
                  horariosMap[materia.id] = materia.Horarios.map(h => ({
                    dia: h.dia,
                    inicio: h.inicio,
                    fin: h.fin,
                    aula: h.aula
                  }));
                }
              });
              setHorarios(horariosMap);
            }
            closeEditModal();
          });
      });
    });
  };

  // Eliminar bloque desde el modal de edición
  const deleteEdit = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/horarios`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ materiaId: editModal.materia.id, dia: editModal.bloque.dia })
    }).then(() => {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/horarios`)
        .then(res => res.json())
        .then(json => {
          if (json.status === 'success' && json.data) {
            const horariosMap = {};
            json.data.forEach(materia => {
              if (materia.Horarios && materia.Horarios.length > 0) {
                horariosMap[materia.id] = materia.Horarios.map(h => ({
                  dia: h.dia,
                  inicio: h.inicio,
                  fin: h.fin,
                  aula: h.aula
                }));
              }
            });
            setHorarios(horariosMap);
          }
          closeEditModal();
        });
    });
  };

  // Agregar un nuevo bloque vacío
  const addBloque = () => {
    setBloques(bloques => [...bloques, { dia: '', inicio: '', fin: '', aula: '' }]);
  };

  // Eliminar un bloque por índice
  const removeBloque = idx => {
    setBloques(bloques => bloques.filter((_, i) => i !== idx));
  };

  // Utilidad para calcular el índice de hora más cercano mayor o igual
  function findHourIndexOrNext(hora) {
    for (let i = 0; i < HORAS.length; i++) {
      if (HORAS[i] >= hora) return i;
    }
    return HORAS.length;
  }

  // Devuelve la cantidad de filas que debe ocupar un bloque según inicio y fin
  function calcularRowspan(inicio, fin) {
    const [hInicio, mInicio] = inicio.split(":").map(Number);
    const [hFin, mFin] = fin.split(":").map(Number);
    let count = 0;
    for (let i = 0; i < HORAS.length; i++) {
      const [h, m] = HORAS[i].split(":").map(Number);
      const t = h * 60 + m;
      const tInicio = hInicio * 60 + mInicio;
      const tFin = hFin * 60 + mFin;
      if (t >= tInicio && t < tFin) count++;
    }
    return Math.max(1, count);
  }

  // Une bloques contiguos de la misma materia y día
  function unirBloquesContiguos(bloques) {
    if (!bloques || bloques.length === 0) return [];
    // Ordenar por día, inicio
    const ordenados = [...bloques].sort((a, b) => {
      if (a.dia !== b.dia) return a.dia.localeCompare(b.dia);
      return a.inicio.localeCompare(b.inicio);
    });
    const unidos = [];
    for (let i = 0; i < ordenados.length; i++) {
      const actual = { ...ordenados[i] };
      while (i + 1 < ordenados.length &&
        actual.dia === ordenados[i + 1].dia &&
        actual.fin === ordenados[i + 1].inicio &&
        actual.aula === ordenados[i + 1].aula) {
        // Unir bloques contiguos
        actual.fin = ordenados[i + 1].fin;
        i++;
      }
      unidos.push(actual);
    }
    return unidos;
  }

  // Modal para agregar/editar horarios de materia
  const renderModal = () => (
    modal.open && (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: '#0008', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <div style={{ background: '#fff', borderRadius: 18, padding: '2.5em 2em', minWidth: 340, maxWidth: 600, width: '98vw', boxSizing: 'border-box', boxShadow: '0 6px 40px #2563eb33', position: 'relative' }}>
          <button onClick={closeModal} style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', fontSize: 22, color: '#64748b', cursor: 'pointer' }}>×</button>
          <h2 style={{ margin: 0, marginBottom: 18, color: '#2563eb', fontWeight: 800, fontSize: '1.3em', textAlign: 'center' }}>Asignar horarios a {modal.materia?.nombre}</h2>
          {bloques.map((bloque, idx) => (
            <div key={idx} style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginBottom: 10 }}>
              <select value={bloque.dia} onChange={e => handleBloqueChange(idx, 'dia', e.target.value)} style={{ flex: '1 1 120px', minWidth: 90 }}>
                <option value="">Día</option>
                {DIAS.map(d => <option key={d} value={d.toLowerCase()}>{d}</option>)}
              </select>
              <input type="time" value={bloque.inicio} onChange={e => handleBloqueChange(idx, 'inicio', e.target.value)} style={{ width: 80, flex: '1 1 80px' }} />
              <span style={{flex:'0 0 10px'}}>-</span>
              <input type="time" value={bloque.fin} onChange={e => handleBloqueChange(idx, 'fin', e.target.value)} style={{ width: 80, flex: '1 1 80px' }} />
              <input type="text" value={bloque.aula} onChange={e => handleBloqueChange(idx, 'aula', e.target.value)} placeholder="Aula" style={{ width: 60, flex: '1 1 60px' }} />
              {bloques.length > 1 && <button onClick={() => removeBloque(idx)} style={{ background: 'none', border: 'none', color: '#ef4444', fontWeight: 700, fontSize: 18, cursor: 'pointer' }}>🗑️</button>}
            </div>
          ))}
          <button onClick={addBloque} style={{ margin: '0.5em 0 1em 0', background: '#e0e7ff', color: '#2563eb', border: 'none', borderRadius: 8, padding: '0.5em 1.2em', fontWeight: 700, fontSize: '1em', cursor: 'pointer' }}>+ Agregar día</button>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
            <button onClick={saveHorario} style={{ background: '#2563eb', color: '#fff', border: 'none', borderRadius: 8, padding: '0.6em 1.2em', fontWeight: 700, fontSize: '1.05em', cursor: 'pointer', marginBottom: 6 }}>Guardar</button>
            <button onClick={closeModal} style={{ background: '#f3f4f6', color: '#64748b', border: 'none', borderRadius: 8, padding: '0.6em 1.2em', fontWeight: 700, fontSize: '1.05em', cursor: 'pointer', marginBottom: 6 }}>Cancelar</button>
          </div>
        </div>
      </div>
    )
  );

  return (
  <div style={{ width: '100vw', minHeight: '100vh', maxWidth: '100vw', margin: '0', padding: '4em 0 0 0', background: '#e5e7eb', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowX: 'hidden' }}>
      <style>{`
        .calendario-semanal {
          width: 98vw;
          max-width: 100vw;
          min-width: 0;
          height: clamp(350px, 60vh, 600px);
          min-height: 320px;
          max-height: 70vh;
          border-collapse: separate;
          border-spacing: 0;
          background: #f1f5fa;
          font-family: 'Segoe UI', Arial, sans-serif;
          box-shadow: 0 8px 32px #2563eb33;
          border-radius: 18px;
          overflow: hidden;
          table-layout: fixed;
        }
        .calendario-semanal th {
          background: linear-gradient(90deg, #dbeafe 60%, #e0e7ff 100%);
          color: #1e293b;
          font-size: clamp(1.1em, 2vw, 1.7em);
          font-weight: 800;
          letter-spacing: 0.04em;
          padding: 0.3em 0;
          border-bottom: 2.5px solid #2563eb55;
        }
        .calendario-semanal .hora {
          background: #e5e7eb;
          color: #64748b;
          font-size: 0.85em;
          font-weight: 500;
          text-align: right;
          padding: 0.1em 0.3em;
          border-right: 2px solid #2563eb22;
          min-width: 38px;
          max-width: 38px;
        }
        .calendario-semanal td {
          background: #fff;
          border: none;
          min-width: 90px;
          max-width: 1fr;
          height: 2em;
          font-size: 0.98em;
          color: #1e293b;
          vertical-align: top;
          padding: 0;
        }
        .calendario-semanal td.vacio {
          background: #f3f4f6;
          color: #cbd5e1;
          border: none;
        }
        .calendario-semanal tr:last-child td, .calendario-semanal tr:last-child .hora {
          border-bottom: none;
        }
        .calendario-semanal td:last-child, .calendario-semanal th:last-child {
          border-right: none;
        }
        /* Bloques de materia en el calendario */
        .bloque-materia {
          margin: 0.2em 0.3em;
          background: linear-gradient(120deg, #e0e7ff 60%, #bae6fd 100%);
          border-radius: 16px;
          box-shadow: 0 2px 8px #2563eb22;
          border: 2px solid #60a5fa;
          padding: 0.7em 0.5em;
          font-weight: 700;
          color: #1e293b;
          font-size: 1.08em;
          cursor: pointer;
          transition: box-shadow 0.2s;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
        .bloque-materia span {
          font-weight: 500;
          color: #2563eb;
          font-size: 1em;
          text-align: center;
        }
        .bloque-materia:hover {
          box-shadow: 0 4px 16px #2563eb44;
        }
      `}</style>
      {/* Calendario semanal arriba */}
  <div style={{ width: '100%', maxWidth: '100vw', margin: '2em auto 0 auto', overflowX: 'auto' }}>
        <table className="calendario-semanal">
          <thead>
            <tr>
              <th></th>
              {DIAS.map((dia) => (
                <th key={dia}>{dia}</th>
              ))}
            </tr>
          </thead>
          <tbody>
              {/* Renderizado con rowspan para bloques que abarcan varias horas */}
              {(() => {
                // Mapeo para saber si una celda ya está ocupada por un rowspan
                const ocupadas = {};
                const rows = [];
                for (let h = 0; h < HORAS.length; h++) {
                  const hora = HORAS[h];
                  const tds = [<td key={-1} className="hora">{hora}</td>];
                  for (let d = 0; d < DIAS.length; d++) {
                    const dia = DIAS[d];
                    const key = `${h}-${d}`;
                    if (ocupadas[key]) continue; // Esta celda está ocupada por un rowspan
                    let bloque = null;
                    let renderBloque = false;
                    for (const materia of materias) {
                      // Unir bloques contiguos antes de renderizar
                      const bloquesUnidos = unirBloquesContiguos((horarios[materia.id] || []).filter(b => b.dia === dia.toLowerCase()));
                      for (const b of bloquesUnidos) {
                        const [h0, m0] = b.inicio.split(":").map(Number);
                        const [h1, m1] = b.fin.split(":").map(Number);
                        const t0 = h0 * 60 + m0;
                        const t1 = h1 * 60 + m1;
                        const [hc, mc] = hora.split(":").map(Number);
                        const tc = hc * 60 + mc;
                        if (tc >= t0 && tc < t1) {
                          // Solo renderizar en la primera celda >= inicio
                          if (!bloque) {
                            const idxInicio = HORAS.findIndex(hh => {
                              const [h, m] = hh.split(":").map(Number);
                              return h * 60 + m >= t0;
                            });
                            if (h === idxInicio) {
                              bloque = { ...b, materia };
                              renderBloque = true;
                            } else {
                              bloque = { ...b, materia };
                              renderBloque = false;
                            }
                          }
                        }
                      }
                    }
                    if (bloque && renderBloque) {
                      // Calcular duración en filas correctamente
                      const [h0, m0] = bloque.inicio.split(":").map(Number);
                      const [h1, m1] = bloque.fin.split(":").map(Number);
                      const t0 = h0 * 60 + m0;
                      const t1 = h1 * 60 + m1;
                      let rowspan = 0;
                      for (let hh = h; hh < HORAS.length; hh++) {
                        const [hCelda, mCelda] = HORAS[hh].split(":").map(Number);
                        const tCelda = hCelda * 60 + mCelda;
                        if (tCelda >= t0 && tCelda < t1) rowspan++;
                      }
                      rowspan = Math.max(1, rowspan);
                      for (let k = 1; k < rowspan; k++) {
                        ocupadas[`${h + k}-${d}`] = true;
                      }
                      tds.push(
                        <td key={d} rowSpan={rowspan} style={{ padding: 0, background: 'transparent', verticalAlign: 'middle' }}>
                          <div className="bloque-materia" onClick={() => setEditModal({ open: true, bloque, materia: bloque.materia })}>
                            <div style={{ width: '100%', textAlign: 'center', fontWeight: 800, fontSize: '1.13em', marginBottom: 2 }}>{bloque.materia.nombre}</div>
                            <span>{bloque.inicio} - {bloque.fin} | Aula: {bloque.aula}</span>
                          </div>
                        </td>
                      );
                    } else {
                      // Buscar si hay un bloque que cubre esta celda pero no inicia aquí (para no mostrar nada)
                      const bloqueEnRango = materias.some(materia =>
                        (horarios[materia.id] || []).some(b => {
                          if (b.dia !== dia.toLowerCase()) return false;
                          const [h0, m0] = b.inicio.split(":").map(Number);
                          const [h1, m1] = b.fin.split(":").map(Number);
                          const t0 = h0 * 60 + m0;
                          const t1 = h1 * 60 + m1;
                          const [hc, mc] = hora.split(":").map(Number);
                          const tc = hc * 60 + mc;
                          return tc > t0 && tc < t1;
                        })
                      );
                      if (bloqueEnRango) {
                        // Esta celda está cubierta por un bloque pero no inicia aquí, la ignoro
                        ocupadas[key] = true;
                        continue;
                      }
                      tds.push(<td key={d} className="vacio"></td>);
                    }
                  }
                  rows.push(<tr key={hora}>{tds}</tr>);
                }
                return rows;
              })()}
          </tbody>
        </table>
      </div>

      {/* Cards de materias en estado cursando abajo */}
  <div style={{ width: '98vw', maxWidth: '100vw', margin: '2em auto 0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.7em' }}>
        {materias.map(materia => (
          <div key={materia.id} style={{
            background: '#f8fafc',
            borderRadius: 10,
            boxShadow: '0 1px 4px #2563eb11',
            border: '1.2px solid #c7d2fe',
            padding: '0.7em 0.7em 0.5em 0.7em',
            fontWeight: 600,
            color: '#1e293b',
            fontSize: '1em',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.3em',
            cursor: 'pointer',
            minHeight: 0,
            minWidth: 0,
            alignItems: 'flex-start',
            transition: 'box-shadow 0.2s, border 0.2s',
            userSelect: 'none',
          }}
            onClick={() => openModal(materia)}>
            <div style={{ fontSize: '1.08em', fontWeight: 800, color: '#2563eb', marginBottom: 2, lineHeight: 1.1 }}>{materia.nombre}</div>
            {(horarios[materia.id] && horarios[materia.id].length > 0) ? (
              horarios[materia.id].map((bloque, idx) => (
                <div key={idx} style={{ background: '#fff', borderRadius: 6, padding: '0.25em 0.5em', color: '#334155', fontWeight: 500, fontSize: '0.97em', boxShadow: '0 1px 2px #2563eb08', border: '1px solid #c7d2fe', marginBottom: 2, lineHeight: 1.2, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontWeight: 700 }}>{bloque.dia.charAt(0).toUpperCase() + bloque.dia.slice(1)}</span> {bloque.inicio} - {bloque.fin} <span style={{ color: '#64748b', marginLeft: 6 }}>Aula: {bloque.aula}</span>
                  <button title="Editar" onClick={e => { e.stopPropagation(); setEditModal({ open: true, bloque, materia }); }} style={{ background: 'none', border: 'none', color: '#2563eb', fontSize: 18, marginLeft: 4, cursor: 'pointer', padding: 0, lineHeight: 1 }}>
                    ✏️
                  </button>
                  <button title="Eliminar" onClick={e => { e.stopPropagation(); if(window.confirm('¿Eliminar este bloque de horario?')) deleteHorario(materia.id, bloque.dia); }} style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: 18, marginLeft: 2, cursor: 'pointer', padding: 0, lineHeight: 1 }}>
                    🗑️
                  </button>
                </div>
              ))
            ) : (
              <div style={{ color: '#64748b', fontWeight: 400, fontSize: '0.95em' }}>Sin horario asignado</div>
            )}
          </div>
        ))}
      </div>
      {renderModal()}

      {/* Modal de edición de bloque */}
      {editModal.open && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: '#0008', zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ background: '#fff', borderRadius: 18, padding: '2.5em 2em', minWidth: 340, maxWidth: 600, width: '98vw', boxSizing: 'border-box', boxShadow: '0 6px 40px #2563eb33', position: 'relative' }}>
            <button onClick={closeEditModal} style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', fontSize: 22, color: '#64748b', cursor: 'pointer' }}>×</button>
            <h2 style={{ margin: 0, marginBottom: 18, color: '#2563eb', fontWeight: 800, fontSize: '1.2em', textAlign: 'center' }}>Editar horario de {editModal.materia?.nombre}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginBottom: 18 }}>
              <select value={editModal.bloque?.dia || ''} onChange={e => setEditModal(em => ({ ...em, bloque: { ...em.bloque, dia: e.target.value } }))} style={{ flex: '1 1 120px', minWidth: 90 }}>
                <option value="">Día</option>
                {DIAS.map(d => <option key={d} value={d.toLowerCase()}>{d}</option>)}
              </select>
              <input type="time" value={editModal.bloque?.inicio || ''} onChange={e => setEditModal(em => ({ ...em, bloque: { ...em.bloque, inicio: e.target.value } }))} style={{ width: 80, flex: '1 1 80px' }} />
              <span style={{flex:'0 0 10px'}}>-</span>
              <input type="time" value={editModal.bloque?.fin || ''} onChange={e => setEditModal(em => ({ ...em, bloque: { ...em.bloque, fin: e.target.value } }))} style={{ width: 80, flex: '1 1 80px' }} />
              <input type="text" value={editModal.bloque?.aula || ''} onChange={e => setEditModal(em => ({ ...em, bloque: { ...em.bloque, aula: e.target.value } }))} placeholder="Aula" style={{ width: 60, flex: '1 1 60px' }} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
              <button onClick={saveEdit} style={{ background: '#2563eb', color: '#fff', border: 'none', borderRadius: 8, padding: '0.6em 1.2em', fontWeight: 700, fontSize: '1.05em', cursor: 'pointer', marginBottom: 6 }}>Guardar</button>
              <button onClick={deleteEdit} style={{ background: '#ef4444', color: '#fff', border: 'none', borderRadius: 8, padding: '0.6em 1.2em', fontWeight: 700, fontSize: '1.05em', cursor: 'pointer', marginBottom: 6 }}>Eliminar</button>
              <button onClick={closeEditModal} style={{ background: '#f3f4f6', color: '#64748b', border: 'none', borderRadius: 8, padding: '0.6em 1.2em', fontWeight: 700, fontSize: '1.05em', cursor: 'pointer', marginBottom: 6 }}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
