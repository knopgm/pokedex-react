import React, { useState, useEffect } from "react";
import { DeckList } from "./components/deckList/deckList";
import { Navbar } from "./components/navbar/navbar";
import { SearchBar } from "./components/searchBar/searchBar";
import { Pokecard } from "./components/pokecard/pokecard";
import axios from "axios";

import "./styles.scss";

//fetch api tutorial: https://www.pluralsight.com/guides/access-data-from-an-external-api-into-a-react-component
const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=5";

export function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState(null);

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
  //4: When something is typed on the serach bar input, the value came back to be save in the keyword state
  const updateKeyword = (keyword) => {
    setKeyword(keyword);
  };

  // 5: Function to use the keyword saved to filter on the pokemon list
  const filtered = pokemonData.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(keyword.toLowerCase());
  });
  console.log("filtered api", filtered);

  const displayPokemon = () => {
    if (filtered) {
      //6: if is anything on the filtered function, it will select the display cards from this list
      return (
        <ul className="pokemonSearchedList" role="list">
          {filtered.map((pokemon) => (
            <Pokecard name={pokemon.name} key={pokemon.name} />
          ))}
        </ul>
      );
    } else {
      //3: if there is nothing to be filtered, it will display the pokemon entire list
      return (
        <ul className="pokemonSearchedList" role="list">
          {pokemonData.map((pokemon) => (
            <Pokecard name={pokemon.name} key={pokemon.name} />
          ))}
        </ul>
      );
    }
  };

  return (
    <>
      <Navbar />
      <SearchBar keyword={keyword} onChange={updateKeyword} />
      {isLoading && <div className="loading">Loading...</div>}
      {error && <div>{`Problem fetching the Pokemon data - ${error}`}</div>}
      <DeckList pokemonFiltered={displayPokemon} />
    </>
  );
}
