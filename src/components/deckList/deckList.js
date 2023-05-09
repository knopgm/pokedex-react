import React from "react";
import { Container } from "../container/container";
import { PokeButton } from "../pokeButton/pokeButton";

import "./deckList.scss";

export function DeckList({ pokemons, onPokemonClick }) {
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
