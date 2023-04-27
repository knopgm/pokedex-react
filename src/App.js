import React, { useState, useEffect } from "react";
import { DeckList } from "./components/deckList/deckList";
import { Navbar } from "./components/navbar/navbar";
import { SearchBar } from "./components/searchBar/searchBar";
import { PokeCard } from "./components/pokeCard/pokeCard";
import axios from "axios";

import "./styles.scss";

//fetch api tutorial: https://www.pluralsight.com/guides/access-data-from-an-external-api-into-a-react-component
const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=5";

export function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState(null);
  const [isOpenCard, setOpenCard] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  //1: Will call the function that gets the pokemon infos only 1x -> []
  useEffect(() => {
    getPokemonListWithAxios();
  }, []);

  //2: Function to get the pokemon data and save it in a state
  const getPokemonListWithAxios = async () => {
    try {
      const response = await axios.get(apiUrl);
      setPokemonData(response.data.results);
      setError(null);
      console.log("fetched api", response.data.results);
    } catch (err) {
      setError(err.message);
      setPokemonData(null);
    } finally {
      setLoading(false);
    }
  };

  // search bar tutorial: https://geshan.com.np/blog/2022/10/react-search-bar/
  //3: When something is typed on the search bar input, the value came back to be save in the keyword state
  const updateKeyword = (keyword) => {
    setKeyword(keyword);
  };

  //4: Variable with the pokemon list that could be changed if something is typed on the search input
  let filteredPokemons = pokemonData;

  //5: Condicion to update the declared variable "filceredPokemons", if is a keyword typed with a length > 0
  if (keyword && keyword.length > 0) {
    filteredPokemons = pokemonData.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(keyword.toLowerCase());
    });
  }

  //6: Function to set to true the state of a open pokemon card
  const handlePokemonClick = (pokemonName) => {
    console.log("clicked on", pokemonName);

    const choosedPokemonInfos = pokemonData.find((pokemon) => {
      return pokemon.name === pokemonName;
    });

    setSelectedPokemon(choosedPokemonInfos);
    setOpenCard(true);
  };

  console.log(selectedPokemon);

  return (
    <>
      <Navbar />
      <SearchBar keyword={keyword} onChange={updateKeyword} />
      {isLoading && <div className="loading">Loading...</div>}
      {error && <div>{`Problem fetching the Pokemon data - ${error}`}</div>}
      {isOpenCard && (
        <PokeCard name={selectedPokemon.name} url={selectedPokemon.url} />
      )}
      <DeckList
        pokemons={filteredPokemons}
        onPokemonClick={handlePokemonClick}
      />
    </>
  );
}
