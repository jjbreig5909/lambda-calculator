import React from "react";

const SpecialButton = props => {
  return (
    <button className="special-button">
      <p>{props.button}</p>
    </button>
  );
};
export default SpecialButton