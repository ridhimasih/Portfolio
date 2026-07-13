import { motion } from "framer-motion";

const timeline = [
  {
    title: "Master of Computer Applications (MCA)",
    organization: "Galgotias University",
    year: "2025 - Present",
    description:
      "Currently pursuing MCA with a focus on Software Development, Backend Development, Artificial Intelligence, Data Science, and Cloud Computing.",
  },
  {
    title: "Full-Stack MERN Developer Intern",
    organization: "Digipodium",
    year: "Feb 2025 - May 2025",
    description:
      "Developed DIFIFY, a multi-format file comparison tool using Python, React, Flask, OpenCV, Librosa, FFmpeg, and SQLite. Worked on both frontend and backend development while collaborating on real-world project requirements.",
  },
  {
    title: "Bachelor of Computer Applications (AI & Data Science)",
    organization: "Babu Banarasi Das University",
    year: "2022 - 2025",
    description:
      "Graduated with a specialization in Artificial Intelligence and Data Science. Completed academic and real-world projects focused on Python, Machine Learning, Data Analysis, and Web Development.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Education & Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-500 ml-4">

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className="relative ml-8 mb-10 bg-slate-800 p-6 rounded-xl shadow-lg hover:bg-slate-700 transition duration-300"
            >

              {/* Timeline Dot */}
              <div className="absolute -left-11 top-7 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-900"></div>

              <p className="text-blue-400 font-semibold">
                {item.year}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {item.title}
              </h3>

              <h4 className="text-gray-300 mt-1">
                {item.organization}
              </h4>

              <p className="text-gray-400 leading-7 mt-4">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;