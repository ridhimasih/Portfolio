import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 text-white flex items-center px-6 pt-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg md:text-xl mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Ridhi Masih
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-4 leading-relaxed">
            Java Developer | Python Developer | Backend Developer
          </h2>

          <p className="text-gray-400 leading-8 mt-6 max-w-xl">
            MCA student passionate about building scalable web applications,
            REST APIs, and backend systems. Skilled in Java, Spring Boot,
            Python, Django, Flask, React, SQL, Machine Learning, Docker,
            Git, and Cloud technologies. I enjoy solving real-world problems
            through clean code, efficient system design, and continuous learning.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 transition duration-300 px-6 py-3 rounded-lg font-semibold shadow-lg"
            >
              View Resume
            </a>

            <a
              href="#projects"
              className="border border-blue-500 hover:bg-blue-500 transition duration-300 px-6 py-3 rounded-lg font-semibold"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-gray-500 hover:border-blue-500 hover:bg-blue-500 transition duration-300 px-6 py-3 rounded-lg font-semibold"
            >
              Contact Me
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8 text-3xl">

            <a
              href="https://github.com/ridhimasih"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/ridhi-masih"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/profile.jpeg"
            alt="Ridhi Masih"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-500 shadow-2xl hover:scale-105 transition duration-300"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;