import { motion } from "framer-motion";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaExclamationCircle,
  FaCodeCommit,
} from "react-icons/fa";
import { GitHubCalendar } from "react-github-calendar";

const GithubStats = () => {
  return (
    <section
      id="github"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            GitHub Stats
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            My GitHub activity, contributions, and coding journey.
          </p>
        </motion.div>

        {/* Stats + Contribution Section */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* GitHub Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl"
          >
            <div className="bg-slate-900 rounded-xl p-6 h-full">

              <div className="flex items-center gap-3 mb-8">
                <FaGithub className="text-4xl" />

                <h3 className="text-2xl font-bold text-blue-400">
                  Ridhi Masih's GitHub Stats
                </h3>
              </div>

              <div className="space-y-6">

                {/* Stars */}
                <div className="flex items-center gap-4">
                  <FaStar className="text-2xl text-purple-400" />

                  <span className="text-lg font-semibold text-gray-300">
                    Total Stars Earned:
                  </span>

                  <span className="text-xl font-bold text-cyan-400 ml-auto">
                    0
                  </span>
                </div>

                {/* Commits */}
                <div className="flex items-center gap-4">
                  <FaCodeCommit className="text-2xl text-purple-400" />

                  <span className="text-lg font-semibold text-gray-300">
                    Total Commits:
                  </span>

                  <span className="text-xl font-bold text-cyan-400 ml-auto">
                    24
                  </span>
                </div>

                {/* Pull Requests */}
                <div className="flex items-center gap-4">
                  <FaCodeBranch className="text-2xl text-purple-400" />

                  <span className="text-lg font-semibold text-gray-300">
                    Total PRs:
                  </span>

                  <span className="text-xl font-bold text-cyan-400 ml-auto">
                    1
                  </span>
                </div>

                {/* Issues */}
                <div className="flex items-center gap-4">
                  <FaExclamationCircle className="text-2xl text-purple-400" />

                  <span className="text-lg font-semibold text-gray-300">
                    Total Issues:
                  </span>

                  <span className="text-xl font-bold text-cyan-400 ml-auto">
                    0
                  </span>
                </div>

              </div>

              {/* GitHub Profile */}
              <a
                href="https://github.com/ridhimasih"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-lg font-semibold transition duration-300"
              >
                <FaGithub />
                Visit GitHub Profile
              </a>

            </div>
          </motion.div>


          {/* Contribution Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl"
          >

            <div className="bg-slate-900 rounded-xl p-6 h-full flex flex-col justify-center">

              <div className="grid grid-cols-3 text-center">

                {/* Total Contributions */}
                <div className="border-r border-slate-600 px-4">
                  <h3 className="text-4xl font-bold text-blue-400">
                    30
                  </h3>

                  <p className="text-blue-400 mt-3">
                    Total Contributions
                  </p>

                  <p className="text-gray-500 text-sm mt-4">
                    Jun 20, 2024 - Present
                  </p>
                </div>


                {/* Current Streak */}
                <div className="border-r border-slate-600 px-4">

                  <div className="mx-auto w-24 h-24 rounded-full border-8 border-blue-400 flex items-center justify-center">
                    <span className="text-3xl font-bold text-purple-400">
                      2
                    </span>
                  </div>

                  <p className="text-purple-400 font-bold mt-4">
                    Current Streak
                  </p>

                  <p className="text-gray-500 text-sm mt-4">
                    Oct 1 - Oct 2
                  </p>

                </div>


                {/* Longest Streak */}
                <div className="px-4">

                  <h3 className="text-4xl font-bold text-blue-400">
                    2
                  </h3>

                  <p className="text-blue-400 mt-3">
                    Longest Streak
                  </p>

                  <p className="text-gray-500 text-sm mt-4">
                    Feb 28, 2025 - Mar 1, 2025
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>


        {/* GitHub Contribution Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 bg-slate-800 rounded-2xl p-6 md:p-10 border border-slate-700 shadow-xl"
        >

          <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-400 mb-8">
            Ridhi Masih's Contribution Graph
          </h3>

          <div className="overflow-x-auto flex justify-center pb-4">

            <GitHubCalendar
              username="ridhimasih"
              blockSize={14}
              blockMargin={5}
              fontSize={14}
              colorScheme="dark"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default GithubStats;