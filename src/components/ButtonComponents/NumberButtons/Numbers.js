import React, {useState} from "react";
import {numbers} from "../../../data"
import NumberButton from "./NumberButton"
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = props => {
  // STEP 2 - add the imported data to state
const [numberState, setNumberState] = useState(numbers);
const [selectedNumber, setSelectedNumber] = useState(numbers[0]);
props.setDisplayState(selectedNumber);
  return (
    <div className="number-container">
      {numberState.map((number, index) => {
         return (
         <NumberButton 
         key={index} 
         button = {number} 
         setSelectedNumber={setSelectedNumber}
         />
         
         );
})}
    </div>
  );
};

export default Numbers
