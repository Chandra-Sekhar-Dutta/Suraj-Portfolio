import React from 'react';

const TechStack = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-200 leading-relaxed top-6">
      {[
        {
          title: 'Programming Languages',
          items: ['Python', 'SQL', 'C++'],
        },
        {
          title: 'Data Science & ML',
          items: ['Pandas', 'NumPy', 'Streamlit', 'scikit-learn', 'Speech Recognition'],
        },
        {
          title: 'Databases',
          items: ['MySQL'],
        },
        {
          title: 'Web Development',
          items: ['Django', 'HTML/CSS/JavaScript', 'Streamlit'],
        },
        {
          title: 'Tools & Tech',
          items: ['Git & GitHub', 'SMTP', 'VS Code', 'Google Drive API'],
        },
      ].map((category, index) => (
        <div key={index} className="hover:scale-[1.01] transition-transform duration-300">
          <h3 className="text-base font-semibold mb-1 text-yellow-300">{category.title}</h3>
          <ul className="list-inside space-y-0.5 text-sm list-none">
            {category.items.map((item, i) => (
              <li key={i} className="hover:text-yellow-200 transition">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
