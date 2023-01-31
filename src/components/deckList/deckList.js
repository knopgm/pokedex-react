import React from "react";
import { Container } from "../container/container";

export function DeckList() {
  return (
    <div class="deckList">
      <Container>
        <h1> My deck list</h1>
        <div class="deckList_grid">
          <div class="pokecard">Pokecard</div>
        </div>
      </Container>
    </div>
  );
}
