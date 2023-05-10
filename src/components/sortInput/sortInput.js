import React from "react";

import "./sortInput.scss";

export function SortInput({ sortValue, onSortingChange }) {
  return (
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
        }}
      >
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
  );
}
