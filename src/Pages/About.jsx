import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LiveUpdates from '../Components/LiveUpdates';

const About = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-orange-400 text-white pt-32 pb-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">   

        {/* Section Title */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center tracking-wider text-white"
          data-aos="fade-down "
        >
          About Me
        </h2>

        {/* Description */}
        <p
          className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto text-center mb-16 leading-relaxed"
          data-aos="fade-up"
        >
          Pre-final-year B.Tech (CSE - IoT) student with strong DSA skills (300+ LeetCode problems). Experienced in Python, SQL,
          and building ML-powered tools. Passionate about solving real-world problems using data-driven approaches. Actively
          involved in tech communities and hackathons.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">

          {/* Technical Skills */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">Technical Skills</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
              <li>Python, SQL, C++</li>
              <li>Pandas, NumPy, Streamlit, scikit-learn</li>
              <li>Speech Recognition, MySQL</li>
              <li>Django, HTML/CSS/JavaScript</li>
              <li>Git & GitHub, SMTP, VS Code</li>
            </ul>
          </div>

          {/* Experience */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">Experience</h3>
            <div className="text-sm text-gray-200 space-y-4">
              <div>
                <strong className="text-white">CogniMuse</strong><br />
                <span className="text-xs text-gray-400">Jun 2024 - Aug 2025 · AI Engineer · Remote</span>
                <p className="mt-1">Built a proof of concept (POC) for an AI-driven solution to tackle critical societal challenges using ML pipelines.</p>
              </div>
              <div>
                <strong className="text-white">Computer Society of India</strong><br />
                <span className="text-xs text-gray-400">Sep 2023 - Present · Executive Member</span>
                <p className="mt-1">Organized and led workshops with 80+ participants. Mentored in Django full-stack sessions and coordinated an AI workshop.</p>
              </div>
            </div>
          </div>

          {/* Publications */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">Publications</h3>
            <div className="text-sm text-gray-200 space-y-3">
              <div>
                <strong className="text-white">
                  Maintenance and Preservation of Mridangam Using Machine Learning
                </strong><br />
                <span className="text-xs italic text-gray-400">International Journal of Scientific Development and Research</span>
              </div>
              <p>
                Developed a predictive maintenance model for Mridangam (South Indian percussion) to analyze wear patterns and enhance tonal quality.
              </p>
              <p>
                Replaced subjective upkeep with standardized ML-based recommendations, improving longevity and accessibility for artisans.
              </p>
              <a
                href="https://ijsdr.org/viewpaperforall.php?paper=IJSDR2504375"
                className="inline-block mt-2 text-blue-300 hover:text-blue-400 hover:underline transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 View Publication ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      <LiveUpdates/>
    </div>
  );
};

export default About;
