// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white/10 backdrop-blur-sm py-4 text-white text-sm fixed bottom-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <p>
          📧 Contact:{" "}
          <a
            href="mailto:pinnisuraj@gmail.com"
            className="underline hover:text-yellow-300 transition"
          >
            pinnisuraj@gmail.com
          </a>
        </p>
        <p className="space-x-4">
          <a
            href="https://in.linkedin.com/in/pinni-suraj-014524291"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/PINNISURAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            GitHub
          </a>
          <a
            href="https://codolio.com/profile/PINNI%20SURAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 transition"
          >
            Codolio
          </a>
        </p>
        <p className="text-xs text-gray-300">
          © {new Date().getFullYear()} Pinni Suraj. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
