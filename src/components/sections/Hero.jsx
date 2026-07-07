import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">

      <motion.div
        initial={{opacity:0,y:50}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8}}
        className="max-w-5xl"
      >

        <p className="uppercase tracking-[8px] text-indigo-400 mb-4">
          Computer Engineer • Front-End Developer • Technical Trainer
        </p>

        <h1 className="text-7xl font-bold leading-tight">
          Building
          <br/>
          Modern Digital
          <br/>
          Experiences.
        </h1>

        <p className="mt-8 text-slate-400 text-xl max-w-xl">
          Computer Engineer, Web Developer, and IT Instructor passionate about creating responsive and elegant user interfaces. Experienced in Graphic Design, Video and Audio Production.
        </p>

        <div className="mt-10 flex gap-4">

          <button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl">
            View Projects
          </button>

          <button className="border border-white/20 hover:border-indigo-400 px-6 py-3 rounded-xl">
            Download Resume
          </button>

        </div>

      </motion.div>

    </section>
  );
}