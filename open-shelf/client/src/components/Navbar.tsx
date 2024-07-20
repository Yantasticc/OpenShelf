import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import QuoteBox from "./QuoteBox";

const Navbar = () => {

  const [username, setUsername] = useState('')

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="flex items-center flex-col p-5 md:flex-row lg:flex-row lg:justify-evenly lg:space-x-9">
      <div className="p-5 text">
        <h1 className="text-white font-bold text-4xl">OpenShelf</h1>
      </div>
      <div className="p-5 ">
        <div className="">
          <QuoteBox />
        </div>
      </div>
      <div className="text-white font-bold text-3xl lg:text-2xl">
        <button className="p-3 rounded-lg pointer">
          <Link to='/profile'>Welcome, @{username}</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
