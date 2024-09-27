import React from "react";

const OperatorButton = props => {
  return (
    <button className = "operator-button">
      <p>{props.button}</p>
    </button>
  );
};

export default OperatorButton
