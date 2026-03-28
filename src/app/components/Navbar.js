'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-5 border-b bg-stone-50/80 backdrop-blur-md border-stone-200">

      {/* Logo */}
      <Link
        href="/"
        className="tracking-wide text-xl text-stone-900 hover:text-rose-600 transition-colors"
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        Sabeen<span className="text-rose-600">.</span>
      </Link>

      {/* Nav links */}
      <ul className="flex gap-8 list-none">
        {['Projects', 'Skills', 'About', 'Resume'].map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-widest uppercase text-stone-500 hover:text-rose-600 transition-colors"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

    </nav>
  );
}