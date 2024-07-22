import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  'All Books', 'Biography', 'Children\'s Books', 'Classic Literature', 'Cookbooks', 
  'Economics', 'Fantasy', 'Fiction', 'Graphic Novels', 'Health & Wellness', 
  'Historical Fiction', 'Humor', 'Mystery', 'Non-Fiction', 'Philosophy', 
  'Poetry', 'Political Science', 'Religion & Spirituality', 'Romance', 
  'Science & Nature', 'Science Fiction', 'Self-Help', 'Thriller', 'Travel', 
  'True Crime', 'Young Adult'
];

interface SidebarProps {
  onCategorySelect: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Books');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="w-full p-5 text-center rounded-lg shadow-lg bg-white bg-opacity-20 backdrop-blur-lg flex flex-col h-full max-h-[calc(78vh-60px)]">
      <h2 className="text-2xl font-bold mb-4 text-white">Categories</h2>
      <div className="bg-gray-100 bg-opacity-20 p-4 rounded-lg shadow-inner flex-1 overflow-y-auto backdrop-blur-md">
        <button className="w-full bg-blue-400 hover:bg-opacity-50 text-white font-bold py-2 px-4 mb-4 rounded-md focus:outline-none focus:shadow-outline">
          <Link to='/add-book'>
            Add New Book <b className='text-xl'>+</b>
          </Link>
        </button>
        <ul className="space-y-2">
          {categories.map(category => (
            <li
              key={category}
              className={`mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow ${
                selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
