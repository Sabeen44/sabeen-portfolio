'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  })
};

export default function Hero() {
  return (
    <section className=" h-[85vh] grid grid-cols-1 md:grid-cols-2 pt-20 bg-stone-50 items-center">
      {/* min-h-screen */}

      {/* LEFT — Name & intro */}
      <div className="flex flex-col justify-center px-24  gap-6 bg-stone-50">

        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="show"
          className="flex items-center gap-3"
        >
          <div className="w-8 h-px bg-rose-200" />
          <span className="text-xs tracking-widest uppercase text-rose-600 font-body">
            Available for work
          </span>
        </motion.div>

        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" animate="show"
          className="font-display leading-none text-stone-900 tracking-tight"
          style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)' }}
        >
          Hello, I'm<br />
          <em className="text-rose-400">Sabeen</em>
        </motion.h1>

        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate="show"
          className="text-sm leading-relaxed max-w-sm text-stone-500 font-body"
        >
          A passionate web developer with a knack for creating dynamic,
          responsive websites that deliver exceptional digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3} variants={fadeUp} initial="hidden" animate="show"
          className="flex gap-4 flex-wrap items-center"
        >
          <a
            href="#projects"
            className="font-body text-xs tracking-widest uppercase px-6 py-3 bg-stone-900 text-stone-50 hover:bg-rose-600 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#"
            className="font-body text-xs tracking-widest uppercase text-stone-500 hover:text-rose-600 transition-colors border-b border-stone-200 pb-px"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Trait tags */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate="show"
          className="flex gap-3 flex-wrap mt-2"
        >
          {['Collaboration', 'Empathy', 'Problem-Solving'].map((trait) => (
            <span
              key={trait}
              className="font-body text-xs tracking-widest uppercase px-4 py-2 border border-stone-200 text-stone-500"
            >
              {trait}
            </span>
          ))}
        </motion.div>

      </div>

      {/* RIGHT — Photo panel */}
      <motion.div
        custom={2} variants={fadeUp} initial="hidden" animate="show"
        className="h-[85vh] relative flex items-center justify-center overflow-hidden bg-stone-100 "
      >

        {/* Decorative circle */}
        <div className="absolute top-60 right-80 w-90 h-90 rounded-full border-5 border-rose-300 opacity-50" />

        {/* Small dot */}
        <div className="absolute top-10 left-10 w-10 h-10 rounded-full bg-rose-600 opacity-40" />

        {/* Photo placeholder — replace with your actual photo */}
       <div
  className="w-100 h-100 max-w-sm h-96 overflow-hidden rounded-full z-10"
  // style={{ borderRadius: '50% 50% 0 0 / 60% 60% 0 0' }}
>
  <Image
    src="/profile-pic.jpeg"
    alt="Sabeen"
     width={340}
     height={520}
    className="w-full h-full object-cover object-top"
    priority
  />
</div>

        {/* Stat card */}
        <div className="absolute bottom-10 right-10 bg-rose-400 px-6 py-4 shadow-md border-4 border-rose-300">
          <div className="font-body text-xs tracking-widest uppercase text-stone-600 mb-1 font-bold">
            Stack
          </div>
          <div className="font-display text-2xl font-bold text-stone-600">
            Full Stack
          </div>
        </div>

          <div className="absolute bottom-40 right-10 bg-rose-400 px-6 py-4 shadow-md border-4 border-rose-300">
    <div className="font-body text-xs tracking-widest uppercase text-stone-600 font-bold mb-1">Focus</div>
    <div className="font-display text-2xl font-bold text-stone-600">Frontend</div>
  </div>

      </motion.div>

    </section>
  );
}
