import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../Button";
import { searchTermAction, addHistoryAction } from "../../actions";

function Searchbar() {
  const term = useSelector((state) => state.searchTerm);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(searchTermAction(e.target.value.trim()));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHistoryAction(term));
    dispatch(searchTermAction(""));
  };

  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control form-control-sm mb-1"
          placeholder="Search term"
          onChange={handleChange}
          value={term}
        />
        <Button text="Search" />
      </form>
    </div>
  );
}

export default Searchbar;
