
export default function Home() {
  return (
    <div className="container">
      <div className="card" style={{textAlign:'center', padding:'3.5em 2em'}}>
        <h1 style={{fontWeight:700, fontSize:'2.2rem', marginBottom:'1.2rem'}}>Bienvenido a la Malla Curricular</h1>
        <p style={{fontSize:'1.15em', color:'#2563eb', fontWeight:600, marginBottom:'0.7em'}}>Usa el menú para navegar entre las vistas:</p>
        <div style={{display:'flex', justifyContent:'center', gap:'1.2em', flexWrap:'wrap', marginTop:'1.2em'}}>
          <span style={{background:'#e0e7ff', color:'#2563eb', borderRadius:'8px', padding:'0.5em 1.2em', fontWeight:600}}>Malla</span>
          <span style={{background:'#e0e7ff', color:'#2563eb', borderRadius:'8px', padding:'0.5em 1.2em', fontWeight:600}}>Estadísticas</span>
          <span style={{background:'#e0e7ff', color:'#2563eb', borderRadius:'8px', padding:'0.5em 1.2em', fontWeight:600}}>Notas</span>
          <span style={{background:'#e0e7ff', color:'#2563eb', borderRadius:'8px', padding:'0.5em 1.2em', fontWeight:600}}>Horarios</span>
          <span style={{background:'#e0e7ff', color:'#2563eb', borderRadius:'8px', padding:'0.5em 1.2em', fontWeight:600}}>Malla Gráfica</span>
        </div>
      </div>
    </div>
  );
}
