import React from "react";

import "./searchBar.scss";

export function SearchBar({ keyword, onChange }) {
  return (
    <div className="searchbar">
      <h1>Search here</h1>
      <input
        className="searchbar_input"
        key="search-bar"
        placeholder={"search pokemon"}
        value={keyword} //2: Value atualized by the user input
        onChange={(e) => onChange(e.target.value)} //1: Listen to changes in the input and actualize the value
      />
    </div>
  );
}
