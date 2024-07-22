import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Pagination from './Pagination';
import ItemCard from './ItemCard';
import Featured from './Featured';
import axios from 'axios';

// Define the Book interface
interface Book {
  _id: string;
  bookName: string;
  bookAuthor: string;
  bookCover: string;
  bookCategory: string;
  bookSource: string;
  likes: number;
  dislikes: number;
}

const HomeBody = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/book/all');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:space-x-4 p-4 overflow-hidden">
      <div className="hidden md:block w-1/4 h-full">
        <Sidebar />
      </div>
      <div className="w-full md:w-2/4 flex flex-col">
        <div className="flex justify-center mb-4">
          <Pagination />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 p-4">
            {books.map((book) => (
              <ItemCard
                key={book._id}
                bookName={book.bookName}
                bookAuthor={book.bookAuthor}
                bookCover={book.bookCover}
                likes={book.likes}
                dislikes={book.dislikes}
                bookSource={book.bookSource}
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
