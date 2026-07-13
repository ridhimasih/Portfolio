function GithubStats() {
  return (
    <section
      id="github"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          GitHub Stats
        </h2>

        <p className="text-center text-gray-400 mb-14">
          My GitHub activity, contributions, and coding journey.
        </p>

        {/* Stats & Streak */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* GitHub Stats */}
          <div className="bg-slate-800 rounded-2xl p-4 flex justify-center">
            <img
              src="https://github-readme-stats.vercel.app/api?username=ridhimasih&show_icons=true&theme=tokyonight&hide_border=true&count_private=true&include_all_commits=true"
              alt="GitHub Stats"
              className="w-full"
              loading="lazy"
              onError={(e) => {
                e.target.src =
                  "https://github-readme-stats-eight-theta.vercel.app/api?username=ridhimasih&show_icons=true&theme=tokyonight";
              }}
            />
          </div>

          {/* GitHub Streak */}
          <div className="bg-slate-800 rounded-2xl p-4 flex justify-center">
            <img
              src="https://streak-stats.demolab.com?user=ridhimasih&theme=tokyonight&hide_border=true"
              alt="GitHub Streak"
              className="w-full"
              loading="lazy"
            />
          </div>

        </div>

        {/* Contribution Graph */}
        <div className="bg-slate-800 rounded-2xl p-6 mt-10">

          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=ridhimasih&theme=tokyo-night&hide_border=true"
            alt="GitHub Contribution Graph"
            className="w-full"
            loading="lazy"
          />

        </div>

      </div>
    </section>
  );
}

export default GithubStats;