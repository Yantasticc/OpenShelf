import { AiTwotoneDislike } from "react-icons/ai"; 
import { AiTwotoneLike } from "react-icons/ai"; 
import React from 'react';

const ItemCard = () => {
  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden text-white p-4">
      {/* Book Cover */}
      <div className="relative w-full h-48 mb-4">
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220"
          alt="Book Cover"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* Book Details and Actions */}
      <div className="flex flex-col justify-between h-full">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold">Book Title</h3>
          <p className="text-lg text-gray-300">Author Name</p>
          <div className="flex items-center gap-4 mx-3 mt-4 md:flex-row md:justify-center md:gap-6">
            <div className="flex items-center space-x-2">
              <AiTwotoneDislike className="size-7" />
              <span>1</span>
            </div>
            <button className="bg-white bg-opacity-50 px-8 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500">
              Read
            </button>
            <div className="flex items-center space-x-2">
              <AiTwotoneLike className="size-7" />
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
