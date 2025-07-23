import React, { useState } from 'react';

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default redirect

    const response = await fetch("https://formspree.io/f/xgvzarek", {
      method: "POST",
      headers: {
        "Accept": "application/json"
      },
      body: new FormData(e.target),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-semibold text-gray-300 mb-1">Your Name</label>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
          className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-semibold text-gray-300 mb-1">Your Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-sm font-semibold text-gray-300 mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          placeholder="What would you like to say?"
          className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-none"
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="inline-block bg-yellow-400 text-black font-bold px-6 py-2 rounded-md shadow-md hover:bg-yellow-300 hover:scale-105 transition-all"
        >
           Send Message
        </button>
      </div>

      {submitted && (
        <div className="mt-8 p-4 bg-green-700 bg-opacity-80 text-white text-center rounded-xl shadow-md animate-fade-in">
          <h3 className="text-xl font-semibold">Form submitted successfully!</h3>
        </div>
      )}
    </form>
  );
};

export default Form;
