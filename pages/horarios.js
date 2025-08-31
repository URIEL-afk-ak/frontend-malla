import CalendarioHorarios from '../components/CalendarioHorarios';


export default function Horarios() {
  return (
    <div className="container">
      <div className="card">
        <h1 style={{fontWeight:700, fontSize:'2.1rem', marginBottom:'1.5rem'}}>Horarios</h1>
        <CalendarioHorarios />
      </div>
    </div>
  );
}
