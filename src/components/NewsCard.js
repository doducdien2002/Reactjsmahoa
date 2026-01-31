import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ id, title, description, imgSrc }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition flex flex-col h-full">
    {/* Ảnh */}
    <div className="w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        onError={(e) => {
          // fallback ảnh khi link hỏng
          e.target.src = "https://via.placeholder.com/400x200?text=No+Image";
        }}
      />
    </div>

    {/* Nội dung */}
    <div className="flex flex-col flex-1 p-5">
      <h3 className="text-lg font-semibold text-primary line-clamp-2">{title}</h3>
      <p className="text-secondary text-sm mt-2 line-clamp-3 flex-grow">
        {description}
      </p>

      {/* Link */}
      <Link 
        to={`/news/${id}`} 
        className="text-blue-600 mt-3 inline-block font-medium hover:underline"
      >
        Đọc thêm →
      </Link>
    </div>
  </div>
);

export default NewsCard;
