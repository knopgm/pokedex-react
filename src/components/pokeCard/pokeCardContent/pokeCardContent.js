import React from "react";

import "./pokeCardContent.scss";

export function PokeCardContent({ height, weight, types, abilities, sprites }) {
  return (
    <>
      <div className="pokecard-content">
        <div>
          <span className="pokecard-content_bold">Height:</span> {height} cm
        </div>
        <div>
          <span className="pokecard-content_bold">Weight:</span> {weight / 10}{" "}
          kg
        </div>
        <div>
          <span className="pokecard-content_bold">Types:</span>
          {types.map((index) => ` - ${index.type.name}`)}
        </div>
        <div>
          <span className="pokecard-content_bold">Abilities:</span>{" "}
          {abilities.map((index) => ` - ${index.ability.name}`)}
        </div>
        <div className="pokecard-image">
          <img src={sprites.other.dream_world.front_default} />
        </div>
      </div>
    </>
  );
}
