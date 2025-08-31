// Hook para calcular si una materia está desbloqueada en frontend (además de backend)
export function useDesbloqueo(materia, materias, correlativas) {
  if (!materia || !correlativas) return false;
  const corrs = correlativas.filter(c => c.materiaOrigenId === materia.id);
  for (const corr of corrs) {
    const matDestino = materias.find(m => m.id === corr.materiaDestinoId);
    if (corr.tipo === 'regular' && matDestino && !['regular', 'aprobada'].includes(matDestino.estado)) return false;
    if (corr.tipo === 'aprobada' && matDestino && matDestino.estado !== 'aprobada') return false;
  }
  return true;
}
