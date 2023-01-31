import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.css";
import getForecast from "../requests/getForecast";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);

  // attempting to add an event listener to use enter as well as mouse click
  const checkKeyPress = (event) => {
    const { keyCode } = event;
    if (keyCode === 13) {
      console.log(searchText);
      getForecast(searchText);
    }
  };

  return (
    <div className="search-form" onSubmit={onSubmit}>
      <input
        id="searchBox"
        type="text"
        onChange={handleInputChange}
        onKeyDown={checkKeyPress}
        value={searchText}
        placeholder="Enter a city..."
      />
      <button id="button" type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
}

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
