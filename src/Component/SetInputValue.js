import React, { useState } from "react";
import "../CssFiles/Pract.css";

function SetInputValue({ value }) {
  return (
    <React.Fragment>
      <input type="text" value={value} className="textField" readOnly />
    </React.Fragment>
  );
}

export default SetInputValue;
