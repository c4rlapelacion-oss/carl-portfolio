import { motion } from "framer-motion";

import resumeFile from "../../assets/resume/carl-apelacion-resume.pdf";
import cvFile from "../../assets/resume/carl-apelacion-cv.pdf";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl"
      >
        <p className="uppercase tracking-[8px] text-indigo-400 mb-4">
          Computer Engineer • Front-End Developer • Technical Trainer
        </p>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
          Creating software
          <br />
          that solves problems
          <br />
          and helps people learn.
        </h1>

        <p className="mt-8 text-slate-400 text-xl max-w-2xl leading-8">
          I am a Computer Engineer, IT Instructor, and Front-End Developer
          passionate about building clean, responsive, and meaningful digital
          experiences.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl transition font-medium"
          >
            View Projects
          </a>

          <a
            href={resumeFile}
            download="Carl-Apelacion-Resume.pdf"
            className="border border-white/20 hover:border-indigo-400 px-6 py-3 rounded-xl transition font-medium"
          >
            Download Resume
          </a>

          <a
            href={cvFile}
            download="Carl-Apelacion-CV.pdf"
            className="border border-white/20 hover:border-indigo-400 px-6 py-3 rounded-xl transition font-medium"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}