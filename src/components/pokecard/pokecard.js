import React, { useState, useEffect } from "react";
import { PokeCardContent } from "./pokeCardContent/pokeCardContent";
import axios from "axios";

import "./pokeCard.scss";

// props = js object
//   keys
//      name: String
//      onClick: anonymous function
//      className: String

export function PokeCard({ url, closePokeCard }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //1: Will call the function that gets the pokemon infos only 1x -> []
  useEffect(() => {
    getPokemonWithAxios();
  }, [url]);

  //2: Function to get the pokemon data and save it in a state
  const getPokemonWithAxios = async () => {
    try {
      const response = await axios.get(url);
      setPokemonData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setPokemonData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    closePokeCard();
  };

  return (
    <>
      <div className="pokecard-overlay" onClick={handleClick}></div>
      <div className="pokecard-wrapper">
        {pokemonData && (
          <>
            {isLoading && <div className="loading">Loading...</div>}
            <div className="pokecard-topbar">
              <h2>#{pokemonData.id}</h2>
              <h2 className="topbar_name">{pokemonData.name}</h2>
              <h2 role="button" onClick={handleClick} className="topbar_x">
                x
              </h2>
            </div>
            <PokeCardContent
              height={pokemonData.height}
              weight={pokemonData.weight}
              types={pokemonData.types}
              abilities={pokemonData.abilities}
              sprites={pokemonData.sprites}
            />
            <div className="pokecard-button_close_wrapper">
              <div className="pokecard-button_close" onClick={handleClick}>
                Close
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
