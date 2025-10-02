import React from "react";
import { motion } from "framer-motion";
import { contact } from "../data";

export default function Contact() {
  return (
    <section id="contact">
      <motion.h2
        className="text-2xl font-semibold mb-2 text-blue-400"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>
      <motion.div
        className="text-blue-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div>Email: <a className="text-blue-300 underline" href={`mailto:${contact.email}`}>{contact.email}</a></div>
        <div>LinkedIn: <a className="text-blue-300 underline" href={contact.linkedin}>{contact.linkedin}</a></div>
        <div>GitHub: <a className="text-blue-300 underline" href={contact.github}>{contact.github}</a></div>
      </motion.div>
    </section>
  );
}