import React from "react";
import { motion } from "framer-motion";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience">
      <motion.h2
        className="text-2xl font-semibold mb-2 text-blue-400"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>
      <div className="space-y-6">
        {experience.map((job, idx) => (
          <motion.div
            key={idx}
            className="p-4 bg-blue-950/60 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
          >
            <div className="flex justify-between items-center">
              <span className="font-bold text-blue-300">{job.title}</span>
              <span className="text-sm text-blue-200">{job.period}</span>
            </div>
            <div className="text-blue-100">{job.company}</div>
            <ul className="list-disc pl-5 mt-2 text-blue-100">
              {job.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}