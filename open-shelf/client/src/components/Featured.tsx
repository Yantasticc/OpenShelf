import React, { useState, useEffect } from 'react';
import { books } from '../constants/featured-books'; // Adjust the import path as needed

const Featured = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
    }, 3000); // Change every 30 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="relative w-full p-5 rounded-lg shadow-lg bg-white bg-opacity-20 backdrop-blur-lg flex flex-col h-full max-h-[calc(78vh-60px)] overflow-hidden">
      {/* Hidden Featured heading */}
      <h2 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl font-bold mb-4 text-transparent">Featured</h2>
      <div className="absolute inset-0">
        <img
          src={books[currentIndex].cover}
          alt="Book Cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative flex-1 flex flex-col justify-center text-center p-4 bg-black bg-opacity-50 mt-8">
        <div className="text-3xl font-bold text-white mb-2">{books[currentIndex].Name}</div>
        <div className="text-2xl font-medium text-gray-200 mb-2">{books[currentIndex].author}</div>
        <p className="text-lg text-gray-300">{books[currentIndex].description}</p>
      </div>
    </div>
  );
};

export default Featured;
