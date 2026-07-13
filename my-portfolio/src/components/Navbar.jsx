import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Certifications",
    "Github",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#home">
          <h1 className="text-2xl font-bold text-blue-500 cursor-pointer hover:text-blue-400 transition">
            Ridhi<span className="text-white">.</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-blue-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-5">

          <a
            href="https://github.com/ridhimasih"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl hover:text-blue-400 transition duration-300 hover:scale-110" />
          </a>

          <a
            href="https://linkedin.com/in/ridhi-masih"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl hover:text-blue-400 transition duration-300 hover:scale-110" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
          >
            Resume
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 px-6 py-4">

          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-3 hover:text-blue-400 transition duration-300"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 bg-blue-500 text-center py-3 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
          >
            Resume
          </a>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 pt-6 text-2xl">

            <a
              href="https://github.com/ridhimasih"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="hover:text-blue-400 transition duration-300" />
            </a>

            <a
              href="https://linkedin.com/in/ridhi-masih"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="hover:text-blue-400 transition duration-300" />
            </a>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;