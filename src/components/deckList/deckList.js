import React from "react";
import { Container } from "../container/container";
import { PokeButton } from "../pokeButton/pokeButton";

import "./deckList.scss";
// pokemons
//  -> Array
//        {name: "dsadsa"}
export function DeckList({ pokemons, onPokemonClick }) {
  return (
    <div className="deckList">
      <Container>
        <h1> My deck list</h1>
        <div className="deckList_grid">
          <ul className="pokemonSearchedList" role="list">
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
