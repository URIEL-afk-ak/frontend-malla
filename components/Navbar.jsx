
import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
  { href: '/malla', label: 'Malla', icon: '📚' },
  { href: '/malla-grafica', label: 'Malla Gráfica', icon: '🗺️' },
  { href: '/notas', label: 'Notas', icon: '📝' },
  { href: '/horario', label: 'Horarios', icon: '⏰' },
];

export default function Navbar() {
  const router = useRouter();
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255,255,255,0.95)',
      boxShadow: '0 2px 12px 0 rgba(37,99,235,0.07)',
      borderBottom: '1.5px solid #e5e7eb',
      backdropFilter: 'blur(4px)'
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '0.7rem 1.5rem',
        fontWeight: 600,
        fontSize: '1.08rem',
        letterSpacing: '0.01em',
      }}>
        {navItems.map(item => (
          <Link key={item.href} href={item.href} legacyBehavior>
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5em',
                color: router.pathname === item.href ? '#2563eb' : '#23272f',
                background: router.pathname === item.href ? '#e0e7ff' : 'transparent',
                borderRadius: '10px',
                padding: '0.45em 1em',
                transition: 'background 0.18s, color 0.18s',
                boxShadow: router.pathname === item.href ? '0 2px 8px 0 #2563eb22' : 'none',
                fontWeight: router.pathname === item.href ? 700 : 600,
                textDecoration: 'none',
                outline: 'none',
              }}
              tabIndex={0}
              aria-current={router.pathname === item.href ? 'page' : undefined}
            >
              <span style={{fontSize: '1.2em'}}>{item.icon}</span>
              {item.label}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}
