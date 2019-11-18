import React from "react";

const NumberButton = props => {
  return (
    <button className="number-button">
      <p>{props.button}</p>
    </button>
  );
};

export default NumberButton
