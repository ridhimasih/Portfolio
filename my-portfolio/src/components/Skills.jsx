import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiDjango,
  SiFlask,
  SiMysql,
  SiScikitlearn,
} from "react-icons/si";

const skills = [
  {
    name: "Java",
    icon: <FaJava size={45} />,
    color: "text-red-500",
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot size={45} />,
    color: "text-green-500",
  },
  {
    name: "Python",
    icon: <FaPython size={45} />,
    color: "text-yellow-400",
  },
  {
    name: "React",
    icon: <FaReact size={45} />,
    color: "text-cyan-400",
  },
  {
    name: "JavaScript",
    icon: <FaJs size={45} />,
    color: "text-yellow-300",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={45} />,
    color: "text-green-400",
  },
  {
    name: "Django",
    icon: <SiDjango size={45} />,
    color: "text-green-300",
  },
  {
    name: "Flask",
    icon: <SiFlask size={45} />,
    color: "text-gray-300",
  },
  {
    name: "SQL",
    icon: <FaDatabase size={45} />,
    color: "text-purple-400",
  },
  {
    name: "MySQL",
    icon: <SiMysql size={45} />,
    color: "text-blue-500",
  },
  {
    name: "Machine Learning",
    icon: <SiScikitlearn size={45} />,
    color: "text-orange-400",
  },
  {
    name: "Git",
    icon: <FaGitAlt size={45} />,
    color: "text-orange-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={45} />,
    color: "text-white",
  },
  {
    name: "Docker",
    icon: <FaDocker size={45} />,
    color: "text-blue-500",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 size={45} />,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt size={45} />,
    color: "text-blue-400",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Technical Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-400 mb-16 max-w-3xl mx-auto"
        >
          Technologies and tools I use to build scalable backend systems,
          responsive web applications, and intelligent software solutions.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.08,
                y: -8,
              }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-center"
            >
              <div className={`${skill.color} flex justify-center mb-4`}>
                {skill.icon}
              </div>

              <h3 className="font-semibold text-lg">
                {skill.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;