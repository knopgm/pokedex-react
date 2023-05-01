import React from "react";
import { Container } from "../container/container";

import "./searchBar.scss";

export function SearchBar({ keyword, onChange }) {
  return (
    <div className="searchbar">
      <Container>
        <h2>Search here</h2>
        <input
          className="searchbar_input"
          key="search-bar"
          placeholder={"Search Pokemon"}
          value={keyword} //2: Value atualized by the user input
          onChange={(e) => onChange(e.target.value)} //1: Listen to changes in the input and actualize the value
        />
      </Container>
    </div>
  );
}
