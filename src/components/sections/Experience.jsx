import { motion } from "framer-motion";
import { GraduationCap, Radio, Briefcase } from "lucide-react";

const experiences = [
  {
    year: "Sep 2025 – Present",
    title: "Full-time Instructor / Trainer",
    company: "El Royale Hotelier Training Center Inc.",
    icon: <GraduationCap size={28} />,
    description:
      "Deliver competency-based training in Information Technology, programming, web development, photography, information assurance and security, and capstone project courses while mentoring students in building real-world applications.",
    skills: [
      "Technical Training",
      "Programming",
      "Web Development",
      "Capstone",
      "Photography",
    ],
  },
  {
    year: "2024 – Aug 2025",
    title: "Part-time IT Instructor",
    company: "El Royale Hotelier Training Center Inc.",
    icon: <GraduationCap size={28} />,
    description:
      "Conducted classes in programming and web development while working concurrently as Technical Director at Destiny Radio.",
    skills: [
      "Programming",
      "Student Mentoring",
      "Web Development",
    ],
  },
  {
    year: "2024 – Aug 2025",
    title: "Technical Director & Production Head",
    company: "96.7 Destiny Radio",
    icon: <Radio size={28} />,
    description:
      "Managed broadcast operations, production workflow, audio engineering, and technical infrastructure.",
    skills: [
      "Broadcast",
      "Leadership",
      "Audio Production",
    ],
  },
  {
    year: "2023 – 2024",
    title: "Part-time Radio DJ",
    company: "DWVM Spirit FM",
    icon: <Briefcase size={28} />,
    description:
      "Hosted live radio programs and supported station production.",
    skills: [
      "Broadcasting",
      "Communication",
    ],
  },
  {
    year: "2020 – 2024",
    title: "IT Instructor",
    company: "Southern Luzon State University – Tayabas Campus",
    icon: <GraduationCap size={28} />,
    description:
      "Taught programming, databases, systems analysis, software engineering, and web development while advising capstone projects.",
    skills: [
      "Programming",
      "Database",
      "Software Engineering",
      "Capstone",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-8 py-32"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase tracking-[6px] text-indigo-400 mb-4">
          Career Journey
        </p>

        <h2 className="text-5xl font-bold mb-8">
          Building Through
          <br />
          Technology & Education
        </h2>

        <p className="text-slate-400 text-lg leading-8 max-w-3xl mb-20">
          From teaching future developers to leading broadcast technology,
          my career has been driven by a passion for technology, education,
          and creating meaningful digital experiences.
        </p>

        <div className="relative border-l border-white/10 ml-5">
          {experiences.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="mb-16 ml-10"
            >
              <div className="absolute -left-[22px] bg-indigo-500 rounded-full p-3">
                {job.icon}
              </div>

              <p className="text-indigo-400 text-sm mb-2">
                {job.year}
              </p>

              <h3 className="text-2xl font-bold">
                {job.title}
              </h3>

              <p className="text-slate-400 mb-4">
                {job.company}
              </p>

              <p className="text-slate-300 leading-8 mb-6">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}