import { createContext, useContext, useState } from 'react';

const PlanContext = createContext();

export function PlanProvider({ children }) {

  const [materias, setMaterias] = useState([]);
  const [notas, setNotas] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [estadisticas, setEstadisticas] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const value = {
    materias, setMaterias,
    notas, setNotas,
    horarios, setHorarios,
    estadisticas, setEstadisticas,
    loading, setLoading,
    error, setError
  };

  return (
    <PlanContext.Provider value={value}>
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  return useContext(PlanContext);
}
