import React from "react";
import { Container } from "../container/container";

import "./deckList.scss";
export function DeckList({ pokemonFiltered }) {
  return (
    <div className="deckList">
      <Container>
        <h1> My deck list</h1>
        <div className="deckList_grid">{pokemonFiltered()}</div>
      </Container>
    </div>
  );
}
