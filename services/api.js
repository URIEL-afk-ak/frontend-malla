// Funciones para llamar a la API backend
export async function fetchMalla() {
  const res = await fetch('/api/malla');
  return res.json();
}
// Agrega aquí más funciones para otros endpoints
