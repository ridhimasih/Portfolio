import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Left */}
          <div className="text-center md:text-left">

            <h2 className="text-3xl font-bold text-blue-500">
              Ridhi<span className="text-white">.</span>
            </h2>

            <p className="text-gray-400 mt-3">
              Java Developer | Python Developer | Backend Developer
            </p>

            <p className="text-gray-500 mt-2 text-sm">
              Built with React, Tailwind CSS & Framer Motion
            </p>

          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 text-3xl">

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

            <a
              href="#home"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaArrowUp />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-10 pt-6">

          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Ridhi Masih. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;