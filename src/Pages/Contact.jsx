import React from 'react';
import Form from '../Components/Form';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-orange-400 text-white pt-32 pb-24 px-6 font-sans">
      <div className="max-w-3xl mx-auto text-center space-y-10">

        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl font-bold tracking-wide"
          data-aos="fade-down"
        >
          Let's Get in Touch
        </h1>

        {/* Subheading */}
        <p
          className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          I'm always open to collaborating on innovative ideas, exciting projects, or simply having a good conversation.
          Feel free to reach out!
        </p>

        {/* Form Container */}
        <div
          className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          data-aos="fade-up"
        >
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
