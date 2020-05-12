import React from "react";
import { useDispatch } from "react-redux";

import { sortTypeAction } from "../../actions";

function Sort() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let sort = e.target.value;
    dispatch(sortTypeAction(sort));
  };

  return (
    <form>
      <div className="d-sm-flex align-items-center">
        <label className="mr-sm-3 mb-2 mb-sm-0 font-weight-bold">
          Sort results by:
        </label>
        <div className="d-flex align-items-center">
          <select
            className="form-control form-control-sm mr-1"
            style={{ maxWidth: "150px" }}
            onChange={handleChange}
          >
            <option value="Relevance">Relevance</option>
            <option value="Date">Date</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default Sort;
