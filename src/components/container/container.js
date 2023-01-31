import React from "react";
import "./container.scss";

export function Container(props) {
  return <div class="container">{props.children}</div>;
}
