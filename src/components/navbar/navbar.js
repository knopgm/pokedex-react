import React from "react";
import { Container } from "../container/container";

import "./navbar.scss";

export function Navbar() {
  return (
    <div className="navbar">
      <Container>
        <div className="navbar_content">
          <div className="navbar_logo">
            <img src={require("../../img/pokeball.png")} />
          </div>
          <div className="navbar_between"></div>
        </div>
      </Container>
    </div>
  );
}
