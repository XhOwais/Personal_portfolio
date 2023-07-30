import React, { useState } from 'react';
import '../src/Portfolio.css';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioData = [
    { id: 1, title: 'Project 1', category: 'Ui/Ux' },
    { id: 2, title: 'Project 2', category: 'Web Apps' },
    { id: 3, title: 'Project 3', category: 'Ai Intigration' },
    { id: 4, title: 'Project 4', category: 'Optimized Web' },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredPortfolio =
    selectedCategory === 'all' ? portfolioData : portfolioData.filter(item => item.category === selectedCategory);

  return (
    <div className='main w-full'>
      <div className='categoryHeader w-full flex flex-col items-center justify-center mt-8 md:flex-row md:justify-center'>
        <div className='w-full md:w-2/3 h-14 flex flex-wrap justify-center md:justify-between'>
          <button
            className={`h-14 w-40 bg-first-color text-white rounded-xl hover:bg-third-color mb-2 md:mb-0 ${
              selectedCategory === 'all' && 'bg-third-color'
            }`}
            onClick={() => handleCategoryClick('all')}
          >
            All
          </button>
          <button
            className={`h-14 w-40 bg-first-color text-white rounded-xl hover:bg-third-color mb-2 md:mb-0 ${
              selectedCategory === 'Ui/Ux' && 'bg-third-color'
            }`}
            onClick={() => handleCategoryClick('Ui/Ux')}
          >
            Ui/Ux
          </button>
          <button
            className={`h-14 w-40 bg-first-color text-white rounded-xl hover:bg-third-color mb-2 md:mb-0 ${
              selectedCategory === 'Web Apps' && 'bg-third-color'
            }`}
            onClick={() => handleCategoryClick('Web Apps')}
          >
            Web Apps
          </button>
          <button
            className={`h-14 w-40 bg-first-color text-white rounded-xl hover:bg-third-color mb-2 md:mb-0 ${
              selectedCategory === 'Ai Intigration' && 'bg-third-color'
            }`}
            onClick={() => handleCategoryClick('Ai Intigration')}
          >
            Ai Integration
          </button>
          <button
            className={`h-14 w-40 bg-first-color text-white rounded-xl hover:bg-third-color mb-2 md:mb-0 ${
              selectedCategory === 'Optimized Web' && 'bg-third-color'
            }`}
            onClick={() => handleCategoryClick('Optimized Web')}
          >
            Optimized Web
          </button>
        </div>
      </div>
      <div className='portfolio-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12 px-10'>
        {filteredPortfolio.map(item => (
          <div key={item.id} className='portfolio-item w-auto h-56 rounded-xl bg-section-color'>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
