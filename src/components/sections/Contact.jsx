import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-8 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="uppercase tracking-[6px] text-indigo-400 mb-4">
          Contact
        </p>

        <h2 className="text-5xl font-bold mb-8">
          Let's Work Together
        </h2>

        <p className="text-slate-400 text-lg leading-8 max-w-2xl mb-16">
          I'm always open to discussing new opportunities, collaborations,
          or innovative projects. Feel free to reach out through any of the
          contact details below.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-indigo-500 transition">

            <div className="flex items-center gap-4">
              <Mail size={28} className="text-indigo-400" />

              <div>
                <h3 className="text-xl font-semibold">
                  Email
                </h3>
                <p className="text-slate-400">
                  carlapelacion@gmail.com
                </p>
                <p className="text-slate-400">
                  c4rlapelacion@gmail.com
                </p>
              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-indigo-500 transition">

            <div className="flex items-center gap-4">
              <Phone size={28} className="text-indigo-400" />

              <div>
                <h3 className="text-xl font-semibold">
                  Phone
                </h3>

                <p className="text-slate-400">
                  +63 916 700 3857
                </p>
              </div>

            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}