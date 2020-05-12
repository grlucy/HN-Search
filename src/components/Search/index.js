import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Searchbar from "../Searchbar";
import SearchTerm from "../SearchTerm";
import { viewSearchAction } from "../../actions";

function Search() {
  const viewSearch = useSelector((state) => state.viewSearch);
  const dispatch = useDispatch();

  return (
    <div className="bg-primary rounded p-3 mb-3">
      <div
        className="d-flex align-items-center justify-content-between"
        onClick={() => dispatch(viewSearchAction())}
      >
        <h4 className="text-white mb-0">Search</h4>
        <h4 className="text-white mb-0">
          <i
            className={viewSearch ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          ></i>
        </h4>
      </div>
      {viewSearch && (
        <>
          <Searchbar />
          <p className="font-weight-bold text-white my-3">
            Previous Search Terms:
          </p>
          <div style={{ maxHeight: "192px", overflow: "auto" }}>
            <SearchTerm />
            <SearchTerm />
            <SearchTerm />
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
