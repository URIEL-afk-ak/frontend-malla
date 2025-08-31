import MallaGraficaFlow from '../components/MallaGraficaFlow';


export default function MallaGraficaPage() {
  return (
    <div className="container">
      <div className="card">
  {/* Título eliminado por pedido del usuario */}
        <div style={{background:'#f8fafc', borderRadius:'12px', padding:'1.2em'}}>
          <MallaGraficaFlow />
        </div>
      </div>
    </div>
  );
}
