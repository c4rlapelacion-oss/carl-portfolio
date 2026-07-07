import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import educalendar from "../../assets/projects/educalendar.png";
import worshipCompanion from "../../assets/projects/worship-companion.png";

const projects = [
  {
    title: "EduCalendar",
    category: "Academic Scheduling Platform",
    description:
      "EduCalendar is a modern scheduling platform designed to help educators organize academic calendars, class schedules, and school events. It simplifies planning through an intuitive interface while remaining responsive across desktop and mobile devices.",
    technologies: [
      "Base44",
      "AI-Assisted Development",
      "Responsive Design",
    ],
    image: educalendar,
    demo: "https://educalendar.base44.app/",
  },

  {
    title: "Acoustic Worship Companion",
    category: "Offline Worship Application",
    description:
      "An offline-first worship application created for music ministries to organize worship songs, build worship sets, and play local media without requiring an internet connection. Designed to provide a seamless experience during rehearsals and live worship services.",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    image: worshipCompanion,
    demo: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase tracking-[6px] text-indigo-400 mb-4">
          Featured Projects
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          Building Digital
          <br />
          Experiences
        </h2>

        <p className="text-slate-400 text-lg leading-8 max-w-3xl mb-24">
          I enjoy building applications that solve real-world problems through
          clean design, thoughtful user experiences, and practical software
          solutions.
        </p>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              {/* Screenshot */}

              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-3xl border border-white/10 shadow-2xl hover:scale-[1.02] transition duration-500"
                />
              </div>

              {/* Content */}

              <div>
                <p className="uppercase tracking-[4px] text-indigo-400 mb-3">
                  {project.category}
                </p>

                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-lg leading-8 mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition font-semibold"
                  >
                    View Live Demo
                    <ExternalLink size={18} />
                  </a>
                ) : (
                  <span className="text-slate-500 italic">
                    Currently in Development
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}