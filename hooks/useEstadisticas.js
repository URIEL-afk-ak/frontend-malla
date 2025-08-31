import { useCallback } from 'react';
import { usePlan } from '../context/PlanContext';

export function useEstadisticas() {
  const { estadisticas, setEstadisticas, loading, setLoading, error, setError } = usePlan();

  const cargarEstadisticas = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('http://localhost:3000/api/estadisticas/resumen');
      const json = await res.json();
      if (json.status !== 'success') throw new Error(json.message);
      setEstadisticas(json.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [setEstadisticas, setLoading, setError]);

  return { estadisticas, loading, error, cargarEstadisticas };
}
