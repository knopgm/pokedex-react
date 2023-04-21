import React from "react";

import "./pokecard.scss";

// props = js object
//   keys
//      name: String
//      onClick: anonymous function
//      className: String

export function Pokecard(props) {
  const { name, onClick } = props;

  handleCardClick = (e) => {
    console.log(e);
  };

  return (
    <div className="pokecard-wrapper" onClick={handleCardClick}>
      <h1>Pokecard</h1>
      <h1>{name}</h1>
    </div>
  );
}
