import React from "react";

function Sort() {
  return (
    <>
      <form>
        <div className="d-sm-flex align-items-center">
          <label className="mr-3 mb-0 font-weight-bold">Sort results by:</label>
          <select
            className="form-control form-control-sm"
            style={{ maxWidth: "150px" }}
          >
            <option value="Relevance">Relevance</option>
            <option value="Date">Date</option>
          </select>
          <button type="submit" className="btn btn-sm btn-primary ml-1">
            Sort
          </button>
        </div>
      </form>
    </>
  );
}

export default Sort;
