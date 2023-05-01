import React from "react";
import { Container } from "../container/container";

import "./searchBar.scss";

export function SearchBar({ keyword, onChange }) {
  return (
    <div className="searchbar">
      <Container>
        <div className="searchbar_wrapper">
          <div className="searchbar_img_wrapper">
            <img src={require("../../img/Pokemon_logo.png")} />
          </div>
          <div className="searchbar_input_wrapper">
            <input
              className="searchbar_input"
              key="search-bar"
              placeholder={"Search Pokemon"}
              value={keyword} //2: Value atualized by the user input
              onChange={(e) => onChange(e.target.value)} //1: Listen to changes in the input and actualize the value
            />
          </div>
          <div>Sorting List</div>
        </div>
      </Container>
    </div>
  );
}
