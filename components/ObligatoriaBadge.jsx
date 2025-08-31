
const badgeStyle = {
  display: 'inline-block',
  borderRadius: '8px',
  padding: '2px 10px',
  fontSize: '0.92em',
  fontWeight: 600,
  marginRight: '0.5em',
  letterSpacing: '0.01em',
};

export default function ObligatoriaBadge({ tipo }) {
  if (tipo === 'obligatoria') {
    return <span style={{...badgeStyle, background: '#2563eb', color: '#fff'}}>Obligatoria</span>;
  }
  return <span style={{...badgeStyle, background: '#a21caf', color: '#fff'}}>Electiva</span>;
}
