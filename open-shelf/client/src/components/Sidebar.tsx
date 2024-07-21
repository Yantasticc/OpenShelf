import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-full p-5 text-center rounded-lg shadow-lg bg-white bg-opacity-20 backdrop-blur-lg flex flex-col h-full max-h-[calc(78vh-60px)]">
      <h2 className="text-2xl font-bold mb-4 text-white">Categories</h2>
      <div className="bg-gray-100 bg-opacity-20 p-4 rounded-lg shadow-inner flex-1 overflow-y-auto backdrop-blur-md">
        <button className="w-full bg-blue-400 hover:bg-opacity-50 text-white font-bold py-2 px-4 mb-4 rounded focus:outline-none focus:shadow-outline">
          Add New Book <b className='text-xl'>+</b>
        </button>
        <ul className="space-y-2">
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            All Books
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Fiction
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Non-Fiction
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Science Fiction
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Fantasy
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Mystery
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Thriller
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Historical Fiction
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Romance
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Biography
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Self-Help
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Health & Wellness
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Science & Nature
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Travel
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Cookbooks
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Children's Books
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Young Adult
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Graphic Novels
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Poetry
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Classic Literature
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Philosophy
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Religion & Spirituality
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Political Science
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Economics
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            True Crime
          </li>
          <li className="bg-white bg-opacity-50 mt-3 mb-5 p-3 cursor-pointer rounded-lg shadow">
            Humor
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
