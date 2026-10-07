import { motion } from "framer-motion";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaExclamationCircle,
} from "react-icons/fa";
import { GitHubCalendar } from "react-github-calendar";

const GithubStats = () => {
  return (
    <section id="github" className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-400">
            GitHub Stats
          </h2>
          <p className="text-gray-400 mt-3">
            My GitHub activity and contributions
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-3xl font-bold text-blue-400 mb-8">
              Ridhi Masih's GitHub Stats
            </h3>

            <div className="space-y-5 text-lg">

              {/* Stars */}
              <div className="flex items-center gap-4">
                <FaStar className="text-purple-400 text-2xl" />
                <span className="font-semibold text-teal-400">
                  Total Stars Earned:
                </span>
                <span className="font-bold text-teal-400 ml-auto">
                  0
                </span>
              </div>

              {/* Commits */}
              <div className="flex items-center gap-4">
                <FaCodeBranch className="text-purple-400 text-2xl" />
                <span className="font-semibold text-teal-400">
                  Total Commits:
                </span>
                <span className="font-bold text-teal-400 ml-auto">
                  28
                </span>
              </div>

              {/* Pull Requests */}
              <div className="flex items-center gap-4">
                <FaCodeBranch className="text-purple-400 text-2xl" />
                <span className="font-semibold text-teal-400">
                  Total PRs:
                </span>
                <span className="font-bold text-teal-400 ml-auto">
                  2
                </span>
              </div>

              {/* Issues */}
              <div className="flex items-center gap-4">
                <FaExclamationCircle className="text-purple-400 text-2xl" />
                <span className="font-semibold text-teal-400">
                  Total Issues:
                </span>
                <span className="font-bold text-teal-400 ml-auto">
                  0
                </span>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4">
                <FaGithub className="text-purple-400 text-2xl" />
                <span className="font-semibold text-teal-400">
                  GitHub:
                </span>
                <a
                  href="https://github.com/ridhimasih"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 ml-auto"
                >
                  View Profile
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-2xl shadow-lg flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-400">
                35
              </div>

              <p className="text-xl text-gray-300 mt-4">
                Total Contributions
              </p>

              <p className="text-teal-400 mt-3">
                Jun 20, 2024 - Present
              </p>
            </div>
          </motion.div>

        </div>

        {/* GitHub Contribution Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-800 p-8 rounded-2xl shadow-lg mt-10 overflow-x-auto"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-6">
            GitHub Contribution Graph
          </h3>

          <div className="min-w-max">
            <GitHubCalendar
              username="ridhimasih"
              colorScheme="dark"
              blockSize={14}
              blockMargin={5}
              fontSize={14}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GithubStats;