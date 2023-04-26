import React from "react";

import "./pokeCard.scss";

// props = js object
//   keys
//      name: String
//      onClick: anonymous function
//      className: String

export function PokeCard({ pokemonCardInfos }) {
  return (
    <div className="pokecard-wrapper">
      <h1>Pokecard</h1>
      <h1>Choosed Pokemon: {name}</h1>
    </div>
  );
}
