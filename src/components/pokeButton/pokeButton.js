import React from "react";

import "./pokeButton.scss";

// props = js object
//   keys
//      name: String
//      onClick: anonymous function
//      className: String

export function PokeButton(props) {
  const { name, onClick } = props;

  const handleClick = () => {
    onClick(name);
  };

  return (
    <div className="pokebutton-wrapper" onClick={handleClick}>
      <h2 className="pokebutton" role="button">
        {name}
      </h2>
    </div>
  );
}
