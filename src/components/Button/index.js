import React from "react";

function Button(props) {
  return (
    <button type="submit" className="btn btn-sm btn-primary ml-1">
      {props.text}
    </button>
  );
}

export default Button;
