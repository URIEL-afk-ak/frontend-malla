// Servicios para la malla curricular


export async function fetchMalla() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/malla`);
  const json = await res.json();
  if (!res.ok || json.status !== 'success') throw new Error(json.message || 'Error al obtener malla');
  return json.data;
}


export async function cambiarEstadoMateria(id, nuevoEstado) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/materias/${id}/estado`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nuevoEstado })
  });
  const json = await res.json();
  if (!res.ok || json.status !== 'success') throw new Error(json.message || 'Error al cambiar estado');
  return json.data;
}
