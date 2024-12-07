import React, { useState } from "react";
import axios from "axios";

const SearchQuotes = () => {
  const [author, setAuthor] = useState("");
  const [quotes, setQuotes] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/api/quotes/search?author=${author}`);
      setQuotes(response.data);
    } catch (err) {
      console.error(err);
      alert("No quotes found or an error occurred");
      setQuotes([]);
    }
  };

  return (
    <div className="mt-4">
      <h3>Search Quotes by Author</h3>
      <form className="mb-3" onSubmit={handleSearch}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-secondary w-100">
          Search
        </button>
      </form>
      {quotes.length > 0 && (
        <ul>
          {quotes.map((quote) => (
            <li key={quote._id}>
              "{quote.text}" — <strong>{quote.author}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchQuotes;
