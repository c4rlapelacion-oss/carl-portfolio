import { motion } from "framer-motion";

import profileImage from "../../assets/images/profile.png";
import resumeFile from "../../assets/resume/carl-apelacion-resume.pdf";
import cvFile from "../../assets/resume/carl-apelacion-cv.pdf";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[8px] text-indigo-400 mb-4">
            Front-End Developer • Technical Trainer • Creative Media Specialist
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/30 blur-3xl rounded-full"></div>

            <img
              src={profileImage}
              alt="Carl Apelacion"
              className="relative w-[320px] md:w-[420px] rounded-3xl border border-white/10 shadow-2xl object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}