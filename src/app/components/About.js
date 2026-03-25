'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const journey = [
  {
    year: '2020',
    title: 'Student Affairs',
    description: 'Started my career in higher education, supporting students and developing a deep understanding of user needs.',
  },
  {
    year: '2022',
    title: 'Self-Taught',
    description: 'Discovered my passion for web development. Began teaching myself HTML, CSS, and JavaScript.',
  },
  {
    year: '2023',
    title: 'Coding Bootcamp',
    description: 'Enrolled in an intensive bootcamp, immersing myself in full-stack development — React, Node.js, and more.',
  },
  {
    year: '2024',
    title: 'Web Developer',
    description: 'Today I bring a unique perspective to every project, combining technical skills with a user-centered mindset.',
  },
];

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
      className="flex gap-8 group"
    >
      {/* Year + line */}
      <div className="flex flex-col items-center gap-2">
        <span className="font-body text-xs text-rose-600 tracking-widest whitespace-nowrap">
          {item.year}
        </span>
        <div className="w-px flex-1 bg-stone-200 group-last:hidden" />
      </div>

      {/* Content */}
      <div className="pb-10">
        <h3 className="font-display text-lg text-stone-900 mb-2">
          {item.title}
        </h3>
        <p className="font-body text-sm text-stone-500 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="px-24 py-24 bg-stone-50">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

        {/* Left — header + bio */}
        <div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="font-body text-xs tracking-widest uppercase text-rose-600">
              04 — About
            </span>
            <div className="flex-1 h-px bg-stone-200" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-4xl text-stone-900 leading-tight mb-6"
          >
            From student affairs<br />
            to <em className="text-rose-600">web developer</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-body text-sm text-stone-500 leading-relaxed"
          >
            My journey into web development started in an unexpected place.
            My background in student affairs gave me a deep understanding of
            user needs and a commitment to creating accessible, intuitive
            digital experiences.
          </motion.p>

          {/* What I offer */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex flex-col gap-6"
          >
            {[
              { num: '01', title: 'Custom Web Solutions', desc: 'Tailored websites that meet your unique needs and goals.' },
              { num: '02', title: 'User-Centered Design', desc: 'Websites designed with a focus on usability and experience.' },
              { num: '03', title: 'Continuous Improvement', desc: 'Committed to staying current with industry trends.' },
            ].map((item) => (
              <div key={item.num} className="border-t border-stone-200 pt-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-2xl text-stone-200">{item.num}</span>
                  <div>
                    <h4 className="font-body text-sm font-bold text-stone-900 mb-1">{item.title}</h4>
                    <p className="font-body text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — timeline */}
        <div className="flex flex-col pt-16">
          {journey.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
