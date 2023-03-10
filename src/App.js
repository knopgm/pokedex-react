import React, { useState, useEffect } from "react";
import { DeckList } from "./components/deckList/deckList";
import { Navbar } from "./components/navbar/navbar";
import axios, { isCancel, AxiosError } from "axios";

import "./styles.scss";

//https://www.pluralsight.com/guides/access-data-from-an-external-api-into-a-react-component
const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=100";

export function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getPokemonListWithAxios();
  }, []);

  const getPokemonListWithAxios = async () => {
    const response = await axios.get(apiUrl);
    setPokemonData(response.data.results);
    setLoading(false);
    console.log(response.data.results);
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <Navbar pokemonData={pokemonData} />
      <DeckList pokemonData={pokemonData} />
      <h1>{pokemonData[0].name}</h1>
    </>
  );
}
