import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function ProjectCard({
  title,
  subtitle,
  description,
  image,
  technologies,
  demo,
  reverse,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .8 }}
      viewport={{ once: true }}
      className={`grid lg:grid-cols-2 gap-16 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>

        <img
          src={image}
          alt={title}
          className="rounded-3xl border border-white/10 shadow-2xl hover:scale-[1.02] transition duration-500"
        />

      </div>

      <div>

        <p className="uppercase tracking-[4px] text-indigo-400 mb-3">
          {subtitle}
        </p>

        <h3 className="text-5xl font-bold mb-6">
          {title}
        </h3>

        <p className="text-slate-400 leading-8 text-lg mb-8">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 mb-10">

          {technologies.map((tech) => (

            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/20"
            >
              {tech}
            </span>

          ))}

        </div>

        {demo && (

          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            View Live Demo

            <ExternalLink size={18}/>

            <ArrowRight size={18}/>
          </a>

        )}

      </div>
    </motion.div>
  );
}