import { useCallback } from 'react';
import { fetchMalla, cambiarEstadoMateria } from '../services/mallaService';
import { usePlan } from '../context/PlanContext';

export function useMalla() {
  const { materias, setMaterias, loading, setLoading, error, setError } = usePlan();

  const cargarMalla = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMalla();
      setMaterias(data); // Solo setear el array nuevo
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [setMaterias, setLoading, setError]);

  const actualizarEstado = async (id, nuevoEstado) => {
    setLoading(true);
    setError(null);
    try {
      const data = await cambiarEstadoMateria(id, nuevoEstado);
      console.log('Materias recibidas tras cambio de estado:', data); // Log para depuración
      setMaterias(data); // Usar la respuesta directa del backend
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { malla: materias, loading, error, cargarMalla, actualizarEstado };
}
