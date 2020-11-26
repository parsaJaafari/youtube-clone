import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label htmlFor="search">Video Search</label>
          <input
            onChange={(event) => setTerm(event.target.value)}
            type="text"
            id="search"
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
