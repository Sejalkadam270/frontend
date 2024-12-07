import React, { useEffect, useState } from "react";
import axios from "axios";

const RandomQuote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/quotes/random");
        setQuote(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchQuote();
  }, []);

  return (
    <div className="card text-center">
      <div className="card-body">
        {quote ? (
          <>
            <p className="card-text" style={{ fontStyle: "italic" }}>
              "{quote.text}"
            </p>
            <h5 className="card-title">— {quote.author}</h5>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default RandomQuote;
