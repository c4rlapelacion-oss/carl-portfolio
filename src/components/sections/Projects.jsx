import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import educalendar from "../../assets/projects/educalendar.png";
import erhtciRoom from "../../assets/projects/erhtci-room.png";
import emberJourney from "../../assets/projects/ember-journey.png";
import worshipCompanion from "../../assets/projects/worship-companion.png";

const projects = [
  {
    title: "ERHTCI-Room",
    subtitle: "Room & Faculty Attendance Management System",
    category: "Web Application",
    description:
      "A room availability and faculty attendance management system designed to simplify room monitoring, instructor attendance, QR-based time tracking, and administrative reporting.",
    image: erhtciRoom,
    technologies: [
      "React",
      "Supabase",
      "JavaScript",
      "QR Code",
      "Vercel",
    ],
    link: "https://erhtci-room.vercel.app/login",
    featured: true,
  },

  {
    title: "EMBER Journey",
    subtitle: "QR-Based Interactive Journey",
    category: "Interactive Web Application",
    description:
      "An interactive QR-based journey experience created for a Christian Life Program, combining progress tracking, interactive content, and animated visual experiences.",
    image: emberJourney,
    technologies: [
      "React",
      "Supabase",
      "QR Code",
      "Animation",
      "Responsive Design",
    ],
    link: "https://ember-journey.vercel.app/#/login",
    featured: true,
  },

  {
    title: "EduCalendar",
    subtitle: "Academic Calendar Application",
    category: "Web Application",
    description:
      "A web application designed to organize academic schedules, activities, and important events into a simple and accessible interface.",
    image: educalendar,
    technologies: [
      "Web Development",
      "JavaScript",
      "UI/UX",
      "Responsive Design",
    ],
    link: "https://edu-calendar.base44.app/",
  },

  {
    title: "Worship Companion",
    subtitle: "Offline Worship Music Library",
    category: "Multimedia Web Application",
    description:
      "An offline worship music library that allows users to browse songs, preview local videos, create worship sets, and control playback during worship sessions.",
    image: worshipCompanion,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Local Media",
      "Responsive Design",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 md:px-10 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 mb-4">
            Selected Work
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-950">
            Projects
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-500 leading-relaxed">
            A selection of applications and digital experiences I've designed
            and developed.
          </p>
        </motion.div>


        {/* FEATURED PROJECTS */}
        <div className="space-y-24">

          {projects
            .filter((project) => project.featured)
            .map((project, index) => (

              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
                className="group"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-[0_25px_70px_rgba(15,23,42,0.10)]">

                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />

                  {/* LIVE BADGE */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      Live Project
                    </span>
                  </div>

                </div>


                {/* CONTENT */}
                <div className="grid md:grid-cols-[1fr_auto] gap-8 mt-8">

                  <div>

                    <div className="flex flex-wrap items-center gap-3 mb-3">

                      <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                        {project.category}
                      </span>

                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xl font-medium text-slate-700">
                      {project.subtitle}
                    </p>

                    <p className="mt-5 max-w-3xl text-slate-500 leading-relaxed">
                      {project.description}
                    </p>


                    {/* TECHNOLOGIES */}
                    <div className="flex flex-wrap gap-2 mt-6">

                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                        >
                          {technology}
                        </span>
                      ))}

                    </div>

                  </div>


                  {/* LIVE BUTTON */}
                  <div className="md:pt-2">

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-600 hover:-translate-y-1 shadow-lg"
                    >
                      View Live Demo
                      <ArrowUpRight size={17} />
                    </a>

                  </div>

                </div>

              </motion.article>

            ))}

        </div>


        {/* OTHER PROJECTS */}
        <div className="mt-32">

          <div className="mb-10">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              More Work
            </p>

            <h3 className="mt-2 text-3xl font-bold text-slate-950">
              Other Projects
            </h3>

          </div>


          <div className="grid md:grid-cols-2 gap-8">

            {projects
              .filter((project) => !project.featured)
              .map((project) => (

                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xl transition-all duration-300"
                >

                  <div className="overflow-hidden bg-slate-100">

                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                  </div>


                  <div className="p-7">

                    <div className="flex items-center justify-between gap-4">

                      <div>

                        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                          {project.category}
                        </p>

                        <h4 className="mt-2 text-2xl font-bold text-slate-950">
                          {project.title}
                        </h4>

                      </div>


                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition"
                          aria-label={`Open ${project.title}`}
                        >
                          <ExternalLink size={17} />
                        </a>
                      )}

                    </div>


                    <p className="mt-4 text-slate-500 leading-relaxed">
                      {project.description}
                    </p>


                    <div className="flex flex-wrap gap-2 mt-5">

                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                        >
                          {technology}
                        </span>
                      ))}

                    </div>

                  </div>

                </motion.article>

              ))}

          </div>

        </div>

      </div>

    </section>
  );
}