import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaMapMarkerAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="text-gray-300 text-lg leading-8">
              Hello! I'm{" "}
              <span className="text-blue-400 font-semibold">
                Ridhi Masih
              </span>
              , an MCA student at Galgotias University with a strong interest
              in Java Development, Backend Engineering, and Software
              Development.
            </p>

            <p className="text-gray-400 mt-6 leading-8">
              I enjoy building scalable web applications and backend systems
              using Java, Spring Boot, Python, Django, Flask, React, SQL, and
              REST APIs. I have also worked on Machine Learning and Data
              Analytics projects that strengthened my problem-solving and
              analytical skills.
            </p>

            <p className="text-gray-400 mt-6 leading-8">
              During my internship at Digipodium, I contributed to the
              development of <span className="text-blue-400">DIFIFY</span>, a
              multi-format file comparison tool. This experience improved my
              practical knowledge of full-stack development, teamwork, and
              software engineering practices.
            </p>

            <p className="text-gray-400 mt-6 leading-8">
              I am continuously learning new technologies and currently
              expanding my expertise in Spring Boot, Microservices, Cloud
              Computing, and Data Structures & Algorithms to become a skilled
              Software Engineer.
            </p>

          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-6"
          >

            <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition duration-300 flex items-center gap-5">
              <FaGraduationCap className="text-4xl text-blue-400" />

              <div>
                <h3 className="text-xl font-semibold">
                  Education
                </h3>

                <p>MCA - Galgotias University</p>
                <p>BCA (AI & Data Science)</p>
              </div>

            </div>

            <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition duration-300 flex items-center gap-5">
              <FaLaptopCode className="text-4xl text-blue-400" />

              <div>
                <h3 className="text-xl font-semibold">
                  Technical Skills
                </h3>

                <p>
                  Java • Spring Boot • Python • React • Django • SQL
                </p>
              </div>

            </div>

            <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition duration-300 flex items-center gap-5">
              <FaMapMarkerAlt className="text-4xl text-blue-400" />

              <div>
                <h3 className="text-xl font-semibold">
                  Location
                </h3>

                <p>Greater Noida, Uttar Pradesh, India</p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;