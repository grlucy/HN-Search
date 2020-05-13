import React from "react";
import { useDispatch } from "react-redux";

import { addHistoryAction, deleteHistoryAction } from "../../actions";

function SearchTerm(props) {
  const dispatch = useDispatch();

  return (
    <div className="d-flex mb-2" id={props.index}>
      <div
        className="rounded-left bg-white p-2 flex-grow-1"
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(addHistoryAction(props.term))}
      >
        <p>{props.term}</p>
      </div>
      <div
        className="rounded-right bg-light p-2"
        style={{ borderLeft: "1px solid #ddd", cursor: "pointer" }}
        onClick={() => dispatch(deleteHistoryAction(props.index))}
      >
        <p>
          <i className="fas fa-times"></i>
        </p>
      </div>
    </div>
  );
}

export default SearchTerm;
