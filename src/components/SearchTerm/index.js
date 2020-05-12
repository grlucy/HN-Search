import React from "react";

function SearchTerm(props) {
  return (
    <div className="d-flex align-items-center mb-2" id={props.index}>
      <div className="rounded-left bg-light p-2 flex-grow-1">
        <p>{props.term}</p>
      </div>
      <div className="rounded-right bg-light p-2">
        <p>
          <i className="fas fa-times"></i>
        </p>
      </div>
    </div>
  );
}

export default SearchTerm;
