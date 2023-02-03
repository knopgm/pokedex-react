import React from "react";
import { Container } from "../container/container";
import { Pokecard } from "./pokecard/pokecard";

import "./deckList.scss";
export function DeckList(props) {
  return (
    <div className="deckList">
      <Container>
        <h1> My deck list</h1>
        <div className="deckList_grid">
          <Pokecard />
        </div>
      </Container>
    </div>
  );
}
