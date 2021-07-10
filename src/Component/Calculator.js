import React, { useState } from "react";
import "../CssFiles/Pract.css";
import SetInputValue from "./SetInputValue";
import Button from "./Button";

function Calculator(props) {
  const [state, setstate] = useState("");
  const [ans, setans] = useState("");
  const [error, seterror] = useState("");

  const handleclick = (value) => {
    //------concate------

    setstate(state + value);

    //-----ans----

    if (value === "=") {
      let answer;
      try {
        answer = eval(state);
      } catch (err) {
        setans(err);
      }
      if (answer === undefined) {
        setans("math error");
      }
      setans(answer);

      console.log(error);
    }

    //------Clear-----

    if (value === "Clear") {
      setstate("");
      setans("");
    }

    //------ Delete -----

    if (value === "remove") {
      let number = state;
      // console.log(typeof number);
      let newNumber = number.slice(0, number.length - 1);
      setstate(newNumber);
    }
  };

  //------ Button -------

  return (
    <div className="container ">
      {ans ? <SetInputValue value={ans} /> : <SetInputValue value={state} />}

      {/* <div className="row row-1"></div> */}
      <div className="row row-1">
        <Button handleclick={handleclick}>7</Button>
        <Button handleclick={handleclick}>8</Button>
        <Button handleclick={handleclick}>9</Button>
        <Button handleclick={handleclick}>/</Button>
      </div>
      <div className="row row-1">
        <Button handleclick={handleclick}>4</Button>
        <Button handleclick={handleclick}>5</Button>
        <Button handleclick={handleclick}>6</Button>
        <Button handleclick={handleclick}>*</Button>
      </div>
      <div className="row row-1">
        <Button handleclick={handleclick}>1</Button>
        <Button handleclick={handleclick}>2</Button>
        <Button handleclick={handleclick}>3</Button>
        <Button handleclick={handleclick}>+</Button>
      </div>

      <div className="row row-1">
        <Button handleclick={handleclick}>0</Button>
        <Button handleclick={handleclick}>.</Button>
        <Button handleclick={handleclick}>=</Button>
        <Button handleclick={handleclick}>-</Button>
      </div>
      <div className="row row-1">
        <Button handleclick={handleclick}>Clear</Button>
        <Button handleclick={handleclick}>remove</Button>
      </div>
      <h1>{error}</h1>
    </div>
  );
}

export default Calculator;
