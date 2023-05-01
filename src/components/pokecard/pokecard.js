import React, { useState, useEffect } from "react";
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
      console.log("fetched api", response.data);
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
      {isLoading && <div className="loading">Loading...</div>}
      {pokemonData && (
        <div className="pokecard-wrapper">
          <div className="pokecard-topbar">
            <h2>#{pokemonData.id}</h2>
            <h2 className="topbar_name">{pokemonData.name}</h2>
            <h2 role="button" onClick={handleClick}>
              x
            </h2>
          </div>
          <div className="pokecard-content">
            <div>Height: {pokemonData.height}</div>
            <div>Weight: {pokemonData.weight}</div>
            <div>
              Types:{pokemonData.types.map((index) => ` - ${index.type.name}`)}
            </div>
            <div>
              Abilities:{" "}
              {pokemonData.abilities.map((index) => ` - ${index.ability.name}`)}
            </div>
            <div className="pokecard-image">
              <img src={pokemonData.sprites.other.dream_world.front_default} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
