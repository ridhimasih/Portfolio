import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "AWS Academy Graduate - Machine Learning Foundations",
    issuer: "AWS Academy",
    year: "2026",
    link: "http://www.credly.com/go/W6h4vaRB",
  },
  {
    title: "Microsoft Excel",
    issuer: "Coursera",
    year: "2025",
    link: "https://coursera.org/verify/ULHP5QZ9B66K",
  },
  {
    title: "GUVI Workshop",
    issuer: "HCL GUVI",
    year: "2025",
    link: "https://www.guvi.in/share-certificate/1me7n12476H3I173Wc",
  },
  {
    title: "Kali Linux",
    issuer: "Board Infinity",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/records/F0BJ6KSWFR8B",
  },
  {
    title: "Artificial Intelligence Analyst",
    issuer: "IBM",
    year: "2024",
    link: "https://courses.bbdu.skillsnetwork.site/certificates/ebbc773401b94c26bf9cb47f2cf3fec0",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    year: "2024",
    link: "https://courses.bbdu.skillsnetwork.site/certificates/afc3c1168d0f4dafb4056a5f1d1521b0",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="bg-slate-950 text-white py-20 px-6"
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
          Certifications
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Professional certifications that strengthen my skills in software
          development, cloud computing, machine learning, cybersecurity, and
          data analytics.
        </motion.p>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.03,
                y: -8,
              }}
              className="bg-slate-800 rounded-2xl border border-slate-700 hover:border-blue-500 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 p-8 flex flex-col h-full"
            >
              <div className="flex-1">

                <FaCertificate className="text-5xl text-blue-500 mb-6" />

                <h3 className="text-xl font-bold leading-7 mb-4 min-h-[70px]">
                  {cert.title}
                </h3>

                <p className="text-blue-400 font-semibold">
                  {cert.issuer}
                </p>

                <p className="text-gray-400 mt-2">
                  {cert.year}
                </p>

              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 transition duration-300 px-5 py-3 rounded-lg font-semibold"
              >
                <FaExternalLinkAlt />
                View Certificate
              </a>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certifications;