import React from "react";

function Ball({ number }) {
  let backgroundColor;
  if (number >= 1 && number <= 10) {
    backgroundColor = "#fcc43d";
  } else if (number <= 20) {
    backgroundColor = "#8cc6e7";
  } else if (number <= 30) {
    backgroundColor = "#f18d80";
  } else if (number <= 40) {
    backgroundColor = "#a7a2de";
  } else {
    backgroundColor = "#6bce9e";
  }

  return (
    <span id="ball" style={{ backgroundColor }}>
      {number}
    </span>
  );
}

export default React.memo(Ball);
