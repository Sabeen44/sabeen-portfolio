'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    number: '01',
    category: 'Front-End',
    color: 'text-rose-600',
    border: 'border-rose-200',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Tailwind CSS'],
  },
  {
    number: '02',
    category: 'Back-End',
    color: 'text-stone-900',
    border: 'border-stone-200',
    items: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'MySQL'],
  },
  {
    number: '03',
    category: 'Tools',
    color: 'text-stone-500',
    border: 'border-stone-200',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
  },
];

function SkillCard({ skill, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
      className={`border ${skill.border} p-8 flex flex-col gap-6 bg-white hover:border-rose-300 transition-colors`}
    >

      {/* Card header */}
      <div className="flex items-center justify-between">
        <span className={`font-display text-sm font-bold ${skill.color}`}>
          {skill.category}
        </span>
        <span className="font-body text-xs text-stone-300 tracking-widest">
          {skill.number}
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-stone-100" />

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="font-body text-xs px-3 py-1 border border-stone-200 text-stone-500 hover:border-rose-300 hover:text-rose-600 transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="font-body text-xs text-stone-300 mt-auto pt-4 border-t border-stone-100">
        {skill.items.length} technologies
      </div>

    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="px-24 py-24 bg-stone-50">
      <div className="max-w-6xl w-full mx-auto">

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-body text-xs tracking-widest uppercase text-rose-600">
            02 — Skills
          </span>
          <div className="flex-1 h-px bg-stone-200" />
          <h2 className="font-display text-3xl text-stone-900">
            My Skills
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
