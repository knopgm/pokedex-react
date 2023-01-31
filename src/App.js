import { DeckList } from "./components/deckList/deckList";
import { Navbar } from "./components/navbar/navbar";

import "./styles.scss";

export function App() {
  return (
    <>
      <Navbar />
      <DeckList />
    </>
  );
}
