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
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-16  ">

      {/* LEFT — Name & intro */}
      <div className="flex flex-col self-center px-24 py-48 gap-12 bg-stone-100 h-full">

        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="show"
          className="flex items-center gap-3"
        >
          <div className="w-12 h-px bg-rose-200" />
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
  className="relative flex 
  items-center justify-center overflow-hidden bg-stone-200 min-h-screen pb-0"
>

 

  {/* Small dot */}
  <div className="absolute top-10 left-10 w-12 h-12 rounded-full bg-rose-500 opacity-40" />

  {/* Stat card — top left */}
  {/* <div className="absolute top-24 left-6 bg-white px-5 py-3 shadow-sm border border-stone-100">
    <div className="font-body text-xs tracking-widest uppercase text-stone-400 mb-1">Status</div>
    <div className="font-display text-lg text-stone-900">Available</div>
  </div> */}

 

  {/* Photo — sits at bottom */}
 <div className="w-100 h-100 overflow-hidden rounded-full border z-10">
  {/* w-72 h-72 overflow-hidden rounded-full border-4 border-white shadow-md mb-16 relative  */}
    <Image
      src="/profile-pic.jpeg"
      alt="Sabeen"
      width={350}
      height={350}
      className="w-full h-full object-cover object-top"
      priority
    />
  </div>

   {/* Decorative circle */}
  <div className="absolute top-40 right-60 w-90 h-90 rounded-full border-6 border-rose-300 opacity-70 " />

   {/* Stat card — top right */}
  <div className="bg-rose-400 px-5 py-3 shadow-sm border-4 border-rose-300 absolute bottom-48 right-12">

    

    <div className="font-body text-xs tracking-widest uppercase text-stone-700 mb-1">Stack</div>
    <div className="font-display text-lg text-stone-600">Full Stack</div>
  </div>

  {/* Stat card — bottom left */}
  {/* <div className="absolute bottom-6 left-6 bg-rose-400 px-5 py-3 shadow-sm border border-stone-100">

    <div className="font-body text-xs tracking-widest uppercase text-stone-700 mb-1">Based In</div>
    <div className="font-display text-lg text-stone-700">Seattle</div>
  </div> */}

  {/* Stat card — bottom right */}
  <div className=" bg-rose-400 px-5 py-3 shadow-sm border-4 border-rose-300 absolute bottom-72 right-12">

    <div className="font-body text-xs tracking-widest uppercase text-stone-700 mb-1">Focus</div>
    <div className="font-display text-lg text-stone-600">Frontend</div>
  </div>

</motion.div>
    </section>
  );
}
