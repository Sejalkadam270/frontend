import React from "react";
import AddQuote from "./components/AddQuote";
import RandomQuote from "./components/RandomQuote";
import SearchQuotes from "./components/SearchQuotes";
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center mb-4">Quote of the Day</h1>
      <div className="row">
        {/* First Column: Random Quote */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <RandomQuote />
        </div>
        
        {/* Second Column: Add and Search */}
        <div className="col-md-6">
          <div className="mb-4">
            <AddQuote />
          </div>
          <SearchQuotes />
        </div>
      </div>
    </div>
  );
};

export default App;
