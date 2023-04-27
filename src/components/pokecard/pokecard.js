import React, { useState, useEffect } from "react";
import axios from "axios";

import "./pokeCard.scss";

// props = js object
//   keys
//      name: String
//      onClick: anonymous function
//      className: String

export function PokeCard({ name, url }) {
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

  return (
    <>
      {isLoading && <div className="loading">Loading...</div>}
      {pokemonData && (
        <div className="pokecard-wrapper">
          <div className="pokecard-topbar">
            <h1>{pokemonData.id}</h1>
            <h1> {pokemonData.name.toUpperCase()}</h1>
            <h1>x</h1>
          </div>
          <div>Height: {pokemonData.height}</div>
          <div>Weight: {pokemonData.weight}</div>
          <div>
            Types:{pokemonData.types.map((index) => ` - ${index.type.name}`)}
          </div>
          <div>
            Abilities:{" "}
            {pokemonData.abilities.map((index) => ` - ${index.ability.name}`)}
          </div>
          <div>
            Image:{" "}
            <img src={pokemonData.sprites.other.dream_world.front_default} />
          </div>
        </div>
      )}
    </>
  );
}
