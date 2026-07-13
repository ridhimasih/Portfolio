import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >

            {/* Email */}
            <div className="flex items-center gap-5 bg-slate-800 p-5 rounded-xl hover:bg-slate-700 transition duration-300">

              <FaEnvelope className="text-3xl text-blue-400" />

              <div>
                <h3 className="font-semibold text-xl">
                  Email
                </h3>

                <a
                  href="mailto:ridhimasih@gmail.com"
                  className="text-gray-400 hover:text-blue-400"
                >
                  ridhimasih@gmail.com
                </a>
              </div>

            </div>

            {/* Phone */}
            <div className="flex items-center gap-5 bg-slate-800 p-5 rounded-xl hover:bg-slate-700 transition duration-300">

              <FaPhoneAlt className="text-3xl text-blue-400" />

              <div>
                <h3 className="font-semibold text-xl">
                  Phone
                </h3>

                <a
                  href="tel:+918081088828"
                  className="text-gray-400 hover:text-blue-400"
                >
                  +91 8081088828
                </a>
              </div>

            </div>

            {/* Location */}
            <div className="flex items-center gap-5 bg-slate-800 p-5 rounded-xl hover:bg-slate-700 transition duration-300">

              <FaMapMarkerAlt className="text-3xl text-blue-400" />

              <div>
                <h3 className="font-semibold text-xl">
                  Location
                </h3>

                <p className="text-gray-400">
                  Greater Noida, Uttar Pradesh, India
                </p>
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-6 pt-4 text-3xl">

              <a
                href="https://github.com/ridhimasih"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/ridhi-masih"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-800 p-4 rounded-lg outline-none border border-slate-700 focus:border-blue-500 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-800 p-4 rounded-lg outline-none border border-slate-700 focus:border-blue-500 transition"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-slate-800 p-4 rounded-lg outline-none border border-slate-700 focus:border-blue-500 transition resize-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 py-4 rounded-lg font-semibold transition duration-300"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;