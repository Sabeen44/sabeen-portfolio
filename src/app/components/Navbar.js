'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b"
      style={{
        background: 'rgba(250, 247, 242, 0.85)',
        backdropFilter: 'blur(12px)',
        borderColor: '#E0D8CF',
      }}
    >

      {/* Logo */}
      <Link
        href="/"
        style={{ fontFamily: 'Georgia, serif', color: '#1A1714', fontSize: '1.2rem' }}
        className="tracking-wide hover:text-rose-500 transition-colors"
      >
        Sabeen<span style={{ color: '#C9625F' }}>.</span>
      </Link>

      {/* Nav links */}
      <ul className="flex gap-8 list-none">
        {['Projects', 'Skills', 'About', 'Resume'].map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-widest uppercase transition-colors"
              style={{ color: '#7A736C', fontFamily: 'sans-serif' }}
              onMouseEnter={(e) => e.target.style.color = '#C9625F'}
              onMouseLeave={(e) => e.target.style.color = '#7A736C'}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

    </nav>
  );
}