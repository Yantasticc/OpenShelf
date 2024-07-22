import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
import React from 'react';

interface ItemCardProps {
  bookName: string;
  bookAuthor: string;
  bookCover: string;
  likes: number;
  dislikes: number;
  bookSource: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ bookName, bookAuthor, bookCover, likes, dislikes, bookSource }) => {
  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden text-white p-4">
      {/* Book Cover */}
      <div className="relative w-full h-48 mb-4">
        <img
          src={bookCover}
          alt="Book Cover"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* Book Details and Actions */}
      <div className="flex flex-col justify-between h-full">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold">{bookName}</h3>
          <p className="text-lg text-gray-300">{bookAuthor}</p>
          <div className="flex items-center gap-4 mx-3 mt-4 md:flex-row md:justify-center md:gap-6">
            <div className="flex items-center space-x-2">
              <AiTwotoneDislike className="size-7" />
              <span>{dislikes}</span>
            </div>
            <button
              className="bg-white bg-opacity-50 px-8 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => window.open(bookSource, '_blank')}
            >
              Read
            </button>
            <div className="flex items-center space-x-2">
              <AiTwotoneLike className="size-7" />
              <span>{likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
