import React, { useState, useEffect } from "react";
import { DeckList } from "./components/deckList/deckList";
import { TopBar } from "./components/topBar/topBar";
import { PokeCard } from "./components/pokeCard/pokeCard";
import { Loader } from "./components/loading/loading";
import { SearchInput } from "./components/searchInput/searchInput";
import { SortInput } from "./components/sortInput/sortInput";
import axios from "axios";

import "./variables.css";
import "./styles.scss";
import "./App.scss";
import { Container } from "./components/container/container";

//fetch api tutorial: https://www.pluralsight.com/guides/access-data-from-an-external-api-into-a-react-component
const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=600";

export function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPokemonList, setCurrentPokemonList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState(null);
  const [isOpenCard, setOpenCard] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [sortPokemonsBy, setSortPokemonsBy] = useState("ascending");

  //1: Will call the function that gets the pokemon infos only once.
  //This use effect is used when the app is mounted.
  useEffect(() => {
    getPokemonListWithAxios();
  }, []);

  //2: Function to get the pokemon data and save it in a state.
  const getPokemonListWithAxios = async () => {
    try {
      const response = await axios.get(apiUrl);
      setPokemonData(response.data.results);
      setError(null);
    } catch (err) {
      setError(err.message);
      setPokemonData(null);
    } finally {
      setLoading(false);
    }
  };

  /**
   * This side effect runs every time one of its dependencies change:
   *   - pokemonData: with the fetched infos from pokemon API;
   *   - keyword: when the user type something in the search input;
   *   - sortPokemonsBy: when the user choose a option to sort the pokemon list
   *
   * Ultimately, the pokemon list presented to the user is computed based on the pre-defined filtering and sorting rules, which is used to prevent unecessary re-renders.
   */
  useEffect(() => {
    let filteredPokemons = pokemonData;

    // Condition to update the declared variable "filteredPokemons", if a typed keyword has length > 0
    if (keyword && keyword.length > 0) {
      filteredPokemons = pokemonData.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(keyword.toLowerCase());
      });
    }

    // Sorting the filtered pokemon list
    let sortedPokemons = filteredPokemons;

    if (sortPokemonsBy === "descending") {
      sortedPokemons = [...filteredPokemons].reverse();
    } else if (sortPokemonsBy === "az") {
      sortedPokemons = [...filteredPokemons].sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
    } else if (sortPokemonsBy === "za") {
      sortedPokemons = [...filteredPokemons].sort((a, b) =>
        a.name > b.name ? -1 : 1
      );
    }

    // Set the pokemon list presented to the user
    setCurrentPokemonList(sortedPokemons);
  }, [pokemonData, keyword, sortPokemonsBy]);

  // search bar tutorial: https://geshan.com.np/blog/2022/10/react-search-bar/
  // When something is typed on the search bar input, the value came back to be save in the keyword state
  const updateKeyword = (keyword) => {
    setKeyword(keyword);
  };

  // Function to set to true the state of a open pokemon card
  const handlePokemonClick = (pokemonName) => {
    const choosedPokemonInfos = pokemonData.find((pokemon) => {
      return pokemon.name === pokemonName;
    });

    setSelectedPokemon(choosedPokemonInfos);
    setOpenCard(true);
  };

  // Function to set openCard state to false and close the modal
  const handleCloseModal = () => {
    setOpenCard(false);
  };

  // Function to set a new value after the user choosed a sorting list option
  const handleOnSortingChange = (newValue) => {
    setSortPokemonsBy(newValue);
  };

  return (
    <>
      <TopBar>
        <SearchInput keyword={keyword} onChange={updateKeyword} />
      </TopBar>
      {isLoading && <Loader />}
      {error && <div>{`Problem fetching the Pokemon data - ${error}`}</div>}
      {isOpenCard && (
        <PokeCard
          name={selectedPokemon.name}
          url={selectedPokemon.url}
          closePokeCard={handleCloseModal}
        />
      )}
      <Container>
        <div className="app_content">
          <SortInput
            onSortingChange={handleOnSortingChange}
            sortValue={sortPokemonsBy}
          />
          <DeckList
            pokemons={currentPokemonList}
            onPokemonClick={handlePokemonClick}
          />
        </div>
      </Container>
    </>
  );
}
