
const badgeStyles = {
  pendiente: {
    background: '#fff',
    color: '#ef4444',
    border: '1.5px solid #ef4444',
  },
  cursando: {
    background: '#fff',
    color: '#f59e42',
    border: '1.5px solid #f59e42',
  },
  regular: {
    background: '#fff',
    color: '#1d4ed8',
    border: '1.5px solid #1d4ed8',
  },
  aprobada: {
    background: '#fff',
    color: '#059669',
    border: '1.5px solid #059669',
  }
};

export default function MateriaEstadoBadge({ estado }) {
  const style = {
    display: 'inline-block',
    borderRadius: '8px',
    padding: '2px 12px',
    fontSize: '0.85em',
    fontWeight: 700,
    textTransform: 'capitalize',
    letterSpacing: '0.01em',
    minWidth: 60,
    textAlign: 'center',
    margin: '0.1em 0',
    ...badgeStyles[estado] || badgeStyles.pendiente
  };
  return <span style={style}>{estado}</span>;
}
