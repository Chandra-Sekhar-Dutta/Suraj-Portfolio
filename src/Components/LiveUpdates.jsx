import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LiveUpdates = () => {
  const [repos, setRepos] = useState([]);
  const [leetcodeStats, setLeetcodeStats] = useState(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });

    // GitHub API call
    fetch('https://api.github.com/users/PINNISURAJ/repos?sort=updated')
      .then(res => res.json())
      .then(data => setRepos(data.slice(0, 3))) // top 3
      .catch(err => console.error('GitHub error:', err));

    // LeetCode API (unofficial) via scraper
    fetch('https://leetcode-stats-api.herokuapp.com/pinnisuraj')
      .then(res => res.json())
      .then(data => setLeetcodeStats(data))
      .catch(err => console.error('LeetCode error:', err));
  }, []);

  return (
    <div className="mt-16 space-y-12 max-w-7xl mx-auto px-6">

      {/* Section Title */}
      <h2
        className="text-3xl md:text-4xl font-bold text-center text-white"
        data-aos="fade-down"
      >
         Live Updates
      </h2>

      {/* GitHub Updates */}
      <div
        className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
        data-aos="fade-up"
      >
        <h3 className="text-xl font-semibold mb-4 text-white">GitHub – Recent Projects</h3>
        {repos.length > 0 ? (
          <ul className="space-y-4 text-gray-200 text-sm">
            {repos.map(repo => (
              <li key={repo.id} className="hover:scale-[1.01] transition-transform">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:underline"
                >
                  🔗 {repo.name}
                </a>
                <p className="text-xs text-gray-400">{repo.description || "No description available."}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">Loading GitHub repos...</p>
        )}
      </div>

      {/* LeetCode Stats */}
      <div
        className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
        data-aos="fade-up"
      >
        <h3 className="text-xl font-semibold mb-4 text-white">LeetCode – DSA Progress</h3>
        {leetcodeStats ? (
          <div className="text-gray-200 space-y-2 text-sm">
            <p>Total Solved: <span className="text-yellow-300 font-medium">{leetcodeStats.totalSolved}</span> / {leetcodeStats.totalQuestions}</p>
            <p>Easy: <span className="text-green-400 font-medium">{leetcodeStats.easySolved}</span> / {leetcodeStats.totalEasy}</p>
            <p>Medium: <span className="text-yellow-400 font-medium">{leetcodeStats.mediumSolved}</span> / {leetcodeStats.totalMedium}</p>
            <p>Hard: <span className="text-red-400 font-medium">{leetcodeStats.hardSolved}</span> / {leetcodeStats.totalHard}</p>
          </div>
        ) : (
          <p className="text-gray-400">Fetching LeetCode stats...</p>
        )}
      </div>

      {/* Codolio Profile Embed */}
      <div
        className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-md hover:shadow-lg transition-all"
        data-aos="fade-up"
      >
        <h3 className="text-xl font-semibold mb-4 text-white">Codolio – My Developer Profile</h3>
        <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/20">
          <iframe
            src="https://codolio.com/profile/PINNI%20SURAJ"
            title="Codolio"
            className="w-full h-full border-none"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default LiveUpdates;
