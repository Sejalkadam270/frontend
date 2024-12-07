import React, { useState } from "react";
import axios from "axios";

const AddQuote = () => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/quotes/add", { text, author });
      alert("Quote added successfully!");
      setText("");
      setAuthor("");
    } catch (err) {
      console.error(err);
      alert("Failed to add quote");
    }
  };

  return (
    <form className="p-3 border rounded" onSubmit={handleSubmit}>
      <h3>Add a New Quote</h3>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Quote Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Add Quote
      </button>
    </form>
  );
};

export default AddQuote;
