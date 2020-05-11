import React from "react";

function Button(props) {
  return (
    <button type="submit" className="btn btn-sm btn-dark">
      {props.text}
    </button>
  );
}

export default Button;
