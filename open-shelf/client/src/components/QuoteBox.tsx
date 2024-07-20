import React, { useState, useEffect } from "react";
import axios from "axios";

export default function QuoteBox() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const getQuote = async () => {
    try {
      const res = await axios.get('http://localhost:8000/quote');
      const data = res.data;
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.log("Error fetching the quote", error);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="flex text-center bg-slate-200 p-5 rounded-lg text-lg ">
      <div>
        <div>
          <p className="font-bold">Quote of the day:</p>"{quote}."
        </div>
        <div>
        - {author}
        </div>
      </div>
    </div>
  );
}
