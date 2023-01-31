import React from "react";
import { Container } from "../container/container";

import "./navbar.scss";

export function Navbar() {
  return (
    <div class="navbar">
      <Container>
        <div class="navbar_content">
          <div class="navbar_logo">
            <img src="../img/pokeball.png" />
          </div>
          <div class="navbar_search">
            <h1>Search here</h1>
          </div>
        </div>
      </Container>
    </div>
  );
}
