import React from "react";
import { motion } from "framer-motion";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education">
      <motion.h2
        className="text-2xl font-semibold mb-2 text-blue-400"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>
      <div className="space-y-4">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            className="p-4 bg-blue-950/60 rounded-lg shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
          >
            <div className="font-bold text-blue-300">{edu.degree}</div>
            <div className="text-blue-100">{edu.school} ({edu.period})</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}