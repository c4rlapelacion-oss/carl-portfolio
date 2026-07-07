import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend Development",
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
      "Google Apps Script",
      "XAMPP",
    ],
  },
  {
    title: "Creative Media",
    skills: [
      "Graphic Design",
      "Video Editing",
      "Audio Production",
      "Photography",
      "Visual Layout",
      "Content Creation",
    ],
  },
  {
    title: "Teaching & Training",
    skills: [
      "Technical Training",
      "Curriculum Development",
      "Capstone Mentoring",
      "Public Speaking",
      "Student Assessment",
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
          Skills & Capabilities
        </p>

        <h2 className="text-5xl font-bold mb-8">
          Development,
          <br />
          Design & Training
        </h2>

        <p className="text-slate-400 text-lg leading-8 max-w-3xl mb-16">
          My skill set combines software development, creative media, and
          education. This allows me to build user-focused digital products,
          create visual content, and communicate technical ideas clearly.
        </p>

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