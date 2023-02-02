import React from "react";

import "./container.scss";

export function Container(props) {
  return <div className="container">{props.children}</div>;
}
