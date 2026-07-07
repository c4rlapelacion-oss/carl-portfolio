import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-3xl top-10 left-10"
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-3xl bottom-0 right-0"
      />

    </div>
  );
}