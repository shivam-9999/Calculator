import React from "react";
import "../CssFiles/Pract.css";

function Button(props) {
  const handleclick = (e) => {
    props.handleclick(e.target.value);
  };

  return (
    <div>
      <input
        type="button"
        className="col-1"
        name="btn"
        value={props.children}
        onClick={handleclick}
      />
    </div>
  );
}
export default Button;
