import React from "react";
import { Container } from "../container/container";

import "./searchBar.scss";

export function SearchBar({ keyword, sortValue, onChange, onSortingChange }) {
  return (
    <div className="searchbar">
      <Container>
        <div className="searchbar_wrapper">
          <div className="searchbar_img_wrapper">
            <img src={require("../../img/logo.png")} />
          </div>
          <div className="searchbar_sorting_wrapper">
            <div className="searchbar_input_wrapper">
              <input
                className="searchbar_input"
                key="search-bar"
                placeholder={"Search Pokemon"}
                value={keyword} //2: Value atualized by the user input
                onChange={(e) => onChange(e.target.value)} //1: Listen to changes in the input and actualize the value
              />
            </div>
            <div className="sorting_wrapper">
              <label htmlFor="sorting" className="sorting_label">
                Sort by:
              </label>
              <select
                className="sorting_dropdown"
                name="sorting"
                id="options"
                value={sortValue}
                onChange={(e) => {
                  onSortingChange(e.target.value);
                }} //3: Listen to a Change on the selection list
              >
                <option value="none">None</option>
                <optgroup label="Numerically">
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </optgroup>
                <optgroup label="Alphabetically">
                  <option value="az">A - Z</option>
                  <option value="za">Z - A</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
