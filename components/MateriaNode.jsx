import { Handle } from 'reactflow';

export default function MateriaNode({ data, selected }) {
  const color = data.electiva ? '#a21caf' : '#ef4444';
  const textColor = '#23272f';
  let bg;
  let opacity = 1;
  if (data.opaca) {
    opacity = 0.35;
  }
  if (data.desbloqueadora) {
    bg = 'linear-gradient(120deg,#dbeafe 60%,#2563eb 100%)';
  } else if (data.highlight) {
    bg = data.electiva
      ? 'linear-gradient(120deg,#ede9fe 60%,#a21caf 100%)'
      : 'linear-gradient(120deg,#fee2e2 60%,#ef4444 100%)';
  } else {
    bg = data.electiva
      ? (selected ? 'linear-gradient(120deg,#ede9fe 60%,#a21caf 100%)' : 'linear-gradient(120deg,#f3e8ff 60%,#ede9fe 100%)')
      : (selected ? 'linear-gradient(120deg,#fee2e2 60%,#ef4444 100%)' : 'linear-gradient(120deg,#fff1f2 60%,#fee2e2 100%)');
  }

  return (
    <div style={{
      background: bg,
      color: textColor,
      borderRadius: 22,
      boxShadow: data.highlight ? `0 0 0 8px #2563eb55` : (selected ? `0 0 0 6px ${color}55` : '0 4px 18px 0 #23272f18'),
      padding: '2.2em 1.8em 1.8em 1.8em',
      minWidth: 320,
      minHeight: 110,
      maxWidth: 400,
      fontWeight: 700,
      fontSize: '1.55em',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'box-shadow 0.18s, background 0.18s, opacity 0.18s',
      position: 'relative',
      border: data.highlight ? '3px solid #2563eb' : (selected ? `2.5px solid ${color}` : `2px solid #e5e7eb`),
      letterSpacing: '0.03em',
      textShadow: '0 2px 8px #23272f11',
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity,
    }}>
      <Handle type="target" position="top" style={{ background: color, width: 10, height: 10, borderRadius: 5, border:'2px solid #fff' }} />
      <span style={{flex:1, padding:'0 0.2em'}}>{data.label}</span>
      <Handle type="source" position="bottom" style={{ background: color, width: 10, height: 10, borderRadius: 5, border:'2px solid #fff' }} />
    </div>
  );
}
