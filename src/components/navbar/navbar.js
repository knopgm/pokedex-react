import React from "react";
import { Container } from "../container/container";

import "./navbar.scss";

export function Navbar() {
  return (
    <div className="navbar">
      <Container>
        <div className="navbar_content">
          <div className="navbar_logo">
            <img src="../img/pokeball.png" />
          </div>
          <div className="navbar_search">
            <h1>Search here</h1>
          </div>
        </div>
      </Container>
    </div>
  );
}
