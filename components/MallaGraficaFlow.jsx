import React, { useEffect, useState } from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import { useMalla } from '../hooks/useMalla';
import MateriaNode from './MateriaNode';

const nodeTypes = { materia: MateriaNode };

export default function MallaGraficaFlow() {
  const { malla, cargarMalla, loading, error } = useMalla();
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => { cargarMalla(); }, [cargarMalla]);

  // Agrupar materias por año para posicionarlas horizontalmente
  const agrupado = malla.reduce((acc, mat) => {
    acc[mat.anio] = acc[mat.anio] || [];
    acc[mat.anio].push(mat);
    return acc;
  }, {});
  const anios = Object.keys(agrupado).map(Number).sort((a, b) => a - b);

  // Generar nodos con posición horizontal por año (cada año en una fila)
  let nodes = [];
  let nodePositions = {};
  anios.forEach((anio, i) => {
    agrupado[anio].forEach((mat, j) => {
      const nodeId = String(mat.id);
      let highlight = false;
      let desbloqueadora = false;
      let opaca = false;
      if (selectedId) {
        const matSel = malla.find(m => String(m.id) === selectedId);
        const correlativasIds = matSel?.correlativas?.map(c => String(c.id)) || [];
        const desbloqueaIds = malla.filter(m => m.correlativas && m.correlativas.some(c => String(c.id) === selectedId)).map(m => String(m.id));
        if (correlativasIds.includes(nodeId)) {
          desbloqueadora = true;
        } else if (selectedId === nodeId || desbloqueaIds.includes(nodeId)) {
          // materia seleccionada o materias que dependen de ella
        } else {
          opaca = true;
        }
        if (correlativasIds.includes(nodeId) || desbloqueaIds.includes(nodeId)) highlight = true;
      }
      nodes.push({
        id: nodeId,
        type: 'materia',
        position: { x: j * 480, y: i * 220 },
        data: {
          label: mat.nombre,
          estado: mat.estado,
          electiva: mat.electiva,
          highlight,
          desbloqueadora,
          opaca
        },
        style: { width: 320 },
        selected: selectedId === nodeId,
      });
    });
  });

  // Mostrar solo las relaciones de correlatividad de la materia seleccionada
  let edges = [];
  if (selectedId) {
    // Materia seleccionada
    const matSel = malla.find(m => String(m.id) === selectedId);
    // Flechas hacia correlativas requeridas
    if (matSel?.correlativas?.length > 0) {
      matSel.correlativas.forEach(cor => {
        edges.push({
          id: `e${cor.id}-${matSel.id}`,
          source: String(cor.id),
          target: String(matSel.id),
          animated: true,
          style: {
            stroke: 'url(#arrow-gradient)',
            strokeWidth: 5,
            filter: 'drop-shadow(0px 0px 6px #2563eb88)',
          },
          markerEnd: {
            type: 'arrowclosed',
            color: '#2563eb',
            width: 32,
            height: 32,
          },
        });
      });
    }
    // Flechas desde materias que dependen de la seleccionada
    malla.forEach(mat => {
      if (mat.correlativas && mat.correlativas.some(c => String(c.id) === selectedId)) {
        edges.push({
          id: `e${selectedId}-${mat.id}`,
          source: String(selectedId),
          target: String(mat.id),
          animated: true,
          style: {
            stroke: 'url(#arrow-gradient-green)',
            strokeWidth: 4,
            strokeDasharray: '8 4',
            filter: 'drop-shadow(0px 0px 6px #05966988)',
          },
          markerEnd: {
            type: 'arrowclosed',
            color: '#059669',
            width: 28,
            height: 28,
          },
        });
      }
    });
  }

  return (
    <div style={{ width: '100%', height: 700, background:'#fff', borderRadius:'16px', boxShadow:'0 2px 16px 0 #2563eb11', padding:'1.5em', marginBottom:'1.5em', overflow:'hidden' }}>
      <h2 style={{fontWeight:700, fontSize:'1.3rem', marginBottom:'1.2rem', color:'#2563eb'}}>Malla Gráfica con Correlativas</h2>
      {loading && <div style={{color:'#2563eb', fontWeight:600}} role="status" aria-live="polite">Cargando...</div>}
      {error && <div style={{color:'#e11d48', fontWeight:600}} role="alert">{error}</div>}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        panOnDrag={true}
        zoomOnScroll={true}
        zoomOnPinch={true}
        minZoom={0.2}
        maxZoom={2.5}
        onNodeClick={(_, node) => setSelectedId(node.id)}
      >
        <svg>
          <defs>
            <linearGradient id="arrow-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <linearGradient id="arrow-gradient-green" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
        <Background />
        <Controls />
        <MiniMap nodeColor={n => n.data.electiva ? '#a21caf' : '#ef4444'} />
      </ReactFlow>
      <div style={{marginTop:'1em', color:'#64748b', fontSize:'1em'}}>Puedes desplazarte y hacer zoom para explorar la malla. Haz click en una materia para resaltarla y ver sus correlativas.</div>
    </div>
  );
}
