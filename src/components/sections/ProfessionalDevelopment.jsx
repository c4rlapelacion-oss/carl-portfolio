import { motion } from "framer-motion";
import { Award, GraduationCap, Mic } from "lucide-react";

const certifications = [
  {
    year: "2025",
    title: "Trainer's Methodology I (TM I)",
    issuer: "TESDA",
  },
  {
    year: "2025",
    title: "Animation NC II",
    issuer: "TESDA",
  },
  {
    year: "2024",
    title: "Bread and Pastry Production NC II",
    issuer: "TESDA",
  },
  {
    year: "2020",
    title: "TESOL",
    issuer: "Teaching English to Speakers of Other Languages",
  },
  {
    year: "2020",
    title: "TEYL",
    issuer: "Teaching English to Young Learners",
  },
];

const engagements = [
  {
    year: "2025",
    title: "Resource Speaker",
    description: "Workshop on Database Management Systems",
    organization: "Southern Luzon State University – Tayabas Campus",
  },
  {
    year: "2025",
    title: "Resource Speaker",
    description: "Seminar on Database Management Systems",
    organization: "Southern Luzon State University – Tayabas Campus",
  },
];

const recognitions = [
  {
    year: "2026",
    title: "Certificate of Recognition",
    description:
      "Recognized for contributions in Web Technologies during the 2026 WorldSkills Philippines – Quezon.",
    organization: "WorldSkills Philippines – Quezon",
  },
];

export default function ProfessionalDevelopment() {
  return (
    <section
      id="professional-development"
      className="max-w-6xl mx-auto px-8 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="uppercase tracking-[6px] text-indigo-400 mb-4">
          Professional Development
        </p>

        <h2 className="text-5xl font-bold mb-8">
          Lifelong Learning &
          <br />
          Professional Growth
        </h2>

        <p className="text-slate-400 text-lg leading-8 max-w-3xl mb-16">
          I believe continuous learning is essential to staying relevant in
          technology and education. Through professional certifications,
          speaking engagements, and industry recognition, I continue to expand
          my expertise while sharing knowledge with students and fellow
          professionals.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Certifications */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-indigo-500 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-indigo-400" size={28} />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-indigo-500 pl-4"
                >
                  <p className="text-indigo-400 text-sm">{item.year}</p>

                  <h4 className="font-semibold text-lg mt-1">
                    {item.title}
                  </h4>

                  <p className="text-slate-400 text-sm">
                    {item.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Speaking Engagements */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-indigo-500 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <Mic className="text-indigo-400" size={28} />
              <h3 className="text-2xl font-bold">
                Speaking Engagements
              </h3>
            </div>

            <div className="space-y-6">
              {engagements.map((item) => (
                <div
                  key={item.description}
                  className="border-l-2 border-indigo-500 pl-4"
                >
                  <p className="text-indigo-400 text-sm">{item.year}</p>

                  <h4 className="font-semibold text-lg mt-1">
                    {item.title}
                  </h4>

                  <p className="text-slate-300">
                    {item.description}
                  </p>

                  <p className="text-slate-400 text-sm">
                    {item.organization}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-indigo-500 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-indigo-400" size={28} />
              <h3 className="text-2xl font-bold">
                Recognition
              </h3>
            </div>

            <div className="space-y-6">
              {recognitions.map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-indigo-500 pl-4"
                >
                  <p className="text-indigo-400 text-sm">{item.year}</p>

                  <h4 className="font-semibold text-lg mt-1">
                    {item.title}
                  </h4>

                  <p className="text-slate-300">
                    {item.description}
                  </p>

                  <p className="text-slate-400 text-sm">
                    {item.organization}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}