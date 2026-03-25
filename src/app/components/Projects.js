'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    number: '01',
    title: 'Project One',
    description: 'A brief description of what this project does, the problem it solves, and who it is for.',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    number: '02',
    title: 'Project Two',
    description: 'A brief description of what this project does, the problem it solves, and who it is for.',
    tags: ['Next.js', 'Tailwind CSS', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    number: '03',
    title: 'Project Three',
    description: 'A brief description of what this project does, the problem it solves, and who it is for.',
    tags: ['JavaScript', 'Express', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
      className="group border border-stone-200 bg-white p-8 flex flex-col gap-5 hover:border-rose-300 transition-all"
    >

      {/* Top row — number + links */}
      <div className="flex items-center justify-between">
        <span className="font-body text-xs text-stone-300 tracking-widest">
          {project.number}
        </span>
        <div className="flex gap-4">
          <a
            href={project.githubUrl}
            className="font-body text-xs tracking-widest uppercase text-stone-400 hover:text-rose-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href={project.liveUrl}
            className="font-body text-xs tracking-widest uppercase text-stone-400 hover:text-rose-600 transition-colors"
          >
            Live ↗
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-stone-100 group-hover:bg-rose-100 transition-colors" />

      {/* Title */}
      <h3 className="font-display text-2xl text-rose-400 group-hover:text-rose-600 transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-stone-500 leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-body text-xs px-3 py-1 border border-stone-200 text-stone-400"
          >
            {tag}
          </span>
        ))}
      </div>

    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="px-24 py-24 bg-white">
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
            03 — Projects
          </span>
          <div className="flex-1 h-px bg-stone-200" />
          <h2 className="font-display text-3xl text-stone-900">
            My Work
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
