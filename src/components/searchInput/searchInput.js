import React from "react";

import "./searchInput.scss";

export function SearchInput({ keyword, onChange }) {
  return (
    <div className="search_input_wrapper">
      <input
        className="search_input"
        key="search-bar"
        placeholder={"Search Pokemon"}
        value={keyword} //2: Value atualized by the user input
        onChange={(e) => onChange(e.target.value)} //1: Listen to changes in the input and actualize the value
      />
    </div>
  );
}
