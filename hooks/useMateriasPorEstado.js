// Hook para filtrar materias por estado
export function useMateriasPorEstado(materias, estado) {
  return materias.filter(m => m.estado === estado);
}
