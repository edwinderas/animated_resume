import React from "react";
import { motion } from "framer-motion";
import { about } from "../data";

export default function About() {
  return (
    <section id="about">
      <motion.h2
        className="text-2xl font-semibold mb-2 text-blue-400"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-blue-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {about}
      </motion.p>
    </section>
  );
}