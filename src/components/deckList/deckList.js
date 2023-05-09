import React from "react";
import { Container } from "../container/container";
import { PokeButton } from "../pokeButton/pokeButton";

import "./deckList.scss";
// pokemons
//  -> Array
//        {name: "dsadsa"}
export function DeckList({ pokemons, onPokemonClick }) {
  console.log("index", pokemons);

  return (
    <div className="deckList">
      <Container>
        <div className="deckList">
          <ul className="pokemonSearchedList_grid" role="list">
            {pokemons.map((pokemon) => (
              <PokeButton
                name={pokemon.name}
                key={pokemon.name}
                onClick={onPokemonClick}
              />
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
