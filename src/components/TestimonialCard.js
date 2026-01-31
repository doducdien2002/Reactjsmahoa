import React from 'react';
const TestimonialCard = ({ name, quote, date, imgSrc }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 text-center transform hover:scale-105 hover:shadow-xl transition">
    <img 
      src={imgSrc} 
      alt={name} 
      className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-100 shadow-md"
    />
    <p className="text-secondary italic mb-4">“{quote}”</p>
    <p className="text-yellow-400 text-lg">★★★★★</p>
    <p className="text-sm text-gray-500 mt-2 font-medium">{name} • {date}</p>
  </div>
);
export default TestimonialCard