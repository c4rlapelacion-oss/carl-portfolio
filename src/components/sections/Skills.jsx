import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      "PHP",
      "MySQL",
      "Firebase",
      "REST APIs",
      "Google Apps Script",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "XAMPP",
      "Vite",
    ],
  },
  {
    title: "Teaching & Leadership",
    skills: [
      "Curriculum Development",
      "Technical Training",
      "Capstone Advising",
      "Public Speaking",
      "Project Mentoring",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-8 py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase tracking-[6px] text-indigo-400 mb-4">
          Skills & Technologies
        </p>

        <h2 className="text-5xl font-bold mb-16">
          Building with
          <br />
          Modern Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 hover:border-indigo-500 transition"
            >
              <h3 className="text-2xl font-bold mb-6">{group.title}</h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}