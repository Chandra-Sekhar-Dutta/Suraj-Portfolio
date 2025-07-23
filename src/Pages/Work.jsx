import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// importing project videos
import AI_ProjectVideo from '../Assets/AI_Project.mp4';
import FraudMessageVideo from '../Assets/FraudDetection.mp4';
import EmailSenderVideo from '../Assets/EmailSender.mp4';

const projects = [
  {
    title: 'Fraud-Message',
    link: 'https://github.com/PINNISURAJ/fraud-messgage',
    date: 'Jul 2024',
    stack: 'Python, NumPy, Pandas, Streamlit, ML',
    video: FraudMessageVideo,
    description: [
      'Developed a fraud message detection system to identify and filter scam or spam messages.',
      'Analyzed patterns in text data such as keywords, message length, and frequency of suspicious terms.',
      'Trained a machine learning model on labeled datasets for accurate message classification.',
      'Provided an effective solution to enhance security in digital communication.'
    ]
  },
  {
    title: 'AI-Project',
    link: 'https://github.com/PINNISURAJ/AI-Project',
    date: 'Sep 2024 - Oct 2024',
    stack: 'Python, Pandas, Machine Learning',
    video: AI_ProjectVideo,
    description: [
      'Developed a personal voice assistant named Jarvis for task automation.',
      'Enabled voice commands to open apps, fetch web info, send emails, and more.',
      'Integrated speech recognition and system control libraries.',
      'Designed for hands-free interaction to boost productivity and convenience.'
    ]
  },
  {
    title: 'Email_Sender',
    link: 'https://github.com/PINNISURAJ/Email_Sender',
    date: 'Feb 2025',
    stack: 'Python',
    video: EmailSenderVideo,
    description: [
      'Developed an Email Sender application using Python.',
      'Automated the process of sending emails with custom subject lines and message bodies.',
      'Integrated smtplib and email libraries for SMTP-based email delivery.',
      'Enabled attachment support and multiple recipient handling for added functionality.'
    ]
  }
]

const Work = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-orange-400 text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-wider"
          data-aos="fade-down"
        >
          Featured Projects
        </h2>

        <div className="flex flex-col space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center justify-between gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              data-aos="fade-up"
            >

              {/* 🎥 Video Preview */}
              <div className="w-full lg:w-1/2">
                <video
                  className="w-full h-64 md:h-72 rounded-2xl shadow-xl object-cover"
                  controls
                  muted
                  loop
                  autoPlay
                  playsInline
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* 📦 Project Info Box */}
              <div className="w-full lg:w-1/2 bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <p className="text-sm text-purple-300 font-medium tracking-wide mb-2">Featured Project</p>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>

                <div className="bg-gradient-to-r from-white/20 to-white/10 p-4 md:p-5 rounded-xl text-sm text-gray-200 leading-relaxed space-y-2">
                  {project.description.map((point, i) => (
                    <p key={i}>• {point}</p>
                  ))}
                </div>

                <div className="mt-4 flex justify-between items-center text-xs text-gray-300">
                  <span className="truncate max-w-[60%]">{project.stack}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-400 hover:underline transition"
                  >
                    🔗 GitHub
                  </a>
                </div>

                <div className="mt-1 text-right text-[11px] italic text-gray-400">{project.date}</div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Work;
