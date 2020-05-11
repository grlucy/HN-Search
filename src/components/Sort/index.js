import React from "react";

import Button from "../Button";

function Sort() {
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
          >
            <option value="Relevance">Relevance</option>
            <option value="Date">Date</option>
          </select>
          <Button text="Sort" />
        </div>
      </div>
    </form>
  );
}

export default Sort;
