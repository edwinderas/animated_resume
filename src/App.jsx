import React from "react";
import { motion } from "framer-motion";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-black min-h-screen text-white font-sans">
      <header className="py-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-blue-400"
        >
          Your Name
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-lg text-blue-200"
        >
          IT Professional • Software Engineer • Cloud Enthusiast
        </motion.p>
      </header>
      <main className="space-y-16 mx-auto max-w-3xl px-4">
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="py-8 text-center text-blue-300">
        &copy; {new Date().getFullYear()} Your Name
      </footer>
    </div>
  );
}

export default App;