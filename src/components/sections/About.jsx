import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-8 py-32"
    >
      <motion.div
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.7}}
      >
        <p className="text-indigo-400 uppercase tracking-[6px] mb-4">
          About Me
        </p>

        <h2 className="text-5xl font-bold mb-8">
          Designing experiences,
          <br />
          not just websites.
        </h2>

        <p className="text-slate-400 text-xl leading-9 max-w-3xl">

        I'm Carl Darren M. Apelacion, a Computer Engineer and educator with over six years of
        experience in higher education and technical training. Throughout my career,
        I've taught programming, web development, photography, and software
        engineering while mentoring students in building real-world applications.

        Beyond the classroom, I've worked in broadcast media as a Technical Director
        and Production Head, where I managed production systems and digital workflows.
        I enjoy combining technology, design, and education to create software that is
        both functional and meaningful.

        </p>
      </motion.div>
    </section>
  );
}