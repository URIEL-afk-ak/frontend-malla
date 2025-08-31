// Servicios centralizados para consumir la API y actualizar el estado global


export async function fetchMaterias() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/malla`);
  const json = await res.json();
  if (json.status !== 'success') throw new Error(json.message);
  return json.data;
}


export async function fetchNotas() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notas`);
  const json = await res.json();
  if (json.status !== 'success') throw new Error(json.message);
  return json.data;
}


export async function fetchHorarios() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/horarios`);
  const json = await res.json();
  if (json.status !== 'success') throw new Error(json.message);
  return json.data;
}
