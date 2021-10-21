import React from "react";
import "./search.css";

const Search = ({
  playerData,
  searchBtnClick,
  inputTextChange,
  inputClear,
}) => {
  return (
    <div className="searchContainer">
      <div className="searchform">
        <input
          type="search"
          className="searchBar"
          placeholder="Search player"
          onChange={inputTextChange}
          onClick={inputClear}
        />
        <button className="btn" onClick={searchBtnClick}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
