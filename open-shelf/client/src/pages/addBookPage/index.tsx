import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import backgroundImg from '../../assets/add-book.jpg';
import { FaBook, FaUser, FaImage, FaListAlt, FaLink } from 'react-icons/fa';
import axios from 'axios';

const AddBook = () => {
 
  const [formData, setFormData ] = useState({
    bookName: '',
    bookAuthor: '',
    bookImage: '',
    bookCategory: '',
    bookSource: '',
  })

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    try {
      const res = await axios.post('http://localhost:8000/book/create', {
        bookName: formData.bookName,
        bookAuthor: formData.bookAuthor,
        bookCover: formData.bookImage,
        bookCategory: formData.bookCategory,
        bookSource: formData.bookSource,
      });
      alert('Book created successfully')
      console.log(res.data)
      navigate('/home');
    } catch (error:any) {
      console.log(error)
    }
  };

  const categories = [
    'Biography', 'Children\'s Books', 'Classic Literature', 'Cookbooks', 'Economics', 'Fantasy', 'Fiction', 
    'Graphic Novels', 'Health & Wellness', 'Historical Fiction', 'Humor', 'Mystery', 'Non-Fiction', 
    'Philosophy', 'Poetry', 'Political Science', 'Religion & Spirituality', 'Romance', 'Science & Nature', 
    'Science Fiction', 'Self-Help', 'Thriller', 'Travel', 'True Crime', 'Young Adult'
  ];

  return (
    <div className="relative h-screen w-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <form 
          className="bg-white bg-opacity-60 p-10 rounded-3xl shadow-2xl backdrop-blur-md w-3/4 max-w-3xl"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Add New Book</h2>
          <div className="mb-6">
            <label className="block text-slate-900 text-xl font-bold mb-2" htmlFor="bookName">
              <FaBook className="inline mr-2" /> Book Name
            </label>
            <input
              type="text"
              name="bookName"
              value={formData.bookName}
              onChange={handleChange}
              className="w-full p-3 rounded-full border-2 focus:outline-none focus:ring-4 focus:ring-slate-950"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-slate-900 text-xl font-bold mb-2" htmlFor="bookAuthor">
              <FaUser className="inline mr-2" /> Author
            </label>
            <input
              type="text"
              name="bookAuthor"
              value={formData.bookAuthor}
              onChange={handleChange}
              className="w-full p-3 rounded-full border-2 focus:outline-none focus:ring-4 focus:ring-slate-950"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-slate-900 text-xl font-bold mb-2" htmlFor="bookCover">
              <FaImage className="inline mr-2" /> Cover Image URL
            </label>
            <input
              type="text"
              name="bookImage"
              value={formData.bookImage}
              onChange={handleChange}
              className="w-full p-3 rounded-full border-2 focus:outline-none focus:ring-4 focus:ring-slate-950"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-slate-900 text-xl font-bold mb-2" htmlFor="bookCategory">
              <FaListAlt className="inline mr-2" /> Category
            </label>
            <select
              name="bookCategory"
              value={formData.bookCategory}
              onChange={handleChange}
              className="w-full p-3 rounded-full border-2 focus:outline-none focus:ring-4 focus:ring-slate-950"
              required
            >
              <option value="">Select a Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-slate-900 text-xl font-bold mb-2" htmlFor="bookSource">
              <FaLink className="inline mr-2" /> Book Source URL
            </label>
            <input
              type="text"
              name="bookSource"
              onChange={handleChange}
              value={formData.bookSource}
              className="w-full p-3 rounded-full border-2 focus:outline-none focus:ring-4 focus:ring-slate-950"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-4 focus:ring-slate-950"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
