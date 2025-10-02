import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <motion.h2
        className="text-2xl font-semibold mb-2 text-blue-400"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-blue-950/70 p-3 rounded shadow"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="font-bold text-blue-300">{skill.name}</div>
            <div className="text-xs text-blue-200">{skill.level}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}