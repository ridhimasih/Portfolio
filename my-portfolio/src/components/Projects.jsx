import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "DIFIFY",
    description:
      "A multi-format file comparison application that detects differences between text, images, audio, and video files. Built with Python and React for efficient multimedia comparison.",
    tech: [
      "Python",
      "React",
      "Flask",
      "OpenCV",
      "Librosa",
      "FFmpeg",
      "SQLite",
    ],
    github: "https://github.com/ridhimasih/Difify",
    demo: "",
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "A machine learning application that identifies fraudulent credit card transactions using classification algorithms, data preprocessing, feature engineering, and model evaluation.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
      "Tkinter",
    ],
    github:
      "https://github.com/ridhimasih/Credit-Card-Fraud-Detection",
    demo: "",
  },
  {
    title: "Hotel Booking Analysis Dashboard",
    description:
      "An interactive data analytics dashboard that explores hotel booking trends, customer behavior, cancellations, and revenue insights using business intelligence techniques.",
    tech: [
      "R",
      "R Shiny",
      "ggplot2",
      "Plotly",
      "Data Visualization",
      "Analytics",
    ],
    github: "https://github.com/ridhimasih/Hotel-Booking",
    demo: "t",
  },
  {
    title: "Sales Dashboard",
    description:
      "A business intelligence dashboard for analyzing sales performance, revenue, customer insights, and key business metrics using interactive visualizations.",
    tech: [
      "Power BI",
      "Excel",
      "SQL",
      "Data Visualization",
      "Business Analytics",
    ],
    github: "https://github.com/ridhimasih/sales-dashboard",
    demo: "",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-lg font-medium transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-blue-500 hover:bg-blue-500 px-5 py-3 rounded-lg font-medium transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;