import React from "react";
import { useDispatch } from "react-redux";

import Button from "../Button";
import { searchAction } from "../../actions";

function Searchbar() {
  const dispatch = useDispatch();

  let term = "Redux";

  const handleChange = (e) => {
    term = e.target.value.trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchAction(term));
  };

  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control form-control-sm mb-1"
          placeholder="Search term"
          onChange={handleChange}
        />
        <Button text="Search" />
      </form>
    </div>
  );
}

export default Searchbar;
