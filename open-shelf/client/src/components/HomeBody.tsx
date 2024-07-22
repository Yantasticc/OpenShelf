import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Pagination from './Pagination';
import ItemCard from './ItemCard';
import Featured from './Featured';
import axios from 'axios';
import { Book } from '../constants/types';  // Import the Book type

const HomeBody = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All Books');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/book/all');
        setBooks(response.data);
        setFilteredBooks(response.data); // Set filteredBooks initially to all books
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All Books') {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(books.filter(book => book.bookCategory === selectedCategory));
    }
  }, [selectedCategory, books]);

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:space-x-4 p-4 overflow-hidden">
      <div className="hidden md:block w-1/4 h-full">
        <Sidebar onCategorySelect={setSelectedCategory} />
      </div>
      <div className="w-full md:w-2/4 flex flex-col">
        <div className="flex justify-center mb-4">
          <Pagination />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 p-4">
            {filteredBooks.map((book) => (
              <ItemCard
                key={book._id}
                _id={book._id}
                bookName={book.bookName}
                bookAuthor={book.bookAuthor}
                bookCover={book.bookCover}
                likes={book.likes}
                dislikes={book.dislikes}
                bookSource={book.bookSource}
                bookCategory={book.bookCategory}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:block w-1/4">
        <Featured />
      </div>
    </div>
  );
};

export default HomeBody;
