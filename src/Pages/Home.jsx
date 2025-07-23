import React, { useEffect } from 'react';
import TechStack from '../Components/TechStack';
import SurajProfilePhoto from '../assets/SurajProfilePhoto.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
      AOS.init({ once: true, duration: 800 });
    }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-orange-400 text-white font-sans overflow-hidden">

      {/* Background Name Layer */}
      <h1 className="absolute top-16 left-1/2 transform -translate-x-1/2 text-[180px] md:text-[240px] font-bold text-white opacity-10 tracking-widest select-none z-0">
        SURAJ
      </h1>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

        {/* Left: Intro */}
        <div className="space-y-6 col-span-1 hover:scale-[1.01] transition-all duration-300">
          <h2 className="text-4xl md:text-5xl font-bold">
            Hi 👋, I'm <span className="text-yellow-300">Pinni Suraj</span>
          </h2>
          <p className="text-lg text-gray-200">
            A passionate Computer Science student specializing in IoT and AI-driven solutions.
            <br /><br />
            Aspiring Software Engineer with strong skills in Python, SQL, data science, and ML tools like Pandas, NumPy, Streamlit. Solved 300+ LeetCode problems and enjoy building impactful tech.
          </p>
          <a
            href="https://drive.google.com/file/d/1gQQqhisH0s0K4M4EwZXKC2Rh12oxAcZ9/view?usp=drivesdk"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded shadow-md transition hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Download Resume
          </a>
        </div>

        {/* Center: Profile Image */}
        <div className="flex justify-center col-span-1">
          <div className="relative w-72 h-72 md:w-80 md:h-80 group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-300/30 via-purple-400/30 to-indigo-600/30 rounded-full blur-2xl z-0" />
            <img
              src={SurajProfilePhoto}
              alt="Pinni Suraj"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Right: Tech Stack */}
        <div className="text-white transition pt-24 pb-24 hover:scale-[1.02] duration-300">
          <h3 className="text-2xl font-semibold mb-4">🛠️ Tech Stack</h3>
          <TechStack />
        </div>
      </div>

    </div>
  );
};

export default Home;
