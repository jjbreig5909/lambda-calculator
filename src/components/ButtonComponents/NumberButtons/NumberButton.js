import React from "react";

const NumberButton = props => {
  return (
    <button className="number-button" onClick={()=> props.setSelectedNumber(props.button)}>
      <p>{props.button}</p>
    </button>
  );
};

export default NumberButton
