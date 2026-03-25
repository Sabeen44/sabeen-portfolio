'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const links = [
  { label: 'Email', value: 'sh.sabeen@gmail.com', href: 'mailto:sh.sabeen@gmail.com' },
  { label: 'GitHub', value: 'Sabeen44', href: 'https://github.com/Sabeen44' },
  { label: 'LinkedIn', value: 'Sabeen', href: '#' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="bg-stone-900">

      {/* Top rose accent bar */}
      <div className="h-1 bg-rose-600" />

      <div className="px-24 py-24 max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-body text-xs tracking-widest uppercase text-rose-400">
            05 — Contact
          </span>
          <div className="flex-1 h-px bg-stone-700" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h2 className="font-display text-5xl text-stone-50 leading-tight mb-6">
              Let's build<br />
              something<br />
              <em className="text-rose-400">together.</em>
            </h2>
            <p className="font-body text-sm text-stone-400 leading-relaxed max-w-sm">
              I'm always open to new opportunities, collaborations,
              and interesting projects. Feel free to reach out.
            </p>
          </motion.div>

          {/* Right — links */}
          <div className="flex flex-col gap-4">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                className="flex items-center justify-between border border-stone-700 px-6 py-4 group hover:border-rose-600 transition-all bg-stone-800"
              >
                <span className="font-body text-xs text-stone-500 tracking-widest uppercase">
                  {link.label}
                </span>
                <span className="font-body text-sm text-stone-300 group-hover:text-rose-400 transition-colors">
                  {link.value} ↗
                </span>
              </motion.a>
            ))}
          </div>

        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-24 pt-8 border-t border-stone-800 flex items-center justify-between"
        >
          <span className="font-body text-xs text-stone-600">
            © 2024 Sabeen. All rights reserved.
          </span>
          <span className="font-body text-xs text-stone-600">
            Built with Next.js + Tailwind
          </span>
        </motion.div>

      </div>
    </section>
  );
}
