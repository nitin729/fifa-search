import React from "react";
import "./search.css";

const search = () => {
  return (
    <div className="searchContainer">
      <form action="" method="get" className="searchform">
        <input
          type="search"
          className="searchBar"
          placeholder="Search player"
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default search;
