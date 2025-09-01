

export default function Home() {
  return (
    <div className="container" style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'70vh'}}>
      <div className="card" style={{
        textAlign:'center',
        padding:'3.5em 2.5em',
        maxWidth:420,
        margin:'0 auto',
        border:'2.5px solid #2563eb22',
        boxShadow:'0 4px 32px 0 #2563eb18',
        background:'linear-gradient(120deg,#f6f7fa 60%,#e0e7ff 100%)'}}>
        <h1 style={{fontWeight:800, fontSize:'2.3rem', marginBottom:'1.1rem', color:'#2563eb', letterSpacing:'-1px'}}>Bienvenido a la Malla Curricular</h1>
        <p style={{fontSize:'1.13em', color:'#23272f', fontWeight:500, marginBottom:'1.5em'}}>Usa el menú para navegar entre las vistas:</p>
        <div style={{display:'flex', flexDirection:'column', gap:'1.1em', alignItems:'center', marginTop:'1.2em'}}>
          <a href="/malla" className="btn" style={{width:'100%',maxWidth:260,background:'#2563eb',color:'#fff',fontWeight:700,boxShadow:'0 2px 8px #2563eb22',fontSize:'1.13em',letterSpacing:'0.01em'}}>📚 Malla</a>
          <a href="/malla-grafica" className="btn" style={{width:'100%',maxWidth:260,background:'#2563eb',color:'#fff',fontWeight:700,boxShadow:'0 2px 8px #2563eb22',fontSize:'1.13em',letterSpacing:'0.01em'}}>🗺️ Malla Gráfica</a>
          <a href="/notas" className="btn" style={{width:'100%',maxWidth:260,background:'#2563eb',color:'#fff',fontWeight:700,boxShadow:'0 2px 8px #2563eb22',fontSize:'1.13em',letterSpacing:'0.01em'}}>📝 Notas</a>
          <a href="/horario" className="btn" style={{width:'100%',maxWidth:260,background:'#2563eb',color:'#fff',fontWeight:700,boxShadow:'0 2px 8px #2563eb22',fontSize:'1.13em',letterSpacing:'0.01em'}}>⏰ Horarios</a>
        </div>
      </div>
    </div>
  );
}
